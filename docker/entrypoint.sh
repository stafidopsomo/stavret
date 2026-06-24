#!/usr/bin/env bash
set -euo pipefail

DB_HOST="${WORDPRESS_DB_HOST:-${MYSQLHOST:-${MYSQL_HOST:-}}}"
DB_PORT="${WORDPRESS_DB_PORT:-${MYSQLPORT:-${MYSQL_PORT:-3306}}}"
DB_NAME="${WORDPRESS_DB_NAME:-${MYSQLDATABASE:-${MYSQL_DATABASE:-railway}}}"
DB_USER="${WORDPRESS_DB_USER:-${MYSQLUSER:-${MYSQL_USER:-root}}}"
DB_PASSWORD="${WORDPRESS_DB_PASSWORD:-${MYSQLPASSWORD:-${MYSQL_PASSWORD:-}}}"

DB_URL="${DATABASE_URL:-${MYSQL_URL:-${MARIADB_URL:-}}}"

if [ -n "$DB_URL" ] && [ -z "${WORDPRESS_DB_HOST:-}" ] && [ -z "${MYSQLHOST:-}" ] && [ -z "${MYSQL_HOST:-}" ]; then
  export DB_URL
  eval "$(php -r '
    $url = parse_url(getenv("DB_URL"));
    if (!$url) { exit(0); }
    $path = isset($url["path"]) ? ltrim($url["path"], "/") : "";
    foreach ([
      "DB_HOST" => $url["host"] ?? "",
      "DB_PORT" => $url["port"] ?? "3306",
      "DB_NAME" => $path ?: "railway",
      "DB_USER" => $url["user"] ?? "root",
      "DB_PASSWORD" => $url["pass"] ?? "",
    ] as $k => $v) {
      echo $k . "=" . escapeshellarg($v) . "; export " . $k . ";\n";
    }
  ')"
fi

# Railway/WordPress commonly uses WORDPRESS_DB_HOST="host:port". The mysql
# CLI needs host and port split into separate flags.
if [[ "$DB_HOST" == *:* && "$DB_HOST" != \[*\] ]]; then
  DB_PORT="${DB_HOST##*:}"
  DB_HOST="${DB_HOST%:*}"
fi

if [ -z "$DB_HOST" ]; then
  cat >&2 <<'MSG'
ERROR: No database host configured.
Attach a Railway MySQL/MariaDB service and set either Railway's MYSQL* vars,
DATABASE_URL, or WordPress WORDPRESS_DB_* vars on this service.
MSG
  exit 1
fi

export WORDPRESS_DB_HOST="${DB_HOST}:${DB_PORT}"
export WORDPRESS_DB_NAME="$DB_NAME"
export WORDPRESS_DB_USER="$DB_USER"
export WORDPRESS_DB_PASSWORD="$DB_PASSWORD"

APP_URL="${WP_HOME:-${WORDPRESS_CONFIG_EXTRA_WP_HOME:-}}"
if [ -z "$APP_URL" ] && [ -n "${RAILWAY_PUBLIC_DOMAIN:-}" ]; then
  APP_URL="https://${RAILWAY_PUBLIC_DOMAIN}"
fi
if [ -z "$APP_URL" ] && [ -n "${RAILWAY_STATIC_URL:-}" ]; then
  APP_URL="${RAILWAY_STATIC_URL}"
fi
export STAVRET_APP_URL="$APP_URL"

PORT="${PORT:-80}"
sed -ri "s/^Listen [0-9]+/Listen ${PORT}/" /etc/apache2/ports.conf
sed -ri "s/<VirtualHost \*:[0-9]+>/<VirtualHost *:${PORT}>/" /etc/apache2/sites-available/000-default.conf

if [ ! -e /var/www/html/wp-includes/version.php ]; then
  tar cf - -C /usr/src/wordpress . | tar xf - -C /var/www/html
fi

cat > /var/www/html/wp-config.php <<'PHP'
<?php
function stavret_env($key, $default = '') {
    $value = getenv($key);
    return $value === false || $value === '' ? $default : $value;
}

define('DB_NAME', stavret_env('WORDPRESS_DB_NAME'));
define('DB_USER', stavret_env('WORDPRESS_DB_USER'));
define('DB_PASSWORD', stavret_env('WORDPRESS_DB_PASSWORD'));
define('DB_HOST', stavret_env('WORDPRESS_DB_HOST'));
define('DB_CHARSET', 'utf8mb4');
define('DB_COLLATE', '');

define('AUTH_KEY',         stavret_env('AUTH_KEY',         'stavret-auth-key-change-me'));
define('SECURE_AUTH_KEY',  stavret_env('SECURE_AUTH_KEY',  'stavret-secure-auth-key-change-me'));
define('LOGGED_IN_KEY',    stavret_env('LOGGED_IN_KEY',    'stavret-logged-in-key-change-me'));
define('NONCE_KEY',        stavret_env('NONCE_KEY',        'stavret-nonce-key-change-me'));
define('AUTH_SALT',        stavret_env('AUTH_SALT',        'stavret-auth-salt-change-me'));
define('SECURE_AUTH_SALT', stavret_env('SECURE_AUTH_SALT', 'stavret-secure-auth-salt-change-me'));
define('LOGGED_IN_SALT',   stavret_env('LOGGED_IN_SALT',   'stavret-logged-in-salt-change-me'));
define('NONCE_SALT',       stavret_env('NONCE_SALT',       'stavret-nonce-salt-change-me'));

$table_prefix = 'wp_';

if (isset($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] === 'https') {
    $_SERVER['HTTPS'] = 'on';
}

$app_url = stavret_env('STAVRET_APP_URL');
if ($app_url !== '') {
    define('WP_HOME', $app_url);
    define('WP_SITEURL', $app_url);
}

define('DISALLOW_FILE_EDIT', true);
define('WP_ENVIRONMENT_TYPE', stavret_env('WP_ENVIRONMENT_TYPE', 'production'));
define('WP_DEBUG', filter_var(stavret_env('WP_DEBUG', 'false'), FILTER_VALIDATE_BOOLEAN));

if (!defined('ABSPATH')) {
    define('ABSPATH', __DIR__ . '/');
}
require_once ABSPATH . 'wp-settings.php';
PHP

chown -R www-data:www-data /var/www/html

mysql_base=(mysql --protocol=TCP -h "$DB_HOST" -P "$DB_PORT" -u "$DB_USER" "-p${DB_PASSWORD}" "$DB_NAME")

echo "Waiting for database TCP endpoint at ${DB_HOST}:${DB_PORT}..."
for i in $(seq 1 90); do
  if timeout 2 bash -c "</dev/tcp/${DB_HOST}/${DB_PORT}" >/dev/null 2>&1; then
    break
  fi
  if [ "$i" = "90" ]; then
    echo "Database TCP endpoint did not become reachable in time." >&2
    exit 1
  fi
  sleep 2
done

# Now verify authenticated SQL access. Keep this error visible; otherwise an
# auth/plugin problem looks like a generic Railway healthcheck failure.
echo "Database TCP is reachable; checking WordPress tables..."
if ! "${mysql_base[@]}" -Nse "SHOW TABLES LIKE 'wp_options';" | grep -q '^wp_options$'; then
  echo "Importing bundled Stavret database dump..."
  gzip -cd /docker-entrypoint-initdb.d/stavret-db.sql.gz | "${mysql_base[@]}"
fi

if command -v wp >/dev/null 2>&1; then
  wp_base=(wp --allow-root --path=/var/www/html)
  if [ -n "$APP_URL" ]; then
    "${wp_base[@]}" option update home "$APP_URL" >/dev/null || true
    "${wp_base[@]}" option update siteurl "$APP_URL" >/dev/null || true
    "${wp_base[@]}" search-replace 'http://stavret.ddev.site' "$APP_URL" --all-tables --skip-columns=guid --precise --quiet || true
    "${wp_base[@]}" search-replace 'https://stavret.ddev.site' "$APP_URL" --all-tables --skip-columns=guid --precise --quiet || true
  fi
  "${wp_base[@]}" theme activate stavret >/dev/null || true
fi

exec apache2-foreground

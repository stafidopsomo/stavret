FROM wordpress:php8.3-apache

RUN apt-get update \
    && apt-get install -y --no-install-recommends default-mysql-client less ca-certificates \
    && rm -rf /var/lib/apt/lists/* \
    && curl -fsSL -o /usr/local/bin/wp https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar \
    && chmod +x /usr/local/bin/wp \
    && a2enmod rewrite \
    && find /etc/apache2/mods-enabled -name 'mpm_*' -delete \
    && ln -sf /etc/apache2/mods-available/mpm_prefork.conf /etc/apache2/mods-enabled/mpm_prefork.conf \
    && ln -sf /etc/apache2/mods-available/mpm_prefork.load /etc/apache2/mods-enabled/mpm_prefork.load

# Ship only the custom theme and the DDEV database dump. WordPress core comes
# from the official image and is copied into /var/www/html on first boot.
COPY wp-content /usr/src/wordpress/wp-content
COPY database/stavret-db.sql.gz /docker-entrypoint-initdb.d/stavret-db.sql.gz
COPY docker/entrypoint.sh /usr/local/bin/stavret-entrypoint
RUN chmod +x /usr/local/bin/stavret-entrypoint

ENTRYPOINT ["stavret-entrypoint"]
CMD ["apache2-foreground"]

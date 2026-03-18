# Database Setup

Import on a fresh DDEV install:

```bash
ddev import-db --file=database/stavret-db.sql.gz
```

That's it — all pages, content, settings and menus will be restored.

## Full laptop setup from scratch

```bash
git clone https://github.com/stafidopsomo/stavret.git
cd stavret
ddev start
ddev import-db --file=database/stavret-db.sql.gz
# Visit https://stavret.ddev.site
```

No npm build needed — built assets are committed in `wp-content/themes/stavret/assets/dist/`.

## Re-export (after content changes on the main machine)

```bash
ddev export-db --file=database/stavret-db.sql.gz
git add database/stavret-db.sql.gz
git commit -m "chore: update database dump"
git push
```

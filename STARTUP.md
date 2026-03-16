# Stavret — Setup Instructions

## Prerequisites

### macOS (DDEV + Colima)
- [Homebrew](https://brew.sh/)
- DDEV: `brew install ddev/ddev/ddev`
- Colima: `brew install colima docker`

### Windows WSL2 (DDEV + Docker Desktop)
- Docker Desktop for Windows with WSL2 integration enabled
- DDEV inside WSL2: follow [ddev.com/get-started](https://ddev.com/get-started/)

---

## First-Time Setup

### 1. Clone the repo

```bash
git clone https://github.com/stafidopsomo/stavret.git stavret
cd stavret
```

### 2. Start the environment

**macOS:**
```bash
colima start
ddev start
```

**WSL2:**
```bash
# Ensure Docker Desktop is running on Windows with WSL2 integration on
ddev start
```

### 3. Import the database

```bash
ddev import-db --file=stavret-db.sql.gz
```

### 4. Install and build theme assets

```bash
cd wp-content/themes/stavret
npm install
npm run build
cd ../../..
```

### 5. Open the site

```
https://stavret.ddev.site          # Frontend
https://stavret.ddev.site/wp-admin # Admin (admin / admin)
```

---

## Daily Development

```bash
# Start environment
colima start && ddev start          # macOS
ddev start                          # WSL2

# Build / watch theme assets
cd wp-content/themes/stavret
npm run build     # one-time production build
npm run watch     # watch mode (rebuilds on save)

# WP CLI
ddev exec wp <command>

# Export DB
ddev export-db --file=stavret-db.sql.gz

# Import DB
ddev import-db --file=stavret-db.sql.gz
```

---

## Re-Seed Demo Content

The seeder runs automatically on first theme activation. To re-run:

```bash
ddev exec wp option delete stavret_data_seeded
ddev exec wp eval 'do_action("init");'
```

---

## Stop / Restart

```bash
ddev stop           # stop containers
ddev restart        # restart containers
colima stop         # macOS only — stop Colima VM when done for the day
```

---

## Site Structure

```
stavret/
├── wp-content/themes/stavret/     # Custom theme
│   ├── assets/src/                # Source CSS + JS/TSX
│   ├── assets/dist/               # Vite build output (gitignored)
│   ├── inc/                       # PHP: enqueue, CPT, meta-boxes, seeder
│   ├── front-page.php             # Homepage
│   ├── page-gallery.php           # Gallery (React island)
│   ├── page-about.php             # About / Info
│   ├── page-contact.php           # Contact + map
│   ├── header.php / footer.php    # Shell
│   └── functions.php              # Theme bootstrap
├── stavret-db.sql.gz              # DB dump
├── CLAUDE.md                      # AI agent instructions + design context
├── STARTUP.md                     # This file
└── .claude/                       # Project memory
```

---

## Notes

- After any JS/CSS change: `npm run build` before refreshing the browser
- The theme uses **Vite ESM modules** — scripts have `type="module"` applied automatically via `enqueue.php`
- Font loading: Google Fonts (Cormorant Garant + DM Sans) — requires internet on first load
- Map on contact page: Google Maps embed (grayscale + inverted filter for dark theme)

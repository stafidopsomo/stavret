# Stavret Architecture Studio

Portfolio website for **Stavret**, an architecture studio based in Νίκαια, Athens.

Dark, minimal, typographically driven — built to let the work speak.

---

## Stack

| Layer | Tool |
|-------|------|
| CMS | WordPress 6.9.4 |
| Dev environment | DDEV (Colima on macOS / Docker Desktop on WSL2) |
| CSS | Tailwind CSS 4 + CSS custom properties |
| Build | Vite 6 (entries: `main.tsx`, `gallery.tsx`) |
| JS | React 19 + TypeScript |
| Animation | Framer Motion |
| Scroll | Lenis (gallery page) |

## Design Language

**Brand:** Precise · Bold · Raw

**Reference:** Adjaye Associates — warm minimalism, strong serif typography, quiet confidence.

**Palette:** Dark only. `#0a0a0a` black foundation, white voice, grays for structure.

**Typography:** Cormorant Garant (headings) + DM Sans (body).

---

## Railway Deployment

This repository is ready to deploy as a Dockerized WordPress app on Railway.

1. Create a new Railway project and add a MySQL service.
2. Add this GitHub repo as the app service. Railway will detect `railway.toml` and build the `Dockerfile`.
3. Add/reference these variables on the app service from the MySQL service if Railway does not wire them automatically:
   - `PORT=80`
   - `WORDPRESS_DB_HOST=${{ MySQL.MYSQLHOST }}:${{ MySQL.MYSQLPORT }}`
   - `WORDPRESS_DB_NAME=${{ MySQL.MYSQLDATABASE }}`
   - `WORDPRESS_DB_USER=${{ MySQL.MYSQLUSER }}`
   - `WORDPRESS_DB_PASSWORD=${{ MySQL.MYSQLPASSWORD }}`
4. Generate a Railway public domain for the app service. The container uses `RAILWAY_PUBLIC_DOMAIN` to set `WP_HOME`/`WP_SITEURL` and rewrites the bundled DDEV URLs on boot.

On the first successful boot, the container imports `database/stavret-db.sql.gz`, activates the `stavret` theme, and serves WordPress on Railway's injected `PORT`.

Optional hardening: add unique WordPress salts as Railway variables (`AUTH_KEY`, `SECURE_AUTH_KEY`, `LOGGED_IN_KEY`, `NONCE_KEY`, `AUTH_SALT`, `SECURE_AUTH_SALT`, `LOGGED_IN_SALT`, `NONCE_SALT`).

### Contact form production launch gate

The contact form (`page-contact.php` / `inc/contact-handler.php`) stores every
submission as a private `stavret_lead` post regardless of mail delivery, so
enquiries are never lost. Before treating a deployment as launch-ready:

1. Configure a real SMTP/mail transport (e.g. an SMTP plugin, or `wp_mail`
   filters wired to your provider's API) via environment variables or plugin
   settings on the Railway service — **never commit SMTP credentials to git**.
2. Submit a real test enquiry against the deployed site and confirm the email
   arrives. If it doesn't, check the `_stavret_lead_mail_status` /
   `_stavret_lead_mail_error` post meta on the corresponding Lead (wp-admin →
   Contact Leads) for the `wp_mail_failed` error.

Until both steps are verified, treat the contact form as "captures leads but
may not email them."

---

## Getting Started

### Prerequisites

**macOS**
```bash
brew install ddev/ddev/ddev colima docker
```

**Windows WSL2** — install Docker Desktop + DDEV inside WSL2 per [ddev.com/get-started](https://ddev.com/get-started/).

### Setup

```bash
git clone https://github.com/stafidopsomo/stavret.git stavret
cd stavret

# macOS
colima start
ddev start

# WSL2 (Docker Desktop already running)
ddev start
```

Import a database dump if you have one:
```bash
ddev import-db --file=stavret-db.sql.gz
```

Install and build theme assets:
```bash
cd wp-content/themes/stavret
npm install
npm run build
```

Open the site:
```
https://stavret.ddev.site          # Frontend
https://stavret.ddev.site/wp-admin # Admin (admin / admin)
```

---

## Development

```bash
cd wp-content/themes/stavret

npm run build    # production build
npm run watch    # watch mode — rebuilds on every save
```

Hard-refresh the browser (`Cmd+Shift+R`) after each build to bypass cache.

### Re-seed demo content

The seeder runs automatically on first theme activation. To re-run:
```bash
ddev exec wp option delete stavret_data_seeded
ddev exec wp eval 'do_action("init");'
```

### WP CLI

```bash
ddev exec wp <command>
```

---

## Project Structure

```
stavret/
├── .ddev/                          # DDEV environment config
├── wp-content/themes/stavret/      # Custom theme (the entire codebase)
│   ├── assets/src/
│   │   ├── css/main.css            # Tailwind 4 + design tokens
│   │   └── js/
│   │       ├── main.tsx            # Hero island entry
│   │       ├── gallery.tsx         # Gallery island entry
│   │       └── components/ui/
│   │           ├── hero-section.tsx
│   │           ├── 3d-marquee.tsx
│   │           ├── arch-drawings.ts  # SVG architectural drawings
│   │           ├── gooey-text-morphing.tsx
│   │           └── sticky-scroll.tsx
│   ├── inc/
│   │   ├── enqueue.php             # Vite manifest + script enqueue
│   │   ├── cpt.php                 # Project CPT + taxonomy
│   │   ├── meta-boxes.php          # Project meta fields
│   │   └── seeder.php              # Demo content seeder
│   ├── front-page.php              # Homepage
│   ├── page-gallery.php            # Gallery (React island)
│   ├── page-about.php              # About / Info
│   ├── page-contact.php            # Contact + map
│   ├── header.php / footer.php
│   └── functions.php
├── CLAUDE.md                       # AI agent instructions + design context
├── STARTUP.md                      # Detailed setup guide
└── README.md                       # This file
```

---

## Customising the Architectural Drawings

The animated background drawings in the hero are defined in:
[`wp-content/themes/stavret/assets/src/js/components/ui/arch-drawings.ts`](wp-content/themes/stavret/assets/src/js/components/ui/arch-drawings.ts)

Each drawing is an inline SVG `data:image/svg+xml` URI on a `400×300` canvas with a `#0a0a0a` background. Edit or add drawings to the `ARCH_DRAWINGS` array, then rebuild:

```bash
cd wp-content/themes/stavret && npm run build
```

---

## License

Private — all rights reserved. Not for redistribution.

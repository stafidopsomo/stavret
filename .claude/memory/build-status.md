---
name: stavret-build-status
description: Current build progress — what's done, what's pending
type: project
---

# Build Status (as of 2026-03-16)

## DONE ✅ — Full initial build complete

- DDEV configured and started (`stavret.ddev.site`)
- WordPress 6.9.4 installed (admin / admin)
- Theme `stavret` scaffolded, activated, and built
- `vite.config.ts` + `tsconfig.json` — Vite 6 + React 19 + TS config
- `assets/src/css/main.css` — Tailwind 4 + Cormorant Garant + DM Sans + full token system
- `assets/src/js/main.tsx` + `gallery.tsx` — React island entry points
- React components:
  - `gooey-text-morphing.tsx` — morphing hero text
  - `hero-section.tsx` — full homepage hero (GooeyText + slogan + CTA buttons)
  - `sticky-scroll.tsx` — 3-col sticky gallery with Lenis
- PHP:
  - `functions.php`, `inc/enqueue.php`, `inc/cpt.php`, `inc/meta-boxes.php`, `inc/seeder.php`
  - `header.php`, `footer.php`, `index.php`
  - `front-page.php`, `page-gallery.php`, `page-about.php`, `page-contact.php`
- WP pages created: Home (ID:11), Gallery (ID:12), About (ID:13), Contact (ID:14)
- Front page set to Home (ID:11), permalink structure `/%postname%/`
- `npm install` + `npm run build` — clean build, no errors
- `CLAUDE.md` — design context written (Precise · Bold · Raw, Adjaye Associates reference)
- `STARTUP.md` — Mac + WSL2 setup instructions
- `/teach-impeccable` — design context persisted

## SEEDER

Run automatically on theme activation. 6 mock projects with images seeded.
To re-seed: `ddev exec wp option delete stavret_data_seeded && ddev exec wp eval 'do_action("init");'`

## DONE (continued)

- Git repo initialised, remote: `https://github.com/stafidopsomo/stavret.git`
- `.gitignore` created (excludes WP core, node_modules, dist, wp-config.php, uploads)
- `README.md` created with setup + structure docs
- `STARTUP.md` updated with real repo URL
- Initial commit pushed to `main`

## PENDING / NEXT STEPS

- [ ] Apply `/polish` pass on hero + gallery components
- [ ] Add scroll-triggered reveal animations (GSAP or Framer Motion) to project cards
- [ ] Gallery: add category filter tabs above the grid
- [ ] Contact form: wire up `admin-post.php` handler to send email
- [ ] Export DB and commit: `ddev export-db --file=stavret-db.sql.gz`

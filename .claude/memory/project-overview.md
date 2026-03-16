---
name: stavret-project-overview
description: Full project overview for stavret architect portfolio WordPress site
type: project
---

# Stavret — Architect Portfolio Site

**Owner:** Stavros
**Business name:** stavret (EN + GR, same name for now)
**Industry:** Architecture
**Address:** Πλατεία Δημοκρατίας 5, Νίκαια
**Phone/Email:** Mock Greek data for now (TBD)
**Social media:** None
**Domain:** Has one, details TBD
**Locale:** el_GR + en_US (bilingual)

## Design
- **Aesthetic:** Minimal-modern, strict black & white
- **Typography:** Cormorant Garant (headings, serif) + DM Sans (body, sans)
- **Logo:** Typographic fallback — "STAVRET"
- **Design skills:** impeccable skills to be applied (`/teach-impeccable`, `/polish`, etc.)

## Stack
- WordPress 6.x + DDEV (Colima on macOS, Docker Desktop on WSL2)
- Tailwind CSS 4 + Vite + React 19 + TypeScript
- GSAP + Framer Motion for animations
- React Islands pattern (PHP shell + React mounts)

## DDEV
- Project name: `stavret`
- URL: https://stavret.ddev.site
- WP admin: https://stavret.ddev.site/wp-admin (admin / admin)
- WP installed: YES

## Pages
| Page | Slug | Notes |
|------|------|-------|
| Homepage | `/` | GooeyText hero + architect slogan + Contact & Info buttons |
| Gallery | `/gallery` | StickyScroll 3-col image gallery with Lenis smooth scroll |
| Contact | `/contact` | Form + Google Maps |
| About | `/about` | Architect info |

## GooeyText Hero (landing page)
- Words cycle: ["Design", "Build", "Create", "Inspire"] or similar architectural terms
- Static slogan beneath: "Design with us"
- Two rounded buttons: "Contact" and "Info"

## CPTs
- `project` — portfolio projects, taxonomy: `project_category`, meta: client, year, location, description

## Components (from brief)
1. `sticky-scroll.tsx` — 3-column sticky scroll gallery (lenis smooth scroll required)
2. `gooey-text-morphing.tsx` — morphing text hero (no external deps, pure CSS filter trick)

## Theme path
`wp-content/themes/stavret/`

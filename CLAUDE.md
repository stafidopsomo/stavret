# Stavret — Claude Instructions

This file provides persistent context for all Claude Code sessions on this project.
Always read `.claude/MEMORY.md` and `.claude/memory/build-status.md` at session start.

---

## Design Context

### Users
**Primary:** Potential clients evaluating Stavret before making contact. They arrive with a project in mind — residential, commercial, or cultural — and are assessing creative fit, portfolio quality, and professional credibility. The site must instil confidence immediately and make it frictionless to reach out. Secondary: industry peers and collaborators researching the studio.

**Job to be done:** "Is this the right architect for my project?" → Find evidence of quality work → Make contact.

### Brand Personality
**Three words: Precise · Bold · Raw**

- **Precise:** Nothing wasted. Every detail deliberate — spacing, weight, line. The site should feel like it was designed with a set square.
- **Bold:** Confident and assured without being loud. The work speaks. The studio doesn't shout.
- **Raw:** Material honesty. Exposed structure, no decoration for its own sake. Authenticity over polish.

**Emotional goal:** The visitor should feel they are dealing with a studio that has deep conviction in its craft — not a trend-follower, not a crowd-pleaser. A quiet authority.

### Aesthetic Direction
**Reference: Adjaye Associates** — warm minimalism, strong serif typography, quiet confidence, material texture. Not cold or clinical (anti-Zaha). Not purely editorial white space (anti-Snøhetta). A dark, grounded palette where the work carries warmth.

**Anti-references:**
- No corporate gloss or over-produced finish
- No playful or colourful elements
- No aggressive motion that competes with the photography

**Theme:** Dark mode only. Black as foundation (#0a0a0a), white as voice, grays as structure. Typography carries the personality — Cormorant Garant for presence, DM Sans for clarity.

### Motion Principles
**Level: Purposeful.** Motion adds meaning, not decoration.
- The GooeyText hero morph is the site's signature — it must feel deliberate and architectural
- Scroll-triggered reveals for project cards and content sections (fade + translate up)
- Image transitions: subtle scale on hover (never jarring)
- Lenis smooth scroll on gallery — the scroll *is* the experience there
- No page transition animations, no cursor effects, no particle systems

### Design Principles

1. **Restraint is the loudest statement.** When in doubt, remove. The negative space is as intentional as the content.

2. **Typography carries personality, layout carries structure.** Cormorant Garant should feel like a material in itself — use size, weight, and tracking as compositional tools, not just hierarchy markers.

3. **The work is the hero.** Photography must never be cropped, filtered, or decorated into submission. Grayscale tinting (15–20%) is the ceiling. The grid exists to serve the images.

4. **Precision in detail.** 1px lines, exact letter-spacing, correct optical alignment. The client is an architect — they will notice misalignment.

5. **Motion earns its place.** Every animation must answer the question: does this help the user understand or feel something? If not, remove it.

---

## Stack Reference

| Layer | Tool |
|-------|------|
| CMS | WordPress 6.9.4 |
| Dev | DDEV (`stavret.ddev.site`) |
| CSS | Tailwind CSS 4 + CSS custom properties |
| Build | Vite 6 (two entries: `main.tsx`, `gallery.tsx`) |
| JS | React 19 + TypeScript |
| Scroll | Lenis (gallery only) |
| Theme | `wp-content/themes/stavret/` |

## Key Commands

```bash
cd wp-content/themes/stavret
npm run build       # production build
npm run watch       # dev watch

ddev exec wp option delete stavret_data_seeded  # re-run seeder
ddev export-db --file=stavret-db.sql.gz
```

## Available Design Skills

Run these explicitly when asked:
`/polish` `/audit` `/critique` `/bolder` `/quieter` `/distill`
`/animate` `/colorize` `/clarify` `/harden` `/normalize`
`/delight` `/extract` `/adapt` `/onboard` `/optimize`

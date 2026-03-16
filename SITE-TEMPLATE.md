# New Site Kickoff Template

> **How to use:** Copy this file into a new repo's root. Fill in the **Project Brief** section in free text — describe the client, what they do, what the site needs. Then fill in whatever structured fields you know. Leave unknowns blank. When you open a Claude Code conversation, paste this file or reference it. The agent will extract details from your brief, fill gaps, and begin building.

---

## Agent Instructions

**READ THIS FIRST.** You are setting up a new WordPress site from scratch using a proven stack. Follow these rules:

1. **Extract before building.** Parse the Project Brief below. Auto-populate any empty fields in the Structured Details section that you can infer from the brief. Ask the user to confirm before proceeding.
2. **Stack defaults.** The default stack is: WordPress 6.x + DDEV + Custom Theme (Tailwind CSS 4 + Vite + React 19 + TypeScript). If the project brief or filled values clearly suggest a better implementation approach (e.g., a simpler site that doesn't need React, or a site that benefits from Next.js instead), propose the alternative with reasoning. Otherwise, use the default stack.
3. **Both environments.** The developer works on **macOS (DDEV + Colima)** and **Windows WSL2 (DDEV + Docker Desktop for Windows)**. All setup instructions, scripts, and docs must work on both. Include a STARTUP.md in the repo with dual-platform setup instructions.
4. **React Islands pattern.** PHP templates render the page shell. Interactive sections mount React components via `data-*` JSON attributes on mount divs. Scripts must have `type="module"` (Vite ESM). See the Architecture section below for the proven pattern.
5. **Design skills available.** The [impeccable](https://github.com/pbakaus/impeccable) design skills are installed globally (`~/.claude/skills/`). Available commands: `/polish`, `/audit`, `/critique`, `/bolder`, `/quieter`, `/distill`, `/animate`, `/colorize`, `/clarify`, `/harden`, `/normalize`, `/delight`, `/extract`, `/adapt`, `/onboard`, `/optimize`, `/teach-impeccable`. **Only use these when the user explicitly asks.** Do not proactively run them.
6. **Memory system.** Set up `.claude/` project memory from conversation 1. Create a MEMORY.md index and individual memory files tracking: project overview, company details, pages created, CPTs, React components, what's done, what's pending, dev commands. Update memory as work progresses.
7. **Professional tone.** All files, comments, and content must be professional. No personal references about the client relationship.
8. **Incremental commits.** Commit after each logical milestone. Export DB as `{project}-db.sql.gz` and commit it to repo root at key checkpoints.
9. **No over-engineering.** Build what's needed now. Don't add features, abstractions, or config that wasn't asked for.

---

## Project Brief (Free Text)

> *Describe the project in your own words. Who is the client? What do they do? What pages does the site need? What's the vibe/aesthetic? Any specific features? Write as much or as little as you want — the agent will extract what it needs.*

```
So this is site for an architext, we will follow minimal design, and the colors will black and white.I have already decided on some components here is the promptS

this one should be in gallery tab

You are given a task to integrate an existing React component in the codebase

The codebase should support:
- shadcn project structure  
- Tailwind CSS
- Typescript

If it doesn't, provide instructions on how to setup project via shadcn CLI, install Tailwind or Typescript.

Determine the default path for components and styles. 
If default path for components is not /components/ui, provide instructions on why it's important to create this folder
Copy-paste this component to /components/ui folder:
```tsx
sticky-scroll.tsx
// component.tsx
'use client';
import { ReactLenis } from 'lenis/react';
import React, { forwardRef } from 'react';

const Component = forwardRef<HTMLElement>((props, ref) => {
  return (
    <ReactLenis root>
      <main className='bg-black' ref={ref}>
        <div className='wrapper'>
          <section className='text-white  h-screen  w-full bg-slate-950  grid place-content-center sticky top-0'>
            <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>

            <h1 className='2xl:text-7xl text-5xl px-8 font-semibold text-center tracking-tight leading-[120%]'>
              Create Gallery In a Better Way
              <br />
              Using CSS sticky properties <br />
              Scroll down! 👇
            </h1>
          </section>
        </div>

        <section className='text-white   w-full bg-slate-950  '>
          <div className='grid grid-cols-12 gap-2'>
            <div className='grid gap-2 col-span-4'>
              <figure className=' w-full'>
                <img
                  src='https://images.unsplash.com/photo-1718838541476-d04e71caa347?w=500&auto=format&fit=crop'
                  alt=''
                  className='transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md '
                />
              </figure>
              <figure className=' w-full'>
                <img
                  src='https://images.unsplash.com/photo-1715432362539-6ab2ab480db2?w=500&auto=format&fit=crop'
                  alt=''
                  className='transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md '
                />
              </figure>
              <figure className=' w-full'>
                <img
                  src='https://images.unsplash.com/photo-1718601980986-0ce75101d52d?w=500&auto=format&fit=crop'
                  alt=''
                  className='transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md '
                />
              </figure>
              <figure className='w-full'>
                <img
                  src='https://images.unsplash.com/photo-1685904042960-66242a0ac352?w=500&auto=format&fit=crop'
                  alt=''
                  className='transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md '
                />
              </figure>
              <figure className='w-full'>
                <img
                  src='https://images.unsplash.com/photo-1719411182379-ffd97c1f7ebf?w=500&auto=format&fit=crop'
                  alt=''
                  className='transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md '
                />
              </figure>
            </div>
            <div className='sticky top-0 h-screen w-full col-span-4 gap-2  grid grid-rows-3'>
              <figure className='w-full h-full '>
                <img
                  src='https://images.unsplash.com/photo-1718969604981-de826f44ce15?w=500&auto=format&fit=crop'
                  alt=''
                  className='transition-all duration-300 h-full w-full  align-bottom object-cover rounded-md '
                />
              </figure>
              <figure className='w-full h-full '>
                <img
                  src='https://images.unsplash.com/photo-1476180814856-a36609db0493?w=500&auto=format&fit=crop'
                  alt=''
                  className='transition-all duration-300 h-full w-full align-bottom object-cover rounded-md '
                />
              </figure>
              <figure className='w-full h-full '>
                <img
                  src='https://images.unsplash.com/photo-1595407660626-db35dcd16609?w=500&auto=format&fit=crop'
                  alt=''
                  className='transition-all duration-300 h-full w-full  align-bottom object-cover rounded-md '
                />
              </figure>
            </div>
            <div className='grid gap-2 col-span-4'>
              <figure className='w-full'>
                <img
                  src='https://images.unsplash.com/photo-1719547907790-f661a88302c2?w=500&auto=format&fit=crop'
                  alt=''
                  className='transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md '
                />
              </figure>
              <figure className='w-full'>
                <img
                  src='https://images.unsplash.com/photo-1599054799131-4b09c73a63cf?w=500&auto=format&fit=crop'
                  alt=''
                  className='transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md '
                />
              </figure>
              <figure className='w-full'>
                <img
                  src='https://images.unsplash.com/photo-1719963532023-01b573d1d584?w=500&auto=format&fit=crop'
                  alt=''
                  className='transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md '
                />
              </figure>
              <figure className='w-full'>
                <img
                  src='https://images.unsplash.com/photo-1714328101501-3594de6cb80f?w=500&auto=format&fit=crop'
                  alt=''
                  className='transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md '
                />
              </figure>
              <figure className='w-full'>
                <img
                  src='https://images.unsplash.com/photo-1719554873571-0fd6bf322bb1?w=500&auto=format&fit=crop'
                  alt=''
                  className='transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md '
                />
              </figure>
            </div>
          </div>
        </section>

        <footer className='group bg-slate-950 '>
          <h1 className='text-[16vw]  translate-y-20 leading-[100%] uppercase font-semibold text-center bg-gradient-to-r from-gray-400 to-gray-800 bg-clip-text text-transparent transition-all ease-linear'>
            ui-layout
          </h1>
          <div className='bg-black h-40 relative z-10 grid place-content-center text-2xl rounded-tr-full rounded-tl-full'></div>
        </footer>
      </main>
    </ReactLenis>
  );
});

Component.displayName = 'Component';

export default Component;

demo.tsx
// demo.tsx
import React from 'react';
import Component from '@/components/ui/sticky-scroll';

function ComponentDemo() {
  return (
    <Component />
  );
}

export { ComponentDemo as DemoOne };
```

Install NPM dependencies:
```bash
lenis
```

Implementation Guidelines
 1. Analyze the component structure and identify all required dependencies
 2. Review the component's argumens and state
 3. Identify any required context providers or hooks and install them
 4. Questions to Ask
 - What data/props will be passed to this component?
 - Are there any specific state management requirements?
 - Are there any required assets (images, icons, etc.)?
 - What is the expected responsive behavior?
 - What is the best place to use this component in the app?

Steps to integrate
 0. Copy paste all the code above in the correct directories
 1. Install external dependencies
 2. Fill image assets with Unsplash stock images you know exist
 3. Use lucide-react icons for svgs or logos if component requires them



this one should be the landing page 


You are given a task to integrate an existing React component in the codebase

The codebase should support:
- shadcn project structure  
- Tailwind CSS
- Typescript

If it doesn't, provide instructions on how to setup project via shadcn CLI, install Tailwind or Typescript.

Determine the default path for components and styles. 
If default path for components is not /components/ui, provide instructions on why it's important to create this folder
Copy-paste this component to /components/ui folder:
```tsx
gooey-text-morphing.tsx
"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface GooeyTextProps {
  texts: string[];
  morphTime?: number;
  cooldownTime?: number;
  className?: string;
  textClassName?: string;
}

export function GooeyText({
  texts,
  morphTime = 1,
  cooldownTime = 0.25,
  className,
  textClassName
}: GooeyTextProps) {
  const text1Ref = React.useRef<HTMLSpanElement>(null);
  const text2Ref = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    let textIndex = texts.length - 1;
    let time = new Date();
    let morph = 0;
    let cooldown = cooldownTime;

    const setMorph = (fraction: number) => {
      if (text1Ref.current && text2Ref.current) {
        text2Ref.current.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
        text2Ref.current.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

        fraction = 1 - fraction;
        text1Ref.current.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
        text1Ref.current.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
      }
    };

    const doCooldown = () => {
      morph = 0;
      if (text1Ref.current && text2Ref.current) {
        text2Ref.current.style.filter = "";
        text2Ref.current.style.opacity = "100%";
        text1Ref.current.style.filter = "";
        text1Ref.current.style.opacity = "0%";
      }
    };

    const doMorph = () => {
      morph -= cooldown;
      cooldown = 0;
      let fraction = morph / morphTime;

      if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
      }

      setMorph(fraction);
    };

    function animate() {
      requestAnimationFrame(animate);
      const newTime = new Date();
      const shouldIncrementIndex = cooldown > 0;
      const dt = (newTime.getTime() - time.getTime()) / 1000;
      time = newTime;

      cooldown -= dt;

      if (cooldown <= 0) {
        if (shouldIncrementIndex) {
          textIndex = (textIndex + 1) % texts.length;
          if (text1Ref.current && text2Ref.current) {
            text1Ref.current.textContent = texts[textIndex % texts.length];
            text2Ref.current.textContent = texts[(textIndex + 1) % texts.length];
          }
        }
        doMorph();
      } else {
        doCooldown();
      }
    }

    animate();

    return () => {
      // Cleanup function if needed
    };
  }, [texts, morphTime, cooldownTime]);

  return (
    <div className={cn("relative", className)}>
      <svg className="absolute h-0 w-0" aria-hidden="true" focusable="false">
        <defs>
          <filter id="threshold">
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 255 -140"
            />
          </filter>
        </defs>
      </svg>

      <div
        className="flex items-center justify-center"
        style={{ filter: "url(#threshold)" }}
      >
        <span
          ref={text1Ref}
          className={cn(
            "absolute inline-block select-none text-center text-6xl md:text-[60pt]",
            "text-foreground",
            textClassName
          )}
        />
        <span
          ref={text2Ref}
          className={cn(
            "absolute inline-block select-none text-center text-6xl md:text-[60pt]",
            "text-foreground",
            textClassName
          )}
        />
      </div>
    </div>
  );
}

demo.tsx
import * as React from "react";
import { GooeyText } from "@/components/ui/gooey-text-morphing";

function GooeyTextDemo() {
  return (
    <div className="h-[200px] flex items-center justify-center">
      <GooeyText
        texts={["Design", "Engineering", "Is", "Awesome"]}
        morphTime={1}
        cooldownTime={0.25}
        className="font-bold"
      />
    </div>
  );
}

export { GooeyTextDemo };
```

Implementation Guidelines
 1. Analyze the component structure and identify all required dependencies
 2. Review the component's argumens and state
 3. Identify any required context providers or hooks and install them
 4. Questions to Ask
 - What data/props will be passed to this component?
 - Are there any specific state management requirements?
 - Are there any required assets (images, icons, etc.)?
 - What is the expected responsive behavior?
 - What is the best place to use this component in the app?

Steps to integrate
 0. Copy paste all the code above in the correct directories
 1. Install external dependencies
 2. Fill image assets with Unsplash stock images you know exist
 3. Use lucide-react icons for svgs or logos if component requires them

with an architect based slogan and two button bellow contact and info 

rounded

```

---

## Structured Details

> *Fill in what you know. Leave blanks — the agent will infer from your brief or ask.*

### Client Info

| Field | Value |
|-------|-------|
| **Project name** (repo name, slug) | `{stavret` |
| **Business name** | {{business name}} |
| **Business name (Greek/local)** | greek and english |
| **Owner / Contact** | Stavros|
| **Industry** | architecture |
| **Address** | {{full address}} |
| **Phone(s)** | {{phone numbers}} |
| **Email** | {{email or TBD}} |
| **Social media** | {{Facebook, Instagram, LinkedIn URLs}} |
| **Domain** | {{domain or TBD}} |
| **Locale** | `{{e.g., el_GR, en_US}}` |

### Design Direction

| Field | Value |
|-------|-------|
| **Aesthetic / Vibe** | minimal-modern |
| **Primary color** | `{{hex}}` — {{usage: CTAs, accents}} |
| **Secondary color** | `{{hex}}` — {{usage}} |
| **Background light** | `{{hex}}` — {{alt sections}} |
| **Background dark** | `{{hex}}` — {{header/footer}} |
| **Typography preference** | {{e.g., serif headings + sans body, all sans, specific fonts}} |
| **Logo** | {{available / will be provided / typographic fallback: "BUSINESS NAME"}} |
| **Reference sites** | {{URLs of sites the client likes}} |
| **Design notes** | {{any specific design requests or constraints}} |

### Pages

> *List the pages the site needs. For each page, note key sections or features.*

| Page | Slug | Key Sections / Features |
|------|------|------------------------|
| {{Homepage}} | `/` | {{hero, services overview, CTA, testimonials}} |
| {{About}} | `{{/about}}` | {{company story, team, stats}} |
| {{Services}} | `{{/services}}` | {{service cards/carousel, detail sections}} |
| {{Portfolio/Gallery}} | `{{/portfolio}}` | {{filterable gallery, project modal with details}} |
| {{Contact}} | `{{/contact}}` | {{form, map, info sidebar}} |
| {{...}} | `{{...}}` | {{...}} |

### Custom Post Types

> *Leave blank if unsure — the agent will propose CPTs based on the pages and content needs.*

| CPT Slug | Purpose | Taxonomy | Meta Fields |
|----------|---------|----------|-------------|
| `{{cpt_slug}}` | {{e.g., portfolio projects}} | `{{taxonomy_slug}}` (categories) | {{e.g., client, date, description, location}} |
| `{{cpt_slug}}` | {{e.g., services}} | — | {{e.g., icon, short description}} |

### Features & Integrations

> *Check what applies, add specifics:*

- [ 1 ] Contact form (Contact Form 7 / custom)
- [ 1 ] Google Maps embed (coordinates: `{{lat, lng}}`)
- [ ] SEO plugin (Yoast)
- [ 1 ] Gallery with category filters
- [ ] Image lightbox / modal
- [ 1 ] Animations (GSAP / Framer Motion)
- [ ] Blog / News section
- [ 1 ] Multi-language support
- [ ] E-commerce (WooCommerce)
- [ ] Social media feeds
- [ ] Newsletter signup
- [ ] Partners / Clients logo section
- [ ] Testimonials
- [ ] Search functionality
- [ ] {{Other: ...}}

---

## Architecture Reference

> *This section documents the proven patterns from prior projects. The agent should follow these unless the project brief clearly calls for something different.*

### Stack

| Layer | Tool | Notes |
|-------|------|-------|
| CMS | WordPress 6.x | Custom theme, no page builders |
| Local dev | DDEV | Colima on macOS, Docker Desktop on WSL2 |
| CSS | Tailwind CSS 4 | Utility-first, configured in theme |
| Build | Vite | Two entries: `main.tsx` (all pages) + feature-specific entries (e.g., `gallery.tsx`) |
| JS/TS | React 19 + TypeScript | Islands pattern — not a SPA |
| Animation | GSAP + Framer Motion | GSAP for scroll/Flip animations, Framer Motion for component state |
| Components | Radix UI primitives | For accessible toggle groups, dialogs, etc. |

### Directory Structure

```
{{project-slug}}/
├── wp-content/themes/{{project-slug}}/
│   ├── assets/
│   │   ├── src/
│   │   │   ├── css/
│   │   │   │   └── main.css          # Tailwind entry
│   │   │   └── js/
│   │   │       ├── main.tsx           # Global React islands entry
│   │   │       ├── gallery.tsx        # Feature-specific entry (example)
│   │   │       └── components/
│   │   │           └── ui/            # React components
│   │   └── dist/                      # Vite output (git-ignored except manifest)
│   ├── inc/
│   │   ├── cpt.php                    # Custom Post Type registration
│   │   ├── enqueue.php                # Script/style enqueuing + type="module" filter
│   │   ├── meta-boxes.php             # Custom meta boxes for CPTs
│   │   └── seeder.php                 # Dev data seeder (mock content)
│   ├── template-parts/                # Reusable PHP partials
│   ├── front-page.php                 # Homepage
│   ├── page-{{slug}}.php              # Page templates
│   ├── header.php
│   ├── footer.php
│   ├── functions.php
│   ├── style.css                      # Theme declaration (no actual styles)
│   ├── vite.config.ts
│   ├── tailwind.config.ts             # If needed (v4 may use CSS config)
│   ├── tsconfig.json
│   └── package.json
├── {{project-slug}}-db.sql.gz         # DB dump for portability
├── STARTUP.md                         # Setup instructions (Mac + WSL2)
├── CLAUDE.md                          # Agent instructions (if needed beyond memory)
└── .claude/                           # Project memory
    └── ...
```

### React Islands Pattern

PHP renders the mount point with data:

```php
<?php
$data = [
    'items' => $items_array,
    'config' => ['key' => 'value'],
];
?>
<section id="component-root" data-config="<?php echo esc_attr(wp_json_encode($data)); ?>">
    <!-- React mounts here, noscript fallback optional -->
</section>
```

React reads and mounts:

```tsx
// main.tsx
import { createRoot } from "react-dom/client";
import { MyComponent } from "./components/ui/my-component";

const el = document.getElementById("component-root");
if (el) {
    const config = JSON.parse(el.dataset.config || "{}");
    createRoot(el).render(<MyComponent {...config} />);
}
```

The `type="module"` fix in `enqueue.php`:

```php
add_filter('script_loader_tag', function ($tag, $handle) {
    if (str_starts_with($handle, '{{project-slug}}-')) {
        return str_replace(' src=', ' type="module" src=', $tag);
    }
    return $tag;
}, 10, 2);
```

### DDEV Setup (both platforms)

**macOS (Colima):**
```bash
colima start
ddev start
```

**WSL2 (Docker Desktop for Windows):**
```bash
# Docker Desktop must be running on Windows with WSL2 integration enabled
ddev start
```

**Common commands:**
```bash
cd wp-content/themes/{{project-slug}}
npm install
npm run build          # Production build
npm run watch          # Dev with HMR

ddev exec wp <command>                          # WP CLI
ddev export-db --file={{project-slug}}-db.sql.gz  # Export DB
ddev import-db --file={{project-slug}}-db.sql.gz  # Import DB
```

### Seeder Pattern

Register an `init` action that checks a `{{project-slug}}_data_seeded` option. If not set, create all CPT posts, taxonomy terms, and set featured images. Set the option when done. To re-seed:

```bash
ddev exec wp option delete {{project-slug}}_data_seeded
ddev exec wp eval 'do_action("init");'
```

### Key Lessons Learned

- **`useGSAP` with `scope` calls `context.revert()` on dependency change** — this reverts in-progress transforms, causing a visible flash. Use `useEffect` + manual `gsap.context().kill()` instead for GSAP Flip animations.
- **React referential equality matters for GSAP** — use `useMemo` for array dependencies and `useCallback` for handlers passed to animated children to prevent spurious re-animations.
- **Vite ESM in WordPress** — scripts MUST have `type="module"` or they fail silently. Handle via `script_loader_tag` filter.
- **GSAP Flip `absolute: true`** — locks `minHeight` on the wrapper during transition to prevent content below from jumping.
- **WP seeder guard** — always use an option flag (`{{slug}}_data_seeded`) to prevent duplicate seeding. Delete the option to force re-seed.
- **DB dumps are portable** — commit `{{project}}-db.sql.gz` to repo. Import on any machine for instant content.
- **Build before test** — after any JS/CSS change, run `npm run build` before refreshing the browser.

---

## Kickoff Checklist (for the agent)

When starting a new project from this template:

1. [ ] Parse the Project Brief — extract client info, pages, features, aesthetic
2. [ ] Confirm extracted details with the user
3. [ ] Create the repo and DDEV project (`ddev config --project-name={{slug}} --project-type=wordpress`)
4. [ ] Install WordPress (`ddev exec wp core install ...`)
5. [ ] Scaffold the custom theme with Vite + Tailwind + React + TS
6. [ ] Register CPTs and taxonomies
7. [ ] Create page templates (PHP shells + React mount points)
8. [ ] Build React components for interactive sections
9. [ ] Create the seeder with mock/placeholder content
10. [ ] Set up header, footer, and template parts
11. [ ] Configure responsive design + mobile menu
12. [ ] Run `npm run build` and verify all pages
13. [ ] Export DB dump and commit
14. [ ] Write STARTUP.md with Mac + WSL2 instructions
15. [ ] Set up `.claude/` project memory
16. [ ] Push to GitHub

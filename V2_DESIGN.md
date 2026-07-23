# V2 Design & Migration Reference

Living reference doc for the v2 redesign of Avni's portfolio. Captures the current (v1) codebase as-is, the working agreements for how we'll build v2, and the design brief as it's been described so far. Update this file as decisions are made — it's the source of truth for "why does the code look like this."

Branch: `v2` (created from `main` at commit `26bb2cc`).

---

## Decisions Log

Resolved so far (dated so we can track when a call was made):

- **2026-07-22** — Neumorphism (`shadow-neu` / `shadow-neu-i` / `.neu` / `.neu-i`) is dropped completely in v2. Not preserved anywhere, not even as a legacy/optional style.
- **2026-07-22** — `TanishqPortfolio` and `Brandshark` case studies stay dropped (not revived). v2 launches with 2 case studies (Salesken, BLive); more can be added later the same way if needed.
- **2026-07-22** — Hero grid: built both the pure-SVG wobble technique and a rough.js code-drawn technique behind a live toggle. **Decided: SVG wobble.** Rough.js looked wrong for this and was removed (component + dependency). Current tuning values: line color `#CCCCCC`, wobble 7, density 7 — still provisional ("for now"), see §11a.
- **2026-07-22** — Fonts: **Satoshi** (Fontshare) for display headings + **Inter** (Google) for body/UI + **Satisfy** (`Satisfy, Georgia, cursive`) for the handwritten accent word. Loaded via `@import` in `src/index.css`, mapped to `font-display` / `font-sans` / `font-script`. Satisfy is single-weight (400) — the accent uses `font-normal`, not bold.
- **2026-07-22** — Hero is **full viewport height** (`min-h-screen`), content vertically centered, with the hand-drawn grid filling the background (layered at `z-0`, not a negative z-index — that was hiding it behind the page's white bg). The pink **bow** illustration is removed for now (to be added later).
- **2026-07-22** — Case-study count corrected to **3** (the Figma home has three: two B:Live, one Salesken). Supersedes the earlier "2 case studies" line above. Case-study *page* links intentionally empty for now.
- **2026-07-22** — v2 colors are **provisional, sampled by eye from the Figma screenshot** (MCP rate-limited, see §11b). Only green (`#1DAF61`) + grid-grey (`204,204,204`) confirmed. All hexes are named tokens in `tailwind.config.js` to correct in one place.
- **2026-07-22** — **Home / landing page built** in v2 (Nav, Hero, Work, Experience, Footer). Navbar + Footer are shared/global, so they now also render on the not-yet-migrated pages (expected mid-migration). See §13.
- **2026-07-23** — Display font stack is `"Satoshi Variable", Satoshi, system-ui, sans-serif` (prefers a locally-installed variable Satoshi; `system-ui` fallback, NOT Inter). The Fontshare `@import` now loads the **variable** Satoshi (weight range 300–900) instead of static weights — needed because headings use `font-semibold` (600), which Satoshi's static weights (400/500/700/900) skip. Font rule (**confirmed 2026-07-23**): **all bold heading text = Satoshi; regular/description/small text = Inter; ALL green accent text = Satisfy (script).** So Hero "Effortless.", the work-heading accents ("Ticketing"/"Asset"/"actually"), and "Where I've been." are all Satisfy. The footer "work" stays Satoshi because it's pink, not green. The one green-text exception left as Satoshi is the nav logo dot (`.` in "Avni garg.") — a wordmark glyph, left pending the user's call.
- **2026-07-23** — Case-study **stats** are a full-width 4-column bar with vertical dividers (`Card.tsx`); a 3-stat case study keeps an empty 4th column so columns stay aligned, and no divider is drawn before an empty slot.
- **2026-07-23** — **Cleanup before case-study work.** Deleted: `pages/GridTest.tsx` + its `/grid-test` route (grid finalised), `App.css` (empty), the dropped `pages/TanishqPortfolio.tsx` + `pages/Brandshark.tsx` and their asset folders (`assets/portfolio-project/`, `assets/brandshark/`), and the orphaned `assets/playground/subway.png`. Removed unused deps `hamburger-react`, `react-fast-marquee`, `react-router-hash-link` (and `roughjs` was already gone). Stripped the commented-out dead code from `App.tsx`. **Kept** the neumorphism `shadow-neu`/`.neu` classes — still used by the routed-but-not-yet-migrated v1 pages (About, Playground, Salesken, BLive) and their v1 components; remove only once those are migrated. This entry supersedes the now-stale references to those files in §1, §7, and §11a below.

---

## 1. Tech Stack

| Layer | Choice |
|---|---|
| Framework | React 18.2 (function components + hooks only, no class components) |
| Language | TypeScript 5.9, `strict: true` |
| Build tool | Vite 5.1 |
| Routing | React Router v6 (`createBrowserRouter`, data router API) |
| Styling | Tailwind CSS 3.4 (primary), a handful of custom classes in `src/index.css` |
| Animation | Framer Motion 11 |
| Icons | react-icons (`fa6`, `tb`, `md` subsets) |
| Misc | `hamburger-react` (nav toggle icon), `react-fast-marquee` (installed, currently unused anywhere in the app) |
| Deploy | Vercel (SPA rewrite to `/` for client-side routing, see `vercel.json`) |
| Node | `engines.node: 22.x` in package.json (local machine currently has Node v26 — works, just noting the mismatch) |

No CSS-in-JS, no component library (shadcn/MUI/etc.), no state management library — state is local `useState` only (e.g. nav open/close).

## 2. Environment Setup

```bash
npm install        # node_modules not currently installed on this machine
npm run dev         # vite dev server (also aliased as `npm start`)
npm run build        # tsc -b && vite build → dist/
npm run lint          # eslint, max-warnings 0
npm run preview        # serve the production build locally
```

No `.env` files, no environment variables, no backend/API — fully static site.

## 3. Project Structure

```
src/
├── App.tsx                  # Router definition (createBrowserRouter) + root layout (Navbar/Outlet/Footer)
├── App.css                  # empty file, imported but unused
├── index.css                # Tailwind directives, Poppins font import, global body reset, .neu/.neu-i shadow classes
├── main.tsx                 # ReactDOM root, wraps App in RouterProvider + StrictMode
├── vite-env.d.ts            # Vite's default TS ambient types
│
├── components/               # Reusable, presentational, imported by 2+ pages (or generic enough to be)
│   ├── Navbar.tsx             # Fixed top nav, hamburger mobile menu (framer-motion), logo, links, Socials
│   ├── Footer.tsx              # Simple copyright + dev credit bar, same on every page
│   ├── Button.tsx               # Two visual modes via `nav` boolean prop; wraps react-router `Link`
│   ├── Card.tsx                  # Case-study preview card used on the homepage list (image + title + desc + CTA)
│   ├── WorkExperienceCard.tsx      # Job history card used on About page
│   ├── Socials.tsx                  # Row of 4 social icon buttons (Behance/LinkedIn/X/Instagram), hardcoded URLs
│   ├── LazyImage.tsx                 # Blur-up image loader (tiny placeholder → full image crossfade)
│   └── Error.tsx                      # Router errorElement — 404/catch-all screen
│
├── pages/                     # One component per route. Case studies are hand-written, not data-driven.
│   ├── Body.tsx                # Route: "/"  — homepage (hero, case study list, contact CTA)
│   ├── About.tsx                 # Route: "/about" — bio hero, work experience list, contact CTA
│   ├── Playground.tsx              # Route: "/playground" — masonry-ish grid of visual/UI experiments
│   ├── Salesken.tsx                  # Route: "/salesken" — case study (see naming bug in §7)
│   ├── BLive.tsx                       # Route: "/bLive" — case study
│   ├── TanishqPortfolio.tsx              # NOT routed currently (commented out in App.tsx)
│   └── Brandshark.tsx                      # NOT routed currently (commented out in App.tsx)
│
├── constants/                  # Static data, imported into pages
│   ├── index.ts                  # Barrel file — `export * from './jobs' | './workExperience' | './playground'`
│   ├── jobs.ts                     # JobData[] — powers the homepage case-study cards
│   ├── workExperience.ts             # WorkExperience[] — powers the About page timeline
│   └── playground.ts                   # PlaygroundImage[] — powers the Playground grid (row/layout driven by data)
│
└── assets/                     # Images, organized by page/case-study folder (see §8 for full inventory)
    ├── heroImage.jpg, about.jpg
    ├── blive/, salesken/, brandshark/, portfolio-project/  (case study images)
    └── playground/            (gifs + tiny blur placeholders)

public/                # avni.jpg (favicon), Avni_Garg_Resume.pdf, screenshot.png (README only, not used in-app)
```

**Pattern already in place that we'll continue:** `components/` = generic/reusable, `pages/` = route-level composition, `constants/` = data kept separate from JSX. Case studies are already independent components (not one generic template fed by props) — this matches what you asked for, so v2 case studies should keep following this precedent.

## 4. Routing Map

Defined in `src/App.tsx` via `createBrowserRouter`. All routes render inside the shared layout: `Navbar` → `<Outlet/>` → `Footer`.

| Path | Element | File | Status |
|---|---|---|---|
| `/` | `Body` | `pages/Body.tsx` | active |
| `/about` | `About` | `pages/About.tsx` | active |
| `/salesken` | `Salesken` | `pages/Salesken.tsx` | active |
| `/bLive` | `BLive` | `pages/BLive.tsx` | active |
| `/playground` | `Playground` | `pages/Playground.tsx` | active |
| `/portfolio-project` | `TanishqPortfolio` | `pages/TanishqPortfolio.tsx` | **disabled** (commented out) |
| `/brandshark` | `Brandshark` | `pages/Brandshark.tsx` | **disabled** (commented out) |
| `/pre-onboarding` | external redirect | — | **disabled** (commented out) |
| `*` (any unmatched route) | `Error` | `components/Error.tsx` | active, via `errorElement` |

Every page calls `window.scrollTo(0, 0)` in a mount `useEffect` (no scroll restoration library) and wraps its root element in a `framer-motion` fade-in (`opacity 0 → 1`, `duration: 1.5`).

## 5. Data Layer (constants/)

- **`jobs.ts`** — `JobData { imgLink, jobTitle, companyName, desc, linkTo }`. Currently 2 entries (Salesken, BLive), rendered as `Card`s on the homepage.
- **`workExperience.ts`** — `WorkExperience { id, company, period, title, description }`. 3 entries, rendered as `WorkExperienceCard`s on About.
- **`playground.ts`** — `PlaygroundImage { id, actualImgPath, placeholderImgPath, altText, containerClassName, row }`. 5 entries. Layout is driven by data: `row` groups images into flex rows, and `containerClassName` hardcodes each image's width/shadow per entry — i.e. the grid layout is authored per-image in the data file, not computed.

Case study **page content itself** (headings, problem/solution copy, impact stats) is hardcoded directly in each page's JSX — not pulled from `constants/`. That's consistent with your instruction that each case study is its own component; only the homepage summary card and About timeline are data-driven.

## 6. Current Design System (v1 — for reference, not to be carried forward as-is)

- **Font:** Poppins only, loaded via `@import` in `index.css` (Google Fonts), mapped to `font-poppins` in Tailwind config. Weights 300–700.
- **Background:** flat `rgb(241, 241, 241)` (near-white grey), set globally in `:root` and duplicated as `bg-primary` in Tailwind config.
- **Style language:** **Neumorphism** — soft dual-shadow "pressed/raised" look. Defined twice, redundantly but consistently: as `shadow-neu` / `shadow-neu-i` in `tailwind.config.js` `boxShadow`, and as `.neu` / `.neu-i` classes in `index.css`. Used on nearly every card, button, and image container. **Confirmed dropped completely in v2** (see Decisions Log) — the `shadow-neu`/`.neu` definitions stay in the codebase only until every page still using them has been migrated off, then get deleted too.
- **Color usage:** colors are **not tokenized** — they're inline Tailwind arbitrary values scattered across components, e.g. `text-[rgb(156,156,156)]` (secondary text, used ~20+ times), `text-[rgb(126,126,126)]` (button text), `text-[rgb(182,154,137)]` (tan accent — logo, homepage headline highlight), `bg-[rgb(210,170,146)]` (About page highlighted-word background). A `primary-dark` (`#1e1e1e`) background token exists in `tailwind.config.js` and is referenced (commented-out) in `index.css`, but there's no dark mode toggle anywhere — it's vestigial. **This inline/arbitrary-value pattern is exactly what your new rule (Tailwind tokens for all new colors) replaces** — so part of each component's migration will be pulling its hardcoded `rgb(...)` values into named theme colors as we touch it.
- **Layout convention:** every page uses the same shell — `px-6 md:px-[10rem]` horizontal gutter, `mt-[150px]` top offset to clear the fixed navbar, content wrapped in a `.container` div. Fixed navbar is `bg-primary`, full-width, `z-10`.
- **Case study template (repeated across Salesken/BLive/Tanishq/Brandshark):** head block (title, Project/Role/Team meta row, external "View Case Study" Behance link) → alternating full-bleed image blocks and text blocks (`About`/`Overview`, two-column `UX Problem` / `UX Solution`, `Impact`, `Reflections`), each wrapped in a `shadow-neu` rounded card.

## 6a. v2 Design System (in progress)

Tokens confirmed and added to `tailwind.config.js` so far:

| Token | Value | Tailwind classes |
|---|---|---|
| `brand.green` | `#1DAF61` | `bg-brand-green`, `text-brand-green`, `border-brand-green`, etc. |

Added under `theme.extend.colors` (not the narrower `backgroundColor`-only pattern v1 used for `primary`), so it's available across every color-based utility, not just backgrounds — that scoping gap is why v1's `bg-primary` couldn't be used as `text-primary`. Pink token(s) pending, see §11. The v1 `primary` / `primary-dark` / `neu` tokens stay untouched until the pages using them are migrated.

## 7. Known Issues / Inconsistencies (v1, pre-existing)

Not fixing these now — documenting them so they're deliberate decisions during migration, not surprises.

1. **Naming bug:** `src/pages/Salesken.tsx` internally declares and exports `const BLive = () => {...}`. It works correctly today only because `App.tsx` imports it under a local alias (`import Salesken from "./pages/Salesken"`), but the component's actual name/content is mismatched with its filename. Worth renaming when we touch that file.
2. **Orphaned pages:** `TanishqPortfolio.tsx` and `Brandshark.tsx` are fully built (content + assets) but unreachable — routes are commented out in `App.tsx` and they're not in `jobsData`. **Decided:** staying dropped for v2 (see Decisions Log). Left in place for now rather than deleted; say the word if you'd rather they be removed outright now instead of at general cleanup time.
3. `src/App.css` is imported in `App.tsx` but is an empty file — dead import.
4. `index.html` favicon: `<link rel="icon" type="image/svg+xml" href="/avni.jpg">` — MIME type says SVG, file is a JPG.
5. `subway.png` in `src/assets/playground/` is not referenced anywhere in code — orphaned asset.
6. Route casing: route is declared as `/bLive` (capital L) but the homepage card's `linkTo` uses `/blive` (lowercase) — works because React Router v6 matches case-insensitively by default, but worth normalizing.
7. `react-fast-marquee` is a dependency but isn't used anywhere currently.
8. **Lint doesn't actually cover the codebase:** `.eslintrc.cjs` has no TypeScript parser/plugin configured, and the `lint` script runs `eslint . --ext js,jsx` — since every source file is `.ts`/`.tsx`, `npm run lint` currently passes trivially without checking any real code. Fixing this properly means adding `@typescript-eslint` parser + plugin and updating the script, which will likely surface a batch of pre-existing warnings across the whole codebase — flagging as its own future cleanup task rather than doing it inline with unrelated work.

## 8. Asset Inventory & Quality Audit

Checked actual pixel dimensions (not just file size) against how each image is displayed. Flagging anything worth revisiting when we bring in Figma exports — goal is zero blur per your requirement.

| File | Dimensions | Size | Note |
|---|---|---|---|
| `heroImage.jpg`, `about.jpg`, `avni.jpg` | ~684–1440px wide | 116–176K | Circular avatar crops — fine at current display size, but small circular avatars are the easiest thing to upgrade to a crisp 2x export from Figma |
| Case study covers/screens (blive, salesken, brandshark, portfolio-project) | 1280–2100px wide | 76K–2.3M | Generally reasonable resolution for full-width display |
| `playground/*.gif` | 576–934px wide | **1.3M – 18M each** (ezy.gif alone is 18MB) | Not a resolution problem, a *weight* problem — these four GIFs total ~40MB. Worth discussing whether v2 re-encodes these as looping `<video>`/webm or optimized webp, since that's a real load-time issue independent of the redesign |
| `playground/*-small.jpg` | ~20×16px | 4K each | Intentional — these are the blur-up placeholders for `LazyImage`, not a quality bug |
| `public/screenshot.png` | 3416×6432 | 5.6M | Only referenced in `README.md`, not shipped in the app |
| `src/assets/playground/subway.png` | 2400×1589 | 4.0M | Unused (see §7.5) |

No image currently looks under-resolved for its display size in v1 — the "no blur" requirement mostly becomes relevant once new, larger hero/case-study layouts come in from Figma, since those will set the bar higher than what these assets were originally sized for.

## 9. Working Agreements for v2 (from your brief — restated here so we don't drift)

- Branch `v2`, merge back when ready (not decided when/how yet — ask before merging).
- Work **incrementally, one component/page at a time**; you control the pace and will explicitly say when to speed up.
- Preserve the current code structure/simplicity (`components/` vs `pages/` vs `constants/` split, one file per case study). Don't introduce new abstractions or restructure directories speculatively.
- Best practices, touched-file-by-touched-file — not a big-bang rewrite.
- **Tailwind is the primary styling source.** All new colors get named Tailwind theme tokens (in `tailwind.config.js`), not inline arbitrary values like today's `text-[rgb(156,156,156)]`. Plain CSS in `.css` files only as a rare fallback for things Tailwind genuinely can't express.
- All new imagery must be high-resolution — no blurry/upscaled assets.
- **No assumptions** — ask when something is unclear or undecided rather than guessing.
- Case study body copy will be filled in by you by hand — use Lorem ipsum as placeholder text during layout/build.
- Each case study stays its own component (as today), composed from shared reusable components — not one generic case-study-renderer.
- Model split: planning/docs on Sonnet (current), implementation likely on Opus or Fable once we ramp up.

## 10. v2 Design Brief (as described so far — will expand as you share Figma/images)

- Overall site: white background, green accent (`#1DAF61`), pink as a secondary/sub accent (exact hex TBD).
- Playground page: light pink background (distinct from the rest of the site).
- Hero section includes a **grid that looks hand-drawn/pencil-sketched** (not straight/mechanical lines) — needs a technical approach decision, see open questions.
- Page sections, in order: Hero → Case studies → Experience + short About blurb → Footer (shared across all pages).
- Site map: Home, About, Playground, and case study pages — 2 confirmed for launch (Salesken, BLive); Tanishq/Brandshark confirmed dropped rather than revived.
- Footer is identical across every page (already true in v1).

## 11. Open Questions

Resolved: case study lineup, neumorphism, hero grid approach, and fonts (Satoshi + Inter; script TBD) — see Decisions Log. Still need from you:

1. **Exact colors** — all v2 hexes are currently sampled-by-eye placeholders (green + grid-grey confirmed). The user will correct them directly in `tailwind.config.js`. Still ideally want: pink/magenta, footer dark-green, and the exact text greys — from Dev Mode when MCP frees up, or by eye.
2. **Dark mode** — old code has unused dark-mode tokens. In scope for v2, or drop the vestigial setup?
3. **Mobile nav** — no mobile frame provided yet. Current build keeps the 4 short nav items (WORK/FUN/ABOUT/RESUME) in a compact always-visible row (no hamburger). Confirm or share the mobile design.
4. **Real assets** — see §13 for the placeholder list (dashboard screenshots, social-proof avatars). The hero bow was removed for now, to be re-added later.

### 11b. Figma MCP is rate-limited (blocker for exact tokens)

The Figma account (student/Starter tier) allows only ~6 MCP **read** calls per **month**, and they're **exhausted** (confirmed across both the `plugin:figma` and `claude.ai Figma` connectors — the limit is account-level, so switching servers doesn't help). `whoami` is exempt (that's why access checks pass). Until it resets (monthly) or the plan is upgraded (Pro/Org, Full/Dev seat → ~200/day), design data comes **manually** from the user: high-res PNG exports + Dev Mode screenshots of variables/text-styles. Do not burn turns retrying reads.

### 11a. Hero grid (decided: SVG wobble)

Compared two techniques behind a toggle; picked one:

- **SVG wobble (chosen)** — the grid's straight lines are rebuilt as multi-point paths with small randomized perpendicular offsets (seeded per line, so it's stable rather than reshuffling on every re-render). No dependency beyond React itself.
- ~~Rough.js sketch~~ — tried, rejected ("useless") — its double-stroke/overshoot look didn't fit. Component and `roughjs` dependency both removed.

`src/components/HandDrawnGrid.tsx` is **static** and **non-tiled**. It measures its container (ResizeObserver + `useLayoutEffect`) and draws one continuous set of wobbly lines at a FIXED cell size — so cells never stretch/distort, they just crop at the edges, and more/fewer appear on resize (the earlier `preserveAspectRatio="none"` stretch was rejected). Props: `cellSize` (px, default 120), `wobble` (px jitter, default 3), `color` (default `rgb(235,235,235)`), `strokeWidth`. **History:** first attempt used an SVG `<pattern>` for tiling, but browser pattern-seam artifacts showed as faint "patches" at tile boundaries — so tiling was dropped for the measured single-SVG approach (no seams, no repetition). Hero uses `cellSize=120, wobble=3, rgb(235,235,235)`; Footer reuses it (white, low opacity) on the dark-green panel. **No** bottom gradient/fade (rejected — hard stop at the hero edge).

Temporary, unlinked route: `/grid-test` (page: `src/pages/GridTest.tsx`). On-page controls for color, wobble, and cell size for live tuning. Not linked from the navbar. Delete once the grid is finalised.

## 12. Next Steps

Home page is built (§13). Immediate follow-ups:
- User reviews the Home page visually (`npm run dev` → `/`) and corrects color tokens in `tailwind.config.js`.
- Swap the placeholder assets listed in §13 for real Figma exports.
- Then move to the next page (About / Playground / a case-study page) on the user's cue.

## 13. v2 Home Page — Build Notes

Built 2026-07-22 on branch `v2`. Home route `/` (`src/pages/Body.tsx`) now composes three section components; Navbar + Footer come from the App layout.

**New / changed files:**
- `tailwind.config.js` — v2 color tokens (`brand.*`, `ink.*`, `grid`) + fonts (`display`/`sans`/`script`) + `shadow-window`. All color hexes provisional.
- `src/index.css` — added Satoshi (Fontshare), Inter, Caveat `@import`s (kept Poppins for v1 pages).
- `src/components/Container.tsx` — **new.** Central max-width (1600px) + small side padding (`px-5 sm:px-8 lg:px-12`). One place to tune the "small margins" the user asked for.
- `src/components/BrowserFrame.tsx` — **new.** macOS-window chrome (traffic lights, URL bar, nav arrows) wrapping a screenshot. The "exact frame" the user wanted; pure CSS.
- `src/components/Hero.tsx` — **new.** Grid background (`HandDrawnGrid`) + fade, status pill, headline w/ script accent, Resume button, social-proof row, placeholder bow SVG.
- `src/components/Card.tsx` — **redesigned** from the v1 neumorphic card into the case-study card (headline + meta + stats + `BrowserFrame`). Driven by `jobsData`.
- `src/components/Work.tsx` — **new.** "WORK" label + maps `jobsData` → `Card`.
- `src/components/Experience.tsx` — **new.** "Where I've been" blurb + experience list from `workExperienceData`.
- `src/components/Navbar.tsx` — **redesigned.** Wordmark + WORK/FUN/ABOUT/RESUME, active-route pill. Fixed, white/blur. (Compact row on mobile — no hamburger; see §11.4.)
- `src/components/Footer.tsx` — **redesigned.** Dark-green panel, tone-on-tone grid, "Let's work together!!" (pink accent), Resume button, socials.
- `src/constants/jobs.ts` — **new data model** (`headline{pre,highlight,post}`, `stats[]`, `icon`, `urlBar`, empty `linkTo`), 3 case studies transcribed from the design.
- `src/constants/workExperience.ts` — values aligned to design; added optional `icon`; kept `description` (still used by the un-migrated About page).
- `src/pages/Body.tsx` — **rewritten** as `<Hero/><Work/><Experience/>`.

**PLACEHOLDERS to replace with real Figma exports** (all flagged in-code):
- ~~Case-study dashboard screenshots~~ — **done:** real thumbnails in place (`assets/blive/ticket-thumbnail.png`, `assets/blive/asset-thumbnail.png`, `assets/salesken/salesken-thumbnail.png`). Displayed at a fixed **1224:436** ratio (`aspect-[1224/436]`) with `object-cover object-top` so the top shows and the bottom is clipped.
- Hero **social-proof avatars** — coloured circles, need real customer/brand marks.
- Hero **bow** — removed for now (was a placeholder SVG); to be re-added later with the real asset.

**Real assets now in place:** company logos `src/assets/blive/blive-icon.png` + `src/assets/salesken/salesken-icon.png` (24×24, moved out of a `temp/` folder). They replaced the emoji meta icons (`⚡`/`📊`) in both the case-study cards (`jobsData[].icon`) and the experience list (`workExperienceData[].icon`) — the `icon` field now holds an imported image URL, rendered as a small `<img>`.

**Known intentional gaps:** case-study `linkTo` empty; body copy is transcribed-from-design (not lorem) since it was visible; `Socials.tsx` is now unused (left in place); the old v1 `Card` neumorphic look is gone.

**Verified:** `tsc -b` clean, `npm run build` succeeds (379 modules, no errors). Not visually verified by the agent (no headless browser available) — user checks in-browser.

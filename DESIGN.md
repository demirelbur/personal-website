# DESIGN.md

Design system & implementation guide for personal website.

---

## 1. Overview

This document defines the design system, visual language, components, layout, content structure, interactions, and implementation guidelines for the personal website of an ML engineer and researcher.

**Goal:** Build a modern, fast, accessible and content-focused website that communicates research depth, engineering skills and clear thinking.

---

## 2. Design Tokens

### 2.1 Colors

Use CSS variables with a two-layer architecture for theme switching:
- `@theme` block maps Tailwind utilities to runtime `var()` references
- `:root` defines dark (default) values
- `html[data-theme="light"]` overrides for light mode

#### Background

| Token            | Dark      | Light     |
| ---------------- | --------- | --------- |
| `--bg-primary`   | `#0B0B0C` | `#FFFFFF` |
| `--bg-secondary` | `#111113` | `#F5F5F7` |
| `--bg-elevated`  | `#17171A` | `#EBEBEF` |

#### Text

| Token              | Dark      | Light     |
| ------------------ | --------- | --------- |
| `--text-primary`   | `#FFFFFF` | `#0B0B0C` |
| `--text-secondary` | `#B3B3B8` | `#4A4A52` |
| `--text-muted`     | `#6F6F76` | `#8A8A94` |

#### Border

| Token            | Dark      | Light     |
| ---------------- | --------- | --------- |
| `--border-color` | `#1F1F23` | `#E0E0E4` |

#### Accent

| Token              | Value                      |
| ------------------ | -------------------------- |
| `--accent`         | `#7C3AED`                  |
| `--accent-hover`   | `#A78BFA`                  |
| `--accent-soft`    | `rgba(124,58,237,0.12)` (dark) / `rgba(124,58,237,0.08)` (light) |
| `--accent-blue`    | `#4F8CFF`                  |
| `--accent-purple`  | `#A855F7`                  |

> **Gradient accent:** The hero headline uses `bg-gradient-to-r from-accent-blue to-accent-purple` for a blue-to-purple gradient effect.

#### Semantic

| Token       | Value     |
| ----------- | --------- |
| `--success` | `#22C55E` |
| `--warning` | `#F59E0B` |
| `--error`   | `#EF4444` |
| `--info`    | `#22D3EE` |

---

### 2.2 Spacing (8px Grid)

Use multiples of 8.

| Token        | Value  |
| ------------ | ------ |
| `--space-1`  | 4px    |
| `--space-2`  | 8px    |
| `--space-3`  | 16px   |
| `--space-4`  | 24px   |
| `--space-5`  | 32px   |
| `--space-6`  | 48px   |
| `--space-7`  | 64px   |
| `--space-8`  | 96px   |
| `--space-9`  | 128px  |

> **Important:** These tokens override Tailwind's default spacing scale. Tailwind utilities like `w-9`, `h-9`, `gap-9` will resolve to `128px`, NOT the default `2.25rem`. When Tailwind's default scale is needed for small fixed sizes, use explicit pixel values (e.g., `w-[36px]`).

---

### 2.3 Typography

#### Fonts

```css
--font-display: "Satoshi", "Space Grotesk", sans-serif;
--font-body: "Inter", "Geist", system-ui, sans-serif;
--font-mono: "JetBrains Mono", monospace;
```

Loaded via `next/font/google`: Inter, Space Grotesk, JetBrains Mono.

#### Type Scale (Desktop)

| Style        | Size / Line height | Weight |
| ------------ | ------------------ | ------ |
| H1           | 64px / 72px        | 700    |
| H2           | 40px / 48px        | 600    |
| H3           | 28px / 36px        | 500    |
| H4           | 22px / 30px        | 500    |
| Body (base)  | 16px / 26px        | 400    |
| Small        | 14px / 22px        | 400    |
| Caption      | 12px / 18px        | 400    |

---

### 2.4 Radius & Shadow

#### Border Radius

```css
--radius-sm: 6px;
--radius-md: 12px;
--radius-lg: 16px;
```

#### Shadows

Dark:
```css
--shadow-sm: 0 2px 8px rgba(0,0,0,0.25);
--shadow-md: 0 8px 24px rgba(0,0,0,0.35);
--shadow-lg: 0 16px 48px rgba(0,0,0,0.45);
```

Light:
```css
--shadow-sm: 0 2px 8px rgba(0,0,0,0.08);
--shadow-md: 0 8px 24px rgba(0,0,0,0.12);
--shadow-lg: 0 16px 48px rgba(0,0,0,0.16);
```

---

### 2.5 Motion

#### Durations

```css
--duration-fast: 160ms;
--duration-base: 240ms;
--duration-slow: 400ms;
```

#### Easing

```css
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);
```

#### Shared Motion Config (`lib/motion.ts`)

All Framer Motion animations are centralized in `lib/motion.ts`:
- `ease` — the easing array `[0.16, 1, 0.3, 1]`
- `fadeInUp` — initial load animation (opacity + y)
- `fadeIn` — opacity-only fade
- `viewportFadeInUp` — scroll-triggered fade-in-up
- `staggeredFadeInUp(delay)` — staggered scroll-triggered fade

#### Use

- Fade-in on scroll (viewport-triggered, once)
- Hover lift (2–4px via `hover:-translate-y-0.5` or `hover:-translate-y-1`)
- Button feedback
- Staggered list reveals (0.06s delay between items)

#### Avoid

- Scroll hijacking
- Heavy animations
- Looping or decorative motion

---

### 2.6 Breakpoints

Mobile First approach.

| Name | Min width | Columns |
| ---- | --------- | ------- |
| sm   | 0px       | 4       |
| md   | 768px     | 8       |
| lg   | 1024px    | 12      |
| xl   | 1280px    | 12      |

---

## 3. Layout

### 3.1 Container

- Max width: 1280px
- Horizontal padding:
  - sm: 16px (`px-4`)
  - md: 24px (`md:px-6`)
  - lg+: 32px (`lg:px-8`)
- Auto margin on left and right.
- Implemented as reusable `Container` component.

### 3.2 Grid

- 12-column grid on desktop (lg, xl).
- Gutter: 24px.
- Hero uses `md:grid-cols-12` with 7/5 split.
- Project carousel uses horizontal scroll-snap.
- Focus cards use `md:grid-cols-2`.

### 3.3 Section Spacing

Use vertical padding. Implemented as reusable `Section` component.

- Desktop: `lg:py-32` (128px)
- Tablet: `md:py-16` (64px)
- Mobile: `py-12` (48px)

### 3.4 Safe Area

Respect `safe-area-inset` for mobile notch devices via `@supports` in globals.css.

---

## 4. Components

### 4.1 Buttons (`components/ui/Button.tsx`)

Three variants:

#### Primary

- Background: `--accent`
- Text: white
- Border radius: `--radius-sm`
- Hover: `--accent-hover`, translate-y -2px
- Shadow: `--shadow-sm`

#### Secondary

- Background: transparent
- Border: 1px solid `--border`
- Text: `--text-secondary`
- Hover: border `--text-muted`, text `--text-primary`, translate-y -2px

#### Text

- Text: `--accent`
- No background or border
- Auto-appends `→` arrow
- Hover: `--accent-hover`

### 4.2 Card (Project) (`components/ui/ProjectCard.tsx`)

- Border: 1px solid `--border`
- Background: `--bg-secondary`
- Border radius: `--radius-md`
- Padding: 24px
- Hover: background `--bg-elevated`, translate-y -4px, shadow `--shadow-md`
- Scroll-triggered fade-in via `viewportFadeInUp`

Content structure:
- Icon (40×40, rounded `--radius-sm`, background `--accent-soft`)
- Title (font-semibold, group-hover accent)
- Description (text-secondary, small size)
- Tech tags (Badge components)
- Outcome (text-muted, xs)
- "Case study →" on hover (opacity transition)

### 4.3 Projects Carousel (`components/home/ProjectsCarousel.tsx`)

Homepage projects use a horizontal scroll-snap carousel:
- Scroll-snap container with `scroll-snap-type: x mandatory`
- Cards: `scroll-snap-align: start`, full-width on mobile, 85% on desktop
- Arrow navigation buttons and pagination indicators (01 02 03 04)
- Mouse drag support for desktop interaction
- Keyboard navigation (left/right arrows)

Carousel card structure:
- Category meta (uppercase, tracking, muted)
- Title (xl–2xl, accent on hover)
- Divider line
- Summary metrics row (label/value pairs)
- Accent bar (2px, purple)
- Description
- Tech tags
- Takeaway line

### 4.4 Navbar (`components/layout/Navbar.tsx`)

- Height: 72px
- Background: transparent (blur on scroll)
- Sticky on scroll, z-50
- Logo: theme-aware image (`/logo-dark.png` / `/logo-light.png`)
- Links: from `content/navigation.ts`
- Right side: Ask AI button, theme toggle icon
- Mobile: hamburger menu with slide-down panel (includes Ask AI link)

### 4.5 Ask AI (`components/AskAI.tsx`)

A right-side slide-over chat panel for AI-powered Q&A about website content.

Components:
- `AskAIButton` — compact navbar button with lightbulb icon
- `AskAIPanel` — full slide-over panel rendered via React portal
- `useAskAI` — hook managing open/close state, Cmd+I / Ctrl+I keyboard shortcut

Panel features:
- Multi-turn chat interface with message history
- User messages as right-aligned bubbles (accent background)
- AI responses with sources (linked cards)
- Suggested questions shown when chat is empty
- "+" button for new chat
- Escape to close, backdrop click to close
- Auto-scroll to latest message
- Loading indicator (animated dots)

Design:
- Fixed right panel: `w-full md:w-[420px]`
- z-index: 999 (panel), 998 (backdrop)
- Slide-in animation: `translate-x-0` / `translate-x-full`
- Backdrop: `bg-black/40 backdrop-blur-sm`

### 4.6 Badges / Tags (`components/ui/Badge.tsx`)

- Background: `--bg-primary`
- Border: 1px solid `--border`
- Text: `--text-muted`
- Border radius: `--radius-sm`
- Padding: 4px 10px
- Font size: 12px

### 4.7 Code Block (`components/ui/CodeBlock.tsx`)

- Background: `--bg-secondary`
- Border: 1px solid `--border`
- Border radius: `--radius-md`
- Padding: 20px
- Font: `--font-mono`
- Line numbers in `--text-muted` (zero-padded)
- Keywords highlighted in `--accent`
- Shadow: `--shadow-md`

### 4.8 Publication Item (`components/ui/PublicationItem.tsx`)

- Title (font-medium, text-primary, group-hover accent)
- Authors (optional, text-muted, truncated)
- Summary (text-muted, 1 line clamp)
- Venue badge (accent-soft background, accent text, `--radius-sm`, non-clickable)
- Year (text-muted)
- Arrow link → (accent)
- Hover: background elevated, translate-y -2px
- Staggered scroll-triggered animation

### 4.9 Social Icons (`components/ui/SocialIcons.tsx`)

- Size: 20px icon inside 36×36px hit target
- Container: explicit `w-[36px] h-[36px]` (avoids spacing token override)
- Color: `--text-muted`
- Hover: `--text-primary`, background `--bg-elevated`
- Border radius: `--radius-sm`
- Platforms: GitHub, LinkedIn, Google Scholar, Email (from `content/social.ts`)

### 4.10 Theme Toggle

- Sun icon (in dark mode) / Moon icon (in light mode)
- Border radius: `--radius-sm`
- Background on hover: `--bg-elevated`
- Persists to `localStorage` via `ThemeProvider` (`lib/theme.tsx`)
- Toggles `data-theme` attribute on `<html>` element

### 4.11 Section Heading (`components/ui/SectionHeading.tsx`)

- Title: H2 scale (text-2xl → md:text-[40px])
- Subtitle: text-sm, text-secondary
- Margin bottom: 32px

### 4.12 FadeIn (`components/ui/FadeIn.tsx`)

- Reusable scroll-triggered fade wrapper
- Uses centralized `ease` from `lib/motion.ts`
- Supports custom delay

### 4.13 PostBody (`components/ui/PostBody.tsx`)

- Renders blog post content (markdown via ReactMarkdown)
- Custom component styling for headings, paragraphs, lists, links, code
- Reduced margins: h2 `mt-6 mb-2`, h3 `mt-4 mb-1.5`, p `mb-3`

---

## 5. Architecture

### 5.1 Content/Design Separation

Strict separation between HOW things look and WHAT is shown:

```
/content          ← Single source of truth for all displayed text
  profile.ts        Name, role, headline, bio, focus areas, stats, email
  projects.ts       Projects with problem/solution/impact, carousel metadata
  publications.ts   Research papers, patents with authors, venue, year (types: journal, conference, preprint, techreport, patent)
  writing.ts        Blog posts (body as template literal markdown)
  experience.ts     Work history + education (with bullet-point highlights)
  social.ts         Social links
  navigation.ts     Nav items
  copy.ts           All UI copy (section headings, button labels, page text, footer)

/components       ← Zero hardcoded text
  /layout           Container, Section, Navbar, Footer
  /home             Hero, ProjectsCarousel, SelectedProjects, ResearchPreview, WritingPreview, AboutPreview, ContactCTA
  /ui               Button, Badge, ProjectCard, PublicationItem, CodeBlock, SocialIcons, FadeIn, SectionHeading, PostBody
  AskAI.tsx         Ask AI panel (slide-over chat)

/api              ← Python serverless backend
  ask.py            FastAPI endpoint for Ask AI (Pydantic AI Agent + OpenRouter)

/scripts          ← Offline utilities
  generate-search-embeddings.py   Generate static embeddings for semantic search

/public
  search-index.json              64 records covering all site content
  search-index.embeddings.json   Pre-computed embeddings (text-embedding-3-small)

/lib              ← Shared utilities
  motion.ts         Centralized Framer Motion configs
  theme.tsx         ThemeProvider + useTheme hook (context, localStorage, data-theme toggle)

/app              ← Routes (compose layout + content)
```

### 5.2 Rules

- Components receive data via imports from `/content/*`
- Zero hardcoded English text in components or pages
- UI labels and section copy live in `content/copy.ts`
- Motion configs live in `lib/motion.ts`
- Design tokens in `globals.css` map 1:1 to this document

---

## 6. Pages & Sections

### Homepage Layout

1. Navbar
2. Hero
3. Projects Carousel
4. Research / Publications
5. Blog (Writing)
6. About
7. Contact CTA
8. Footer

### Hero Section

#### Left Column (7/12 grid)

- Role label (caption, accent, uppercase, tracking-widest) — from `profile.role`
- Headline with accent phrase — from `profile.headline` + `profile.headlineAccent`
- Supporting text — from `profile.summary`
- CTA buttons — labels from `copy.hero.cta`
- Staggered fade-in-up on load (0.1s delay between elements)

#### Right Column (5/12 grid)

- Code snippet card (CodeBlock) — domain-relevant pseudocode
- Stats card — papers/patents/citations from `profile.stats`

### About Page (`/about`)

Structured as a scannable, section-based layout (not a CV-style page):

1. **Hero** — Profile image (left) + heading, subtitle with purple accent line, intro text (right)
2. **Feature block** — "From control to production AI" wide card with purple border, icon + text
3. **Focus areas** — "What I focus on" 2×2 card grid with 56px icon containers
4. **Principles** — "How I work" lightweight 4-column row (no enclosing card)
5. **Stats strip** — Proof-point credibility bar (purple border, icon + value + label)
6. **Experience** — Cards with building icon, bullet highlights, date alignment
7. **Education** — Single-column compact cards with graduation cap icon
8. **CTA** — Centered primary (Get in Touch) + secondary (View Projects) buttons

#### Icon system (About page)

Inline SVGs (no icon library dependency). Consistent sizing:
- Feature block, focus cards, experience, education: 56×56px container (`w-14 h-14`), 20px icon (`w-5 h-5`), `rounded-[var(--radius-md)]`, `bg-accent/10`
- "How I work" principles: bare 20px icons, no container
- Stats strip: bare 20px icons, no container

#### Section labels

Uppercase, tracking-widest, `text-xs`, `text-text-muted`, consistent across all About page sections.

### Blog (`/blog`, `/blog/[slug]`)

- Post list with title, date, reading time, description
- Post detail with ReactMarkdown rendering via PostBody component
- Posts stored as template literal `body` fields in `content/writing.ts`

### Projects (`/projects`, `/projects/[slug]`)

- `/projects` — Vertical stack of cards matching carousel card style
- `/projects/[slug]` — Full case study (problem, solution, impact)

### Other Pages

- `/research` — Grouped by type (book, preprints, journals, conferences, patents)
- `/contact` — Email, social links

---

## 7. Content Rules

### Hero must answer:

- Who you are
- What you do
- Why it matters

### Projects must include:

- Problem
- Solution
- Impact (measured outcome, MANDATORY)

### Avoid:

- Generic phrases ("passionate about technology")
- Empty visuals
- Over-design
- Placeholder text

---

## 8. Accessibility

- High contrast text (WCAG AA minimum)
- Keyboard navigation
- Focus states: `2px solid --accent`, offset 2px
- Semantic HTML (header, nav, main, article, section, footer)
- Reduced motion support via `prefers-reduced-motion`
- `safe-area-inset` for notch devices
- `aria-label` on icon-only buttons and links
- Icons: `aria-hidden="true"` on decorative icons
- Dialog: `role="dialog"` and `aria-modal="true"` on Ask AI panel

---

## 9. Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4 (`@tailwindcss/postcss`, `@theme` with runtime CSS variable references for theme switching)
- Framer Motion
- MDX support via `@next/mdx`
- Python (FastAPI) serverless functions for Ask AI backend
- Pydantic AI Agent with OpenRouter (GPT-4o-mini)
- uv as Python package manager
- Vercel deployment (Next.js + Python functions)

---

## 10. Ask AI System

### Architecture

Client-side chat panel → `/api/ask` (FastAPI) → Pydantic AI Agent (OpenRouter GPT-4o-mini)

### Search pipeline

1. **Semantic search** (primary): Embed user question via OpenRouter embeddings API → cosine similarity against pre-computed vectors → top 5 records
2. **Lexical search** (fallback): Token matching with title boost (2×) and tag boost (1.5×) → top 5 records
3. **Context building**: Concatenate top records (max 6000 chars) → pass to AI agent

### Data

- `public/search-index.json` — 64 records covering all site content (id, title, section, url, tags, content)
- `public/search-index.embeddings.json` — Pre-computed embeddings (generated offline via `scripts/generate-search-embeddings.py`)

### Deployment

- `api/ask.py` runs as a Vercel Python serverless function
- `vercel.json` configures routing and Python runtime (`@vercel/python@4.5.1`)
- `requirements.txt` — minimal deps: fastapi, httpx, pydantic, pydantic-ai-slim[openai]
- Environment variable: `OPENROUTER_API_KEY` (set in Vercel dashboard)
- Local dev: Next.js rewrites `/api/ask` → `localhost:8000` (development only)

---

## 11. Success Criteria

The site is successful if:

- A user understands your profile in < 5 seconds
- Projects communicate real measured impact
- Navigation is obvious
- Performance is fast (LCP < 2.5s, CLS < 0.1)
- Design feels intentional, not trendy
- All content can be updated by editing `/content/*.ts` files only
- Ask AI provides grounded, source-backed answers about website content

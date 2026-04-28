# Plan: DIY Static Landing Page for FlugblattGestalten (Astro)

## Summary
Design and build a **static, marketable, original DIY-style** landing page for **FlugblattGestalten** using **Astro**. The page will be **mostly German**, centered on **brand story**, and include the required sections **Hero + CTA** and **How it works**, with optional lightweight story sections if needed for narrative coherence. Copy will be curated from the uploaded “Mission, Vision & Strategie” markdown, and the uploaded PNG will be used as the key visual.

## Current State Analysis
### Inputs available
- **Brand/strategy source text (canonical):** uploaded markdown  
  `/sessions/69f0b30c5ce6a3fe40931f38/uploads/9b7875cc-e7dc-474c-8af3-960980b30497_e23c4bfc-ce3f-4ca0-b611-fff0067712c0_🌻 FlugblattGestalten_ Mission, Vision & Strategie.md`
- **Key visual:** uploaded PNG (paper airplane illustration)  
  `/sessions/69f0b30c5ce6a3fe40931f38/uploads/4379d0b7-56f8-41c0-8221-3270b40981ab_8ed261dc-9ba7-45c7-bfee-a7c8755a7ce1_iahf6HFr-9NlsgsXZ-IOd1pqiR-wemake.cx-G7OciuZZ.png`

### Constraints / requirements (from user)
- Deliverable: **Astro static site**
- Style: **DIY**, creative, original, “marketable” landing page
- Language: **mostly German**
- Primary goal: **brand story**
- Required sections: **Hero + CTA**, **How it works**

### Gaps / dependencies to decide (handled as explicit decisions below)
- CTA mechanism (mailto vs external form vs messaging link)
- Final information architecture beyond the two required sections
- Hosting/deploy target (affects base URL, `site` config, analytics)

## Proposed Changes
### 1) Create Astro project scaffold (new files)
**What**
- Initialize a new Astro project in the selected folder and add a minimal set of files for a single-page landing.

**Why**
- Astro provides fast static output, simple component composition, and minimal JavaScript by default—ideal for a landing page.

**How (files)**
- `package.json`, `astro.config.mjs`, `tsconfig.json` (Astro defaults)
- `src/pages/index.astro` – compose the landing sections
- `src/layouts/BaseLayout.astro` – shared `<head>` meta, global layout
- `src/styles/tokens.css` – design tokens (colors, spacing, shadows)
- `src/styles/global.css` – base typography, link/focus styles, utilities
- `src/components/sections/Hero.astro`
- `src/components/sections/HowItWorks.astro`
- Optional for narrative coherence (only if needed to make “brand story” land):
  - `src/components/sections/Mission.astro` (short “Warum” story)
  - `src/components/sections/Values.astro` (short “Rote Linien” / values)
- `src/content/landing.de.json` (or `landing.de.ts`) – curated landing copy extracted from the canonical markdown

### 2) Add and use the key visual as an optimized asset
**What**
- Copy the uploaded PNG into the project and render it via Astro’s image handling.

**Why**
- Correct sizing and optimization; avoids layout shifts.

**How (files)**
- `src/assets/flugblatt-plane.png` (copied from upload)
- In `Hero.astro`, render with `astro:assets` (e.g., `<Image />`) and set:
  - width/height for CLS prevention
  - `alt` chosen based on whether the image is decorative or meaningful (see Decisions)

### 3) Curate copy from the markdown into landing-sized content
**What**
- Create “landing copy” by selecting high-signal lines and reformulating into short, scannable sections while preserving the authentic voice.

**Why**
- The strategy markdown is rich but too long for a landing page; a curated layer keeps the landing focused and marketable.

**How (files)**
- `src/content/landing.de.json` contains:
  - `seo`: title/description
  - `hero`: h1, subline, CTA labels, short trust/positioning bullets
  - `howItWorks`: steps (4–5)
  - optional `mission` / `values` blocks if included

### 4) Implement DIY visual system (accessible by design)
**What**
- Build a recognizable DIY aesthetic grounded in the key visual (bold ink outline + sunflower yellow + warm paper background), while maintaining excellent readability.

**Why**
- “DIY” must feel handcrafted but still be usable and credible (conversion + trust).

**How (files)**
- `src/styles/tokens.css` defines CSS variables:
  - `--ink`, `--paper`, `--sun` (yellow accent), neutrals
  - spacing scale, radii, shadows
- `src/styles/global.css` implements:
  - base typography and vertical rhythm
  - clear focus styles (`:focus-visible`)
  - reusable patterns: “pasted note” cards, marker highlights, dotted underlines
  - motion guarded by `prefers-reduced-motion`
- Section components add scoped CSS for:
  - collage-like hero layout
  - step cards for “How it works”
  - torn-paper separators (SVG/CSS) if used

### 5) Accessibility & semantics (first-class)
**What**
- Ensure the page is semantically correct, keyboard-navigable, readable, and motion-safe.

**Why**
- DIY style must not reduce accessibility; also improves SEO and professionalism.

**How (files)**
- `BaseLayout.astro`:
  - `<html lang="de">`
  - skip link
  - coherent heading structure (single `h1`, section `h2`)
- Buttons/links:
  - CTA as `<a>` (if it navigates) or `<button>` (if it triggers)
  - explicit focus rings and sufficient contrast
- Motion:
  - any rotations/wobbles disabled under reduced motion

### 6) SEO + social preview basics
**What**
- Add essential meta tags and sensible default OpenGraph/Twitter cards.

**Why**
- Landing pages are shared; SEO metadata supports discoverability and credibility.

**How (files)**
- `BaseLayout.astro` includes:
  - `<title>`, meta description
  - canonical (if site URL known)
  - OG tags (`og:title`, `og:description`, `og:image`)
- If a social image is needed:
  - create `public/og.png` (simple graphic derived from the brand colors/key visual)

### 7) Optional: lightweight CTA/contact section
**What**
- Implement the CTA destination so the landing page “closes the loop”.

**Why**
- Even a brand-story page should offer a clear next step.

**How (files)**
- If mailto: CTA links to `mailto:...` and/or `/#mitmachen` with contact block
- If external form: CTA links to the form provider URL (no dynamic backend)
- If messaging: CTA links to Signal/Telegram/Instagram, etc.

## Assumptions & Decisions (decision-complete)
### Decisions already made with the user
- Framework: **Astro**
- Page language: **mostly German**
- Primary goal: **brand story**
- Required sections: **Hero + CTA**, **How it works**

### Decisions to lock before implementation (choose defaults if not provided)
1. **CTA mechanism (default if not specified):** `mailto:` link plus a visible email address in the footer.
2. **Page sections beyond required (default):** add one short “Warum wir das machen” (Mission) block between Hero and How it works, to support the brand-story goal without bloating the page.
3. **Image alt strategy (default):** treat the key visual as **meaningful brand asset** and provide a concise German alt text.
4. **Hosting/site URL (default):** leave `site` unset initially; add canonical/absolute OG URLs once a deploy URL is known.

## Verification Steps
### Build / run
- Install dependencies and run:
  - `npm install`
  - `npm run dev` (manual browser review)
  - `npm run build`
  - `npm run preview`

### Content & UX checks
- Confirm the page reads as a coherent **brand story** in mostly German (no walls of text).
- Confirm the primary CTA is obvious and works (links/anchors correct).
- Confirm responsiveness on small mobile, tablet, desktop.

### Accessibility checks
- Keyboard navigation: skip link, focus order, visible focus ring on all interactive elements.
- Headings: single `h1`, logical `h2`s.
- Contrast: ink-on-paper passes; avoid yellow text on white.
- Motion: verify reduced-motion disables any decorative animations.

### SEO checks
- Lighthouse: check SEO + Best Practices (ensure title/description present).
- Validate OG tags render (basic preview sanity check).


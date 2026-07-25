---
alwaysApply: true
description: Core Astro project conventions and patterns for FlugblattGestalten.de
---

# Astro Project Guidelines

## Framework & Runtime

- This is an **Astro 7.1.3** project with TypeScript
- Use **Bun** as package manager (not npm/pnpm/yarn)
- Node.js ≥22.12.0 required
- Deployment target: **Cloudflare Pages** via Wrangler

## Project Commands

```sh
bun run dev        # Development server (localhost:4321)
bun run build      # Production build to ./dist/
bun run preview    # Preview production build locally
bun run check      # Run Astro & TypeScript checks
```

Always run `bun run check` before committing changes.

## Component Architecture

### File Structure

- **Astro components**: `.astro` files in `src/components/`
- **Section components**: Major page sections in `src/components/sections/`
- **Layouts**: Page templates in `src/layouts/`
- **Assets**: Optimized images in `src/assets/`, static files in `public/`

### Naming Conventions

- Component files: PascalCase (e.g., `Hero.astro`, `HowItWorks.astro`)
- Layout files: PascalCase with "Layout" suffix (e.g., `BaseLayout.astro`)
- Style files: kebab-case (e.g., `tokens.css`, `global.css`)

### Component Patterns

```astro
---
// TypeScript frontmatter for logic
import type { Props } from "./types";
import content from "@/content/landing.de.json";

interface Props {
  // Define props with TypeScript
}
---

<section class="component-name">
  <!-- Semantic HTML -->
</section>

<style>
  /* Scoped styles using design tokens */
  .component-name {
    padding: var(--space-lg);
    color: var(--color-text-primary);
  }
</style>
```

## Content Management

### Centralized Content

- All text content lives in `src/content/landing.de.json`
- Import and destructure: `import content from '@/content/landing.de.json'`
- Structure: `{ seo, hero, mission, howItWorks, contact, footer }`

### Content Updates

- **Never hardcode** text directly in components
- Always reference the JSON structure
- Changes to `landing.de.json` reflect immediately in dev mode

## Styling System

### Design Tokens

- All design tokens defined in `src/styles/tokens.css`
- Categories: Colors, Typography, Spacing, Breakpoints
- **Always use tokens**, not hardcoded values

### Token Usage

```css
/* ✅ Correct */
color: var(--color-primary);
padding: var(--space-md);
font-size: var(--font-size-h2);

/* ❌ Avoid */
color: #ff6b00;
padding: 24px;
font-size: 2rem;
```

### Global Styles

- Import in `BaseLayout.astro`: `import '@/styles/global.css'`
- Prefer scoped component styles over global CSS
- Use semantic HTML to minimize styling needs

## TypeScript

### Strict Mode

- TypeScript strict mode enabled
- Define interfaces for component props
- Type all imports from content files

### Path Aliases

```ts
import BaseLayout from "@/layouts/BaseLayout.astro";
import content from "@/content/landing.de.json";
```

## Image Handling

### Optimization

- Local images: `src/assets/` → optimized by Astro
- Static images: `public/` → served as-is
- Use Astro's `<Image>` component for optimization

```astro
---
import { Image } from "astro:assets";
import logo from "@/assets/flugblatt-plane.png";
---

<Image src={logo} alt="Description" />
```

## Performance Best Practices

- Minimize client-side JavaScript (keep it static where possible)
- Use Astro's partial hydration for interactive components
- Optimize images with WebP format
- Leverage Cloudflare CDN for asset delivery

## Accessibility

- Use semantic HTML5 elements
- Provide meaningful alt text for images
- Ensure keyboard navigation works
- Test color contrast ratios
- Use ARIA labels where semantic HTML isn't sufficient

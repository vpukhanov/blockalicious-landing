# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the landing website for Blockalicious, a privacy-first Safari website blocker. The site is intentionally minimal - designed to fit on a single screen (desktop) and "let the app speak for itself" rather than being sales-y or SEO-heavy.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000 (uses Turbopack)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

### Tech Stack
- **Next.js 16** with App Router
- **Tailwind CSS 4** (using new @import syntax and @theme inline)
- **TypeScript** with strict mode enabled
- **Google Fonts**: Crimson Pro (display) and Manrope (body) loaded via next/font

### Design Philosophy
The design uses an "Editorial Clarity" aesthetic:
- Single-screen two-column layout (text left, screenshot right)
- Warm amber/gold accents (#d4a574) on cream backgrounds (#f7f5f2)
- Custom CSS keyframe animations (fadeInUp, fadeIn, slideRight, scaleIn) with staggered delays
- Responsive screenshots: macOS screenshot on desktop (lg+), iPhone screenshot on mobile

### File Organization
```
app/
├── assets/          # Static imports for screenshots (screenshot-macos.png, screenshot-ios.png)
├── privacy/         # Privacy policy page
├── globals.css      # CSS variables, custom animations, utility classes
├── layout.tsx       # Root layout with font configuration
└── page.tsx         # Home page (main landing)
```

### Key Implementation Details

**Fonts**: Fonts are configured in `layout.tsx` and exposed via CSS variables (`--font-crimson`, `--font-manrope`) which are then mapped to Tailwind theme variables (`--font-display`, `--font-body`). Use `font-[family-name:var(--font-display)]` for headlines and `font-[family-name:var(--font-body)]` for body text.

**Images**: Screenshots are imported statically from `app/assets/` and used with Next.js `<Image>` component with `priority` prop for above-fold loading. Responsive logic shows macOS screenshot on desktop, iPhone screenshot on mobile with `rounded-[3rem]` to match device radius.

**Styling**: Tailwind CSS 4 uses new syntax - `@import "tailwindcss"` instead of separate layers. Custom CSS variables are defined in `:root` and mapped via `@theme inline` directive. Animation classes are custom CSS in `globals.css`.

**Privacy Policy**: Simple standalone page at `/privacy` with back button. Published date is January 30, 2026. Privacy message emphasizes that Blockalicious collects no data and works entirely offline.

## Design Constraints

- Keep the landing page to a single screen on desktop
- Avoid sales-y or over-explanatory copy - let the app speak for itself
- Make platform availability (iOS & macOS) clear
- Maintain the warm, editorial aesthetic with Crimson Pro and amber accents
- No emojis unless explicitly requested

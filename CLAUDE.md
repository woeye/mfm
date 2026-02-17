# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

"musings from munich" (mfm) — a blog built on **Payload CMS 3.76.1** with **Next.js 16** and **PostgreSQL**. The Payload admin manages content; Next.js renders the public frontend.

## Commands

```bash
pnpm dev                # Start dev server (Next.js + Payload)
pnpm devsafe            # Clean .next/ then start dev
pnpm build              # Production build
pnpm start              # Start production server
pnpm lint               # ESLint
pnpm generate:types     # Regenerate Payload TypeScript types (src/payload-types.ts)
pnpm generate:importmap # Regenerate Payload import map
make docker             # Build Docker image (linux/amd64)
make push               # Push to registry.musingsfrommunich.eu
```

## Path Aliases

- `@/*` → `src/*`
- `$/*` → project root
- `@public/*` → `public/*`
- `@payload-config` → `src/payload.config.ts`

## Architecture

### Route Groups (src/app/)

- `(frontend)/` — Public blog. Homepage redirects to `/posts`. Routes: `/posts`, `/posts/[slug]`, `/[slug]` (static pages).
- `(payload)/` — Payload admin UI (`/admin`) and API routes (`/api/*`, `/api/graphql`).

### Collections (src/collections/)

- **Posts** — Blog posts with Lexical rich text, categories, related posts, featured photo. Supports drafts, versioning (max 50), live preview, and scheduled publishing. Access: public sees published only; authenticated sees all.
- **Pages** — Static pages with same draft/publish pattern as Posts.
- **Media** — Image uploads with focal point, WebP optimization, and generated sizes (thumbnail 300px, wide 496×288). Stored in `public/media/`.
- **Categories** — Post categorization with title and slug.
- **Users** — Payload auth.

### Globals (src/globals/)

- **SiteSettings** — Default SEO metadata (author, description, image) used as fallback.

### Content Blocks (src/components/blocks/)

Lexical editor uses custom blocks: **MediaBlock** (single image) and **GalleryBlock** (multi-image with justified-layout + LightGallery). Block JSX converters are registered in `src/components/Content/`.

### Key Patterns

- **Access control**: `src/access/authenticatedOrPublished.ts` gates draft vs. published content.
- **Cache revalidation**: Post save hook (`src/collections/Posts/hooks/revalidatePost.ts`) invalidates Next.js cache.
- **Live preview**: Draft mode via `draftMode()` with `PREVIEW_SECRET`, listener in `src/components/LivePreviewListener/`.
- **SEO plugin** configured in `src/plugins/index.ts` with URL/image generators.
- **Lexical editor config**: `src/fields/defaultLexical.ts`.

## Code Style

- Single quotes, no semicolons, 2-space indent, trailing commas (Prettier + ESLint)
- ESLint ignores: `.next/`, `.vscode/`, `public/`, `src/migrations/`, `src/app/(payload)/`
- TypeScript strict mode, no `any`

## Styling

Tailwind CSS v4 with custom theme colors (wenge, fawn, rose-gold, moonstone-blue) defined in `src/app/(frontend)/app.css`. 7-column responsive grid system. Serif headings (DM Serif Display), sans body (Noto Sans).

## Environment

Requires Node ≥24.9.0 and pnpm. Key env vars: `DATABASE_URI` (postgres), `PAYLOAD_SECRET`, `PREVIEW_SECRET`. See `.env.example` or `docker-compose.yml` for reference.

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
npm install          # Install dependencies
npm run dev          # Start dev server at http://localhost:3000
npm run build        # Build for production (outputs to out/)
npm run lint         # Run ESLint
npx serve out/       # Serve production build locally
```

## Deployment

Static site deployed to AWS S3 + CloudFront:

```bash
npm run build
aws s3 sync out/ s3://vaultscaler-com-static-site --delete
aws cloudfront create-invalidation --distribution-id E1Y23HE42FDF87 --paths "/*"
```

## Architecture

**Next.js 14 static site** using App Router with `output: 'export'` for S3/CloudFront hosting.

### Key Configuration Files
- `lib/site.ts` - Central site config (name, URL, launch date, SEO keywords)
- `next.config.js` - Static export, trailing slashes, unoptimized images
- `tailwind.config.ts` - Custom accent color (#0071e3), content paths

### Page Structure
Each page in `app/*/page.tsx` contains:
- Metadata export for SEO (title, description, Open Graph, Twitter Cards)
- Page-specific JSON-LD structured data
- The page component

Root layout (`app/layout.tsx`) provides:
- Site-wide Organization JSON-LD schema
- Navigation component
- Footer with contact info

### SEO Infrastructure
- `app/robots.ts` - Crawler directives
- `app/sitemap.ts` - Dynamic XML sitemap generation
- `components/JsonLd.tsx` - Structured data helper component
- Team and Docs pages are set to noindex

### Styling
Tailwind CSS with minimal, clean aesthetic:
- Custom accent color via `tailwind.config.ts`
- Mobile-first responsive (sm/md/lg breakpoints)
- Rounded cards (`rounded-2xl`), generous whitespace

## Product Context



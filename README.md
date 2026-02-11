# VaultScaler — Pre-Launch Site

Next.js 14 static site with App Router, Tailwind CSS, and SEO optimization. Deployed on AWS S3 + CloudFront.

## Quick Start

```bash
npm install          # Install dependencies
npm run dev          # Dev server at http://localhost:3000
npm run build        # Production build (outputs to out/)
npm run lint         # Run ESLint
```

## Tech Stack

- **Next.js 14** (App Router) with static export
- **React 18** + TypeScript
- **Tailwind CSS** for styling
- **JSON-LD** structured data for SEO
- **Formspree** for waitlist form submission
- **AWS S3 + CloudFront** hosting

## Pages

| Route | Description | Indexed |
|-------|-------------|---------|
| `/` | Home | Yes |
| `/radix` | Radix Platform overview | Yes |
| `/radix/core` | Radix Core — GPU scheduling optimization | Yes |
| `/radix/studio` | Radix Studio — LLM orchestration & governance | Yes |
| `/lev` | Lev — Agentic Engineering System | Yes |
| `/solutions/hyperscale` | Hyperscale GPU fleets | Yes |
| `/solutions/ml-teams` | ML & Research teams | Yes |
| `/solutions/product-teams` | Product & Engineering teams | Yes |
| `/contact` | Contact info | Yes |
| `/waitlist` | Waitlist signup form | Yes |
| `/waitlist/thank-you` | Post-signup confirmation | Yes |
| `/docs` | Docs hub | No |

### Redirect Pages

These exist to preserve old URLs:

| Route | Redirects to |
|-------|-------------|
| `/product` | `/radix` |
| `/pricing` | `/radix` |
| `/solutions/corporate` | `/solutions/ml-teams` |
| `/solutions/gpu-fleet-optimization` | `/solutions/hyperscale` |
| `/solutions/training` | `/solutions/hyperscale` |
| `/solutions/infrastructure` | `/solutions/hyperscale` |

## Configuration

### Site Config

Edit `lib/site.ts` for product name, URL, launch date, contact email, and SEO keywords.

### Static Export

Configured in `next.config.js` with `output: 'export'`, trailing slashes, and unoptimized images (for S3 hosting).

## Deployment

```bash
npm run build
aws s3 sync out/ s3://vaultscaler-com-static-site --delete
aws cloudfront create-invalidation --distribution-id E1Y23HE42FDF87 --paths "/*"
```

## Key Files

```
app/
├── layout.tsx                       # Root layout, nav, footer, org schema
├── page.tsx                         # Home
├── radix/
│   ├── page.tsx                     # Platform overview
│   ├── core/page.tsx                # Radix Core
│   └── studio/page.tsx              # Radix Studio
├── lev/page.tsx                     # Lev
├── solutions/
│   ├── hyperscale/page.tsx          # Hyperscale segment
│   ├── ml-teams/page.tsx            # ML teams segment
│   └── product-teams/page.tsx       # Product teams segment
├── contact/page.tsx                 # Contact
├── waitlist/page.tsx                # Waitlist form
├── robots.ts                        # Crawler rules
└── sitemap.ts                       # Dynamic sitemap
components/
├── Navigation.tsx                   # Main nav
├── JsonLd.tsx                       # Structured data helper
├── TrackedLink.tsx                  # CTA link with analytics
└── AnalyticsProvider.tsx            # Analytics context
lib/
└── site.ts                          # Central site config
```

## SEO

- Per-page metadata (title, description, Open Graph, Twitter Cards)
- JSON-LD structured data on every page
- `robots.ts` + `sitemap.ts` for crawlers
- Canonical URLs on all pages

---

**Target Launch: April 6, 2026**

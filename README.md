# VaultScaler — Radix Core Pre-Launch Site

Next.js 14 static site with App Router, Tailwind CSS, and full SEO optimization.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run dev server
npm run dev
# Open http://localhost:3000

# Build for production
npm run build
# Output: out/
```

## 📦 Tech Stack

- **Next.js 14** (App Router) with static export
- **React 18** + TypeScript
- **Tailwind CSS** for styling
- **JSON-LD** structured data for SEO
- **robots.ts** and **sitemap.ts** for crawlers

## 📄 Pages

| Route | Description | SEO |
|-------|-------------|-----|
| `/` | Home with pre-launch banner | ✅ Indexed |
| `/product` | Radix Core features | ✅ Indexed |
| `/security` | Security & data residency | ✅ Indexed |
| `/pricing` | Freemium vs Radix+ | ✅ Indexed |
| `/roadmap` | Launch timeline | ✅ Indexed |
| `/team` | Team bios (noindex) | ❌ Not indexed |
| `/docs` | Docs hub (noindex) | ❌ Not indexed |
| `/contact` | Contact info | ✅ Indexed |

## 🔧 Configuration

### Site Config

Edit `lib/site.ts` to update:
- Product name and URL
- Launch date
- Contact email
- SEO keywords

### Static Export

The site is configured for static export in `next.config.js`:

```js
output: 'export'
```

This generates a static site in the `out/` directory.

## 🚢 Deployment

### S3 + CloudFront

```bash
# Build static site
npm run build

# Sync to S3
aws s3 sync out/ s3://vaultscaler-com-static-site --delete

# Invalidate CloudFront cache
aws cloudfront create-invalidation \
  --distribution-id E1Y23HE42FDF87 \
  --paths "/*"
```

### Deploy Script

Create `deploy.sh`:

```bash
#!/bin/bash
set -e

echo "Building site..."
npm run build

echo "Syncing to S3..."
aws s3 sync out/ s3://vaultscaler-com-static-site \
  --delete \
  --exclude "*.DS_Store"

echo "Invalidating CloudFront..."
aws cloudfront create-invalidation \
  --distribution-id E1Y23HE42FDF87 \
  --paths "/*"

echo "✅ Deployed successfully!"
```

## 📊 SEO Features

### Per-Page Metadata
- Custom titles and descriptions
- Open Graph and Twitter Card tags
- Canonical URLs
- Keywords

### JSON-LD Structured Data
- **Organization** schema (site-wide)
- **SoftwareApplication** schema (Product page)
- **Product** schema (Pricing page)
- **TechArticle** schema (Security page)
- **ItemList** schema (Roadmap page)

### Search Engine Optimization
- `robots.ts` - Crawler directives
- `sitemap.ts` - Dynamic XML sitemap
- Semantic HTML structure
- Alt text on images
- Mobile-responsive design

## 🎨 Styling

Tailwind CSS with custom configuration in `tailwind.config.ts`.

Key design principles:
- Minimal, clean aesthetic
- Generous whitespace
- Rounded cards (`rounded-2xl`)
- Blue accent color (`#0071e3`)
- Mobile-first responsive

## 📝 Content Updates

### Adding a New Page

1. Create `app/new-page/page.tsx`
2. Add metadata and JSON-LD
3. Update `app/sitemap.ts` to include the new route
4. Add link to `components/Navigation.tsx`

### Updating Copy

All marketing copy is in the page files under `app/*/page.tsx`. Edit directly with accurate technical details.

### Assets

Place images in `public/`:
- `og.jpg` - Open Graph image (1200×630px)
- `dashboard-preview.png` - Product screenshot
- `favicon.ico` - Site icon

## ✅ Pre-Launch Checklist

- [x] All 8 pages created with accurate copy
- [x] JSON-LD structured data on every page
- [x] robots.ts and sitemap.ts configured
- [x] Open Graph / Twitter Card meta tags
- [x] Team page linked in navigation
- [x] Docs page set to noindex
- [x] Static export configured
- [ ] Replace placeholder images with real assets
- [ ] Update GitHub docs URLs in `/docs`
- [ ] Run Lighthouse audit (target: Perf ≥90, SEO 100, A11y ≥95)
- [ ] Test on mobile devices
- [ ] Deploy to staging S3 bucket first

## 🔍 Testing

```bash
# Dev server
npm run dev

# Production build test
npm run build
npx serve out/

# Lighthouse audit
npx lighthouse http://localhost:3000 --view
```

## 📚 Key Files

```
site/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx             # Home page
│   ├── product/page.tsx     # Product details
│   ├── security/page.tsx    # Security posture
│   ├── pricing/page.tsx     # Pricing tiers
│   ├── roadmap/page.tsx     # Launch timeline
│   ├── team/page.tsx        # Team bios (noindex)
│   ├── docs/page.tsx        # Docs hub (noindex)
│   ├── contact/page.tsx     # Contact info
│   ├── robots.ts            # Crawler rules
│   └── sitemap.ts           # Dynamic sitemap
├── components/
│   ├── Navigation.tsx       # Main nav
│   └── JsonLd.tsx           # Structured data helper
├── lib/
│   └── site.ts              # Site configuration
├── public/
│   ├── og.jpg               # Social preview image
│   └── dashboard-preview.png # Product screenshot
└── next.config.js           # Static export config
```

## 🎯 Acceptance Criteria

✅ **Messaging Accuracy**
- Offline dashboard, zero-egress, read-only, 7-day local timeseries
- Install → insight < 60 seconds
- Radix+ license-gated, still offline

✅ **Navigation**
- /team linked in main nav
- All 8 routes functional

✅ **SEO Complete**
- Titles + meta descriptions on all pages
- Open Graph / Twitter Cards
- JSON-LD structured data
- robots.ts + sitemap.ts

✅ **Privacy**
- No analytics or third-party trackers
- Team page: noindex
- Docs page: noindex

## 📖 Additional Documentation

- Next.js App Router: https://nextjs.org/docs/app
- Tailwind CSS: https://tailwindcss.com/docs
- JSON-LD: https://json-ld.org/
- Schema.org: https://schema.org/

---

**Target Launch: March 2, 2026**

Built with Next.js 14 • Deployed on AWS S3 + CloudFront

# Changelog

## [1.0.0] - 2025-11-04

### Added
- **Pre-launch website rebuild** with Next.js 14 + App Router
- Complete site with 8 pages: Home, Product, Security, Pricing, Roadmap, Team, Docs, Contact
- Accurate Radix Core messaging:
  - Offline dashboard + read-only observer
  - Zero egress by default
  - 7-day local timeseries
  - Install → insight < 60 seconds
  - Radix+ license-gated engine (still offline)
- **SEO infrastructure:**
  - Per-page metadata (titles, descriptions, Open Graph, Twitter Cards)
  - JSON-LD structured data (Organization, SoftwareApplication, Product, TechArticle, ItemList)
  - Dynamic `robots.ts` and `sitemap.ts`
  - Canonical URLs on all pages
- **Team page** properly linked in main navigation (noindex for privacy)
- **Docs hub** linking to 9 canonical GitHub docs (noindex)
- Static export configuration for S3 + CloudFront deployment
- Tailwind CSS with clean, minimal design
- No analytics or third-party trackers

### Technical
- Next.js 14.2.15 with App Router
- React 18.3.1 + TypeScript 5
- Tailwind CSS 3.4.14
- Static export via `output: 'export'`
- Mobile-responsive design
- Semantic HTML structure

### Documentation
- Comprehensive README with deployment instructions
- S3 sync + CloudFront invalidation commands
- Pre-launch checklist
- Content update guide

---

**Target launch: November 15, 2025**

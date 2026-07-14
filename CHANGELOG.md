# Changelog

## [3.0.0] - 2026-07-14

### Changed
- **Repositioned to edge computer-vision security for art.** The company is now
  bespoke, consulting-led security for galleries, museums, and private collections —
  on-premise, owned end to end, nothing leaving the building. Kept the three pillars
  (at the edge / honest by design / owned end to end) and the doctrine ("the
  intelligence is ours — not rented from a platform that can cut us off"; "nothing goes
  to the cloud"); made them specific to art.
- **Removed Vivaliux entirely** — product page, nav item, cards, contact interest
  options, `lib/site.ts` product list, waitlist flow, and all vineyard/farm/living-
  systems meta, keywords, JSON-LD, `llms.txt`, and OG assets. No stubs or redirects.
- **New dark, gallery-at-night design.** Near-black grounds, warm off-white type, one
  restrained alert-red used sparingly, serif display (Fraunces) + Inter body. Restraint
  over decoration; typography carries it.
- **New pages / nav:** Home · How it works · Approach · Contact (+ Privacy). Copy is the
  approved positioning; SEO/OG/JSON-LD/`llms.txt` rewritten to art-security.

## [2.0.0] - 2026-07-02

### Changed
- **Company-homepage restructure — two-level brand.** The homepage (`/`) is now
  **VaultScaler**, an edge computer-vision company; **Vivaliux** is product one at
  `/vivaliux`. Site copy leads with the instrument and the company, not "private."
- **Deploy cutover to push-to-deploy CI/CD.** Production now ships via GitHub Actions
  (`.github/workflows/deploy.yml`): PRs build as a required check; merging to `main`
  deploys to S3 (`vaultscaler-com-static-site`) + CloudFront (`E1Y23HE42FDF87`) via a
  scoped OIDC role. The manual `aws s3 sync` path is retired.
- Upgraded to **Next.js 16** (App Router, static export).

### Notes
- Strategy and positioning are owned by the canonical VaultScaler doc set (Project
  Instructions, Handover, Hyperlocal Doctrine, What VaultScaler Is, How We Decide).

## [1.0.0] - 2025-11-04

### Added
- Initial pre-launch website rebuild with Next.js + App Router.
- **SEO infrastructure:**
  - Per-page metadata (titles, descriptions, Open Graph, Twitter Cards)
  - JSON-LD structured data (Organization, SoftwareApplication, Product, ItemList)
  - Dynamic `robots.ts` and `sitemap.ts`
  - Canonical URLs on all pages
- Static export configuration for S3 + CloudFront deployment.
- Tailwind CSS with a clean, minimal design.
- No analytics or third-party trackers.

# Changelog

## [3.1.0] - 2026-08-24

### Fixed
- **Removed the false "working gallery" claim.** Metonymic Debris has no physical premises —
  the Arts Factory lease was declined. Every present-tense claim of a gallery/exhibition space
  in the Las Vegas Arts District (homepage "first deployment" section, footer, `approach`
  metadata/copy, `llms.txt`) is replaced with the true claim: VaultScaler's first live
  deployment protects the founder's own paintings in his own studio. Removed "working
  internationally" (no clients yet, in any country) — replaced with "Based in Las Vegas."
- **Fixed the site's contact routing.** `SITE.email` (used in the JSON-LD `Organization`/
  `ContactPoint` schema, the contact page, and the privacy page) was `bpruess@vaultscaler.com`
  — a former co-founder Ian has no ongoing relationship with. Changed to `ian@vaultscaler.com`.
  Also removed a second `bpruess@vaultscaler.com` mailto from the `/docs` placeholder page.

### Changed
- **Repositioned as a design consultancy, not an installer/vendor**, per Las Vegas Municipal
  Code 6.18 (privilege licence required to install/service/monitor electronic security
  systems — Ian is not licensed). Copy across `approach`, the homepage, `layout.tsx`'s
  JSON-LD `Offer`, and `llms.txt` now states plainly that VaultScaler designs, specifies, and
  configures; a licensed contractor performs the physical installation. Fixed a
  title/body contradiction on the approach page's step 4 ("We install and tune it" / body
  already said a contractor installs).
- **Widened the addressable vertical** beyond art-only: added "Private residence" to the
  contact form's space types and the approach page's "Who it's for" list, widened a few
  generic "your gallery" references to "your building"/"your space." Art remains the lead
  and the proof; no new capability claims were added.

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

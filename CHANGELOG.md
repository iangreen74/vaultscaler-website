# Changelog

## [3.3.0] - 2026-08-24

### Removed
- **Formspree removed entirely.** The contact form posted to a Formspree endpoint
  (`xyzrdzdb`) that Ian didn't set up and didn't control the destination inbox for —
  almost certainly configured by the former co-founder. It also sat oddly against
  VaultScaler's own pitch (nothing goes through a third party). `ContactForm` is now a
  direct `mailto:ian@vaultscaler.com` call-to-action button, with the address also shown
  as visible, copyable text — no form fields, no third-party relay. Removed the
  now-unused `SPACE_TYPES` export and `trackFormSubmit` analytics helper, and rewrote the
  privacy page's "how enquiries are handled" section to match (no more Formspree mention).

### Changed
- **Repositioned as private, on-premise security for anyone who values discretion —
  not art-only.** The buyer is someone with something to protect and a reason to value
  discretion: private collectors, residences, and discreet professional spaces, as well
  as galleries. Art remains the origin story and the strongest proof (the founder-artist
  narrative and the studio deployment are untouched), but no longer reads as the ceiling.
  - Headline unchanged verbatim ("It watches everything in your building. And nothing
    ever leaves it.") — it was already vertical-agnostic.
  - Eyebrow: "Edge computer-vision security for art" → "Private, on-premise AI security."
  - Homepage subhead rewritten to name art as the origin, then widen.
  - "Art security has been solved badly, in three specific ways" → "Discreet security has
    been solved badly, in three specific ways" — problems 1 and 2 generalized beyond art;
    problem 3 (hardware on the artwork) reframed as an example of a broader principle
    ("In a gallery, that's tags glued behind canvases... The same problem shows up
    anywhere something valuable can't be wired without the wiring diminishing it.").
  - Page titles, meta descriptions, OG/Twitter tags, `SITE.keywords`, the Organization/
    Offer JSON-LD, and `llms.txt` updated to match — these are what search and AI
    crawlers read, and they said "for art" everywhere.
  - No new capability claims added; everything stated remains checkable against
    `SYSTEM_STATE.md` and `STATUS.md`. Consultancy framing from the previous release
    (design/specify/configure, licensed contractor installs) is unchanged.

## [3.2.0] - 2026-08-24

### Fixed
- **Diagnosed and fixed a stale-deploy caching gap.** After the [3.1.0] merge, the live
  site kept serving the old copy for a stretch. The pipeline itself wasn't broken (the S3
  sync and CloudFront invalidation both ran and were verified directly against AWS), but
  `aws s3 sync` set no `Cache-Control` on any object, so every page depended on
  CloudFront's 1h default TTL plus each visitor's own browser cache — neither of which is
  cleared by an invalidation. Fixed: hashed `_next/static/*` assets now get
  `public, max-age=31536000, immutable`; everything else (HTML, `robots.txt`,
  `sitemap.xml`, `llms.txt`, favicons) gets `no-cache, must-revalidate`, so no layer can
  hold a stale page past the next request. Verified live post-deploy: correct
  `Cache-Control` headers on both an HTML page and a hashed asset, and the corrected copy
  confirmed present in the live HTML, `llms.txt`, meta description, and JSON-LD.

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

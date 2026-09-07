# Changelog

## [4.1.0] - 2026-08-26

New hero, and art removed as the site's frame — both per direct feedback on [4.0.0].

### Changed
- **New hero.** Killed the previous headline ("It watches everything in your building.
  And nothing ever leaves it.") — its "it" was ambiguous between the building and the
  system, and anything that requires parsing fails. The new headline is the line that
  used to close the page: **"Have something worth keeping private?"** It asks instead of
  declaring, self-selects the reader, and names no vertical, no technology, and no
  reason — deliberately. Supporting line: "Tell us about your space, your material, or
  whatever you need to keep confidential." Below that, a short practice paragraph drawn
  from §1 of the positioning document. Eyebrow unchanged (Private AI consultancy). The
  closing CTA, no longer able to reuse the old hero line, is now "It stays between us." —
  quieter, certain, doesn't repeat the opening.
- **Architecture-practice method surfaced on the homepage without a click.** A condensed
  six-step strip (Survey · Design · Specify · Build & tune · Licensed install · Ongoing
  care) sits between "Why now" and the service-line cards, linking to `/approach` for the
  full version. Previously this only existed on the Approach page.

### Removed
- **Art removed as the site's frame, everywhere.** Deleted the "first deployment" section
  as written — the paintings, the studio-as-gallery, "every art-security company claims
  it was built by people who understand galleries," and the links to the gallery and the
  founder as art proof. Replaced with a shorter "Proof of operation" section: the system
  is real, running, in the founder's own building — no paintings, no studio, no
  art-security framing.
  - Generalized problem 03 in the "solved badly" section: "tags glued behind canvases,
    laser curtains" → protective hardware that has to touch or constrain the thing it
    protects, stated as a universal pattern, not an art-specific one.
  - Generalized the "It knows the difference" and "Nothing touches the artwork" proof
    cards away from paintings/hanging language.
  - `/how-it-works`'s entire `SEES` array was art-specific ("Every work, individually,"
    "the work on it," "a busy opening," "your collectors") — rewritten object-agnostic.
  - `/approach`'s "Where we are" section dropped "Built by an artist who protects his own
    work" / "the founder's own studio" for "Proven on the founder's own deployment" / "the
    founder's own building."
  - Trimmed art-specific SEO keywords (`art security`, `gallery security`,
    `artwork removal detection`, etc.) from `lib/site.ts` and the Organization JSON-LD's
    `knowsAbout` — these are the technical "frame" search engines and AI crawlers read.
    Kept `private collection security` / `private residence security` (not art-specific;
    §3's "collections and cultural property" tier explicitly covers cars, watches, wine).
  - `llms.txt` rewritten to match throughout.
  - **Kept, per explicit instruction**: galleries, museums, and private collectors remain
    as *one example* inside the homepage/`llms.txt` "who it's for" section — the only
    place art vocabulary still appears anywhere on the site.
- Regenerated `og.jpg` — both the headline (now matches the new hero) and, previously,
  the subline (already updated in 4.0.0 to "A private AI consultancy").

## [4.0.0] - 2026-08-26

Structural rebuild from `business/strategy/VaultScaler_Positioning_and_Services.md` (v1,
the new single source of truth for site/sales copy). Previous passes widened the
language but left the site's structure as a single-product security company; this pass
changes the structure. Two pages added, one substantially revised, homepage restructured
around the practice rather than one product.

### Added
- **`/services`** — the four ways to engage VaultScaler, one section each: Private
  Security Systems (built and shipping), Private Security Assessment (written report,
  fixed fee, no purchase required), Private AI Advisory (vendor-independent, day rate or
  fixed scope), and Private Knowledge & Agentic Discovery (capability proven inside the
  security product; applying it to documents is stated plainly as a bespoke build, not a
  shelf product). Status labels are load-bearing, not decorative — only the first line
  reads as shipping.
- **`/why-local`** — the architecture-vs-policy argument ("their privacy is a policy,
  ours is an architecture"): the checkable consequences (nothing to breach or subpoena,
  the owner is the only path back to their own data, support delivered in person because
  there's no other way in), and a GDPR passage written as a compliance argument, not a
  values one.
- **Data model**: `lib/site.ts` now exports a typed `SERVICES` array (name, status,
  status tone, summary, deliverable, engagement) consumed by both the homepage service
  cards and the Services page, so the two can't drift out of sync.

### Changed
- **Homepage restructured around the practice, not the product.** Headline kept exactly
  verbatim ("It watches everything in your building. And nothing ever leaves it.") — it
  already worked for every service line. Everything under it reframed: what VaultScaler
  is (a private AI consultancy; security is the first application, not the definition),
  why now (capable models on small hardware + AI collapsing the cost of bespoke), the
  four service lines surfaced as cards linking into `/services/#slug` (not buried on a
  sub-page), a "who it's for" section written as recognition (professional
  confidentiality, private wealth, collections, discreet commercial spaces) rather than a
  target list, and a "why local" pull-quote teasing the new page. The existing
  three-problems/proof-of-concept sections are kept, now positioned as support for the
  security line specifically rather than the whole pitch.
- **`/approach` rewritten as the architecture-practice method**: survey → design →
  specify → build and tune → licensed contractor installs → ongoing care if wanted. Six
  explicit steps instead of five, adding "specify" as its own step (the judgement being
  sold, not the box) and "ongoing care" in place of a vague closing step. Removed the
  page's own "who it's for" list now that the homepage carries a fuller version — kept
  the studio/jurisdiction section, added "available internationally" (permitted by §7)
  and a cross-link to `/why-local`.
- **Organization JSON-LD** (`layout.tsx`) replaced a single `makesOffer` with a full
  `hasOfferCatalog` listing all four service lines, each with its own availability
  (`PreOrder` for the one bespoke-build line, `InStock` for the rest) — this and `llms.txt`
  are what search engines and AI crawlers actually read.
- **`llms.txt` rewritten in full**: the practice, the thesis, all four services, who it's
  for, the local/GDPR argument, the six-step method, the proof, and an explicit "what is
  not claimed" section mirroring §7 of the positioning document.
- Nav (`Navigation.tsx`, `SiteFooter.tsx`) gained **Services** and **Why local**.
  `how-it-works` cross-links to the Services entry it supports. `contact` and `privacy`
  copy widened past "your space and what's on the walls" to also cover advisory/discovery
  material, with a new privacy passage stating that engagement material is reviewed on
  hardware VaultScaler controls, never uploaded to a third-party AI service.
- Regenerated `og.jpg`'s subline to "A private AI consultancy" to match the new eyebrow.

### Not claimed (verified against §7 and `STATUS.md`)
- No existing client installations beyond the founder's own studio — copy says "first
  design partners," never "our clients" in the plural.
- No claim of already operating internationally — "available internationally," matching
  §7's exact permitted phrasing, not "working internationally."
- No monitoring service, alarm dispatch, or law-enforcement integration mentioned
  anywhere, because none exists.
- Private Knowledge & Agentic Discovery is described as a proven pattern applied to a new
  domain via bespoke builds — never as a finished, off-the-shelf product.
- Every capability claim under Private Security Systems (zone/absence detection,
  owner-controlled face recognition or obfuscation, natural-language query over events) is
  checked against `business/product/STATUS.md` and `API_AUTH.md` — all verified shipped
  and deployed, not roadmap.

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

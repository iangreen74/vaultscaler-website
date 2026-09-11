# VaultScaler — company website

The marketing site for **VaultScaler**, an edge computer-vision company, and its first
product, **Vivaliux**. Next.js 16 static export, hosted on AWS S3 + CloudFront and
shipped by push-to-deploy CI/CD.

## Brand architecture (two levels)

- **VaultScaler** — the company. Edge computer vision: turning ordinary cameras into
  instruments you can trust, running on hardware the customer owns. Lives at the
  homepage (`/`).
- **Vivaliux** — **product one.** Honest measurement for living systems (measure →
  remember → catch real change; prediction is earned, not promised). Lives at
  `/vivaliux`.

"Runs on hardware you own / data never leaves your machine" is a **capability**, never
the headline. For company positioning and strategy, the canonical source of truth is the
VaultScaler doc set — *Project Instructions*, *Handover*, *Hyperlocal Doctrine*, *What
VaultScaler Is*, and *How We Decide* — not this repo; the docs here describe the site.

## Quick start

```bash
npm install          # Install dependencies
npm run dev          # Dev server at http://localhost:3000
npm run build        # Static production build → out/
npx serve out/       # Serve the production build locally
```

## Tech stack

- **Next.js 16** (App Router) with static export (`output: 'export'`)
- **React 18** + TypeScript
- **Tailwind CSS** (brand tokens in `tailwind.config.ts`)
- **JSON-LD** structured data for SEO
- **AWS S3 + CloudFront** hosting

## Pages

| Route | Description | Indexed |
|-------|-------------|---------|
| `/` | VaultScaler company homepage | Yes |
| `/vivaliux` | Vivaliux — product one | Yes |
| `/contact` | Contact | Yes |
| `/waitlist` | Waitlist signup form | Yes |
| `/waitlist/thank-you` | Post-signup confirmation | Yes |
| `/privacy` | Privacy notice | Yes |
| `/docs` | Docs hub | No |

## Deployment — push-to-deploy CI/CD

Deploys are automated by GitHub Actions (`.github/workflows/deploy.yml`). There is **no
manual `aws s3 sync`** — the pipeline is the only path to production.

- **Every pull request** runs the `build` job (static export). This is a **required
  check** — a PR cannot merge unless it builds.
- **Merging to `main`** runs the deploy job: it assumes a scoped AWS role via **OIDC**
  (`vars.AWS_DEPLOY_ROLE_ARN`, region `us-east-1`), syncs the build to S3
  (`vaultscaler-com-static-site`, `--delete`), and invalidates CloudFront
  (`E1Y23HE42FDF87`). Production deploys are serialized so overlapping merges can't race.

**Merge-to-`main` is the go-live gate.** Opening or building a PR never deploys; only a real
push to `main` does.

As of 2026-09-11, Claude Code owns this loop end to end (branch → PR → merge → deploy)
without asking, for both this site and iangreen.io — but only once the deploy pipeline
itself enforces the gate a human review used to: build succeeds, post-deploy content
verification passes (diff the live site against the built artifact, not just a 200), and a
rollback path exists and has been tested. **This pipeline does not have those two checks
yet** — it invalidates CloudFront and stops; there is no post-deploy diff and no rollback
step. Add them before treating merges here as autonomous; until then, this repo still
effectively wants Ian's go before merging to `main`. See `~/Desktop/ian-green/business/product/iangreen-io/CLAUDE.md`
for the full policy and the exception list (money, DNS/domain, destroying/recreating AWS
infra, deleting repos/branches, force-pushing, new public business claims — all still
Ian's regardless of pipeline state).

## Configuration

- `lib/site.ts` — central site config (name, URL, contact email, SEO keywords).
- `next.config.js` — static export, trailing slashes, unoptimized images (for S3).
- `tailwind.config.ts` — brand color tokens and content paths.

## Key files

```
app/
├── layout.tsx          # Root layout: nav, footer, Organization JSON-LD
├── page.tsx            # VaultScaler company homepage (/)
├── vivaliux/page.tsx   # Vivaliux product page (/vivaliux)
├── contact/page.tsx    # Contact
├── waitlist/page.tsx   # Waitlist form
├── privacy/page.tsx    # Privacy notice
├── docs/page.tsx       # Docs hub (noindex)
├── robots.ts           # Crawler rules
└── sitemap.ts          # Dynamic sitemap
components/
├── Navigation.tsx      # Main nav
├── SiteFooter.tsx      # Footer
├── VaultScalerLogo.tsx # Brand mark
├── ContactForm.tsx     # Contact form
├── WaitlistForm.tsx    # Waitlist form
├── FAQ.tsx             # FAQ block
├── JsonLd.tsx          # Structured-data helper
└── AnalyticsProvider.tsx
lib/
├── site.ts             # Central site config
└── analytics.ts        # Analytics helpers
```

## SEO

- Per-page metadata (title, description, Open Graph, Twitter Cards)
- JSON-LD structured data on every page
- `robots.ts` + `sitemap.ts` for crawlers; the Docs hub is `noindex`
- Canonical URLs on all pages

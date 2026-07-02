# CLAUDE.md

## Custom Agents

This project has specialized agents for startup operations. Invoke with `/[agent-name]`:

| Command | Agent | Purpose |
|---------|-------|---------|
| `/brand` | Brand Architect | Vision, mission, values, voice, brand identity |
| `/category` | Category Design | Market framing, competitive worldview, thought leadership |
| `/saas` | SaaS Agreements | Draft MSAs, order forms, license terms |
| `/fundraising` | Fundraising & Capital | Runway models, investor targeting, dataroom |
| `/gtm` | GTM & Revenue | ICP, pricing, sales scripts, funnel design |
| `/pitch` | Deck & Story | Investor decks, one-pagers, pitch narratives |
| `/risk` | Risk & Structure | Incorporation, equity, cap table, tax planning |
| `/mentor` | Mentor | Cofounder, investor, partner negotiations |
| `/customer` | Product & Discovery | Pain mapping, roadmap, interview analysis |
| `/tech` | Technical Architecture | MVP planning, build vs buy, system design |
| `/metrics` | Metrics & Feedback | KPIs, weekly summaries, experiment tracking |
| `/finance` | Startup Finance | Unit economics, P&L, scenario modeling |
| `/frontend` | Frontend Dev | Next.js, React, TypeScript, Tailwind |
| `/growth` | Growth | SEO, analytics, conversion optimization |
| `/messaging` | Website Messaging | Headlines, CTAs, conversion copy |
| `/security` | Web Security | Forms, headers, scripts, PCI readiness |
| `/prospect` | University Prospecting | Research labs, stakeholders, LinkedIn intel, pain signals |
| `/social` | Social Media Strategist | Content planning, post drafting, tone consistency, X/LinkedIn |
| `/brand-orchestrator` | Brand Orchestrator | Orchestrate market-facing deliverables through Brand → Category → execution |

## Agent Collaboration

Agents are designed to work together with a clear upstream/downstream hierarchy:

### Brand & Identity Layer (upstream — informs everything external)
- **Brand** owns vision, mission, voice, and identity — all external-facing agents consult Brand first
- **Category** owns market framing and competitive worldview — feeds Pitch, GTM, Growth, Messaging

### Execution Layer (downstream — executes within brand guardrails)
- **Messaging** translates brand voice into page-level conversion copy
- **Pitch** adapts brand narrative for investor audiences
- **GTM** applies brand positioning to sales motions and ICP targeting
- **Growth** applies brand voice to content strategy and SEO
- **Social** translates brand voice and category angles into founder-led social content

### Operational Collaboration
- **Prospect** finds qualified leads, feeds to **GTM** for outreach sequences
- **GTM** feeds ICP to **Customer**, **Messaging**, and **Prospect**
- **Customer** pain points inform **Pitch**, **Product**, and **Prospect** targeting
- **Tech** validates promises made by **GTM** and **Pitch**
- **Finance** pulls from **GTM** (revenue) and **Tech** (costs)
- **Fundraising** uses **Pitch** materials and **Finance** models
- **Risk** reviews equity/legal implications across all agents
- **Security** escalates infrastructure to **Tech**, legal to **Risk**
- **Metrics** tracks **Prospect** → **GTM** → customer conversion rates
- **Social** receives angles from **Category**, voice from **Brand**, ICP from **GTM**
- **Social** engagement insights feed to **Metrics** and **Prospect**

## Guardrails

All agents follow these principles:
- No fabricated metrics or false claims
- Label assumptions clearly
- Escalate high-stakes decisions (equity, legal, compliance)
- Optimize for long-term trust over short-term wins

## Messaging
> Positioning (two-level): **VaultScaler is an edge computer-vision company** — it turns ordinary
> cameras into instruments you can trust, running on hardware the customer owns (the company / door-
> opener). **Vivaliux is product one** — honest measurement for living systems (measure → remember →
> catch real change; prediction is earned, not promised). The homepage (`/`) is the company; the
> product lives at `/vivaliux`. "Private" is a *capability* ("data never leaves your machine"), never
> the headline. Markets: research labs, vineyards, indoor & vertical farms, and other controlled &
> living systems. Claim discipline: measurement language only — a change in the measurement is never
> sold as a change in the organism. No cannabis on the public site; no light/reflectance technical
> claims; no fake/unbuilt products.

Strategy and positioning are owned by the canonical VaultScaler doc set — *Project
Instructions*, *Handover*, *Hyperlocal Doctrine*, *What VaultScaler Is*, *How We Decide*.
Treat those as the source of truth; this file stays operational, not strategic.

## Build & Development Commands

```bash
npm install          # Install dependencies
npm run dev          # Start dev server at http://localhost:3000
npm run build        # Build for production (outputs to out/)
npm run lint         # Run ESLint
npx serve out/       # Serve production build locally
```

## Deployment

Push-to-deploy CI/CD via GitHub Actions (`.github/workflows/deploy.yml`) — **no manual
`aws s3 sync`**. Every PR runs the `build` job (required check); **merging to `main`**
assumes a scoped AWS role via OIDC (`vars.AWS_DEPLOY_ROLE_ARN`, `us-east-1`), syncs to S3
(`vaultscaler-com-static-site --delete`), and invalidates CloudFront (`E1Y23HE42FDF87`).
Merge-to-`main` is the go-live gate and belongs to Ian; a PR build never deploys.

## Architecture

**Next.js 16 static site** using App Router with `output: 'export'` for S3/CloudFront hosting.

### Key Configuration Files
- `lib/site.ts` - Central site config (name, URL, launch date, SEO keywords)
- `next.config.js` - Static export, trailing slashes, unoptimized images
- `tailwind.config.ts` - Custom accent color (#0071e3), content paths

### Page Structure
Each page in `app/*/page.tsx` contains:
- Metadata export for SEO (title, description, Open Graph, Twitter Cards)
- Page-specific JSON-LD structured data

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
Brand tokens live in `tailwind.config.ts` (primary blues `primary-1..4`, mint pop `pop-light`/
`pop-dark`, grey scale). Light, clean aesthetic:
- Custom accent color via `tailwind.config.ts`
- Mobile-first responsive (sm/md/lg breakpoints)
- Rounded cards (`rounded-2xl`), generous whitespace


# CLAUDE.md

## Custom Agents

This project has specialized agents for startup operations. Invoke with `/[agent-name]`:

| Command | Agent | Purpose |
|---------|-------|---------|
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

## Agent Collaboration

Agents are designed to work together:
- **Prospect** finds qualified leads, feeds to **GTM** for outreach sequences
- **GTM** feeds ICP to **Customer**, **Messaging**, and **Prospect**
- **Customer** pain points inform **Pitch**, **Product**, and **Prospect** targeting
- **Tech** validates promises made by **GTM** and **Pitch**
- **Finance** pulls from **GTM** (revenue) and **Tech** (costs)
- **Fundraising** uses **Pitch** materials and **Finance** models
- **Risk** reviews equity/legal implications across all agents
- **Security** escalates infrastructure to **Tech**, legal to **Risk**
- **Metrics** tracks **Prospect** → **GTM** → customer conversion rates

## Guardrails

All agents follow these principles:
- No fabricated metrics or false claims
- Label assumptions clearly
- Escalate high-stakes decisions (equity, legal, compliance)
- Optimize for long-term trust over short-term wins


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



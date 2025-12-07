# VaultScaler SEO Improvement Plan

This document outlines all SEO fixes to implement. Each section explains:
- **What** will be changed
- **Why** it matters (in plain English)
- **The exact code** that will be added

---

## Summary of Changes

| File | Changes |
|------|---------|
| `app/page.tsx` | Add Twitter Card, canonical URL, JSON-LD schema |
| `app/product/page.tsx` | Add Twitter Card, Open Graph |
| `app/contact/page.tsx` | Add Twitter Card, keywords, JSON-LD schema |
| `app/get-radix/page.tsx` | Add Twitter Card, Open Graph, keywords, FAQ schema |
| `app/security/page.tsx` | Add Twitter Card, canonical URL |
| `lib/site.ts` | No changes needed |
| `app/layout.tsx` | Already complete (has Twitter, OG, JSON-LD) |

---

## Fix 1: Home Page (`app/page.tsx`)

### What's Missing
- No Twitter Card metadata
- No canonical URL
- No JSON-LD structured data

### Why It Matters
- **Twitter Card**: When someone shares your home page on Twitter/LinkedIn, it will show a rich preview card instead of plain text
- **Canonical URL**: Tells Google "this is THE official home page URL" - prevents duplicate content issues
- **JSON-LD**: Helps Google understand this is a WebSite with specific products, enabling rich search results

### Code Changes

**Current metadata (lines 5-13):**
```tsx
export const metadata: Metadata = {
  title: 'Radix - AI Operations Platform | Train Faster, Deploy Smarter',
  description: 'Cut training costs by 21% and govern every LLM call. The AI operations platform for teams that refuse to waste compute or compromise on governance.',
  openGraph: {
    title: 'Radix - AI Operations Platform',
    description: 'Cut training costs by 21% and govern every LLM call. No stack changes. No vendor lock-in.',
    type: 'website',
  },
};
```

**New metadata:**
```tsx
import { SITE } from '@/lib/site';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Radix - AI Operations Platform | Train Faster, Deploy Smarter',
  description: 'Cut training costs by 21% and govern every LLM call. The AI operations platform for teams that refuse to waste compute or compromise on governance.',
  alternates: {
    canonical: SITE.url,
  },
  keywords: SITE.keywords,
  openGraph: {
    title: 'Radix - AI Operations Platform',
    description: 'Cut training costs by 21% and govern every LLM call. No stack changes. No vendor lock-in.',
    type: 'website',
    url: SITE.url,
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'Radix AI Operations Platform' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Radix - AI Operations Platform',
    description: 'Cut training costs by 21% and govern every LLM call. No stack changes. No vendor lock-in.',
    images: ['/og.jpg'],
  },
};
```

**Add JSON-LD inside the component (before closing `</>`)**:
```tsx
const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "VaultScaler",
  "url": SITE.url,
  "description": "AI operations platform for GPU training optimization and LLM governance",
  "potentialAction": {
    "@type": "SearchAction",
    "target": `${SITE.url}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string"
  }
};

// Add at end of component, before </>
<JsonLd data={webSiteSchema} />
```

---

## Fix 2: Product Page (`app/product/page.tsx`)

### What's Missing
- No Twitter Card metadata
- No Open Graph images

### Why It Matters
- Social shares of your product page will look unprofessional without preview cards
- Currently inherits root layout OG, but page-specific is better for click-through rates

### Code Changes

**Current metadata (lines 6-12):**
```tsx
export const metadata = {
  title: `Radix Platform — ${SITE.product}`,
  description:
    "The Radix Platform optimizes training and inference. Radix Core delivers measurable GPU training throughput improvements. Radix Studio provides LLM orchestration, governance, and cost control.",
  alternates: { canonical: `${SITE.url}/product` },
  keywords: SITE.keywords,
};
```

**New metadata:**
```tsx
export const metadata: Metadata = {
  title: `Radix Platform — ${SITE.product}`,
  description:
    "The Radix Platform optimizes training and inference. Radix Core delivers measurable GPU training throughput improvements. Radix Studio provides LLM orchestration, governance, and cost control.",
  alternates: { canonical: `${SITE.url}/product` },
  keywords: SITE.keywords,
  openGraph: {
    title: 'Radix Platform - GPU Training & LLM Governance',
    description: 'Radix Core for 21% GPU throughput gains. Radix Studio for LLM orchestration and governance.',
    url: `${SITE.url}/product`,
    type: 'website',
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'Radix Platform' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Radix Platform - GPU Training & LLM Governance',
    description: 'Radix Core for 21% GPU throughput gains. Radix Studio for LLM orchestration and governance.',
    images: ['/og.jpg'],
  },
};
```

---

## Fix 3: Contact Page (`app/contact/page.tsx`)

### What's Missing
- No Twitter Card metadata
- No keywords
- No JSON-LD structured data

### Why It Matters
- **JSON-LD ContactPage schema**: Helps Google understand this is a contact page, may show contact info in search results
- **Twitter Card**: Social shares look better

### Code Changes

**Current metadata (lines 5-10):**
```tsx
export const metadata = {
  title: "Contact",
  description:
    "Get in touch with the VaultScaler team. Reach out for enterprise licensing, partnerships, or to schedule a demo.",
  alternates: { canonical: `${SITE.url}/contact` },
};
```

**New metadata:**
```tsx
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Contact VaultScaler - Enterprise Licensing & Demos",
  description:
    "Get in touch with the VaultScaler team. Reach out for enterprise licensing, partnerships, or to schedule a demo.",
  alternates: { canonical: `${SITE.url}/contact` },
  keywords: [...SITE.keywords, "contact", "demo", "enterprise licensing"],
  openGraph: {
    title: 'Contact VaultScaler',
    description: 'Reach out for enterprise licensing, partnerships, or to schedule a demo.',
    url: `${SITE.url}/contact`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact VaultScaler',
    description: 'Reach out for enterprise licensing, partnerships, or to schedule a demo.',
    images: ['/og.jpg'],
  },
};
```

**Add JSON-LD inside the component:**
```tsx
const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact VaultScaler",
  "description": "Get in touch with the VaultScaler team for enterprise licensing, partnerships, or demos.",
  "url": `${SITE.url}/contact`,
  "mainEntity": {
    "@type": "Organization",
    "name": "VaultScaler",
    "email": SITE.email,
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "sales",
      "email": "bpruess@vaultscaler.com",
    },
  },
};

// Add at end of component, before </>
<JsonLd data={contactSchema} />
```

---

## Fix 4: Get Radix / Pricing Page (`app/get-radix/page.tsx`)

### What's Missing
- No Twitter Card metadata
- No Open Graph metadata
- No keywords
- No FAQ schema (you have FAQ-style content that could earn rich snippets)

### Why It Matters
- **FAQ Schema**: Google can show expandable FAQ sections directly in search results - this is HUGE for visibility
- **Twitter/OG**: Pricing page shares will look professional

### Code Changes

**Current metadata (lines 6-12):**
```tsx
export const metadata: Metadata = {
  title: "Get Radix — Core & Studio Pricing",
  description: "Get Radix Core for GPU scheduling optimization ($28/GPU/month) or Radix Studio for LLM orchestration & governance (from $29/month). Start with a free trial.",
  alternates: {
    canonical: `${SITE.url}/get-radix`,
  },
};
```

**New metadata:**
```tsx
export const metadata: Metadata = {
  title: "Get Radix — Core & Studio Pricing",
  description: "Get Radix Core for GPU scheduling optimization ($28/GPU/month) or Radix Studio for LLM orchestration & governance (from $29/month). Start with a free trial.",
  alternates: {
    canonical: `${SITE.url}/get-radix`,
  },
  keywords: [...SITE.keywords, "pricing", "GPU scheduling pricing", "LLM governance pricing", "free trial"],
  openGraph: {
    title: 'Radix Pricing - Core & Studio Plans',
    description: 'Radix Core: $28/GPU/month. Radix Studio: from $29/month. Start with a free 14-day trial.',
    url: `${SITE.url}/get-radix`,
    type: 'website',
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'Radix Pricing' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Radix Pricing - Core & Studio Plans',
    description: 'Radix Core: $28/GPU/month. Radix Studio: from $29/month. Start with a free 14-day trial.',
    images: ['/og.jpg'],
  },
};
```

**Add FAQ schema inside the component (after existing JsonLd components):**
```tsx
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does Radix Core cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Radix Core costs $28/GPU/month for production use. A free 14-day trial with up to 400 GPUs is available."
      }
    },
    {
      "@type": "Question",
      "name": "How much does Radix Studio cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Radix Studio Team starts at $29/month for 1 user and 3 models. Studio Professional is $199/month for 5 users and 20 models."
      }
    },
    {
      "@type": "Question",
      "name": "Is there a free trial?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Radix Core offers a full-featured 14-day trial. Radix Studio Team tier also includes a trial period."
      }
    },
    {
      "@type": "Question",
      "name": "What platforms does Radix Core support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Radix Core works with Kubernetes, Slurm, and Ray. No stack changes are required - install via Helm chart."
      }
    }
  ]
};

// Add after existing JsonLd components
<JsonLd data={faqSchema} />
```

---

## Fix 5: Security Page (`app/security/page.tsx`)

### What's Missing
- No Twitter Card metadata
- Should verify canonical URL exists

### Code Changes

Add to existing metadata:
```tsx
twitter: {
  card: 'summary_large_image',
  title: 'Security & Trust - VaultScaler',
  description: 'Air-gapped deployment, SLSA Level 3 attestations, zero-egress architecture. Enterprise security for AI operations.',
  images: ['/og.jpg'],
},
```

---

## What These Fixes Will Do For You

### Immediate Benefits
1. **Professional social sharing** - Links shared on Twitter, LinkedIn, Slack will show rich preview cards
2. **No duplicate content issues** - Canonical URLs ensure Google indexes the right version of each page
3. **Consistent branding** - All pages will have proper OG images and descriptions

### Search Result Enhancements (may take weeks to appear)
1. **FAQ rich snippets** - Your pricing page may show expandable FAQs directly in Google results
2. **Better knowledge panel** - Organization schema helps Google understand your company
3. **Product information** - Pricing and product details may appear in search results

### Long-term SEO Value
1. **Faster indexing** - Structured data helps Google crawl and understand your site
2. **Higher click-through rates** - Rich results get more clicks than plain blue links
3. **Voice search readiness** - Structured data is used by voice assistants

---

## Implementation Checklist

When ready to implement, work through these in order:

- [ ] **1. Home page** (`app/page.tsx`)
  - [ ] Add SITE and JsonLd imports
  - [ ] Add canonical, keywords, twitter to metadata
  - [ ] Expand openGraph with url and images
  - [ ] Add WebSite JSON-LD schema

- [ ] **2. Product page** (`app/product/page.tsx`)
  - [ ] Add Metadata type import
  - [ ] Add openGraph and twitter to metadata

- [ ] **3. Contact page** (`app/contact/page.tsx`)
  - [ ] Add JsonLd and Metadata imports
  - [ ] Add keywords, openGraph, twitter to metadata
  - [ ] Add ContactPage JSON-LD schema

- [ ] **4. Get Radix page** (`app/get-radix/page.tsx`)
  - [ ] Add keywords, openGraph, twitter to metadata
  - [ ] Add FAQPage JSON-LD schema

- [ ] **5. Security page** (`app/security/page.tsx`)
  - [ ] Add twitter to metadata

- [ ] **6. Test changes**
  - [ ] Run `npm run build` to ensure no errors
  - [ ] Test social sharing previews at https://cards-dev.twitter.com/validator
  - [ ] Validate structured data at https://validator.schema.org/

---

## Files That Are Already Good

These files don't need changes:
- `app/layout.tsx` - Already has complete Twitter, OG, and Organization JSON-LD
- `app/sitemap.ts` - Properly generates sitemap with all pages
- `app/robots.ts` - Correctly configured
- `lib/site.ts` - Good keyword list and config
- `app/team/page.tsx` - Correctly set to noindex
- `app/roadmap/page.tsx` - Correctly set to noindex
- `app/docs/page.tsx` - Correctly set to noindex

---

## Estimated Time to Implement

- Fix 1 (Home): ~10 minutes
- Fix 2 (Product): ~5 minutes
- Fix 3 (Contact): ~10 minutes
- Fix 4 (Get Radix): ~15 minutes
- Fix 5 (Security): ~5 minutes
- Testing: ~15 minutes

**Total: ~60 minutes**

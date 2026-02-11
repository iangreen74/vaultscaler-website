// Route: /solutions/product-teams (Product & Engineering Teams Landing Page)
import type { Metadata } from 'next';
import Link from 'next/link';
import { TrackedCTALink } from '@/components/TrackedLink';
import { SITE } from '@/lib/site';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Product & Engineering Teams: Ship AI Products Faster | VaultScaler',
  description: 'Complete system for AI-powered product development. Lev handles the engineering lifecycle with Golden Spec methodology so you ship features that compound—not churn. From architecture to production support.',
  alternates: {
    canonical: `${SITE.url}/solutions/product-teams`,
  },
  keywords: [
    'AI product development',
    'AI coding tools',
    'product engineering platform',
    'AI engineering system',
    'agentic coding',
    'AI software delivery',
    'product team productivity',
    'engineering automation',
    'AI SDLC',
    'Golden Spec methodology',
    'AI SRE',
    'production AI coding',
  ],
  openGraph: {
    title: 'Product & Engineering Teams: Ship AI Products Faster | VaultScaler',
    description: 'Complete system for AI-powered product development. Lev handles the engineering lifecycle so you ship features that compound—not churn.',
    type: 'website',
    url: `${SITE.url}/solutions/product-teams`,
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'Product & Engineering Teams Solutions' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Product & Engineering Teams: Ship AI Products Faster | VaultScaler',
    description: 'Complete system for AI-powered product development. Lev handles the engineering lifecycle so you ship features that compound—not churn.',
    images: ['/og.jpg'],
  },
};

export default function ProductTeamsPage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Product & Engineering Teams Solutions",
    "description": "Complete system for AI-powered product development. Lev is an agentic engineering system that architects, builds, deploys, and supports your software with Golden Spec methodology.",
    "url": `${SITE.url}/solutions/product-teams`,
    "provider": {
      "@type": "Organization",
      "name": "VaultScaler",
      "url": SITE.url,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": SITE.url
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Solutions",
        "item": `${SITE.url}/solutions`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Product & Engineering Teams",
        "item": `${SITE.url}/solutions/product-teams`
      }
    ]
  };

  return (
    <>
      <JsonLd data={pageSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* Hero Section */}
      <section className="relative min-h-[clamp(600px,85vh,1000px)] flex items-center justify-center bg-gradient-to-br from-primary-4 via-primary-3 to-primary-3 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background: `
                repeating-linear-gradient(-5deg,
                  transparent 0px,
                  transparent 16px,
                  rgba(226,214,167,0.4) 17px,
                  rgba(226,214,167,0.4) 19px,
                  transparent 20px,
                  transparent 24px,
                  rgba(226,214,167,0.35) 25px,
                  rgba(226,214,167,0.35) 26px,
                  transparent 27px,
                  transparent 32px,
                  rgba(226,214,167,0.3) 33px,
                  rgba(226,214,167,0.3) 34px,
                  transparent 35px,
                  transparent 42px,
                  rgba(226,214,167,0.25) 43px,
                  rgba(226,214,167,0.25) 44px,
                  transparent 45px,
                  transparent 54px,
                  rgba(81,77,60,0.2) 55px,
                  rgba(81,77,60,0.2) 56px,
                  transparent 57px,
                  transparent 68px,
                  rgba(81,77,60,0.25) 69px,
                  rgba(81,77,60,0.25) 70px,
                  transparent 71px,
                  transparent 85px,
                  rgba(81,77,60,0.3) 86px,
                  rgba(81,77,60,0.3) 87px,
                  transparent 88px,
                  transparent 105px
                )
              `,
              WebkitMaskImage: 'radial-gradient(ellipse 140% 120% at 0% 100%, black 0%, black 20%, transparent 60%)',
              maskImage: 'radial-gradient(ellipse 140% 120% at 0% 100%, black 0%, black 20%, transparent 60%)',
            }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Audience tag */}
          <p className="text-base text-lev-bold font-medium mb-6 tracking-wide uppercase">
            For Product Teams, Engineering Leaders, and Startup Founders
          </p>

          {/* Main headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            Stop Rebuilding. <br className="hidden sm:inline" />
            Start Shipping.
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-lev-bold max-w-3xl mx-auto mb-10 leading-relaxed">
            Lev handles architecture, builds, deploys, and support — so your team ships features that compound, not churn.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <TrackedCTALink
              href="/waitlist"
              trackingName="Join Waitlist"
              trackingLocation="Product Teams Hero"
              className="px-10 py-5 bg-lev-bold text-primary-4 rounded-full font-bold text-xl hover:bg-lev-light transition-all shadow-2xl hover:scale-105 transform focus:outline-none focus:ring-4 focus:ring-lev-bold/50"
            >
              Join Waitlist
            </TrackedCTALink>
            <TrackedCTALink
              href="/contact"
              trackingName="Contact Sales"
              trackingLocation="Product Teams Hero"
              className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 hover:border-white/50 transition-all text-lg"
            >
              Contact Sales
            </TrackedCTALink>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-primary-3">
            AI Was Supposed to Change Everything
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Your board saw the headlines. Your team adopted the tools. But the software still ships late, the code still breaks, and nobody can explain why the promised 10x never showed up.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-lev-light/50 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-lev-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3 text-primary-3">AI Promised 10x. Delivered Chaos.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                You invested in AI copilots. You retooled workflows. Your competitors claim 10x productivity and your board is asking where the ROI is. Copilot generates code nobody understands. "80% done" demos take 3 months to reach production. Engineering velocity tanked, not improved.
              </p>
              <p className="text-lev-dark font-semibold text-sm">
                The more unique your product, the less AI can help—with the tools that exist today.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-lev-light/50 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-lev-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3 text-primary-3">Nobody Owns the Code</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Every line AI writes is a line nobody truly understands. When something breaks at 2 AM, the team is debugging code they didn't write and can't reason about. The fix might work—or it might cascade into something worse. Nobody can say for certain.
              </p>
              <p className="text-lev-dark font-semibold text-sm">
                You can't maintain what you don't understand. And you can't scale what you can't maintain.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-lev-light/50 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-lev-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3 text-primary-3">Shipping Is a Coin Flip</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Your board wants timelines. Your CTO wants confidence. Your teams want to stop firefighting. But AI-assisted development has turned your release process into a coin flip. You can't estimate what you can't understand, and you can't support what wasn't built with intention.
              </p>
              <p className="text-lev-dark font-semibold text-sm">
                Every missed commitment chips away at the credibility your team worked years to build.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution: Lev */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm text-lev-bold font-semibold mb-3 uppercase tracking-wide">The Solution</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-primary-3">
              Engineering That Only Moves Forward
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Lev doesn't generate code and hope for the best. It builds collaboratively with you, hardens every decision, and owns the outcome from first commit to production incident.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Golden Spec */}
            <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-lev-bold">
              <div className="w-12 h-12 bg-lev-bold/15 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-lev-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3 text-primary-3">Golden Spec Prevents Churn</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Before Lev writes a line of code, it builds a Golden Spec with you—a living blueprint that captures every requirement, every decision, and every reason why. Each iteration progressively hardens your spec, so the AI never rewrites what already works.
              </p>
              <p className="text-lev-dark font-semibold text-sm">
                Stop rebuilding. Start compounding.
              </p>
            </div>

            {/* Full SDLC */}
            <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-lev-bold">
              <div className="w-12 h-12 bg-lev-bold/15 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-lev-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3 text-primary-3">Full SDLC Ownership</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Lev is a complete engineering system: architecture → build → deploy → support. For startups, it's the team you need but can't hire fast enough. For established teams, it's the predictability that's been missing since you started using AI tools.
              </p>
              <p className="text-lev-dark font-semibold text-sm">
                One system. Every stage. No gaps between them.
              </p>
            </div>

            {/* SRE */}
            <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-lev-bold">
              <div className="w-12 h-12 bg-lev-bold/15 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-lev-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3 text-primary-3">SRE That Knows Your System</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Lev's SRE has full context into every Golden Spec, your telemetry, analytics, and incident history. It proactively surfaces issues before your customers feel them. When something does break, the fix won't regress functionality because SRE understands what it's protecting.
              </p>
              <p className="text-lev-dark font-semibold text-sm">
                Fixes that fix. Not fixes that create the next incident.
              </p>
            </div>
          </div>

          {/* How It Works - Visual */}
          <div className="bg-gradient-to-br from-lev-light/20 to-lev-dark/10 rounded-3xl p-8 sm:p-12">
            <h3 className="text-2xl font-bold text-center mb-8 text-primary-3">How Lev Works</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-lev-bold text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">1</div>
                <h4 className="font-semibold text-primary-3 mb-2">Build Golden Spec</h4>
                <p className="text-gray-600 text-sm">Collaborative blueprint captures requirements and architectural decisions</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-lev-bold text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">2</div>
                <h4 className="font-semibold text-primary-3 mb-2">Architecture → Code</h4>
                <p className="text-gray-600 text-sm">Lev implements the spec with production-grade code you own 100%</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-lev-bold text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">3</div>
                <h4 className="font-semibold text-primary-3 mb-2">Deploy to AWS</h4>
                <p className="text-gray-600 text-sm">Terraform-managed infrastructure provisioned as part of SDLC</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-lev-bold text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">4</div>
                <h4 className="font-semibold text-primary-3 mb-2">SRE Support</h4>
                <p className="text-gray-600 text-sm">Proactive monitoring and context-aware fixes that don't cascade</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-primary-3">
            Built for How You Actually Work
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Whether you're shipping your first product or managing a portfolio of applications, Lev meets you where you are.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Startups */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-lev-bold/15 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-lev-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3 text-primary-3">Startups</h3>
              <p className="text-gray-600 leading-relaxed mb-5">
                You're racing a runway and building something that doesn't exist yet. Every sprint that churns instead of ships is a sprint you can't afford. Lev gives you a complete engineering team without the six-month hiring cycle—so you get to market with software you can actually support once customers show up.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-lev-bold font-bold text-lg leading-tight">✓</span>
                  <span className="text-gray-700 text-sm">Golden Spec prevents wasting precious cycles rebuilding what already worked</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lev-bold font-bold text-lg leading-tight">✓</span>
                  <span className="text-gray-700 text-sm">Full SDLC coverage from day one—no gaps between "built" and "supported"</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lev-bold font-bold text-lg leading-tight">✓</span>
                  <span className="text-gray-700 text-sm">$1,499/project/month flat pricing—no per-seat explosion as you grow</span>
                </li>
              </ul>
            </div>

            {/* Enterprise */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-lev-bold/15 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-lev-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3 text-primary-3">Enterprise</h3>
              <p className="text-gray-600 leading-relaxed mb-5">
                Your board approved the AI tooling budget. Your teams adopted it. The productivity gains haven't materialized and now you're fielding questions you can't answer with confidence. Lev gives you the predictability to make commitments you can keep—and the governance to prove it's working.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-lev-bold font-bold text-lg leading-tight">✓</span>
                  <span className="text-gray-700 text-sm">Configurable escalation guardrails give you visibility without micromanaging</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lev-bold font-bold text-lg leading-tight">✓</span>
                  <span className="text-gray-700 text-sm">Golden Spec creates an auditable trail of decisions—no more "why did we build it this way?"</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lev-bold font-bold text-lg leading-tight">✓</span>
                  <span className="text-gray-700 text-sm">Single-tenant deployment, SSO, and air-gapped options for regulated industries</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-primary-3">
            Simple, Predictable Pricing
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            No per-seat surprises. No metered compute bills. Join the waitlist and start with 14 days free.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Startup */}
            <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200">
              <h3 className="font-bold text-xl mb-1 text-primary-3">Startup</h3>
              <p className="text-gray-500 text-sm mb-6">For founders shipping their first products</p>

              <div className="mb-6">
                <span className="text-4xl font-bold text-primary-3">$1,499</span>
                <span className="text-gray-500 text-sm"> / project / month</span>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-lev-bold font-bold text-lg leading-tight">✓</span>
                  <span className="text-gray-700 text-sm">Full SDLC — architecture through production support</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lev-bold font-bold text-lg leading-tight">✓</span>
                  <span className="text-gray-700 text-sm">Golden Spec with progressive hardening</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lev-bold font-bold text-lg leading-tight">✓</span>
                  <span className="text-gray-700 text-sm">SRE with full system context</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lev-bold font-bold text-lg leading-tight">✓</span>
                  <span className="text-gray-700 text-sm">Configurable escalation guardrails</span>
                </li>
              </ul>

              <TrackedCTALink
                href="/waitlist"
                trackingName="Join Waitlist"
                trackingLocation="Product Teams Pricing - Startup"
                className="block text-center px-8 py-4 bg-primary-3 text-white rounded-full font-semibold hover:bg-primary-4 transition-colors"
              >
                Join Waitlist — 14 Days Free
              </TrackedCTALink>
            </div>

            {/* Enterprise */}
            <div className="bg-primary-4 rounded-2xl p-8 border-2 border-lev-bold relative">
              <div className="absolute top-4 right-4 bg-lev-bold text-primary-4 text-xs font-bold px-3 py-1 rounded-full">
                Dedicated
              </div>

              <h3 className="font-bold text-xl mb-1 text-white">Enterprise</h3>
              <p className="text-gray-400 text-sm mb-6">For teams that need isolation and governance</p>

              <div className="mb-6">
                <span className="text-4xl font-bold text-white">Custom</span>
                <span className="text-gray-400 text-sm"> / quoted pricing</span>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-lev-bold font-bold text-lg leading-tight">✓</span>
                  <span className="text-gray-300 text-sm">Everything in Startup, plus:</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lev-bold font-bold text-lg leading-tight">✓</span>
                  <span className="text-gray-300 text-sm">Single-tenant deployment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lev-bold font-bold text-lg leading-tight">✓</span>
                  <span className="text-gray-300 text-sm">SSO / SAML authentication</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lev-bold font-bold text-lg leading-tight">✓</span>
                  <span className="text-gray-300 text-sm">Multi-project administration</span>
                </li>
              </ul>

              <TrackedCTALink
                href="/contact"
                trackingName="Contact Sales"
                trackingLocation="Product Teams Pricing - Enterprise"
                className="block text-center px-8 py-4 bg-lev-bold text-primary-4 rounded-full font-semibold hover:bg-lev-light transition-colors"
              >
                Contact Sales
              </TrackedCTALink>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              All plans include 100% code ownership. <Link href="/lev/" className="text-primary-3 font-semibold hover:underline">Learn more about Lev</Link>
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-primary-3">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
            Ready to Ship Features That Compound?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Join the waitlist for early access and start your 14-day free trial when your spot opens.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <TrackedCTALink
              href="/waitlist"
              trackingName="Join Waitlist"
              trackingLocation="Product Teams CTA"
              className="px-10 py-5 bg-lev-bold text-primary-4 rounded-full font-bold hover:bg-lev-light transition-all text-xl shadow-2xl hover:scale-105 transform focus:outline-none focus:ring-4 focus:ring-lev-bold/50"
            >
              Join Waitlist — 14 Days Free
            </TrackedCTALink>
            <TrackedCTALink
              href="/contact"
              trackingName="Contact Sales"
              trackingLocation="Product Teams CTA"
              className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 hover:border-white/50 transition-all text-lg"
            >
              Contact Sales
            </TrackedCTALink>
          </div>
        </div>
      </section>
    </>
  );
}

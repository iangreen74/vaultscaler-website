// Route: /radix/studio (Radix Studio - LLM Inference Optimization)
import type { Metadata } from 'next';
import Link from 'next/link';
import { TrackedCTALink } from '@/components/TrackedLink';
import { SITE } from '@/lib/site';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Radix Studio: Control Every LLM Inference Call | VaultScaler',
  description: 'Radix Studio is the control plane for LLM operations. Build governed AI workflows with cost-aware routing, multi-model orchestration, and full visibility into every inference call.',
  alternates: {
    canonical: `${SITE.url}/radix/studio`,
  },
  keywords: [
    'LLM governance platform',
    'LLM cost control',
    'AI pipeline orchestration',
    'LLM orchestration',
    'AI governance tools',
    'multi-model registry',
    'AI compliance platform',
    'inference optimization',
    'LLM vendor lock-in',
    'AI cost optimization',
  ],
  openGraph: {
    title: 'Radix Studio: Control Every LLM Inference Call',
    description: 'The control plane for LLM operations. Governed AI workflows, cost-aware routing, and full visibility.',
    type: 'website',
    url: `${SITE.url}/radix/studio`,
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'Radix Studio - LLM Inference Optimization' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Radix Studio: Control Every LLM Inference Call',
    description: 'The control plane for LLM operations. Governed AI workflows, cost-aware routing, and full visibility.',
    images: ['/og.jpg'],
  },
};

const CheckIcon = ({ className = "text-primary-3" }: { className?: string }) => (
  <svg className={`w-5 h-5 ${className} flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export default function RadixStudioPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE.url },
      { "@type": "ListItem", "position": 2, "name": "Radix", "item": `${SITE.url}/radix` },
      { "@type": "ListItem", "position": 3, "name": "Radix Studio", "item": `${SITE.url}/radix/studio` },
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Radix Studio",
    applicationCategory: "DevOps/Monitoring",
    operatingSystem: "Cloud",
    offers: [
      { "@type": "Offer", name: "Trial", price: "0", priceCurrency: "USD", description: "14-day free trial" },
      { "@type": "Offer", name: "Radix Studio", price: "45", priceCurrency: "USD", description: "Per user per month" },
    ],
    author: { "@type": "Organization", name: "VaultScaler" },
    url: `${SITE.url}/radix/studio`,
    description: metadata.description,
    releaseNotes: "General Availability March 2, 2026.",
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={softwareSchema} />

      {/* Hero */}
      <section className="relative min-h-[clamp(600px,90vh,1200px)] flex items-center justify-center bg-gradient-to-br from-primary-4 via-primary-3 to-primary-3 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/4 -right-1/4 w-[60%] h-[60%] rounded-full bg-pop-light/10 blur-3xl" />
          <div className="absolute -bottom-1/4 -left-1/4 w-[50%] h-[50%] rounded-full bg-pop-dark/30 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-pop-light font-medium mb-4 tracking-wide uppercase">
            Part of the <Link href="/radix/" className="underline underline-offset-2 hover:text-white transition-colors">Radix Platform</Link>
          </p>

          <p className="text-5xl sm:text-6xl md:text-7xl font-bold text-pop-light mb-6 tracking-tight">
            Radix Studio
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            Control Every <br className="hidden sm:inline" />
            LLM Inference Call
          </h1>

          <p className="text-lg md:text-xl text-pop-light max-w-3xl mx-auto mb-10 leading-relaxed">
            The control plane for LLM operations. Governance, cost control, and multi-model orchestration — so your AI pilots actually reach production.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <TrackedCTALink
              href="/waitlist"
              trackingName="Join Waitlist"
              trackingLocation="Radix Studio Hero"
              className="px-10 py-5 bg-pop-light text-primary-4 rounded-full font-bold text-xl hover:bg-white transition-all shadow-2xl hover:scale-105 transform focus:outline-none focus:ring-4 focus:ring-pop-light/50"
            >
              Join Waitlist
            </TrackedCTALink>
            <TrackedCTALink
              href="/solutions/ml-teams/"
              trackingName="ML Teams Solutions"
              trackingLocation="Radix Studio Hero"
              className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 hover:border-white/50 transition-all text-lg"
            >
              ML & AI Development Teams
            </TrackedCTALink>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-primary-3">
            The Inference Problem
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Every LLM call makes invisible tradeoffs: cost vs. quality, speed vs. accuracy. Without governance, you can't see these tradeoffs — let alone control them.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-pop-light rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3 text-primary-3">Governance Gaps</h3>
              <p className="text-gray-600 leading-relaxed">
                62% of organizations cite governance gaps as their top AI blocker. Without policy enforcement, AI stays a science project.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-pop-light rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3 text-primary-3">Runaway Costs</h3>
              <p className="text-gray-600 leading-relaxed">
                LLM spend is unpredictable and hard to attribute. Without cost controls, teams overspend and CFOs lose patience.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-pop-light rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3 text-primary-3">Vendor Lock-in</h3>
              <p className="text-gray-600 leading-relaxed">
                Switching models means rewriting code. Without abstraction, every vendor choice becomes a long-term commitment you didn't plan for.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stat */}
      <section className="py-16 bg-primary-3">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-3xl sm:text-4xl font-bold text-white mb-2">88% of AI pilots never reach production</p>
          <p className="text-xl text-gray-200">The models work. The infrastructure doesn't.</p>
          <p className="text-lg text-white/70 mt-4 max-w-2xl mx-auto">Missing pipelines. No governance. Runaway costs. No drift detection. Radix Studio fills these gaps from day one.</p>
        </div>
      </section>

      {/* What Studio Provides */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-primary-3">What Radix Studio Provides</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Everything you need to move from AI pilot to production. Governance, orchestration, and cost control in one platform.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-pop-dark">
              <h3 className="font-bold text-xl mb-3 text-primary-3">Pipeline Orchestration</h3>
              <p className="text-gray-600 leading-relaxed">
                Build your own reusable multi-step AI workflows or cook with our recipes. Run LLM calls, RAG retrieval, tool execution, and post-processing reliably with full execution traces.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-pop-dark">
              <h3 className="font-bold text-xl mb-3 text-primary-3">Multi-Model Registry</h3>
              <p className="text-gray-600 leading-relaxed">
                Register HTTP endpoints, container workloads, and external clusters. Bring Your Own GPU (BYOG) via secure Docker agent. Switch models without rewriting code.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-pop-dark">
              <h3 className="font-bold text-xl mb-3 text-primary-3">Governance & Audit</h3>
              <p className="text-gray-600 leading-relaxed">
                Create and enforce policies for content safety, team fairness, and cluster health — all with comprehensive audit logs for compliance. Built for regulated industries.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-pop-dark">
              <h3 className="font-bold text-xl mb-3 text-primary-3">Cost Control</h3>
              <p className="text-gray-600 leading-relaxed">
                Performance vs. cost knobs, rate limiting, usage caps, and predictable per-execution pricing tiers. Full visibility into where every dollar goes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-primary-3">How Radix Studio Works</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            From first pipeline to full production governance in four steps.
          </p>

          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-3 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">1</div>
                <h3 className="font-semibold text-primary-3 mb-1">Register Models</h3>
                <p className="text-gray-600 text-sm">Connect your AI vendors, self-hosted models, or BYOG endpoints</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-3 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">2</div>
                <h3 className="font-semibold text-primary-3 mb-1">Build Pipelines</h3>
                <p className="text-gray-600 text-sm">Chain LLM calls, RAG queries, and tools into reusable workflows</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-3 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">3</div>
                <h3 className="font-semibold text-primary-3 mb-1">Set Policies</h3>
                <p className="text-gray-600 text-sm">Enforce compliance, content filtering, budget controls, and rate limits</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-3 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">4</div>
                <h3 className="font-semibold text-primary-3 mb-1">Ship to Production</h3>
                <p className="text-gray-600 text-sm">Deploy with full execution traces, cost tracking, and drift detection</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-20 bg-primary-4">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white">
            Built for Production AI
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg px-5 py-4 border border-white/10 flex items-start gap-3">
              <span className="text-pop-light font-bold text-lg leading-tight shrink-0">&#x2713;</span>
              <div>
                <p className="text-white font-semibold text-sm">Cost-Aware Routing</p>
                <p className="text-white/60 text-xs">Route to the best model per task and budget</p>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg px-5 py-4 border border-white/10 flex items-start gap-3">
              <span className="text-pop-light font-bold text-lg leading-tight shrink-0">&#x2713;</span>
              <div>
                <p className="text-white font-semibold text-sm">Full Execution Traces</p>
                <p className="text-white/60 text-xs">End-to-end visibility into every pipeline run</p>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg px-5 py-4 border border-white/10 flex items-start gap-3">
              <span className="text-pop-light font-bold text-lg leading-tight shrink-0">&#x2713;</span>
              <div>
                <p className="text-white font-semibold text-sm">Content Filtering</p>
                <p className="text-white/60 text-xs">Enforce safety policies before responses reach users</p>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg px-5 py-4 border border-white/10 flex items-start gap-3">
              <span className="text-pop-light font-bold text-lg leading-tight shrink-0">&#x2713;</span>
              <div>
                <p className="text-white font-semibold text-sm">BYOG Support</p>
                <p className="text-white/60 text-xs">Bring your own GPUs via secure Docker agent</p>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg px-5 py-4 border border-white/10 flex items-start gap-3">
              <span className="text-pop-light font-bold text-lg leading-tight shrink-0">&#x2713;</span>
              <div>
                <p className="text-white font-semibold text-sm">Budget Controls</p>
                <p className="text-white/60 text-xs">Per-team, per-project spend limits and rate caps</p>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg px-5 py-4 border border-white/10 flex items-start gap-3">
              <span className="text-pop-light font-bold text-lg leading-tight shrink-0">&#x2713;</span>
              <div>
                <p className="text-white font-semibold text-sm">Audit Logs</p>
                <p className="text-white/60 text-xs">Compliance-ready logs for regulated industries</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-primary-3">
            Radix Studio Pricing
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Predictable per-user pricing. Start with a free 14-day trial.
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Trial */}
            <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-6 flex flex-col">
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-primary-3 mb-3">Trial</h3>
                <p className="text-2xl font-bold text-primary-3 mb-2">Free</p>
                <p className="text-sm text-gray-600 mb-4">14-day trial, full access</p>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="text-primary-3 mt-0.5 w-4 h-4" />
                    <span className="text-gray-600">Full Studio access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="text-primary-3 mt-0.5 w-4 h-4" />
                    <span className="text-gray-600">Pipeline orchestration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="text-primary-3 mt-0.5 w-4 h-4" />
                    <span className="text-gray-600">Zero-risk validation</span>
                  </li>
                </ul>
              </div>
              <TrackedCTALink
                href="/waitlist"
                trackingName="Join Waitlist"
                trackingLocation="Radix Studio Pricing - Trial"
                className="w-full text-center px-4 py-3 bg-primary-3 text-white text-sm rounded-full font-bold hover:bg-primary-4 transition-all shadow-lg hover:scale-105 transform inline-block"
              >
                Join Waitlist
              </TrackedCTALink>
            </div>

            {/* Studio */}
            <div className="bg-primary-3 rounded-2xl p-6 flex flex-col">
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-white mb-3">Radix Studio</h3>
                <p className="text-2xl font-bold text-white mb-2">$45<span className="text-sm font-normal text-white/70">/user/mo</span></p>
                <p className="text-sm text-white/80 mb-4">LLM orchestration & governance</p>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="text-white mt-0.5 w-4 h-4" />
                    <span className="text-white/90">Pipeline orchestration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="text-white mt-0.5 w-4 h-4" />
                    <span className="text-white/90">Governance & controls</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="text-white mt-0.5 w-4 h-4" />
                    <span className="text-white/90">Multi-model registry</span>
                  </li>
                </ul>
              </div>
              <TrackedCTALink
                href="/waitlist"
                trackingName="Join Waitlist"
                trackingLocation="Radix Studio Pricing - Studio"
                className="inline-block w-full text-center px-4 py-3 bg-white text-primary-3 text-sm rounded-full font-bold hover:bg-gray-100 transition-all"
              >
                Join Waitlist
              </TrackedCTALink>
            </div>

            {/* Enterprise */}
            <div className="bg-gradient-to-br from-primary-4 to-primary-3 text-white rounded-2xl p-6 border-2 border-primary-2 flex flex-col">
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-white mb-3">Enterprise</h3>
                <p className="text-2xl font-bold text-white mb-2">Custom</p>
                <p className="text-sm text-white/80 mb-4">Dedicated deployment + SLAs</p>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="text-white mt-0.5 w-4 h-4" />
                    <span className="text-white/90">SSO / SAML</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="text-white mt-0.5 w-4 h-4" />
                    <span className="text-white/90">Dedicated support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="text-white mt-0.5 w-4 h-4" />
                    <span className="text-white/90">Custom compliance</span>
                  </li>
                </ul>
              </div>
              <TrackedCTALink
                href="/contact"
                trackingName="Contact Sales"
                trackingLocation="Radix Studio Pricing - Enterprise"
                className="inline-block w-full text-center px-4 py-3 bg-pop-light text-primary-4 text-sm rounded-full font-bold hover:bg-white transition-all"
              >
                Contact Sales
              </TrackedCTALink>
            </div>
          </div>

          {/* Platform cross-link */}
          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              Need GPU training optimization too? <Link href="/radix/core/" className="text-primary-3 font-semibold hover:underline">Explore Radix Core</Link> or get the <Link href="/radix/" className="text-primary-3 font-semibold hover:underline">full Radix Platform</Link> bundle.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-3">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Ship AI to Production?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Join the waitlist for early access, or get in touch to discuss your requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <TrackedCTALink
              href="/waitlist"
              trackingName="Join Waitlist"
              trackingLocation="Radix Studio CTA"
              className="px-10 py-5 bg-pop-light text-primary-4 rounded-full font-bold hover:bg-white transition-all text-xl shadow-lg hover:shadow-xl hover:scale-105 transform focus:outline-none focus:ring-4 focus:ring-pop-light/50"
            >
              Join Waitlist
            </TrackedCTALink>
            <TrackedCTALink
              href="/contact"
              trackingName="Contact Sales"
              trackingLocation="Radix Studio CTA"
              className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 hover:border-white/50 transition-all text-lg"
            >
              Contact Us
            </TrackedCTALink>
          </div>
        </div>
      </section>
    </>
  );
}

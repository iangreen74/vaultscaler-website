// Route: /solutions/corporate (Corporate AI Teams Landing Page)
import type { Metadata } from 'next';
import { TrackedCTALink } from '@/components/TrackedLink';
import { SITE } from '@/lib/site';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'AI Lifecycle Platform for Corporate Teams | VaultScaler',
  description: 'Control the entire AI lifecycle. Train faster, orchestrate inference, enforce governance. No vendor lock-in. Get your pilots into production.',
  alternates: {
    canonical: `${SITE.url}/solutions/corporate`,
  },
  keywords: [
    'Corporate AI',
    'ML operations',
    'LLM governance',
    'AI lifecycle',
    'inference orchestration',
    'training optimization',
    'AI cost control',
    'vendor lock-in',
    'AI governance',
    'production AI',
    'MLOps platform',
  ],
  openGraph: {
    title: 'AI Lifecycle Platform for Corporate Teams | VaultScaler',
    description: 'Control the entire AI lifecycle. Train faster, orchestrate inference, enforce governance. No vendor lock-in.',
    type: 'website',
    url: `${SITE.url}/solutions/corporate`,
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'VaultScaler for Corporate AI Teams' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Lifecycle Platform for Corporate Teams | VaultScaler',
    description: 'Control the entire AI lifecycle. Get your pilots into production. No vendor lock-in.',
    images: ['/og.jpg'],
  },
};

export default function CorporateAITeamsPage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "AI Lifecycle Platform for Corporate Teams",
    "description": "Complete AI lifecycle platform for corporate teams. Train efficiently, orchestrate inference, enforce governance.",
    "url": `${SITE.url}/solutions/corporate`,
    "publisher": {
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
        "name": "Corporate AI Teams",
        "item": `${SITE.url}/solutions/corporate`
      }
    ]
  };

  return (
    <>
      <JsonLd data={pageSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* Hero Section */}
      <section className="relative min-h-[clamp(550px,80vh,900px)] flex items-center justify-center bg-gradient-to-br from-primary-4 via-primary-3 to-primary-3 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/4 -right-1/4 w-[60%] h-[60%] rounded-full bg-pop-light/10 blur-3xl" />
          <div className="absolute -bottom-1/4 -left-1/4 w-[50%] h-[50%] rounded-full bg-pop-dark/30 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Industry badge */}
          <p className="text-sm text-pop-light font-semibold uppercase tracking-wide mb-3">For AI Teams at Gaming Studios, Healthcare, Fintech, and Startups</p>

          {/* Main headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            AI lifecycle platform.<br className="hidden sm:block" />Train, infer, launch, and govern
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed">
            Control the entire AI lifecycle. Get your pilots into production. No vendor lock-in, full cost visibility. Radix gives corporate AI teams the efficiency and governance needed to ship AI that scales.
          </p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-primary-3">
            Corporate AI Teams Are Stuck
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Training costs are spiraling. Inference is locked into vendor pricing. 88% of AI pilots never make it to production. Your infrastructure shouldn't be the reason you fail.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Training Costs Problem */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3 text-primary-3">Training Costs Are Spiraling</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Your LLM bills are shocking the CFO. Corporate teams are wasting 20%+ on unnecessary compute. Training jobs run slower than they should, and you're buying more GPUs just to keep up.
              </p>
              <p className="text-primary-3 font-semibold">
                Every quarter, you need to justify AI spend with metrics that don't add up.
              </p>
            </div>

            {/* Inference Lock-in Problem */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3 text-primary-3">Inference Sprawl and Vendor Lock-in</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                You're locked into vendor pricing. Can't switch models without rewriting code. 62% of teams cite governance gaps as their top AI blocker. Your pilots work in dev, but never ship to production.
              </p>
              <p className="text-primary-3 font-semibold">
                Without governance and control, AI stays a science project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 1: Training Efficiency (Radix Core) */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm text-pop-dark font-semibold uppercase tracking-wide mb-3">Radix Core</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-primary-3">
                Train 20% Faster with Existing GPUs
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Stop buying more GPUs to fix inefficiency. Radix Core optimizes GPU utilization through closed-loop control, balancing memory, compute, and power constraints. Train faster, spend less, prove ROI to your CFO.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-pop-light rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-primary-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700">Up to 21% training throughput improvement</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-pop-light rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-primary-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700">CFO-defensible ROI calculator and metrics</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-pop-light rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-primary-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700">No stack changes—deploy in hours, not months</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary-3 to-primary-4 rounded-2xl p-8 text-white">
              <p className="text-pop-light text-sm font-medium mb-4 uppercase tracking-wide">Cost Savings Impact</p>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white/80">Before Radix Core</span>
                    <span className="font-bold text-white">60% Utilization</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-red-400 rounded-full" style={{ width: '60%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white/80">After Radix Core</span>
                    <span className="font-bold text-pop-light">80% Utilization</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-pop-light rounded-full" style={{ width: '80%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 2: Inference Control (Radix Studio) */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <div className="space-y-4">
                <div className="text-sm font-medium text-gray-700 mb-4">Multi-Model Registry</div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-pop-dark rounded-full" />
                      <span className="text-sm font-medium text-gray-900">GPT-4</span>
                    </div>
                    <span className="text-xs text-gray-500">$0.03/1K tokens</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary-1 rounded-full" />
                      <span className="text-sm font-medium text-gray-900">Claude 3.5</span>
                    </div>
                    <span className="text-xs text-gray-500">$0.015/1K tokens</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-secondary-5 rounded-full" />
                      <span className="text-sm font-medium text-gray-900">Llama 3.1</span>
                    </div>
                    <span className="text-xs text-gray-500">$0.001/1K tokens</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 text-center pt-4">Switch models without rewriting code</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-sm text-pop-dark font-semibold uppercase tracking-wide mb-3">Radix Studio</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-primary-3">
                Orchestrate LLMs Without Vendor Lock-in
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Use any model from any provider or your own models. Route requests intelligently based on cost, quality, or performance. Control costs with budgets and rate limits. Switch vendors without touching code.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-pop-light rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-primary-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700">Multi-model registry with cost-aware routing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-pop-light rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-primary-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700">Full visibility into LLM costs and usage</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-pop-light rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-primary-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700">No vendor lock-in—deploy anywhere</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 3: Governance Built-In */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm text-pop-dark font-semibold uppercase tracking-wide mb-3">AI Governance</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-primary-3">
                Governance and Control from Day One
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                62% of teams cite governance gaps as their top AI blocker. Radix Studio includes policy enforcement, content filtering, budget controls, and audit logs. Get out of pilot mode and into production.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-pop-light rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-primary-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700">Policy enforcement for compliance and content filtering</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-pop-light rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-primary-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700">Budget controls and spend limits per team or project</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-pop-light rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-primary-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700">Audit logs for regulated industries (healthcare, finance)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 4: Production-Ready */}
      <section className="py-20 bg-primary-4">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm text-pop-light font-semibold uppercase tracking-wide mb-3">Production Deployment</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
              Get Your Pilots into Production
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
              88% of AI pilots never reach production. Radix gives you the efficiency and governance to ship AI that scales. Build production-ready ML operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="w-10 h-10 bg-pop-light/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-pop-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2 text-white">Fast Time to Value</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Deploy in hours. See results in days. No lengthy procurement cycles for pilots under $10K.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="w-10 h-10 bg-pop-light/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-pop-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2 text-white">Enterprise-Ready</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                SOC2 compliance for deals over $50K. Self-serve tier for teams starting small. Scale as you grow.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="w-10 h-10 bg-pop-light/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-pop-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2 text-white">ROI-Driven</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                CFO-defensible cost savings. Track every dollar. Justify AI spend with metrics that actually add up.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="w-10 h-10 bg-pop-light/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-pop-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2 text-white">No Lock-in</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Deploy anywhere: AWS, Azure, GCP, on-prem. Switch vendors without rewriting code. Your infrastructure, your control.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-primary-3">
              Choose Your Configuration
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Start with what you need today. Scale as you grow. No vendor lock-in.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Radix Core Only */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border-2 border-primary-1">
              <h3 className="text-2xl font-bold mb-3 text-primary-3">Radix Core</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Optimize GPU training efficiency. Get more throughput from existing infrastructure.
              </p>
              <div className="mb-6">
                <p className="text-3xl font-bold text-primary-3">$45<span className="text-xl font-normal text-gray-600">/GPU/mo</span></p>
                <p className="text-sm text-gray-500 mt-1">Corporate pricing</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-sm">
                  <svg className="w-5 h-5 text-primary-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Up to 21% training throughput improvement</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <svg className="w-5 h-5 text-primary-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">CFO-defensible ROI metrics</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <svg className="w-5 h-5 text-primary-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">No stack changes required</span>
                </li>
              </ul>
              <TrackedCTALink
                href="/waitlist"
                trackingName="Get Core"
                trackingLocation="Corporate Pricing"
                className="block text-center px-6 py-3 bg-primary-3 text-white rounded-full font-semibold hover:bg-primary-4 transition-colors"
              >
                Get Core
              </TrackedCTALink>
            </div>

            {/* Radix Studio Only */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border-2 border-primary-1">
              <h3 className="text-2xl font-bold mb-3 text-primary-3">Radix Studio</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                LLM orchestration, governance, and cost control. Production-ready AI operations.
              </p>
              <div className="mb-6">
                <p className="text-3xl font-bold text-primary-3">$45<span className="text-xl font-normal text-gray-600">/user/mo</span></p>
                <p className="text-sm text-gray-500 mt-1">Corporate pricing</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-sm">
                  <svg className="w-5 h-5 text-primary-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Multi-model registry with cost-aware routing</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <svg className="w-5 h-5 text-primary-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Policy enforcement and audit logs</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <svg className="w-5 h-5 text-primary-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Budget controls and spend limits</span>
                </li>
              </ul>
              <TrackedCTALink
                href="/waitlist"
                trackingName="Get Studio"
                trackingLocation="Corporate Pricing"
                className="block text-center px-6 py-3 bg-primary-3 text-white rounded-full font-semibold hover:bg-primary-4 transition-colors"
              >
                Get Studio
              </TrackedCTALink>
            </div>

            {/* Platform Bundle */}
            <div className="bg-gradient-to-br from-primary-3 to-primary-4 text-white rounded-2xl p-8 shadow-lg border-2 border-primary-2 relative flex flex-col">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-pop-light text-primary-4 px-4 py-1 rounded-full text-sm font-bold">RECOMMENDED</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Radix Platform</h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                Complete AI lifecycle coverage. Training optimization plus inference governance.
              </p>
              <div className="mb-6">
                <p className="text-3xl font-bold text-pop-light">Core + Studio</p>
              </div>
              <TrackedCTALink
                href="/waitlist"
                trackingName="Get Core + Studio"
                trackingLocation="Corporate Pricing"
                className="block text-center px-6 py-3 bg-pop-light text-primary-4 rounded-full font-bold hover:bg-white transition-colors mt-auto"
              >
                Get Core + Studio
              </TrackedCTALink>
            </div>
          </div>

        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-primary-3">
            Ready to Ship AI That Scales?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join corporate AI teams at gaming studios, healthcare companies, fintech firms, and startups who are training faster, controlling costs, and shipping AI to production. Your infrastructure won't be the reason you fail.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <TrackedCTALink
              href="/waitlist"
              trackingName="Start Free Trial"
              trackingLocation="Corporate CTA"
              className="px-10 py-5 bg-primary-3 text-white rounded-full font-bold hover:bg-primary-4 transition-all text-xl shadow-lg hover:shadow-xl hover:scale-105 transform focus:outline-none focus:ring-4 focus:ring-primary-3/50"
            >
              Start Free Trial
            </TrackedCTALink>
            <TrackedCTALink
              href="/contact?segment=corporate&cta=sales"
              trackingName="Talk to Sales"
              trackingLocation="Corporate CTA"
              className="px-8 py-4 bg-transparent border-2 border-primary-3 text-primary-3 rounded-full font-semibold hover:bg-primary-3/5 transition-all text-lg focus:outline-none focus:ring-4 focus:ring-primary-3/30"
            >
              Talk to Sales
            </TrackedCTALink>
          </div>


        </div>
      </section>
    </>
  );
}

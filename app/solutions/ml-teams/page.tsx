// Route: /solutions/ml-teams (ML & AI Development Teams Landing Page)
import type { Metadata } from 'next';
import Link from 'next/link';
import { TrackedCTALink } from '@/components/TrackedLink';
import { SITE } from '@/lib/site';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'ML & AI Development Teams: Training Optimization + LLM Governance | VaultScaler',
  description: 'Complete ML infrastructure for AI development teams. Maximize GPU throughput with Radix Core, orchestrate LLM pipelines with Radix Studio, and ship production AI with governance built-in.',
  alternates: {
    canonical: `${SITE.url}/solutions/ml-teams/`,
  },
  keywords: [
    'ML operations platform',
    'AI development tools',
    'machine learning infrastructure',
    'GPU training optimization',
    'LLM governance platform',
    'LLM pipeline orchestration',
    'ML team productivity',
    'AI model governance',
    'multi-model registry',
    'inference cost control',
    'production AI infrastructure',
    'AI compliance tools',
  ],
  openGraph: {
    title: 'ML & AI Development Teams: Training Optimization + LLM Governance | VaultScaler',
    description: 'Complete ML infrastructure for AI development teams. Maximize GPU throughput, orchestrate LLM pipelines, and ship production AI.',
    type: 'website',
    url: `${SITE.url}/solutions/ml-teams/`,
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'ML & AI Development Teams Solutions' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ML & AI Development Teams: Training Optimization + LLM Governance | VaultScaler',
    description: 'Complete ML infrastructure for AI development teams. Maximize GPU throughput, orchestrate LLM pipelines, and ship production AI.',
    images: ['/og.jpg'],
  },
};

export default function MLTeamsPage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "ML & AI Development Teams Solutions",
    "description": "Complete ML infrastructure for AI development teams. Radix Core optimizes GPU training throughput. Radix Studio governs LLM inference pipelines.",
    "url": `${SITE.url}/solutions/ml-teams/`,
    "provider": {
      "@type": "Organization",
      "name": "VaultScaler",
      "url": `${SITE.url}/`,
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
        "name": "ML & AI Development Teams",
        "item": `${SITE.url}/solutions/ml-teams/`
      }
    ]
  };

  return (
    <>
      <JsonLd data={pageSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* Hero Section */}
      <section className="relative min-h-[clamp(600px,85vh,1000px)] flex items-center justify-center bg-gradient-to-br from-primary-4 via-primary-3 to-primary-3 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/4 -right-1/4 w-[60%] h-[60%] rounded-full bg-pop-light/10 blur-3xl" />
          <div className="absolute -bottom-1/4 -left-1/4 w-[50%] h-[50%] rounded-full bg-pop-dark/30 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Audience tag */}
          <p className="text-base text-pop-light font-medium mb-6 tracking-wide uppercase">
            For ML Engineers, AI Researchers, and Data Science Teams
          </p>

          {/* Main headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            Optimize Training. <br className="hidden sm:inline" />
            Govern Inference. <br className="hidden sm:inline" />
            Ship Production AI.
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed">
            Complete ML infrastructure for teams building AI products. Maximize GPU throughput, orchestrate LLM pipelines, and ship with governance built-in.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <TrackedCTALink
              href="/waitlist"
              trackingName="Join Waitlist"
              trackingLocation="ML Teams Hero"
              className="px-10 py-5 bg-pop-light text-primary-4 rounded-full font-bold text-xl hover:bg-white transition-all shadow-2xl hover:scale-105 transform focus:outline-none focus:ring-4 focus:ring-pop-light/50"
            >
              Join Waitlist
            </TrackedCTALink>
            <TrackedCTALink
              href="/contact"
              trackingName="Contact Sales"
              trackingLocation="ML Teams Hero"
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
            Building Production AI Is Harder Than It Should Be
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Training runs too slow. LLM costs spiral. AI pilots never reach production. Your team is stuck managing infrastructure instead of shipping features.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3 text-primary-3">GPU Clusters Waste Capacity</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Memory-bound jobs block compute-bound jobs. Power limits throttle entire nodes. Traditional schedulers treat GPUs as identical units, ignoring the resource imbalances that kill utilization.
              </p>
              <p className="text-primary-3 font-semibold text-sm">
                Up to 21% of training throughput lost to naive scheduling (VaultScaler internal benchmarks).
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3 text-primary-3">Inference Is a Black Box</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                No visibility into which models are being called, how often, at what cost. Every LLM call makes invisible tradeoffs between cost and quality. Without governance, you can't see these tradeoffs, let alone control them.
              </p>
              <p className="text-primary-3 font-semibold text-sm">
                Vendor lock-in prevents switching to better or cheaper models.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3 text-primary-3">Governance Gaps Block Production</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Without policy enforcement, content filters, and audit logs, AI pilots stay experiments. Compliance teams block deployment. CFOs lose patience with runaway LLM costs.
              </p>
              <p className="text-primary-3 font-semibold text-sm">
                88% of AI pilots never reach production (IDC/Lenovo, 2024). The models work. The infrastructure doesn't.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution: The Radix Platform */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm text-pop-dark font-semibold mb-3 uppercase tracking-wide">The Solution</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-primary-3">
              The Radix Platform
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Everything you need to move from AI pilot to production. Training optimization, LLM orchestration, and governance, unified in one platform.
            </p>
          </div>

          {/* Radix Core */}
          <div className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary-3 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-primary-3">Radix Core</h3>
                </div>
                <p className="text-xl font-semibold text-primary-3 mb-4">Up to 21% Faster GPU Training <span className="text-xs font-normal text-gray-400">(internal benchmarks)</span></p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Closed-loop GPU scheduling that balances memory, compute, and power across all training runs. No stack changes. Works with your existing Kubernetes clusters. Deploy via Helm chart and see results the same day.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-pop-dark mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Kubernetes native support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-pop-dark mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Zero stack changes, Helm chart deployment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-pop-dark mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Air-gapped deployment option for secure environments</span>
                  </li>
                </ul>
                <p className="text-lg font-semibold text-primary-3">$45/GPU/month</p>
                <Link href="/radix/core/" className="text-pop-dark font-semibold hover:underline text-sm mt-2 inline-block">
                  Learn more about Radix Core →
                </Link>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <div className="space-y-6">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Before Radix Core</p>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-red-400 h-3 rounded-full" style={{width: '67%'}}></div>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">67% avg utilization (FIFO scheduling; industry-reported baseline)</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">After Radix Core</p>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-green-500 h-3 rounded-full" style={{width: '88%'}}></div>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">Up to 88% avg utilization (closed-loop scheduling; VaultScaler internal benchmarks)</p>
                  </div>
                  <div className="pt-4 border-t border-gray-300">
                    <p className="text-2xl font-bold text-primary-3 mb-1">21% throughput gain</p>
                    <p className="text-sm text-gray-600">Same hardware. Same training code. More work done. <span className="text-xs text-gray-400">(VaultScaler internal benchmarks)</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Radix Studio */}
          <div className="bg-primary-4 rounded-3xl p-8 sm:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <p className="text-sm text-pop-light mb-3 font-semibold uppercase tracking-wide">Pipeline Example</p>
                  <div className="space-y-3 font-mono text-sm">
                    <div className="bg-white/5 rounded px-4 py-2 text-white">
                      <span className="text-pop-light">1.</span> RAG Retrieval → Vector DB
                    </div>
                    <div className="bg-white/5 rounded px-4 py-2 text-white">
                      <span className="text-pop-light">2.</span> LLM Call → GPT-4 (routed by cost)
                    </div>
                    <div className="bg-white/5 rounded px-4 py-2 text-white">
                      <span className="text-pop-light">3.</span> Content Filter → Policy check
                    </div>
                    <div className="bg-white/5 rounded px-4 py-2 text-white">
                      <span className="text-pop-light">4.</span> Post-process → Format & return
                    </div>
                  </div>
                  <p className="text-xs text-white/70 mt-4">Full execution traces. Audit logs. Budget controls.</p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-pop-light rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Radix Studio</h3>
                </div>
                <p className="text-xl font-semibold text-pop-light mb-4">LLM Governance & Orchestration</p>
                <p className="text-white/90 leading-relaxed mb-6">
                  The control plane for LLM operations. Build reusable multi-step AI workflows. Register models from any vendor or self-hosted. Enforce governance policies, content filters, and budget controls so your AI pilots actually reach production.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-pop-light mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-white/90">Multi-model registry (OpenAI, Anthropic, self-hosted, BYOG)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-pop-light mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-white/90">Cost-aware routing and budget controls</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-pop-light mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-white/90">Audit logs and compliance-ready governance</span>
                  </li>
                </ul>
                <p className="text-lg font-semibold text-pop-light">$45/user/month</p>
                <Link href="/radix/studio/" className="text-pop-light font-semibold hover:underline text-sm mt-2 inline-block">
                  Learn more about Radix Studio →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Radix Platform */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-primary-3">
            Why ML Teams Choose Radix
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Built for teams who need production-grade AI infrastructure without vendor lock-in.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <h3 className="font-bold text-xl mb-3 text-primary-3">No Vendor Lock-in</h3>
              <p className="text-gray-600 leading-relaxed">
                Register models from any provider: OpenAI, Anthropic, Cohere, or self-hosted. Switch providers without rewriting code. Bring Your Own GPU (BYOG) via secure Docker agent.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <h3 className="font-bold text-xl mb-3 text-primary-3">Full Execution Visibility</h3>
              <p className="text-gray-600 leading-relaxed">
                End-to-end traces for every pipeline run. See exactly which models were called, how long they took, and what they cost. Debug production issues with full context.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <h3 className="font-bold text-xl mb-3 text-primary-3">Predictable Pricing</h3>
              <p className="text-gray-600 leading-relaxed">
                Flat per-GPU and per-user pricing. No surprise bills. No metered compute costs. Budget controls prevent runaway LLM spending.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-primary-3">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Start with a free 14-day trial. Choose Radix Core, Radix Studio, or the full platform bundle.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Core */}
            <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-primary-3 mb-3">Radix Core</h3>
              <p className="text-3xl font-bold text-primary-3 mb-2">$45<span className="text-base font-normal text-gray-500">/GPU/mo</span></p>
              <p className="text-sm text-gray-600 mb-6">GPU training optimization</p>
              <ul className="space-y-3 mb-6 text-sm">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-primary-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Up to 21% throughput gains (internal benchmarks)</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-primary-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Kubernetes support</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-primary-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">14-day free trial</span>
                </li>
              </ul>
              <TrackedCTALink
                href="/waitlist"
                trackingName="Join Waitlist"
                trackingLocation="ML Teams Pricing - Core"
                className="w-full block text-center px-6 py-3 bg-primary-3 text-white rounded-full font-semibold hover:bg-primary-4 transition-all"
              >
                Join Waitlist
              </TrackedCTALink>
            </div>

            {/* Studio */}
            <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-primary-3 mb-3">Radix Studio</h3>
              <p className="text-3xl font-bold text-primary-3 mb-2">$45<span className="text-base font-normal text-gray-500">/user/mo</span></p>
              <p className="text-sm text-gray-600 mb-6">LLM orchestration & governance</p>
              <ul className="space-y-3 mb-6 text-sm">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-primary-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Pipeline orchestration</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-primary-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Multi-model registry</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-primary-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">14-day free trial</span>
                </li>
              </ul>
              <TrackedCTALink
                href="/waitlist"
                trackingName="Join Waitlist"
                trackingLocation="ML Teams Pricing - Studio"
                className="w-full block text-center px-6 py-3 bg-primary-3 text-white rounded-full font-semibold hover:bg-primary-4 transition-all"
              >
                Join Waitlist
              </TrackedCTALink>
            </div>

            {/* Platform Bundle */}
            <div className="bg-primary-3 rounded-2xl p-6 border-2 border-primary-2 relative">
              <div className="absolute top-4 right-4 bg-pop-light text-primary-4 text-xs font-bold px-3 py-1 rounded-full">
                Recommended
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Platform Bundle</h3>
              <p className="text-3xl font-bold text-white mb-2">Core + Studio</p>
              <p className="text-sm text-white/80 mb-6">Complete ML infrastructure</p>
              <ul className="space-y-3 mb-6 text-sm">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-pop-light mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white/90">Training + inference unified</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-pop-light mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white/90">Full ML lifecycle coverage</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-pop-light mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white/90">14-day free trial</span>
                </li>
              </ul>
              <TrackedCTALink
                href="/waitlist"
                trackingName="Join Waitlist"
                trackingLocation="ML Teams Pricing - Bundle"
                className="w-full block text-center px-6 py-3 bg-pop-light text-primary-4 rounded-full font-semibold hover:bg-white transition-all"
              >
                Join Waitlist
              </TrackedCTALink>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              Need hyperscale deployment? <Link href="/solutions/hyperscale/" className="text-primary-3 font-semibold hover:underline">View enterprise options</Link>
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-primary-3">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
            Ready to Ship Production AI?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Join the waitlist for early access and start your 14-day free trial when your spot opens.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <TrackedCTALink
              href="/waitlist"
              trackingName="Join Waitlist"
              trackingLocation="ML Teams CTA"
              className="px-10 py-5 bg-pop-light text-primary-4 rounded-full font-bold hover:bg-white transition-all text-xl shadow-2xl hover:shadow-pop-light/50 hover:scale-105 transform focus:outline-none focus:ring-4 focus:ring-pop-light/50"
            >
              Join Waitlist
            </TrackedCTALink>
            <TrackedCTALink
              href="/contact"
              trackingName="Contact Sales"
              trackingLocation="ML Teams CTA"
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

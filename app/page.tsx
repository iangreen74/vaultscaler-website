// Route: / (Home)
import type { Metadata } from 'next';
import { TrackedCTALink } from '@/components/TrackedLink';
import { SITE } from '@/lib/site';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Radix: Train Models Faster. Deploy LLMs Smarter. | VaultScaler',
  description: 'Radix Core for up to 21% faster GPU training. Radix Studio to control every inference. One platform. Two products. No stack changes required.',
  alternates: {
    canonical: SITE.url,
  },
  keywords: SITE.keywords,
  openGraph: {
    title: 'Radix: Train Models Faster. Deploy LLMs Smarter.',
    description: 'Radix Core for up to 21% faster training. Radix Studio to control every inference. One platform for AI operations.',
    type: 'website',
    url: SITE.url,
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'Radix AI Operations Platform' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Radix: Train Models Faster. Deploy LLMs Smarter.',
    description: 'Radix Core for up to 21% faster training. Radix Studio to control every inference.',
    images: ['/og.jpg'],
  },
};

export default function Home() {
  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "VaultScaler",
    "url": SITE.url,
    "description": "AI operations platform for GPU training optimization and LLM governance",
  };

  return (
    <>
      <JsonLd data={webSiteSchema} />
      {/* Hero - Lead with Radix */}
      <section className="relative min-h-[clamp(600px,90vh,1200px)] flex items-center justify-center bg-gradient-to-br from-primary-4 via-primary-3 to-primary-3 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/4 -right-1/4 w-[60%] h-[60%] rounded-full bg-pop-light/10 blur-3xl" />
          <div className="absolute -bottom-1/4 -left-1/4 w-[50%] h-[50%] rounded-full bg-pop-dark/30 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Radix Brand */}
          <p className="text-5xl sm:text-6xl md:text-7xl font-bold text-pop-light mb-6 tracking-tight">
            Radix
          </p>

          {/* Main Tagline - benefit-driven */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            Train Models Faster. <br className="hidden sm:inline" />
            Deploy LLMs Smarter.
          </h1>

          {/* Subheadline - value prop */}
          <p className="text-lg md:text-xl text-pop-light max-w-3xl mx-auto mb-10 leading-relaxed">
            Radix Core for up to 21% faster training. <br className="hidden sm:inline" />
            Radix Studio to control every inference.
          </p>

        </div>
      </section>

      {/* The Problem - Why AI Ops Are Broken */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-primary-3">
            AI Operations Are Harder Than They Should Be
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Teams building AI face invisible costs and governance gaps that slow everything down.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Training Problem */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-pop-light rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3 text-primary-3">The Training Problem</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                GPU schedulers treat hardware as monolithic units. They account for GPU count but ignore memory, compute, and power constraints across training runs.
              </p>
              <p className="text-primary-3 font-semibold">
                Up to 21% training throughput degregation chokes GPU utilization.
              </p>
            </div>

            {/* Inference Problem */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-pop-light rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3 text-primary-3">The Inference Problem</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Every LLM call makes invisible tradeoffs: cost vs. quality, speed vs. accuracy. Without governance, you can't see these tradeoffs—let alone control them.
              </p>
              <p className="text-primary-3 font-semibold">
                62% of organizations cite governance gaps as their top AI blocker.
              </p>
            </div>

            {/* Research Problem */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-pop-light rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3 text-primary-3">The Research Problem</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Campus clusters grow at one-third the pace of industry. Jobs routinely waste 75% of allocated GPU memory. PIs spend their time managing infrastructure instead of advancing research.
              </p>
              <p className="text-primary-3 font-semibold">
                18% annual growth vs. 54% industry standards. Innovation is falling behind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Radix Platform - Two Products */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900">
            The Radix Platform
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Accelerating Innovation.
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Radix Core */}
            <div className="bg-gradient-to-br from-primary-3 to-primary-3 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Radix Core</h3>
              <p className="text-pop-light text-sm font-medium mb-4">Model Training Optimization</p>
              <p className="text-white/90 mb-6 leading-relaxed">
                Get up to 21% more throughput from your existing GPU infrastructure. Radix Core uses closed-loop control to balance memory, compute, and power across all training runs.
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-pop-light font-bold">Light</span>
                  <span className="text-white/80">Deploy to Kubernetes or Slurm in minutes. No existing stack changes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pop-light font-bold">Demonstrable</span>
                  <span className="text-white/80">Leadership-ready dashboards comparing Radix vs. your current scheduler.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pop-light font-bold">Adaptive</span>
                  <span className="text-white/80">Continual scheduling refinement that improves over time.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pop-light font-bold">Secure</span>
                  <span className="text-white/80">Built for air-gapped deployment with Zero egress. SLSA Level 3 attestations.</span>
                </li>
              </ul>
            </div>

            {/* Radix Studio */}
            <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Radix Studio</h3>
              <p className="text-primary-3 text-sm font-medium mb-4">LLM Inference Optimization</p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Take control of your AI Inference. Build governed LLM workflows with cost-aware routing. Chain LLM calls, RAG queries, and tools into production-ready pipelines with full visibility and control.
              </p>

              <ul className="space-y-3 mb-6 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-primary-3 font-bold">Reusable</span>
                  <span>Build multi-step AI workflows with our Multi-Model Registry.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-3 font-bold">Governed</span>
                  <span>Enforce compliance policies, content filtering, and budget controls.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-3 font-bold">Transparent</span>
                  <span>Real-time visibility with full execution traces throughout all your pipelines.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-3 font-bold">Flexible</span>
                  <span>Bring Your Own GPU (BYOG) or use any AI vendor.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Segment Selector - Find Your Solution */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900">
            Solutions for Your Team
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Radix adapts to your environment. Find the solution built for your use case.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <a href="/solutions/gpu-fleet-optimization/" className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-lg hover:border-primary-1 transition-all">
              <div className="w-12 h-12 bg-primary-1/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-1/20 transition-colors">
                <svg className="w-6 h-6 text-primary-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-2 text-gray-900 group-hover:text-primary-1 transition-colors">Hyperscale & Frontier AI</h3>
              <p className="text-gray-600 mb-4">Leading GPU clouds, frontier AI labs, hyperscale data centers. Maximize fleet utilization and prove ROI to your CFO.</p>
              <span className="text-primary-1 font-semibold text-sm flex items-center gap-1">
                Learn more
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>

            <a href="/solutions/corporate/" className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-lg hover:border-primary-1 transition-all">
              <div className="w-12 h-12 bg-primary-1/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-1/20 transition-colors">
                <svg className="w-6 h-6 text-primary-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-2 text-gray-900 group-hover:text-primary-1 transition-colors">Corporate AI Teams</h3>
              <p className="text-gray-600 mb-4">Gaming, healthcare, fintech, startups. Train faster, control inference costs, govern AI at scale.</p>
              <span className="text-primary-1 font-semibold text-sm flex items-center gap-1">
                Learn more
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>

            <a href="/solutions/research/" className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-lg hover:border-primary-1 transition-all">
              <div className="w-12 h-12 bg-primary-1/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-1/20 transition-colors">
                <svg className="w-6 h-6 text-primary-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-2 text-gray-900 group-hover:text-primary-1 transition-colors">Research Labs</h3>
              <p className="text-gray-600 mb-4">Universities, government labs, academic research. Publish faster with reproducible experiments. Academic pricing available.</p>
              <span className="text-primary-1 font-semibold text-sm flex items-center gap-1">
                Learn more
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Why Radix - Differentiators (without naming competitors) */}
      <section className="py-20 bg-primary-4">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white">
            The Radix Advantage
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="font-bold text-lg mb-3 text-pop-light">No Stack Changes</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Install Radix agents on your existing Kubernetes or integrate with Slurm. Keep your current workflow. See results in minutes, not months.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="font-bold text-lg mb-3 text-pop-light">No Vendor Lock-in</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Use any AI provider. Bring your own GPUs. Switch models without rewriting code. Your infrastructure, your choice.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="font-bold text-lg mb-3 text-pop-light">No Hidden Costs</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Predictable per-GPU and per-execution pricing. Full visibility into where every dollar goes. No surprise bills.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="font-bold text-lg mb-3 text-pop-light">Proven Results</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Up to 21% throughput improvement in testing. Every performance claim is reproducible. Deterministic results you can trust.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="font-bold text-lg mb-3 text-pop-light">Built for Enterprise</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Air-gapped deployment. Multi-tenant isolation. Audit logs. Compliance guardrails. Security that satisfies your infosec team.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="font-bold text-lg mb-3 text-pop-light">Single Platform</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Training and inference in one place. No piecing together 4+ services. One dashboard. One vendor relationship.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <TrackedCTALink
              href="/waitlist"
              trackingName="Join Waitlist"
              trackingLocation="Advantages"
              className="px-10 py-5 bg-pop-light text-primary-4 rounded-full font-bold hover:bg-white transition-all text-xl shadow-lg hover:shadow-xl hover:scale-105 transform focus:outline-none focus:ring-4 focus:ring-pop-light/50"
            >
              Join Waitlist
            </TrackedCTALink>
            <TrackedCTALink
              href="mailto:bpruess@vaultscaler.com"
              trackingName="Contact Us"
              trackingLocation="Advantages"
              className="px-8 py-4 bg-white/10 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/20 hover:border-white/50 transition-all text-lg focus:outline-none focus:ring-4 focus:ring-white/30"
            >
              Contact Us
            </TrackedCTALink>
          </div>
        </div>
      </section>

      {/* About VaultScaler - Brief */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-500 uppercase tracking-wide mb-3">Built by</p>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">VaultScaler</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            VaultScaler harmonizes AI operations at scale. <br />Radix Core gives you GPU cost savings and governance policies for model training. <br />Radix Studio gives you visibility, standardization and governance for every LLM call so you can deploy with confidence. <br />Radix is for those who refuse to waste compute or compromise on governance.
          </p>
        </div>
      </section>
    </>
  );
}

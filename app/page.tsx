// Route: / (Home)
import type { Metadata } from 'next';
import { TrackedCTALink } from '@/components/TrackedLink';
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

          {/* Main Tagline - speaks to both technical and business audiences */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            Train Models Faster.<br className="hidden sm:block" /> Deploy LLMs Smarter.
          </h1>

          {/* Platform clarification */}
          <p className="text-sm text-pop-light font-medium mb-4 tracking-wide uppercase">
            One Platform. Two Products: Radix Core (Training) + Radix Studio (Inference)
          </p>

          {/* Subheadline - value prop for both audiences */}
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
            Cut training costs by 21%. Govern every LLM call.
          </p>

          {/* Primary CTAs - differentiated for technical vs business buyers */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <TrackedCTALink
              href="/waitlist"
              trackingName="Join Waitlist"
              trackingLocation="Hero"
              className="px-10 py-5 bg-pop-light text-primary-4 rounded-full font-bold hover:bg-white transition-all text-xl shadow-2xl hover:shadow-pop-light/50 hover:scale-105 transform focus:outline-none focus:ring-4 focus:ring-pop-light/50"
            >
              Join Waitlist
            </TrackedCTALink>
            <TrackedCTALink
              href="/contact"
              trackingName="Request Demo"
              trackingLocation="Hero"
              className="px-8 py-4 bg-transparent border-2 border-white/30 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-white/10 hover:border-white/50 transition-all text-lg focus:outline-none focus:ring-4 focus:ring-white/30"
            >
              Request Demo
            </TrackedCTALink>
          </div>

          {/* Value stats - concrete numbers */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-3xl mx-auto" role="region" aria-label="Platform results">
            <div className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <p className="text-3xl sm:text-4xl font-bold text-pop-light mb-1">21%</p>
              <p className="text-sm text-white/80 font-medium">Training Throughput Gains</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <p className="text-3xl sm:text-4xl font-bold text-pop-light mb-1">$250K</p>
              <p className="text-sm text-white/80 font-medium">Saved per 100 GPUs/Year</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <p className="text-3xl sm:text-4xl font-bold text-pop-light mb-1">Zero</p>
              <p className="text-sm text-white/80 font-medium">Stack Changes Required</p>
            </div>
          </div>
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

          <div className="grid md:grid-cols-2 gap-8">
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
                Up to 21% cost or training time overruns due to resource imbalances.
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
            Two products. One mission: make AI operations efficient, governed, and predictable.
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
                  <span className="text-white/80">Deploy to Kubernetes in minutes. No stack changes.</span>
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

              <div className="bg-white/10 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-pop-light">$28/GPU/month</p>
                <p className="text-sm text-white/70">14-day full trial</p>
              </div>
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

              <div className="bg-white rounded-xl p-4 text-center border border-gray-200">
                <p className="text-2xl font-bold text-primary-3">From $29/month</p>
                <p className="text-sm text-gray-500">Per-execution pricing. No surprises.</p>
              </div>
            </div>
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
                Install Radix agents on your existing Kubernetes cluster. Keep your current workflow. See results in minutes, not months.
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
                21% throughput improvement validated with statistical rigor (p {'<'} 0.001). Every performance claim is reproducible.
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
          <h3 className="text-2xl font-bold text-gray-900 mb-4">VaultScaler Labs</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We harmonize AI operations at scale. Radix is for teams that train and deploy models in the real world—and refuse to waste compute or compromise on governance.
          </p>
        </div>
      </section>
    </>
  );
}

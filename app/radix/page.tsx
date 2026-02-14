// Route: /radix (Radix Platform Overview)
import type { Metadata } from 'next';
import Link from 'next/link';
import { TrackedCTALink } from '@/components/TrackedLink';
import { SITE } from '@/lib/site';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Radix: Train Models Faster. Deploy LLMs Smarter. | VaultScaler',
  description: 'Radix Core for up to 21% faster GPU training. Radix Studio to control every inference. One platform. Two products. No stack changes required.',
  alternates: {
    canonical: `${SITE.url}/radix/`,
  },
  keywords: SITE.keywords,
  openGraph: {
    title: 'Radix: Train Models Faster. Deploy LLMs Smarter.',
    description: 'Radix Core for up to 21% faster training. Radix Studio to control every inference. One platform for AI operations.',
    type: 'website',
    url: `${SITE.url}/radix/`,
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'Radix AI Operations Platform' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Radix: Train Models Faster. Deploy LLMs Smarter.',
    description: 'Radix Core for up to 21% faster training. Radix Studio to control every inference.',
    images: ['/og.jpg'],
  },
};

const CheckIcon = ({ className = "text-primary-3" }: { className?: string }) => (
  <svg className={`w-5 h-5 ${className} flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export default function RadixPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE.url },
      { "@type": "ListItem", "position": 2, "name": "Radix", "item": `${SITE.url}/radix/` },
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Radix Platform",
    applicationCategory: "DevOps/Monitoring",
    operatingSystem: "Kubernetes 1.26+",
    offers: [
      { "@type": "Offer", name: "Trial", price: "0", priceCurrency: "USD" },
      { "@type": "Offer", name: "Radix Core", price: "45", priceCurrency: "USD", description: "Per GPU per month" },
      { "@type": "Offer", name: "Radix Studio", price: "45", priceCurrency: "USD", description: "Per user per month" },
    ],
    author: { "@type": "Organization", name: "VaultScaler" },
    url: `${SITE.url}/radix/`,
    description: metadata.description,
    releaseNotes: "General Availability April 6, 2026.",
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
          <p className="text-5xl sm:text-6xl md:text-7xl font-bold text-pop-light mb-6 tracking-tight">
            Radix
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            Train Models Faster. <br className="hidden sm:inline" />
            Deploy LLMs Smarter.
          </h1>

          <p className="text-lg md:text-xl text-pop-light max-w-3xl mx-auto mb-10 leading-relaxed">
            One platform. Two products. Radix Core for up to 21% faster training. <br className="hidden sm:inline" />
            Radix Studio to control every inference.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/radix/core/"
              className="px-8 py-4 bg-pop-light text-primary-4 rounded-full font-bold hover:bg-white transition-all text-lg shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              Explore Radix Core
            </Link>
            <Link
              href="/radix/studio/"
              className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 hover:border-white/50 transition-all text-lg"
            >
              Explore Radix Studio
            </Link>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-primary-3">
            AI Operations Are Harder Than They Should Be
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Teams building AI face invisible costs and governance gaps that slow everything down.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
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
              <p className="text-primary-3 font-semibold mb-4">
                Up to 21% training throughput lost to naive scheduling (VaultScaler internal benchmarks).
              </p>
              <Link href="/radix/core/" className="text-primary-3 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                Radix Core solves this
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-pop-light rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3 text-primary-3">The Inference Problem</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Every LLM call makes invisible tradeoffs: cost vs. quality, speed vs. accuracy. Without governance, you can't see these tradeoffs. Much less control them.
              </p>
              <p className="text-primary-3 font-semibold mb-4">
                62% of organizations cite governance gaps as their top AI blocker (VaultScaler estimate based on IBM, Vanta, and NACD surveys, 2025).
              </p>
              <Link href="/radix/studio/" className="text-primary-3 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                Radix Studio solves this
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Two Products */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900">
            The Radix Platform
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Two products. One platform. Training and inference, unified.
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Radix Core */}
            <Link href="/radix/core/" className="group bg-gradient-to-br from-primary-3 to-primary-3 rounded-2xl p-8 text-white hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold mb-2">Radix Core</h3>
              <p className="text-pop-light text-sm font-medium mb-4">GPU Training Optimization</p>
              <p className="text-white/90 mb-6 leading-relaxed">
                Get up to 21% more throughput from your existing GPU infrastructure (internal benchmarks). Closed-loop control that balances memory, compute, and power across all training runs.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-pop-light font-bold">Light</span>
                  <span className="text-white/80">Deploy to Kubernetes in minutes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pop-light font-bold">Demonstrable</span>
                  <span className="text-white/80">Leadership-ready dashboards and ROI metrics</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pop-light font-bold">Adaptive</span>
                  <span className="text-white/80">Continual scheduling refinement over time</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pop-light font-bold">Secure</span>
                  <span className="text-white/80">Air-gapped deployment. Zero egress. SLSA Level 3</span>
                </li>
              </ul>
              <span className="text-pop-light font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn more about Radix Core
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </span>
            </Link>

            {/* Radix Studio */}
            <Link href="/radix/studio/" className="group bg-gray-50 border-2 border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-primary-1 transition-all">
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Radix Studio</h3>
              <p className="text-primary-3 text-sm font-medium mb-4">LLM Inference Governance</p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Take control of your AI inference. Build governed LLM workflows with cost-aware routing. Chain LLM calls, RAG queries, and tools into production-ready pipelines.
              </p>
              <ul className="space-y-3 mb-6 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-primary-3 font-bold">Reusable</span>
                  <span>Multi-step AI workflows with the Multi-Model Registry</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-3 font-bold">Governed</span>
                  <span>Compliance policies, content filtering, budget controls</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-3 font-bold">Transparent</span>
                  <span>Full execution traces throughout all pipelines</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-3 font-bold">Flexible</span>
                  <span>Bring Your Own GPU (BYOG) or use any AI vendor</span>
                </li>
              </ul>
              <span className="text-primary-3 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn more about Radix Studio
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900">
            Solutions for Your Team
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Radix adapts to your environment. Find the solution built for your use case.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/solutions/hyperscale/" className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-lg hover:border-primary-1 transition-all">
              <div className="w-12 h-12 bg-primary-1/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-1/20 transition-colors">
                <svg className="w-6 h-6 text-primary-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-2 text-gray-900 group-hover:text-primary-1 transition-colors">Hyperscale & Frontier AI</h3>
              <p className="text-gray-600 mb-4">Leading GPU clouds, frontier AI labs, hyperscale data centers. Maximize fleet utilization and prove ROI to your CFO.</p>
              <span className="text-primary-1 font-semibold text-sm flex items-center gap-1">
                Learn more
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </span>
            </Link>

            <Link href="/solutions/ml-teams/" className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-lg hover:border-primary-1 transition-all">
              <div className="w-12 h-12 bg-primary-1/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-1/20 transition-colors">
                <svg className="w-6 h-6 text-primary-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-2 text-gray-900 group-hover:text-primary-1 transition-colors">ML & AI Development Teams</h3>
              <p className="text-gray-600 mb-4">Optimize GPU training, orchestrate LLM pipelines, and ship production AI with governance built-in.</p>
              <span className="text-primary-1 font-semibold text-sm flex items-center gap-1">
                Learn more
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Platform Pricing */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-primary-3">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Start with a free 14-day trial. Buy what you need. Core, Studio, or both.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Trial */}
            <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-6 flex flex-col">
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-primary-3 mb-3">Trial</h3>
                <p className="text-2xl font-bold text-primary-3 mb-2">Free</p>
                <p className="text-sm text-gray-600 mb-4">14-day trial, up to 400 GPUs</p>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="text-primary-3 mt-0.5 w-4 h-4" />
                    <span className="text-gray-600">Full Core + Studio access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="text-primary-3 mt-0.5 w-4 h-4" />
                    <span className="text-gray-600">No stack changes</span>
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
                trackingLocation="Radix Pricing - Trial"
                className="w-full text-center px-4 py-3 bg-primary-3 text-white text-sm rounded-full font-bold hover:bg-primary-4 transition-all shadow-lg hover:scale-105 transform inline-block"
              >
                Join Waitlist
              </TrackedCTALink>
            </div>

            {/* Radix Core */}
            <Link href="/radix/core/#pricing" className="bg-primary-3 rounded-2xl p-6 flex flex-col hover:shadow-xl transition-all group">
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-white mb-3">Radix Core</h3>
                <p className="text-2xl font-bold text-white mb-2">$45<span className="text-sm font-normal text-white/70">/GPU/mo</span></p>
                <p className="text-sm text-white/80 mb-4">GPU scheduling optimization</p>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="text-white mt-0.5 w-4 h-4" />
                    <span className="text-white/90">Up to 21% throughput gains</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="text-white mt-0.5 w-4 h-4" />
                    <span className="text-white/90">Production support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="text-white mt-0.5 w-4 h-4" />
                    <span className="text-white/90">Air-gapped deployment</span>
                  </li>
                </ul>
              </div>
              <span className="inline-block w-full text-center px-4 py-3 bg-white text-primary-3 text-sm rounded-full font-bold group-hover:bg-gray-100 transition-all">
                View Core Pricing
              </span>
            </Link>

            {/* Radix Studio */}
            <Link href="/radix/studio/#pricing" className="bg-primary-3 rounded-2xl p-6 flex flex-col hover:shadow-xl transition-all group">
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
              <span className="inline-block w-full text-center px-4 py-3 bg-white text-primary-3 text-sm rounded-full font-bold group-hover:bg-gray-100 transition-all">
                View Studio Pricing
              </span>
            </Link>
          </div>

          {/* Platform Bundle + Hyperscale */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-primary-3 to-primary-4 text-white rounded-2xl p-8 border-2 border-primary-2">
              <h3 className="text-xl font-bold mb-4">Radix Platform</h3>
              <p className="text-white/80 mb-4">
                Full AI operations coverage. Training optimization plus inference governance. One platform, complete lifecycle control.
              </p>
              <p className="text-2xl font-bold text-pop-light mb-2">Core + Studio</p>
              <p className="text-sm text-white/70 mb-6">Bundle pricing available</p>
              <TrackedCTALink href="/contact" trackingName="Contact Sales" trackingLocation="Radix Pricing - Platform Bundle" className="inline-block text-center px-6 py-3 bg-pop-light text-primary-4 rounded-full font-bold hover:bg-white transition-colors">
                Contact Sales
              </TrackedCTALink>
            </div>

            <div className="bg-gradient-to-br from-primary-4 to-primary-3 text-white rounded-2xl p-8 border-2 border-primary-2">
              <h3 className="text-xl font-bold mb-4">Hyperscale & Frontier AI</h3>
              <p className="text-white/80 mb-4">
                1,000+ GPU deployments with dedicated support, architecture review, and custom SLAs.
              </p>
              <p className="text-2xl font-bold text-white mb-2">Custom</p>
              <p className="text-sm text-white/70 mb-6">Volume pricing available</p>
              <TrackedCTALink href="/contact/" trackingName="Get in Touch" trackingLocation="Radix Pricing - Hyperscale" className="inline-block text-center px-6 py-3 bg-white text-primary-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
                Get in Touch
              </TrackedCTALink>
            </div>
          </div>
        </div>
      </section>

      {/* The Radix Advantage */}
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
                Predictable per-GPU and per-user pricing. Full visibility into where every dollar goes. No surprise bills.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="font-bold text-lg mb-3 text-pop-light">Proven Results</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Up to 21% throughput improvement in internal testing. Every performance claim is reproducible. Deterministic results you can trust.
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
              trackingLocation="Radix Advantages"
              className="px-10 py-5 bg-pop-light text-primary-4 rounded-full font-bold hover:bg-white transition-all text-xl shadow-lg hover:shadow-xl hover:scale-105 transform focus:outline-none focus:ring-4 focus:ring-pop-light/50"
            >
              Join Waitlist
            </TrackedCTALink>
            <TrackedCTALink
              href="/contact"
              trackingName="Contact Us"
              trackingLocation="Radix Advantages"
              className="px-8 py-4 bg-white/10 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/20 hover:border-white/50 transition-all text-lg focus:outline-none focus:ring-4 focus:ring-white/30"
            >
              Contact Us
            </TrackedCTALink>
          </div>
        </div>
      </section>
    </>
  );
}

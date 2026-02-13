// Route: / (VaultScaler Company Home)
import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/site';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'VaultScaler | AI Operations, Harmonized',
  description: 'VaultScaler builds products that harmonize AI operations at scale. Radix optimizes GPU training and governs LLM inference. Lev delivers AI engineering with actual results.',
  alternates: {
    canonical: `${SITE.url}/`,
  },
  keywords: SITE.keywords,
  openGraph: {
    title: 'VaultScaler | AI Operations, Harmonized',
    description: 'Products that harmonize AI operations at scale. GPU training optimization, LLM governance, and AI engineering.',
    type: 'website',
    url: `${SITE.url}/`,
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'VaultScaler' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VaultScaler | AI Operations, Harmonized',
    description: 'Products that harmonize AI operations at scale. GPU training optimization, LLM governance, and AI engineering.',
    images: ['/og.jpg'],
  },
};

export default function Home() {
  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "VaultScaler",
    "url": `${SITE.url}/`,
    "description": "VaultScaler builds products that harmonize AI operations at scale.",
  };

  return (
    <>
      <JsonLd data={webSiteSchema} />

      {/* Hero - Company Level */}
      <section className="relative min-h-[clamp(500px,60vh,800px)] flex items-center justify-center bg-gradient-to-br from-primary-4 via-primary-3 to-primary-3 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/4 -right-1/4 w-[60%] h-[60%] rounded-full bg-primary-2/20 blur-3xl" />
          <div className="absolute -bottom-1/4 -left-1/4 w-[50%] h-[50%] rounded-full bg-primary-1/10 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-[1.2fr,1fr] gap-8 lg:gap-12 items-center">
            {/* Left: Brand messaging */}
            <div className="text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
                AI Operations, <br className="hidden sm:inline" />
                Harmonized.
              </h1>

              <p className="text-lg md:text-xl text-primary-1 max-w-2xl leading-relaxed">
                VaultScaler builds products that bring order to AI operations.
              </p>
            </div>

            {/* Right: Pain point badges */}
            <div className="flex flex-col gap-4">
              {/* Radix Card */}
              <Link
                href="/radix/"
                className="group bg-white/95 backdrop-blur-sm rounded-2xl p-6 border-l-4 border-pop-light hover:bg-white hover:shadow-xl hover:scale-[1.02] transition-all"
              >
                <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                  Unleash GPUs on training jobs. Govern every LLM call.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">Radix</span>
                  <svg className="w-5 h-5 text-pop-light group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>

              {/* Lev Card */}
              <Link
                href="/lev/"
                className="group bg-white/95 backdrop-blur-sm rounded-2xl p-6 border-l-4 border-lev-bold hover:bg-white hover:shadow-xl hover:scale-[1.02] transition-all"
              >
                <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                  Full lifecycle agentic engineering and support.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">Lev</span>
                  <svg className="w-5 h-5 text-lev-bold group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Radix Card */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border-2 border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-pop-light" />
                <h3 className="text-2xl font-bold text-gray-900">Radix</h3>
              </div>
              <p className="text-primary-3 text-sm font-medium mb-4">AI Operations Platform</p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Optimize GPU training throughput by up to 21% (internal benchmarks). Govern every LLM inference call. One platform for the full AI lifecycle. No stack changes required.
              </p>
              <div className="flex flex-col gap-3">
                <Link href="/radix/core" className="group/core flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-primary-3/5 transition-colors">
                  <div>
                    <span className="font-semibold text-gray-900 text-sm">Radix Core</span>
                    <span className="text-gray-500 text-xs ml-2">GPU Training Optimization</span>
                  </div>
                  <svg className="w-4 h-4 text-gray-400 group-hover/core:text-primary-3 group-hover/core:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link href="/radix/studio" className="group/studio flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-primary-3/5 transition-colors">
                  <div>
                    <span className="font-semibold text-gray-900 text-sm">Radix Studio</span>
                    <span className="text-gray-500 text-xs ml-2">LLM Inference Governance</span>
                  </div>
                  <svg className="w-4 h-4 text-gray-400 group-hover/studio:text-primary-3 group-hover/studio:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Lev Card */}
            <Link href="/lev" className="group bg-white rounded-2xl p-8 shadow-sm border-2 border-gray-200 hover:border-lev-bold hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-lev-bold" />
                <h3 className="text-2xl font-bold text-gray-900">Lev</h3>
              </div>
              <p className="text-primary-3 text-sm font-medium mb-4">Agentic Engineering System</p>
              <p className="text-gray-600 leading-relaxed mb-6">
                AI engineering that actually delivers. From golden specs to production deployment, Lev provides the complete engineering team and guardrails to ship AI projects.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-xs px-3 py-1 bg-gray-100 rounded-full text-gray-600">AI Engineering</span>
                <span className="text-xs px-3 py-1 bg-gray-100 rounded-full text-gray-600">Project Delivery</span>
                <span className="text-xs px-3 py-1 bg-gray-100 rounded-full text-gray-600">Guardrails</span>
              </div>
              <span className="text-primary-3 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn more
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Founder's Note */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-gray-900">
            Why we build
          </h2>

          <div className="prose prose-lg text-gray-700 leading-relaxed space-y-6">
            <p>
              We've been on projects where new tools underdelivered. Where the tools we actually needed weren't allowed. Where we inherited systems that were nightmares to support. We were moving slowly while the world was moving fast.
            </p>

            <p>
               We wanted to be part of the solution. To build tools that work, that you can actually use, that address the problems we were tired of living with.
            </p>

            <p>
              VaultScaler is how we do that. We created Radix to optimize training on expensive GPUs and bring control to inference call sprawl. We built Lev to solve our problems. AI development is great until it's not. Until the threshold is crossed. Then it's a nightmare. We built Lev so we could ship and support our products and keep bringing new products to market.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-3">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Have questions?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Talk to our team about which solution fits your needs.
          </p>
          <Link
            href="/contact/"
            className="inline-block px-8 py-4 bg-white text-primary-3 rounded-full font-bold hover:bg-gray-100 transition-all text-lg shadow-lg hover:scale-105 transform"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}

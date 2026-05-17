// Route: / (VaultScaler homepage, Forgewing-first)
import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/site';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Forgewing by VaultScaler | Product Delivery Engine',
  description: 'Forgewing is the Product Delivery Engine. Point it at your repo or hand it a brief — it designs, builds, deploys to your AWS, and operates the system after launch.',
  alternates: {
    canonical: `${SITE.url}/`,
  },
  keywords: SITE.keywords,
  openGraph: {
    title: 'Forgewing by VaultScaler | Product Delivery Engine',
    description: 'Point Forgewing at your repo or hand it a brief. Real pull requests come back. Production deploys to your AWS. Operations included.',
    type: 'website',
    url: `${SITE.url}/`,
    images: [{ url: '/og/forgewing.png', width: 1200, height: 630, alt: 'Forgewing by VaultScaler. Product Delivery Engine.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Forgewing by VaultScaler | Product Delivery Engine',
    description: 'Point Forgewing at your repo or hand it a brief. Real pull requests come back. Production deploys to your AWS. Operations included.',
    images: ['/og/forgewing.png'],
  },
};

export default function Home() {
  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "VaultScaler",
    "url": `${SITE.url}/`,
    "description": "Forgewing is the Product Delivery Engine by VaultScaler. Point it at your repo or hand it a brief — it designs, builds, deploys to your AWS, and operates the system after launch. Launching June 2026.",
  };

  return (
    <>
      <JsonLd data={webSiteSchema} />

      {/* Hero - Forgewing focused */}
      <section className="relative min-h-[clamp(500px,60vh,800px)] flex items-center justify-center bg-gradient-to-br from-primary-4 via-primary-3 to-primary-3 overflow-hidden pt-12 pb-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/4 -right-1/4 w-[60%] h-[60%] rounded-full bg-primary-2/20 blur-3xl" />
          <div className="absolute -bottom-1/4 -left-1/4 w-[50%] h-[50%] rounded-full bg-primary-1/10 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
              Build More. <br className="hidden sm:inline" />
              Manage Less.
            </h1>

            <p className="text-lg md:text-xl text-primary-1 max-w-2xl leading-relaxed mb-10">
              Meet Forgewing, the Product Delivery Engine. Point it at your repo or hand it a brief. Real pull requests come back. Production deploys to your AWS. Operations included.
            </p>

            <Link
              href="/forgewing/"
              className="inline-block px-10 py-5 bg-white text-primary-3 rounded-full font-bold text-xl hover:bg-gray-100 transition-all shadow-2xl hover:scale-105 transform focus:outline-none focus:ring-4 focus:ring-white/50"
            >
              Learn about Forgewing
            </Link>
          </div>
        </div>
      </section>

      {/* Products Overview */}
      <section className="pt-16 pb-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Forgewing Card */}
            <Link href="/forgewing" className="group bg-white rounded-2xl p-8 shadow-sm border-2 border-gray-200 hover:border-[#E8732A] hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-[#E8732A]" />
                <h3 className="text-2xl font-bold text-gray-900">Forgewing</h3>
              </div>
              <p className="text-primary-3 text-sm font-medium mb-4">Product Delivery Engine</p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Product and engineering, shipping together. Drop Forgewing into a team of 1–3 and watch the backlog actually move. Designs, code, deploys to your AWS, and operations included.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-xs px-3 py-1 bg-gray-100 rounded-full text-gray-600">Brief → Production</span>
                <span className="text-xs px-3 py-1 bg-gray-100 rounded-full text-gray-600">Operations Included</span>
                <span className="text-xs px-3 py-1 bg-gray-100 rounded-full text-gray-600">Earned Autonomy</span>
              </div>
              <span className="text-primary-3 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn more
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>

            {/* Radix Card */}
            <Link href="/radix/core" className="group bg-white rounded-2xl p-8 shadow-sm border-2 border-gray-200 hover:border-pop-light hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-pop-light" />
                <h3 className="text-2xl font-bold text-gray-900">Radix Core</h3>
              </div>
              <p className="text-primary-3 text-sm font-medium mb-4">GPU Orchestration</p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Optimize GPU training throughput by up to 21% based on internal benchmarking. Fully utilize your infrastructure to train more models. No stack changes required. Get more out of your infra spend.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-xs px-3 py-1 bg-gray-100 rounded-full text-gray-600">GPU Training</span>
                <span className="text-xs px-3 py-1 bg-gray-100 rounded-full text-gray-600">Optimization</span>
                <span className="text-xs px-3 py-1 bg-gray-100 rounded-full text-gray-600">No Stack Changes</span>
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
              AI engineering is great until it's not. We built Forgewing so we could ship and support our products and keep bringing new products to market. We built the tools we needed to supplement and accelerate a lean crew and help us continue to take inspired action.
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
            Talk to our team about how Forgewing can work for you.
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

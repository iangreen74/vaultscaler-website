import { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import JsonLd from "@/components/JsonLd";
import { TrackedCTALink } from "@/components/TrackedLink";

export const metadata: Metadata = {
  title: "Pricing | VaultScaler",
  description: "Get Radix Core for GPU scheduling optimization ($28/GPU/month) or Radix Studio for LLM orchestration & governance (from $29/month). Start with a free trial.",
  alternates: {
    canonical: `${SITE.url}/pricing`,
  },
  keywords: [...SITE.keywords, "pricing", "GPU scheduling pricing", "LLM governance pricing", "free trial"],
  openGraph: {
    title: 'Pricing | VaultScaler',
    description: 'Radix Core: $28/GPU/month. Radix Studio: from $29/month. Start with a free 14-day trial.',
    url: `${SITE.url}/pricing`,
    type: 'website',
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'Radix Pricing' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing | VaultScaler',
    description: 'Radix Core: $28/GPU/month. Radix Studio: from $29/month. Start with a free 14-day trial.',
    images: ['/og.jpg'],
  },
};

const CheckIcon = ({ className = "text-primary-3" }: { className?: string }) => (
  <svg className={`w-5 h-5 ${className} flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export default function PricingPage() {
  const coreSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Radix Core",
    "description": "AI training GPU scheduler that increases throughput by 21% through memory-aware, power-aware job placement",
    "brand": {
      "@type": "Organization",
      "name": SITE.name,
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Trial Edition",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "priceValidUntil": "2026-12-31",
        "description": "Full access to Radix Core for 14 days with up to 400 GPUs",
      },
      {
        "@type": "Offer",
        "name": "Production Edition",
        "price": "28",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "priceValidUntil": "2026-12-31",
        "description": "Full Radix Core deployment with production support at $28/GPU/month",
      },
    ],
  };

  const studioSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Radix Studio",
    "description": "LLM orchestration and governance platform with pipeline orchestration, compliance policies, and real-time execution traces",
    "brand": {
      "@type": "Organization",
      "name": SITE.name,
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Studio Team",
        "price": "29",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "priceValidUntil": "2026-12-31",
        "description": "1 user, 3 models & pipelines with full governance features",
      },
      {
        "@type": "Offer",
        "name": "Studio Professional",
        "price": "199",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "priceValidUntil": "2026-12-31",
        "description": "5 users, 20 models & pipelines with advanced governance and multi-tenant isolation",
      },
    ],
  };

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

  return (
    <>
      <JsonLd data={coreSchema} />
      <JsonLd data={studioSchema} />
      <JsonLd data={faqSchema} />

      {/* Radix Core Section - White Background */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-3 mb-4 text-center">
            Radix Core
          </h1>
          <p className="text-lg text-gray-600 mb-6 text-center">
            GPU Scheduling Optimization
          </p>
          <p className="text-gray-500 mb-6 text-center">
            Works with Kubernetes, Slurm, and Ray. No stack changes required.
          </p>
          <div className="text-center mb-12">
            <p className="inline-block px-6 py-4 bg-primary-3/10 text-primary-3 rounded-full font-medium text-sm mb-4">
              Helm Chart Download Coming Soon
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Trial Version */}
            <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-8 flex flex-col">
              <div className="flex-grow">
                <h2 className="text-2xl font-bold text-primary-3 mb-4">
                  14-Day Trial Version
                </h2>
                <p className="text-gray-600 mb-6">
                  Full access to Radix Core. No stack changes. Zero-risk validation.
                </p>
              </div>

              <TrackedCTALink
                href="/waitlist"
                trackingName="Join Waitlist"
                trackingLocation="Pricing - Core Trial"
                className="w-full text-center px-6 py-4 bg-primary-3 text-white rounded-full font-bold hover:bg-primary-4 transition-all shadow-lg hover:scale-105 transform inline-block"
              >
                Join Waitlist
              </TrackedCTALink>
            </div>

            {/* Production Version */}
            <div className="bg-primary-3 rounded-2xl p-8 flex flex-col">
              <div className="flex-grow">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Production Version
                </h2>
                <p className="text-3xl font-bold text-white mb-2">$28/GPU/month</p>
                <p className="text-white/80 mb-6">
                  Full deployment with production support. Save $250K per 100 GPUs annually.
                </p>
              </div>
              <TrackedCTALink
                href="/waitlist"
                trackingName="Join Waitlist"
                trackingLocation="Pricing - Core Production"
                className="inline-block w-full text-center px-6 py-4 bg-white text-primary-3 rounded-full font-bold hover:bg-gray-100 transition-all"
              >
                Join Waitlist
              </TrackedCTALink>
            </div>
          </div>

          {/* Contact Sales CTA */}
          <div className="mt-12 text-center">
            <p className="text-gray-500 mb-4">Need more than 400 GPUs? <Link href="/contact" className="text-primary-3 hover:underline">Contact Sales</Link></p>
          </div>
        </div>
      </section>

      {/* Radix Studio Section - Blue Background */}
      <section className="bg-gradient-to-br from-primary-4 via-primary-3 to-primary-3 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-pop-light mb-4 text-center">
            Radix Studio
          </h2>
          <p className="text-lg text-white mb-6 text-center">
            LLM Orchestration & Governance Platform
          </p>
          <p className="text-white/70 mb-12 text-center">
            Chain LLM calls with recipes, advanced governance & budget controls, policy control and auditability, solve LLM vendor lock-in.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Team Tier */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 flex flex-col">
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Studio Team
                </h3>
                <p className="text-3xl font-bold text-pop-light mb-2">$29<span className="text-lg font-normal text-white/70">/month</span></p>
                <p className="text-white/70 mb-6">
                  Perfect for small teams validating LLM workflows before scale.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckIcon className="text-pop-light mt-0.5" />
                    <span className="text-white/80">1 user with full platform access</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="text-pop-light mt-0.5" />
                    <span className="text-white/80">3 models & pipelines</span>
                  </li>

                </ul>
              </div>

              <TrackedCTALink
                href="/waitlist"
                trackingName="Join Waitlist"
                trackingLocation="Pricing - Studio Team"
                className="w-full text-center px-6 py-4 bg-pop-light text-primary-4 rounded-full font-bold hover:bg-white transition-all shadow-lg hover:scale-105 transform inline-block"
              >
                Join Waitlist
              </TrackedCTALink>
            </div>

            {/* Professional Tier */}
            <div className="bg-white rounded-2xl p-8 flex flex-col">
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-pop-dark mb-2">
                  Studio Professional
                </h3>
                <p className="text-3xl font-bold text-pop-dark mb-2">$199<span className="text-lg font-normal text-gray-500">/month</span></p>
                <p className="text-gray-600 mb-6">
                  Built for teams deploying LLM applications to production.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckIcon className="text-pop-dark mt-0.5" />
                    <span className="text-gray-600">5 users with role-based access</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="text-pop-dark mt-0.5" />
                    <span className="text-gray-600">20 models & pipelines</span>
                  </li>

                </ul>
              </div>
              <TrackedCTALink
                href="/waitlist"
                trackingName="Join Waitlist"
                trackingLocation="Pricing - Studio Professional"
                className="inline-block w-full text-center px-6 py-4 bg-primary-3 text-white rounded-full font-bold hover:bg-primary-4 transition-all"
              >
                Join Waitlist
              </TrackedCTALink>
            </div>
          </div>

          {/* Contact Sales CTA */}
          <div className="mt-12 text-center">
            <p className="text-white/80 mb-4">Need more users or custom limits? <Link href="/contact" className="text-pop-light hover:underline">Contact Sales</Link></p>
          </div>
        </div>
      </section>
    </>
  );
}

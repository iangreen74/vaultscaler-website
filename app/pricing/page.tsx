import { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import JsonLd from "@/components/JsonLd";
import { TrackedCTALink } from "@/components/TrackedLink";

export const metadata: Metadata = {
  title: "Radix Pricing - GPU Optimization & LLM Governance | VaultScaler",
  description: "Simple, transparent pricing for GPU optimization and LLM governance. Radix Core from $45/GPU/mo. Radix Studio from $45/user/mo. Free 14-day trial.",
  alternates: {
    canonical: `${SITE.url}/pricing`,
  },
  keywords: [...SITE.keywords, "pricing", "GPU scheduling pricing", "LLM governance pricing", "corporate pricing", "free trial", "GPU cost optimization"],
  openGraph: {
    title: 'Radix Pricing - GPU Optimization & LLM Governance | VaultScaler',
    description: 'Transparent pricing: Radix Core $45/GPU/mo, Radix Studio $45/user/mo. Free 14-day trial.',
    url: `${SITE.url}/pricing`,
    type: 'website',
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'Radix Pricing' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Radix Pricing - GPU Optimization & LLM Governance | VaultScaler',
    description: 'Transparent pricing: Radix Core $45/GPU/mo, Radix Studio $45/user/mo. Free 14-day trial.',
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
    "description": "AI training GPU scheduler that increases throughput by up to 21% through memory-aware, power-aware job placement",
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
        "name": "Corporate Edition",
        "price": "45",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "priceValidUntil": "2026-12-31",
        "description": "Corporate pricing at $45/GPU/month with full production support",
      },
      {
        "@type": "Offer",
        "name": "Hyperscale & Frontier AI",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "priceValidUntil": "2026-12-31",
        "description": "Custom pricing for 1,000+ GPU deployments with dedicated support",
      },
    ],
  };

  const studioSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Radix Studio",
    "description": "LLM experiment orchestration and evidence platform with pipeline orchestration, compliance policies, and real-time execution traces",
    "brand": {
      "@type": "Organization",
      "name": SITE.name,
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Corporate Edition",
        "price": "45",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "priceValidUntil": "2026-12-31",
        "description": "Corporate pricing at $45/user/month with full orchestration and governance features",
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
          "text": "Radix Core offers flexible pricing: Corporate pricing at $45/GPU/month, and custom pricing for Hyperscale & Frontier AI deployments (1,000+ GPUs). A free 14-day trial with up to 400 GPUs is available."
        }
      },
      {
        "@type": "Question",
        "name": "How much does Radix Studio cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Radix Studio offers Corporate pricing at $45/user/month for experiment orchestration and evidence features."
        }
      },
      {
        "@type": "Question",
        "name": "Is there a free trial?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Radix Core offers a full-featured 14-day trial with up to 400 GPUs at no cost."
        }
      },
      {
        "@type": "Question",
        "name": "What platforms does Radix Core support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Radix Core works with Kubernetes, Slurm, and Ray. No stack changes are required."
        }
      }
    ]
  };

  return (
    <>
      <JsonLd data={coreSchema} />
      <JsonLd data={studioSchema} />
      <JsonLd data={faqSchema} />

      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary-4 via-primary-3 to-primary-3 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Start with a free 14-day trial. Scale with predictable per-GPU and per-user pricing.
          </p>
        </div>
      </section>

      {/* Radix Core Section - White Background */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-3 mb-4 text-center">
            Radix Core
          </h2>
          <p className="text-lg text-gray-600 mb-6 text-center">
            GPU Scheduling Optimization
          </p>
          <p className="text-gray-500 mb-12 text-center">
            Works with Kubernetes, Slurm, and Ray. No stack changes required.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Trial Version */}
            <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-6 flex flex-col">
              <div className="flex-grow">
                <h2 className="text-xl font-bold text-primary-3 mb-3">
                  Trial
                </h2>
                <p className="text-2xl font-bold text-primary-3 mb-2">Free</p>
                <p className="text-sm text-gray-600 mb-4">
                  14-day trial, up to 400 GPUs
                </p>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="text-primary-3 mt-0.5 w-4 h-4" />
                    <span className="text-gray-600">Full feature access</span>
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
                trackingLocation="Pricing - Core Trial"
                className="w-full text-center px-4 py-3 bg-primary-3 text-white text-sm rounded-full font-bold hover:bg-primary-4 transition-all shadow-lg hover:scale-105 transform inline-block"
              >
                Join Waitlist
              </TrackedCTALink>
            </div>

            {/* Corporate Version */}
            <div className="bg-primary-3 rounded-2xl p-6 flex flex-col">
              <div className="flex-grow">
                <h2 className="text-xl font-bold text-white mb-3">
                  Corporate
                </h2>
                <p className="text-2xl font-bold text-white mb-2">$45<span className="text-sm font-normal text-white/70">/GPU/mo</span></p>
                <p className="text-sm text-white/80 mb-4">
                  Standard production pricing
                </p>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="text-white mt-0.5 w-4 h-4" />
                    <span className="text-white/90">Full deployment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="text-white mt-0.5 w-4 h-4" />
                    <span className="text-white/90">Production support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="text-white mt-0.5 w-4 h-4" />
                    <span className="text-white/90">Proven ROI with throughput gains</span>
                  </li>
                </ul>
              </div>

              <TrackedCTALink
                href="/waitlist"
                trackingName="Join Waitlist"
                trackingLocation="Pricing - Core Corporate"
                className="inline-block w-full text-center px-4 py-3 bg-white text-primary-3 text-sm rounded-full font-bold hover:bg-gray-100 transition-all"
              >
                Join Waitlist
              </TrackedCTALink>
            </div>

            {/* Hyperscale/Frontier AI */}
            <div className="bg-gradient-to-br from-primary-4 to-primary-3 rounded-2xl p-6 flex flex-col">
              <div className="flex-grow">
                <h2 className="text-xl font-bold text-white mb-3">
                  Hyperscale & Frontier AI
                </h2>
                <p className="text-2xl font-bold text-white mb-2">Custom</p>
                <p className="text-sm text-white/80 mb-4">
                  1,000+ GPUs, custom SLAs
                </p>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="text-white mt-0.5 w-4 h-4" />
                    <span className="text-white/90">Architecture review</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="text-white mt-0.5 w-4 h-4" />
                    <span className="text-white/90">Dedicated support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="text-white mt-0.5 w-4 h-4" />
                    <span className="text-white/90">Volume pricing</span>
                  </li>
                </ul>
              </div>

              <TrackedCTALink
                href="/contact"
                trackingName="Book Architecture Call"
                trackingLocation="Pricing - Core Hyperscale"
                className="inline-block w-full text-center px-4 py-3 bg-white text-primary-3 text-sm rounded-full font-bold hover:bg-gray-100 transition-all"
              >
                Book Architecture Call
              </TrackedCTALink>
            </div>
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
            Experiment Orchestration & Evidence
          </p>
          <p className="text-white/70 mb-12 text-center">
            Chain LLM calls with recipes, advanced governance & budget controls, policy control and auditability, solve LLM vendor lock-in.
          </p>

          <div className="grid md:grid-cols-1 gap-8 max-w-2xl mx-auto">
            {/* Corporate Tier */}
            <div className="bg-white rounded-2xl p-8 flex flex-col">
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-pop-dark mb-2">
                  Corporate
                </h3>
                <p className="text-3xl font-bold text-pop-dark mb-2">$45<span className="text-lg font-normal text-gray-500">/user/mo</span></p>
                <p className="text-gray-600 mb-6">
                  Built for teams deploying LLM applications to production.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckIcon className="text-pop-dark mt-0.5" />
                    <span className="text-gray-600">Full deployment support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="text-pop-dark mt-0.5" />
                    <span className="text-gray-600">Advanced governance & controls</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="text-pop-dark mt-0.5" />
                    <span className="text-gray-600">Production-grade reliability</span>
                  </li>
                </ul>
              </div>
              <TrackedCTALink
                href="/waitlist"
                trackingName="Join Waitlist"
                trackingLocation="Pricing - Studio Corporate"
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

      {/* Bottom Trial CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-3 mb-4">
            Ready to optimize your GPU infrastructure?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Start with a free 14-day trial of Radix Core, Studio, or both.
          </p>
          <TrackedCTALink
            href="/waitlist"
            trackingName="Join Waitlist"
            trackingLocation="Pricing - Bottom Trial CTA"
            className="inline-block px-8 py-4 bg-primary-3 text-white rounded-full font-bold hover:bg-primary-4 transition-all shadow-lg hover:scale-105 transform"
          >
            Start Free Trial
          </TrackedCTALink>
        </div>
      </section>
    </>
  );
}

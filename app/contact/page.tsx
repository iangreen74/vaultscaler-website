// Route: /contact
import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { TrackedEmailLink } from "@/components/TrackedLink";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Contact | VaultScaler",
  description:
    "Get in touch with the VaultScaler team. Reach out for enterprise licensing, partnerships, or to schedule a demo.",
  alternates: { canonical: `${SITE.url}/contact` },
  keywords: [...SITE.keywords, "contact", "demo", "enterprise licensing"],
  openGraph: {
    title: 'Contact | VaultScaler',
    description: 'Reach out for enterprise licensing, partnerships, or to schedule a demo.',
    url: `${SITE.url}/contact`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | VaultScaler',
    description: 'Reach out for enterprise licensing, partnerships, or to schedule a demo.',
    images: ['/og.jpg'],
  },
};

export default function Page() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact VaultScaler",
    "description": "Get in touch with the VaultScaler team for enterprise licensing, partnerships, or demos.",
    "url": `${SITE.url}/contact`,
    "mainEntity": {
      "@type": "Organization",
      "name": "VaultScaler",
      "email": "bpruess@vaultscaler.com",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "sales",
        "email": "bpruess@vaultscaler.com",
      },
    },
  };

  return (
    <>
      <JsonLd data={contactSchema} />
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-4 via-primary-3 to-primary-3 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/4 -right-1/4 w-[60%] h-[60%] rounded-full bg-pop-light/10 blur-3xl" />
          <div className="absolute -bottom-1/4 -left-1/4 w-[50%] h-[50%] rounded-full bg-pop-dark/30 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Whether you need enterprise licensing, want to explore a partnership, or just have questions—we're here to help.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Sales & Licensing */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 flex flex-col">
              <div className="flex-grow">
                <div className="w-12 h-12 bg-primary-3 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-primary-3 mb-4">Sales & Licensing</h2>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="text-primary-3 mt-1">•</span>
                    <span>Enterprise licensing for Core or Studio</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary-3 mt-1">•</span>
                    <span>Custom deployment requirements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary-3 mt-1">•</span>
                    <span>Air-gapped or zero-egress environments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary-3 mt-1">•</span>
                    <span>Volume pricing and annual contracts</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8">
                <TrackedEmailLink
                  href="mailto:bpruess@vaultscaler.com?subject=Sales%20Inquiry"
                  trackingName="Sales Inquiry"
                  className="inline-block w-full text-center px-6 py-4 bg-primary-3 text-white rounded-full font-bold hover:bg-primary-4 transition-all"
                >
                  Contact Sales
                </TrackedEmailLink>
              </div>
            </div>

            {/* Partnerships & Investment */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 flex flex-col">
              <div className="flex-grow">
                <div className="w-12 h-12 bg-pop-light rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-primary-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-pop-dark mb-4">Partnerships & Investment</h2>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="text-pop-dark mt-1">•</span>
                    <span>Joint go-to-market opportunities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pop-dark mt-1">•</span>
                    <span>Platform integrations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pop-dark mt-1">•</span>
                    <span>Strategic investment in AI operations</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8">
                <TrackedEmailLink
                  href="mailto:bpruess@vaultscaler.com?subject=Partnership%20Inquiry"
                  trackingName="Partnership Inquiry"
                  className="inline-block w-full text-center px-6 py-4 bg-pop-light text-primary-4 rounded-full font-bold hover:bg-white hover:shadow-lg transition-all"
                >
                  Contact Partnerships
                </TrackedEmailLink>
              </div>
            </div>
          </div>

          {/* General Contact */}
          <div className="mt-12 bg-primary-3 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Need Help Getting Started?</h2>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Not sure which product is right for you? Our team can help you evaluate your AI operations needs and find the best solution.
            </p>
            <TrackedEmailLink
              href="mailto:bpruess@vaultscaler.com?subject=Getting%20Started%20with%20Radix"
              trackingName="Schedule a Call"
              className="inline-block px-8 py-4 bg-white text-primary-3 rounded-full font-bold hover:bg-gray-100 transition-all"
            >
              Schedule a Call
            </TrackedEmailLink>
          </div>
        </div>
      </section>
    </>
  );
}

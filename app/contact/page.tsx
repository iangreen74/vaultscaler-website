// Route: /contact
import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import JsonLd from "@/components/JsonLd";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | VaultScaler",
  description:
    "Get in touch with the VaultScaler team. Reach out for enterprise licensing, partnerships, or to schedule a demo.",
  alternates: { canonical: `${SITE.url}/contact/` },
  keywords: [...SITE.keywords, "contact", "demo", "enterprise licensing"],
  openGraph: {
    title: 'Contact | VaultScaler',
    description: 'Reach out for enterprise licensing, partnerships, or to schedule a demo.',
    url: `${SITE.url}/contact/`,
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
    "url": `${SITE.url}/contact/`,
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
          <div className="absolute -top-1/4 -right-1/4 w-[60%] h-[60%] rounded-full bg-primary-2/20 blur-3xl" />
          <div className="absolute -bottom-1/4 -left-1/4 w-[50%] h-[50%] rounded-full bg-primary-1/10 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            We're here to help, whether you need enterprise licensing, want to explore a partnership, or just have questions.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>
    </>
  );
}

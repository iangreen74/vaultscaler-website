// Route: /contact
import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import JsonLd from "@/components/JsonLd";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | VaultScaler",
  description:
    "Have something worth keeping private? Tell us about your space, your material, or what you need to keep confidential. VaultScaler is a private AI consultancy — security systems, assessments, advisory, and bespoke builds, all on your own hardware.",
  alternates: { canonical: `${SITE.url}/contact/` },
  keywords: [...SITE.keywords, "contact", "consultation", "private security enquiry"],
  openGraph: {
    title: "Contact | VaultScaler",
    description: "Tell us what you need to keep private.",
    url: `${SITE.url}/contact/`,
    type: "website",
    images: ["/og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | VaultScaler",
    description: "Tell us what you need to keep private.",
    images: ["/og.jpg"],
  },
};

export default function Page() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact VaultScaler",
    description:
      "Get in touch with VaultScaler, a private AI consultancy — security systems, assessments, AI advisory, and bespoke private-knowledge builds, all on your own hardware.",
    url: `${SITE.url}/contact/`,
    mainEntity: {
      "@type": "Organization",
      name: "VaultScaler",
      email: SITE.email,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: SITE.email,
      },
    },
  };

  return (
    <>
      <JsonLd data={contactSchema} />

      <section className="relative overflow-hidden border-b border-line">
        <div aria-hidden className="spotlight absolute inset-0" />
        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 pt-20 pb-14 md:pt-28 md:pb-16">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-6 font-display font-light text-4xl md:text-6xl leading-[1.06] text-bone max-w-3xl tracking-tight">
            Have something worth keeping private?
          </h1>
          <p className="mt-7 text-lg md:text-xl leading-relaxed text-muted max-w-2xl">
            Tell us about your space, your material, or what you need to keep
            confidential. We read every message, and we reply ourselves.
          </p>
        </div>
      </section>

      <section>
        <div className="max-w-3xl mx-auto px-5 sm:px-8 py-14 md:py-20">
          <ContactForm />
        </div>
      </section>
    </>
  );
}

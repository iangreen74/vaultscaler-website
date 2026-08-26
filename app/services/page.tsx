// Route: /services — the four ways to engage VaultScaler. Drawn from §4 of
// business/strategy/VaultScaler_Positioning_and_Services.md. Status honesty (§7) is
// mandatory: only Private Security Systems is described as shipping.
import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { SITE, SERVICES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services | VaultScaler",
  description:
    "Four ways to engage VaultScaler: a built and shipping private security system, a written security assessment, vendor-independent AI advisory, and bespoke private-knowledge systems. Most require no installed hardware at all.",
  alternates: { canonical: `${SITE.url}/services/` },
  openGraph: {
    title: "Services | VaultScaler",
    description:
      "A built and shipping security system, a written assessment, vendor-independent AI advisory, and bespoke private-knowledge systems. Most need no installed hardware.",
    url: `${SITE.url}/services/`,
    type: "website",
    images: ["/og.jpg"],
  },
};

const STATUS_LABEL: Record<string, string> = {
  shipping: "Built and shipping",
  available: "Deliverable today",
  build: "Bespoke build",
};

export default function Services() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Services — VaultScaler",
    url: `${SITE.url}/services/`,
    description:
      "The four ways to engage VaultScaler: a private security system, a security assessment, AI advisory, and bespoke private-knowledge systems.",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: SERVICES.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: s.name,
        description: s.summary,
      })),
    },
  };

  return (
    <>
      <JsonLd data={ld} />

      <section className="relative overflow-hidden border-b border-line">
        <div aria-hidden className="spotlight absolute inset-0" />
        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 pt-20 pb-16 md:pt-28 md:pb-20">
          <p className="eyebrow">Services</p>
          <h1 className="mt-6 font-display font-light text-4xl md:text-6xl leading-[1.06] text-bone max-w-3xl tracking-tight">
            Four ways to engage us.
          </h1>
          <p className="mt-7 text-lg md:text-xl leading-relaxed text-muted max-w-2xl">
            Security is the first thing we built, not the only thing we do. Two of these
            four need no installed system, no camera, and no purchase to get started.
          </p>
        </div>
      </section>

      <section>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-8 md:py-12">
          {SERVICES.map((s) => (
            <div
              key={s.slug}
              id={s.slug}
              className="scroll-mt-24 grid md:grid-cols-[6rem_1fr] gap-x-8 gap-y-4 py-14 border-t border-line first:border-t-0"
            >
              <div className="font-display text-3xl md:text-4xl text-dim">{s.n}</div>
              <div className="max-w-3xl">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                  <h2 className="font-display text-2xl md:text-3xl text-bone">{s.name}</h2>
                  <span
                    className={
                      "text-xs uppercase tracking-wide " +
                      (s.statusTone === "shipping"
                        ? "text-bone/70"
                        : s.statusTone === "available"
                          ? "text-muted"
                          : "text-dim")
                    }
                  >
                    {STATUS_LABEL[s.statusTone]}
                  </span>
                </div>
                <p className="mt-4 text-base md:text-lg leading-relaxed text-muted">
                  {s.whatItIs}
                </p>
                <div className="mt-6 grid sm:grid-cols-2 gap-6">
                  <div>
                    <p className="eyebrow">What you get</p>
                    <p className="mt-2 text-base leading-relaxed text-muted">{s.whatYouGet}</p>
                  </div>
                  <div>
                    <p className="eyebrow">How it works</p>
                    <p className="mt-2 text-base leading-relaxed text-muted">{s.engagement}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-ink-900">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-20 md:py-24">
          <p className="eyebrow">Not sure where to start</p>
          <h2 className="mt-6 font-display text-2xl md:text-3xl text-bone max-w-2xl">
            The assessment and the advisory are the lowest-friction way in.
          </h2>
          <p className="mt-5 text-base md:text-lg leading-relaxed text-muted max-w-2xl">
            Both produce something useful — a written report, a real recommendation —
            before any hardware changes hands. That&apos;s deliberate. A consultancy is
            supposed to begin with judgement, not a purchase.
          </p>
          <div className="mt-10">
            <Link
              href="/contact/"
              className="inline-flex items-center rounded-full border border-bone/70 px-7 py-3 text-sm font-medium text-bone hover:bg-bone hover:text-ink transition-colors"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

// Route: /redoubt (Intrusion Containment — roadmap, Coming soon)
// STRICTEST honesty page: pure direction/intent, an explicit "in development,
// not available today, not a guarantee" line, and no security guarantees.
import type { Metadata } from "next";
import { TrackedCTALink } from "@/components/TrackedLink";
import { SITE } from "@/lib/site";
import JsonLd from "@/components/JsonLd";

// Per-product accent: steel / slate — guarded, deliberate, not alarmist red.
const ACCENT = "#4E6A83";
const ACCENT_HOVER = "#3F5A70";

export const metadata: Metadata = {
  title: "Redoubt: Intrusion Containment | VaultScaler",
  description:
    "Redoubt is in development: a governed agent intended to isolate a compromised instance inside your own environment, every action declared and audited. Not available today.",
  alternates: { canonical: `${SITE.url}/redoubt/` },
  keywords: [
    "intrusion containment",
    "breach containment",
    "incident response agent",
    "governed AI agent",
    "audited automation",
  ],
  openGraph: {
    title: "Redoubt: Intrusion Containment | VaultScaler",
    description:
      "In development: a governed agent intended to contain a breach inside your own environment. Not available today.",
    type: "website",
    url: `${SITE.url}/redoubt/`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Redoubt: Intrusion Containment | VaultScaler",
    description:
      "In development: a governed agent intended to contain a breach inside your own environment. Not available today.",
  },
};

// Restrained motif: a containment perimeter — concentric rings closing on a
// bounded core. Deliberate, not alarmist; no mascot.
function ContainmentRings() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" stroke={ACCENT} aria-hidden="true">
      <circle cx="100" cy="100" r="92" strokeWidth="1.5" strokeOpacity="0.3" strokeDasharray="2 8" />
      <circle cx="100" cy="100" r="68" strokeWidth="1.5" strokeOpacity="0.45" />
      <circle cx="100" cy="100" r="44" strokeWidth="1.5" strokeOpacity="0.65" />
      <rect x="78" y="78" width="44" height="44" rx="6" strokeWidth="1.5" fill={ACCENT} fillOpacity="0.12" />
      {/* corner brackets — a closing perimeter */}
      <path d="M30 14 H14 V30" strokeWidth="2" strokeOpacity="0.5" />
      <path d="M170 14 H186 V30" strokeWidth="2" strokeOpacity="0.5" />
      <path d="M30 186 H14 V170" strokeWidth="2" strokeOpacity="0.5" />
      <path d="M170 186 H186 V170" strokeWidth="2" strokeOpacity="0.5" />
    </svg>
  );
}

export default function RedoubtPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Redoubt", item: `${SITE.url}/redoubt/` },
    ],
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Redoubt",
    applicationCategory: "SecurityApplication",
    applicationSubCategory: "Intrusion Containment",
    operatingSystem: "Cloud",
    description:
      "Redoubt is an early-stage, in-development concept for a governed agent intended to isolate a compromised instance inside an organization's own environment, with every action declared in an Agent Passport and audited. It is not available today and no behavior is guaranteed.",
    author: { "@type": "Organization", name: "VaultScaler", url: `${SITE.url}/` },
    url: `${SITE.url}/redoubt/`,
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={softwareSchema} />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 85% 12%, rgba(78,106,131,0.12) 0%, transparent 55%)",
          }}
        />
        <div className="pointer-events-none absolute right-[-3rem] top-6 w-[280px] h-[280px] opacity-50 sm:opacity-70 min-[800px]:right-10 min-[800px]:top-16 min-[800px]:w-[360px] min-[800px]:h-[360px]">
          <ContainmentRings />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 lg:pt-20 pb-12 sm:pb-16 lg:pb-20">
          <div className="relative z-10 flex flex-col items-start max-w-xl">
            <span
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full"
              style={{ backgroundColor: "rgba(78,106,131,0.12)", color: ACCENT_HOVER }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: ACCENT }} />
              Coming soon
            </span>

            <h1
              className="mt-5 text-6xl sm:text-7xl lg:text-8xl leading-[1.02]"
              style={{ fontFamily: "var(--font-dm-serif), serif", color: ACCENT }}
            >
              Redoubt
            </h1>
            <p className="mt-2 text-xl sm:text-2xl text-[#1E3340] leading-snug">Intrusion Containment</p>
            <p className="mt-2 text-sm italic text-[#5A7A8A]">by VaultScaler</p>

            <p className="mt-6 text-lg sm:text-xl text-[#5A7A8A] leading-snug max-w-md [text-wrap:balance]">
              Contain a breach inside your own environment.
            </p>

            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <TrackedCTALink
                href="/waitlist/?product=redoubt"
                trackingName="Join the waitlist"
                trackingLocation="Redoubt Hero"
                className="inline-flex items-center justify-center rounded-full px-8 py-3.5 text-base font-semibold text-white transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                style={{ backgroundColor: ACCENT }}
              >
                Join the waitlist
              </TrackedCTALink>
              <TrackedCTALink
                href="/contact/"
                trackingName="Tell us about your use case"
                trackingLocation="Redoubt Hero"
                className="inline-flex items-center justify-center rounded-full border border-[#234D70]/30 px-8 py-3.5 text-base font-semibold text-[#234D70] transition-colors hover:bg-[#234D70]/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#234D70] focus-visible:ring-offset-2"
              >
                Tell us about your use case
              </TrackedCTALink>
            </div>
          </div>
        </div>
      </section>

      {/* PROMINENT status line — required, unmissable */}
      <section className="bg-[#1E3340]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div
            className="rounded-xl bg-white/[0.04] px-6 py-6 sm:px-8 sm:py-7"
            style={{ borderLeft: `4px solid ${ACCENT}` }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E8D5B5]/80">
              Status
            </p>
            <p className="mt-3 text-lg sm:text-xl text-white/90 leading-relaxed">
              Redoubt is in development and is not available today. We&rsquo;re describing where it&rsquo;s
              headed, not making a guarantee. If breach containment is a problem you have, we&rsquo;d like
              to talk.
            </p>
          </div>
        </div>
      </section>

      {/* §1 — Contain, don't sprawl — Parchment */}
      <section className="relative bg-[#F4F1EC] overflow-hidden">
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-[#1E3340]"
            style={{ fontFamily: "var(--font-dm-serif), serif" }}
          >
            Contain, don&rsquo;t sprawl
          </h2>
          <div className="mt-6 space-y-5 text-base font-light text-[#5A7A8A] leading-relaxed">
            <p>
              Redoubt is designed to isolate a compromised instance fast and cleanly, inside your own
              environment, the moment something looks wrong.
            </p>
            <p>
              The direction is to keep a single bad instance from becoming a spreading incident &mdash; a
              goal we&rsquo;re building toward, not a promise about outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* §2 — Bounded authority, fully audited — Cream */}
      <section className="relative bg-[#E8D5B5] overflow-hidden">
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-[#1E3340]"
            style={{ fontFamily: "var(--font-dm-serif), serif" }}
          >
            Bounded authority, fully audited
          </h2>
          <div className="mt-6 space-y-5 text-base font-light text-[#1E3340]/80 leading-relaxed">
            <p>
              Every action it could take is declared up front in its Agent Passport and logged &mdash;
              it&rsquo;s designed to act only within tightly declared limits.
            </p>
            <p>
              The intent is that an agent allowed to isolate part of your environment should be the most
              constrained, most inspectable thing you run.
            </p>
          </div>
        </div>
      </section>

      {/* §3 — Restated intent / CTA — Forge Dark */}
      <section className="relative bg-[#1E3340] overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl leading-[1.05] text-[#E8D5B5]"
            style={{ fontFamily: "var(--font-dm-serif), serif" }}
          >
            We&rsquo;re building toward this
          </h2>
          <p className="mt-6 text-base font-light text-white/80 leading-relaxed max-w-2xl mx-auto">
            Redoubt is a direction, not a product you can buy today. If containment is a problem you
            live with, the conversation helps us build the right thing.
          </p>
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <TrackedCTALink
              href="/waitlist/?product=redoubt"
              trackingName="Join the waitlist"
              trackingLocation="Redoubt Final CTA"
              className="inline-flex items-center justify-center rounded-full px-8 py-3.5 text-base font-semibold text-white transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1E3340]"
              style={{ backgroundColor: ACCENT }}
            >
              Join the waitlist
            </TrackedCTALink>
            <TrackedCTALink
              href="/contact/"
              trackingName="Tell us about your use case"
              trackingLocation="Redoubt Final CTA"
              className="inline-flex items-center justify-center rounded-full border border-[#E8D5B5]/40 px-8 py-3.5 text-base font-semibold text-[#E8D5B5] transition-colors hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8D5B5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1E3340]"
            >
              Tell us about your use case
            </TrackedCTALink>
          </div>
        </div>
      </section>
    </>
  );
}

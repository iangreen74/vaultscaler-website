// Route: /warden (DevSecOps — roadmap, Coming soon). Deliberately high-level:
// the product's specifics are not yet defined.
import type { Metadata } from "next";
import { TrackedCTALink } from "@/components/TrackedLink";
import { SITE } from "@/lib/site";
import JsonLd from "@/components/JsonLd";

// Per-product accent: deep blue / indigo.
const ACCENT = "#3B4DA6";
const ACCENT_HOVER = "#33429A";

export const metadata: Metadata = {
  title: "Warden: DevSecOps | VaultScaler",
  description:
    "Warden is in early development: a governed agent intended to enforce your security policy in your own pipeline, before code reaches production. Not yet available.",
  alternates: { canonical: `${SITE.url}/warden/` },
  keywords: [
    "DevSecOps",
    "policy enforcement",
    "CI/CD security",
    "shift-left security",
    "governed AI agent",
  ],
  openGraph: {
    title: "Warden: DevSecOps | VaultScaler",
    description:
      "Enforce your security policy as code ships. In early development — tell us about your pipeline.",
    type: "website",
    url: `${SITE.url}/warden/`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Warden: DevSecOps | VaultScaler",
    description:
      "Enforce your security policy as code ships. In early development — tell us about your pipeline.",
  },
};

// Restrained motif: a gate / checkpoint — work flows toward a bar that lets it
// through. No mascot.
function PolicyGate() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" stroke={ACCENT} aria-hidden="true">
      {/* flow approaching the gate */}
      <circle cx="22" cy="100" r="4" fill={ACCENT} stroke="none" fillOpacity="0.5" />
      <circle cx="44" cy="100" r="4" fill={ACCENT} stroke="none" fillOpacity="0.35" />
      <circle cx="66" cy="100" r="4" fill={ACCENT} stroke="none" fillOpacity="0.2" />
      {/* gate posts */}
      <line x1="96" y1="36" x2="96" y2="164" strokeWidth="2" strokeOpacity="0.55" />
      <line x1="150" y1="36" x2="150" y2="164" strokeWidth="2" strokeOpacity="0.55" />
      {/* lintel */}
      <line x1="88" y1="40" x2="158" y2="40" strokeWidth="2" strokeOpacity="0.55" />
      {/* checked panel */}
      <rect x="104" y="74" width="38" height="52" rx="5" strokeWidth="1.5" fill={ACCENT} fillOpacity="0.1" />
      <path d="M112 100 l7 7 14 -16" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function WardenPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Warden", item: `${SITE.url}/warden/` },
    ],
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Warden",
    applicationCategory: "SecurityApplication",
    applicationSubCategory: "DevSecOps",
    operatingSystem: "Cloud",
    description:
      "Warden is an early-development concept for a governed agent intended to enforce an organization's security policy within their own CI/CD pipeline, before code reaches production. Specifics are still being shaped; it is not yet available.",
    author: { "@type": "Organization", name: "VaultScaler", url: `${SITE.url}/` },
    url: `${SITE.url}/warden/`,
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
              "radial-gradient(circle at 85% 12%, rgba(59,77,166,0.10) 0%, transparent 55%)",
          }}
        />
        <div className="pointer-events-none absolute right-[-3rem] top-8 w-[280px] h-[280px] opacity-50 sm:opacity-70 min-[800px]:right-10 min-[800px]:top-16 min-[800px]:w-[360px] min-[800px]:h-[360px]">
          <PolicyGate />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 lg:pt-20 pb-14 sm:pb-20 lg:pb-28">
          <div className="relative z-10 flex flex-col items-start max-w-xl">
            <span
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full"
              style={{ backgroundColor: "rgba(59,77,166,0.12)", color: ACCENT_HOVER }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: ACCENT }} />
              Coming soon
            </span>

            <h1
              className="mt-5 text-6xl sm:text-7xl lg:text-8xl leading-[1.02]"
              style={{ fontFamily: "var(--font-dm-serif), serif", color: ACCENT }}
            >
              Warden
            </h1>
            <p className="mt-2 text-xl sm:text-2xl text-[#1E3340] leading-snug">DevSecOps</p>
            <p className="mt-2 text-sm italic text-[#5A7A8A]">by VaultScaler</p>

            <p className="mt-6 text-lg sm:text-xl text-[#5A7A8A] leading-snug max-w-md [text-wrap:balance]">
              Enforce your security policy as code ships.
            </p>

            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <TrackedCTALink
                href="/waitlist/?product=warden"
                trackingName="Join the waitlist"
                trackingLocation="Warden Hero"
                className="inline-flex items-center justify-center rounded-full px-8 py-3.5 text-base font-semibold text-white transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                style={{ backgroundColor: ACCENT }}
              >
                Join the waitlist
              </TrackedCTALink>
              <TrackedCTALink
                href="/contact/"
                trackingName="Tell us about your use case"
                trackingLocation="Warden Hero"
                className="inline-flex items-center justify-center rounded-full border border-[#234D70]/30 px-8 py-3.5 text-base font-semibold text-[#234D70] transition-colors hover:bg-[#234D70]/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#234D70] focus-visible:ring-offset-2"
              >
                Tell us about your use case
              </TrackedCTALink>
            </div>
          </div>
        </div>
      </section>

      {/* Honest status band */}
      <div className="border-y border-[#E0DCD6] bg-[#F4F1EC]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-sm text-[#5A7A8A] leading-relaxed">
          Warden is in early development. We&rsquo;re shaping it around real pipeline problems &mdash; tell
          us yours.
        </div>
      </div>

      {/* §1 — Policy at the gate — Parchment */}
      <section className="relative bg-[#F4F1EC] overflow-hidden">
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-[#1E3340]"
            style={{ fontFamily: "var(--font-dm-serif), serif" }}
          >
            Policy at the gate
          </h2>
          <div className="mt-6 space-y-5 text-base font-light text-[#5A7A8A] leading-relaxed">
            <p>
              The idea: catch what violates your policy before it reaches production, in your own
              pipeline.
            </p>
            <p>
              We&rsquo;re keeping this deliberately open while we learn where the real friction is &mdash;
              the specifics will be shaped by the pipelines we hear about.
            </p>
          </div>
        </div>
      </section>

      {/* §2 — Governed and auditable — Cream */}
      <section className="relative bg-[#E8D5B5] overflow-hidden">
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-[#1E3340]"
            style={{ fontFamily: "var(--font-dm-serif), serif" }}
          >
            Governed and auditable
          </h2>
          <div className="mt-6 space-y-5 text-base font-light text-[#1E3340]/80 leading-relaxed">
            <p>
              Like every VaultScaler agent, Warden is designed to ship with an Agent Passport &mdash; what
              it can touch and what it can do, declared up front and enforced against the permissions
              actually deployed.
            </p>
            <p>
              An agent that can gate a release should be inspectable and accountable for exactly that.
            </p>
          </div>
        </div>
      </section>

      {/* §3 — CTA — Forge Dark */}
      <section className="relative bg-[#1E3340] overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl leading-[1.05] text-[#E8D5B5]"
            style={{ fontFamily: "var(--font-dm-serif), serif" }}
          >
            Help us shape it
          </h2>
          <p className="mt-6 text-base font-light text-white/80 leading-relaxed max-w-2xl mx-auto">
            Warden is early. Tell us about your pipeline and the policy you need held, or join the
            waitlist to follow along.
          </p>
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <TrackedCTALink
              href="/waitlist/?product=warden"
              trackingName="Join the waitlist"
              trackingLocation="Warden Final CTA"
              className="inline-flex items-center justify-center rounded-full px-8 py-3.5 text-base font-semibold text-white transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1E3340]"
              style={{ backgroundColor: ACCENT }}
            >
              Join the waitlist
            </TrackedCTALink>
            <TrackedCTALink
              href="/contact/"
              trackingName="Tell us about your use case"
              trackingLocation="Warden Final CTA"
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

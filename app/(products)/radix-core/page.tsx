// Route: /radix-core (GPU Orchestration — roadmap, Coming soon)
import type { Metadata } from "next";
import { TrackedCTALink } from "@/components/TrackedLink";
import { SITE } from "@/lib/site";
import JsonLd from "@/components/JsonLd";

// Per-product accent: teal/green (derived from the pop-* mint tokens, deepened
// for legibility on light parchment). Forgewing's orange + winged mascot stay
// Forgewing's alone — Radix Core's signature is the packing-grid motif below.
const ACCENT = "#0F9488";
const ACCENT_HOVER = "#0C7A70";

export const metadata: Metadata = {
  title: "Radix Core: GPU Orchestration | VaultScaler",
  description:
    "Radix Core is designed to schedule and pack AI workloads across the GPU fleet you already own, inside your own environment. In development — join the waitlist.",
  alternates: { canonical: `${SITE.url}/radix-core/` },
  keywords: [
    "GPU orchestration",
    "GPU scheduling",
    "AI workload packing",
    "GPU fleet utilization",
    "governed AI agent",
  ],
  openGraph: {
    title: "Radix Core: GPU Orchestration | VaultScaler",
    description:
      "Get more from the GPU fleet you already own. In development — join the waitlist.",
    type: "website",
    url: `${SITE.url}/radix-core/`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Radix Core: GPU Orchestration | VaultScaler",
    description:
      "Get more from the GPU fleet you already own. In development — join the waitlist.",
  },
};

// Restrained motif: a packed lattice of cells — scheduling/packing, not a mascot.
function PackingGrid() {
  const cells = [
    { x: 0, y: 0, w: 2, h: 2, fill: true },
    { x: 2, y: 0, w: 2, h: 1, fill: false },
    { x: 2, y: 1, w: 1, h: 1, fill: true },
    { x: 3, y: 1, w: 1, h: 2, fill: false },
    { x: 0, y: 2, w: 1, h: 2, fill: false },
    { x: 1, y: 2, w: 2, h: 1, fill: true },
    { x: 1, y: 3, w: 2, h: 1, fill: false },
    { x: 3, y: 3, w: 1, h: 1, fill: true },
  ];
  const U = 28;
  const G = 6;
  return (
    <svg viewBox="0 0 124 124" className="w-full h-full" fill="none" stroke={ACCENT} aria-hidden="true">
      {cells.map((c, i) => (
        <rect
          key={i}
          x={c.x * U + G / 2}
          y={c.y * U + G / 2}
          width={c.w * U - G}
          height={c.h * U - G}
          rx={4}
          strokeWidth={1.5}
          fill={c.fill ? ACCENT : "transparent"}
          fillOpacity={c.fill ? 0.12 : 0}
        />
      ))}
    </svg>
  );
}

export default function RadixCorePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Radix Core", item: `${SITE.url}/radix-core/` },
    ],
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Radix Core",
    applicationCategory: "DeveloperApplication",
    applicationSubCategory: "GPU Orchestration",
    operatingSystem: "Cloud",
    description:
      "Radix Core is a governed agent in development, designed to schedule and pack AI workloads across an organization's existing GPU fleet, inside their own environment. Not yet available.",
    author: { "@type": "Organization", name: "VaultScaler", url: `${SITE.url}/` },
    url: `${SITE.url}/radix-core/`,
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
              "radial-gradient(circle at 85% 12%, rgba(15,148,136,0.10) 0%, transparent 55%)",
          }}
        />
        {/* Motif — right on desktop, behind on small screens */}
        <div className="pointer-events-none absolute right-[-2rem] top-10 w-[260px] h-[260px] opacity-50 sm:opacity-70 min-[800px]:right-12 min-[800px]:top-20 min-[800px]:w-[340px] min-[800px]:h-[340px]">
          <PackingGrid />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 lg:pt-20 pb-14 sm:pb-20 lg:pb-28">
          <div className="relative z-10 flex flex-col items-start max-w-xl">
            <span
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full"
              style={{ backgroundColor: "rgba(15,148,136,0.12)", color: ACCENT_HOVER }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: ACCENT }} />
              Coming soon
            </span>

            <h1
              className="mt-5 text-6xl sm:text-7xl lg:text-8xl leading-[1.02]"
              style={{ fontFamily: "var(--font-dm-serif), serif", color: ACCENT }}
            >
              Radix Core
            </h1>
            <p className="mt-2 text-xl sm:text-2xl text-[#1E3340] leading-snug">GPU Orchestration</p>
            <p className="mt-2 text-sm italic text-[#5A7A8A]">by VaultScaler</p>

            <p className="mt-6 text-lg sm:text-xl text-[#5A7A8A] leading-snug max-w-md [text-wrap:balance]">
              Get more from the GPU fleet you already own.
            </p>

            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <TrackedCTALink
                href="/waitlist/?product=radix-core"
                trackingName="Join the waitlist"
                trackingLocation="Radix Core Hero"
                className="inline-flex items-center justify-center rounded-full px-8 py-3.5 text-base font-semibold text-white transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                style={{ backgroundColor: ACCENT }}
              >
                Join the waitlist
              </TrackedCTALink>
              <TrackedCTALink
                href="/contact/"
                trackingName="Tell us about your use case"
                trackingLocation="Radix Core Hero"
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
          Radix Core is in development and not yet available. The sections below describe where it&rsquo;s
          headed, not a shipping product.
        </div>
      </div>

      {/* §1 — Use what you already have — Parchment */}
      <section className="relative bg-[#F4F1EC] overflow-hidden">
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-[#1E3340]"
            style={{ fontFamily: "var(--font-dm-serif), serif" }}
          >
            Use what you already have
          </h2>
          <div className="mt-6 space-y-5 text-base font-light text-[#5A7A8A] leading-relaxed">
            <p>
              Radix Core is designed to schedule and pack AI workloads across your existing GPU fleet,
              so more of your capacity does useful work &mdash; inside your own environment.
            </p>
            <p>
              The idea is to make headroom you&rsquo;ve already paid for available, rather than asking
              you to buy more.
            </p>
          </div>
        </div>
      </section>

      {/* §2 — No stack changes — Cream */}
      <section className="relative bg-[#E8D5B5] overflow-hidden">
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-[#1E3340]"
            style={{ fontFamily: "var(--font-dm-serif), serif" }}
          >
            No stack changes
          </h2>
          <div className="mt-6 space-y-5 text-base font-light text-[#1E3340]/80 leading-relaxed">
            <p>
              It&rsquo;s designed to run alongside what you already have rather than replace it &mdash; no
              migration, no re-platforming, no rewrite of how your workloads are defined.
            </p>
          </div>
          <div
            className="mt-12 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-12 sm:gap-y-3 text-3xl sm:text-4xl leading-tight"
            style={{ fontFamily: "var(--font-dm-serif), serif", color: ACCENT_HOVER }}
          >
            <span>Your fleet.</span>
            <span>Your environment.</span>
            <span>More throughput.</span>
          </div>
        </div>
      </section>

      {/* §3 — Governed, with an Agent Passport — Forge Dark */}
      <section className="relative bg-[#1E3340] overflow-hidden">
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-16">
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-[#E8D5B5]"
            style={{ fontFamily: "var(--font-dm-serif), serif" }}
          >
            Governed like every VaultScaler agent
          </h2>
          <div className="mt-10 space-y-5 text-base font-light text-white/85 leading-relaxed">
            <p>
              Radix Core is designed to ship with an Agent Passport that declares what it can touch and
              what it can do &mdash; scheduling and placement on your fleet, and nothing beyond it.
            </p>
            <p>
              That declaration is meant to be enforced against the permissions actually deployed, and
              verifiable against the live deployment.
            </p>
          </div>
        </div>
      </section>

      {/* §4 — CTA — Navy */}
      <section className="relative bg-[#234D70] overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl leading-[1.05] text-[#E8D5B5]"
            style={{ fontFamily: "var(--font-dm-serif), serif" }}
          >
            Be first to run it on your fleet
          </h2>
          <p className="mt-6 text-base font-light text-white/80 leading-relaxed max-w-2xl mx-auto">
            Join the waitlist to hear when Radix Core is ready, or tell us about the fleet you&rsquo;re
            trying to get more out of.
          </p>
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <TrackedCTALink
              href="/waitlist/?product=radix-core"
              trackingName="Join the waitlist"
              trackingLocation="Radix Core Final CTA"
              className="inline-flex items-center justify-center rounded-full px-8 py-3.5 text-base font-semibold text-white transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#234D70]"
              style={{ backgroundColor: ACCENT }}
            >
              Join the waitlist
            </TrackedCTALink>
            <TrackedCTALink
              href="/contact/"
              trackingName="Tell us about your use case"
              trackingLocation="Radix Core Final CTA"
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#234D70]"
            >
              Tell us about your use case
            </TrackedCTALink>
          </div>
        </div>
      </section>
    </>
  );
}

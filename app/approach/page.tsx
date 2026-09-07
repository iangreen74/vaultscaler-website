// Route: /approach — who Ian is and why the judgement is worth buying. Rewritten
// per the September 2026 Phase 2 repositioning brief: this page used to describe
// the systems-engagement method (survey/design/specify/build/install/care), which
// is now secondary and licence-gated work, not the site's second-most-visible page.
// The formation story (NZDF background) was the strongest asset already on the
// page and is expanded here rather than cut.
import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Approach | VaultScaler",
  description:
    "Nine years as an Electronic Warfare Specialist with the New Zealand Defence Force, then a decade building the cloud and SaaS infrastructure most confidential information now leaves through. Why Ian Green built VaultScaler around that judgement — and how systems work follows an assessment, never leads it.",
  alternates: { canonical: `${SITE.url}/approach/` },
  openGraph: {
    title: "Approach | VaultScaler",
    description:
      "Nine years finding out what a place gives away, then a decade building the systems most information now leaves through. VaultScaler is the first against the second.",
    url: `${SITE.url}/approach/`,
    type: "website",
    images: ["/og.jpg"],
  },
};

export default function Approach() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Approach — VaultScaler",
    url: `${SITE.url}/approach/`,
    description:
      "Why Ian Green built VaultScaler: nine years as an Electronic Warfare Specialist, then a decade building the infrastructure most confidential information now travels across.",
  };

  return (
    <>
      <JsonLd data={ld} />

      <section className="relative overflow-hidden border-b border-line">
        <div aria-hidden className="spotlight absolute inset-0" />
        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 pt-20 pb-16 md:pt-28 md:pb-20">
          <p className="eyebrow">Approach</p>
          <h1 className="mt-6 font-display font-light text-4xl md:text-6xl leading-[1.06] text-bone max-w-3xl tracking-tight">
            He learned this before he built it.
          </h1>
        </div>
      </section>

      {/* Formation */}
      <section>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 md:py-20">
          <h2 className="font-display text-2xl md:text-3xl text-bone max-w-2xl">
            Nine years finding out what a place gives away.
          </h2>
          <div className="mt-8 max-w-prose">
            <p className="text-base md:text-lg leading-relaxed text-muted">
              Ian Green spent nine years, 2012 to 2021, as an Electronic Warfare
              Specialist with the New Zealand Defence Force. Stripped to its
              essentials, that discipline is the business of finding out what a
              place is broadcasting about itself without meaning to — telling
              signal from noise, knowing what a system is actually reporting, and
              trusting only what can be verified.
            </p>
            <p className="mt-5 text-base md:text-lg leading-relaxed text-muted">
              Alongside it ran infrastructure work: identity and access management
              for secure data access, AWS-based systems built for secure
              communications, Terraform and version control to make that
              infrastructure reliable, and data analysis in Python applied to
              operational problems rather than hypothetical ones.
            </p>
          </div>
        </div>
      </section>

      {/* The bridge */}
      <section className="border-t border-line bg-ink-900">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 md:py-20">
          <h2 className="font-display text-2xl md:text-3xl text-bone max-w-2xl">
            Then a decade building the systems most information now leaves through.
          </h2>
          <p className="mt-8 max-w-prose text-base md:text-lg leading-relaxed text-muted">
            DevOps engineering in the private sector since 2022 — CI/CD, cloud
            infrastructure, Kubernetes. Cloud platforms, SaaS, connected devices.
            The infrastructure that the majority of confidential material now
            travels across, built from the inside.
          </p>
        </div>
      </section>

      {/* The argument */}
      <section className="border-t border-line">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 md:py-20">
          <h2 className="font-display text-2xl md:text-3xl text-bone max-w-2xl">
            VaultScaler is the first against the second.
          </h2>
          <div className="mt-8 max-w-prose">
            <p className="text-base md:text-lg leading-relaxed text-muted">
              The technologists who can build these systems rarely think
              adversarially about people. The consultants who think about people
              cannot build. The firms that do both are large, expensive, and do
              not serve twelve-attorney practices in Las Vegas.
            </p>
            <p className="mt-5 text-base md:text-lg leading-relaxed text-muted">
              What transfers is not hardware and not a story. It is the judgement —
              the habit of building a system that is genuinely self-contained
              rather than one that claims to be, and the instinct for what a
              building is giving away before anyone has thought to ask.
            </p>
          </div>
        </div>
      </section>

      {/* Where systems work fits */}
      <section className="border-t border-line bg-ink-900">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 md:py-20">
          <h2 className="font-display text-2xl md:text-3xl text-bone max-w-2xl">
            An architecture practice, not a shipment.
          </h2>
          <div className="mt-8 max-w-prose">
            <p className="text-base md:text-lg leading-relaxed text-muted">
              Where an assessment finds something that needs replacing, VaultScaler
              works on the architect&apos;s model: survey, design, specify,
              configure, and oversee. Licensed Nevada contractors carry out
              physical installation and invoice the client directly. VaultScaler
              does not sell, supply or install hardware.
            </p>
            <p className="mt-5 text-base md:text-lg leading-relaxed text-bone">
              Paid for judgement, not for materials.
            </p>
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="border-t border-line">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-20 md:py-28">
          <div className="max-w-prose">
            <p className="eyebrow">Proof</p>
            <h2 className="mt-6 font-display text-2xl md:text-3xl text-bone">
              Proven on the founder&apos;s own deployment.
            </h2>
            <p className="mt-5 text-base md:text-lg leading-relaxed text-muted">
              VaultScaler&apos;s systems run today in Ian&apos;s own building — the
              same architecture described across this site. Real-time computer
              vision, privacy applied before anything is written to disk,
              natural-language query over what the system has seen, answered with
              no network connection at all.
            </p>
            <p className="mt-5 text-base md:text-lg leading-relaxed text-muted">
              The system running today is Ian&apos;s own design and build, every
              line of it — in his own building, not a client&apos;s. There are no
              client deployments yet, and this page will not claim otherwise.
            </p>
            <p className="mt-5 text-base md:text-lg leading-relaxed text-muted">
              If you are a serious enquiry, don&apos;t take our word for any of it.
              Ask, and we will show you the real thing.
            </p>
          </div>
          <div className="mt-12">
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

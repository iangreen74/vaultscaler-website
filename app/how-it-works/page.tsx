// Route: /how-it-works — the assessment explainer: the three channels information
// leaves a building through, and what actually happens during an engagement.
// Rewritten per the September 2026 Phase 2 repositioning brief — this page used to
// describe camera capability exclusively; that content now lives as a secondary
// note inside the systems block on /services/.
import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "How it works | VaultScaler",
  description:
    "Information leaves a building three ways: through the machines that watch it, the software staff use, and the people who work there. An Exposure Assessment looks at all three. Here is what actually happens during one, from the pre-visit questionnaire to the written report.",
  alternates: { canonical: `${SITE.url}/how-it-works/` },
  openGraph: {
    title: "How it works | VaultScaler",
    description:
      "Machines, tools, and people — the three ways confidential information actually leaves a building, and what happens during an Exposure Assessment that looks at all three.",
    url: `${SITE.url}/how-it-works/`,
    type: "website",
    images: ["/og.jpg"],
  },
};

const WHAT_HAPPENS = [
  {
    title: "Before the visit.",
    body: "A short information request, most of which your office administrator can answer in twenty minutes. Answering it in advance means the time on site is spent on what only physical presence can find.",
  },
  {
    title: "On the day.",
    body: "A half-day walkthrough. Structured interviews with your office administrator, your IT provider, and any staff you nominate. Review of vendor terms and system configurations you make available. Anything critical and free to fix, we tell you before we leave.",
  },
  {
    title: "The report.",
    body: "Written findings, each rated, with a prioritised remediation list. Issued within six working days.",
  },
  {
    title: "The debrief.",
    body: "An hour, in person or by phone, walking through what was found.",
  },
];

export default function HowItWorks() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "How it works — VaultScaler",
    url: `${SITE.url}/how-it-works/`,
    description:
      "The three ways information leaves a building — machines, tools, and people — and what actually happens during an Exposure Assessment that looks at all three.",
  };

  return (
    <>
      <JsonLd data={ld} />

      <section className="relative overflow-hidden border-b border-line">
        <div aria-hidden className="spotlight absolute inset-0" />
        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 pt-20 pb-16 md:pt-28 md:pb-20">
          <p className="eyebrow">How it works</p>
          <h1 className="mt-6 font-display font-light text-4xl md:text-6xl leading-[1.06] text-bone max-w-3xl tracking-tight">
            Three ways information leaves a building.
          </h1>
          <p className="mt-7 text-lg md:text-xl leading-relaxed text-muted max-w-2xl">
            An Exposure Assessment looks at all three. Most assessments look at one.
          </p>
        </div>
      </section>

      {/* The three channels */}
      <section>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-8 md:py-12">
          <div className="py-9 border-t-0">
            <h2 className="font-display text-xl md:text-2xl text-bone">Machines</h2>
            <p className="mt-4 text-base md:text-lg leading-relaxed text-muted max-w-2xl">
              Cameras, microphones, access control, conferencing hardware, printers.
              Most are cloud-connected by default, streaming the inside of a building
              — often including audio — to a vendor&apos;s servers in another state,
              retained under that vendor&apos;s terms, reachable by people you have
              never met.
            </p>
            <p className="mt-4 text-base md:text-lg leading-relaxed text-muted max-w-2xl">
              We find every device that observes or records your premises, establish
              what it actually captures, and follow the output to wherever it ends up.
            </p>
          </div>

          <div className="py-9 border-t border-line">
            <h2 className="font-display text-xl md:text-2xl text-bone">Tools</h2>
            <p className="mt-4 text-base md:text-lg leading-relaxed text-muted max-w-2xl">
              AI services, SaaS platforms, third-party processors. Staff paste
              confidential material into consumer chat interfaces every day — on
              personal accounts, with no data processing agreement and no way to
              retrieve what was submitted. Most practices have no idea it is
              happening.
            </p>
            <p className="mt-4 text-base md:text-lg leading-relaxed text-muted max-w-2xl">
              We establish what is actually in use, what those services retain, and
              under whose terms.
            </p>
          </div>

          <div className="py-9 border-t border-line">
            <h2 className="font-display text-xl md:text-2xl text-bone">People</h2>
            <p className="mt-4 text-base md:text-lg leading-relaxed text-muted max-w-2xl">
              The channel every technical control ignores. Most breaches involve a
              person persuaded to do something rather than a system defeated — and
              voice cloning has moved that from a specialist capability to a
              consumer one.
            </p>
            <p className="mt-4 text-base md:text-lg leading-relaxed text-muted max-w-2xl">
              We look at who holds access, how access is granted and revoked, and
              what an outsider could learn about your firm from public sources
              alone.
            </p>
            <p className="mt-4 text-sm md:text-base leading-relaxed text-dim max-w-2xl italic">
              This is organisational, not personal. No individual is investigated,
              profiled, tested or surveilled.
            </p>
          </div>
        </div>
      </section>

      {/* The interaction */}
      <section className="border-t border-line bg-ink-900">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-20 md:py-24">
          <div className="max-w-prose">
            <h2 className="font-display text-2xl md:text-3xl text-bone">
              The exposure is usually in the interaction.
            </h2>
            <p className="mt-5 text-base md:text-lg leading-relaxed text-muted">
              Cybersecurity firms handle tools and stop at the building&apos;s edge.
              Physical security firms handle machines and ignore data. Neither
              examines how the two interact, and few examine people at all.
            </p>
            <p className="mt-5 text-base md:text-lg leading-relaxed text-muted">
              A camera is a machine problem until its audio reaches a vendor. A
              shared alarm code is a machine problem until the cleaning
              contractor&apos;s staff turnover makes it a people problem.
            </p>
          </div>
        </div>
      </section>

      {/* What actually happens */}
      <section className="border-t border-line">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-20 md:py-28">
          <h2 className="font-display text-2xl md:text-3xl text-bone max-w-2xl">
            What actually happens.
          </h2>
          <div className="mt-12">
            {WHAT_HAPPENS.map((s) => (
              <div
                key={s.title}
                className="grid md:grid-cols-[10rem_1fr] gap-x-8 gap-y-3 py-9 border-t border-line first:border-t-0"
              >
                <h3 className="font-display text-lg md:text-xl text-bone">{s.title}</h3>
                <p className="text-base md:text-lg leading-relaxed text-muted max-w-2xl">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-12 max-w-2xl font-display italic text-xl md:text-2xl text-bone">
            Most of what an assessment finds costs nothing to fix. We have no
            commercial interest in those items and recommend you do them regardless.
          </p>
          <div className="mt-10">
            <Link
              href="/services/"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-bone transition-colors"
            >
              What it costs
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

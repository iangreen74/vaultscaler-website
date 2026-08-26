// Route: /how-it-works — what the system sees, in plain terms.
import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "How it works | VaultScaler",
  description:
    "What a VaultScaler system sees: each object individually, removal within seconds, contact with a boundary, the people in the room, and a timestamped record — all on hardware you own, nothing leaving the building.",
  alternates: { canonical: `${SITE.url}/how-it-works/` },
  openGraph: {
    title: "How it works | VaultScaler",
    description:
      "Each object individually. Removal. Contact. People. A record you can actually use. Open hours and closed hours. On-premise, nothing leaving the building.",
    url: `${SITE.url}/how-it-works/`,
    type: "website",
    images: ["/og.jpg"],
  },
};

const SEES = [
  {
    title: "Every object, individually.",
    body: "Draw a boundary around whatever matters. The system learns what that space looks like with it in place.",
  },
  {
    title: "Removal.",
    body: "If something leaves its place, you know within seconds.",
  },
  {
    title: "Contact.",
    body: "If someone reaches into a zone you've marked off-limits, you know immediately.",
  },
  {
    title: "People.",
    body: "Recognise your staff and your regulars — and flag the people you don't know. Or run it fully anonymous, with every face obscured before it's ever stored. Your building, your rules, your call.",
  },
  {
    title: "A record you can actually use.",
    body: "Every event, timestamped, with an image. Who was where, when, and what they touched.",
  },
  {
    title: "Open hours and closed hours.",
    body: "The system knows the difference between a busy afternoon and an empty room at 3am, and behaves accordingly.",
  },
];

export default function HowItWorks() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "How it works — VaultScaler",
    url: `${SITE.url}/how-it-works/`,
    description:
      "What a VaultScaler system sees: each object individually, removal within seconds, contact, people, and a timestamped record — on-premise, nothing leaving the building.",
  };

  return (
    <>
      <JsonLd data={ld} />

      <section className="relative overflow-hidden border-b border-line">
        <div aria-hidden className="spotlight absolute inset-0" />
        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 pt-20 pb-16 md:pt-28 md:pb-20">
          <p className="eyebrow">How it works</p>
          <h1 className="mt-6 font-display font-light text-4xl md:text-6xl leading-[1.06] text-bone max-w-3xl tracking-tight">
            What it sees.
          </h1>
          <p className="mt-7 text-lg md:text-xl leading-relaxed text-muted max-w-2xl">
            One camera, watching a room, running on a box in your building. Here is what it is
            actually looking for — and nothing here ever leaves the premises.
          </p>
        </div>
      </section>

      <section>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-8 md:py-12">
          {SEES.map((s) => (
            <div
              key={s.title}
              className="grid md:grid-cols-[18rem_1fr] gap-x-12 gap-y-3 py-9 border-t border-line first:border-t-0"
            >
              <h2 className="font-display text-xl md:text-2xl text-bone">{s.title}</h2>
              <p className="text-base md:text-lg leading-relaxed text-muted max-w-2xl">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-ink-900">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-20 md:py-24">
          <div className="max-w-prose">
            <p className="eyebrow">And where it all lives</p>
            <h2 className="mt-6 font-display text-2xl md:text-3xl text-bone">
              On a box in your building. Nowhere else.
            </h2>
            <p className="mt-4 text-base md:text-lg leading-relaxed text-muted">
              The intelligence runs on hardware you own, in your building. There is no cloud,
              no account, nothing phoned home — so there is no server for anyone to subpoena,
              breach, or browse. You own the hardware, and you own the footage.
            </p>
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3">
            <Link
              href="/approach/"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-bone transition-colors"
            >
              How we work with you
              <span aria-hidden>→</span>
            </Link>
            <Link
              href="/services/#security-systems"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-bone transition-colors"
            >
              This is our Private Security Systems service
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

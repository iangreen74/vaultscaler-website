// Route: /approach — this is a consultancy, not a shipment.
import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Approach | VaultScaler",
  description:
    "VaultScaler is a consultancy, not a shipment. We walk your room, design for your building, build and train the computer vision on our own hardware, install and tune it in person, and leave it yours. Built by a gallery owner in the Las Vegas Arts District.",
  alternates: { canonical: `${SITE.url}/approach/` },
  openGraph: {
    title: "Approach | VaultScaler",
    description:
      "A consultancy, not a shipment. We come and look, design for your room, build it, install and tune it, and it's yours. Built by a gallery owner.",
    url: `${SITE.url}/approach/`,
    type: "website",
    images: ["/og.jpg"],
  },
};

const STEPS = [
  {
    n: "01",
    title: "We come and look.",
    body: "Every space is different — the light, the flow, the hang, what's actually at risk. We start by walking the room with you.",
  },
  {
    n: "02",
    title: "We design for your room.",
    body: "Not a package. A system specified for your building, your collection, and the way you actually work.",
  },
  {
    n: "03",
    title: "We build it.",
    body: "We build and train the computer vision ourselves, on our own hardware. The intelligence is ours, not licensed from a platform that can change its terms or cut us off.",
  },
  {
    n: "04",
    title: "We install and tune it.",
    body: "Installation is carried out by a licensed contractor. Then we stay until it's right — until the false alarms are gone and the system tells you only the things that matter.",
  },
  {
    n: "05",
    title: "It's yours.",
    body: "You own the hardware. You own the footage. There is no mandatory subscription, and if you never speak to us again, it keeps working.",
  },
];

const FOR = [
  "Commercial galleries",
  "Private collections",
  "Artist-run and independent spaces",
  "Small museums and institutions",
  "Anyone whose business depends on discretion",
];

export default function Approach() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Approach — VaultScaler",
    url: `${SITE.url}/approach/`,
    description:
      "A consultancy, not a shipment: walk the room, design for your building, build and train the vision on our own hardware, install and tune in person, and it's yours.",
  };

  return (
    <>
      <JsonLd data={ld} />

      <section className="relative overflow-hidden border-b border-line">
        <div aria-hidden className="spotlight absolute inset-0" />
        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 pt-20 pb-16 md:pt-28 md:pb-20">
          <p className="eyebrow">Approach</p>
          <h1 className="mt-6 font-display font-light text-4xl md:text-6xl leading-[1.06] text-bone max-w-3xl tracking-tight">
            A consultancy, not a shipment.
          </h1>
          <p className="mt-7 text-lg md:text-xl leading-relaxed text-muted max-w-2xl">
            We don&apos;t mail you a box. We design a system for your building, build the
            intelligence ourselves, and stay until it tells you only the things that matter.
          </p>
        </div>
      </section>

      {/* How we work */}
      <section>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-8 md:py-12">
          {STEPS.map((s) => (
            <div
              key={s.n}
              className="grid md:grid-cols-[6rem_1fr] gap-x-8 gap-y-3 py-9 border-t border-line first:border-t-0"
            >
              <div className="font-display text-3xl md:text-4xl text-dim">{s.n}</div>
              <div className="max-w-2xl">
                <h2 className="font-display text-xl md:text-2xl text-bone">{s.title}</h2>
                <p className="mt-4 text-base md:text-lg leading-relaxed text-muted">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Who it's for */}
      <section className="border-t border-line bg-ink-900">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-20 md:py-24">
          <p className="eyebrow">Who it&apos;s for</p>
          <ul className="mt-10 divide-y divide-line border-y border-line max-w-3xl">
            {FOR.map((f) => (
              <li key={f} className="py-5 font-display text-xl md:text-2xl text-bone">
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Where we are */}
      <section className="border-t border-line">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-20 md:py-28">
          <div className="max-w-prose">
            <p className="eyebrow">Where we are</p>
            <h2 className="mt-6 font-display text-2xl md:text-3xl text-bone">
              Built by a gallery owner.
            </h2>
            <p className="mt-5 text-base md:text-lg leading-relaxed text-muted">
              We&apos;re based in the Las Vegas Arts District, where we&apos;re opening our own
              exhibition space — the same system runs there. If you&apos;re nearby, don&apos;t take
              our word for any of this — come and see it.
            </p>
            <p className="mt-5 text-base md:text-lg leading-relaxed text-muted">
              We work internationally. The architecture is the same everywhere: local, owned,
              nothing leaving the building. What the system is permitted to do differs by
              jurisdiction, and we configure it to the law where you are.
            </p>
            <p className="mt-6 font-display text-xl md:text-2xl text-bone">
              The highest security available to you, within the legal framework you&apos;re in.
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

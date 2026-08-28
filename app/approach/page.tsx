// Route: /approach — the architecture-practice method: survey, design, specify, build
// and tune, licensed contractor installs, ongoing care if wanted. Professional method,
// not a limitation — architects don't apologize for not laying bricks.
import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Approach | VaultScaler",
  description:
    "VaultScaler is an architecture practice, not a shipment. We survey the site, design for your building, specify the hardware, build and tune the software ourselves, and hand physical installation to a licensed contractor. Proven on the founder's own deployment.",
  alternates: { canonical: `${SITE.url}/approach/` },
  openGraph: {
    title: "Approach | VaultScaler",
    description:
      "An architecture practice, not a shipment. We survey, design, specify, build and tune. A licensed contractor installs. Proven on the founder's own deployment.",
    url: `${SITE.url}/approach/`,
    type: "website",
    images: ["/og.jpg"],
  },
};

const STEPS = [
  {
    n: "01",
    title: "We survey the site.",
    body: "Every space is different — the light, the flow, the hang, what's actually at risk. We start by walking the room with you.",
  },
  {
    n: "02",
    title: "We design for your building.",
    body: "Not a package. A system conceived for your building, your material, and the way you actually work.",
  },
  {
    n: "03",
    title: "We specify it.",
    body: "The design becomes an exact specification — the hardware, the placement, the thresholds. This is the judgement a client is actually paying for, not the box.",
  },
  {
    n: "04",
    title: "We build and tune it.",
    body: "We build and train the computer vision ourselves, on our own hardware, and tune it before anything ships. The intelligence is ours, not licensed from a platform that can change its terms or cut us off.",
  },
  {
    n: "05",
    title: "A licensed contractor installs it.",
    body: "We specify exactly what goes in and where. Installation and physical work is carried out by a licensed contractor, and we're there to confirm it's right.",
  },
  {
    n: "06",
    title: "Ongoing care, if you want it.",
    body: "Retuning after a layout change, health monitoring, capability upgrades — delivered in person, because there's no other way in. Always optional, never a condition of purchase.",
  },
];

export default function Approach() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Approach — VaultScaler",
    url: `${SITE.url}/approach/`,
    description:
      "An architecture practice: survey, design, specify, build and tune, licensed contractor installs, ongoing care if wanted.",
  };

  return (
    <>
      <JsonLd data={ld} />

      <section className="relative overflow-hidden border-b border-line">
        <div aria-hidden className="spotlight absolute inset-0" />
        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 pt-20 pb-16 md:pt-28 md:pb-20">
          <p className="eyebrow">Approach</p>
          <h1 className="mt-6 font-display font-light text-4xl md:text-6xl leading-[1.06] text-bone max-w-3xl tracking-tight">
            An architecture practice, not a shipment.
          </h1>
          <p className="mt-7 text-lg md:text-xl leading-relaxed text-muted max-w-2xl">
            We don&apos;t mail you a box. We design a system for your building, build the
            intelligence ourselves, and stay until it tells you only the things that
            matter. Licensed contractors execute the physical work — the same way an
            architect designs a building and a contractor builds it.
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

      {/* It's yours */}
      <section className="border-t border-line bg-ink-900">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 md:py-20">
          <div className="max-w-prose">
            <p className="eyebrow">And then it&apos;s yours</p>
            <p className="mt-5 text-base md:text-lg leading-relaxed text-muted">
              You own the hardware. You own what it records. There is no mandatory
              subscription, and if you never speak to us again, it keeps working.
            </p>
          </div>
        </div>
      </section>

      {/* Formation */}
      <section className="border-t border-line">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-20 md:py-28">
          <p className="eyebrow">Formation</p>
          <h2 className="mt-6 font-display text-2xl md:text-3xl text-bone max-w-2xl">
            He learned this before he built it.
          </h2>
          <div className="mt-10 max-w-prose">
            <p className="text-base md:text-lg leading-relaxed text-muted">
              Ian Green spent nine years, 2012 to 2021, as an Electronic
              Warfare Specialist with the New Zealand Defence Force. The
              discipline is about telling signal from noise — knowing what a
              system is actually reporting, and trusting only what can be
              verified. Alongside it ran infrastructure work: identity and
              access management for secure data access, AWS-based systems
              built for secure communications, Terraform and version control
              introduced to make that infrastructure reliable, and data
              analysis — Python, Pandas, NumPy, TensorFlow — applied to real
              operational problems, not hypothetical ones.
            </p>
            <p className="mt-5 text-base md:text-lg leading-relaxed text-muted">
              After that, DevOps engineering in the private sector — CI/CD,
              cloud infrastructure, Kubernetes, at Vontier since 2022. Then
              computer vision and edge AI, and VaultScaler.
            </p>
            <p className="mt-5 text-base md:text-lg leading-relaxed text-muted">
              None of it transfers as hardware, and none of it transfers as a
              story. What transfers is the judgement — the habit of building
              a system that is actually self-contained, not one that merely
              claims to be. The system VaultScaler installs in a client&apos;s
              building is Ian&apos;s own design and build, every line of it.
            </p>
            <p className="mt-6 font-display italic text-xl md:text-2xl text-bone">
              Most people building private systems learned it from a
              whitepaper. This one learned it where the consequences were
              real.
            </p>
          </div>
        </div>
      </section>

      {/* Where we are */}
      <section className="border-t border-line bg-ink-900">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-20 md:py-28">
          <div className="max-w-prose">
            <p className="eyebrow">Where we are</p>
            <h2 className="mt-6 font-display text-2xl md:text-3xl text-bone">
              Proven on the founder&apos;s own deployment.
            </h2>
            <p className="mt-5 text-base md:text-lg leading-relaxed text-muted">
              We&apos;re based in Las Vegas, where the founder&apos;s own building runs
              the same system described on this page. It isn&apos;t open to the public,
              but if you&apos;re a serious enquiry, don&apos;t take our word for any of
              this — ask and we&apos;ll show you the real thing.
            </p>
            <p className="mt-5 text-base md:text-lg leading-relaxed text-muted">
              The architecture is the same everywhere: local, owned, nothing leaving the
              building. The system is available internationally; what it&apos;s
              permitted to do differs by jurisdiction, and we configure it to the law
              where you are.{" "}
              <Link
                href="/why-local/"
                className="text-bone underline decoration-line underline-offset-4 hover:decoration-bone transition-colors"
              >
                Why local
              </Link>{" "}
              covers the guarantee behind that in full.
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

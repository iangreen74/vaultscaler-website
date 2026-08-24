// Route: / — VaultScaler homepage. Edge computer-vision security for art.
import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "VaultScaler — private, on-premise computer-vision security",
  description:
    "Private, on-premise computer-vision security — proven first on a working artist's own collection, built for private collections, galleries, museums, and other discreet spaces. It watches the whole space and you decide what it remembers — recognise your people or obscure every face. Nothing it sees ever leaves your building. Nothing is attached to what it protects.",
  alternates: { canonical: SITE.url },
};

const PROBLEMS = [
  {
    n: "01",
    lead: "Your footage lives on someone else's server.",
    body: "Cloud camera systems put your space, the people who trust you, and what happens inside your walls on infrastructure you don't control — viewable by staff you've never met, reachable by anyone who breaches it. For anyone whose business depends on discretion, that's not a feature. It's the risk.",
  },
  {
    n: "02",
    lead: "The alarms cry wolf, so they get switched off.",
    body: "Conventional motion and object sensors can't tell the difference between someone pausing to look and something actually being taken. The false alarms are constant — so most systems get quietly disconnected. A system nobody trusts is a system nobody uses.",
  },
  {
    n: "03",
    lead: "Sometimes the hardware touches the thing itself.",
    body: "In a gallery, that's tags glued behind canvases, laser curtains across the wall, contacts and vibration sensors on the frame — it works, but it touches the piece, constrains how it's shown, and announces itself to every visitor. The same problem shows up anywhere something valuable can't be wired without the wiring diminishing it.",
  },
];

export default function Home() {
  const pageLD = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "VaultScaler — private, on-premise computer-vision security",
    url: `${SITE.url}/`,
    description: SITE.description,
    isPartOf: { "@type": "WebSite", name: "VaultScaler", url: SITE.url },
  };

  return (
    <>
      <JsonLd data={pageLD} />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="spotlight absolute inset-0" />
        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 pt-24 pb-24 md:pt-36 md:pb-32">
          <p className="eyebrow">Private, on-premise AI security</p>
          <h1 className="mt-7 font-display font-light text-[2.75rem] leading-[1.05] sm:text-6xl md:text-7xl text-bone max-w-4xl tracking-tight">
            It watches everything in your building.
            <br />
            And nothing ever leaves it.
          </h1>
          <p className="mt-8 text-lg md:text-xl leading-relaxed text-muted max-w-2xl">
            VaultScaler was built first to protect a working artist&apos;s own collection —
            now it protects private collections, galleries, museums, and any space where
            discretion is the whole point. It watches the whole space — and you decide
            what it remembers. Recognise your people and flag the ones you don&apos;t, or
            obscure every face before anything is stored. Either way, nothing it sees ever
            leaves your building. There&apos;s no cloud, and no server for anyone to breach
            — because there isn&apos;t one.
          </p>
          <div className="mt-11 flex flex-wrap items-center gap-5">
            <Link
              href="/contact/"
              className="inline-flex items-center rounded-full border border-bone/70 px-6 py-3 text-sm font-medium text-bone hover:bg-bone hover:text-ink transition-colors"
            >
              Talk to us
            </Link>
            <Link
              href="/how-it-works/"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-bone transition-colors"
            >
              How it works
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* The three problems */}
      <section className="border-t border-line">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-20 md:py-28">
          <h2 className="font-display text-2xl md:text-3xl text-bone max-w-2xl">
            Discreet security has been solved badly, in three specific ways.
          </h2>
          <div className="mt-14 md:mt-20">
            {PROBLEMS.map((p) => (
              <div
                key={p.n}
                className="grid md:grid-cols-[6rem_1fr] gap-x-8 gap-y-3 py-10 border-t border-line first:border-t-0"
              >
                <div className="font-display text-3xl md:text-4xl text-dim">{p.n}</div>
                <div className="max-w-2xl">
                  <h3 className="font-display text-xl md:text-2xl text-bone">{p.lead}</h3>
                  <p className="mt-4 text-base md:text-lg leading-relaxed text-muted">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we do about it */}
      <section className="border-t border-line bg-ink-900">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-20 md:py-28">
          <p className="eyebrow">What we do about it</p>
          <div className="mt-14 grid md:grid-cols-2 gap-x-16 gap-y-14">
            <div className="max-w-prose">
              <h3 className="font-display text-2xl md:text-3xl text-bone">Nothing leaves the building.</h3>
              <p className="mt-4 text-base md:text-lg leading-relaxed text-muted">
                The intelligence runs on a box in your building. There is no cloud, no account,
                no vendor portal, nothing phoned home. Not as a policy — as an architecture.
                There is no server for anyone to subpoena, breach, or browse, because there isn&apos;t
                a server.
              </p>
            </div>
            <div className="max-w-prose">
              <h3 className="font-display text-2xl md:text-3xl text-bone">It knows the difference.</h3>
              <p className="mt-4 text-base md:text-lg leading-relaxed text-muted">
                Our system understands a person standing in front of a painting and a painting
                that is no longer there. Someone admiring the work does not trigger an alarm.{" "}
                <span className="text-alert">Someone removing it does.</span> That distinction is
                the hardest problem in this field, and it&apos;s the one we built for first.
              </p>
            </div>
            <div className="max-w-prose">
              <h3 className="font-display text-2xl md:text-3xl text-bone">Nothing touches the artwork.</h3>
              <p className="mt-4 text-base md:text-lg leading-relaxed text-muted">
                The camera watches. The work hangs as the artist intended — unwired, untagged,
                unconstrained. Rehang the room whenever you like; tell us and we&apos;ll re-teach
                the system in minutes.
              </p>
            </div>
            <div className="max-w-prose">
              <h3 className="font-display text-2xl md:text-3xl text-bone">Fewer guards, better cover.</h3>
              <p className="mt-4 text-base md:text-lg leading-relaxed text-muted">
                The system doesn&apos;t blink, doesn&apos;t take breaks, and watches every piece
                at once. It won&apos;t replace your people — but it means you need fewer of them,
                and the ones you have know exactly where to go.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proof of concept — the founder's own studio */}
      <section className="border-t border-line">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-20 md:py-28">
          <p className="eyebrow">The first deployment</p>
          <div className="mt-7 grid md:grid-cols-2 gap-x-16 gap-y-10 items-start">
            <h2 className="font-display font-light text-3xl md:text-5xl leading-[1.08] text-bone max-w-xl">
              The first room it watches is the founder&apos;s own studio.
            </h2>
            <div className="max-w-prose">
              <p className="text-base md:text-lg leading-relaxed text-muted">
                VaultScaler&apos;s first live deployment protects{" "}
                <a
                  href="https://iangreen.io"
                  rel="noopener"
                  className="text-bone underline decoration-line underline-offset-4 hover:decoration-bone transition-colors"
                >
                  Ian Green&apos;s
                </a>{" "}
                own paintings, in his own studio. Artwork zones drawn around each piece,
                breach and absence detection, privacy modes for the people in the room —
                running now, on the same system described on this page. Nothing it sees
                leaves the building. Nothing is attached to the art.
              </p>
              <p className="mt-5 text-base md:text-lg leading-relaxed text-muted">
                Every art-security company says it was built by people who understand
                galleries. This one was built by an artist protecting his own work — the
                same hands that hung the paintings secured them. That is a proof no
                competitor can copy.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
                <a
                  href="https://metonymicdebris.com"
                  rel="noopener"
                  className="inline-flex items-center gap-2 text-muted hover:text-bone transition-colors"
                >
                  The paintings <span aria-hidden>→</span>
                </a>
                <a
                  href="https://iangreen.io"
                  rel="noopener"
                  className="inline-flex items-center gap-2 text-muted hover:text-bone transition-colors"
                >
                  The founder <span aria-hidden>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="border-t border-line">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-24 md:py-32 text-center">
          <h2 className="font-display font-light text-3xl md:text-5xl text-bone">
            Have something worth protecting?
          </h2>
          <p className="mt-5 text-lg text-muted max-w-xl mx-auto">
            Tell us about your space and what&apos;s on the walls.
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

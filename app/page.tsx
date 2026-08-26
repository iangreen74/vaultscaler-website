// Route: / — VaultScaler homepage. A private AI consultancy; security is the first
// application, not the definition.
import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { SITE, SERVICES } from "@/lib/site";

export const metadata: Metadata = {
  title: "VaultScaler — a private AI consultancy",
  description:
    "VaultScaler designs private AI systems for people who cannot afford to send their data anywhere. Security is the first application — real-time computer vision, on-premise — and not the only one: a written security assessment and vendor-independent AI advisory are deliverable today, no installation required.",
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

const WHO_ITS_FOR = [
  {
    title: "Professional confidentiality.",
    body: "Attorneys, physicians, family offices, and anyone whose obligation to protect client material is a professional one, not just a preference. You don't need to be persuaded that privacy matters — you need to see that it's achievable.",
  },
  {
    title: "Private wealth.",
    body: "People whose visibility, resources, or public profile make ordinary security an active liability rather than an inconvenience.",
  },
  {
    title: "Collections and cultural property.",
    body: "Private collectors, galleries, museums, and anyone holding objects with loan obligations or value that can't be replaced.",
  },
  {
    title: "Discreet commercial spaces.",
    body: "Private clubs, member venues, and businesses whose clientele expect anonymity as a matter of course.",
  },
];

export default function Home() {
  const pageLD = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "VaultScaler — a private AI consultancy",
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
          <p className="eyebrow">Private AI consultancy</p>
          <h1 className="mt-7 font-display font-light text-[2.75rem] leading-[1.05] sm:text-6xl md:text-7xl text-bone max-w-4xl tracking-tight">
            It watches everything in your building.
            <br />
            And nothing ever leaves it.
          </h1>
          <p className="mt-8 text-lg md:text-xl leading-relaxed text-muted max-w-2xl">
            VaultScaler designs private AI systems for people who cannot afford to send
            their data anywhere. Security is the first thing we built — real-time
            computer vision that runs entirely on hardware you own, in your building, with
            nothing sent to any outside company. It is not the only thing we do.
          </p>
          <div className="mt-11 flex flex-wrap items-center gap-5">
            <Link
              href="/contact/"
              className="inline-flex items-center rounded-full border border-bone/70 px-6 py-3 text-sm font-medium text-bone hover:bg-bone hover:text-ink transition-colors"
            >
              Talk to us
            </Link>
            <Link
              href="/services/"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-bone transition-colors"
            >
              What we do
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why now */}
      <section className="border-t border-line bg-ink-900">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-20 md:py-28">
          <p className="eyebrow">Why now</p>
          <div className="mt-7 grid md:grid-cols-2 gap-x-16 gap-y-10 items-start">
            <h2 className="font-display font-light text-3xl md:text-5xl leading-[1.08] text-bone max-w-xl">
              Private AI stopped being a compromise.
            </h2>
            <div className="max-w-prose">
              <p className="text-base md:text-lg leading-relaxed text-muted">
                Two things changed. Capable models now run on hardware the size of a
                book — real-time computer vision, natural-language answers about what it
                saw, no data center required. And AI collapsed the cost of building
                something bespoke: what used to take a team, one engineer can now do for
                a single building.
              </p>
              <p className="mt-5 text-base md:text-lg leading-relaxed text-muted">
                For the right client, a private system is no longer the weaker option.
                It's the better one — the only one whose guarantees are architectural,
                not contractual.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service lines */}
      <section className="border-t border-line">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-20 md:py-28">
          <p className="eyebrow">What we do</p>
          <h2 className="mt-6 font-display text-2xl md:text-3xl text-bone max-w-2xl">
            Four ways to engage us — most of them need no installed system at all.
          </h2>
          <div className="mt-14 grid md:grid-cols-2 gap-x-10 gap-y-10">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/services/#${s.slug}`}
                className="group block border border-line rounded-2xl p-7 md:p-8 bg-ink-900 hover:border-bone/40 transition-colors"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-display text-2xl text-dim">{s.n}</span>
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
                    {s.statusTone === "build" ? "Bespoke build" : s.statusTone === "shipping" ? "Shipping" : "Available now"}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-xl md:text-2xl text-bone group-hover:text-bone">
                  {s.name}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted">{s.summary}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm text-muted group-hover:text-bone transition-colors">
                  Read more <span aria-hidden>→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* The three problems (behind the security line) */}
      <section className="border-t border-line bg-ink-900">
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
      <section className="border-t border-line">
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
      <section className="border-t border-line bg-ink-900">
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
                breach and absence detection, privacy modes, natural-language query over
                what the system has seen — running now, on the same system described on
                this page. Nothing it sees leaves the building. Nothing is attached to the
                art.
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

      {/* Who it's for */}
      <section className="border-t border-line">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-20 md:py-28">
          <p className="eyebrow">Who it&apos;s for</p>
          <h2 className="mt-6 font-display text-2xl md:text-3xl text-bone max-w-2xl">
            The buyer isn&apos;t a category. It&apos;s a reason for discretion.
          </h2>
          <div className="mt-14 grid md:grid-cols-2 gap-x-16 gap-y-14">
            {WHO_ITS_FOR.map((w) => (
              <div key={w.title} className="max-w-prose">
                <h3 className="font-display text-xl md:text-2xl text-bone">{w.title}</h3>
                <p className="mt-4 text-base md:text-lg leading-relaxed text-muted">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why local — teaser */}
      <section className="border-t border-line bg-ink-900">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-20 md:py-28 text-center">
          <p className="font-display font-light text-2xl md:text-4xl leading-[1.2] text-bone max-w-3xl mx-auto">
            Their privacy is a policy. Ours is an architecture.
          </p>
          <p className="mt-6 text-base md:text-lg text-muted max-w-xl mx-auto">
            No uplink, no vendor account, no remote access — not even for us. If someone
            wants what your system saw, they have to come to you.
          </p>
          <div className="mt-9">
            <Link
              href="/why-local/"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-bone transition-colors"
            >
              Why local
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="border-t border-line">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-24 md:py-32 text-center">
          <h2 className="font-display font-light text-3xl md:text-5xl text-bone">
            Have something worth keeping private?
          </h2>
          <p className="mt-5 text-lg text-muted max-w-xl mx-auto">
            Tell us about your space, your material, or what you need to keep confidential.
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

// Route: / (VaultScaler homepage — capability-led measurement platform positioning)
import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/site';
import JsonLd from '@/components/JsonLd';

const TITLE = 'Vivaliux by VaultScaler | Private, local AI that measures, remembers, and predicts living systems.';
const DESC =
  'Vivaliux is VaultScaler’s private, local-first AI measurement app: it measures what is in front of it with a camera and edge compute, remembers every reading in an immutable local record, and tells you what changed — and how sure it is. Studio Habitat is our live public proof.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE.url}/` },
  keywords: SITE.keywords,
  openGraph: {
    title: TITLE,
    description: DESC,
    type: 'website',
    url: `${SITE.url}/`,
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'Vivaliux by VaultScaler — private, local AI for measuring living systems' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESC,
    images: ['/og.jpg'],
  },
};

const capabilities = [
  {
    k: 'Measure',
    h: 'Measure, locally.',
    b: 'A fixed camera and on-device vision turn a scene into engineering-grade measurements — surface coverage, image quality, scene stability — computed on the edge. No cloud round-trip; no images need to leave the room.',
  },
  {
    k: 'Remember',
    h: 'Remember, immutably.',
    b: 'Every measurement is appended to a local, tamper-evident record with its timestamp, confidence, and quality flags. Nothing is overwritten and nothing is lost — the history itself is the asset.',
  },
  {
    k: 'Catch change',
    h: 'Catch real change.',
    b: 'The system separates a real movement in the measurement from a lighting or framing artifact, and says which it is in plain measurement language. “The proxy dropped, and the drop is real” is the product — a verdict you can trust, not a guess.',
  },
];

const trust = [
  {
    h: 'Uncertainty is first-class',
    b: 'Every reading carries its own confidence and quality flags. When the instrument is unsure, it says so — “we don’t know yet” is a valid, honest answer.',
  },
  {
    h: 'Honest by construction',
    b: 'We speak in measurement language. A change in what the camera measures is never quietly sold as a change in the organism. No overclaiming, ever.',
  },
  {
    h: 'Private by design',
    b: 'Capture, measurement, and memory run on hardware you control. Nothing is sent anywhere unless you choose to. Privacy is the architecture, not a setting.',
  },
  {
    h: 'The record is yours',
    b: 'An append-only local history you own outright — portable, auditable, and never held hostage in someone else’s cloud.',
  },
];

const markets = [
  { h: 'Research labs', b: 'Repeatable, evidence-grade observation of living systems — with uncertainty carried alongside every reading.' },
  { h: 'Vineyards', b: 'Fixed-camera measurement of canopy and scene over a season, on hardware in the field.' },
  { h: 'Indoor & vertical farms', b: 'Continuous local measurement of controlled grows, with change separated from imaging artifact.' },
  { h: 'Other controlled & living systems', b: 'If it can be observed by a fixed camera and benefits from an honest, private record, it fits.' },
];

const steps = [
  { n: '1', h: 'Point a camera', b: 'A fixed camera frames the system you want to watch — no special rig, no calibration ritual.' },
  { n: '2', h: 'Measure on the edge', b: 'On-device vision computes engineering-grade metrics locally, each with a confidence band.' },
  { n: '3', h: 'Remember every reading', b: 'Measurements append to an immutable local record — timestamped, flagged, and yours.' },
  { n: '4', h: 'See what changed', b: 'The system reports real movement vs. imaging artifact, in honest measurement language.' },
];

export default function Home() {
  const webSiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'VaultScaler',
    url: `${SITE.url}/`,
    description: SITE.description,
  };

  return (
    <>
      <JsonLd data={webSiteSchema} />

      {/* Hero */}
      <section className="relative min-h-[clamp(520px,62vh,820px)] flex items-center bg-gradient-to-br from-primary-4 via-primary-3 to-primary-3 overflow-hidden pt-12 pb-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/4 -right-1/4 w-[60%] h-[60%] rounded-full bg-primary-2/20 blur-3xl" />
          <div className="absolute -bottom-1/4 -left-1/4 w-[50%] h-[50%] rounded-full bg-primary-1/10 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <p className="text-pop-light text-sm font-semibold uppercase tracking-wide mb-4">
              Vivaliux · the local-first desktop app from VaultScaler
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
              Private, local AI that measures, remembers, and predicts living systems.
            </h1>

            <p className="text-lg md:text-xl text-primary-1 max-w-2xl leading-relaxed mb-10">
              Vivaliux turns a camera and a small edge computer into an instrument: it measures
              what&rsquo;s in front of it, remembers every reading, and tells you what changed — and how
              sure it is. Foresight comes later, and only once the record has earned it.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact/"
                className="inline-block px-8 py-4 bg-white text-primary-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-2xl hover:scale-105 transform focus:outline-none focus:ring-4 focus:ring-white/50 text-center"
              >
                Request a pilot
              </Link>
              <Link
                href="#platform"
                className="inline-block px-8 py-4 border-2 border-white/40 text-white rounded-full font-semibold text-lg hover:bg-white/10 hover:border-white/60 transition-all focus:outline-none focus:ring-4 focus:ring-white/30 text-center"
              >
                See how it works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Honesty hook */}
      <section className="bg-primary-4 py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg sm:text-xl text-primary-1 leading-relaxed">
            <span className="text-white font-semibold">We&rsquo;d rather say &ldquo;we don&rsquo;t know yet&rdquo; than guess.</span>{' '}
            Every reading carries its own uncertainty, and a change in the measurement is never quietly
            sold as a change in the organism. The honesty is the product.
          </p>
        </div>
      </section>

      {/* Capabilities — Measure / Remember / Catch change */}
      <section id="platform" className="scroll-mt-20 py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-primary-3 text-sm font-semibold uppercase tracking-wide mb-3">
            The Vivaliux app
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900 leading-tight max-w-3xl">
            Measure. Remember. Catch real change.
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mb-12">
            Vivaliux is one local-first app that does three honest things well — and refuses to
            pretend it does more.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {capabilities.map((c) => (
              <div
                key={c.k}
                className="flex flex-col bg-white rounded-2xl p-8 shadow-sm border-2 border-gray-200 hover:border-primary-3 hover:shadow-lg transition-all"
              >
                <span className="inline-flex w-fit items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-pop-light/20 text-primary-4 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-pop-dark" />
                  {c.k}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{c.h}</h3>
                <p className="text-gray-600 leading-relaxed">{c.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why it's different — trust blocks */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-primary-3 max-w-3xl">
            Why it&rsquo;s different
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mb-12">
            Most &ldquo;AI for living systems&rdquo; overclaims and ships your data to a server. VaultScaler does
            neither.
          </p>
          <div className="grid sm:grid-cols-2 gap-8">
            {trust.map((t) => (
              <div key={t.h} className="flex gap-4">
                <svg className="w-6 h-6 text-pop-dark mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{t.h}</h3>
                  <p className="text-gray-600 leading-relaxed">{t.b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Markets */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-primary-3 text-sm font-semibold uppercase tracking-wide mb-3">
            Who it&rsquo;s for
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-gray-900 leading-tight max-w-3xl">
            Built for people who measure living and controlled systems.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {markets.map((m) => (
              <div key={m.h} className="rounded-2xl p-6 bg-gray-50 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{m.h}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{m.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="scroll-mt-20 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-primary-3 max-w-3xl">
            How it works
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.n} className="flex flex-col">
                <div className="w-10 h-10 rounded-full bg-primary-3 text-white font-bold flex items-center justify-center mb-4">
                  {s.n}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{s.h}</h3>
                <p className="text-gray-600 leading-relaxed">{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Foresight is earned — prediction framing */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-primary-3 text-sm font-semibold uppercase tracking-wide mb-3">
            Prediction
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900 leading-tight">
            Foresight is earned, not promised.
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Prediction is on the roadmap, not the headline. A forecast is only trustworthy once the
            local record is long and clean enough to support it — so Vivaliux measures and remembers
            first, and earns foresight from <span className="font-semibold text-gray-900">your own history</span> rather than
            borrowing it from someone else&rsquo;s. We will not put a present-tense prediction on the page
            before the evidence is there to back it.
          </p>
        </div>
      </section>

      {/* Private by design */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-primary-3">
            Private by design
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Local-first by default. Capture, measurement, and the memory of every reading run on
            hardware you control. No images or readings are sent anywhere unless you explicitly choose
            to. Privacy isn&rsquo;t a checkbox bolted on at the end — it&rsquo;s the shape of the system.
          </p>
        </div>
      </section>

      {/* Studio Habitat — demoted to live public proof */}
      <section id="studio-habitat" className="scroll-mt-20 py-20 bg-primary-4">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-pop-light text-sm font-semibold uppercase tracking-wide mb-3">
            Live public proof
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white leading-tight">
            See it running: Studio Habitat.
          </h2>
          <p className="text-lg text-primary-1 leading-relaxed max-w-3xl mb-8">
            Studio Habitat is our live, public proof — an AI-assisted phenotyping lab that measures a
            real living system around the clock and shows its work: surface coverage, image quality,
            anomaly surprise, and evidence validity, each with its own uncertainty. It isn&rsquo;t a
            separate product; it&rsquo;s Vivaliux&rsquo;s claims, held to account in public.
          </p>
          <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-3 max-w-3xl">
            {[
              'Local-first observation, camera + edge compute',
              'Every reading carries its uncertainty',
              'Separates real change from measurement artifact',
              'No overclaiming — observation treated as evidence',
            ].map((point) => (
              <li key={point} className="flex items-start gap-3 text-primary-1">
                <svg className="w-5 h-5 text-pop-light mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-16 bg-primary-3">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Working with a living or controlled system?</h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Tell us what you need to measure. We&rsquo;ll show you what private, local-first,
            evidence-grade measurement can do for it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact/"
              className="inline-block px-8 py-4 bg-white text-primary-3 rounded-full font-bold hover:bg-gray-100 transition-all text-lg shadow-lg hover:scale-105 transform"
            >
              Request a pilot
            </Link>
            <Link
              href="/contact/"
              className="inline-block px-8 py-4 border-2 border-white/40 text-white rounded-full font-semibold text-lg hover:bg-white/10 hover:border-white/60 transition-all text-center"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

// Route: / (VaultScaler homepage — freemium ladder: Free / Plus / Edge + Consultancy)
import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/site';
import JsonLd from '@/components/JsonLd';

const TITLE = 'Vivaliux by VaultScaler | Private, local AI that measures, remembers, and predicts living systems.';
const DESC =
  'Vivaliux is VaultScaler’s private, local-first AI measurement app: it measures what it can honestly see with a camera and edge compute, remembers every reading in an immutable local record, and tells you what really changed — and how sure it is. Free to start; a paid model that learns your plants; and an on-site edge unit installed by us.';

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

// The free app does four honest things — and refuses to pretend it does more.
const freeCapabilities = [
  {
    k: 'Measure',
    h: 'Measure, locally.',
    b: 'A camera and on-device vision turn a scene into engineering-grade measurements — surface coverage, image quality, scene stability — computed on your machine. No cloud round-trip; no images need to leave the room.',
  },
  {
    k: 'Remember',
    h: 'Track change over time.',
    b: 'Every reading is appended to a local, tamper-evident record. Watch how coverage fills in across days and weeks, with an honest rate of change — and see the history build into something the rest of the product can earn from.',
  },
  {
    k: 'Uniformity',
    h: 'See if it’s even.',
    b: 'Not one number for the whole frame — Vivaliux shows you where coverage is dense and where it’s sparse, so you can see whether your canopy is filling in evenly or in patches.',
  },
  {
    k: 'Catch change',
    h: 'Catch real change.',
    b: 'The instrument separates a real movement in the measurement from a lighting or framing artifact, and says which, in plain language. “The reading dropped, and the drop is real” is the product — a verdict you can trust, not a guess.',
  },
];

const steps = [
  { n: '1', h: 'Point a camera', b: 'A fixed camera frames the system you want to watch — no special rig, no calibration ritual.' },
  { n: '2', h: 'Measure on your machine', b: 'On-device vision computes engineering-grade metrics locally, each with a confidence band.' },
  { n: '3', h: 'Remember every reading', b: 'Measurements append to an immutable local record — timestamped, flagged, and yours.' },
  { n: '4', h: 'See what changed', b: 'The instrument reports real movement vs. imaging artifact, in honest measurement language.' },
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

// Three-column comparison. A cell is rendered as a check for '✓', a dash for
// '—', or as plain text otherwise (e.g. where it runs).
const pricingRows: { feature: string; cells: [string, string, string] }[] = [
  { feature: 'Honest measurement, local', cells: ['✓', '✓', '✓'] },
  { feature: 'Change over time + uniformity', cells: ['✓', '✓', '✓'] },
  { feature: 'Catch real change + coaching', cells: ['✓', '✓', '✓'] },
  { feature: 'Model trained on your plants', cells: ['—', '✓', '✓'] },
  { feature: 'On-site edge ML + consulting', cells: ['—', '—', '✓'] },
  { feature: 'Toward earned prediction', cells: ['—', '—', '✓ the destination'] },
  { feature: 'Where it runs', cells: ['your computer', 'your computer', 'on-site unit, by us'] },
];

function PricingCell({ value }: { value: string }) {
  if (value === '✓') {
    return (
      <svg className="w-5 h-5 text-pop-dark mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-label="Included">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    );
  }
  if (value === '—') {
    return <span className="text-gray-300" aria-label="Not included">—</span>;
  }
  if (value.startsWith('✓')) {
    return (
      <span className="inline-flex items-center gap-1.5 text-primary-3 font-semibold text-sm">
        <svg className="w-4 h-4 text-pop-dark flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        {value.slice(1).trim()}
      </span>
    );
  }
  return <span className="text-sm text-gray-700">{value}</span>;
}

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
              Vivaliux · private, local AI from VaultScaler
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
              Private, local AI that measures, remembers, and predicts living systems.
            </h1>

            <p className="text-lg md:text-xl text-primary-1 max-w-2xl leading-relaxed mb-10">
              Vivaliux turns a camera into a measuring instrument: it measures what it can honestly
              see, remembers every reading, and tells you what really changed — and how sure it is.
              Foresight comes later, and only once the record has earned it. It runs on your own
              machine. Nothing leaves it.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/waitlist/?product=free"
                className="inline-block px-8 py-4 bg-white text-primary-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-2xl hover:scale-105 transform focus:outline-none focus:ring-4 focus:ring-white/50 text-center"
              >
                Try it free
              </Link>
              <Link
                href="/contact/"
                className="inline-block px-8 py-4 border-2 border-white/40 text-white rounded-full font-semibold text-lg hover:bg-white/10 hover:border-white/60 transition-all focus:outline-none focus:ring-4 focus:ring-white/30 text-center"
              >
                Request a pilot
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The yield line — connective narrative band, held carefully inside the bright line */}
      <section className="bg-primary-4 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xl sm:text-2xl text-white font-semibold leading-snug mb-4">
            Every good growing decision starts with a measurement you can trust.
          </p>
          <p className="text-lg text-primary-1 leading-relaxed">
            Most tools hand you a confident number and hope you don&rsquo;t ask how sure it is.
            Vivaliux does the opposite: it measures rigorously, tells you when <em>not</em> to trust a
            reading, and coaches you to better data. Better information is the foundation under every
            yield decision you make — so we start there, and we get deeper at it over time, with you.
          </p>
        </div>
      </section>

      {/* The free app — an honest instrument, free */}
      <section id="platform" className="scroll-mt-20 py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-primary-3 text-sm font-semibold uppercase tracking-wide mb-3">
            Vivaliux Free
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900 leading-tight max-w-3xl">
            An honest instrument, free.
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mb-12">
            Vivaliux Free does four honest things well, and refuses to pretend it does more. Free,
            local, no account, nothing uploaded.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {freeCapabilities.map((c) => (
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

          {/* And it coaches you to better data */}
          <div className="mt-8 rounded-2xl border-2 border-pop-light/40 bg-pop-light/10 p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">And it coaches you to better data.</h3>
            <p className="text-gray-700 leading-relaxed max-w-3xl">
              When the signal is weak, it tells you the concrete fix — add light, refocus, reduce
              glare — and confirms plainly when your setup is good. Most measurement problems are
              setup problems; Vivaliux is the rare instrument that critiques its own input.
            </p>
          </div>

          <div className="mt-10">
            <Link
              href="/waitlist/?product=free"
              className="inline-block px-8 py-4 bg-primary-3 text-white rounded-full font-bold text-lg hover:bg-primary-4 transition-all shadow-lg hover:scale-105 transform text-center"
            >
              Download Vivaliux Free
            </Link>
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

      {/* The paid tier — a model that learns your plants */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-2">
              <p className="text-primary-3 text-sm font-semibold uppercase tracking-wide mb-3">
                Vivaliux Plus <span className="text-gray-400 normal-case font-medium">· paid</span>
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                A model that learns your plants.
              </h2>
            </div>
            <div className="lg:col-span-3">
              <p className="text-lg text-gray-700 leading-relaxed mb-5">
                The free app measures every plant with the same honest, universal rules.{' '}
                <span className="font-semibold text-gray-900">Plus</span> trains a small model on{' '}
                <em>your</em> record — learning the visual patterns specific to your plants, your
                room, your lights — so the measurement gets sharper at your operation specifically. It
                runs on a normal computer (no special hardware), and like everything in Vivaliux, it
                stays on your machine.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                You pay for the model to learn <em>your</em> plants. The honest instrument stays free.
              </p>
              <Link
                href="#pricing"
                className="inline-block px-7 py-3.5 border-2 border-primary-3 text-primary-3 rounded-full font-semibold text-lg hover:bg-primary-3 hover:text-white transition-all text-center"
              >
                See Plus
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The consultancy / edge tier — the deep end, installed by us */}
      <section className="py-20 bg-primary-4">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-2">
              <p className="text-pop-light text-sm font-semibold uppercase tracking-wide mb-3">
                Vivaliux Edge + Consultancy <span className="text-primary-2 normal-case font-medium">· by arrangement</span>
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                The deep end, installed by us.
              </h2>
            </div>
            <div className="lg:col-span-3">
              <p className="text-lg text-primary-1 leading-relaxed mb-5">
                For operations that want to go further: a dedicated, always-on edge unit — installed
                and tuned on-site — running heavier machine learning on the imagery itself, on
                hardware built for it. This is where the record you&rsquo;ve built earns its way toward
                genuine foresight: deeper insight over time, and the honest, earned path toward
                prediction. On your premises, private, maintained by us.
              </p>
              <p className="text-lg text-white font-semibold leading-relaxed mb-8">
                This isn&rsquo;t a product you download. It&rsquo;s a partnership — we come to you.
              </p>
              <Link
                href="/contact/"
                className="inline-block px-7 py-3.5 bg-white text-primary-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg hover:scale-105 transform text-center"
              >
                Request a pilot
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why it's different */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-primary-3 max-w-3xl">
            Why it&rsquo;s different
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mb-12">
            Most &ldquo;AI for living systems&rdquo; overclaims and ships your data to a server. VaultScaler does
            neither. We measure honestly, we keep your data on your machine, and we earn the right to
            say more — we don&rsquo;t assume it. The honesty is the product.
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

      {/* Pricing */}
      <section id="pricing" className="scroll-mt-20 py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-gray-900">Pricing</h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mb-10">
            One honest instrument, free. Pay when you want the model to learn your plants — or bring
            us in for the deep end.
          </p>
          <div className="overflow-x-auto rounded-2xl border-2 border-gray-200">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <caption className="sr-only">Vivaliux tier comparison: Free, Plus, and Edge plus Consultancy</caption>
              <thead>
                <tr className="border-b-2 border-gray-200 bg-gray-50">
                  <th scope="col" className="py-5 px-6 text-sm font-semibold text-gray-500 uppercase tracking-wide">
                    <span className="sr-only">Capability</span>
                  </th>
                  <th scope="col" className="py-5 px-6 text-center text-lg font-bold text-gray-900">Free</th>
                  <th scope="col" className="py-5 px-6 text-center text-lg font-bold text-primary-3">Plus</th>
                  <th scope="col" className="py-5 px-6 text-center text-lg font-bold text-gray-900">Edge + Consultancy</th>
                </tr>
              </thead>
              <tbody>
                {pricingRows.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 1 ? 'bg-gray-50/60' : 'bg-white'}>
                    <th scope="row" className="py-4 px-6 text-sm font-medium text-gray-900">{row.feature}</th>
                    {row.cells.map((cell, j) => (
                      <td key={j} className="py-4 px-6 text-center">
                        <PricingCell value={cell} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/waitlist/?product=free"
              className="inline-block px-8 py-4 bg-primary-3 text-white rounded-full font-bold text-lg hover:bg-primary-4 transition-all shadow-lg hover:scale-105 transform text-center"
            >
              Try it free
            </Link>
            <Link
              href="/contact/"
              className="inline-block px-8 py-4 border-2 border-primary-3 text-primary-3 rounded-full font-semibold text-lg hover:bg-primary-3 hover:text-white transition-all text-center"
            >
              Request a pilot
            </Link>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-16 bg-primary-3">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Working with a living or controlled system?</h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Start free on your own machine, or tell us what you need to measure and we&rsquo;ll show you
            what private, local-first, evidence-grade measurement can do for it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/waitlist/?product=free"
              className="inline-block px-8 py-4 bg-white text-primary-3 rounded-full font-bold hover:bg-gray-100 transition-all text-lg shadow-lg hover:scale-105 transform"
            >
              Try it free
            </Link>
            <Link
              href="/contact/"
              className="inline-block px-8 py-4 border-2 border-white/40 text-white rounded-full font-semibold text-lg hover:bg-white/10 hover:border-white/60 transition-all text-center"
            >
              Request a pilot
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

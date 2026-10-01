// Route: / — VaultScaler, the company behind thoughtfully designed software. Takes is the
// featured (and so far only) product. No consultancy offers; no claims beyond what has shipped.
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import JsonLd from "@/components/JsonLd";
import { SITE, TAKES } from "@/lib/site";

export const metadata: Metadata = {
  title: "VaultScaler — thoughtfully designed software",
  description: SITE.description,
  alternates: { canonical: SITE.url },
  openGraph: { title: "VaultScaler — thoughtfully designed software", description: SITE.description, url: SITE.url, type: "website", images: ["/takes/writing.jpg"] },
  twitter: { card: "summary_large_image", title: "VaultScaler — thoughtfully designed software", description: SITE.description, images: ["/takes/writing.jpg"] },
};

const PRINCIPLES = [
  { lead: "Made with care.", body: "Small, finished pieces of software that do one thing properly, with nothing added to fill a feature list." },
  { lead: "Your work stays yours.", body: "What you make lives on your own computer, in files you can open without us. Nothing is sent anywhere it doesn’t need to go." },
  { lead: "Honest about limits.", body: "We say what a product does, what it doesn’t, and where it can go wrong — before you rely on it." },
];

export default function Home() {
  const webLD = { "@context": "https://schema.org", "@type": "WebSite", name: SITE.name, url: `${SITE.url}/` };
  return (
    <>
      <JsonLd data={webLD} />
      <section className="spotlight">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-20 md:pt-28 pb-16">
          <p className="eyebrow">VaultScaler · {SITE.location}</p>
          <h1 className="mt-6 font-display font-light text-[2.5rem] md:text-[4rem] leading-[1.05] text-bone max-w-4xl">
            Thoughtfully designed software.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
            VaultScaler makes a small number of carefully made tools. The first is Takes, a writing workspace built around speaking.
          </p>
        </div>
      </section>

      <section aria-labelledby="takes" className="max-w-6xl mx-auto px-5 sm:px-8 pb-20">
        <div className="rounded-2xl bg-paper text-paper-ink font-takes overflow-hidden">
          <div className="grid md:grid-cols-[1fr_1.35fr] gap-0">
            <div className="p-8 md:p-12 flex flex-col">
              <p className="text-[14px] tracking-[0.18em] uppercase text-paper-soft">Takes</p>
              <h2 id="takes" className="mt-4 text-[2rem] md:text-[2.4rem] leading-[1.12] font-normal">{TAKES.headline}</h2>
              <p className="mt-5 text-[1.15rem] leading-relaxed text-paper-soft">
                Speak a thought and keep it as a take — the words and the recording. Arrange your takes into a manuscript, and return
                to your work where you left it. Transcription happens on your Mac.
              </p>
              <p className="mt-5 text-[1rem] italic text-paper-soft">{TAKES.previewStatus}</p>
              <p className="mt-8">
                <Link href="/takes/" className="inline-block rounded-full border border-paper-ink px-5 py-2 text-[1.05rem] text-paper-ink hover:bg-paper-ink hover:text-paper transition-colors">
                  About Takes →
                </Link>
              </p>
            </div>
            <div className="md:pt-10 md:pl-0 px-6 pb-6 md:pb-0">
              <Image
                src="/takes/writing.jpg"
                alt="The Takes window: spoken takes on the left, the manuscript being arranged on the right."
                width={1600}
                height={974}
                className="w-full h-auto rounded-t-lg md:rounded-tr-none md:rounded-tl-lg border border-paper-rule"
                sizes="(min-width: 768px) 60vw, 100vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="how" className="border-t border-line">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-20">
          <h2 id="how" className="eyebrow">How we work</h2>
          <div className="mt-8 grid gap-10 md:grid-cols-3">
            {PRINCIPLES.map((p) => (
              <div key={p.lead}>
                <h3 className="font-display text-2xl text-bone">{p.lead}</h3>
                <p className="mt-3 text-muted leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-14 text-muted">
            Questions or ideas: <a href={`mailto:${SITE.email}`} className="text-bone underline underline-offset-4 hover:text-muted">{SITE.email}</a>
          </p>
        </div>
      </section>
    </>
  );
}

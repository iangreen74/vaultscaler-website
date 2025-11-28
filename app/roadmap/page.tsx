import JsonLd from "@/components/JsonLd";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "Roadmap",
  description:
    "Radix Core launch timeline: November 15, 2025. Zero egress, read-only observer, freemium launch. Radix+ coming 2026.",
  alternates: { canonical: `${SITE.url}/roadmap` },
  robots: "noindex, nofollow",
};

export default function Page() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Roadmap",
    url: `${SITE.url}/roadmap`,
    numberOfItems: 3,
  };

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Roadmap</h1>
      <p className="mt-2 text-gray-600">
        We're pre-launch now. Target launch: <strong>November 15, 2025</strong>.
      </p>

      <section className="mt-6 space-y-6">
        <div className="rounded-2xl border p-6">
          <h2 className="text-xl font-medium">Now → GA</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-700">
            <li>Freemium offline dashboard polishing</li>
            <li>SBOMs, image signing, provenance</li>
            <li>Docs: quickstart, operator notes, security posture</li>
          </ul>
        </div>

        <div className="rounded-2xl border p-6">
          <h2 className="text-xl font-medium">+30–60 days</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-700">
            <li>Radix+ engine alpha (license-gated)</li>
            <li>Explainability &amp; signed PDF reports</li>
            <li>Guarded enforcement with canary % controls</li>
          </ul>
        </div>

        <div className="rounded-2xl border p-6">
          <h2 className="text-xl font-medium">+60–120 days</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-700">
            <li>Policy packs &amp; expanded dashboards</li>
            <li>Automation templates for audits</li>
            <li>Enterprise pilots (air-gapped first)</li>
          </ul>
        </div>
      </section>

      <JsonLd data={ld} />
    </main>
  );
}

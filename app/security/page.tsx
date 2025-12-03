// Route: /security
import JsonLd from "@/components/JsonLd";
import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "Security and Trust",
  description:
    "Radix Trust Pack: air-gapped bundles, signed artifacts, SLSA provenance. Performance results backed by academic-grade statistical validation.",
  alternates: { canonical: `${SITE.url}/security` },
  keywords: [...SITE.keywords, "RBAC", "NetworkPolicy", "SBOM", "SLSA", "air-gapped", "trust pack"],
};

export default function Page() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Security and Trust",
    about: ["Security", "Trust Pack", "Air-gapped support", "Statistical validation"],
    url: `${SITE.url}/security`,
    author: { "@type": "Organization", name: "VaultScaler" },
  };

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      {/* Security Section */}
      <section className="mb-20">
        <h1 className="text-4xl font-bold tracking-tight mb-8">Security</h1>
        
        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          VaultScaler products are designed first for secure, on-premise, and hybrid environments. <strong>Radix Core</strong> can run air-gapped with zero egress, and <strong>Radix Studio</strong> brings enterprise-grade security to multi-tenant SaaS inference operations. We built the Radix Trust Pack because we know that <strong>62% of AI infrastructure runs on-premise</strong> for compliance, cost, and data sovereignty reasons.
        </p>

        <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6">Radix Trust Pack (Radix Core)</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="space-y-3 text-gray-800">
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">✓</span>
                <span><strong>Harbor/Artifactory air-gap bundles</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">✓</span>
                <span><strong>Helm charts with pinned digests</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">✓</span>
                <span><strong>Non-root container images</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">✓</span>
                <span><strong>Signed Artifacts</strong> with cryptographically signed images</span>
              </li>
            </ul>
            <ul className="space-y-3 text-gray-800">
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">✓</span>
                <span><strong>Read-only filesystems</strong> configurable</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">✓</span>
                <span><strong>CycloneDX/SPDX</strong> bill of materials for transparency</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">✓</span>
                <span><strong>SLSA Level 3 Provenance</strong> Tracking</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">✓</span>
                <span><strong>Network policies</strong> for zero-egress mode</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Proof Trust Section */}
      <section className="mb-20">
        <h2 className="text-4xl font-bold mb-8">Proof Trust</h2>
        
        <div className="bg-gray-50 border-2 border-gray-300 rounded-2xl p-8">
          <p className="text-xl text-gray-800 mb-6 leading-relaxed">
            Radix performance results are backed by academic-grade statistical validation. Radix uses two-hash deterministic seeding to ensure reproducible results across runs with statistical rigor. We validate every report generation to ensure you have accurate performance data.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <Link
          href="/get-radix"
          className="inline-block px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors text-lg"
        >
          Get Radix Core
        </Link>
        <p className="mt-4 text-gray-600">Deploy securely with guardrails you choose</p>
      </section>

      <JsonLd data={ld} />
    </main>
  );
}

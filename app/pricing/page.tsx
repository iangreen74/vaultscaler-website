import JsonLd from "@/components/JsonLd";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "Get Radix",
  description:
    "Get up to 21% more throughput from your training GPUs. Start 14-day trial of Radix Core. Low impact install. Secure. Immediate insight.",
  alternates: { canonical: `${SITE.url}/pricing` },
};

export default function Page() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: SITE.product,
    brand: { "@type": "Brand", name: "VaultScaler" },
    url: `${SITE.url}/pricing`,
    offers: [
      { "@type": "Offer", name: "Radix Core Trial", price: "0", priceCurrency: "USD" },
      {
        "@type": "Offer",
        name: "Radix Studio",
        price: "TBD",
        priceCurrency: "USD",
        availabilityStarts: SITE.launchISO,
      },
    ],
  };

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight mb-12 text-center">Get Radix</h1>

      {/* Radix Core */}
      <section className="mb-16">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 rounded-2xl p-10">
          <h2 className="text-3xl font-bold mb-4">Radix Core</h2>
          <p className="text-xl text-gray-800 mb-6 leading-relaxed">
            Gain up to <strong>21% more throughput</strong> from your training GPUs. Low impact install. Secure. Immediate insight.
          </p>
          
          <div className="bg-white rounded-xl p-6 mb-6">
            <p className="text-lg font-semibold text-gray-900 mb-4">
              Run in trial mode for up to 14 days.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Download Radix Core
                </button>
                <span className="text-gray-600">Get the Helm chart</span>
              </div>
              
              <div className="border-t pt-4">
                <p className="text-sm text-gray-600 mb-3">Get your license key:</p>
                <div className="flex items-center gap-4">
                  <input 
                    type="email" 
                    placeholder="your@email.com"
                    className="flex-1 px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                  />
                  <button className="px-6 py-2 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                    Unlock Radix
                  </button>
                </div>
              </div>
            </div>
          </div>

          <ul className="space-y-2 text-gray-800">
            <li className="flex items-start">
              <span className="text-blue-600 mr-3">✓</span>
              <span>14-day full-featured trial</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3">✓</span>
              <span>Zero code changes required</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3">✓</span>
              <span>Works with Kubernetes, Slurm, and Ray</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3">✓</span>
              <span>Air-gapped or API-enabled deployment</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3">✓</span>
              <span>Shadow mode available for zero-risk proof</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Radix Studio */}
      <section>
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-300 rounded-2xl p-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-3xl font-bold">Radix Studio</h2>
            <span className="px-4 py-2 bg-yellow-400 text-yellow-900 rounded-full font-semibold text-sm">Coming Soon</span>
          </div>
          
          <p className="text-lg text-gray-700 mb-6">
            <strong>Multi-Tenant SaaS Control Plane for LLM Operations</strong>
          </p>

          <ul className="space-y-3 text-gray-800 mb-8">
            <li className="flex items-start">
              <span className="text-gray-600 mr-3">•</span>
              <span><strong>Pipeline orchestration:</strong> Build reusable multi-step AI workflows (LLM calls, RAG, tools)</span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-600 mr-3">•</span>
              <span><strong>Multi-model registry:</strong> Register HTTP endpoints, container workloads, and external clusters</span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-600 mr-3">•</span>
              <span><strong>Bring Your Own GPU:</strong> Connect your own compute via secure Docker agent</span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-600 mr-3">•</span>
              <span><strong>Governance &amp; audit:</strong> Per-tenant isolation, policy enforcement, comprehensive audit logs</span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-600 mr-3">•</span>
              <span><strong>Cost control:</strong> Rate limits, usage caps, and predictable per-execution pricing tiers</span>
            </li>
          </ul>

          <p className="text-sm text-gray-600 mb-6">
            <strong>Note:</strong> Radix Studio is a multi-tenant SaaS platform focused on inference and LLM operations. For GPU training optimization, use Radix Core.
          </p>

          <a
            className="inline-block px-8 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            href={`mailto:${SITE.email}?subject=Radix%20Studio%20Early%20Access`}
          >
            Join Radix Studio Early Access
          </a>
        </div>
      </section>

      <JsonLd data={ld} />
    </main>
  );
}

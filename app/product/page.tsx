// Route: /product
import JsonLd from "@/components/JsonLd";
import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata = {
  title: `Radix Platform — ${SITE.product}`,
  description:
    "The Radix Platform optimizes training and inference. Radix Core delivers 21.4% GPU training throughput improvement. Radix Studio provides LLM orchestration, governance, and cost control.",
  alternates: { canonical: `${SITE.url}/product` },
  keywords: SITE.keywords,
};

export default function Page() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE.product,
    applicationCategory: "DevOps/Monitoring",
    operatingSystem: "Kubernetes 1.26+",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    author: { "@type": "Organization", name: "VaultScaler" },
    url: `${SITE.url}/product`,
    description: metadata.description,
    releaseNotes: "Pre-launch; GA target November 15, 2025.",
  };

  return (
    <>
      {/* Platform Overview - Hero */}
      <section className="relative py-20 bg-gradient-to-br from-vs-blue-7 via-vs-blue-6 to-vs-blue-5 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/4 -right-1/4 w-[60%] h-[60%] rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute -bottom-1/4 -left-1/4 w-[50%] h-[50%] rounded-full bg-vs-blue-4/20 blur-3xl" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-center text-white">The Radix Platform</h1>
          <p className="text-xl text-stone-cream-2 text-center max-w-4xl mx-auto mb-12 leading-relaxed">
            VaultScaler's Radix Platform delivers complete AI operations across the lifecycle. <strong className="text-accent">Radix Core</strong> optimizes GPU training workloads. <strong className="text-accent">Radix Studio</strong> provides a governed control plane for LLM and inference operations, with pipelines, multi-model routing, and cost guardrails.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border-2 border-stone-cream-3 rounded-2xl p-8 text-center shadow-xl">
              <h2 className="text-2xl font-bold mb-2 text-vs-blue-6">Radix Core</h2>
              <p className="text-lg text-stone-cream-6 mb-4">Training Optimization</p>
            </div>
            <div className="bg-white border-2 border-stone-cream-3 rounded-2xl p-8 text-center shadow-xl">
              <h2 className="text-2xl font-bold mb-2 text-vs-blue-6">Radix Studio</h2>
              <p className="text-lg text-stone-cream-6 mb-4">Inference Operations</p>
            </div>
          </div>
        </div>
      </section>

      {/* How Radix Works - Light teal */}
      <section className="py-20 bg-vs-blue-1/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-vs-blue-6">How Radix Works</h2>
          <div className="bg-white border-2 border-stone-cream-3 rounded-2xl p-8 shadow-lg mb-8">
            <ol className="space-y-4 text-lg text-stone-cream-6">
              <li className="flex items-start">
                <span className="font-bold text-accent mr-3 text-xl">1.</span>
                <span>Install the Helm chart</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-accent mr-3 text-xl">2.</span>
                <span>Choose zero egress or API mode</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-accent mr-3 text-xl">3.</span>
                <span>Port-forward the service</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-accent mr-3 text-xl">4.</span>
                <span>Get GPU insights in under 60 seconds</span>
              </li>
            </ol>
          </div>

          <p className="text-lg text-stone-cream-6 leading-relaxed mb-4">
            Radix bolts on to your existing infrastructure (Kubernetes, Slurm, Ray) without requiring stack changes or code modifications. <strong className="text-vs-blue-5">Your data scientists submit jobs exactly as they do today.</strong>
          </p>

          <p className="text-lg text-stone-cream-6 leading-relaxed">
            Radix observes your workload patterns, measures the three-dimensional utilization profile of every job, and calculates what scheduling decisions would have maximized throughput.
          </p>
        </div>
      </section>

      {/* Radix Gives You - Warm cream */}
      <section className="py-20 bg-stone-cream-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-vs-blue-6">Radix Gives You</h2>
          <div className="space-y-6">
            <div className="bg-white border-2 border-stone-cream-3 rounded-xl p-6 shadow-lg">
              <p className="text-lg text-stone-cream-6">
                <strong className="text-vs-blue-5">Detailed report</strong> showing exactly how much performance you're gaining or leaving on the table.
              </p>
            </div>
            <div className="bg-white border-2 border-stone-cream-3 rounded-xl p-6 shadow-lg">
              <p className="text-lg text-stone-cream-6">
                <strong className="text-vs-blue-5">Immediate training efficiency gains</strong> with the same hardware. That translates directly to faster training cycles, shorter queue times, and lower cost per model.
              </p>
            </div>
            <div className="bg-white border-2 border-stone-cream-3 rounded-xl p-6 shadow-lg">
              <p className="text-lg text-stone-cream-6">
                You can <strong className="text-vs-blue-5">postpone expensive infrastructure buildouts</strong>, train larger models without expanding your footprint, and maintain competitive velocity while others wait months for hardware delivery.
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              href="/pricing"
              className="inline-block px-8 py-4 bg-vs-blue-5 text-white rounded-full font-semibold hover:bg-vs-blue-4 transition-colors text-lg shadow-lg"
            >
              Get Radix Core
            </Link>
          </div>
        </div>
      </section>

      {/* Radix Studio: Inference Operations - Vibrant cyan */}
      <section className="py-20 bg-gradient-to-r from-accent to-vs-blue-3">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight mb-8 text-center text-white">Radix Studio: Inference Operations</h2>

          <div className="bg-white border-2 border-stone-cream-3 rounded-2xl p-10 mb-10 shadow-xl">
            <p className="text-xl text-stone-cream-6 mb-8 leading-relaxed">
              Radix Studio brings the same principles (observability, governance, deterministic control, and cost-awareness) to LLM and inference operations. It's a multi-tenant SaaS platform for teams running production AI workloads who need more than scattered API calls.
            </p>

            <h4 className="text-xl font-semibold mb-4 text-vs-blue-6">The inference problem:</h4>
            <ul className="space-y-3 text-stone-cream-6 mb-8">
              <li className="flex items-start">
                <span className="text-vs-blue-4 mr-3 text-xl">•</span>
                <span><strong>"LLM spaghetti":</strong> Model calls scattered through application code with no central visibility or control.</span>
              </li>
              <li className="flex items-start">
                <span className="text-vs-blue-4 mr-3 text-xl">•</span>
                <span><strong>Lack of governance:</strong> No audit trails, compliance guardrails, or policy enforcement for AI usage.</span>
              </li>
              <li className="flex items-start">
                <span className="text-vs-blue-4 mr-3 text-xl">•</span>
                <span><strong>Vendor lock-in:</strong> Tied to single model providers with brittle, one-off integrations.</span>
              </li>
              <li className="flex items-start">
                <span className="text-vs-blue-4 mr-3 text-xl">•</span>
                <span><strong>Cost unpredictability:</strong> No spending controls, rate limits, or budget caps.</span>
              </li>
            </ul>

            <h4 className="text-xl font-semibold mb-4 text-vs-blue-6">What Radix Studio provides:</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-stone-cream-1 rounded-xl p-6">
                <h5 className="font-bold mb-3 text-vs-blue-5">Pipeline Orchestration</h5>
                <p className="text-stone-cream-6">Build reusable multi-step AI workflows: LLM calls, RAG retrieval, tool execution, post-processing. Run them repeatably with full execution traces.</p>
              </div>
              <div className="bg-stone-cream-1 rounded-xl p-6">
                <h5 className="font-bold mb-3 text-vs-blue-5">Multi-Model Registry</h5>
                <p className="text-stone-cream-6">Register HTTP endpoints, container workloads, and external clusters. Bring Your Own GPU (BYOG) via secure Docker agent.</p>
              </div>
              <div className="bg-stone-cream-1 rounded-xl p-6">
                <h5 className="font-bold mb-3 text-vs-blue-5">Governance & Audit</h5>
                <p className="text-stone-cream-6">Per-tenant isolation, policy enforcement for data access and content safety, comprehensive audit logs for compliance.</p>
              </div>
              <div className="bg-stone-cream-1 rounded-xl p-6">
                <h5 className="font-bold mb-3 text-vs-blue-5">Cost Control</h5>
                <p className="text-stone-cream-6">Performance vs cost knobs, rate limiting, usage caps, and predictable per-execution pricing tiers.</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-vs-blue-7 text-white rounded-full font-semibold hover:bg-vs-blue-6 transition-colors text-lg shadow-lg"
            >
              Join Radix Studio Early Access
            </Link>
          </div>
        </div>
      </section>

      {/* Which Product Is For Me? - Cream gradient */}
      <section className="py-20 bg-gradient-to-b from-stone-cream-2 to-stone-cream-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-8 text-vs-blue-6">Which Product Is For Me?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border-2 border-stone-cream-3 rounded-xl p-6 shadow-xl">
              <h3 className="text-xl font-bold mb-3 text-accent">Choose Radix Core if:</h3>
              <p className="text-stone-cream-6">
                You're training models on GPUs and want more throughput plus better observability. You need deterministic scheduling improvements without changing your data scientists' workflows.
              </p>
            </div>
            <div className="bg-white border-2 border-stone-cream-3 rounded-xl p-6 shadow-xl">
              <h3 className="text-xl font-bold mb-3 text-vs-blue-5">Choose Radix Studio if:</h3>
              <p className="text-stone-cream-6">
                You're running LLM applications or agents in production and want better control over models, pipelines, costs, and governance. You need a control plane, not just API wrappers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <JsonLd data={ld} />
    </>
  );
}

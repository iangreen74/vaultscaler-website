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
    <main className="mx-auto max-w-6xl px-6 py-16">
      {/* Platform Overview */}
      <section className="mb-20">
        <h1 className="text-4xl font-bold tracking-tight mb-6 text-center">The Radix Platform</h1>
        <p className="text-xl text-gray-700 text-center max-w-4xl mx-auto mb-12 leading-relaxed">
          VaultScaler's Radix Platform delivers complete AI operations across the lifecycle. <strong>Radix Core</strong> optimizes GPU training workloads. <strong>Radix Studio</strong> provides a governed control plane for LLM and inference operations, with pipelines, multi-model routing, and cost guardrails.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-2">Radix Core</h2>
            <p className="text-lg text-gray-700 mb-4">Training Optimization</p>
            <p className="text-gray-600">Available now with 14-day trial</p>
          </div>
          <div className="bg-gray-50 border-2 border-gray-300 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-2">Radix Studio</h2>
            <p className="text-lg text-gray-700 mb-4">Inference Operations</p>
            <p className="text-gray-600">Early access, contact us to join</p>
          </div>
        </div>
      </section>

      {/* Radix Core: Training Operations */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">Radix Core: Training Operations</h2>
        
        <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8 mb-10">
          <h2 className="text-2xl font-bold text-red-900 mb-4">Hidden Costs</h2>
          <p className="text-lg text-gray-800 mb-6 leading-relaxed">
            Most organizations training AI models don't realize they have a scheduling problem. The symptoms look normal: some jobs queue while GPUs process work, utilization dashboards show activity, and training eventually completes. But beneath the surface, resource imbalances could be quietly robbing you of <strong>40-60% of your GPU capacity</strong>.
          </p>
          
          <h3 className="text-xl font-semibold mb-4 text-gray-900">Traditional model training schedulers:</h3>
          <ul className="space-y-3 text-gray-800">
            <li className="flex items-start">
              <span className="text-red-600 mr-3 text-xl">✗</span>
              <span><strong>Only schedule based on GPUs.</strong> They see GPUs as "busy" or "available". This ignores effectively planning to use all the GPU capacity.</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-3 text-xl">✗</span>
              <span><strong>Ignore the compute and power allocations</strong> that your GPUs need. Even if your scheduler assigns a job that fills GPU memory, the lack of compute and/or a power cap can stifle performance.</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-3 text-xl">✗</span>
              <span><strong>Operate in "open-loop mode."</strong> Allocate resources once, then move on. There's no feedback mechanism to detect and correct the multi-dimensional GPU/Compute/Power imbalances that develop during execution.</span>
            </li>
          </ul>
          
          <p className="mt-6 text-gray-800 leading-relaxed">
            This isn't a configuration problem that can be easily tuned away. Academic research confirms that memory, compute, and power utilization have <strong>almost no correlation</strong> (Pearson coefficients of just 0.18-0.65). Your scheduler is making decisions based on one dimension, while the other two dimensions waste capacity.
          </p>
        </div>

        <div className="bg-gray-100 border-2 border-gray-300 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Cost Overruns</h2>
          <p className="text-lg text-gray-800 leading-relaxed">
            Depending on your scale, inefficient model training scheduling could be costing <strong>hundreds to millions of dollars</strong> in wasted capacity and excess power bills, not to mention a slower turnaround time to get trained models into production. Buying more GPUs or incurring bigger cloud bills may get the job done, but at a significant cost. Even after all that, you'll still be <strong>paying full price for fractional performance</strong>.
          </p>
        </div>
      </section>

      {/* Introducing Radix */}
      <section className="mb-20">
        <h2 className="text-4xl font-bold text-center mb-8">Introducing Radix</h2>
        
        <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-10 mb-10">
          <p className="text-xl text-gray-800 mb-6 leading-relaxed">
            Radix utilizes <strong>closed-loop feedback control</strong> to balance memory, compute, and power in real-time continuously. Instead of making one allocation decision and walking away, Radix monitors all three resource dimensions and makes on-the-fly optimizations during job execution.
          </p>
          
          <div className="bg-blue-600 text-white rounded-xl p-6 text-center">
            <p className="text-3xl font-bold">21.4% throughput improvement</p>
            <p className="text-xl mt-2">over industry-standard FIFO</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">The Radix Agent</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Read-only agent with no write access</li>
              <li>• Installed on Kubernetes via Helm chart</li>
              <li>• Under 60 seconds to deploy</li>
              <li>• Works with Slurm and Ray</li>
            </ul>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">The Radix Dashboard</h3>
            <p className="text-gray-700">
              Radix performance dashboard showing Radix vs your legacy scheduler over time.
            </p>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">The Radix API (if enabled)</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Fleet portal cluster health</li>
              <li>• GPU nodes & capacity</li>
              <li>• Pending pods & scheduling pressure</li>
              <li>• Throughput & latency deltas</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/pricing"
            className="inline-block px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors text-lg"
          >
            Get Radix Core
          </Link>
        </div>
      </section>

      {/* Radix Core Trial */}
      <section className="mb-20 bg-gray-50 rounded-2xl p-10">
        <h2 className="text-3xl font-bold mb-6">Radix Core Trial</h2>
        <p className="text-xl text-gray-800 mb-6 leading-relaxed">
          Optimize your training GPUs for 14 days with full Radix Core. Experience more throughput. See precisely what Radix brings to the table. Alternatively, you can run Radix in shadow mode alongside your existing scheduler to get zero-risk proof.
        </p>
        <Link
          href="/pricing"
          className="inline-block px-8 py-4 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-colors text-lg"
        >
          Start Your Free Trial
        </Link>
      </section>

      {/* How Radix Works */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-6">How Radix Works</h2>
        <ol className="space-y-4 text-lg text-gray-800">
          <li className="flex items-start">
            <span className="font-bold text-blue-600 mr-3">1.</span>
            <span>Install the Helm chart</span>
          </li>
          <li className="flex items-start">
            <span className="font-bold text-blue-600 mr-3">2.</span>
            <span>Choose zero egress or API mode</span>
          </li>
          <li className="flex items-start">
            <span className="font-bold text-blue-600 mr-3">3.</span>
            <span>Port-forward the service</span>
          </li>
          <li className="flex items-start">
            <span className="font-bold text-blue-600 mr-3">4.</span>
            <span>Get GPU insights in under 60 seconds</span>
          </li>
        </ol>
        
        <p className="mt-8 text-lg text-gray-700 leading-relaxed">
          Radix bolts on to your existing infrastructure (Kubernetes, Slurm, Ray) without requiring stack changes or code modifications. <strong>Your data scientists submit jobs exactly as they do today.</strong>
        </p>
        
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          Radix observes your workload patterns, measures the three-dimensional utilization profile of every job, and calculates what scheduling decisions would have maximized throughput.
        </p>
      </section>

      {/* Radix Gives You */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-6">Radix Gives You</h2>
        <div className="space-y-6">
          <div className="bg-white border-2 border-blue-200 rounded-xl p-6">
            <p className="text-lg text-gray-800">
              <strong>Detailed report</strong> showing exactly how much performance you're gaining or leaving on the table.
            </p>
          </div>
          <div className="bg-white border-2 border-blue-200 rounded-xl p-6">
            <p className="text-lg text-gray-800">
              <strong>Immediate training efficiency gains</strong> with the same hardware. That translates directly to faster training cycles, shorter queue times, and lower cost per model.
            </p>
          </div>
          <div className="bg-white border-2 border-blue-200 rounded-xl p-6">
            <p className="text-lg text-gray-800">
              You can <strong>postpone expensive infrastructure buildouts</strong>, train larger models without expanding your footprint, and maintain competitive velocity while others wait months for hardware delivery.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-10">
          <Link
            href="/pricing"
            className="inline-block px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors text-lg"
          >
            Get Radix Core
          </Link>
        </div>
      </section>

      {/* Radix Studio: Inference Operations */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">Radix Studio: Inference Operations</h2>
        
        <div className="bg-gray-50 border-2 border-gray-300 rounded-2xl p-10 mb-10">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold">Multi-Tenant SaaS Control Plane</h3>
            <span className="px-4 py-2 bg-yellow-400 text-yellow-900 rounded-full font-semibold text-sm">Coming Soon</span>
          </div>
          <p className="text-xl text-gray-800 mb-8 leading-relaxed">
            Radix Studio brings the same principles (observability, governance, deterministic control, and cost-awareness) to LLM and inference operations. It's a multi-tenant SaaS platform for teams running production AI workloads who need more than scattered API calls.
          </p>
          
          <h3 className="text-xl font-semibold mb-4 text-gray-900">The inference problem:</h3>
          <ul className="space-y-3 text-gray-800 mb-8">
            <li className="flex items-start">
              <span className="text-gray-600 mr-3 text-xl">•</span>
              <span><strong>"LLM spaghetti":</strong> Model calls scattered through application code with no central visibility or control.</span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-600 mr-3 text-xl">•</span>
              <span><strong>Lack of governance:</strong> No audit trails, compliance guardrails, or policy enforcement for AI usage.</span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-600 mr-3 text-xl">•</span>
              <span><strong>Vendor lock-in:</strong> Tied to single model providers with brittle, one-off integrations.</span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-600 mr-3 text-xl">•</span>
              <span><strong>Cost unpredictability:</strong> No spending controls, rate limits, or budget caps.</span>
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-4 text-gray-900">What Radix Studio provides:</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6">
              <h4 className="font-bold mb-3">Pipeline Orchestration</h4>
              <p className="text-gray-700">Build reusable multi-step AI workflows: LLM calls, RAG retrieval, tool execution, post-processing. Run them repeatably with full execution traces.</p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h4 className="font-bold mb-3">Multi-Model Registry</h4>
              <p className="text-gray-700">Register HTTP endpoints, container workloads, and external clusters. Bring Your Own GPU (BYOG) via secure Docker agent.</p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h4 className="font-bold mb-3">Governance & Audit</h4>
              <p className="text-gray-700">Per-tenant isolation, policy enforcement for data access and content safety, comprehensive audit logs for compliance.</p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h4 className="font-bold mb-3">Cost Control</h4>
              <p className="text-gray-700">Performance vs cost knobs, rate limiting, usage caps, and predictable per-execution pricing tiers.</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-colors text-lg"
          >
            Join Radix Studio Early Access
          </Link>
        </div>
      </section>

      {/* Which Product Is For Me? */}
      <section className="mb-20 bg-blue-50 rounded-2xl p-10">
        <h2 className="text-2xl font-bold text-center mb-8">Which Product Is For Me?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 text-blue-600">Choose Radix Core if:</h3>
            <p className="text-gray-800">
              You're training models on GPUs and want more throughput plus better observability. You need deterministic scheduling improvements without changing your data scientists' workflows.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 text-gray-600">Choose Radix Studio if:</h3>
            <p className="text-gray-800">
              You're running LLM applications or agents in production and want better control over models, pipelines, costs, and governance. You need a control plane, not just API wrappers.
            </p>
          </div>
        </div>
      </section>

      <JsonLd data={ld} />
    </main>
  );
}

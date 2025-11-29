import { SITE } from "@/lib/site";

export const metadata = {
  title: "Contact",
  description:
    "Reach the VaultScaler team. Pre-launch now; GA target November 15, 2025.",
  alternates: { canonical: `${SITE.url}/contact` },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
      <p className="mt-3 text-gray-700">
        Whether you're optimizing GPU training, building production LLM systems, or stuck in AI pilot purgatory, we'd love to talk.
      </p>

      <div className="mt-6 rounded-2xl border p-6 bg-gray-50">
        <h2 className="text-xl font-medium mb-4">Good reasons to reach out:</h2>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            <span>You're training models on GPUs and suspect you're wasting capacity</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            <span>You're stuck in AI pilot purgatory and need an operations partner</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            <span>You want to explore early access to the Radix Studio control plane</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            <span>You run air-gapped or zero-egress environments and need secure AI ops</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            <span>You're a strategic partner or investor evaluating AI operations infrastructure and want to understand where VaultScaler fits in your portfolio or ecosystem</span>
          </li>
        </ul>
      </div>

      <div className="mt-6 rounded-2xl border p-6">
        <h2 className="text-xl font-medium mb-4">Email</h2>
        <div className="space-y-3">
          <div>
            <p className="text-sm text-gray-600 mb-1">Founder & Engineering</p>
            <a
              className="text-blue-600 underline underline-offset-4 text-lg"
              href="mailto:ian@vaultscaler.com"
            >
              ian@vaultscaler.com
            </a>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Operations & Partnerships</p>
            <a
              className="text-blue-600 underline underline-offset-4 text-lg"
              href="mailto:bpruess@vaultscaler.com"
            >
              bpruess@vaultscaler.com
            </a>
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border p-6">
        <h2 className="text-xl font-medium">Media kit</h2>
        <p className="mt-3 text-gray-700">
          Need logos, screenshots, or a one-pager? Email us and we'll share the latest bundle.
        </p>
      </div>

      <div className="mt-10 rounded-2xl border-2 border-blue-200 bg-blue-50 p-8 text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">For Partners and Investors</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          VaultScaler is building deterministic AI operations for teams that train and deploy models in the real world. If you're exploring joint go-to-market, platform integration, or strategic investment in AI operations infrastructure, we'd love to talk.
        </p>
      </div>
    </main>
  );
}

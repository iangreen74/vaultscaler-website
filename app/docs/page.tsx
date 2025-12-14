// Route: /docs
export const metadata = {
  title: "Documentation — VaultScaler",
  description: "VaultScaler Radix Platform documentation coming soon.",
  robots: { index: false, follow: false },
};

export default function DocsPlaceholder() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-xl mx-auto px-4 text-center">
        <h1 className="text-3xl font-bold mb-4">Documentation Not Public Yet</h1>
        <p className="text-lg text-gray-700 mb-4">
          Public documentation launches with the platform on January 15, 2026.
        </p>
        <p className="text-gray-600">
          If you&apos;re an existing or prospective design partner and need technical details,
          please contact us directly at{' '}
          <a href="mailto:ian@vaultscaler.com" className="text-blue-600 underline">
            ian@vaultscaler.com
          </a>{' '}
          or{' '}
          <a href="mailto:bpruess@vaultscaler.com" className="text-blue-600 underline">
            bpruess@vaultscaler.com
          </a>.
        </p>
      </div>
    </main>
  );
}

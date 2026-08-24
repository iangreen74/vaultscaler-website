// Route: /docs (internal placeholder, noindex)
export const metadata = {
  title: "VaultScaler Documentation",
  description: "VaultScaler documentation.",
  robots: { index: false, follow: false },
};

export default function DocsPlaceholder() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center">
      <div className="max-w-xl mx-auto px-5 text-center">
        <h1 className="font-display text-3xl text-bone mb-4">Not public yet</h1>
        <p className="text-muted leading-relaxed">
          Technical documentation is shared directly with clients. If you need details, write to us at{' '}
          <a href="mailto:ian@vaultscaler.com" className="text-bone underline underline-offset-4">
            ian@vaultscaler.com
          </a>.
        </p>
      </div>
    </main>
  );
}

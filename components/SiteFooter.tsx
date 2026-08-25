import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className="border-t border-line bg-ink" role="contentinfo">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <img
                src="/brand/vaultscaler-icon-v1.0/svg/vaultscaler-icon-inverse.svg"
                alt=""
                className="h-6 w-auto opacity-90"
              />
              <span className="text-[15px] font-medium tracking-tight text-bone">VaultScaler</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-dim">
              Private, on-premise computer-vision security. On-premise, owned end to end,
              nothing leaving the building. Based in Las Vegas.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm" aria-label="Footer">
            <Link href="/how-it-works/" className="text-muted hover:text-bone transition-colors">How it works</Link>
            <Link href="/approach/" className="text-muted hover:text-bone transition-colors">Approach</Link>
            <Link href="/contact/" className="text-muted hover:text-bone transition-colors">Contact</Link>
            <Link href="/privacy/" className="text-muted hover:text-bone transition-colors">Privacy</Link>
          </nav>
        </div>

        <div className="mt-12 pt-6 border-t border-line/60 text-xs text-dim">
          VaultScaler Inc. &middot; &copy; 2026 &middot; All rights reserved.
        </div>
      </div>
    </footer>
  );
}

import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className="border-t border-line bg-ink" role="contentinfo">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div className="max-w-sm">
            <span className="font-display text-[19px] leading-none tracking-[0.02em] text-bone opacity-90">
              VaultScaler
            </span>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Thoughtfully designed software. Makers of Takes, a writing workspace built around
              speaking. Based in Las Vegas.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm" aria-label="Footer">
            <Link href="/takes/" className="text-muted hover:text-bone transition-colors">Takes</Link>
            <Link href="/takes/release-notes/" className="text-muted hover:text-bone transition-colors">Release notes</Link>
            <Link href="/takes/support/" className="text-muted hover:text-bone transition-colors">Support</Link>
            <Link href="/takes/privacy/" className="text-muted hover:text-bone transition-colors">Takes privacy</Link>
            <Link href="/contact/" className="text-muted hover:text-bone transition-colors">Contact</Link>
            <Link href="/privacy/" className="text-muted hover:text-bone transition-colors">Website privacy</Link>
          </nav>
        </div>

        <div className="mt-12 pt-6 border-t border-line/60 text-xs text-muted">
          VaultScaler Inc. &middot; &copy; 2026 &middot; All rights reserved.
        </div>
      </div>
    </footer>
  );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { trackNavClick } from '@/lib/analytics';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services/' },
  { label: 'How it works', href: '/how-it-works/' },
  { label: 'Approach', href: '/approach/' },
  { label: 'Why local', href: '/why-local/' },
  { label: 'Contact', href: '/contact/' },
] as const;

export default function Navigation() {
  const [open, setOpen] = useState(false);

  const onNav = (label: string) => {
    trackNavClick(label);
    setOpen(false);
  };

  return (
    <>
      <div aria-hidden className="h-16" />
      <nav className="fixed top-0 left-0 right-0 z-50 bg-ink/80 backdrop-blur-xl border-b border-line">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex justify-between items-center h-16">
            <Link
              href="/"
              onClick={() => trackNavClick('Logo')}
              className="flex items-center gap-2.5 group"
            >
              <img
                src="/brand/vaultscaler-icon-v1.0/svg/vaultscaler-icon-inverse.svg"
                alt=""
                className="h-6 w-auto opacity-90 group-hover:opacity-100 transition-opacity"
              />
              <span className="text-[15px] font-medium tracking-tight text-bone">VaultScaler</span>
            </Link>

            <div className="hidden md:flex items-center gap-9">
              {NAV_LINKS.slice(1).map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => trackNavClick(l.label)}
                  className="text-sm text-muted hover:text-bone transition-colors"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/contact/"
                onClick={() => trackNavClick('Talk to us')}
                className="text-sm text-bone border border-line hover:border-bone px-4 py-1.5 rounded-full transition-colors"
              >
                Talk to us
              </Link>
            </div>

            <button
              type="button"
              className="md:hidden p-2 -mr-2 text-muted hover:text-bone focus:outline-none"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden bg-ink border-t border-line">
            <div className="px-5 py-3">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => onNav(l.label)}
                  className="block px-1 py-3 text-base text-muted hover:text-bone border-b border-line/60 last:border-0"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

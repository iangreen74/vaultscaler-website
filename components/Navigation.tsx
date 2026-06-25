'use client';

import { useState } from 'react';
import Link from 'next/link';
import { trackNavClick } from '@/lib/analytics';

// The nav reflects what actually exists: Vivaliux (the product), how it works,
// the tier pricing, and contact. No phantom products, no dropdown.
const NAV_LINKS = [
  { label: 'Vivaliux', href: '/#platform' },
  { label: 'How it works', href: '/#how' },
  { label: 'Pricing', href: '/#pricing' },
] as const;

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileNavClick = (label: string) => {
    trackNavClick(label);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <div aria-hidden className="h-16" />
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link
              href="/"
              onClick={() => trackNavClick('Logo')}
              className="flex items-center gap-2 text-xl font-semibold tracking-tight"
            >
              <img
                src="/brand/vaultscaler-icon-v1.0/svg/vaultscaler-icon-primary.svg"
                alt=""
                className="h-6 w-auto"
              />
              <span className="text-primary-3">VaultScaler</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => trackNavClick(l.label)}
                  className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/contact/"
                onClick={() => trackNavClick('Contact')}
                className="text-sm font-semibold text-white bg-primary-3 hover:bg-primary-4 px-4 py-2 rounded-full transition-colors"
              >
                Request a pilot
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-3"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-3 space-y-1">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => handleMobileNavClick(l.label)}
                  className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/contact/"
                onClick={() => handleMobileNavClick('Contact')}
                className="block px-3 py-3 mt-1 rounded-md text-base font-semibold text-white bg-primary-3 hover:bg-primary-4"
              >
                Request a pilot
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

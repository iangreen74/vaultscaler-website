'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { trackNavClick } from '@/lib/analytics';
import { PRODUCTS } from '@/lib/site';

export default function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  if (pathname?.startsWith('/forgewing')) return null;

  // Spacer below renders alongside the fixed nav so page content clears it.
  // Lives here (not in the root layout) so /forgewing — which hides the nav —
  // doesn't pay for phantom top padding.

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
              {/* Products dropdown (hover + focus) */}
              <div
                className="relative"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <button
                  type="button"
                  className="flex items-center gap-1 text-sm text-gray-700 hover:text-gray-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-3 rounded"
                  aria-expanded={productsOpen}
                  aria-haspopup="true"
                  onClick={() => setProductsOpen((v) => !v)}
                  onFocus={() => setProductsOpen(true)}
                >
                  Products
                  <svg
                    className={`w-4 h-4 transition-transform ${productsOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {productsOpen && (
                  <div className="absolute left-0 top-full pt-2 w-64">
                    <div className="bg-white rounded-xl shadow-lg border border-gray-200 py-2">
                      {PRODUCTS.map((p) => (
                        <Link
                          key={p.href}
                          href={p.href}
                          onClick={() => {
                            trackNavClick(p.name);
                            setProductsOpen(false);
                          }}
                          className="flex items-center justify-between gap-3 px-4 py-2.5 hover:bg-gray-50 transition-colors"
                        >
                          <span className="text-sm font-medium text-gray-900">{p.name}</span>
                          <span
                            className={`text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full ${
                              p.tag === 'Available now'
                                ? 'bg-pop-light/20 text-primary-4'
                                : 'bg-gray-100 text-gray-500'
                            }`}
                          >
                            {p.tag}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/contact/"
                onClick={() => trackNavClick('Contact')}
                className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
              >
                Contact
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
              <p className="px-3 pt-2 pb-1 text-xs font-semibold uppercase tracking-wide text-gray-400">
                Products
              </p>
              {PRODUCTS.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  onClick={() => handleMobileNavClick(p.name)}
                  className="flex items-center justify-between gap-3 px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  <span>{p.name}</span>
                  <span
                    className={`text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full ${
                      p.tag === 'Available now'
                        ? 'bg-pop-light/20 text-primary-4'
                        : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    {p.tag}
                  </span>
                </Link>
              ))}
              <Link
                href="/contact/"
                onClick={() => handleMobileNavClick('Contact')}
                className="block px-3 py-3 mt-1 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 border-t border-gray-100"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

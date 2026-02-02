'use client';

import { useState } from 'react';
import Link from 'next/link';
import { trackNavClick } from '@/lib/analytics';

const solutionLinks = [
  { href: '/solutions/gpu-fleet-optimization/', label: 'Hyperscale & Frontier AI' },
  { href: '/solutions/corporate/', label: 'Corporate AI Teams' },
  { href: '/solutions/research/', label: 'Research Labs' },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);

  const handleMobileNavClick = (label: string) => {
    trackNavClick(label);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" onClick={() => trackNavClick('Logo')} className="flex items-center gap-2 text-xl font-semibold tracking-tight">
            <img
              src="/brand/vaultscaler-icon-v1.0/svg/vaultscaler-icon-primary.svg"
              alt=""
              className="h-6 w-auto"
            />
            <span className="text-primary-1">VaultScaler</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" onClick={() => trackNavClick('Home')} className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
              Home
            </Link>
            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button
                className="text-sm text-gray-700 hover:text-gray-900 transition-colors flex items-center gap-1 py-2"
                onClick={() => setSolutionsOpen(!solutionsOpen)}
              >
                Solutions
                <svg className={`w-4 h-4 transition-transform ${solutionsOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {solutionsOpen && (
                <div className="absolute top-full left-0 pt-1 w-56">
                  <div className="bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                    {solutionLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => { trackNavClick(`Solutions - ${link.label}`); setSolutionsOpen(false); }}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link href="/product" onClick={() => trackNavClick('Product')} className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
              Platform
            </Link>
            <Link href="/pricing" onClick={() => trackNavClick('Pricing')} className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
              Pricing
            </Link>
            <Link href="/contact" onClick={() => trackNavClick('Contact')} className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
              Contact
            </Link>
            <Link
              href="/waitlist"
              onClick={() => trackNavClick('Join Waitlist')}
              className="px-5 py-2 bg-primary-1 text-white rounded-full font-semibold hover:bg-primary-2 transition-colors text-sm shadow-md hover:shadow-lg"
            >
              Join Waitlist
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
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
            <Link
              href="/"
              onClick={() => handleMobileNavClick('Home')}
              className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Home
            </Link>
            {/* Mobile Solutions Accordion */}
            <div>
              <button
                onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                className="flex items-center justify-between w-full px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                Solutions
                <svg className={`w-4 h-4 transition-transform ${mobileSolutionsOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileSolutionsOpen && (
                <div className="pl-4 space-y-1">
                  {solutionLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => handleMobileNavClick(`Solutions - ${link.label}`)}
                      className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/product"
              onClick={() => handleMobileNavClick('Product')}
              className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Platform
            </Link>
            <Link
              href="/pricing"
              onClick={() => handleMobileNavClick('Pricing')}
              className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              onClick={() => handleMobileNavClick('Contact')}
              className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Contact
            </Link>
            <Link
              href="/waitlist"
              onClick={() => handleMobileNavClick('Join Waitlist')}
              className="block px-3 py-3 mt-2 bg-primary-1 text-white rounded-md text-base font-semibold text-center hover:bg-primary-2"
            >
              Join Waitlist
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

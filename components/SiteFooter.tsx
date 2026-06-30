import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className="bg-primary-3 text-white py-8 mt-20" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-sm text-gray-300">
          <p>VaultScaler Inc. &middot; &copy; 2026 &middot; All rights reserved.</p>
          <p className="mt-2">
            <Link href="/privacy/" className="hover:text-white transition-colors">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

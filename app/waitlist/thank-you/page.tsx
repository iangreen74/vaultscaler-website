import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "You're on the List | VaultScaler",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-primary-4 via-primary-3 to-primary-3 py-20">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            You&apos;re on the list
          </h1>

          <p className="text-gray-600 mb-8">
            You&apos;re all set for our March 2, 2026 launch. We&apos;ll email you with early access details one week before launch day.
          </p>

          <div className="space-y-4">
            <Link
              href="/product"
              className="inline-block px-8 py-3 bg-primary-3 text-white rounded-full font-semibold hover:bg-primary-4 transition-colors"
            >
              Explore the Platform
            </Link>

            <p className="text-gray-500 text-sm">
              or{' '}
              <Link href="/" className="text-primary-3 hover:underline">
                return home
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

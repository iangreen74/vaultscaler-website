import type { Metadata } from 'next';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacy Policy | VaultScaler',
  description: 'VaultScaler privacy policy. Learn what data we collect, how we use it, and your rights.',
  alternates: {
    canonical: `${SITE.url}/privacy/`,
  },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-primary-3 mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-12">Last updated: February 11, 2026</p>

        <div className="prose prose-gray max-w-none space-y-8">
          <div>
            <h2 className="text-xl font-bold text-primary-3 mb-3">What We Collect</h2>
            <p className="text-gray-600 leading-relaxed">
              When you join our waitlist or contact us, we collect the information you provide:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-600">
              <li>Email address</li>
              <li>Product interest (which VaultScaler products you&apos;re interested in)</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-3">
              We do not collect payment information, browsing history, or any data beyond what you explicitly submit through our forms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-primary-3 mb-3">How We Store It</h2>
            <p className="text-gray-600 leading-relaxed">
              Form submissions are processed and stored by{' '}
              <a href="https://formspree.io" className="text-primary-3 hover:underline" target="_blank" rel="noopener noreferrer">Formspree</a>,
              a third-party form handling service. Formspree processes your data in accordance with their own privacy policy.
              We do not operate our own database for storing form submissions.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-primary-3 mb-3">How We Use It</h2>
            <p className="text-gray-600 leading-relaxed">
              We use the information you provide to:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-600">
              <li>Notify you when VaultScaler launches</li>
              <li>Send relevant product updates about the products you expressed interest in</li>
              <li>Respond to sales or support inquiries</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-primary-3 mb-3">What We Don&apos;t Do</h2>
            <p className="text-gray-600 leading-relaxed">
              We will never sell, rent, or share your personal information with third parties for marketing purposes.
              Your data is used solely for communicating with you about VaultScaler products and services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-primary-3 mb-3">Analytics</h2>
            <p className="text-gray-600 leading-relaxed">
              We use Google Analytics to understand how visitors interact with our website.
              This collects anonymized usage data such as pages visited and session duration.
              No personally identifiable information is linked to analytics data.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-primary-3 mb-3">Your Rights</h2>
            <p className="text-gray-600 leading-relaxed">
              You may request deletion of your data or opt out of future communications at any time by emailing us
              at{' '}
              <a href={`mailto:${SITE.email}`} className="text-primary-3 hover:underline">{SITE.email}</a>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-primary-3 mb-3">Contact</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have questions about this policy, reach us at{' '}
              <a href={`mailto:${SITE.email}`} className="text-primary-3 hover:underline">{SITE.email}</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

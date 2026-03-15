'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { trackFormSubmit } from '@/lib/analytics';

export default function WaitlistForm() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('https://formspree.io/f/xyzrdzdb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          ...(title && { title }),
          ...(name && { name }),
          _subject: `VaultScaler Waitlist: ${email}`,
        }),
      });

      if (response.ok) {
        trackFormSubmit('Waitlist', email);
        router.push('/waitlist/thank-you');
      } else {
        setError('Something went wrong. Please try again.');
        setIsSubmitting(false);
      }
    } catch {
      setError('Something went wrong. Please try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-primary-4 via-primary-3 to-primary-3 py-20">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Join the Waitlist
            </h1>
            <p className="text-sm text-primary-3 font-semibold mb-3 uppercase tracking-wide">
              April 6, 2026
            </p>
            <p className="text-gray-600">
              Secure your spot before launch day. Early adopters get priority onboarding.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Honeypot field for bot detection - hidden from users */}
            <input
              type="text"
              name="_gotcha"
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
            />
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-3 focus:border-primary-3 transition-colors"
                placeholder="you@company.com"
              />
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-3 focus:border-primary-3 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-3 focus:border-primary-3 transition-colors"
              />
            </div>

            {error && (
              <p className="text-red-600 text-sm">{error}</p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-4 bg-primary-3 text-white rounded-full font-bold hover:bg-primary-4 transition-all text-lg shadow-lg hover:scale-105 transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isSubmitting ? 'Joining...' : 'Join Waitlist'}
            </button>
          </form>

          <p className="text-center text-gray-500 text-sm mt-6">
            No spam. You&apos;ll get an email prior to launch.
          </p>
          <p className="text-center text-gray-400 text-xs mt-2">
            By submitting, you agree to our <Link href="/privacy/" className="text-primary-3 hover:underline">Privacy Policy</Link>.
          </p>
        </div>
      </div>
    </section>
  );
}

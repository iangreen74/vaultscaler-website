'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { trackFormSubmit } from '@/lib/analytics';

export default function WaitlistPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState<'core' | 'studio' | 'both'>('both');
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
          interest,
          _subject: `Radix Waitlist: ${interest} - ${email}`,
        }),
      });

      if (response.ok) {
        trackFormSubmit('Waitlist', { interest });
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
              Join the Radix Waitlist
            </h1>
            <p className="text-sm text-pop-dark font-semibold mb-3 uppercase tracking-wide">
              March 31, 2026
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
                Email address
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
              <label className="block text-sm font-medium text-gray-700 mb-3">
                I&apos;m interested in
              </label>
              <div className="space-y-3">
                <label className="flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                  <input
                    type="radio"
                    name="interest"
                    value="core"
                    checked={interest === 'core'}
                    onChange={() => setInterest('core')}
                    className="w-4 h-4 text-primary-3 focus:ring-primary-3"
                  />
                  <div className="ml-3">
                    <span className="font-medium text-gray-900">Radix Core</span>
                    <span className="text-gray-500 text-sm ml-2">GPU scheduling optimization</span>
                  </div>
                </label>

                <label className="flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                  <input
                    type="radio"
                    name="interest"
                    value="studio"
                    checked={interest === 'studio'}
                    onChange={() => setInterest('studio')}
                    className="w-4 h-4 text-primary-3 focus:ring-primary-3"
                  />
                  <div className="ml-3">
                    <span className="font-medium text-gray-900">Radix Studio</span>
                    <span className="text-gray-500 text-sm ml-2">LLM orchestration & governance</span>
                  </div>
                </label>

                <label className="flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                  <input
                    type="radio"
                    name="interest"
                    value="both"
                    checked={interest === 'both'}
                    onChange={() => setInterest('both')}
                    className="w-4 h-4 text-primary-3 focus:ring-primary-3"
                  />
                  <div className="ml-3">
                    <span className="font-medium text-gray-900">Both</span>
                    <span className="text-gray-500 text-sm ml-2">Full Radix Platform</span>
                  </div>
                </label>
              </div>
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
        </div>
      </div>
    </section>
  );
}

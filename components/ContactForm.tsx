'use client';

import { useState } from 'react';
import { trackFormSubmit } from '@/lib/analytics';
import { SPACE_TYPES } from '@/lib/site';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [org, setOrg] = useState('');
  const [interest, setInterest] = useState<string[]>([]);
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    try {
      const response = await fetch('https://formspree.io/f/xyzrdzdb', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          organization: org,
          form_type: 'enquiry',
          space: interest.join(', '),
          message,
          _subject: `VaultScaler enquiry: ${name}${interest.length ? ' — ' + interest.join(', ') : ''}`,
        }),
      });
      if (response.ok) {
        trackFormSubmit('Contact', interest.join(', '));
        setSubmitted(true);
      } else {
        setError('Something went wrong. Please try again, or email us directly.');
        setIsSubmitting(false);
      }
    } catch {
      setError('Something went wrong. Please try again, or email us directly.');
      setIsSubmitting(false);
    }
  };

  const inputCls =
    'w-full px-4 py-3 bg-ink-800 border border-line rounded-lg text-bone placeholder:text-dim focus:outline-none focus:border-bone/60 transition-colors';

  if (submitted) {
    return (
      <div className="border border-line rounded-2xl p-8 md:p-12 bg-ink-900 text-center">
        <h2 className="font-display text-2xl text-bone">Message sent.</h2>
        <p className="mt-3 text-muted">
          Thank you. We&apos;ll be in touch — usually within a business day.
        </p>
      </div>
    );
  }

  return (
    <div className="border border-line rounded-2xl p-6 sm:p-8 md:p-10 bg-ink-900">
      <form onSubmit={handleSubmit} className="space-y-6">
        <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="c-name" className="block text-sm text-muted mb-2">
              Name <span className="text-alert">*</span>
            </label>
            <input id="c-name" name="name" required value={name}
              onChange={(e) => setName(e.target.value)} className={inputCls} placeholder="Your name" />
          </div>
          <div>
            <label htmlFor="c-email" className="block text-sm text-muted mb-2">
              Email <span className="text-alert">*</span>
            </label>
            <input id="c-email" type="email" name="email" required value={email}
              onChange={(e) => setEmail(e.target.value)} className={inputCls} placeholder="you@example.com" />
          </div>
        </div>

        <div>
          <label htmlFor="c-org" className="block text-sm text-muted mb-2">Gallery / collection</label>
          <input id="c-org" name="organization" value={org}
            onChange={(e) => setOrg(e.target.value)} className={inputCls} placeholder="Your space (optional)" />
        </div>

        <div>
          <span className="block text-sm text-muted mb-3">What are you protecting?</span>
          <div className="flex flex-wrap gap-2.5">
            {SPACE_TYPES.map((opt) => {
              const on = interest.includes(opt.value);
              return (
                <label
                  key={opt.value}
                  className={`cursor-pointer select-none rounded-full border px-4 py-2 text-sm transition-colors ${
                    on ? 'border-bone bg-bone text-ink' : 'border-line text-muted hover:border-bone/50'
                  }`}
                >
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={on}
                    onChange={(e) =>
                      setInterest(e.target.checked
                        ? [...interest, opt.value]
                        : interest.filter((i) => i !== opt.value))
                    }
                  />
                  {opt.label}
                </label>
              );
            })}
          </div>
        </div>

        <div>
          <label htmlFor="c-msg" className="block text-sm text-muted mb-2">
            Message <span className="text-alert">*</span>
          </label>
          <textarea id="c-msg" name="message" required rows={5} value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`${inputCls} resize-vertical`}
            placeholder="Tell us about your space and what's on the walls…" />
        </div>

        {error && <p className="text-alert text-sm">{error}</p>}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-full border border-bone/70 px-6 py-3.5 text-sm font-medium text-bone hover:bg-bone hover:text-ink transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending…' : 'Send message'}
        </button>
      </form>
    </div>
  );
}

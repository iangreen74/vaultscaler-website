'use client';

import { useState } from 'react';
import { trackFormSubmit } from '@/lib/analytics';

const productOptions = [
  { value: 'platform', label: 'VaultScaler Platform', desc: 'Local-first measurement for living & controlled systems' },
  { value: 'pilot', label: 'A pilot for my own system', desc: 'Research lab, vineyard, indoor/vertical farm, or other' },
  { value: 'studio-habitat', label: 'Studio Habitat', desc: 'Our live public proof — the AI-assisted phenotyping lab' },
];

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
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
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          company,
          form_type: 'demo',
          interest: interest.join(', '),
          message,
          _subject: `VaultScaler Contact: ${name} - ${interest.join(', ') || 'General'}`,
        }),
      });

      if (response.ok) {
        trackFormSubmit('Contact', interest.join(', '));
        setSubmitted(true);
      } else {
        setError('Something went wrong. Please try again.');
        setIsSubmitting(false);
      }
    } catch {
      setError('Something went wrong. Please try again.');
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Message Sent</h2>
        <p className="text-gray-600">
          Thanks for reaching out. We&apos;ll get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Send Us a Message
        </h2>
        <p className="text-gray-600">
          Tell us about your needs and we&apos;ll get back to you within one business day.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Honeypot field for bot detection */}
        <input
          type="text"
          name="_gotcha"
          style={{ display: 'none' }}
          tabIndex={-1}
          autoComplete="off"
        />
        {/* Submission type (mirrors the JSON submission for no-JS / form-data paths) */}
        <input type="hidden" name="form_type" value="demo" />

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-2">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="contact-name"
              name="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-3 focus:border-primary-3 transition-colors"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="contact-email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-3 focus:border-primary-3 transition-colors"
              placeholder="you@company.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="contact-company" className="block text-sm font-medium text-gray-700 mb-2">
            Company
          </label>
          <input
            type="text"
            id="contact-company"
            name="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-3 focus:border-primary-3 transition-colors"
            placeholder="Your company"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Product Interest
          </label>
          <div className="space-y-3">
            {productOptions.map((option) => (
              <label key={option.value} className="flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                <input
                  type="checkbox"
                  value={option.value}
                  checked={interest.includes(option.value)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setInterest([...interest, option.value]);
                    } else {
                      setInterest(interest.filter((i) => i !== option.value));
                    }
                  }}
                  className="w-4 h-4 rounded text-primary-3 focus:ring-primary-3"
                />
                <div className="ml-3">
                  <span className="font-medium text-gray-900">{option.label}</span>
                  <span className="text-gray-500 text-sm ml-2">{option.desc}</span>
                </div>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-2">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-3 focus:border-primary-3 transition-colors resize-vertical"
            placeholder="Tell us about your use case, requirements, or questions..."
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
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}

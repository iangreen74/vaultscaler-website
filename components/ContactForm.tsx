'use client';

import { trackEmailClick } from '@/lib/analytics';
import { SITE } from '@/lib/site';

export default function ContactForm() {
  return (
    <div className="border border-line rounded-2xl p-8 sm:p-10 md:p-12 bg-ink-900 text-center">
      <p className="text-muted leading-relaxed max-w-md mx-auto">
        Tell us about your space and what&apos;s on the walls. We read every message
        ourselves, and we reply directly — no form, no intermediary.
      </p>
      <a
        href={`mailto:${SITE.email}`}
        onClick={() => trackEmailClick('Contact CTA')}
        className="mt-8 inline-flex items-center justify-center rounded-full border border-bone/70 px-8 py-3.5 text-sm font-medium text-bone hover:bg-bone hover:text-ink transition-colors"
      >
        Email us
      </a>
      <p className="mt-5 text-sm text-dim">
        <a
          href={`mailto:${SITE.email}`}
          onClick={() => trackEmailClick('Contact address')}
          className="underline underline-offset-4 hover:text-muted"
        >
          {SITE.email}
        </a>
      </p>
    </div>
  );
}

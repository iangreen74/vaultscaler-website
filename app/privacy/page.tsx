import type { Metadata } from 'next';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacy | VaultScaler',
  description:
    "How VaultScaler handles data on this website — and how our security systems handle yours: on-premise, owned by you, nothing leaving your building.",
  alternates: { canonical: `${SITE.url}/privacy/` },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <section className="py-20 md:py-24">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <p className="eyebrow">Privacy</p>
        <h1 className="mt-6 font-display font-light text-4xl md:text-5xl text-bone">Privacy</h1>
        <p className="mt-3 text-sm text-dim">Last updated: 14 July 2026</p>

        <div className="mt-12 space-y-10">
          <div>
            <h2 className="font-display text-xl text-bone mb-3">The systems we install</h2>
            <p className="text-muted leading-relaxed">
              This matters most, so it comes first. A VaultScaler security system runs entirely on
              hardware you own, in your building. There is no cloud, no account, and nothing phoned
              home. Footage and events stay on the premises, under your control. Faces can be
              recognised or obscured before anything is ever stored — that is your decision, and we
              configure the system to the law where you are. We do not receive, hold, or have any
              way to browse your footage.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-bone mb-3">This website</h2>
            <p className="text-muted leading-relaxed">
              When you contact us, we collect only what you submit: your name, email, the kind of
              space you&apos;re protecting, and your message. We don&apos;t collect payment
              information or browsing history.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-bone mb-3">How enquiries are handled</h2>
            <p className="text-muted leading-relaxed">
              Contact-form submissions are processed by{' '}
              <a href="https://formspree.io" className="text-bone underline underline-offset-4 hover:text-muted" target="_blank" rel="noopener noreferrer">Formspree</a>,
              a third-party form service, under their own privacy policy. We use what you send only
              to reply to you and to talk with you about your space. We will never sell, rent, or
              share your information for marketing.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-bone mb-3">Analytics</h2>
            <p className="text-muted leading-relaxed">
              We use Umami, a privacy-focused analytics tool that uses no cookies, collects no
              personal data, and does not track visitors across sites — only aggregate figures like
              page views and country. We respect your browser&apos;s Do Not Track setting.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-bone mb-3">Your rights &amp; contact</h2>
            <p className="text-muted leading-relaxed">
              Ask us to delete your data or stop contacting you at any time, and with any questions
              about this policy, at{' '}
              <a href={`mailto:${SITE.email}`} className="text-bone underline underline-offset-4 hover:text-muted">{SITE.email}</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

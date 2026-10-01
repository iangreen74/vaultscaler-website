import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacy | VaultScaler',
  description:
    "How vaultscaler.com and VaultScaler handle data: no cookies, no analytics, request logging off. Takes has its own privacy page.",
  alternates: { canonical: `${SITE.url}/privacy/` },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <section className="py-20 md:py-24">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <p className="eyebrow">Privacy</p>
        <h1 className="mt-6 font-display font-light text-4xl md:text-5xl text-bone">Privacy</h1>
        <p className="mt-3 text-sm text-muted">Last updated: draft for review, September 2026</p>

        <div className="mt-12 space-y-10">
          <div>
            <h2 className="font-display text-xl text-bone mb-3">This website</h2>
            <p className="text-muted leading-relaxed">
              vaultscaler.com sets no cookies and loads no analytics or tracking scripts. It is served by Amazon Web
              Services (S3 and CloudFront), with request logging turned off. If that ever changes, this notice will say
              so first.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-bone mb-3">Takes</h2>
            <p className="text-muted leading-relaxed">
              Takes, our Mac app, records and transcribes on your Mac and has no account or analytics. It uses the
              internet only to check for and download updates. The details are on the{' '}
              <Link href="/takes/privacy/" className="text-bone underline underline-offset-4 hover:text-muted">Takes privacy page</Link>.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-bone mb-3">Email</h2>
            <p className="text-muted leading-relaxed">
              If you write to us, we receive what you send and use it only to reply. We never sell, rent or share it.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-bone mb-3">Your rights &amp; contact</h2>
            <p className="text-muted leading-relaxed">
              Ask us to delete your messages or stop contacting you at any time, and send any questions about this
              notice, to{' '}
              <a href={`mailto:${SITE.email}`} className="text-bone underline underline-offset-4 hover:text-muted">{SITE.email}</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

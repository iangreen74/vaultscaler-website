import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import WaitlistForm from "@/components/WaitlistForm";

export const metadata: Metadata = {
  title: "Join the Waitlist | VaultScaler",
  description:
    "Join the waitlist for early access to Vivaliux Free — VaultScaler's private, local-first AI measurement app for living and controlled systems.",
  alternates: { canonical: `${SITE.url}/waitlist/` },
  keywords: [...SITE.keywords, "waitlist", "early access", "beta"],
  openGraph: {
    title: "Join the Waitlist | VaultScaler",
    description:
      "Join the waitlist for early access to Vivaliux Free — VaultScaler's private, local-first AI measurement app for living and controlled systems.",
    url: `${SITE.url}/waitlist/`,
    type: "website",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "VaultScaler Waitlist" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Join the Waitlist | VaultScaler",
    description:
      "Join the waitlist for early access to Vivaliux Free — VaultScaler's private, local-first AI measurement app for living and controlled systems.",
    images: ["/og.jpg"],
  },
};

export default function WaitlistPage() {
  return <WaitlistForm />;
}

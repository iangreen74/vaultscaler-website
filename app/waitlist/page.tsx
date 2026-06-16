import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import WaitlistForm from "@/components/WaitlistForm";

export const metadata: Metadata = {
  title: "Join the Waitlist | VaultScaler",
  description:
    "Join the waitlist for early access to VaultScaler's Studio Habitat — local-first AI for biological discovery.",
  alternates: { canonical: `${SITE.url}/waitlist/` },
  keywords: [...SITE.keywords, "waitlist", "early access", "beta"],
  openGraph: {
    title: "Join the Waitlist | VaultScaler",
    description:
      "Join the waitlist for early access to VaultScaler's Studio Habitat — local-first AI for biological discovery.",
    url: `${SITE.url}/waitlist/`,
    type: "website",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "VaultScaler Waitlist" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Join the Waitlist | VaultScaler",
    description:
      "Join the waitlist for early access to VaultScaler's Studio Habitat — local-first AI for biological discovery.",
    images: ["/og.jpg"],
  },
};

export default function WaitlistPage() {
  return <WaitlistForm />;
}

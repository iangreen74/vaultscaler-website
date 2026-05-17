import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import WaitlistForm from "@/components/WaitlistForm";

export const metadata: Metadata = {
  title: "Join the Forgewing Waitlist | VaultScaler",
  description:
    "Join the waitlist for early access to Forgewing, the Product Delivery Engine. Launching June 2026.",
  alternates: { canonical: `${SITE.url}/waitlist/` },
  keywords: [...SITE.keywords, "waitlist", "early access", "beta"],
  openGraph: {
    title: "Join the Forgewing Waitlist | VaultScaler",
    description:
      "Join the waitlist for early access to Forgewing, the Product Delivery Engine. Launching June 2026.",
    url: `${SITE.url}/waitlist/`,
    type: "website",
    images: [{ url: "/og/forgewing.png", width: 1200, height: 630, alt: "Forgewing Waitlist" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Join the Forgewing Waitlist | VaultScaler",
    description:
      "Join the waitlist for early access to Forgewing, the Product Delivery Engine. Launching June 2026.",
    images: ["/og/forgewing.png"],
  },
};

export default function WaitlistPage() {
  return <WaitlistForm />;
}

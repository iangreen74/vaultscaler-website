import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import WaitlistForm from "@/components/WaitlistForm";

export const metadata: Metadata = {
  title: "Join the Radix Waitlist | VaultScaler",
  description:
    "Join the waitlist for early access to Radix. Launching April 6, 2026. Get priority onboarding for GPU scheduling optimization and LLM governance.",
  alternates: { canonical: `${SITE.url}/waitlist/` },
  keywords: [...SITE.keywords, "waitlist", "early access", "beta"],
  openGraph: {
    title: "Join the Radix Waitlist | VaultScaler",
    description:
      "Join the waitlist for early access to Radix. Launching April 6, 2026. Get priority onboarding for GPU scheduling optimization and LLM governance.",
    url: `${SITE.url}/waitlist/`,
    type: "website",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Radix Waitlist" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Join the Radix Waitlist | VaultScaler",
    description:
      "Join the waitlist for early access to Radix. Launching April 6, 2026. Get priority onboarding for GPU scheduling optimization and LLM governance.",
    images: ["/og.jpg"],
  },
};

export default function WaitlistPage() {
  return <WaitlistForm />;
}

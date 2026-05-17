"use client";

import FAQ from "@/components/FAQ";
import { trackEvent } from "@/lib/analytics";

interface FAQItem {
  question: string;
  answer: string;
}

export default function ForgewingFAQ({ items }: { items: FAQItem[] }) {
  return (
    <FAQ
      items={items}
      onToggle={(question, isOpen) => {
        if (!isOpen) return;
        trackEvent({
          action: "faq_open",
          category: "engagement",
          label: `Forgewing - ${question}`,
        });
      }}
    />
  );
}

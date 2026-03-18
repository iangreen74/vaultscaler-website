// Route: /deck (passcode-protected, noindex)
import type { Metadata } from "next";
import DeckClient from "./DeckClient";

export const metadata: Metadata = {
  title: "Deck | VaultScaler",
  robots: { index: false, follow: false },
};

export default function DeckPage() {
  return <DeckClient />;
}

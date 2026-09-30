// Route: /why-local/ — retired consultancy page (noindex). See components/Retired.tsx.
import type { Metadata } from "next";
import Retired, { retiredMetadata } from "@/components/Retired";

export const metadata: Metadata = retiredMetadata("/why-local/");
export default function Page() { return <Retired />; }

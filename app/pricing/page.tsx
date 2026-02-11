// Route: /pricing (Redirects to /radix)
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function PricingRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/radix/');
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-1 mx-auto mb-4"></div>
        <p className="text-gray-600">Redirecting to Radix...</p>
      </div>
    </div>
  );
}

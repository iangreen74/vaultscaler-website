// Route: /solutions/training (Redirects to GPU Fleet Optimization)
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function TrainingRedirect() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to Hyperscale solutions page
    router.replace('/solutions/hyperscale/');
  }, [router]);

  return (
    <>
      <meta name="robots" content="noindex, follow" />
      <meta httpEquiv="refresh" content="0;url=/solutions/hyperscale/" />
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-1 mx-auto mb-4"></div>
          <p className="text-gray-600">Redirecting to Hyperscale & Frontier AI solutions...</p>
        </div>
      </div>
    </>
  );
}

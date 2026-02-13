// Redirect: /solutions/gpu-fleet-optimization → /solutions/hyperscale
'use client';

import { useEffect } from 'react';

export default function GPUFleetOptimizationRedirect() {
  useEffect(() => {
    window.location.replace('/solutions/hyperscale/');
  }, []);

  return (
    <>
      <meta name="robots" content="noindex, follow" />
      <meta httpEquiv="refresh" content="0;url=/solutions/hyperscale/" />
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-4">Redirecting to Hyperscale Solutions...</p>
          <p className="text-sm text-gray-500">
            If you are not redirected automatically, <a href="/solutions/hyperscale/" className="text-primary-3 font-semibold hover:underline">click here</a>.
          </p>
        </div>
      </div>
    </>
  );
}

// Redirect: /forgewing → https://forgewing.ai (official Forgewing landing page).
// The bespoke internal page was retired; this stub keeps old links from 404ing.
'use client';

import { useEffect } from 'react';

export default function ForgewingRedirect() {
  useEffect(() => {
    window.location.replace('https://forgewing.ai');
  }, []);

  return (
    <>
      <meta name="robots" content="noindex, follow" />
      <meta httpEquiv="refresh" content="0;url=https://forgewing.ai" />
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-4">Redirecting to forgewing.ai…</p>
          <p className="text-sm text-gray-500">
            If you are not redirected automatically,{' '}
            <a href="https://forgewing.ai" className="text-primary-3 font-semibold hover:underline">click here</a>.
          </p>
        </div>
      </div>
    </>
  );
}

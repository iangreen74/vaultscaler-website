// Redirect: /radix/core → /radix-core (route flattened in the VaultScaler realign)
'use client';

import { useEffect } from 'react';

export default function RadixCoreRedirect() {
  useEffect(() => {
    window.location.replace('/radix-core/');
  }, []);

  return (
    <>
      <meta name="robots" content="noindex, follow" />
      <meta httpEquiv="refresh" content="0;url=/radix-core/" />
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-4">Redirecting to Radix Core…</p>
          <p className="text-sm text-gray-500">
            If you are not redirected automatically,{' '}
            <a href="/radix-core/" className="text-primary-3 font-semibold hover:underline">click here</a>.
          </p>
        </div>
      </div>
    </>
  );
}

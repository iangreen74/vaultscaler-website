// Redirect: /solutions/corporate → /solutions/ml-teams
'use client';

import { useEffect } from 'react';

export default function CorporateRedirect() {
  useEffect(() => {
    window.location.replace('/solutions/ml-teams/');
  }, []);

  return (
    <>
      <meta name="robots" content="noindex, follow" />
      <meta httpEquiv="refresh" content="0;url=/solutions/ml-teams/" />
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-4">Redirecting to ML & AI Development Teams...</p>
          <p className="text-sm text-gray-500">
            If you are not redirected automatically, <a href="/solutions/ml-teams/" className="text-primary-3 font-semibold hover:underline">click here</a>.
          </p>
        </div>
      </div>
    </>
  );
}

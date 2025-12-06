'use client';

import Link from 'next/link';
import { trackCTAClick, trackEmailClick, trackDownload } from '@/lib/analytics';
import { ReactNode } from 'react';

interface TrackedLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  trackingName: string;
  trackingLocation?: string;
}

export function TrackedCTALink({
  href,
  children,
  className,
  trackingName,
  trackingLocation,
}: TrackedLinkProps) {
  return (
    <Link
      href={href}
      onClick={() => trackCTAClick(trackingName, trackingLocation)}
      className={className}
    >
      {children}
    </Link>
  );
}

interface TrackedEmailLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  trackingName: string;
}

export function TrackedEmailLink({
  href,
  children,
  className,
  trackingName,
}: TrackedEmailLinkProps) {
  return (
    <a
      href={href}
      onClick={() => trackEmailClick(trackingName)}
      className={className}
    >
      {children}
    </a>
  );
}

interface TrackedButtonProps {
  children: ReactNode;
  className?: string;
  trackingName: string;
  trackingLocation?: string;
  onClick?: () => void;
}

export function TrackedDownloadButton({
  children,
  className,
  trackingName,
  onClick,
}: TrackedButtonProps) {
  return (
    <button
      onClick={() => {
        trackDownload(trackingName);
        onClick?.();
      }}
      className={className}
    >
      {children}
    </button>
  );
}

import React from "react";

type VaultScalerLogoProps = {
  compact?: boolean;
};

export function VaultScalerLogo({ compact = false }: VaultScalerLogoProps) {
  const sizeClass = compact
    ? "h-7 md:h-8 w-auto"
    : "h-10 md:h-12 w-auto";

  return (
    <div className="inline-flex items-center">
      <img
        src="/brand/vaultscaler-logo-dark.svg"
        alt="VaultScaler"
        className={sizeClass}
      />
    </div>
  );
}

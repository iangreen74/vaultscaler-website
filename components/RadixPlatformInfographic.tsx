// Radix Platform Market Positioning Infographic
// Shows how Core and Studio serve different levels of the AI stack

interface RadixPlatformInfographicProps {
  className?: string;
}

export default function RadixPlatformInfographic({ className = "" }: RadixPlatformInfographicProps) {
  return (
    <div className={`w-full max-w-4xl mx-auto ${className}`}>
      <svg
        viewBox="0 0 800 520"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        role="img"
        aria-labelledby="infographic-title infographic-desc"
      >
        <title id="infographic-title">Radix Platform Market Positioning</title>
        <desc id="infographic-desc">
          Venn diagram showing how Radix Core serves all AI stack levels while Radix Studio serves model consumers
        </desc>

        <defs>
          {/* Gradients */}
          <linearGradient id="coreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#052152" />
            <stop offset="100%" stopColor="#031432" />
          </linearGradient>
          <linearGradient id="studioGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00e3ae" />
            <stop offset="100%" stopColor="#00d9a6" />
          </linearGradient>

          {/* Clip paths for Venn overlap effects */}
          <clipPath id="leftCircleClip">
            <circle cx="250" cy="200" r="160" />
          </clipPath>
          <clipPath id="rightCircleClip">
            <circle cx="550" cy="200" r="160" />
          </clipPath>
        </defs>

        {/* Background */}
        <rect width="800" height="520" fill="transparent" />

        {/* === VENN DIAGRAM === */}

        {/* Left Circle - Infrastructure (Core territory) */}
        <circle
          cx="250"
          cy="200"
          r="160"
          fill="#031432"
          opacity="0.95"
        />

        {/* Right Circle - Consumers (Studio territory) */}
        <circle
          cx="550"
          cy="200"
          r="160"
          fill="#00e3ae"
          opacity="0.9"
        />

        {/* Middle Overlap - Labs (Both territories) */}
        <ellipse
          cx="400"
          cy="200"
          rx="90"
          ry="140"
          fill="#041a42"
          opacity="0.98"
          clipPath="url(#leftCircleClip)"
        />
        <ellipse
          cx="400"
          cy="200"
          rx="90"
          ry="140"
          fill="#052152"
          opacity="0.85"
          clipPath="url(#rightCircleClip)"
        />

        {/* === LABELS - LEFT CIRCLE (Infrastructure) === */}
        <text x="160" y="160" fill="white" fontSize="16" fontWeight="600" textAnchor="middle">
          Data Center
        </text>
        <text x="160" y="220" fill="white" fontSize="16" fontWeight="600" textAnchor="middle">
          High Performance
        </text>
        <text x="160" y="242" fill="white" fontSize="16" fontWeight="600" textAnchor="middle">
          Compute
        </text>

        {/* === LABELS - MIDDLE (Labs) === */}
        <text x="400" y="150" fill="white" fontSize="15" fontWeight="600" textAnchor="middle">
          Frontier AI
        </text>
        <text x="400" y="172" fill="white" fontSize="15" fontWeight="600" textAnchor="middle">
          Labs
        </text>
        <text x="400" y="228" fill="white" fontSize="15" fontWeight="600" textAnchor="middle">
          Research
        </text>
        <text x="400" y="250" fill="white" fontSize="15" fontWeight="600" textAnchor="middle">
          Labs
        </text>

        {/* === LABELS - RIGHT CIRCLE (Consumers) === */}
        <text x="610" y="130" fill="#020e24" fontSize="15" fontWeight="600" textAnchor="middle">
          Medical
        </text>
        <text x="630" y="175" fill="#020e24" fontSize="15" fontWeight="600" textAnchor="middle">
          FinTech
        </text>
        <text x="640" y="220" fill="#020e24" fontSize="15" fontWeight="600" textAnchor="middle">
          Industry
        </text>
        <text x="620" y="265" fill="#020e24" fontSize="15" fontWeight="600" textAnchor="middle">
          Consumer
        </text>

        {/* === PRODUCT BOXES === */}

        {/* Radix Core - Spans ALL (full width under diagram) */}
        <rect
          x="50"
          y="400"
          width="440"
          height="90"
          rx="12"
          fill="url(#coreGradient)"
        />
        <text x="270" y="438" fill="white" fontSize="22" fontWeight="700" textAnchor="middle">
          Radix Core
        </text>
        <text x="270" y="468" fill="white" fontSize="14" opacity="0.85" textAnchor="middle">
          Training Efficiency at Scale
        </text>

        {/* Radix Studio - Right side only (consumers) */}
        <rect
          x="510"
          y="400"
          width="240"
          height="90"
          rx="12"
          fill="url(#studioGradient)"
        />
        <text x="630" y="438" fill="#020e24" fontSize="22" fontWeight="700" textAnchor="middle">
          Radix Studio
        </text>
        <text x="630" y="468" fill="#020e24" fontSize="14" opacity="0.85" textAnchor="middle">
          Inference Policy & Control
        </text>

        {/* === CONNECTOR LINES (subtle) === */}
        {/* Core connects to all three segments */}
        <line x1="160" y1="360" x2="160" y2="400" stroke="#052152" strokeWidth="2" strokeDasharray="4,4" opacity="0.5" />
        <line x1="400" y1="340" x2="350" y2="400" stroke="#052152" strokeWidth="2" strokeDasharray="4,4" opacity="0.5" />

        {/* Studio connects to right segment only */}
        <line x1="580" y1="360" x2="600" y2="400" stroke="#00d9a6" strokeWidth="2" strokeDasharray="4,4" opacity="0.6" />

      </svg>
    </div>
  );
}

// Standalone SVG export for slides/decks
export function getStandaloneSVG(): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg viewBox="0 0 800 520" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="coreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#052152"/>
      <stop offset="100%" stop-color="#031432"/>
    </linearGradient>
    <linearGradient id="studioGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00e3ae"/>
      <stop offset="100%" stop-color="#00d9a6"/>
    </linearGradient>
    <clipPath id="leftCircleClip">
      <circle cx="250" cy="200" r="160"/>
    </clipPath>
    <clipPath id="rightCircleClip">
      <circle cx="550" cy="200" r="160"/>
    </clipPath>
  </defs>

  <rect width="800" height="520" fill="white"/>

  <!-- Left Circle - Infrastructure -->
  <circle cx="250" cy="200" r="160" fill="#031432" opacity="0.95"/>

  <!-- Right Circle - Consumers -->
  <circle cx="550" cy="200" r="160" fill="#00e3ae" opacity="0.9"/>

  <!-- Middle Overlap -->
  <ellipse cx="400" cy="200" rx="90" ry="140" fill="#041a42" opacity="0.98" clip-path="url(#leftCircleClip)"/>
  <ellipse cx="400" cy="200" rx="90" ry="140" fill="#052152" opacity="0.85" clip-path="url(#rightCircleClip)"/>

  <!-- Labels - Left -->
  <text x="160" y="160" fill="white" font-size="16" font-weight="600" text-anchor="middle" font-family="system-ui, sans-serif">Data Center</text>
  <text x="160" y="220" fill="white" font-size="16" font-weight="600" text-anchor="middle" font-family="system-ui, sans-serif">High Performance</text>
  <text x="160" y="242" fill="white" font-size="16" font-weight="600" text-anchor="middle" font-family="system-ui, sans-serif">Compute</text>

  <!-- Labels - Middle -->
  <text x="400" y="150" fill="white" font-size="15" font-weight="600" text-anchor="middle" font-family="system-ui, sans-serif">Frontier AI</text>
  <text x="400" y="172" fill="white" font-size="15" font-weight="600" text-anchor="middle" font-family="system-ui, sans-serif">Labs</text>
  <text x="400" y="228" fill="white" font-size="15" font-weight="600" text-anchor="middle" font-family="system-ui, sans-serif">Research</text>
  <text x="400" y="250" fill="white" font-size="15" font-weight="600" text-anchor="middle" font-family="system-ui, sans-serif">Labs</text>

  <!-- Labels - Right -->
  <text x="610" y="130" fill="#020e24" font-size="15" font-weight="600" text-anchor="middle" font-family="system-ui, sans-serif">Medical</text>
  <text x="630" y="175" fill="#020e24" font-size="15" font-weight="600" text-anchor="middle" font-family="system-ui, sans-serif">FinTech</text>
  <text x="640" y="220" fill="#020e24" font-size="15" font-weight="600" text-anchor="middle" font-family="system-ui, sans-serif">Industry</text>
  <text x="620" y="265" fill="#020e24" font-size="15" font-weight="600" text-anchor="middle" font-family="system-ui, sans-serif">Consumer</text>

  <!-- Product Boxes -->
  <rect x="50" y="400" width="440" height="90" rx="12" fill="url(#coreGradient)"/>
  <text x="270" y="438" fill="white" font-size="22" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">Radix Core</text>
  <text x="270" y="468" fill="white" font-size="14" opacity="0.85" text-anchor="middle" font-family="system-ui, sans-serif">Training Efficiency at Scale</text>

  <rect x="510" y="400" width="240" height="90" rx="12" fill="url(#studioGradient)"/>
  <text x="630" y="438" fill="#020e24" font-size="22" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">Radix Studio</text>
  <text x="630" y="468" fill="#020e24" font-size="14" opacity="0.85" text-anchor="middle" font-family="system-ui, sans-serif">Inference Policy &amp; Control</text>

  <!-- Connector Lines -->
  <line x1="160" y1="360" x2="160" y2="400" stroke="#052152" stroke-width="2" stroke-dasharray="4,4" opacity="0.5"/>
  <line x1="400" y1="340" x2="350" y2="400" stroke="#052152" stroke-width="2" stroke-dasharray="4,4" opacity="0.5"/>
  <line x1="580" y1="360" x2="600" y2="400" stroke="#00d9a6" stroke-width="2" stroke-dasharray="4,4" opacity="0.6"/>
</svg>`;
}

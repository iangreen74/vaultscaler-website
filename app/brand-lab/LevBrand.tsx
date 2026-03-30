"use client";

import { useEffect, useRef, useState } from "react";

// Dark yellow / gold brand color
const BRAND_COLOR = "#d6b006";
const BRAND_COLOR_RGB = { r: 214, g: 176, b: 6 };

interface Particle {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  phase: number; // for floating motion
  settled: boolean;
}

function createParticles(
  count: number,
  canvasW: number,
  canvasH: number,
  underlineStartX: number,
  underlineEndX: number,
  underlineY: number,
  strokeThickness: number
): Particle[] {
  const particles: Particle[] = [];
  const underlineWidth = underlineEndX - underlineStartX;
  // Particle radius = half stroke thickness so they stack to full thickness
  const baseRadius = strokeThickness / 2;

  for (let i = 0; i < count; i++) {
    const t = i / (count - 1);
    const targetX = underlineStartX + t * underlineWidth;
    const targetY = underlineY;

    // Start scattered across the full canvas — floating in space
    const startX = Math.random() * canvasW;
    const startY = Math.random() * canvasH;

    particles.push({
      x: startX,
      y: startY,
      targetX,
      targetY,
      vx: (Math.random() - 0.5) * 0.3, // gentle lateral drift
      vy: (Math.random() - 0.5) * 0.3, // gentle vertical drift (not upward-biased)
      radius: baseRadius * (0.8 + Math.random() * 0.4),
      opacity: 0.15 + Math.random() * 0.25, // softer, more translucent
      phase: Math.random() * Math.PI * 2,
      settled: false,
    });
  }
  return particles;
}

function LevCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const startTimeRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;

    function resize() {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx!.scale(dpr, dpr);

      // Recompute particle targets based on canvas size
      const w = rect.width;
      const h = rect.height;

      // "Lev" text metrics — underline sits below the text
      const fontSize = Math.min(w * 0.28, 220);
      const textCenterX = w / 2;
      const textCenterY = h * 0.42;

      // Measure approximate text width
      ctx!.font = `600 ${fontSize}px "Inter", "SF Pro Display", "Segoe UI", system-ui, sans-serif`;
      const metrics = ctx!.measureText("Lev");
      const textWidth = metrics.width;

      // Stroke thickness ≈ fontSize * weight-factor (for weight 600, ~0.07)
      const strokeThickness = fontSize * 0.07;
      // Gap below baseline = strokeThickness, then underline center
      const textBottom = textCenterY + fontSize * 0.35;
      const underlineY = textBottom + strokeThickness + strokeThickness / 2;

      const underlineStartX = textCenterX - textWidth / 2;
      const underlineEndX = textCenterX + textWidth / 2;

      const PARTICLE_COUNT = Math.max(80, Math.floor(w / 4));

      particlesRef.current = createParticles(
        PARTICLE_COUNT,
        w,
        h,
        underlineStartX,
        underlineEndX,
        underlineY,
        strokeThickness
      );
      startTimeRef.current = performance.now();
    }

    resize();
    window.addEventListener("resize", resize);

    function draw(now: number) {
      if (!canvas || !ctx) return;

      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      const elapsed = (now - startTimeRef.current) / 1000;

      ctx.clearRect(0, 0, w, h);

      // Draw "Lev" text
      const fontSize = Math.min(w * 0.28, 220);
      ctx.font = `600 ${fontSize}px "Inter", "SF Pro Display", "Segoe UI", system-ui, sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = BRAND_COLOR;
      ctx.fillText("Lev", w / 2, h * 0.42);

      // Animate particles
      const convergeDuration = 1.5; // seconds to converge
      const convergeProgress = Math.min(elapsed / convergeDuration, 1);
      // Ease-out cubic
      const ease = 1 - Math.pow(1 - convergeProgress, 3);

      const particles = particlesRef.current;
      const strokeThickness = fontSize * 0.07;

      for (const p of particles) {
        // Floating phase — slow, lazy sine wave drift (buoyant, not frantic)
        const floatX = Math.sin(now / 2000 + p.phase) * (1 - ease) * 40;
        const floatY = Math.cos(now / 2500 + p.phase * 1.3) * (1 - ease) * 30;

        // Lerp toward target
        p.x = p.x + (p.targetX - p.x) * 0.05 + floatX * 0.01;
        p.y = p.y + (p.targetY - p.y) * 0.05 + floatY * 0.01;

        // Gentle ambient drift before settling
        if (ease < 0.7) {
          p.x += p.vx * (1 - ease);
          p.y += p.vy * (1 - ease);
        }

        // Once settled, subtle breathing
        const breathe = ease > 0.85
          ? Math.sin(now / 1200 + p.phase) * 0.8
          : 0;

        // Opacity ramps up as particles converge, but stays soft
        const drawOpacity = Math.min(0.85, p.opacity + ease * 0.55);

        // Draw soft-edged particle using radial gradient
        const drawX = p.x + breathe * 0.3;
        const drawY = p.y + breathe * 0.15;
        const drawR = p.radius * (1.2 + ease * 0.8); // larger, softer circles

        const grad = ctx.createRadialGradient(drawX, drawY, 0, drawX, drawY, drawR);
        grad.addColorStop(0, `rgba(${BRAND_COLOR_RGB.r}, ${BRAND_COLOR_RGB.g}, ${BRAND_COLOR_RGB.b}, ${drawOpacity})`);
        grad.addColorStop(0.5, `rgba(${BRAND_COLOR_RGB.r}, ${BRAND_COLOR_RGB.g}, ${BRAND_COLOR_RGB.b}, ${drawOpacity * 0.4})`);
        grad.addColorStop(1, `rgba(${BRAND_COLOR_RGB.r}, ${BRAND_COLOR_RGB.g}, ${BRAND_COLOR_RGB.b}, 0)`);

        ctx.beginPath();
        ctx.arc(drawX, drawY, drawR, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      }

      // Once fully settled, draw a faint graduated line connecting the dots
      if (ease > 0.85) {
        const lineOpacity = (ease - 0.85) / 0.15 * 0.35;
        const sorted = [...particles].sort((a, b) => a.targetX - b.targetX);
        if (sorted.length > 1) {
          const grad = ctx.createLinearGradient(
            sorted[0].targetX,
            0,
            sorted[sorted.length - 1].targetX,
            0
          );
          grad.addColorStop(0, `rgba(${BRAND_COLOR_RGB.r}, ${BRAND_COLOR_RGB.g}, ${BRAND_COLOR_RGB.b}, 0)`);
          grad.addColorStop(0.15, `rgba(${BRAND_COLOR_RGB.r}, ${BRAND_COLOR_RGB.g}, ${BRAND_COLOR_RGB.b}, ${lineOpacity})`);
          grad.addColorStop(0.85, `rgba(${BRAND_COLOR_RGB.r}, ${BRAND_COLOR_RGB.g}, ${BRAND_COLOR_RGB.b}, ${lineOpacity})`);
          grad.addColorStop(1, `rgba(${BRAND_COLOR_RGB.r}, ${BRAND_COLOR_RGB.g}, ${BRAND_COLOR_RGB.b}, 0)`);

          ctx.beginPath();
          ctx.moveTo(sorted[0].x, sorted[0].y);
          for (let i = 1; i < sorted.length; i++) {
            ctx.lineTo(sorted[i].x, sorted[i].y);
          }
          ctx.strokeStyle = grad;
          ctx.lineWidth = strokeThickness;
          ctx.stroke();
        }
      }

      animRef.current = requestAnimationFrame(draw);
    }

    animRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ display: "block" }}
    />
  );
}

// Favicon preview component
function FaviconPreview() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const size = 128;
    canvas.width = size;
    canvas.height = size;

    // White background
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, size, size);

    // Draw "L"
    ctx.font = `600 ${size * 0.7}px "Inter", "SF Pro Display", system-ui, sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = BRAND_COLOR;
    ctx.fillText("L", size / 2, size * 0.40);

    // Dotted underline
    const dotCount = 7;
    const startX = size * 0.2;
    const endX = size * 0.8;
    const y = size * 0.72;
    const dotRadius = 2.2;

    for (let i = 0; i < dotCount; i++) {
      const t = i / (dotCount - 1);
      const x = startX + t * (endX - startX);
      // Graduated opacity — brighter in center
      const centerDist = Math.abs(t - 0.5) * 2;
      const opacity = 1 - centerDist * 0.5;

      ctx.beginPath();
      ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${BRAND_COLOR_RGB.r}, ${BRAND_COLOR_RGB.g}, ${BRAND_COLOR_RGB.b}, ${opacity})`;
      ctx.fill();
    }
  }, []);

  return <canvas ref={canvasRef} className="rounded-lg border border-gray-200" style={{ width: 64, height: 64 }} />;
}

// Full-word favicon preview
function FaviconWordmark() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const size = 128;
    canvas.width = size;
    canvas.height = size;

    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, size, size);

    // Draw "Lev"
    ctx.font = `600 ${size * 0.38}px "Inter", "SF Pro Display", system-ui, sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = BRAND_COLOR;
    ctx.fillText("Lev", size / 2, size * 0.42);

    // Dotted underline
    const dotCount = 9;
    const tw = ctx.measureText("Lev").width;
    const startX = size / 2 - tw / 2;
    const endX = size / 2 + tw / 2;
    const y = size * 0.66;
    const dotRadius = 1.8;

    for (let i = 0; i < dotCount; i++) {
      const t = i / (dotCount - 1);
      const x = startX + t * (endX - startX);
      const centerDist = Math.abs(t - 0.5) * 2;
      const opacity = 1 - centerDist * 0.5;

      ctx.beginPath();
      ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${BRAND_COLOR_RGB.r}, ${BRAND_COLOR_RGB.g}, ${BRAND_COLOR_RGB.b}, ${opacity})`;
      ctx.fill();
    }
  }, []);

  return <canvas ref={canvasRef} className="rounded-lg border border-gray-200" style={{ width: 64, height: 64 }} />;
}

export default function LevBrand() {
  const [showReplay, setShowReplay] = useState(false);
  const [key, setKey] = useState(0);

  function replay() {
    setKey((k) => k + 1);
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Main hero — full viewport canvas */}
      <section className="h-screen relative">
        <LevCanvas key={key} />

        {/* Replay button */}
        <button
          onClick={replay}
          className="absolute bottom-8 right-8 text-sm text-gray-400 hover:text-gray-600 transition-colors border border-gray-200 rounded-full px-4 py-2"
        >
          Replay animation
        </button>
      </section>

      {/* Brand details */}
      <section className="max-w-3xl mx-auto px-6 py-20 space-y-16">
        {/* Static logo mark */}
        <div>
          <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-6">
            Logo — Static
          </h2>
          <div className="flex items-center gap-12">
            <div className="bg-white border border-gray-100 rounded-2xl p-12 flex items-center justify-center">
              <div className="relative">
                <span
                  className="text-7xl font-semibold tracking-tight"
                  style={{
                    color: BRAND_COLOR,
                    fontFamily: '"Inter", "SF Pro Display", system-ui, sans-serif',
                  }}
                >
                  Lev
                </span>
                {/* Graduated dot underline */}
                <div className="flex items-center justify-center gap-[5px] mt-1">
                  {Array.from({ length: 11 }).map((_, i) => {
                    const t = i / 10;
                    const centerDist = Math.abs(t - 0.5) * 2;
                    const opacity = 1 - centerDist * 0.6;
                    const size = 3 + (1 - centerDist) * 2;
                    return (
                      <span
                        key={i}
                        className="rounded-full inline-block"
                        style={{
                          width: size,
                          height: size,
                          backgroundColor: BRAND_COLOR,
                          opacity,
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Dark background variant */}
            <div className="bg-gray-900 rounded-2xl p-12 flex items-center justify-center">
              <div className="relative">
                <span
                  className="text-7xl font-semibold tracking-tight"
                  style={{
                    color: "#E8B84D",
                    fontFamily: '"Inter", "SF Pro Display", system-ui, sans-serif',
                  }}
                >
                  Lev
                </span>
                <div className="flex items-center justify-center gap-[5px] mt-1">
                  {Array.from({ length: 11 }).map((_, i) => {
                    const t = i / 10;
                    const centerDist = Math.abs(t - 0.5) * 2;
                    const opacity = 1 - centerDist * 0.6;
                    const size = 3 + (1 - centerDist) * 2;
                    return (
                      <span
                        key={i}
                        className="rounded-full inline-block"
                        style={{
                          width: size,
                          height: size,
                          backgroundColor: "#E8B84D",
                          opacity,
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Underline variations */}
        <div>
          <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-6">
            Underline Treatments
          </h2>
          <div className="grid grid-cols-3 gap-6">
            {/* Solid */}
            <div className="border border-gray-100 rounded-2xl p-8 flex flex-col items-center gap-3">
              <span
                className="text-4xl font-semibold"
                style={{ color: BRAND_COLOR, fontFamily: '"Inter", system-ui, sans-serif' }}
              >
                Lev
              </span>
              <div
                className="w-[72px] h-[2.5px] rounded-full"
                style={{ backgroundColor: BRAND_COLOR }}
              />
              <span className="text-xs text-gray-400 mt-2">Solid</span>
            </div>

            {/* Graduated */}
            <div className="border border-gray-100 rounded-2xl p-8 flex flex-col items-center gap-3">
              <span
                className="text-4xl font-semibold"
                style={{ color: BRAND_COLOR, fontFamily: '"Inter", system-ui, sans-serif' }}
              >
                Lev
              </span>
              <div
                className="w-[72px] h-[2.5px] rounded-full"
                style={{
                  background: `linear-gradient(to right, transparent, ${BRAND_COLOR} 20%, ${BRAND_COLOR} 80%, transparent)`,
                }}
              />
              <span className="text-xs text-gray-400 mt-2">Graduated</span>
            </div>

            {/* Dots */}
            <div className="border border-gray-100 rounded-2xl p-8 flex flex-col items-center gap-3">
              <span
                className="text-4xl font-semibold"
                style={{ color: BRAND_COLOR, fontFamily: '"Inter", system-ui, sans-serif' }}
              >
                Lev
              </span>
              <div className="flex items-center gap-[3px]">
                {Array.from({ length: 9 }).map((_, i) => {
                  const t = i / 8;
                  const centerDist = Math.abs(t - 0.5) * 2;
                  const opacity = 1 - centerDist * 0.6;
                  const sz = 2.5 + (1 - centerDist) * 1.5;
                  return (
                    <span
                      key={i}
                      className="rounded-full inline-block"
                      style={{
                        width: sz,
                        height: sz,
                        backgroundColor: BRAND_COLOR,
                        opacity,
                      }}
                    />
                  );
                })}
              </div>
              <span className="text-xs text-gray-400 mt-2">Graduated dots</span>
            </div>
          </div>
        </div>

        {/* Color */}
        <div>
          <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-6">
            Color
          </h2>
          <div className="flex items-center gap-6">
            <div
              className="w-20 h-20 rounded-xl shadow-sm border border-gray-100"
              style={{ backgroundColor: BRAND_COLOR }}
            />
            <div>
              <p className="text-lg font-mono font-medium" style={{ color: BRAND_COLOR }}>
                {BRAND_COLOR}
              </p>
              <p className="text-sm text-gray-400">
                RGB({BRAND_COLOR_RGB.r}, {BRAND_COLOR_RGB.g}, {BRAND_COLOR_RGB.b})
              </p>
              <p className="text-sm text-gray-400 mt-1">
                Dark gold — warmth, trust, premium
              </p>
            </div>
          </div>
        </div>

        {/* Favicons */}
        <div>
          <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-6">
            Favicon Options
          </h2>
          <div className="flex items-center gap-8">
            <div className="flex flex-col items-center gap-2">
              <FaviconPreview />
              <span className="text-xs text-gray-400">L + dots</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <FaviconWordmark />
              <span className="text-xs text-gray-400">Lev wordmark</span>
            </div>
          </div>
        </div>

        {/* Concept */}
        <div className="border-t border-gray-100 pt-12">
          <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">
            Concept
          </h2>
          <div className="text-gray-600 space-y-3 text-[15px] leading-relaxed">
            <p>
              <strong className="text-gray-800">Lev</strong> — from the Hebrew &ldquo;heart&rdquo; and evocative of <em>levity</em>, <em>elevation</em>, <em>leverage</em>.
            </p>
            <p>
              The particle animation captures the core feeling: scattered points of effort floating weightlessly, then converging into a single, purposeful line. The graduated dot underline carries this through to the static mark — individual elements working in concert, with more weight at center and lightness at the edges.
            </p>
            <p>
              The dark gold conveys warmth and premium quality without corporate coldness.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

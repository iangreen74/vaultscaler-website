"use client";

import Image, { type StaticImageData } from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ParallaxAni({
  src,
  startY = "-26%",
  endY = "20%",
}: {
  src: StaticImageData;
  // Vertical position knobs — controlled from page.tsx so mobile/desktop can be tuned independently.
  // startY: where Ani begins (negative = up, clipped by section overflow-hidden). Default "-26%".
  // endY: where Ani drifts to as you scroll. Default "20%".
  startY?: string;
  endY?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  // Tracks scroll progress of this element: 0 = top of element at top of viewport, 1 = bottom of element at top of viewport.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [startY, endY]);
  // X drift: start = baseline horizontal offset (positive = right, clips off right edge). End = where it drifts to (smaller = left drift on scroll).
  const x = useTransform(scrollYProgress, [0, 1], ["30%", "10%"]);

  return (
    // w-[70%]/w-[63%] controls image size. top-0 right-0 anchors it to top-right of the hero section.
    <div ref={ref} className="pointer-events-none hidden min-[800px]:block absolute top-0 right-0 w-[90%] xl:w-[83%]">
      {/* style={{ x, y }} overrides any Tailwind translate classes — bake baseline offsets into the x/y useTransform values above, not here. */}
      <motion.div style={{ x, y }}>
        <Image
          src={src}
          alt="Ani — Forgewing's winged anvil mascot"
          className="w-full h-auto"
          sizes="63vw"
        />
      </motion.div>
    </div>
  );
}

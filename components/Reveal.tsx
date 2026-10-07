"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  yOffset?: number;
  className?: string;
}

const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

// Server HTML is always visible, so content in the first screen paints immediately (good LCP, and
// readable without JavaScript). Only blocks that start below the fold are hidden on mount and
// revealed when scrolled into view.
export default function Reveal({
  children,
  width = "100%",
  delay = 0,
  yOffset = 40,
  className = "",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [armed, setArmed] = useState(false);

  useIsoLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduce && el.getBoundingClientRect().top > window.innerHeight) setArmed(true);
  }, []);

  const hidden = armed && !inView;

  return (
    <div style={{ position: "relative", width }} className={className}>
      <motion.div
        ref={ref}
        initial={false}
        animate={hidden ? { opacity: 0, y: yOffset } : { opacity: 1, y: 0 }}
        transition={hidden ? { duration: 0 } : { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  yOffset?: number;
  className?: string;
}

// Server HTML is always visible, so content in the first screen paints immediately (good LCP, and
// readable without JavaScript). Blocks that start below the fold fade up once when scrolled into view.
// Plain CSS transitions driven by IntersectionObserver: GPU-composited, zero forced reflow.
export default function Reveal({
  children,
  width = "100%",
  delay = 0,
  yOffset = 16,
  className = "",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"static" | "hidden" | "shown">("static");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // On mobile devices and reduced motion, keep static (instant, zero main-thread CPU)
    if (window.innerWidth < 768 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let initial = true;
    const io = new IntersectionObserver(
      ([e]) => {
        if (initial) {
          initial = false;
          // If already in view on first observation, leave as static
          if (e.isIntersecting) {
            io.disconnect();
            return;
          }
          // Below the fold: hide so it can fade in when scrolled into view
          setState("hidden");
          return;
        }

        if (e.isIntersecting) {
          setState("shown");
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const style: React.CSSProperties =
    state === "static"
      ? {}
      : {
          opacity: state === "shown" ? 1 : 0,
          transform: state === "shown" ? "none" : `translate3d(0, ${Math.min(yOffset, 24)}px, 0)`,
          transition:
            state === "shown"
              ? `opacity 0.42s cubic-bezier(0.16, 1, 0.3, 1) ${Math.min(delay, 0.2)}s, transform 0.42s cubic-bezier(0.16, 1, 0.3, 1) ${Math.min(delay, 0.2)}s`
              : "none",
        };

  return (
    <div data-reveal style={{ position: "relative", width }} className={className}>
      <div ref={ref} style={style}>
        {children}
      </div>
    </div>
  );
}

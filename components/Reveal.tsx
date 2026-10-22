"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  yOffset?: number;
  className?: string;
}

const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

// Server HTML is always visible, so content in the first screen paints immediately (good LCP, and
// readable without JavaScript). Blocks that start below the fold fade up once when scrolled into view.
// Plain CSS transitions driven by one IntersectionObserver per block: GPU-composited, no animation
// library on the main thread, so scrolling stays smooth on low-end laptops and phones.
export default function Reveal({
  children,
  width = "100%",
  delay = 0,
  yOffset = 16,
  className = "",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"static" | "hidden" | "shown">("static");

  useIsoLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || el.getBoundingClientRect().top <= window.innerHeight) return;
    setState("hidden");
    const io = new IntersectionObserver(
      ([e]) => {
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
              ? `opacity 0.55s cubic-bezier(0.16, 1, 0.3, 1) ${Math.min(delay, 0.3)}s, transform 0.55s cubic-bezier(0.16, 1, 0.3, 1) ${Math.min(delay, 0.3)}s`
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

"use client";

import { useEffect, useRef, useState } from "react";

export default function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // eslint-disable-next-line prefer-const
    let fallbackTimeout: NodeJS.Timeout;

    // Use IntersectionObserver with a very low threshold (1%) to trigger immediately when entering viewport
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
          if (fallbackTimeout) clearTimeout(fallbackTimeout);
        }
      },
      { threshold: 0.01, rootMargin: "0px 0px -10px 0px" }
    );
    obs.observe(el);

    // Fallback: force visibility after 1 second in case observer fails to trigger
    fallbackTimeout = setTimeout(() => {
      setVisible(true);
      obs.disconnect();
    }, 1000);

    return () => {
      obs.disconnect();
      if (fallbackTimeout) clearTimeout(fallbackTimeout);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(12px)",
        transition: `opacity 0.55s cubic-bezier(0.22,0.61,0.36,1) ${delay}ms, transform 0.55s cubic-bezier(0.22,0.61,0.36,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

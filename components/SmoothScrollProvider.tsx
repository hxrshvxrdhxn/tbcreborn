"use client";

import { ReactNode, useEffect, useState } from "react";
import dynamic from "next/dynamic";

const ReactLenis = dynamic(
  () => import("lenis/react").then((mod) => mod.ReactLenis),
  { ssr: false }
);

export default function SmoothScrollProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    // Only enable Lenis on desktop pointer devices with fine control (mouse wheel)
    // On mobile and touch screens, native momentum scrolling is smoother, lighter, and zero-CPU.
    if (window.matchMedia("(pointer: fine) and (min-width: 1024px)").matches) {
      setIsTouch(false);
    }
  }, []);

  if (isTouch) {
    return <>{children}</>;
  }

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
        duration: 1.2,
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}

"use client";

import { useEffect, useState } from "react";

// Calm line-motion loop behind the home hero. Desktop only, and only when motion is welcome:
// the video element is mounted client-side, so phones never download it and the headline stays the LCP.
const QUERY = "(min-width: 768px) and (prefers-reduced-motion: no-preference)";

export default function HeroLines() {
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(QUERY);
    const update = () => setPlay(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <div
      className="absolute inset-0 z-0 hidden md:block bg-cover bg-right"
      style={{ backgroundImage: "url(/img/hero-lines-poster.jpg)" }}
      aria-hidden="true"
    >
      {play && (
        <video
          className="absolute inset-0 h-full w-full object-cover object-right"
          autoPlay
          muted
          loop
          playsInline
          poster="/img/hero-lines-poster.jpg"
        >
          <source src="/video/hero-lines.webm" type="video/webm" />
          <source src="/video/hero-lines.mp4" type="video/mp4" />
        </video>
      )}
    </div>
  );
}

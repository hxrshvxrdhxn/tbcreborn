"use client";

import { useEffect, useRef } from "react";

// Two flowing ribbons of fine lines behind the home hero, drawn live on a canvas at the screen's own
// pixel density, so they stay sharp on retina and 4K displays (the old 1080p video went soft and banded).
// Animates only while the hero is on screen and the tab is visible; reduced-motion users and phones get
// a single still frame.

const LINE = "207, 232, 218"; // #CFE8DA
type Ribbon = { lines: number; y: number; amp: number; freq: number; speed: number; spread: number; twist: number; alpha: number };

const RIBBONS: Ribbon[] = [
  { lines: 40, y: 0.45, amp: 0.12, freq: 1.1, speed: 0.07, spread: 0.09, twist: 0.9, alpha: 0.3 },
  { lines: 32, y: 0.58, amp: 0.14, freq: 0.85, speed: -0.05, spread: 0.13, twist: 1.3, alpha: 0.26 },
];

function draw(ctx: CanvasRenderingContext2D, w: number, h: number, t: number, fade: CanvasGradient) {
  ctx.clearRect(0, 0, w, h);
  ctx.lineWidth = Math.max(0.6, w / 2400);
  ctx.strokeStyle = fade; // one shared left-to-right fade; per-line strength comes from globalAlpha
  const step = Math.max(10, w / 110);
  for (const r of RIBBONS) {
    for (let i = 0; i < r.lines; i++) {
      const k = i / (r.lines - 1) - 0.5; // -0.5 … 0.5 across the ribbon
      ctx.globalAlpha = r.alpha * (1.15 - Math.abs(k) * 1.4); // brighter towards the ribbon's centre
      ctx.beginPath();
      for (let x = -step; x <= w + step; x += step) {
        const u = x / w;
        const phase = u * Math.PI * 2 * r.freq + t * r.speed * Math.PI * 2;
        // the ribbon's width breathes along its length, which gives the twisted look
        const width = r.spread * Math.sin(u * Math.PI * r.twist + t * 0.15 + 1.2);
        const y = h * (r.y + r.amp * Math.sin(phase) + k * width);
        if (x === -step) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
    }
  }
  ctx.globalAlpha = 1;
}

export default function HeroLines() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const still = window.matchMedia("(prefers-reduced-motion: reduce), (max-width: 767px)");
    let w = 0, h = 0, raf = 0, visible = true, last = 0, scale = Math.min(window.devicePixelRatio || 1, 2);
    let frozen = false, slowFrames = 0, sampled = 0;
    let fade: CanvasGradient;
    const start = performance.now();
    const at = (now: number) => (now - start) / 1000;

    const resize = () => {
      const box = canvas.getBoundingClientRect();
      w = Math.round(box.width * scale);
      h = Math.round(box.height * scale);
      canvas.width = w;
      canvas.height = h;
      fade = ctx.createLinearGradient(0, 0, w, 0);
      // keep the left side, where the headline sits, almost clear
      fade.addColorStop(0, `rgba(${LINE}, 0)`);
      fade.addColorStop(0.4, `rgba(${LINE}, 0.12)`);
      fade.addColorStop(0.65, `rgba(${LINE}, 0.85)`);
      fade.addColorStop(1, `rgba(${LINE}, 1)`);
      draw(ctx, w, h, at(performance.now()), fade);
    };

    // Adaptive quality: if a frame costs too much on this machine, drop to 1x, then to a still frame.
    const loop = (now: number) => {
      raf = requestAnimationFrame(loop);
      if (now - last < 33) return; // ~30 fps is plenty for slow motion and halves the work
      last = now;
      const t0 = performance.now();
      draw(ctx, w, h, at(now), fade);
      if (sampled < 30) {
        sampled++;
        if (performance.now() - t0 > 8) slowFrames++;
        if (slowFrames >= 5) {
          slowFrames = 0;
          sampled = 0;
          if (scale > 1) { scale = 1; resize(); }
          else { frozen = true; cancelAnimationFrame(raf); }
        }
      }
    };

    const play = () => {
      cancelAnimationFrame(raf);
      if (!frozen && visible && !still.matches && document.visibilityState === "visible") raf = requestAnimationFrame(loop);
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; play(); });
    io.observe(canvas);
    document.addEventListener("visibilitychange", play);
    still.addEventListener("change", play);
    resize();
    play();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", play);
      still.removeEventListener("change", play);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 bg-gradient-to-br from-forest via-forest to-[#1d6a46]" aria-hidden="true">
      <canvas ref={ref} className="absolute inset-0 h-full w-full" />
    </div>
  );
}

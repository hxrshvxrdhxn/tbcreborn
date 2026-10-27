"use client";

import { useState } from "react";

// Click-to-play YouTube embed. Until the visitor presses play the page shows only our own poster
// image: no YouTube scripts, cookies or network requests, so the page stays fast and private.
// The player loads from youtube-nocookie.com and starts playing on the same click.
export default function YouTubeLite({ id, title, poster }: { id: string; title: string; poster: string }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-video w-full max-w-full overflow-hidden rounded-2xl bg-forest ring-1 ring-black/5 shadow-[0_20px_50px_-20px_rgba(11,26,18,0.35)]">
      {playing ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 h-full w-full cursor-pointer focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-[-4px] focus-visible:outline-gold"
          aria-label={`Play video: ${title}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={poster} alt="" width={1280} height={720} loading="lazy" decoding="async" className="h-full w-full object-cover" />
          <span className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" aria-hidden="true" />
          <span
            className="absolute left-1/2 top-1/2 flex h-[72px] w-[72px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-royal text-white shadow-lg transition-transform duration-200 group-hover:scale-105"
            aria-hidden="true"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13l11-6.5z" /></svg>
          </span>
          <span className="absolute bottom-4 left-5 right-5 text-left font-display text-[15px] font-semibold text-white drop-shadow" aria-hidden="true">
            {title}
          </span>
        </button>
      )}
    </div>
  );
}

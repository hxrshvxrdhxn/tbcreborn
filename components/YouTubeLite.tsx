"use client";

import { useState } from "react";

// Click-to-play YouTube embed. Until the visitor presses play the page shows only our own poster
// image or YouTube thumbnail: no YouTube scripts, cookies or network requests, so the page stays fast and private.
// The player loads from youtube-nocookie.com on the same click with no autoplay prior to user action.
export default function YouTubeLite({
  id,
  title,
  poster,
  isShort = false,
  className = "",
}: {
  id: string;
  title: string;
  poster?: string;
  isShort?: boolean;
  className?: string;
}) {
  const [playing, setPlaying] = useState(false);

  // Fallback to high quality YouTube thumbnail if no local poster was passed
  const thumbnail = poster || `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

  if (isShort) {
    return (
      <div
        className={`relative aspect-[9/16] w-full max-w-[320px] mx-auto overflow-hidden rounded-[8px] bg-forest ring-1 ring-black/10 shadow-[0_16px_40px_-16px_rgba(11,26,18,0.3)] ${className}`}
      >
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
            aria-label={`Play YouTube Short: ${title}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={thumbnail}
              alt=""
              width={720}
              height={1280}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" aria-hidden="true" />
            <span
              className="absolute left-1/2 top-1/2 flex h-[60px] w-[60px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-royal text-white shadow-lg transition-transform duration-200 group-hover:scale-110"
              aria-hidden="true"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5.5v13l11-6.5z" />
              </svg>
            </span>
            <span className="absolute bottom-3 left-4 right-4 text-left font-display text-[14px] font-semibold text-white drop-shadow leading-snug line-clamp-2" aria-hidden="true">
              {title}
            </span>
          </button>
        )}
      </div>
    );
  }

  return (
    <div
      className={`relative aspect-video w-full max-w-full overflow-hidden rounded-[8px] bg-forest ring-1 ring-black/5 shadow-[0_20px_50px_-20px_rgba(11,26,18,0.35)] ${className}`}
    >
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
          <img
            src={thumbnail}
            alt=""
            width={1280}
            height={720}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" aria-hidden="true" />
          <span
            className="absolute left-1/2 top-1/2 flex h-[72px] w-[72px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-royal text-white shadow-lg transition-transform duration-200 group-hover:scale-105"
            aria-hidden="true"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5.5v13l11-6.5z" />
            </svg>
          </span>
          <span className="absolute bottom-4 left-5 right-5 text-left font-display text-[15px] font-semibold text-white drop-shadow" aria-hidden="true">
            {title}
          </span>
        </button>
      )}
    </div>
  );
}

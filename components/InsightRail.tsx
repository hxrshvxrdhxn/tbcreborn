"use client";

import { useRef } from "react";
import Link from "next/link";

type Post = { slug: string; title: string; category: string; date: string; readTime?: string; excerpt?: string };

// A horizontal row of recent writing: the newest piece large on the left, the rest as a scrolling row.
// Native scroll with snap points, so it works with touch, trackpad, keyboard and screen readers;
// the arrow buttons only nudge the scroll position.
export default function InsightRail({ posts }: { posts: Post[] }) {
  const track = useRef<HTMLUListElement>(null);
  const nudge = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.8, 680), behavior: "smooth" });
  };

  return (
    <div>
      <ul
        ref={track}
        className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 [scrollbar-width:thin]"
        aria-label="Recent writing"
      >
        {posts.map((post, i) => (
          <li key={post.slug} className={`snap-start shrink-0 ${i === 0 ? "w-[86%] sm:w-[560px]" : "w-[78%] sm:w-[300px]"}`}>
            <Link
              href={`/blog/${post.slug}`}
              className={`group/card flex h-full min-h-[300px] flex-col justify-between rounded-2xl p-6 transition-colors duration-200 ${
                i === 0 ? "bg-forest text-white" : "bg-ivory border border-light-grey hover:border-royal"
              }`}
            >
              <span
                className={`inline-flex w-fit rounded-full px-3 py-1 text-[12px] font-semibold ${
                  i === 0 ? "bg-white/10 text-white" : "bg-royal-light text-royal"
                }`}
              >
                {post.category}
              </span>
              <div>
                <h3
                  className={`font-display font-bold leading-snug text-balance transition-colors ${
                    i === 0 ? "text-[26px] sm:text-[30px]" : "text-[19px] text-ink group-hover/card:text-royal"
                  }`}
                >
                  {post.title}
                </h3>
                {i === 0 && post.excerpt && <p className="mt-3 text-[15px] leading-relaxed text-white/75 line-clamp-3">{post.excerpt}</p>}
                <p className={`mt-5 text-[13px] ${i === 0 ? "text-white/70" : "text-mid-grey"}`}>
                  {post.date}
                  {post.readTime ? ` · ${post.readTime}` : ""}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-4 hidden sm:flex gap-2">
        <button type="button" onClick={() => nudge(-1)} aria-label="Scroll back" className="h-10 w-10 rounded-full border border-light-grey text-ink hover:border-royal hover:text-royal transition-colors">
          ←
        </button>
        <button type="button" onClick={() => nudge(1)} aria-label="Scroll forward" className="h-10 w-10 rounded-full border border-light-grey text-ink hover:border-royal hover:text-royal transition-colors">
          →
        </button>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const revalidate = 3600; // ISR — re-check for new posts every hour

export const metadata: Metadata = {
  title: "Insight & Thinking | Turbo Bytes Consulting Blog",
  description:
    "AI strategy, business intelligence, and industry thinking from Turbo Bytes Consulting.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Insight & Thinking | Turbo Bytes Consulting Blog",
    description:
      "AI strategy, business intelligence, and industry thinking from Turbo Bytes Consulting.",
    url: "https://turbobytesconsulting.com/blog",
    images: [{ url: "/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Insight & Thinking | Turbo Bytes Consulting Blog",
    description:
      "AI strategy, business intelligence, and industry thinking from Turbo Bytes Consulting.",
  },
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-ink py-24">
        <div className="container-tbc">
          <span className="eyebrow">INSIGHT</span>
          <hr className="gold-rule mb-6" />
          <h1 className="font-display font-bold text-white text-[clamp(32px,4.5vw,48px)] leading-[1.15] tracking-[-0.5px] max-w-3xl mb-5">
            Thinking on AI, strategy, and what comes next.
          </h1>
          <p className="font-sans text-[17px] text-white/70 leading-relaxed">
            Intelligence. Frameworks. Perspective.
          </p>
        </div>
      </section>

      {/* ── BLOG GRID ── */}
      <section className="bg-ivory py-20">
        <div className="container-tbc">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-white border border-light-grey rounded-[8px] shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-200 ease-tbc flex flex-col"
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="flex flex-col flex-1 p-7 group"
                >
                  <span className="font-display font-bold text-[12px] text-royal uppercase tracking-[1.5px] mb-4">
                    {post.category}
                  </span>
                  <h2 className="font-display font-bold text-[19px] text-ink leading-snug mb-3 group-hover:text-royal transition-colors duration-150">
                    {post.title}
                  </h2>
                  <p className="font-sans text-[15px] text-mid-grey leading-relaxed mb-auto">
                    {post.excerpt}
                  </p>
                  <p className="font-sans text-[13px] text-mid-grey mt-6">
                    {post.date} · {post.readTime}
                  </p>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

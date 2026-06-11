import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import Reveal from "@/components/Reveal";

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
      {/* ── BREADCRUMB ── */}
      <nav aria-label="Breadcrumb" className="bg-ivory border-b border-light-grey">
        <div className="container-tbc py-3">
          <ol className="flex items-center gap-2 font-sans text-[13px] text-mid-grey">
            <li>
              <Link href="/" className="hover:text-ink transition-colors duration-150">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-light-grey select-none">
              /
            </li>
            <li className="text-ink font-semibold">
              Insight
            </li>
          </ol>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="bg-ink py-s7 relative overflow-hidden min-h-[350px] flex items-center border-b border-light-grey">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink to-royal/20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent" />
        </div>

        <div className="container-tbc relative z-10">
          <Reveal>
            <span className="eyebrow text-gold">INSIGHT</span>
            <hr className="gold-rule mb-6" />
            <h1 className="font-display font-bold text-white text-[clamp(32px,4.5vw,48px)] leading-[1.15] tracking-[-0.5px] max-w-3xl mb-5">
              Thinking on AI, strategy, and what comes next.
            </h1>
            <p className="font-sans text-[17px] text-white/70 leading-relaxed">
              Intelligence. Frameworks. Perspective.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── BLOG GRID ── */}
      <section className="bg-ivory py-s7 min-h-[50vh]">
        <div className="container-tbc">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 30}>
                <article
                  className="bg-white border border-light-grey rounded-[8px] shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-200 ease-tbc flex flex-col h-full"
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
                    <div className="flex items-center gap-2 mt-6 font-sans text-[13px] text-mid-grey">
                      <time dateTime={new Date(post.date).toISOString()}>
                        {post.date}
                      </time>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

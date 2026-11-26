import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import Reveal from "@/components/Reveal";

export const revalidate = 300; // Rebuilt at most every 5 minutes, not on every visit (this was what used up the Vercel CPU quota)

export const metadata: Metadata = {
  title: { absolute: "Insight & Thinking | Turbo Bytes Consulting Blog" },
  description:
    "Practical AI strategy, systems architecture, automation guides, and industry perspectives for founders and engineering leaders from Turbo Bytes Consulting.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: { absolute: "Insight & Thinking | Turbo Bytes Consulting Blog" },
    description:
      "Practical AI strategy, systems architecture, automation guides, and industry perspectives for founders and engineering leaders from Turbo Bytes Consulting.",
    url: "https://turbobytesconsulting.com/blog",
    images: [{ url: "/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: { absolute: "Insight & Thinking | Turbo Bytes Consulting Blog" },
    description:
      "Practical AI strategy, systems architecture, automation guides, and industry perspectives for founders and engineering leaders from Turbo Bytes Consulting.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Blog",
      "@id": "https://turbobytesconsulting.com/blog#blog",
      url: "https://turbobytesconsulting.com/blog",
      name: "Insight & Thinking | Turbo Bytes Consulting Blog",
      description: "Practical AI strategy, systems architecture, automation guides, and industry perspectives for founders and engineering leaders.",
      publisher: { "@id": "https://turbobytesconsulting.com/#organization" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://turbobytesconsulting.com" },
        { "@type": "ListItem", position: 2, name: "Insight", item: "https://turbobytesconsulting.com/blog" },
      ],
    },
  ],
};

const POSTS_PER_PAGE = 24;

interface BlogPageProps {
  searchParams?: { page?: string };
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const allPosts = await getAllPosts();
  const rawPage = parseInt(searchParams?.page || "1", 10) || 1;
  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);
  const currentPage = Math.max(1, Math.min(rawPage, totalPages || 1));
  const posts = allPosts.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
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
      <section className="bg-forest py-s7 relative overflow-hidden min-h-[350px] flex items-center border-b border-light-grey">
        <div className="container-tbc relative z-10">
          <Reveal>
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
              <Reveal key={post.slug} delay={i * 0.04}>
                <article
                  className="bg-white border border-light-grey rounded-[8px] shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-200 ease-tbc flex flex-col h-full"
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex flex-col flex-1 p-7 group"
                  >
                    <span className="font-display font-semibold text-[13px] text-royal mb-3">
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

          {/* Pagination Navigation */}
          {totalPages > 1 && (
            <nav aria-label="Blog pagination" className="mt-12 flex items-center justify-center gap-3">
              {currentPage > 1 ? (
                <Link
                  href={currentPage === 2 ? "/blog" : `/blog?page=${currentPage - 1}`}
                  className="px-4 py-2.5 text-[14px] font-medium text-ink bg-white border border-light-grey rounded-[6px] hover:border-[#167A4E] transition-colors shadow-xs"
                >
                  &larr; Previous
                </Link>
              ) : (
                <span className="px-4 py-2.5 text-[14px] text-mid-grey/50 bg-white/50 border border-light-grey/50 rounded-[6px] cursor-not-allowed">
                  &larr; Previous
                </span>
              )}

              <div className="flex items-center gap-1.5 px-3 text-[14px] text-mid-grey">
                Page <span className="font-semibold text-ink px-1">{currentPage}</span> of {totalPages}
              </div>

              {currentPage < totalPages ? (
                <Link
                  href={`/blog?page=${currentPage + 1}`}
                  className="px-4 py-2.5 text-[14px] font-medium text-ink bg-white border border-light-grey rounded-[6px] hover:border-[#167A4E] transition-colors shadow-xs"
                >
                  Next &rarr;
                </Link>
              ) : (
                <span className="px-4 py-2.5 text-[14px] text-mid-grey/50 bg-white/50 border border-light-grey/50 rounded-[6px] cursor-not-allowed">
                  Next &rarr;
                </span>
              )}
            </nav>
          )}
        </div>
      </section>
    </>
  );
}

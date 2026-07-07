import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

export const revalidate = 3600;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.seoTitle || `${post.title} | TBC`,
    description: post.seoDescription || post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.excerpt,
      url: `https://turbobytesconsulting.com/blog/${post.slug}`,
      images: [{ url: "/og-default.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      {/* ── BREADCRUMB ── */}
      <nav aria-label="Breadcrumb" className="bg-ivory border-b border-light-grey">
        <div className="container-tbc py-3">
          <ol className="flex items-center gap-2 font-sans text-[13px] text-mid-grey">
            <li>
              <Link href="/blog" className="hover:text-royal transition-colors duration-150">
                Insight
              </Link>
            </li>
            <li aria-hidden="true" className="text-light-grey select-none">/</li>
            <li className="text-ink font-semibold truncate max-w-[240px]">
              {post.category}
            </li>
          </ol>
        </div>
      </nav>

      {/* ── POST HERO ── */}
      <section className="bg-ink py-16">
        <div className="container-tbc">
          <span className="eyebrow">{post.category}</span>
          <hr className="gold-rule mb-6" />
          <h1 className="font-display font-bold text-white text-[clamp(28px,4vw,44px)] leading-[1.15] tracking-[-0.5px] max-w-3xl mb-6">
            {post.title}
          </h1>
          <p className="font-sans text-[14px] text-mid-grey">
            {post.date} · {post.readTime}
          </p>
        </div>
      </section>

      {/* ── POST CONTENT ── */}
      <section className="bg-ivory py-16">
        <div className="container-tbc">
          <div
            className="
              mx-auto max-w-[760px]
              font-sans text-[17px] text-ink leading-[1.7]
              [&_h2]:font-display [&_h2]:font-bold [&_h2]:text-[26px] [&_h2]:text-ink [&_h2]:leading-[1.25] [&_h2]:mt-12 [&_h2]:mb-4
              [&_h3]:font-display [&_h3]:font-bold [&_h3]:text-[20px] [&_h3]:text-ink [&_h3]:leading-[1.3] [&_h3]:mt-10 [&_h3]:mb-3
              [&_p]:mb-6
              [&_strong]:font-semibold [&_strong]:text-ink
              [&_a]:text-royal [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-royal-mid
              [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-6 [&_ul_li]:mb-2
              [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-6 [&_ol_li]:mb-2
              [&_blockquote]:border-l-4 [&_blockquote]:border-gold [&_blockquote]:pl-5 [&_blockquote]:italic [&_blockquote]:text-mid-grey [&_blockquote]:my-8
              [&_hr]:border-light-grey [&_hr]:my-10
            "
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-royal py-16 text-center">
        <div className="container-tbc">
          <hr className="gold-rule gold-rule--center mb-8" />
          <h2 className="font-display font-bold text-[clamp(22px,3vw,32px)] text-white leading-[1.2] mb-4">
            Ready to put this thinking into practice?
          </h2>
          <p className="font-sans text-[16px] text-white/80 mb-8">
            Request a consultation. We will respond within one business day.
          </p>
          <Link href="/book-consultation" className="btn-gold">
            Request a Consultation
          </Link>
          <hr className="gold-rule gold-rule--center mt-10" />
        </div>
      </section>
    </>
  );
}

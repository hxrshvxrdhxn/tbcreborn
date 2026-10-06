/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { parse } from "node-html-parser";
import { noindexPosts } from "@/lib/noindex-posts";

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
  const isNoindex = noindexPosts.has(slug);
  const rawTitle = (post.seoTitle || post.title).replace(/\s*\|\s*(TBC|Turbo Bytes Consulting)\s*$/i, "").trim();
  const maxBaseLen = 60 - " | Turbo Bytes Consulting".length;
  const baseTitle = rawTitle.length > maxBaseLen ? rawTitle.slice(0, maxBaseLen).trimEnd() : rawTitle;
  const pageTitle = `${baseTitle} | Turbo Bytes Consulting`;
  return {
    title: { absolute: pageTitle },
    description: post.seoDescription || post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    ...(isNoindex ? { robots: { index: false, follow: true } } : {}),
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

function generateFAQSchema(htmlContent: string) {
  const root = parse(htmlContent);
  const faqs: { questionName: string; acceptedAnswerText: string }[] = [];
  
  // Find "Frequently asked questions" H2
  const h2s = root.querySelectorAll('h2');
  const faqH2 = h2s.find(h2 => h2.text.toLowerCase().includes('frequently asked questions'));
  
  if (faqH2) {
    let currentNode = faqH2.nextElementSibling;
    let currentQuestion = "";
    let currentAnswer = "";
    
    while (currentNode && currentNode.tagName !== 'H2') {
      if (currentNode.tagName === 'H3') {
        if (currentQuestion) {
          faqs.push({ questionName: currentQuestion, acceptedAnswerText: currentAnswer.trim() });
        }
        currentQuestion = currentNode.text;
        currentAnswer = "";
      } else if (currentQuestion && currentNode.tagName === 'P') {
        currentAnswer += currentNode.innerHTML + " ";
      }
      currentNode = currentNode.nextElementSibling;
    }
    
    if (currentQuestion) {
      faqs.push({ questionName: currentQuestion, acceptedAnswerText: currentAnswer.trim() });
    }
  }
  
  if (faqs.length === 0) return null;
  
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.questionName,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.acceptedAnswerText
      }
    }))
  };
}

function getServiceLinkForCategory(category: string) {
  const lowerCat = category.toLowerCase();
  if (lowerCat.includes("software development")) return "/services/custom-software-development";
  if (lowerCat.includes("ai applications")) return "/services/ai-applications";
  if (lowerCat.includes("automation")) return "/services/business-automation";
  if (lowerCat.includes("web development")) return "/services/web-development";
  if (lowerCat.includes("mobile apps")) return "/services/mobile-app-development";
  if (lowerCat.includes("industry guides")) return "/software-development-company-delhi-ncr";
  if (lowerCat.includes("leadership")) return "/services";

  // Existing mappings for old categories
  if (lowerCat.includes("ai") || lowerCat.includes("llm")) return "/services/custom-llm";
  if (lowerCat.includes("train")) return "/services/ai-training";
  if (lowerCat.includes("web") || lowerCat.includes("dev")) return "/services/web-development";
  if (lowerCat.includes("social") || lowerCat.includes("smm")) return "/services/smm";
  if (lowerCat.includes("slate")) return "/services/slate";
  return "/services";
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = await getAllPosts();
  const relatedPosts = allPosts
    .filter(p => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);
    
  const serviceLink = getServiceLinkForCategory(post.category);

  // Generate JSON-LD schemas
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.seoDescription || post.excerpt,
    "datePublished": (post as any).publishedAt || new Date(post.date).toISOString(),
    "dateModified": (post as any).updatedAt ? new Date((post as any).updatedAt).toISOString() : ((post as any).publishedAt || new Date(post.date).toISOString()),
    "author": {
      "@id": "https://turbobytesconsulting.com/#harsh",
      "@type": "Person",
      "name": "Harshvardhan Chauhan"
    },
    "publisher": {
      "@id": "https://turbobytesconsulting.com/#organization"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://turbobytesconsulting.com/blog/${post.slug}`
    },
    "image": "https://turbobytesconsulting.com/og-default.png"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://turbobytesconsulting.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://turbobytesconsulting.com/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://turbobytesconsulting.com/blog/${post.slug}`
      }
    ]
  };

  const faqSchema = generateFAQSchema(post.content);

  return (
    <>
      <script id="blogposting-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }} />
      <script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && <script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

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

        {/* ── AUTHOR BYLINE ── */}
        <div className="container-tbc mt-12 pt-8 border-t border-light-grey">
          <div className="mx-auto max-w-[760px] flex items-start gap-4">
            <div className="flex-1">
              <h3 className="font-display font-bold text-[18px] text-ink mb-1">
                Harshvardhan Chauhan
              </h3>
              <p className="font-sans text-[14px] text-mid-grey font-medium mb-3">
                Founder, Turbo Bytes Consulting
              </p>
              <p className="font-sans text-[15px] text-ink/80 leading-relaxed mb-3 text-balance">
                Harshvardhan specialises in operational architecture and AI integration for mid-sized firms. He works directly with founders to remove friction and build systems that scale.
              </p>
              <Link href="/about" className="font-sans text-[14px] text-royal font-semibold hover:text-royal-mid underline underline-offset-2">
                Read more about our approach
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── RELATED POSTS ── */}
      {relatedPosts.length > 0 && (
        <section className="bg-light-grey/20 py-16 border-t border-light-grey">
          <div className="container-tbc">
            <h2 className="font-display font-bold text-[24px] text-ink mb-8">Related {post.category} Insights</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-10">
              {relatedPosts.map(rp => (
                <Link key={rp.slug} href={`/blog/${rp.slug}`} className="block group">
                  <h3 className="font-display font-semibold text-[18px] text-ink group-hover:text-royal transition-colors mb-2">{rp.title}</h3>
                  <p className="font-sans text-[14px] text-mid-grey">{rp.date} · {rp.readTime}</p>
                </Link>
              ))}
            </div>
            <div className="text-center">
              <Link href={serviceLink} className="font-sans text-royal underline hover:text-royal-mid font-semibold">
                Explore our {post.category} services
              </Link>
            </div>
          </div>
        </section>
      )}

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

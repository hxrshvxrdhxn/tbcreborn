import React from "react";
import Link from "next/link";
import { HubEntry } from "@/lib/hubs";

interface VisibleRelated {
  slug: string;
  title: string;
}

interface HubEntryTemplateProps {
  hub: "glossary" | "integrations";
  hubTitle: string;
  entry: HubEntry;
  bodyHtml: string;
  visibleRelated: VisibleRelated[];
}

export default function HubEntryTemplate({
  hub,
  hubTitle,
  entry,
  bodyHtml,
  visibleRelated,
}: HubEntryTemplateProps) {
  const url = `https://turbobytesconsulting.com/${hub}/${entry.slug}`;
  const hubUrl = `https://turbobytesconsulting.com/${hub}`;

  // JSON-LD Schemas
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://turbobytesconsulting.com",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": hubTitle,
        "item": hubUrl,
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": entry.title,
        "item": url,
      },
    ],
  };

  const faqSchema =
    entry.faqs && entry.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: entry.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.a,
            },
          })),
        }
      : null;

  const definedTermSchema =
    hub === "glossary"
      ? {
          "@context": "https://schema.org",
          "@type": "DefinedTerm",
          name: entry.title,
          description: entry.summary,
          inDefinedTermSet: "https://turbobytesconsulting.com/glossary",
        }
      : null;

  const techArticleSchema =
    hub === "integrations"
      ? {
          "@context": "https://schema.org",
          "@type": "TechArticle",
          headline: entry.title,
          description: entry.seoDescription || entry.summary,
          author: {
            "@id": "https://turbobytesconsulting.com/#harsh",
          },
          publisher: {
            "@id": "https://turbobytesconsulting.com/#organization",
          },
          datePublished: entry.publishedAt,
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": url,
          },
        }
      : null;

  return (
    <>
      {/* ── JSON-LD SCRIPTS ── */}
      <script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      {definedTermSchema && (
        <script
          id="defined-term-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSchema) }}
        />
      )}
      {techArticleSchema && (
        <script
          id="tech-article-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(techArticleSchema) }}
        />
      )}

      {/* ── BREADCRUMB ── */}
      <nav aria-label="Breadcrumb" className="bg-ivory border-b border-light-grey">
        <div className="container-tbc py-3">
          <ol className="flex items-center gap-2 font-sans text-[13px] text-mid-grey">
            <li>
              <Link href="/" className="hover:text-royal transition-colors duration-150">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-light-grey select-none">/</li>
            <li>
              <Link href={`/${hub}`} className="hover:text-royal transition-colors duration-150">
                {hubTitle}
              </Link>
            </li>
            <li aria-hidden="true" className="text-light-grey select-none">/</li>
            <li className="text-ink font-semibold truncate max-w-[280px]">
              {entry.title}
            </li>
          </ol>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="bg-ink py-16">
        <div className="container-tbc">
          <span className="eyebrow">{hubTitle}</span>
          <hr className="gold-rule mb-6" />
          <h1 className="font-display font-bold text-white text-[clamp(28px,4vw,44px)] leading-[1.15] tracking-[-0.5px] max-w-3xl mb-6">
            {entry.title}
          </h1>
          <p className="font-sans text-[18px] text-white/90 leading-relaxed max-w-3xl">
            {entry.summary}
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="bg-ivory py-16">
        <div className="container-tbc">
          <div className="mx-auto max-w-[760px]">
            {/* ── KEY FACTS TABLE ── */}
            {entry.dataPoints && entry.dataPoints.length > 0 && (
              <div className="mb-12 overflow-x-auto rounded-lg border border-light-grey bg-white shadow-sm">
                <div className="bg-light-grey/30 px-6 py-4 border-b border-light-grey">
                  <h2 className="font-display font-bold text-[18px] text-ink">Key Facts</h2>
                </div>
                <table className="w-full text-left font-sans text-[15px]">
                  <tbody className="divide-y divide-light-grey">
                    {entry.dataPoints.map((dp, idx) => (
                      <tr key={idx} className="hover:bg-ivory/50 transition-colors">
                        <th
                          scope="row"
                          className="py-3.5 px-6 font-semibold text-ink/80 w-1/3 align-top bg-light-grey/10"
                        >
                          {dp.label}
                        </th>
                        <td className="py-3.5 px-6 text-ink align-top">
                          {dp.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* ── MARKDOWN BODY ── */}
            <div
              className="
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
              dangerouslySetInnerHTML={{ __html: bodyHtml }}
            />

            {/* ── FAQ SECTION ── */}
            {entry.faqs && entry.faqs.length > 0 && (
              <div className="mt-14 pt-10 border-t border-light-grey">
                <h2 className="font-display font-bold text-[24px] text-ink mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-6">
                  {entry.faqs.map((faq, idx) => (
                    <div
                      key={idx}
                      className="rounded-lg border border-light-grey bg-white p-6 shadow-sm"
                    >
                      <h3 className="font-display font-semibold text-[18px] text-ink mb-3">
                        {faq.q}
                      </h3>
                      <p className="font-sans text-[15px] text-ink/80 leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ── RELATED LIST (VISIBLE ONES ONLY) ── */}
            {visibleRelated.length > 0 && (
              <div className="mt-14 pt-10 border-t border-light-grey">
                <h2 className="font-display font-bold text-[22px] text-ink mb-6">
                  Related {hubTitle}
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {visibleRelated.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/${hub}/${item.slug}`}
                      className="block p-5 rounded-lg border border-light-grey bg-white hover:border-royal hover:shadow-sm transition-all group"
                    >
                      <h3 className="font-display font-semibold text-[16px] text-ink group-hover:text-royal transition-colors mb-1">
                        {item.title}
                      </h3>
                      <span className="font-sans text-[13px] text-royal font-medium flex items-center gap-1">
                        Read guide →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* ── SERVICE CTA BOX ── */}
            <div className="mt-14 rounded-lg bg-ink p-8 text-white">
              <span className="font-sans text-xs uppercase tracking-widest text-gold font-semibold">
                Take the next step
              </span>
              <h2 className="font-display font-bold text-[24px] text-white mt-2 mb-3">
                Need help implementing this in your business?
              </h2>
              <p className="font-sans text-[15px] text-white/80 leading-relaxed mb-6">
                Turbo Bytes Consulting helps businesses streamline operations and build custom software architectures that scale without chaos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <Link href="/book-consultation" className="btn-gold">
                  Book a 30-minute scoping call
                </Link>
                {entry.service && (
                  <Link
                    href={entry.service}
                    className="font-sans text-[14px] text-white/90 hover:text-gold underline underline-offset-4 transition-colors"
                  >
                    Explore our relevant services →
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

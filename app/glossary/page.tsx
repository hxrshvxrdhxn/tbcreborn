import type { Metadata } from "next";
import Link from "next/link";
import { getHubEntries, HubEntry } from "@/lib/hubs";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: { absolute: "Software and AI Glossary for Business Owners | TBC" },
  description:
    "Plain-English definitions of software and AI terms for business owners.",
  alternates: { canonical: "/glossary" },
  openGraph: {
    title: { absolute: "Software and AI Glossary for Business Owners | TBC" },
    description:
      "Plain-English definitions of software and AI terms for business owners.",
    url: "https://turbobytesconsulting.com/glossary",
    images: [{ url: "/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: { absolute: "Software and AI Glossary for Business Owners | TBC" },
    description:
      "Plain-English definitions of software and AI terms for business owners.",
  },
};

export default async function GlossaryIndexPage() {
  const entries = await getHubEntries("glossary");

  // Group entries A-Z by first letter of title
  const grouped: Record<string, HubEntry[]> = {};
  for (const entry of entries) {
    const letter = (entry.title[0] || "#").toUpperCase();
    if (!grouped[letter]) grouped[letter] = [];
    grouped[letter].push(entry);
  }

  const sortedLetters = Object.keys(grouped).sort();
  for (const letter of sortedLetters) {
    grouped[letter].sort((a, b) => a.title.localeCompare(b.title));
  }

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
        "name": "Glossary",
        "item": "https://turbobytesconsulting.com/glossary",
      },
    ],
  };

  return (
    <>
      <script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

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
            <li className="text-ink font-semibold">Glossary</li>
          </ol>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="bg-ink py-16">
        <div className="container-tbc">
          <span className="eyebrow">Knowledge Base</span>
          <hr className="gold-rule mb-6" />
          <h1 className="font-display font-bold text-white text-[clamp(28px,4vw,44px)] leading-[1.15] tracking-[-0.5px] max-w-3xl mb-4">
            Software and AI Glossary
          </h1>
          <p className="font-sans text-[18px] text-white/90 leading-relaxed max-w-3xl">
            Plain-English definitions of software and AI terms for business owners
          </p>
        </div>
      </section>

      {/* ── ENTRIES LIST ── */}
      <section className="bg-ivory py-16 min-h-[400px]">
        <div className="container-tbc">
          {sortedLetters.length === 0 ? (
            <div className="rounded-lg border border-light-grey bg-white p-8 text-center max-w-xl mx-auto">
              <p className="font-sans text-[16px] text-ink/80 mb-4">
                Plain-English definitions of software and AI terms for business owners are being published weekly.
              </p>
              <Link href="/blog" className="btn-royal">
                Explore Blog Insights
              </Link>
            </div>
          ) : (
            <div className="space-y-12 max-w-4xl">
              {sortedLetters.map((letter) => (
                <div key={letter} className="border-b border-light-grey pb-8 last:border-0">
                  <div className="flex items-baseline gap-4 mb-6">
                    <span className="font-display text-3xl font-bold text-gold">{letter}</span>
                    <hr className="flex-1 border-light-grey" />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {grouped[letter].map((entry) => (
                      <Link
                        key={entry.slug}
                        href={`/glossary/${entry.slug}`}
                        className="block p-5 rounded-lg border border-light-grey bg-white hover:border-royal hover:shadow-sm transition-all group"
                      >
                        <h2 className="font-display font-semibold text-[17px] text-ink group-hover:text-royal transition-colors mb-2">
                          {entry.title}
                        </h2>
                        <p className="font-sans text-[14px] text-mid-grey line-clamp-2">
                          {entry.summary}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { getHubEntries, CompareEntry } from "@/lib/hubs";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const entries = await getHubEntries<CompareEntry>("compare");
  const isEmpty = entries.length === 0;

  return {
    title: { absolute: "Software Comparisons for Indian SMEs | TBC" },
    description:
      "Side-by-side software comparisons, migration effort, and practical verdicts for Indian SMEs.",
    alternates: { canonical: "/compare" },
    ...(isEmpty ? { robots: { index: false, follow: true } } : {}),
    openGraph: {
      title: { absolute: "Software Comparisons for Indian SMEs | TBC" },
      description:
        "Side-by-side software comparisons, migration effort, and practical verdicts for Indian SMEs.",
      url: "https://turbobytesconsulting.com/compare",
      images: [{ url: "/og-default.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: { absolute: "Software Comparisons for Indian SMEs | TBC" },
      description:
        "Side-by-side software comparisons, migration effort, and practical verdicts for Indian SMEs.",
    },
  };
}

export default async function CompareIndexPage() {
  const entries = await getHubEntries<CompareEntry>("compare");

  // Group entries by category
  const grouped: Record<string, CompareEntry[]> = {};
  for (const entry of entries) {
    const category = entry.category || "General";
    if (!grouped[category]) grouped[category] = [];
    grouped[category].push(entry);
  }

  const sortedCategories = Object.keys(grouped).sort();
  for (const cat of sortedCategories) {
    grouped[cat].sort((a, b) => a.title.localeCompare(b.title));
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://turbobytesconsulting.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Comparisons",
        item: "https://turbobytesconsulting.com/compare",
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
            <li className="text-ink font-semibold">Software Comparisons</li>
          </ol>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="bg-forest py-16">
        <div className="container-tbc">
          <span className="eyebrow">Tool Evaluation</span>
          <hr className="gold-rule mb-6" />
          <h1 className="font-display font-bold text-white text-[clamp(28px,4vw,44px)] leading-[1.15] tracking-[-0.5px] max-w-3xl mb-4">
            Software Comparisons for Indian Businesses
          </h1>
          <p className="font-sans text-[18px] text-white/90 leading-relaxed max-w-3xl">
            Side-by-side software evaluations, practical trade-offs, and clear verdicts for Indian SMEs.
          </p>
        </div>
      </section>

      {/* ── LISTING SECTION ── */}
      <section className="bg-ivory py-16">
        <div className="container-tbc">
          {entries.length === 0 ? (
            <div className="py-12 text-center">
              <p className="font-sans text-[16px] text-mid-grey">
                Software comparison guides are currently being prepared. Please check back shortly.
              </p>
            </div>
          ) : (
            <div className="space-y-12">
              {sortedCategories.map((category) => (
                <div key={category} className="border-b border-light-grey pb-10 last:border-b-0 last:pb-0">
                  <h2 className="font-display font-bold text-[22px] text-ink mb-6 flex items-center gap-3">
                    <span>{category}</span>
                    <span className="text-xs font-sans font-normal text-mid-grey px-2.5 py-0.5 rounded-full bg-light-grey/40">
                      {grouped[category].length} {grouped[category].length === 1 ? "comparison" : "comparisons"}
                    </span>
                  </h2>
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {grouped[category].map((entry) => (
                      <Link
                        key={entry.slug}
                        href={`/compare/${entry.slug}`}
                        className="block p-6 rounded-lg border border-light-grey bg-white hover:border-royal hover:shadow-md transition-all group"
                      >
                        <h3 className="font-display font-semibold text-[18px] text-ink group-hover:text-royal transition-colors mb-2">
                          {entry.title}
                        </h3>
                        <p className="font-sans text-[14px] text-ink/70 leading-relaxed line-clamp-2 mb-4">
                          {entry.summary}
                        </p>
                        <span className="font-sans text-[13px] text-royal font-medium flex items-center gap-1 group-hover:underline">
                          Read comparison &amp; verdict →
                        </span>
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

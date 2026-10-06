import type { Metadata } from "next";
import Link from "next/link";
import { getHubEntries, AIUseCaseEntry } from "@/lib/hubs";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const entries = await getHubEntries<AIUseCaseEntry>("ai-use-cases");
  const isEmpty = entries.length === 0;

  return {
    title: { absolute: "AI Use Cases for Indian Businesses | TBC" },
    description:
      "Practical AI use cases, time-to-pilot, and accuracy expectations for Indian businesses.",
    alternates: { canonical: "/ai-use-cases" },
    ...(isEmpty ? { robots: { index: false, follow: true } } : {}),
    openGraph: {
      title: { absolute: "AI Use Cases for Indian Businesses | TBC" },
      description:
        "Practical AI use cases, time-to-pilot, and accuracy expectations for Indian businesses.",
      url: "https://turbobytesconsulting.com/ai-use-cases",
      images: [{ url: "/og-default.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: { absolute: "AI Use Cases for Indian Businesses | TBC" },
      description:
        "Practical AI use cases, time-to-pilot, and accuracy expectations for Indian businesses.",
    },
  };
}

export default async function AIUseCasesIndexPage() {
  const entries = await getHubEntries<AIUseCaseEntry>("ai-use-cases");

  // Group entries by category
  const grouped: Record<string, AIUseCaseEntry[]> = {};
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
        name: "AI Use Cases",
        item: "https://turbobytesconsulting.com/ai-use-cases",
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
            <li className="text-ink font-semibold">AI Use Cases</li>
          </ol>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="bg-forest py-16">
        <div className="container-tbc">
          <span className="eyebrow">Enterprise Intelligence</span>
          <hr className="gold-rule mb-6" />
          <h1 className="font-display font-bold text-white text-[clamp(28px,4vw,44px)] leading-[1.15] tracking-[-0.5px] max-w-3xl mb-4">
            AI Use Cases for Indian Businesses
          </h1>
          <p className="font-sans text-[18px] text-white/90 leading-relaxed max-w-3xl">
            Practical AI use cases, time-to-pilot benchmarks, and accuracy expectations for Indian enterprises and SMEs.
          </p>
        </div>
      </section>

      {/* ── LISTING SECTION ── */}
      <section className="bg-ivory py-16">
        <div className="container-tbc">
          {entries.length === 0 ? (
            <div className="py-12 text-center">
              <p className="font-sans text-[16px] text-mid-grey">
                AI use cases are currently being prepared. Please check back shortly.
              </p>
            </div>
          ) : (
            <div className="space-y-12">
              {sortedCategories.map((category) => (
                <div key={category} className="border-b border-light-grey pb-10 last:border-b-0 last:pb-0">
                  <h2 className="font-display font-bold text-[22px] text-ink mb-6 flex items-center gap-3">
                    <span>{category}</span>
                    <span className="text-xs font-sans font-normal text-mid-grey px-2.5 py-0.5 rounded-full bg-light-grey/40">
                      {grouped[category].length} {grouped[category].length === 1 ? "use case" : "use cases"}
                    </span>
                  </h2>
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {grouped[category].map((entry) => (
                      <Link
                        key={entry.slug}
                        href={`/ai-use-cases/${entry.slug}`}
                        className="block p-6 rounded-lg border border-light-grey bg-white hover:border-royal hover:shadow-md transition-all group"
                      >
                        <h3 className="font-display font-semibold text-[18px] text-ink group-hover:text-royal transition-colors mb-2">
                          {entry.title}
                        </h3>
                        <p className="font-sans text-[14px] text-ink/70 leading-relaxed line-clamp-2 mb-4">
                          {entry.summary}
                        </p>
                        <span className="font-sans text-[13px] text-royal font-medium flex items-center gap-1 group-hover:underline">
                          View implementation blueprint →
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

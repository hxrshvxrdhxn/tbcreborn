import type { Metadata } from "next";
import Link from "next/link";
import { getHubEntries, IntegrationEntry } from "@/lib/hubs";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const entries = await getHubEntries<IntegrationEntry>("integrations");
  const isEmpty = entries.length === 0;

  return {
    title: { absolute: "Business Software Integrations Guide | TBC" },
    description:
      "How to connect the tools Indian businesses run on: what syncs, how it works, effort and cost.",
    alternates: { canonical: "/integrations" },
    ...(isEmpty ? { robots: { index: false, follow: true } } : {}),
    openGraph: {
      title: { absolute: "Business Software Integrations Guide | TBC" },
      description:
        "How to connect the tools Indian businesses run on: what syncs, how it works, effort and cost.",
      url: "https://turbobytesconsulting.com/integrations",
      images: [{ url: "/og-default.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: { absolute: "Business Software Integrations Guide | TBC" },
      description:
        "How to connect the tools Indian businesses run on: what syncs, how it works, effort and cost.",
    },
  };
}

export default async function IntegrationsIndexPage() {
  const entries = await getHubEntries<IntegrationEntry>("integrations");

  // Group entries by toolA
  const grouped: Record<string, IntegrationEntry[]> = {};
  for (const entry of entries) {
    const primaryTool = entry.toolA || "Other";
    if (!grouped[primaryTool]) grouped[primaryTool] = [];
    grouped[primaryTool].push(entry);
  }

  const sortedTools = Object.keys(grouped).sort();
  for (const tool of sortedTools) {
    grouped[tool].sort((a, b) => a.title.localeCompare(b.title));
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
        "name": "Integrations",
        "item": "https://turbobytesconsulting.com/integrations",
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
            <li className="text-ink font-semibold">Integrations</li>
          </ol>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="bg-ink py-16">
        <div className="container-tbc">
          <span className="eyebrow">Integration Directory</span>
          <hr className="gold-rule mb-6" />
          <h1 className="font-display font-bold text-white text-[clamp(28px,4vw,44px)] leading-[1.15] tracking-[-0.5px] max-w-3xl mb-4">
            Business Software Integrations Guide
          </h1>
          <p className="font-sans text-[18px] text-white/90 leading-relaxed max-w-3xl">
            How to connect the tools Indian businesses run on: what syncs, how it works, effort and cost
          </p>
        </div>
      </section>

      {/* ── ENTRIES LIST ── */}
      <section className="bg-ivory py-16 min-h-[400px]">
        <div className="container-tbc">
          {sortedTools.length === 0 ? (
            <div className="rounded-lg border border-light-grey bg-white p-8 text-center max-w-xl mx-auto">
              <p className="font-sans text-[16px] text-ink/80 mb-4">
                Detailed guides on connecting business tools and ERPs are published weekly.
              </p>
              <Link href="/blog" className="btn-royal">
                Explore Blog Insights
              </Link>
            </div>
          ) : (
            <div className="space-y-12 max-w-4xl">
              {sortedTools.map((tool) => (
                <div key={tool} className="border-b border-light-grey pb-8 last:border-0">
                  <div className="flex items-baseline gap-4 mb-6">
                    <span className="font-display text-2xl font-bold text-ink">{tool} Integrations</span>
                    <hr className="flex-1 border-light-grey" />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {grouped[tool].map((entry) => (
                      <Link
                        key={entry.slug}
                        href={`/integrations/${entry.slug}`}
                        className="block p-5 rounded-lg border border-light-grey bg-white hover:border-royal hover:shadow-sm transition-all group"
                      >
                        <h2 className="font-display font-semibold text-[17px] text-ink group-hover:text-royal transition-colors mb-2">
                          {entry.title}
                        </h2>
                        <p className="font-sans text-[14px] text-mid-grey line-clamp-2">
                          {entry.summary}
                        </p>
                        <span className="mt-3 inline-block font-sans text-xs font-semibold text-royal group-hover:underline">
                          View integration details →
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

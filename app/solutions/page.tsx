import type { Metadata } from "next";
import Link from "next/link";
import { getHubEntries, SolutionEntry } from "@/lib/hubs";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const entries = await getHubEntries<SolutionEntry>("solutions");
  const isEmpty = entries.length === 0;

  return {
    title: { absolute: "Industry Software Solutions in India | TBC" },
    description:
      "Custom software architectures, workflows, and AI integrations tailored for specific Indian industries.",
    alternates: { canonical: "/solutions" },
    ...(isEmpty ? { robots: { index: false, follow: true } } : {}),
    openGraph: {
      title: { absolute: "Industry Software Solutions in India | TBC" },
      description:
        "Custom software architectures, workflows, and AI integrations tailored for specific Indian industries.",
      url: "https://turbobytesconsulting.com/solutions",
      images: [{ url: "/og-default.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: { absolute: "Industry Software Solutions in India | TBC" },
      description:
        "Custom software architectures, workflows, and AI integrations tailored for specific Indian industries.",
    },
  };
}

export default async function SolutionsIndexPage() {
  const entries = await getHubEntries<SolutionEntry>("solutions");

  // Group entries by industry
  const grouped: Record<string, { industrySlug: string; items: SolutionEntry[] }> = {};
  for (const entry of entries) {
    const industry = entry.industry || "General";
    const industrySlug = entry.industrySlug || industry.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    if (!grouped[industry]) {
      grouped[industry] = { industrySlug, items: [] };
    }
    grouped[industry].items.push(entry);
  }

  const sortedIndustries = Object.keys(grouped).sort();
  for (const ind of sortedIndustries) {
    grouped[ind].items.sort((a, b) => a.title.localeCompare(b.title));
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
        name: "Solutions",
        item: "https://turbobytesconsulting.com/solutions",
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
            <li className="text-ink font-semibold">Solutions</li>
          </ol>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="bg-forest py-16">
        <div className="container-tbc">
          <span className="eyebrow">Industry Architectures</span>
          <hr className="gold-rule mb-6" />
          <h1 className="font-display font-bold text-white text-[clamp(28px,4vw,44px)] leading-[1.15] tracking-[-0.5px] max-w-3xl mb-4">
            Software Solutions by Industry
          </h1>
          <p className="font-sans text-[18px] text-white/90 leading-relaxed max-w-3xl">
            Custom software architectures, workflows, and AI integrations tailored to specific operational realities in India.
          </p>
        </div>
      </section>

      {/* ── LISTING SECTION ── */}
      <section className="bg-ivory py-16">
        <div className="container-tbc">
          {entries.length === 0 ? (
            <div className="py-12 text-center">
              <p className="font-sans text-[16px] text-mid-grey">
                Industry software solutions are currently being prepared. Please check back shortly.
              </p>
            </div>
          ) : (
            <div className="space-y-12">
              {sortedIndustries.map((industry) => {
                const group = grouped[industry];
                return (
                  <div key={industry} className="border-b border-light-grey pb-10 last:border-b-0 last:pb-0">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="font-display font-bold text-[22px] text-ink flex items-center gap-3">
                        <span>{industry}</span>
                        <span className="text-xs font-sans font-normal text-mid-grey px-2.5 py-0.5 rounded-full bg-light-grey/40">
                          {group.items.length} {group.items.length === 1 ? "solution" : "solutions"}
                        </span>
                      </h2>
                      <Link
                        href={`/solutions/${group.industrySlug}`}
                        className="font-sans text-[14px] text-royal hover:underline font-medium"
                      >
                        All {industry} solutions →
                      </Link>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                      {group.items.map((entry) => (
                        <Link
                          key={entry.slug}
                          href={`/solutions/${entry.industrySlug || group.industrySlug}/${entry.slug}`}
                          className="block p-6 rounded-lg border border-light-grey bg-white hover:border-royal hover:shadow-md transition-all group"
                        >
                          <h3 className="font-display font-semibold text-[18px] text-ink group-hover:text-royal transition-colors mb-2">
                            {entry.title}
                          </h3>
                          <p className="font-sans text-[14px] text-ink/70 leading-relaxed line-clamp-2 mb-4">
                            {entry.summary}
                          </p>
                          <span className="font-sans text-[13px] text-royal font-medium flex items-center gap-1 group-hover:underline">
                            Explore solution →
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

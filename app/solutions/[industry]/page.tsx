import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getHubEntries, getAllHubEntries, SolutionEntry } from "@/lib/hubs";

export const revalidate = 3600;

interface IndustryPageProps {
  params: { industry: string };
}

function formatIndustryTitle(slug: string, entries: SolutionEntry[]): string {
  const match = entries.find((e) => e.industrySlug === slug || e.industry?.toLowerCase() === slug.toLowerCase());
  if (match?.industry) return match.industry;
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const allEntries = await getAllHubEntries<SolutionEntry>("solutions");
  const industryEntries = allEntries.filter(
    (e) => (e.industrySlug || e.industry?.toLowerCase().replace(/[^a-z0-9]+/g, "-")) === params.industry
  );

  if (industryEntries.length === 0) return {};

  const industryName = formatIndustryTitle(params.industry, industryEntries);
  const visibleEntries = await getHubEntries<SolutionEntry>("solutions");
  const visibleInIndustry = visibleEntries.filter(
    (e) => (e.industrySlug || e.industry?.toLowerCase().replace(/[^a-z0-9]+/g, "-")) === params.industry
  );
  const isEmpty = visibleInIndustry.length === 0;

  return {
    title: { absolute: `${industryName} Software Solutions | TBC` },
    description: `Tailored software architectures, automation, and AI workflows for the ${industryName} industry in India.`,
    alternates: { canonical: `/solutions/${params.industry}` },
    ...(isEmpty ? { robots: { index: false, follow: true } } : {}),
    openGraph: {
      title: { absolute: `${industryName} Software Solutions | TBC` },
      description: `Tailored software architectures, automation, and AI workflows for the ${industryName} industry in India.`,
      url: `https://turbobytesconsulting.com/solutions/${params.industry}`,
      images: [{ url: "/og-default.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: `${industryName} Software Solutions | TBC`,
      description: `Tailored software architectures, automation, and AI workflows for the ${industryName} industry in India.`,
    },
  };
}

export default async function IndustrySolutionsPage({ params }: IndustryPageProps) {
  const allEntries = await getAllHubEntries<SolutionEntry>("solutions");
  const industryEntries = allEntries.filter(
    (e) => (e.industrySlug || e.industry?.toLowerCase().replace(/[^a-z0-9]+/g, "-")) === params.industry
  );

  if (industryEntries.length === 0) {
    notFound();
  }

  const industryName = formatIndustryTitle(params.industry, industryEntries);
  const visibleEntries = await getHubEntries<SolutionEntry>("solutions");
  const items = visibleEntries.filter(
    (e) => (e.industrySlug || e.industry?.toLowerCase().replace(/[^a-z0-9]+/g, "-")) === params.industry
  );

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
      {
        "@type": "ListItem",
        position: 3,
        name: industryName,
        item: `https://turbobytesconsulting.com/solutions/${params.industry}`,
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
            <li>
              <Link href="/solutions" className="hover:text-royal transition-colors duration-150">
                Solutions
              </Link>
            </li>
            <li aria-hidden="true" className="text-light-grey select-none">/</li>
            <li className="text-ink font-semibold">{industryName}</li>
          </ol>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="bg-ink py-16">
        <div className="container-tbc">
          <span className="eyebrow">{industryName} Industry</span>
          <hr className="gold-rule mb-6" />
          <h1 className="font-display font-bold text-white text-[clamp(28px,4vw,44px)] leading-[1.15] tracking-[-0.5px] max-w-3xl mb-4">
            {industryName} Software Solutions
          </h1>
          <p className="font-sans text-[18px] text-white/90 leading-relaxed max-w-3xl">
            Specialised architectures, bespoke workflows, and automation designed for the operational demands of the {industryName} sector.
          </p>
        </div>
      </section>

      {/* ── LISTING SECTION ── */}
      <section className="bg-ivory py-16">
        <div className="container-tbc">
          {items.length === 0 ? (
            <div className="py-12 text-center">
              <p className="font-sans text-[16px] text-mid-grey">
                Solutions for {industryName} are currently being prepared. Please check back shortly.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {items.map((entry) => (
                <Link
                  key={entry.slug}
                  href={`/solutions/${params.industry}/${entry.slug}`}
                  className="block p-6 rounded-lg border border-light-grey bg-white hover:border-royal hover:shadow-md transition-all group"
                >
                  <h3 className="font-display font-semibold text-[18px] text-ink group-hover:text-royal transition-colors mb-2">
                    {entry.title}
                  </h3>
                  <p className="font-sans text-[14px] text-ink/70 leading-relaxed line-clamp-2 mb-4">
                    {entry.summary}
                  </p>
                  <span className="font-sans text-[13px] text-royal font-medium flex items-center gap-1 group-hover:underline">
                    View solution architecture →
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

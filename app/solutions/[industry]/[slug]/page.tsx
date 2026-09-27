import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getHubEntry, getHubEntries, renderMarkdown, SolutionEntry } from "@/lib/hubs";
import HubEntryTemplate from "@/components/hubs/HubEntryTemplate";

export const revalidate = 3600;

interface PageProps {
  params: { industry: string; slug: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const entry = await getHubEntry<SolutionEntry>("solutions", params.slug);
  if (!entry) return {};

  const cleanTitle = (entry.seoTitle || entry.title).replace(/\s*\|\s*TBC$/i, "").trim();

  return {
    title: { absolute: `${cleanTitle} | TBC` },
    description: entry.seoDescription || entry.summary,
    alternates: { canonical: `/solutions/${entry.industrySlug || params.industry}/${entry.slug}` },
    robots: entry.indexable ? { index: true, follow: true } : { index: false, follow: true },
    openGraph: {
      title: { absolute: `${cleanTitle} | TBC` },
      description: entry.seoDescription || entry.summary,
      url: `https://turbobytesconsulting.com/solutions/${entry.industrySlug || params.industry}/${entry.slug}`,
      images: [{ url: "/og-default.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: cleanTitle,
      description: entry.seoDescription || entry.summary,
    },
  };
}

export default async function SolutionDetailPage({ params }: PageProps) {
  const entry = await getHubEntry<SolutionEntry>("solutions", params.slug);
  if (!entry) {
    notFound();
  }

  // Ensure industry matches if specified
  if (entry.industrySlug && entry.industrySlug !== params.industry) {
    notFound();
  }

  const bodyHtml = await renderMarkdown(entry.body);

  // Filter related entries to only visible published ones
  const allVisible = await getHubEntries<SolutionEntry>("solutions");
  const visibleSlugsMap = new Map(allVisible.map((e) => [e.slug, { title: e.title, industrySlug: e.industrySlug }]));

  const visibleRelated = (entry.related || [])
    .filter((relSlug) => visibleSlugsMap.has(relSlug))
    .map((relSlug) => ({
      slug: relSlug,
      title: visibleSlugsMap.get(relSlug)!.title,
      industrySlug: visibleSlugsMap.get(relSlug)!.industrySlug,
    }));

  return (
    <HubEntryTemplate
      hub="solutions"
      hubTitle="Industry Solutions"
      entry={entry}
      bodyHtml={bodyHtml}
      visibleRelated={visibleRelated}
    />
  );
}

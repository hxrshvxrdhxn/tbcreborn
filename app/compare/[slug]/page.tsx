import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getHubEntry, getHubEntries, renderMarkdown, CompareEntry } from "@/lib/hubs";
import HubEntryTemplate from "@/components/hubs/HubEntryTemplate";

export const revalidate = 3600;

interface PageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const entry = await getHubEntry<CompareEntry>("compare", params.slug);
  if (!entry) return {};

  const cleanTitle = (entry.seoTitle || entry.title).replace(/\s*\|\s*TBC$/i, "").trim();

  return {
    title: { absolute: `${cleanTitle} | TBC` },
    description: entry.seoDescription || entry.summary,
    alternates: { canonical: `/compare/${entry.slug}` },
    robots: entry.indexable ? { index: true, follow: true } : { index: false, follow: true },
    openGraph: {
      title: { absolute: `${cleanTitle} | TBC` },
      description: entry.seoDescription || entry.summary,
      url: `https://turbobytesconsulting.com/compare/${entry.slug}`,
      images: [{ url: "/og-default.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: cleanTitle,
      description: entry.seoDescription || entry.summary,
    },
  };
}

export default async function CompareDetailPage({ params }: PageProps) {
  const entry = await getHubEntry<CompareEntry>("compare", params.slug);
  if (!entry) {
    notFound();
  }

  const bodyHtml = await renderMarkdown(entry.body);

  // Filter related entries to only visible published ones
  const allVisible = await getHubEntries<CompareEntry>("compare");
  const visibleSlugsMap = new Map(allVisible.map((e) => [e.slug, e.title]));

  const visibleRelated = (entry.related || [])
    .filter((relSlug) => visibleSlugsMap.has(relSlug))
    .map((relSlug) => ({
      slug: relSlug,
      title: visibleSlugsMap.get(relSlug)!,
    }));

  return (
    <HubEntryTemplate
      hub="compare"
      hubTitle="Software Comparisons"
      entry={entry}
      bodyHtml={bodyHtml}
      visibleRelated={visibleRelated}
    />
  );
}

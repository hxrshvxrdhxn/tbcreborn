import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getHubEntries, getHubEntry, renderMarkdown, IntegrationEntry } from "@/lib/hubs";
import HubEntryTemplate from "@/components/hubs/HubEntryTemplate";

export const revalidate = 3600;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const entries = await getHubEntries<IntegrationEntry>("integrations");
  return entries.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = await getHubEntry<IntegrationEntry>("integrations", slug);
  if (!entry) return {};

  const cleanTitle = (entry.seoTitle || entry.title).replace(
    /\s*\|\s*(TBC|Turbo Bytes Consulting)\s*$/i,
    ""
  );

  return {
    title: { absolute: `${cleanTitle} | TBC` },
    description: entry.seoDescription || entry.summary,
    alternates: { canonical: `/integrations/${entry.slug}` },
    ...(!entry.indexable ? { robots: { index: false, follow: true } } : {}),
    openGraph: {
      title: `${cleanTitle} | TBC`,
      description: entry.seoDescription || entry.summary,
      url: `https://turbobytesconsulting.com/integrations/${entry.slug}`,
      images: [{ url: "/og-default.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: `${cleanTitle} | TBC`,
      description: entry.seoDescription || entry.summary,
    },
  };
}

export default async function IntegrationDetailPage({ params }: Props) {
  const { slug } = await params;
  const entry = await getHubEntry<IntegrationEntry>("integrations", slug);
  if (!entry) notFound();

  // Resolve related items (only visible ones)
  const visibleRelated: { slug: string; title: string }[] = [];
  if (entry.related && entry.related.length > 0) {
    for (const relSlug of entry.related) {
      const relEntry = await getHubEntry<IntegrationEntry>("integrations", relSlug);
      if (relEntry) {
        visibleRelated.push({ slug: relEntry.slug, title: relEntry.title });
        if (visibleRelated.length >= 5) break;
      }
    }
  }

  const bodyHtml = await renderMarkdown(entry.body);

  return (
    <HubEntryTemplate
      hub="integrations"
      hubTitle="Integrations"
      entry={entry}
      bodyHtml={bodyHtml}
      visibleRelated={visibleRelated}
    />
  );
}

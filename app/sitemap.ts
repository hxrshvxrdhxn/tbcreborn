import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";
import { prisma } from "@/lib/prisma";
import { noindexPosts } from "@/lib/noindex-posts";
import { getHubEntries } from "@/lib/hubs";

export const revalidate = 3600;

const BASE = "https://turbobytesconsulting.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    { url: BASE, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${BASE}/services`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE}/services/custom-software-development`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE}/services/mobile-app-development`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE}/services/ai-applications`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE}/services/business-automation`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE}/services/mvp-development`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE}/services/web-development`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE}/services/custom-llm`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE}/services/ai-training`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE}/services/slate`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE}/services/smm`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE}/software-development-company-greater-noida`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE}/software-development-company-noida`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE}/software-development-company-delhi-ncr`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE}/about`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE}/work`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE}/blog`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${BASE}/glossary`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${BASE}/integrations`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${BASE}/cost`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${BASE}/compare`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${BASE}/solutions`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${BASE}/ai-use-cases`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${BASE}/engagement`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE}/book-consultation`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE}/contact`, priority: 0.6, changeFrequency: "yearly" as const },
    { url: `${BASE}/privacy-policy`, priority: 0.3, changeFrequency: "yearly" as const },
    { url: `${BASE}/terms`, priority: 0.3, changeFrequency: "yearly" as const },
  ].map((r) => ({ ...r, lastModified: new Date() }));

  const posts = await getAllPosts();
  const blogRoutes = posts
    .filter((post) => !noindexPosts.has(post.slug))
    .map((post) => {
      let lastModified = new Date(post.date);
      if ('updatedAt' in post && post.updatedAt) {
        lastModified = new Date(post.updatedAt as string | Date);
      } else if ('publishedAt' in post && post.publishedAt) {
        lastModified = new Date(post.publishedAt as string | Date);
      }
      return {
        url: `${BASE}/blog/${post.slug}`,
        lastModified,
        changeFrequency: "weekly" as const,
        priority: 0.8,
      };
    });

  const guides = await prisma.howToGuide.findMany({ select: { slug: true, updatedAt: true } });
  
  const guideRoutes = guides.map((g) => ({
    url: `${BASE}/how-to/${g.slug}`,
    lastModified: g.updatedAt ? new Date(g.updatedAt) : new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Hub entries (visible and indexable across all 6 content hubs)
  const hubs = ["glossary", "integrations", "cost", "compare", "solutions", "ai-use-cases"] as const;
  const hubRoutes: MetadataRoute.Sitemap = [];

  for (const hub of hubs) {
    const entries = await getHubEntries(hub);
    for (const e of entries) {
      if (!e.indexable) continue;
      const detailUrl = hub === "solutions" && e.industrySlug
        ? `${BASE}/solutions/${e.industrySlug}/${e.slug}`
        : `${BASE}/${hub}/${e.slug}`;
      hubRoutes.push({
        url: detailUrl,
        lastModified: new Date(e.publishedAt),
        changeFrequency: "monthly" as const,
        priority: 0.7,
      });
    }
  }

  return [...staticRoutes, ...blogRoutes, ...guideRoutes, ...hubRoutes];
}

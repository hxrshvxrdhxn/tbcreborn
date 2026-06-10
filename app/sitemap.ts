import { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/posts";

const BASE = "https://turbobytesconsulting.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    { url: BASE, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${BASE}/services`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE}/services/custom-llm`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE}/services/ai-training`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE}/services/web-development`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE}/services/smm`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE}/services/slate`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE}/about`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE}/work`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE}/blog`, priority: 0.7, changeFrequency: "weekly" as const },
    { url: `${BASE}/engagement`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE}/book-consultation`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE}/contact`, priority: 0.6, changeFrequency: "yearly" as const },
    { url: `${BASE}/privacy-policy`, priority: 0.3, changeFrequency: "yearly" as const },
    { url: `${BASE}/terms`, priority: 0.3, changeFrequency: "yearly" as const },
  ].map((r) => ({ ...r, lastModified: new Date() }));

  const slugs = await getAllSlugs();
  const blogRoutes = slugs.map((slug) => ({
    url: `${BASE}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}

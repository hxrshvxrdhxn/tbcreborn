/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";
import { prisma } from '@/lib/prisma';

export const revalidate = 3600;

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
    { url: `${BASE}/blog`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${BASE}/engagement`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE}/book-consultation`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE}/contact`, priority: 0.6, changeFrequency: "yearly" as const },
    { url: `${BASE}/privacy-policy`, priority: 0.3, changeFrequency: "yearly" as const },
    { url: `${BASE}/terms`, priority: 0.3, changeFrequency: "yearly" as const },
  ].map((r) => ({ ...r, lastModified: new Date() }));

  const posts = await getAllPosts();
  const blogRoutes = posts.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: (post as any).updatedAt ? new Date((post as any).updatedAt) : ((post as any).publishedAt ? new Date((post as any).publishedAt) : new Date(post.date)),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  
  const guides = await prisma.howToGuide.findMany({ select: { slug: true, updatedAt: true } });
  
  const guideRoutes = guides.map(g => ({
    url: `${BASE}/how-to/${g.slug}`,
    lastModified: g.updatedAt ? new Date(g.updatedAt) : new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes, ...guideRoutes];
}

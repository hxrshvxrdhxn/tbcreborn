/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { getAllPosts } from "@/lib/posts";
import { NextResponse } from "next/server";

export async function GET() {
  const posts = await getAllPosts();
  
  // They are already sorted by date desc and filtered for live posts in getAllPosts()
  const recentPosts = posts.slice(0, 50);

  const baseUrl = "https://turbobytesconsulting.com";

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Turbo Bytes Consulting Blog</title>
    <link>${baseUrl}/blog</link>
    <description>Insights on AI, operational architecture, and business scaling.</description>
    <language>en-IN</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    ${recentPosts
      .map(
        (post) => `
      <item>
        <title><![CDATA[${post.title}]]></title>
        <link>${baseUrl}/blog/${post.slug}</link>
        <guid>${baseUrl}/blog/${post.slug}</guid>
        <pubDate>${new Date((post as any).publishedAt || post.date).toUTCString()}</pubDate>
        <description><![CDATA[${post.excerpt}]]></description>
      </item>
    `
      )
      .join("")}
  </channel>
</rss>`;

  return new NextResponse(rss, {
    headers: {
      "Content-Type": "text/xml",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}

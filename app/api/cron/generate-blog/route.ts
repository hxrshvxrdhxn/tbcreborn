import { NextRequest, NextResponse } from "next/server";
import { generateObject } from "ai";
import { createAnthropic } from "@ai-sdk/anthropic";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

export const maxDuration = 60; // Allow more time for LLM generation on Vercel

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export async function GET(req: NextRequest) {
  // CRON authentication
  const authHeader = req.headers.get("authorization");
  if (
    process.env.CRON_SECRET &&
    authHeader !== `Bearer ${process.env.CRON_SECRET}`
  ) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // Determine recent topics so we don't repeat them
    const recentPosts = await prisma.post.findMany({
      orderBy: { createdAt: "desc" },
      take: 5,
      select: { title: true },
    });
    const recentTitles = recentPosts.map((p) => p.title).join(", ");

    const systemPrompt = `
      You are an expert AI management consultant at Turbo Bytes Consulting (TBC).
      Your writing style is highly professional, direct, sophisticated, and 'AI-native'.
      Write a compelling 600-800 word blog post about artificial intelligence, management strategy, enterprise tech adoption, or operations.
      Do not repeat these recent topics: ${recentTitles || "None yet"}.
      
      Structure your response according to the JSON schema. The content must be formatted in Markdown.
    `;

    const anthropic = createAnthropic({
      apiKey: process.env.ANTHROPIC_API_KEY || "",
    });

    // Call Anthropic Claude Sonnet 4.6
    const { object } = await generateObject({
      model: anthropic("claude-sonnet-4-6"),
      system: systemPrompt,
      prompt: "Generate the next blog post for Turbo Bytes Consulting.",
      schema: z.object({
        title: z.string().describe("A professional, catchy title for the blog post."),
        category: z.string().describe("E.g., Insight, Strategy, Technology, Operations"),
        readTime: z.string().describe("E.g., 5 min read"),
        excerpt: z.string().describe("A 1-2 sentence compelling summary of the article."),
        content: z.string().describe("The full blog post content in Markdown format."),
      }),
    });

    let slug = slugify(object.title);
    
    // Auto-set today's date
    const date = new Date().toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    // Check if post already exists to prevent upsert collision (slugs must be unique)
    const existing = await prisma.post.findUnique({ where: { slug } });
    if (existing) {
       slug = `${slug}-${Date.now()}`;
    }

    await prisma.post.create({
      data: {
        slug,
        title: object.title,
        content: object.content,
        date: date,
        category: object.category,
        readTime: object.readTime,
        excerpt: object.excerpt,
        status: "draft",
        publishedAt: null,
      },
    });

    return NextResponse.json({ success: true, post: object.title });
  } catch (error) {
    console.error("Cron Error:", error);
    return NextResponse.json({ error: error instanceof Error ? error.message : "Failed to generate blog" }, { status: 500 });
  }
}

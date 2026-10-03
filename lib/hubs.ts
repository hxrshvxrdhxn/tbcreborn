import fs from "fs";
import path from "path";
import sanitizeHtml from "sanitize-html";

export interface DataPoint {
  label: string;
  value: string;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface CostBand {
  tier: string;
  range: string;
  timeline: string;
  includes: string;
}

export interface HubEntry {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  summary: string;
  dataPoints: DataPoint[];
  body: string;
  faqs: FAQ[];
  related: string[];
  service: string;
  publishedAt: string;
  indexable: boolean;
  toolA?: string;
  toolB?: string;
  category?: string;
  costBands?: CostBand[];
  optionA?: string;
  optionB?: string;
  verdict?: string;
  industry?: string;
  industrySlug?: string;
  accuracy?: string;
  timeToPilot?: string;
}

export type GlossaryEntry = HubEntry;

export interface IntegrationEntry extends HubEntry {
  toolA: string;
  toolB: string;
}

export interface CostEntry extends HubEntry {
  category: string;
  costBands: CostBand[];
}

export interface CompareEntry extends HubEntry {
  category: string;
  optionA: string;
  optionB: string;
  verdict: string;
}

export interface SolutionEntry extends HubEntry {
  industry: string;
  industrySlug: string;
}

export interface AIUseCaseEntry extends HubEntry {
  category: string;
  accuracy: string;
  timeToPilot: string;
}

const hubsDirectory = path.join(process.cwd(), "content", "hubs");

/**
 * Returns all raw hub entries for a given hub, regardless of publishedAt date.
 * Supports both flat files (content/hubs/<hub>/<slug>.json) and nested directories (content/hubs/<hub>/<subfolder>/<slug>.json).
 */
export async function getAllHubEntries<T extends HubEntry = HubEntry>(hub: string): Promise<T[]> {
  const dir = path.join(hubsDirectory, hub);
  if (!fs.existsSync(dir)) return [];

  function readDirRecursive(currentDir: string): T[] {
    const list: T[] = [];
    const items = fs.readdirSync(currentDir, { withFileTypes: true });
    for (const item of items) {
      const fullPath = path.join(currentDir, item.name);
      if (item.isDirectory()) {
        list.push(...readDirRecursive(fullPath));
      } else if (item.isFile() && item.name.endsWith(".json")) {
        try {
          const raw = fs.readFileSync(fullPath, "utf-8");
          const parsed = JSON.parse(raw) as T;
          list.push(parsed);
        } catch (err) {
          console.error(`Error reading hub entry ${fullPath}:`, err);
        }
      }
    }
    return list;
  }

  return readDirRecursive(dir);
}

/**
 * Returns only visible entries for a given hub (where publishedAt <= now).
 */
export async function getHubEntries<T extends HubEntry = HubEntry>(hub: string): Promise<T[]> {
  const all = await getAllHubEntries<T>(hub);
  const now = new Date();
  return all.filter((entry) => new Date(entry.publishedAt) <= now);
}

/**
 * Returns a specific hub entry by slug, only if publishedAt <= now.
 */
export async function getHubEntry<T extends HubEntry = HubEntry>(
  hub: string,
  slug: string
): Promise<T | null> {
  const directPath = path.join(hubsDirectory, hub, `${slug}.json`);
  if (fs.existsSync(directPath)) {
    try {
      const raw = fs.readFileSync(directPath, "utf-8");
      const parsed = JSON.parse(raw) as T;
      const now = new Date();
      if (new Date(parsed.publishedAt) > now) {
        return null;
      }
      return parsed;
    } catch (err) {
      console.error(`Error reading hub entry ${directPath}:`, err);
      return null;
    }
  }

  // Fallback to recursive search if not flat
  const all = await getAllHubEntries<T>(hub);
  const found = all.find((entry) => entry.slug === slug);
  if (!found) return null;
  const now = new Date();
  if (new Date(found.publishedAt) > now) {
    return null;
  }
  return found;
}

/**
 * Render Markdown content to sanitized HTML matching the blog's renderer.
 */
const HUB_NAMES = ["glossary", "integrations", "cost", "compare", "solutions", "ai-use-cases"] as const;

/**
 * Internal paths (blog posts and hub entries) that are visible right now.
 * Returns null if the blog list cannot be loaded, so callers leave links untouched.
 */
export async function getVisibleInternalPaths(): Promise<Set<string> | null> {
  const paths = new Set<string>();
  for (const hub of HUB_NAMES) {
    const entries = await getHubEntries(hub);
    for (const e of entries) {
      paths.add(hub === "solutions" && e.industrySlug ? `/solutions/${e.industrySlug}/${e.slug}` : `/${hub}/${e.slug}`);
    }
  }
  try {
    const { prisma } = await import("@/lib/prisma");
    const now = new Date();
    const posts = await prisma.post.findMany({ select: { slug: true, status: true, publishedAt: true } });
    for (const p of posts) {
      const live = p.status === "published" || (p.status === "scheduled" && p.publishedAt !== null && new Date(p.publishedAt) <= now);
      if (live) paths.add(`/blog/${p.slug}`);
    }
  } catch {
    return null;
  }
  return paths;
}

/**
 * Turn links to blog posts or hub entries that are not yet published into plain text,
 * so scheduled content never links to a page that would return 404.
 */
export function unlinkUnpublished(html: string, visible: Set<string> | null): string {
  if (!visible) return html;
  return html.replace(
    /<a href="(\/(?:blog|glossary|integrations|cost|compare|ai-use-cases|solutions)\/[^"#?]+)"[^>]*>([\s\S]*?)<\/a>/g,
    (match, href: string, inner: string) => (visible.has(href.replace(/\/$/, "")) ? match : inner)
  );
}

export async function renderMarkdown(content: string): Promise<string> {
  const { remark } = await import("remark");
  const remarkHtmlModule = await import("remark-html");
  const remarkHtml = (remarkHtmlModule as unknown as { default?: Parameters<ReturnType<typeof remark>["use"]>[0] }).default || remarkHtmlModule;
  const rawHtml = (await remark().use(remarkHtml as Parameters<ReturnType<typeof remark>["use"]>[0]).process(content)).toString();

  const clean = sanitizeHtml(rawHtml, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat([
      "img",
      "h1",
      "h2",
      "iframe",
    ]),
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      "*": ["class", "id"],
    },
  });
  return unlinkUnpublished(clean, await getVisibleInternalPaths());
}

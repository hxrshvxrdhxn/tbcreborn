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
}

export type GlossaryEntry = HubEntry;

export interface IntegrationEntry extends HubEntry {
  toolA: string;
  toolB: string;
}

const hubsDirectory = path.join(process.cwd(), "content", "hubs");

/**
 * Returns all raw hub entries for a given hub, regardless of publishedAt date.
 */
export async function getAllHubEntries<T extends HubEntry = HubEntry>(hub: string): Promise<T[]> {
  const dir = path.join(hubsDirectory, hub);
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".json"));
  const entries: T[] = [];

  for (const file of files) {
    const filePath = path.join(dir, file);
    try {
      const raw = fs.readFileSync(filePath, "utf-8");
      const parsed = JSON.parse(raw) as T;
      entries.push(parsed);
    } catch (err) {
      console.error(`Error reading hub entry ${filePath}:`, err);
    }
  }

  return entries;
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
  const filePath = path.join(hubsDirectory, hub, `${slug}.json`);
  if (!fs.existsSync(filePath)) return null;

  try {
    const raw = fs.readFileSync(filePath, "utf-8");
    const parsed = JSON.parse(raw) as T;
    const now = new Date();
    if (new Date(parsed.publishedAt) > now) {
      return null;
    }
    return parsed;
  } catch (err) {
    console.error(`Error reading hub entry ${filePath}:`, err);
    return null;
  }
}

/**
 * Render Markdown content to sanitized HTML matching the blog's renderer.
 */
export async function renderMarkdown(content: string): Promise<string> {
  const { remark } = await import("remark");
  const remarkHtmlModule = await import("remark-html");
  const remarkHtml = (remarkHtmlModule as unknown as { default?: Parameters<ReturnType<typeof remark>["use"]>[0] }).default || remarkHtmlModule;
  const rawHtml = (await remark().use(remarkHtml as Parameters<ReturnType<typeof remark>["use"]>[0]).process(content)).toString();

  return sanitizeHtml(rawHtml, {
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
}

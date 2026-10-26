import { getHubEntries, getHubEntry } from "@/lib/hubs";
import { aiPractices, products, consultingLinks } from "@/lib/offerings";
import { industries } from "@/lib/industries";

export const revalidate = 3600;

const BASE = "https://turbobytesconsulting.com";

// A plain-text guide to the site for language-model crawlers (llmstxt.org format).
export async function GET() {
  const hubs: [string, string][] = [
    ["cost", "Cost guides: indicative cost and timeline ranges for software projects in India"],
    ["compare", "Comparisons: side-by-side guides to common software choices"],
    ["integrations", "Integration guides: connecting Tally, Zoho, Shopify, WhatsApp and other tools"],
    ["glossary", "Glossary: software and AI terms explained for business owners"],
    ["solutions", "Industry solutions: software for manufacturing, education and other sectors"],
    ["ai-use-cases", "AI use cases: practical applications of LLMs in business operations"],
  ];
  const hubLines: string[] = [];
  for (const [hub, label] of hubs) {
    const entries = await getHubEntries(hub);
    if (entries.length > 0) hubLines.push(`- [${label.split(":")[0]}](${BASE}/${hub}):${label.split(":")[1]}`);
  }

  const llmEntry = await getHubEntry("glossary", "llm");
  const ragEntry = await getHubEntry("glossary", "rag");

  const specificGuides: string[] = [];
  specificGuides.push(`- [How-to guides](${BASE}/how-to): step-by-step implementation guides on software, integrations and automation`);
  specificGuides.push(`- [Blog](${BASE}/blog): practical articles on software engineering, business automation and applied AI`);
  if (llmEntry && llmEntry.indexable) {
    specificGuides.push(`- [LLM glossary guide](${BASE}/glossary/llm): Large Language Models explained for business owners`);
  }
  if (ragEntry && ragEntry.indexable) {
    specificGuides.push(`- [RAG glossary guide](${BASE}/glossary/rag): Retrieval-Augmented Generation explained for enterprise data`);
  }

  const line = (l: { title: string; href: string; blurb: string }) => `- [${l.title}](${BASE}${l.href}): ${l.blurb}`;

  const body = `# Turbo Bytes Consulting

> Turbo Bytes Consulting (TBC) is a process-first consulting and software firm in Greater Noida, India. It finds the process that costs a business most and turns it into software it builds, runs and maintains. It builds private LLM and neural network systems, trains teams to use them, advises on technology decisions, and runs its own products.

## Key facts

- Organisation: Turbo Bytes Consulting (TBC)
- Founder: Harshvardhan Chauhan
- Location: Kasana Tower, Alfa Marg, Alpha-I Commercial Belt, Greater Noida, Uttar Pradesh 201310, India
- Service area: Greater Noida, Noida, Delhi NCR, and across India
- Practice areas: custom and on-premise LLMs, AI capability building, technology consulting, technology audits, AI readiness assessments, business diagnostics, and software products
- Email: harsh@turbobytesconsulting.com / info@turbobytesconsulting.com
- Telephone: +91 93547 84377
- Operating hours: Monday to Friday, 08:00 to 21:00 IST
- YouTube: https://www.youtube.com/channel/UCXQy14KS46mSFyu1VzEUqXw

## AI practice

${aiPractices.map(line).join("\n")}

## Consulting

${consultingLinks.map(line).join("\n")}

## Products

${products.map(line).join("\n")}
- [All products](${BASE}/products): overview of Slate, Distil, Vantage, Meridian and Sunscout

## Engineering

- [Custom software development](${BASE}/services/custom-software-development): business systems built around a company's own process
- [AI applications](${BASE}/services/ai-applications): document reading, assistants trained on company documents, LLM features
- [Business automation](${BASE}/services/business-automation): integrations between Tally, Zoho, Shopify, WhatsApp and other tools

## Industries

${industries.map((i) => `- [${i.name}](${BASE}/industries/${i.slug}): ${i.description}`).join("\n")}

## Tools and guides

- [Process cost calculator](${BASE}/process-cost-calculator): what one manual process costs a business each year in time and mistakes
- [Software cost calculator](${BASE}/software-cost-calculator): indicative cost range and timeline for a project in India
${specificGuides.join("\n")}
${hubLines.join("\n")}

## Company

- [About](${BASE}/about)
- [Work](${BASE}/work)
- [Book a 30-minute scoping call](${BASE}/book-consultation)
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}

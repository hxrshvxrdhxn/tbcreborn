import { getHubEntries, getHubEntry } from "@/lib/hubs";
import { aiPractices, consultingLinks } from "@/lib/offerings";

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

> Turbo Bytes Consulting (TBC) is a technology consultancy serving mid-market enterprises worldwide, including clients in India, the Middle East, Asia-Pacific, the UK and the US. We sit with the managing director and frontline teams, measure where processes cost the business most, and fix them: with process automation, bespoke software, and end-to-end digital transformation. We also help organisations earn authoritative visibility in traditional search and conversational AI answers (SEO, AEO, GEO).

## Key facts

- Organisation: Turbo Bytes Consulting (TBC)
- Founder: Harshvardhan Chauhan
- Location: Kasana Tower, Alfa Marg, Alpha-I Commercial Belt, Greater Noida, Uttar Pradesh 201310, India
- Geographic reach: Worldwide (with active client relationships in India, the Middle East, Asia-Pacific, the UK and the US)
- Practice areas: Technology consulting, process automation, custom software development, digital transformation, AEO/SEO/GEO search visibility, and specialised software products
- Proof point: In pilot engagements we have taken work that needed a 40-person technology team and run it with 4 people plus machines.
- Email: info@turbobytesconsulting.com / harsh@turbobytesconsulting.com
- Telephone: +91 93547 84377
- Operating hours: Monday to Friday, 08:00 to 21:00 IST
- Website: https://turbobytesconsulting.com

## Core service pillars

- [Technology Consulting](${BASE}/services/technology-consulting): Diagnostic assessments, systems architecture, and process mapping before capital expenditure.
- [Custom Software Development](${BASE}/services/custom-software-development): Bespoke business software, internal portals, approval workflows, and Tally/ERP integrations.
- [AEO, SEO and GEO Consulting](${BASE}/services/aeo-seo-geo): Making your business findable in Google search and cited in AI answers across ChatGPT, Gemini, and Perplexity.
- [SEO Services](${BASE}/services/seo): Technical crawl architecture, Core Web Vitals, canonical design, and Schema.org entity graphs.
- [Answer Engine Optimisation (AEO)](${BASE}/services/answer-engine-optimisation): Featured snippets, People Also Ask answers, and voice search answer headers.
- [Generative Engine Optimisation (GEO)](${BASE}/services/generative-engine-optimisation): Entity grounding, machine-readable llms.txt, and authority citations for AI models.
- [Free AI Visibility Check](${BASE}/free-ai-visibility-check): Complimentary diagnostic testing if ChatGPT, Gemini, and Perplexity recommend your business.
- [Digital Transformation](${BASE}/digital-transformation): End-to-end modernisations across five structured phases: Diagnose, Design, Build, Run, and Hand Over.
- [Business Process Automation](${BASE}/services/business-automation): Removing repetitive data entry, paper sign-offs, and fragmented cross-department delays.

## Products

Proof that we ship. Consulting leads.

- [Distil](${BASE}/products/distil): Technical proposal assembly engine for heavy engineering and EPC contractors.
- [Sunscout](${BASE}/products/sunscout): Rooftop solar prospecting and site sizing for commercial and industrial EPCs.
- [Meridian](${BASE}/products/meridian): All-in-one operations platform uniting order tracking, quality assurance COAs, and service lifecycles with an isolated per-company intelligence brain.
- [Cadence](${BASE}/products/cadence): Order-to-dispatch tracking for make-to-order manufacturers.
- [Assay](${BASE}/products/assay): Certificate of Analysis (COA) generation and laboratory quality tracking.
- [Steward](${BASE}/products/steward): Installed base equipment lifecycle, maintenance contracts, and field service management.
- [Compass](${BASE}/products/compass): Operational margin tracking and project health visibility for professional firms.
- [Relay](${BASE}/products/relay): B2B mobile ordering and account management portal for dealer networks.
- [Rapport](${BASE}/products/rapport): Omnichannel customer intake, enquiry routing, and response tracking.
- [Vantage](${BASE}/products/vantage): Plain-text question answering grounded exclusively in your own catalogues and manuals.

## AI practice

${aiPractices.map(line).join("\n")}

## Consulting

${consultingLinks.map(line).join("\n")}

## Research, guides and knowledge hubs

${hubLines.join("\n")}
${specificGuides.join("\n")}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}

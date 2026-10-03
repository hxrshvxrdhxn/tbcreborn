import { getHubEntries } from "@/lib/hubs";

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

  const body = `# Turbo Bytes Consulting

> Turbo Bytes Consulting (TBC) builds custom software, mobile apps, LLM and neural network applications and business automation for founder-led companies in Greater Noida, Noida and Delhi NCR, India.

Office: Kasana Tower, Alpha I, Greater Noida, Uttar Pradesh, India. Hours: Monday to Friday, 08:00 to 21:00 IST. Email: info@turbobytesconsulting.com. Phone: +91 93547 84377.

## Services

- [Custom software development](${BASE}/services/custom-software-development): business systems built around a company's own process
- [Mobile app development](${BASE}/services/mobile-app-development): Android and iOS apps for field teams, dealers and customers
- [AI applications](${BASE}/services/ai-applications): document reading, assistants trained on company documents, LLM features
- [Business automation](${BASE}/services/business-automation): integrations between Tally, Zoho, Shopify, WhatsApp and other tools
- [Web development](${BASE}/services/web-development): fast, search-friendly business websites and web applications
- [MVP development](${BASE}/services/mvp-development): first versions of startup products

## Tools and guides

- [Software cost calculator](${BASE}/software-cost-calculator): indicative cost range and timeline for a project in India
${hubLines.join("\n")}
- [Blog](${BASE}/blog): articles on software, automation and applied AI for mid-sized businesses

## Company

- [About](${BASE}/about)
- [Work](${BASE}/work)
- [Book a 30-minute scoping call](${BASE}/book-consultation)
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
  content: string; // HTML string
}

export const blogPosts: BlogPost[] = [
  {
    slug: "intelligence-layer-competitors-havent-found",
    title: "The intelligence layer your competitors haven't found yet.",
    category: "AI Strategy",
    excerpt:
      "Most organisations are treating AI as a feature to add. The ones winning are treating it as a foundation to build on.",
    date: "May 2026",
    readTime: "6 min read",
    content: `<p style="font-size:19px;line-height:1.7;">Most organisations are treating AI as a feature to add on top of existing operations. The ones that will dominate their categories over the next five years are treating it as a structural foundation — the layer through which every business decision is made, every workflow is run, and every competitive advantage is compounded.</p><p>The difference is not technical. It is strategic.</p><p>An intelligence layer is not a chatbot. It is not a subscription to an AI tool. It is a coherent, integrated system — trained on your organisation's knowledge, deployed across your operations, and measured against specific business outcomes.</p><p>The organisations that build this first will have an advantage that is difficult to replicate: not just because of the technology, but because of the institutional intelligence embedded in it. Your LLM, trained on seven years of your firm's decisions and documents, is not something a competitor can buy off the shelf.</p><p>The question is not whether to build an intelligence layer. The question is whether you build it before or after your competitors do.</p>`,
  },
  {
    slug: "90-day-diagnostic-ai-levers",
    title: "A 90-day diagnostic to find every AI lever inside a 50-person firm.",
    category: "Framework",
    excerpt:
      "A structured approach to identifying exactly where artificial intelligence creates the highest leverage inside a growing organisation.",
    date: "May 2026",
    readTime: "9 min read",
    content: `<p style="font-size:19px;line-height:1.7;">The most common mistake organisations make when approaching AI is starting with technology rather than operations. They ask: what AI tools should we use? They should be asking: where do we lose the most time, make the most inconsistent decisions, and rely on the most individuals to hold critical knowledge?</p><p>A proper AI diagnostic answers those questions before any technology is evaluated.</p><h2>The Three Layers of AI Opportunity</h2><p>In any 50-person firm, AI opportunity exists across three distinct layers:</p><p><strong>Layer 1 — Knowledge</strong>: Where is your institutional knowledge trapped? In documents no one reads. In the heads of two or three key people. In onboarding processes that take three weeks. A Custom LLM addresses this layer directly.</p><p><strong>Layer 2 — Process</strong>: Where are decisions made inconsistently? Where do tasks take twice as long as they should because the process is manual, fragmented, or undocumented? Automation and AI-assisted workflows address this layer.</p><p><strong>Layer 3 — External Presence</strong>: Is your digital presence generating the leads and the authority your quality deserves? AI-driven content and conversion-optimised web presence address this layer.</p><p>The 90-day diagnostic moves through each layer systematically, producing a ranked list of interventions by impact and implementation speed.</p>`,
  },
  {
    slug: "on-premise-llms-professional-services",
    title:
      "Why on-premise LLMs are about to become standard for professional services.",
    category: "Perspective",
    excerpt:
      "Data sovereignty, competitive intelligence, and institutional knowledge — three reasons on-premise AI deployment is not optional for serious firms.",
    date: "April 2026",
    readTime: "7 min read",
    content: `<p style="font-size:19px;line-height:1.7;">Professional services firms — law practices, CA firms, consulting businesses, healthcare providers — operate on one irreducible asset: confidential knowledge. Client files. Case precedent. Proprietary methodologies. Regulatory analysis.</p><p>Sending that knowledge to a third-party AI system in the cloud is not a technology decision. It is a risk decision. And for most serious firms, it is a risk they should not be taking.</p><p>On-premise and private-cloud LLM deployment has, until recently, been impractically expensive and technically complex. That has changed. The tooling, the infrastructure, and the deployment expertise required to run a Custom LLM on your own servers — or your own private cloud partition — is now accessible to organisations of 20 people and above.</p><p>The firms that move first will not just be protecting data. They will be building proprietary intelligence assets. An LLM trained on your firm's seven years of case decisions, client briefs, and regulatory filings is not something a competitor can replicate. It becomes a compounding competitive advantage — one that improves as your firm produces more knowledge.</p><p>The question for professional services leaders is not whether to move to on-premise AI. The question is when.</p>`,
  },
];

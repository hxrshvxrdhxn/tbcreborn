// Single source for the practice structure shown in the nav, footer, home page and services index.
// Copy rules: British spelling, no exclamation marks, no prices, no unverifiable figures.

export type Link = { title: string; href: string; blurb: string };

export const aiPractices: Link[] = [
  {
    title: "Custom LLM and on-premise AI",
    href: "/services/custom-llm",
    blurb: "A private LLM trained on your own knowledge, run where your data is allowed to live.",
  },
  {
    title: "AI capability building",
    href: "/services/ai-training",
    blurb: "Programmes that teach your people to use LLMs and neural networks well, in their own work.",
  },
];

export const products: Link[] = [
  {
    title: "Slate",
    href: "/services/slate",
    blurb: "An executive assistant for the people who lead.",
  },
  {
    title: "Distil",
    href: "/products#distil",
    blurb: "Complex proposals, assembled from verified parts.",
  },
  {
    title: "Vantage",
    href: "/products#vantage",
    blurb: "Years of documents, turned into answers with sources.",
  },
  {
    title: "Meridian",
    href: "/products#meridian",
    blurb: "One operating system that connects every team.",
  },
];

export type ConsultingService = {
  slug: string;
  title: string;
  short: string;
  lead: string;
  metaDescription: string;
  covers: string[];
  process: { title: string; body: string }[];
  deliverables: string[];
  faqs: { q: string; a: string }[];
};

export const consulting: ConsultingService[] = [
  {
    slug: "technology-consulting",
    title: "Technology strategy and advisory",
    short: "Technology advisory",
    lead: "An independent view on what to build, what to buy and what to leave alone, from people who also build.",
    metaDescription:
      "Independent technology strategy and advisory for founder-led businesses: roadmaps, build-or-buy decisions, vendor selection and architecture review.",
    covers: [
      "A technology roadmap tied to your business priorities",
      "Build, buy or extend decisions for core systems",
      "Vendor and platform selection, including contract and lock-in review",
      "Architecture review for systems you plan to scale",
      "Retained advisory for founders and leadership teams",
    ],
    process: [
      { title: "Understand", body: "How the business makes money, how work moves, and what your current systems do." },
      { title: "Map the options", body: "Each choice set out with its cost, risk and time to value." },
      { title: "Recommend", body: "A clear recommendation, with reasoning you can test and challenge." },
      { title: "Stay close", body: "Optional support while the plan is carried out, by us or by your own team." },
    ],
    deliverables: [
      "A written technology roadmap",
      "A decision memo for each major choice",
      "A vendor shortlist with evaluation criteria",
    ],
    faqs: [
      {
        q: "Do you also build what you recommend?",
        a: "We can, but you are under no obligation. Advice that only ever recommends our own work is not advice.",
      },
      {
        q: "How long does an advisory engagement take?",
        a: "A focused engagement usually runs a few weeks. Retained advisory continues month to month for as long as it is useful.",
      },
    ],
  },
  {
    slug: "technology-audit",
    title: "Technology and systems audit",
    short: "Technology audit",
    lead: "A clear, independent account of what your software, data and vendors are really doing for you, and what they cost you.",
    metaDescription:
      "Independent technology and systems audit: code quality, security and access, data quality, vendors and licences, and cloud costs, with a prioritised fix plan.",
    covers: [
      "Software and code quality review",
      "Security and access: who can see what, offboarding and backups",
      "Data quality and how your systems connect",
      "Vendors, licences and subscriptions",
      "Cloud and hosting costs",
    ],
    process: [
      { title: "Agree scope and access", body: "What we review, who we speak to, and read-only access, agreed in writing." },
      { title: "Review", body: "Systems, code, contracts and day-to-day practice, checked against the evidence." },
      { title: "Rank the findings", body: "Every finding ranked by risk and by cost to the business." },
      { title: "Read-out", body: "A session with your leadership and a plan that anyone competent can carry out." },
    ],
    deliverables: [
      "An audit report with findings ranked by severity",
      "A prioritised remediation plan",
      "A one-page summary for owners or the board",
    ],
    faqs: [
      {
        q: "Do you need access to our systems?",
        a: "Read-only access covers most of the review. Scope and access are agreed in writing before any work starts.",
      },
      {
        q: "Will you fix what you find?",
        a: "We can, or we can brief your team or your current vendor. The plan is written to be carried out by whoever you choose.",
      },
    ],
  },
  {
    slug: "ai-readiness-assessment",
    title: "AI readiness assessment",
    short: "AI readiness",
    lead: "Where LLMs and neural networks will genuinely help your business, where they will not, and what has to be true first.",
    metaDescription:
      "AI readiness assessment: use-case discovery, data readiness, risk and governance, and a pilot plan for the use cases most likely to pay off.",
    covers: [
      "Use-case discovery across each department",
      "Data readiness: where your data lives, its quality and who can reach it",
      "Privacy, risk and governance",
      "A build, buy or wait view for each use case",
      "Team skills and readiness for change",
    ],
    process: [
      { title: "Workshops", body: "Short sessions with each function to find where time and judgement are spent." },
      { title: "Score", body: "Each use case scored on value, feasibility and risk." },
      { title: "Plan a pilot", body: "A pilot for the strongest one or two, with measures agreed up front." },
      { title: "Roadmap", body: "What to do now, what to prepare for, and what to leave alone." },
    ],
    deliverables: [
      "A scored use-case register",
      "A pilot plan with success measures",
      "A data and governance checklist",
    ],
    faqs: [
      {
        q: "Our data is not clean. Is it too early?",
        a: "Usually not. Part of the assessment is showing which use cases work with the data you already have, and which need groundwork first.",
      },
      {
        q: "Will you recommend a particular AI vendor?",
        a: "Only where it fits. Some use cases suit a hosted model, some need an on-premise model, and some need no AI at all.",
      },
    ],
  },
  {
    slug: "business-diagnostic",
    title: "Business diagnostic",
    short: "Business diagnostic",
    lead: "A short, structured look at how work really flows through your business, and the one or two changes that would matter most.",
    metaDescription:
      "Business diagnostic for founder-led companies: process mapping, bottleneck and rework analysis, reporting gaps, and a 90-day action plan.",
    covers: [
      "Process mapping for core workflows: sales, operations and finance",
      "Bottlenecks, rework and manual entry",
      "Tools and spreadsheets in use, and how they connect",
      "Reporting: what leadership sees, and what it cannot",
      "Quick wins and longer-term fixes",
    ],
    process: [
      { title: "Listen", body: "Interviews with the founder and the people who do the work." },
      { title: "Map", body: "The workflow as it really runs, not as the chart says it does." },
      { title: "Find the leaks", body: "Where time, money and information are lost." },
      { title: "Recommend", body: "Changes ranked by effort and impact, with an owner for each." },
    ],
    deliverables: [
      "Current-state process maps",
      "A ranked list of bottlenecks with the effort to fix each",
      "A 90-day action plan",
    ],
    faqs: [
      {
        q: "Who needs to be involved?",
        a: "The founder or managing director, plus one or two people from each team we look at. Most interviews take under an hour.",
      },
      {
        q: "Is this only about technology?",
        a: "No. Some of the best fixes are a changed approval, a single owner or a removed step. Technology comes in where it earns its place.",
      },
    ],
  },
];

export const consultingLinks: Link[] = consulting.map((c) => ({
  title: c.title,
  href: `/services/${c.slug}`,
  blurb: c.lead,
}));

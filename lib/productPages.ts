// Product landing pages (Sunscout, Distil). Plain data so the page, sitemap and llms.txt read
// from one source. Copy rules: British spelling, no exclamation marks, no client names or client
// data, no figures we cannot stand behind.

export type ProductPage = {
  slug: string;
  name: string;
  title: string; // <title>, ≤ 60 chars
  description: string; // meta description, ≤ 160 chars
  eyebrow: string;
  headline: string;
  lead: string;
  steps: { title: string; body: string }[];
  capabilities: { title: string; body: string }[];
  principles: { title: string; body: string }[];
  forWho: string[];
  status: string;
  faqs: { q: string; a: string }[];
};

export const productPages: ProductPage[] = [
  {
    slug: "sunscout",
    name: "Sunscout",
    title: "Sunscout: Rooftop Solar Prospecting for C&I EPCs | TBC",
    description:
      "Draw an industrial area and Sunscout finds the factory roofs, groups them into customer sites, sizes them in kWp and ranks them for your sales team.",
    eyebrow: "For commercial and industrial solar EPCs",
    headline: "Find the rooftops worth a proposal.",
    lead:
      "Sunscout is a prospecting tool for rooftop solar companies that sell to factories and warehouses. Pick an industrial belt or draw an area on the map. Sunscout finds the buildings, groups them into customer sites, sizes each one, works out savings from your own tariff and cost inputs, and ranks the list, so your sales team spends its days on the right factories.",
    steps: [
      { title: "Choose an area", body: "Pick an industrial belt, draw a polygon or set a radius on the map." },
      { title: "Find the sites", body: "Building footprints from open data are cleaned, de-duplicated and grouped into customer sites: a factory premises, or a cluster of sheds." },
      { title: "Size and score", body: "Each site is sized in kWp, with savings and payback worked out from your own inputs, then scored on five factors you can see." },
      { title: "Review and assign", body: "Reps confirm the occupant, mark sites that already have solar or are not a fit, and assign the rest." },
      { title: "Take it to sales", body: "Export the list today. A one-page proposal and CRM sync are on the way." },
    ],
    capabilities: [
      { title: "Footprints to customer sites", body: "Thousands of building footprints become a short list of real sites, grouped by premises or by distance, with duplicates across sources removed." },
      { title: "Sizing for every metering mode", body: "System size in kWp for net metering, gross metering and the other arrangements each state allows." },
      { title: "Savings from your numbers", body: "Savings and payback use your tariffs, cost per kWp, specific yield and self-consumption share, set per state and versioned." },
      { title: "A score you can read", body: "Each site gets a five-factor score with its breakdown, so a manager can see why one factory ranks above another." },
      { title: "Open-data enrichment", body: "Likely occupant names, roofs that already carry solar, and the nearest substation, all from open data." },
      { title: "A review queue built for speed", body: "Keyboard shortcuts, undo and a tablet-friendly layout, so a rep can work through a belt in one sitting." },
      { title: "Pipeline and export", body: "A pipeline view for managers and a clean CSV export, protected against spreadsheet formula injection." },
      { title: "Settings with history", body: "Every business input is versioned, with publish, diff and a completeness check for each state." },
    ],
    principles: [
      { title: "Gates, not guesses", body: "If a business input is missing, Sunscout says so and holds the savings back. It never fills a gap with a default. Every number in a proposal is calculated by code." },
      { title: "Licensed data only", body: "Open data such as Overture Maps and OpenStreetMap, with attribution. No scraping of Google Maps, and live lookups are shown, not stored." },
      { title: "People send, software prepares", body: "Sunscout does not send emails or messages on its own. Your team decides who to contact and when." },
      { title: "Your data stays yours", body: "Each company's data is kept separate at the database level, built with India's DPDP Act in mind." },
    ],
    forWho: [
      "Rooftop EPCs selling to factories, warehouses and commercial buildings",
      "Developers offering CAPEX and RESCO or PPA models",
      "Teams working across several states, each with its own tariffs and metering rules",
      "EPCs expanding into new countries, with a settings pack per market",
    ],
    status: "Start with a free trial. Tell us one industrial area your team sells in and we run Sunscout on it, then walk you through the ranked site list. If it is useful, we set it up with your own tariff and cost inputs and your target areas.",
    faqs: [
      { q: "Where does the building data come from?", a: "From open datasets such as Overture Maps and OpenStreetMap, which may be stored and reused with attribution. We do not scrape Google Maps." },
      { q: "Why does it ask for our tariffs and costs?", a: "Because savings and payback should come from your numbers, not ours. If an input is missing, Sunscout tells you rather than guessing." },
      { q: "Does it contact prospects for us?", a: "No. It prepares the list and the numbers. Your team decides who to contact and sends every message itself." },
      { q: "Can it work outside India?", a: "Yes. Tariffs, metering rules and yields live in a settings pack per country, and new markets are added the same way." },
      { q: "Who can see our data?", a: "Only your organisation. Each company's data is separated at the database level, with access controlled by role." },
      { q: "Is there a free trial?", a: "Yes. Name one industrial area and we run Sunscout on it for you at no cost, with the ranked site list and kWp sizes." },
    ],
  },
  {
    slug: "distil",
    name: "Distil",
    title: "Distil: Proposal Engine for Engineering Firms | TBC",
    description:
      "Distil assembles detailed techno-commercial proposals from your approved sections and rates, traces every figure to its source and stops when a number does not add up.",
    eyebrow: "For engineering and manufacturing firms",
    headline: "Complex proposals, assembled from verified parts.",
    lead:
      "Distil is a proposal engine for firms that send long techno-commercial proposals: process plant and equipment makers, EPC contractors and machine builders. A rep pastes the enquiry. Distil works out what is being asked for, selects the matching sections from your own approved library, costs them from your rates and assembles a complete proposal in your format, ready for an engineer to check.",
    steps: [
      { title: "Paste the enquiry", body: "An email, a datasheet or a tender. Distil reads it and lists what the client is asking for." },
      { title: "Select the scope", body: "The matching sections, equipment and options are chosen from your approved library, by your rules." },
      { title: "Cost it", body: "Every price comes from your own cost master and rates, in the proposal's currency." },
      { title: "Assemble", body: "A complete proposal in your format, with all its annexures, as PDF or Word." },
      { title: "Check and issue", body: "An engineer reviews the draft, adjusts what needs judgement, and issues the client version." },
    ],
    capabilities: [
      { title: "Reads any enquiry", body: "Emails, datasheets and tenders in different layouts, with anything unclear flagged for a person." },
      { title: "Your library, your rules", body: "Sections, specifications and makes come from content your engineers have approved." },
      { title: "Costing from your rates", body: "Line items are priced from your cost master, with currency handled properly." },
      { title: "Every figure traceable", body: "Each number in the proposal can be traced to the rule or rate it came from." },
      { title: "Stops when it should", body: "If something does not add up, the proposal is held back with the reason, not sent with a guess." },
      { title: "Your format, every time", body: "Proposals come out in your house layout, with clean client versions and internal drafts kept apart." },
    ],
    principles: [
      { title: "The model writes words, not numbers", body: "An LLM reads enquiries and re-words approved text. It never sets a price, a quantity, a specification or a make." },
      { title: "Your knowledge stays yours", body: "Your past proposals, rates and engineering content are yours alone. Distil runs on your data and never shares it." },
      { title: "Engineers stay in charge", body: "Distil prepares the draft. An engineer checks and issues it." },
    ],
    forWho: [
      "Process plant and equipment manufacturers",
      "EPC contractors with detailed technical bids",
      "Machine builders and packaging line suppliers",
      "Any firm where a proposal takes days and depends on a few senior people",
    ],
    status: "Start with a free trial. Send us one recent enquiry and a past proposal for similar scope, and we show you the proposal Distil assembles. If it is useful, we set it up on your own approved content and rates; your data is never shared with anyone else.",
    faqs: [
      { q: "Does an LLM set our prices?", a: "No. Prices, quantities, specifications and makes come from your rules and rates. The model only reads enquiries and helps with wording." },
      { q: "Do we need to rewrite our proposals first?", a: "No. We start from your past proposals and approved content, and turn them into a library your team keeps up to date." },
      { q: "Is our data used for anyone else?", a: "Never. Each firm's library, rates and proposals are its own." },
      { q: "What formats does it produce?", a: "PDF and Word, in your layout, with a clean client version and an internal draft." },
      { q: "Is there a free trial?", a: "Yes. Send one recent enquiry and a past proposal for similar scope, and we show you what Distil produces from it, at no cost." },
    ],
  },
];

export const productPageBySlug = (slug: string) => productPages.find((p) => p.slug === slug);

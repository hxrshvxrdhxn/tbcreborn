// Product pages for the operations tools (Nov 2026): Vantage, Cadence, Assay, Steward, Compass, Relay
// and Rapport. Same copy rules as productPages.ts: British spelling, no exclamation marks, no client
// names or client data, no figures we cannot stand behind.

import type { ProductPage } from "./productPages";

const TRIAL =
  "Start with a free 30-day trial on a demo set up for your company: your name and logo, sample data shaped like your business, and a login for each role in your team. If it fits, we set it up on your own data and run it for you.";

export const toolPages: ProductPage[] = [
  {
    slug: "vantage",
    name: "Vantage",
    title: "Vantage: Answers From Your Own Catalogues and Manuals | TBC",
    description:
      "Ask a product question in plain words and get the answer from your own catalogues, datasheets and manuals, with the page it came from.",
    eyebrow: "For companies with a large technical product range",
    headline: "Every answer, with the page it came from.",
    lead:
      "Vantage reads your catalogues, datasheets, manuals, certificates and application notes. Your sales engineers, support team and new hires ask in plain words and get a short answer that quotes the exact page. If your documents do not cover it, Vantage says so and passes the question to an expert, instead of guessing.",
    steps: [
      { title: "Load your documents", body: "Catalogues, datasheets, manuals and price lists, from a folder or a shared drive. Tables are read as tables." },
      { title: "Set who sees what", body: "Public, dealer, internal and restricted collections, so price lists stay with the people who should see them." },
      { title: "Ask", body: "In English or Hindi. Every answer cites the document, page and version." },
      { title: "Select", body: "Give the requirement and Vantage lists the models that match, from a spec table your engineers have checked." },
      { title: "Improve", body: "Wrong answers are flagged to an expert, whose approved answer is used from then on." },
    ],
    capabilities: [
      { title: "Answers with sources", body: "Each answer links to the page it came from, so anyone can check it in seconds." },
      { title: "Says when it does not know", body: "No source, no answer. The question goes to an expert and shows up as a gap to fill." },
      { title: "Numbers copied, never invented", body: "Ratings, ranges and dimensions are quoted from the source, and checked against it before the answer is shown." },
      { title: "Product selection", body: "Filter the range against a requirement using a reviewed spec table, with the reason each model is in or out." },
      { title: "Version aware", body: "A new datasheet replaces the old one, and answers cite the current version." },
      { title: "A website assistant", body: "An optional widget on your site answers visitors from your public documents and captures call-back requests." },
    ],
    principles: [
      { title: "Your documents only", body: "Vantage never answers from the open internet or from general knowledge. Only from what you have loaded." },
      { title: "Experts stay in charge", body: "Your senior people approve the answers that matter, and their approved answers come first." },
      { title: "Your data stays yours", body: "Each company's documents are kept separate, with access by role. An on-premise option is available." },
    ],
    forWho: [
      "Instrumentation, test and measurement companies",
      "Electronic component makers and distributors",
      "Chemical, material and steel distributors with large ranges",
      "Any firm where product answers depend on two or three senior people",
    ],
    status: TRIAL,
    faqs: [
      { q: "Can it make up an answer?", a: "It is built not to. Answers come only from your documents, each claim cites its page, and numbers are checked against the source before the answer is shown." },
      { q: "Can customers use it on our website?", a: "Yes, as an option. The website assistant only reads documents you mark as public." },
      { q: "Does it show prices?", a: "Only to staff you allow, and only from a dated price list. Never on the website." },
      { q: "Is there a free trial?", a: "Yes. We load your public catalogues and datasheets into a demo with your name and logo, free for 30 days." },
    ],
  },
  {
    slug: "cadence",
    name: "Cadence",
    title: "Cadence: Order-to-Dispatch Tracking for Manufacturers | TBC",
    description:
      "Every customer order from PO to dispatch on one board, with stage owners, delays flagged early and a customer update in one tap.",
    eyebrow: "For manufacturers who make to order",
    headline: "Know where every order is, before the customer asks.",
    lead:
      "Cadence puts every customer order on one board, from the purchase order to the truck leaving the gate. Each stage has an owner and a date. When material is late or a lot is on QC hold, the order turns amber days before the promised date, not on it. Your team answers \"where is my order\" in seconds, and the MD sees what is late and who holds it.",
    steps: [
      { title: "Enter the order", body: "Type it in or upload the customer's PO. Dates for each stage are planned back from the promise." },
      { title: "Update on the floor", body: "Stores, production, QC and packing mark their stage on a phone, in one tap." },
      { title: "See risk early", body: "A late stage moves everything after it, and the order shows at risk while there is still time to act." },
      { title: "Dispatch", body: "Full or part dispatch with a packing list and challan made from the order, not retyped." },
      { title: "Keep customers told", body: "A status or delay update previewed and sent by WhatsApp or email when you choose." },
    ],
    capabilities: [
      { title: "One board for all orders", body: "By stage, by customer or by date, coloured on track, at risk or late." },
      { title: "Phone-first for the floor", body: "Each stage owner sees today's work and updates it in a few taps, with photos." },
      { title: "Block reasons that count", body: "Material short, machine down, QC hold: recorded when they happen, ranked by days lost." },
      { title: "Dispatch documents", body: "Packing lists and delivery challans in your format, straight from the order." },
      { title: "Customer updates", body: "Templates for confirmation, dispatch and delay notices. Nothing goes out without your say." },
      { title: "On-time reports", body: "On-time dispatch by customer and product, stage cycle times and the causes of delay." },
    ],
    principles: [
      { title: "Dates come from your plan", body: "Expected dates are calculated from your stages and working days, never guessed." },
      { title: "People send, software prepares", body: "Customer messages are off until you switch them on, and delay notices always need a person." },
      { title: "Works with your ERP", body: "Cadence tracks the work. Invoices and accounts stay in Tally or your ERP." },
    ],
    forWho: [
      "Packaging, label and printing companies",
      "Plastic moulding and auto component makers",
      "Metal, fastener, casting and fabrication units",
      "Electrical and electronics assembly",
    ],
    status: TRIAL,
    faqs: [
      { q: "Do our shop-floor staff need training?", a: "Very little. Each person sees only their own stage on a phone, with start, done and blocked buttons." },
      { q: "Does it replace our ERP or Tally?", a: "No. It tracks the order's journey. Invoices stay in your accounting system and the invoice number is recorded against each dispatch." },
      { q: "Will it message our customers automatically?", a: "Only if you switch that on, message type by message type. Delay notices always need a person to press send." },
      { q: "Is there a free trial?", a: "Yes. We set up a demo with your name and logo and orders shaped like yours, free for 30 days." },
    ],
  },
  {
    slug: "assay",
    name: "Assay",
    title: "Assay: Batch Records, QC and COAs Without Retyping | TBC",
    description:
      "Batch records, QC results, certificates of analysis and audit packs in one place. COAs come straight from the recorded results.",
    eyebrow: "For food, dairy, chemical and nutraceutical manufacturers",
    headline: "Every batch, on record. Every COA, from the data.",
    lead:
      "Assay keeps each batch's full record: the raw material lots used, the process readings, the QC results and the release decision. Pass or fail is worked out against your specification, an out-of-spec result holds the batch until QA decides, and the certificate of analysis is generated from the results themselves. When an auditor or customer asks for a batch's history, the audit pack takes minutes.",
    steps: [
      { title: "Open the batch", body: "Production records the lots used and the readings against limits, on a tablet or phone." },
      { title: "Test", body: "QC enters results. Pass or fail is worked out against the active specification." },
      { title: "Hold or release", body: "A critical fail holds the batch automatically. QA releases with a signature." },
      { title: "Issue the COA", body: "Generated from the results in your format, with a QR code customers can check." },
      { title: "Show the auditor", body: "One indexed pack for a batch, a product or a month, with a time-limited link." },
    ],
    capabilities: [
      { title: "Digital batch records", body: "Lots, readings, yields and signatures, with corrections that never overwrite the original." },
      { title: "Specifications with versions", body: "Each result is judged against the specification that applied on the day." },
      { title: "COAs without retyping", body: "Values on the certificate are the recorded values. Customer-specific formats supported." },
      { title: "Traceability", body: "From a finished batch back to raw material lots and suppliers, and forward for a recall." },
      { title: "Deviations and CAPA", body: "Raise, investigate and close with owners and dates." },
      { title: "Document control", body: "Current SOPs on the floor, review reminders and read-and-understood tracking." },
    ],
    principles: [
      { title: "Results decide, not the software's opinion", body: "Pass and fail are calculated from your limits. No model ever enters or changes a result." },
      { title: "Nothing is overwritten", body: "Every correction keeps the old value, the reason, the person and the time." },
      { title: "Your quality team stays in charge", body: "Only QA can release a batch, and the release is blocked while a critical issue is open." },
    ],
    forWho: [
      "Dairy, spices, edible oil and packaged food units",
      "Aroma chemicals, flavours and fragrances",
      "Specialty, construction and adhesive chemicals",
      "Nutraceutical and cosmetic ingredient makers",
    ],
    status: TRIAL,
    faqs: [
      { q: "Is it validated for pharma GMP?", a: "The first version is built for food, chemicals and non-sterile manufacturing. A validated deployment for pharma is a separate engagement." },
      { q: "Can it make our customer-specific COA formats?", a: "Yes. Each format maps to the same recorded results, so the values are always identical." },
      { q: "Can auditors see it?", a: "You can share an audit pack with a read-only link that expires on the date you choose." },
      { q: "Is there a free trial?", a: "Yes. We set up a demo with your name and logo, products and tests like yours, free for 30 days." },
    ],
  },
  {
    slug: "steward",
    name: "Steward",
    title: "Steward: Installed Base, AMC and Service Desk | TBC",
    description:
      "One record for every machine you have sold, with AMC dates, service history and spares. Engineers arrive prepared and renewals are never missed.",
    eyebrow: "For equipment and machinery makers",
    headline: "Look after every machine you have sold.",
    lead:
      "Steward keeps one record for each machine in the field: where it is, its warranty and AMC dates, every visit and every part replaced. Complaints become tickets with a response clock. Preventive visits are scheduled from the contract. Renewals show up months ahead with a quote ready. Your engineers open the machine's history on their phone before they arrive, and service becomes steady revenue rather than a cost of answering calls.",
    steps: [
      { title: "Build the register", body: "Import your sales records once. Each machine gets its own page and QR label." },
      { title: "Log the call", body: "Type the serial number and the machine, its contract and its response time appear." },
      { title: "Send the right engineer", body: "Nearest engineer with the right skill, with the history and likely parts on their phone." },
      { title: "Close it properly", body: "Checklist, readings, parts, photos and the customer's signature, with a report in your format." },
      { title: "Renew and sell", body: "AMC renewals and spares due are listed ahead of time, with quotes from your price list." },
    ],
    capabilities: [
      { title: "Installed base register", body: "Every machine on a map and a list, with its contract, age and history." },
      { title: "Tickets with SLA clocks", body: "Response times from each contract, with breaches flagged before they happen." },
      { title: "Preventive maintenance", body: "Visits generated from contract terms, with model-specific checklists." },
      { title: "Engineer app", body: "History, checklists, parts and signatures on a phone, working offline at site." },
      { title: "Renewals and win-backs", body: "Contracts ending, lapsed contracts and machines out of warranty with no AMC." },
      { title: "Spares leads", body: "Parts due by interval or seen wearing on a visit, turned into quotes." },
    ],
    principles: [
      { title: "Prices from your price list", body: "Quotes use your price list and escalation settings. Nothing is priced by guesswork." },
      { title: "People send, software prepares", body: "Customer messages are off until you switch them on." },
      { title: "Your data stays yours", body: "Each company's installed base is kept separate, with access by role." },
    ],
    forWho: [
      "Cranes, elevators and material handling",
      "Gensets, pumps, compressors and blowers",
      "Commercial refrigeration and kitchen equipment",
      "CNC, laser and special purpose machines, test instruments",
    ],
    status: TRIAL,
    faqs: [
      { q: "Our machine records are messy. Is that a problem?", a: "No. The import is built for messy sales registers, with duplicates matched by serial number and a preview before anything is saved." },
      { q: "Does it work where there is no signal?", a: "Yes. The engineer app keeps the job on the phone and syncs when back online." },
      { q: "Can customers raise complaints themselves?", a: "Yes, as an option, by scanning the machine's QR label or through a customer portal." },
      { q: "Is there a free trial?", a: "Yes. We set up a demo with your name and logo and machines like yours, free for 30 days." },
    ],
  },
  {
    slug: "compass",
    name: "Compass",
    title: "Compass: Projects, Timesheets and Reports for Consultancies | TBC",
    description:
      "Deliverables, client comments, timesheets and fee against hours for consultancies and design firms, with progress reports drafted from the data.",
    eyebrow: "For engineering consultancies and design firms",
    headline: "Know which projects are slipping, and which are losing money.",
    lead:
      "Compass runs a consultancy's projects in one place: the deliverables register, client comments, weekly timesheets, and fee earned against hours spent. The weekly or monthly progress report is drafted from what actually happened that period, and the project manager finishes it in minutes. Partners see every project's health and margin on one screen, before the invoice goes out.",
    steps: [
      { title: "Set up the project", body: "From a template for your type of work, with stages, fees and the deliverables list." },
      { title: "Track deliverables", body: "Revisions, submissions, transmittals and client comments, closed one by one." },
      { title: "Fill timesheets", body: "A weekly grid with last week's projects pre-filled, approved by the project manager." },
      { title: "Draft the report", body: "Tables and figures from the data, the narrative drafted for the PM to edit." },
      { title: "Watch the margin", body: "Hours and cost against fee earned, per project and across the firm." },
    ],
    capabilities: [
      { title: "Deliverables register", body: "Every drawing, report and model with its revision and status, linked to where the file lives." },
      { title: "Client comments to closure", body: "Comments tracked per revision, with a response sheet for resubmission." },
      { title: "Timesheets people fill", body: "Pre-filled rows, Friday and Monday reminders and a missing list for the PM." },
      { title: "Fee against hours", body: "Earned fee, cost to date and margin per project, for lump sum, milestone, hourly and per-sheet work." },
      { title: "Progress reports in minutes", body: "Drafted from the period's data in your client's format, as PDF or Word." },
      { title: "Load and capacity", body: "Who is overloaded next week, and who has room." },
    ],
    principles: [
      { title: "Figures from the data", body: "Hours, fees and percentages are calculated by code. The model only drafts the sentences around them." },
      { title: "Team members see the work, not the money", body: "Fees and rates are visible only to the roles you choose." },
      { title: "Your files stay where they are", body: "Compass tracks the metadata and links to your own storage." },
    ],
    forWho: [
      "Highway, bridge, tunnel and water consultancies",
      "BIM and Scan-to-BIM studios",
      "Architecture, interiors and urban design practices",
      "Survey, geotechnical and environmental consultancies",
    ],
    status: TRIAL,
    faqs: [
      { q: "Does it hold our drawings and models?", a: "No. It links to where they already live, such as SharePoint, Google Drive or Autodesk Construction Cloud, and tracks revisions and status." },
      { q: "Can clients comment in it?", a: "Yes, as an option. Clients see only their submitted deliverables and approved reports." },
      { q: "Does it work for per-sheet billing?", a: "Yes. Fee earned can be worked out by stage, milestone, hours or sheets." },
      { q: "Is there a free trial?", a: "Yes. We set up a demo with your name and logo and projects like yours, free for 30 days." },
    ],
  },
  {
    slug: "relay",
    name: "Relay",
    title: "Relay: Dealer and Distributor Ordering Portal | TBC",
    description:
      "Dealers order from their phone with their prices and schemes applied, see their dues and track every dispatch, without calling your office.",
    eyebrow: "For brands that sell through dealers and distributors",
    headline: "Let your dealers order without calling the office.",
    lead:
      "Relay gives your dealers and distributors their own ordering app. They see your catalogue with their price list, the schemes running this month, what is in stock and what they owe. Schemes and credit limits are applied as they order, so nothing gets held later by surprise. Every order is tracked to delivery, and your sales team sees which dealers are going quiet.",
    steps: [
      { title: "Dealers order", body: "Search, reorder their usual list and see scheme benefits as they add to the cart." },
      { title: "Checks run at once", body: "Prices, schemes and credit are applied by rules, with any hold explained in plain words." },
      { title: "Process and dispatch", body: "The order desk confirms stock by depot, and the warehouse records the invoice and vehicle." },
      { title: "Track to delivery", body: "The dealer sees each step, with the LR number when it ships." },
      { title: "Watch the network", body: "Dealers ordering less than usual, overdue balances and how each scheme is doing." },
    ],
    capabilities: [
      { title: "Dealer app", body: "A phone app in Hindi and English, with catalogue, cart, orders, ledger and complaints." },
      { title: "Schemes applied by rule", body: "Quantity slabs, free goods and value slabs, worked out exactly, with hints to the next slab." },
      { title: "Credit checks at ordering", body: "Limits and overdue balances checked when the order is placed, with approvals for exceptions." },
      { title: "Order desk and dispatch", body: "Split, back-order or move depots, then dispatch with invoice and vehicle details." },
      { title: "Dealer health", body: "Quiet dealers flagged early for the area manager, with visit notes." },
      { title: "Works with your ERP", body: "Orders out and balances in, by file today and by integration later." },
    ],
    principles: [
      { title: "Prices and schemes are rules", body: "Every price, discount and credit decision is calculated by code from your settings." },
      { title: "Each dealer sees only their own", body: "Prices, orders and ledger are separated per dealer at the database level." },
      { title: "Your ledger stays in your ERP", body: "Relay shows balances from your accounting system. It does not replace it." },
    ],
    forWho: [
      "Appliance, lighting and electrical brands",
      "Building material and sanitaryware makers",
      "Packaged food, beverage and FMCG companies",
      "Battery, tyre and EV makers with dealer networks",
    ],
    status: TRIAL,
    faqs: [
      { q: "Do dealers need training?", a: "Very little. They sign in with their phone number and the app works like a simple shopping app." },
      { q: "Can dealers still send orders on WhatsApp?", a: "Yes. A photo or text list can be turned into a cart for your order desk to confirm." },
      { q: "Does it replace our DMS or ERP?", a: "No. It is the dealer-facing layer. Orders go to your ERP and balances come back from it." },
      { q: "Is there a free trial?", a: "Yes. We set up a demo with your name, logo and a sample catalogue, free for 30 days." },
    ],
  },
  {
    slug: "rapport",
    name: "Rapport",
    title: "Rapport: Enquiries, Follow-ups and Client Documents | TBC",
    description:
      "Every enquiry in one place with a named owner and a next step, proposals from your price list, and client documents collected without chasing.",
    eyebrow: "For professional and service firms",
    headline: "No enquiry left waiting. No client document chased twice.",
    lead:
      "Rapport is the front office for service firms. Every enquiry, from the website, email, phone or a referral, lands in one place with an owner and a response clock. Each one has a next step until it is won or lost. Proposals come from your service catalogue and price list. Once a client signs on, Rapport collects their documents through a secure link, tracks renewals and recurring deadlines, and reminds the right person before anything slips.",
    steps: [
      { title: "Capture", body: "Website form, email, phone and walk-ins, all in one inbox with the source recorded." },
      { title: "Follow up", body: "A response clock, a next step on every enquiry and a list of what is due today." },
      { title: "Propose", body: "From your catalogue and price list, with discounts above a limit sent for approval." },
      { title: "Onboard", body: "A checklist of documents per service and a secure upload link for the client." },
      { title: "Renew", body: "Renewals and recurring deadlines listed months ahead, with a renewal proposal drafted." },
    ],
    capabilities: [
      { title: "One enquiry inbox", body: "Every channel in one place, with duplicates merged and assignment rules." },
      { title: "Response clocks", body: "First-response targets by working hours, with breaches flagged." },
      { title: "Proposals in minutes", body: "Approved templates, scope text and prices, as PDF or a tracked link." },
      { title: "Document collection", body: "Checklists, upload links and reminders, with verification by your team." },
      { title: "Renewals and deadlines", body: "Retainers, annual engagements and filing dates that never slip." },
      { title: "Pipeline you can trust", body: "Value by stage, conversion by source and why enquiries were lost." },
    ],
    principles: [
      { title: "A person sends every message", body: "Rapport drafts and reminds. Nothing goes to a prospect or client unless your team sends it or you switch on reminders for that client." },
      { title: "Prices from your price list", body: "Discounts beyond each person's limit need a partner's approval." },
      { title: "Client documents kept safe", body: "Upload links expire, files are checked, and access is by role." },
    ],
    forWho: [
      "CA, audit and advisory practices",
      "Law firms and compliance advisers",
      "Recruitment, staffing and research firms",
      "Real estate developers handling buyer enquiries and payment schedules",
    ],
    status: TRIAL,
    faqs: [
      { q: "Is this a CRM?", a: "It covers what a CRM does for a service firm, plus the work after the sale: documents, renewals and recurring deadlines." },
      { q: "Do clients need an account to upload documents?", a: "No. They get a secure link that expires, or they can use the client portal." },
      { q: "Can it send reminders on its own?", a: "Only if you switch that on for a client. By default reminders are queued for your team to approve." },
      { q: "Is there a free trial?", a: "Yes. We set up a demo with your name and logo and services like yours, free for 30 days." },
    ],
  },
];

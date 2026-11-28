import type { Metadata } from "next";
import Link from "next/link";
import ServiceFooter from "@/components/ServiceFooter";
import ProcessTimeline from "@/components/ProcessTimeline";
import SectionInk from "@/components/SectionInk";
import CallProcess from "@/components/CallProcess";
import LlmFlowDiagram from "@/components/LlmFlowDiagram";

const TITLE = "Your Own LLM, Trained on Your Company Data | Turbo Bytes Consulting";
const DESCRIPTION =
  "We train your company its own private LLM on your documents, emails, orders and know-how, run it on infrastructure you control, and build agents and tools on top. You own all of it.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/services/custom-llm" },
  openGraph: {
    title: { absolute: TITLE },
    description: DESCRIPTION,
    url: "https://turbobytesconsulting.com/services/custom-llm",
    images: [{ url: "/img/og-default.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" as const, title: { absolute: TITLE }, description: DESCRIPTION },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Your own private LLM, trained on your company data",
  serviceType: "Custom large language model and AI agents",
  provider: { "@id": "https://turbobytesconsulting.com/#organization" },
  url: "https://turbobytesconsulting.com/services/custom-llm",
  areaServed: "Worldwide",
  description:
    "A large language model trained and grounded on one company's own data, run on infrastructure the company controls, with agents, automations and tools built on top. The company owns the model and its data.",
};

const problems = [
  {
    title: "Knowledge is locked in a few heads",
    description:
      "Critical answers live with three senior people, a folder no one opens, or a document last updated years ago. When those people are busy or leave, the business slows.",
  },
  {
    title: "New joiners take too long",
    description:
      "New staff spend weeks asking questions and reading manuals before they can work on their own. Every one of those weeks has a cost.",
  },
  {
    title: "Meetings exist to pass on information",
    description:
      "Many recurring meetings happen only because people cannot find answers on their own. That is a systems problem, not a people problem.",
  },
  {
    title: "Different people give different answers",
    description:
      "When product knowledge, pricing rules and compliance requirements sit in different places, customers hear different answers from different people.",
  },
];

const agents = [
  { title: "Proposal agent", text: "Drafts quotes and techno-commercial proposals from your past approved ones and your current rates.", href: "/products/distil", product: "Distil" },
  { title: "Technical answers", text: "Answers product and specification questions from your catalogues and manuals, with the page shown.", href: "/products/vantage", product: "Vantage" },
  { title: "Order follow-up", text: "Tells customers and teams where an order stands, and warns you before a promised date slips.", href: "/products/cadence", product: "Cadence" },
  { title: "Quality and audit", text: "Checks results against your specifications and assembles audit evidence on request.", href: "/products/assay", product: "Assay" },
  { title: "Service and renewals", text: "Knows every machine you have sold and flags renewals and spares before they are due.", href: "/products/steward", product: "Steward" },
  { title: "One company brain", text: "All of these share one private model of your business, so every team works from the same knowledge.", href: "/products/meridian", product: "Meridian" },
];

const includedFeatures = [
  {
    title: "Gathering your knowledge",
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21V9.75M20.716 14.253A8.99 8.99 0 0021 12V3m0 0l-3 3m3-3l-3-3M3.284 14.253A8.99 8.99 0 013 12V3m0 0l3 3m-3-3L3 0" />
      </svg>
    ),
    items: [
      "Complete audit of your organisation's existing knowledge assets",
      "Structured ingestion of SOPs, policies, product docs, contracts, & history",
      "Data cleaning, deduplication, and categorisation before model training",
      "Custom taxonomy built to match how your organisation communicates",
      "Ongoing ingestion pipeline so new documents are absorbed automatically",
    ],
  },
  {
    title: "Training and running your model",
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
    items: [
      "Custom LLM designed, trained, and fine-tuned on your specific knowledge base",
      "Runs on a server you own or a private cloud account in your name",
      "Choice of deployment: fully air-gapped on-premise, private cloud, or hybrid",
      "Model size selected based on infrastructure constraints & query complexity",
      "Natural language interface with source citations included in every response",
    ],
  },
  {
    title: "Access for every team",
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.187 13.404l-1.807-1.807m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    items: [
      "Web-based query interface accessible from any internal device or browser",
      "API access for integration with CRM, ERP, Slack, Teams, or intranet platforms",
      "Access by role: each team sees only what it should",
      "Audit log of all queries to identify common questions and knowledge gaps",
      "Optional customer-facing assistant, answering only from your published product information",
    ],
  },
  {
    title: "Usage and quality reporting",
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    items: [
      "Usage dashboard showing who asks what, and how often answers are used",
      "Weekly usage reports displaying most queried topics and unanswered questions",
      "Quarterly knowledge health reviews to locate outdated or conflicting data",
      "Escalation flagging for queries falling outside current model training scope",
    ],
  },
  {
    title: "Ongoing improvement",
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    items: [
      "Model updates and iterative fine-tuning as your organisation evolves",
      "Continuous data expansion to absorb new documents, specifications, and SOPs",
      "Ongoing model performance monitoring and response accuracy benchmarking",
      "One named contact at TBC for technical and strategic support",
    ],
  },
];

const timelineSteps = [
  { number: "01", caption: "Listen", title: "Every team", description: "We sit with every team, from the MD to the interns, to find where knowledge lives and where work gets stuck." },
  { number: "02", caption: "Gather", title: "Your data", description: "Collect, clean and organise documents, emails, records and history. Fill the important gaps with your team." },
  { number: "03", caption: "Pilot", title: "One team first", description: "Train and ground the model on one team's knowledge and test it against real questions, so you see results in weeks." },
  { number: "04", caption: "Build", title: "Agents and tools", description: "Add more teams and data, then build the agents, automations and tools each team needs." },
  { number: "05", caption: "Run", title: "And improve", description: "Monitor answer quality, add new data as the business changes, and keep the model getting more useful." },
];

const targetAudience = [
  { subtitle: "10 to 500 people", title: "Founder-led and family businesses", description: "Where critical knowledge sits with a few people and the founder is often the only one who knows." },
  { subtitle: "Law, accounting and consulting", title: "Professional services firms", description: "Where expertise, regulation and case history are the product and need to be found instantly." },
  { subtitle: "Specifications and procedures", title: "Manufacturers and distributors", description: "Where product specifications, compliance documents and operating procedures are long and critical." },
  { subtitle: "Faster onboarding", title: "Fast-growing teams", description: "Where hiring is quick and every new person needs to be useful sooner." },
  { subtitle: "Keeping what the company knows", title: "Succession and transition", description: "Where long-serving people are moving on and their knowledge needs to stay." },
];

const privacyProps = [
  { title: "Your data stays on your infrastructure", description: "It is not sent to train a model elsewhere, not used to improve anyone's product, and not stored in a shared environment." },
  { title: "Few outside dependencies", description: "We build in-house wherever we can, so you are not exposed to a vendor's outages, price changes or product decisions." },
  { title: "Fits your compliance rules", description: "Access by role, a log of every question, and data you can export or delete, so you can meet your governance requirements." },
  { title: "An advantage others cannot copy", description: "A model trained on years of your company's know-how is not something a competitor can switch on with a subscription." },
];

const faqs = [
  {
    q: "What does \"your own LLM\" actually mean?",
    a: "An LLM (large language model) is the kind of model behind ChatGPT. We set one up for your company alone, teach it your documents, records and terminology, and run it on a server you own or a private cloud account in your name. Your team asks questions in plain language and gets answers from your own knowledge, with the source shown.",
  },
  {
    q: "Is this the same as using ChatGPT with uploaded documents?",
    a: "No. Uploading files to a public chatbot sends your data to someone else's service and only helps within one conversation. Your own LLM is set up around your knowledge permanently, understands your product names and conventions, runs privately, and powers agents and tools that do real work.",
  },
  {
    q: "Do you fine-tune a model or connect it to our documents?",
    a: "Usually both. We connect the model to your documents and records so answers always reflect the latest version and show their source, and we fine-tune it where your terminology or style needs it. We choose per use, not by default.",
  },
  {
    q: "What data formats can you use?",
    a: "PDF, Word, Excel, PowerPoint, email archives, Google Drive, SharePoint, Notion and Confluence exports, ERP and Tally exports, and database exports. If your knowledge lives somewhere else, we will find a way to bring it in.",
  },
  {
    q: "What if our documentation is incomplete or out of date?",
    a: "That is normal. Finding the gaps is part of the work. We fill the important ones with your team before training and flag the rest for you.",
  },
  {
    q: "Can different people see different information?",
    a: "Yes. Access follows each person's role, so sales sees sales knowledge and finance sees finance data. Nobody sees what they should not.",
  },
  {
    q: "What happens if it gives a wrong answer?",
    a: "Every answer shows its source, so people can check anything important. Questions it cannot answer confidently are passed to a person, and those questions feed the next round of improvement.",
  },
  {
    q: "Do we need to buy servers or GPUs?",
    a: "Not necessarily. We size the setup to your data and usage. It can run on a server you already own, a new one we help you choose, or a private cloud account in your company's name. You own it either way.",
  },
];

export default function CustomLLMPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
          }),
        }}
      />

      <nav aria-label="Breadcrumb" className="bg-ivory border-b border-light-grey">
        <div className="container-tbc py-3">
          <ol className="flex items-center gap-2 font-display text-[13px] text-mid-grey">
            <li><Link href="/" className="hover:text-ink transition-colors duration-150">Home</Link></li>
            <li aria-hidden="true" className="text-light-grey select-none">/</li>
            <li><Link href="/services" className="hover:text-ink transition-colors duration-150">Services</Link></li>
            <li aria-hidden="true" className="text-light-grey select-none">/</li>
            <li className="text-ink font-bold">Your own LLM</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative bg-forest overflow-hidden border-b border-light-grey">
        <div className="container-tbc py-s6 md:py-s7 relative z-10">
          <hr className="gold-rule mb-6" />
          <h1 className="font-display font-bold text-[clamp(32px,4.5vw,52px)] text-white leading-[1.1] tracking-[-0.5px] max-w-4xl mb-6 text-balance">
            Your own LLM, trained on your company.
          </h1>
          <p className="text-[18px] text-white/80 leading-relaxed max-w-3xl mb-8 text-pretty">
            We teach a private language model your documents, emails, orders and know-how, run it on infrastructure you
            control, and build agents and tools on top that do real work for every team. You own all of it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link href="/book-consultation" prefetch={false} className="btn-gold min-h-[48px] px-8 text-[16px]">
              Book an LLM readiness call
            </Link>
            <Link href="#what-we-build" prefetch={false} className="btn-ghost-white min-h-[48px]">
              See what we build on top
            </Link>
          </div>
          <ul className="flex flex-wrap gap-3 text-[13px] text-white">
            {["Runs on your infrastructure", "Never trains anyone else's model", "Every answer shows its source", "You own it"].map((t) => (
              <li key={t} className="rounded-full border border-white/25 bg-white/10 px-3 py-1.5">{t}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Diagram */}
      <section className="bg-white py-s6 md:py-s7 border-b border-light-grey">
        <div className="container-tbc">
          <div className="max-w-2xl mb-8">
            <hr className="gold-rule mb-4" />
            <h2 className="font-display font-bold text-[clamp(26px,3vw,34px)] text-ink leading-[1.2] mb-3 text-balance">How it fits together.</h2>
            <p className="text-body text-mid-grey text-pretty">
              It is not a chatbot with your logo on it. It is a model that has learned how your company works, governed by your rules.
            </p>
          </div>
          <LlmFlowDiagram />
        </div>
      </section>

      {/* Problems */}
      <section className="bg-ivory py-s6 md:py-s7 border-b border-light-grey">
        <div className="container-tbc">
          <div className="max-w-2xl mb-8">
            <hr className="gold-rule mb-4" />
            <h2 className="font-display font-bold text-[clamp(26px,3vw,34px)] text-ink leading-[1.2] mb-3 text-balance">The problems it solves.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {problems.map((p) => (
              <div key={p.title} className="bg-white border border-light-grey rounded-[8px] p-6">
                <h3 className="font-display font-bold text-[17px] text-ink leading-snug mb-2">{p.title}</h3>
                <p className="text-[14px] text-mid-grey leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agents and tools */}
      <section id="what-we-build" className="bg-white py-s6 md:py-s7 border-b border-light-grey scroll-mt-24">
        <div className="container-tbc">
          <div className="max-w-2xl mb-8">
            <hr className="gold-rule mb-4" />
            <h2 className="font-display font-bold text-[clamp(26px,3vw,34px)] text-ink leading-[1.2] mb-3 text-balance">
              Agents and tools we build on top.
            </h2>
            <p className="text-body text-mid-grey text-pretty">
              Once the model knows your business, it can do real work. Each of these runs on your own model and is already a product we have shipped.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {agents.map((a) => (
              <Link
                key={a.title}
                href={a.href}
                prefetch={false}
                className="group bg-ivory border border-light-grey rounded-[8px] p-6 hover:border-forest/40 hover:shadow-card transition-all flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-display font-bold text-[17px] text-ink mb-2">{a.title}</h3>
                  <p className="text-[14px] text-mid-grey leading-relaxed">{a.text}</p>
                </div>
                <span className="text-[13px] font-semibold text-royal mt-5 inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  See {a.product} &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-ivory py-s6 md:py-s7 border-b border-light-grey">
        <div className="container-tbc">
          <div className="max-w-2xl mb-8">
            <hr className="gold-rule mb-4" />
            <h2 className="font-display font-bold text-[clamp(26px,3vw,34px)] text-ink leading-[1.2] mb-3 text-balance">What is included.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {includedFeatures.map((feat) => (
              <article key={feat.title} className="bg-white border border-light-grey rounded-[8px] p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-ivory rounded border border-light-grey">{feat.icon}</div>
                  <h3 className="font-display font-bold text-[17px] text-ink leading-snug">{feat.title}</h3>
                </div>
                <ul className="space-y-2.5">
                  {feat.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[14px] text-mid-grey leading-relaxed">
                      <span className="mt-[8px] flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gold" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-white py-s6 md:py-s7 border-b border-light-grey">
        <div className="container-tbc">
          <div className="max-w-2xl mb-s5">
            <hr className="gold-rule mb-4" />
            <h2 className="font-display font-bold text-[clamp(26px,3vw,34px)] text-ink leading-[1.2] mb-3 text-balance">How we work.</h2>
            <p className="text-body text-mid-grey text-pretty">We start small, with one team&apos;s knowledge, and grow from there once it proves useful.</p>
          </div>
          <ProcessTimeline steps={timelineSteps} />
        </div>
      </section>

      {/* Privacy */}
      <SectionInk>
        <div className="container-tbc">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <hr className="gold-rule mb-6" />
              <h2 className="font-display font-bold text-[clamp(26px,3.5vw,38px)] text-white leading-[1.15] mb-4 text-balance">Why private matters.</h2>
              <p className="text-body text-white/75 leading-relaxed text-pretty">
                The alternative is sending your procedures, customer data and pricing to someone else&apos;s cloud. For many businesses that is not acceptable, and it never builds an advantage of your own.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {privacyProps.map((p) => (
                <div key={p.title} className="bg-white/5 border border-white/15 rounded-[8px] p-6 h-full">
                  <h3 className="font-display font-bold text-[15px] text-white leading-snug mb-2">{p.title}</h3>
                  <p className="text-[14px] text-white/70 leading-relaxed">{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionInk>

      {/* Who it is for */}
      <section className="bg-white py-s6 md:py-s7 border-b border-light-grey">
        <div className="container-tbc">
          <div className="max-w-2xl mb-8">
            <hr className="gold-rule mb-4" />
            <h2 className="font-display font-bold text-[clamp(26px,3vw,34px)] text-ink leading-[1.2] mb-3 text-balance">Who it is for.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {targetAudience.map((a) => (
              <article key={a.title} className="bg-ivory border border-light-grey rounded-[8px] p-6 h-full">
                <span className="font-display font-semibold text-[13px] text-royal block mb-1">{a.subtitle}</span>
                <h3 className="font-display font-bold text-[17px] text-ink leading-snug mb-2 text-balance">{a.title}</h3>
                <p className="text-[14px] text-mid-grey leading-relaxed text-pretty">{a.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-ivory py-s6 md:py-s7 border-b border-light-grey">
        <div className="container-tbc max-w-4xl">
          <div className="mb-8">
            <hr className="gold-rule mb-4" />
            <h2 className="font-display font-bold text-[clamp(26px,3vw,34px)] text-ink leading-[1.2]">Frequently asked questions.</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group bg-white border border-light-grey rounded-[8px] p-5 open:shadow-card transition-all">
                <summary className="font-display font-bold text-[16px] text-ink cursor-pointer list-none flex items-center justify-between gap-4">
                  <span>{f.q}</span>
                  <span className="text-mid-grey text-[18px] transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="text-[14px] text-mid-grey leading-relaxed mt-3 pt-3 border-t border-light-grey text-pretty">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ServiceFooter />
      <CallProcess />

      <SectionInk className="text-center">
        <div className="container-tbc">
          <hr className="gold-rule gold-rule--center mb-8" />
          <h2 className="font-display font-bold text-[clamp(26px,3.5vw,40px)] text-white leading-[1.2] max-w-3xl mx-auto mb-5 text-balance">
            See what your own LLM could answer.
          </h2>
          <p className="max-w-2xl mx-auto text-white/75 text-body mb-8 text-pretty">
            Book a 30-minute readiness call. We will look at where your company&apos;s knowledge lives, what a pilot would cover and
            what it would need from your team. No obligation, and we will tell you honestly if it is not the right fit.
          </p>
          <Link href="/book-consultation" prefetch={false} className="btn-gold min-h-[48px] px-10 text-[16px]">
            Book an LLM readiness call
          </Link>
        </div>
      </SectionInk>
    </>
  );
}

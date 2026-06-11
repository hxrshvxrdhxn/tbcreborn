import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import ServiceFooter from "@/components/ServiceFooter";
import ProcessTimeline from "@/components/ProcessTimeline";
import { PullStat } from "@/components/StatBlock";
import SectionInk from "@/components/SectionInk";

export const metadata: Metadata = {
  title: "Custom LLM & Private AI Deployment | Turbo Bytes Consulting",
  description:
    "Your organisation's intelligence layer. Train a custom Large Language Model on your company data. Deployed on-premise or in your private cloud. Data never leaves your controlled environment.",
  alternates: { canonical: "/services/custom-llm" },
  openGraph: {
    title: "Custom LLM & Private AI Deployment | Turbo Bytes Consulting",
    description:
      "Your organisation's intelligence layer. Train a custom Large Language Model on your company data. Deployed on-premise or in your private cloud. Data never leaves your controlled environment.",
    url: "https://turbobytesconsulting.com/services/custom-llm",
    images: [{ url: "/img/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Custom LLM & Private AI Deployment | Turbo Bytes Consulting",
    description:
      "Your organisation's intelligence layer. Train a custom Large Language Model on your company data.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Custom LLM & On-Premise AI Deployment",
  provider: {
    "@type": "Organization",
    name: "Turbo Bytes Consulting",
    url: "https://turbobytesconsulting.com",
  },
  url: "https://turbobytesconsulting.com/services/custom-llm",
  description:
    "Custom Large Language Model designed, trained, and deployed for a single organisation. On-premise or private cloud. Data never leaves your controlled environment.",
};

const problems = [
  {
    title: "Knowledge is locked",
    description:
      "Critical information lives in the heads of three people, a folder no one opens, or a document last updated in 2021. When those people are unavailable, the business slows.",
  },
  {
    title: "Onboarding takes too long",
    description:
      "New employees spend weeks asking questions, reading manuals, sitting in handover meetings — before they can operate independently. Every week of reduced productivity has a cost.",
  },
  {
    title: "Meetings transfer information",
    description:
      "A significant proportion of recurring internal meetings exist solely because people cannot find answers on their own. This is a systems failure, not a culture one.",
  },
  {
    title: "Client teams are inconsistent",
    description:
      "When product knowledge, pricing rules, and compliance requirements live in different places, different team members give different answers. This creates risk.",
  },
];

const includedFeatures = [
  {
    title: "Knowledge Architecture & Ingestion",
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
    title: "Model Training & Deployment",
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
    items: [
      "Custom LLM designed, trained, and fine-tuned on your specific knowledge base",
      "On-premise or private cloud deployment — data never leaves your infrastructure",
      "Choice of deployment: fully air-gapped on-premise, private cloud, or hybrid",
      "Model size selected based on infrastructure constraints & query complexity",
      "Natural language interface with source citations included in every response",
    ],
  },
  {
    title: "Integration & Access",
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.187 13.404l-1.807-1.807m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    items: [
      "Web-based query interface accessible from any internal device or browser",
      "API access for integration with CRM, ERP, Slack, Teams, or intranet platforms",
      "Role-based access control — different teams see different subsets of data",
      "Audit log of all queries to identify common questions and knowledge gaps",
      "Optional client-facing deployment — public AI assistant trained on product specs",
    ],
  },
  {
    title: "Intelligence & Reporting",
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    items: [
      "Live ROI Dashboard tracking hours recovered, meetings replaced, and savings",
      "Weekly usage reports displaying most queried topics and unanswered questions",
      "Quarterly knowledge health reviews to locate outdated or conflicting data",
      "Escalation flagging for queries falling outside current model training scope",
    ],
  },
  {
    title: "Ongoing Partnership",
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    items: [
      "Model updates and iterative fine-tuning as your organisation evolves",
      "Continuous data expansion to absorb new documents, specifications, and SOPs",
      "Ongoing model performance monitoring and response accuracy benchmarking",
      "Dedicated account contact for all technical, architectural, and strategic support",
    ],
  },
];

const timelineSteps = [
  {
    number: "01",
    caption: "Week 1–2",
    title: "Discovery",
    description: "Audit knowledge assets, define taxonomy, design ingestion architecture, and agree on deployment model.",
  },
  {
    number: "02",
    caption: "Week 3–4",
    title: "Ingestion",
    description: "Knowledge assets are ingested, cleaned, and prepared. Fill critical gaps with your team before training.",
  },
  {
    number: "03",
    caption: "Week 5–6",
    title: "Training",
    description: "Model is trained on your prepared knowledge base. Internal testing and accuracy benchmarking.",
  },
  {
    number: "04",
    caption: "Week 7–8",
    title: "Deployment",
    description: "Deploy to infrastructure, configure access control, integrate tools, and run team training.",
  },
  {
    number: "05",
    caption: "Ongoing",
    title: "Improvement",
    description: "Monthly check-ins, quarterly knowledge reviews, and model updates based on query logs.",
  },
];

const targetAudience = [
  {
    title: "Founder-Led & Family Businesses",
    subtitle: "10–200 Employees",
    description:
      "Where critical knowledge is concentrated in a small number of people and the founder is frequently the single point of failure.",
  },
  {
    title: "Professional Services Firms",
    subtitle: "Law, CA, & Consulting",
    description:
      "Where deep expertise, regulatory knowledge, and case history are the core product and need to be accessible instantly.",
  },
  {
    title: "Manufacturing & Industrials",
    subtitle: "Operations & Specifications",
    description:
      "Where product specifications, compliance documentation, and operational procedures are extensive and critical.",
  },
  {
    title: "Rapidly Scaling Teams",
    subtitle: "Accelerated Onboarding",
    description:
      "Growing businesses undergoing rapid hiring where onboarding speed directly affects client experience.",
  },
  {
    title: "Succession & Transition",
    subtitle: "Preserving Institutional Knowledge",
    description:
      "Organisations preparing for succession where institutional knowledge needs to be documented and systematised.",
  },
];

const onPremiseProps = [
  {
    title: "Data never leaves your infrastructure",
    description:
      "Not to train a model elsewhere. Not to improve a vendor's product. Not to be stored in a shared or public cloud environment.",
  },
  {
    title: "Zero external vendor dependencies",
    description:
      "You are not dependent on a third-party vendor's uptime, sudden pricing changes, or product lifecycle decisions. The model runs on hardware you control.",
  },
  {
    title: "Flawless compliance governance",
    description:
      "Meet your compliance and data governance requirements (such as GDPR, ISO, or HIPAA) without exceptions, special API terms, or workarounds.",
  },
  {
    title: "Permanent competitive advantage",
    description:
      "A knowledge base trained on years of your organisation's unique expertise is not something a competitor can replicate by switching on a SaaS subscription.",
  },
];

const resultsTable = [
  { metric: "Onboarding time reduction", range: "60–80%" },
  { metric: "Internal meetings eliminated", range: "25–40% reduction" },
  { metric: "Query response time", range: "Under 30s" },
  { metric: "Knowledge base utilisation", range: "80%+ active use" },
  { metric: "ROI timeline", range: "60–90 days" },
];

const faqs = [
  {
    q: "What data formats can you ingest?",
    a: "PDF, Word, Excel, PowerPoint, plain text, HTML, email archives, Notion exports, Confluence exports, Google Drive, SharePoint, and custom database exports. If your knowledge lives somewhere we have not listed, we will find a way to ingest it.",
  },
  {
    q: "What if our documentation is incomplete or outdated?",
    a: "This is the norm, not the exception. Part of the discovery phase involves identifying gaps. We work with your team to fill critical gaps before training begins and flag lower-priority gaps for your attention.",
  },
  {
    q: "Can different employees see different information?",
    a: "Yes. Role-based access control is built into every deployment. Your sales team sees sales knowledge. Your compliance team sees compliance documentation. Nobody sees what they should not.",
  },
  {
    q: "How is accuracy maintained over time?",
    a: "The model is re-trained on an agreed schedule as your knowledge base grows and changes. We also monitor query logs for unanswered questions — these become the inputs for the next training cycle.",
  },
  {
    q: "What happens if the AI gives a wrong answer?",
    a: "Every response includes source citations. Employees are trained to verify answers against sources when the stakes are high. We build escalation pathways for questions the system cannot answer with sufficient confidence. Over time, these pathways feed back into improving the model.",
  },
  {
    q: "Is this the same as using ChatGPT with uploaded documents?",
    a: "No. Consumer AI tools with document upload are general-purpose models that treat your documents as context for a single session. A Custom LLM is trained on your knowledge base — it understands your terminology, your product names, your internal conventions, your compliance requirements — and retains that understanding permanently, not just for one conversation.",
  },
];

export default function CustomLLMPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* ── BREADCRUMB ── */}
      <nav aria-label="Breadcrumb" className="bg-ivory border-b border-light-grey">
        <div className="container-tbc py-3">
          <ol className="flex items-center gap-2 font-display text-[13px] uppercase tracking-widest text-mid-grey">
            <li>
              <Link href="/" className="hover:text-ink transition-colors duration-150">Home</Link>
            </li>
            <li aria-hidden="true" className="text-light-grey select-none">/</li>
            <li>
              <Link href="/services" className="hover:text-ink transition-colors duration-150">Services</Link>
            </li>
            <li aria-hidden="true" className="text-light-grey select-none">/</li>
            <li className="text-ink font-bold">Custom LLM</li>
          </ol>
        </div>
      </nav>

      {/* ── PAGE HERO ── */}
      <section className="relative bg-ink overflow-hidden min-h-[400px] flex items-center border-b border-light-grey">
        {/* Full-bleed background image band */}
        <div className="absolute inset-0 z-0">
          <Image src="/img/hero-service-llm.png" alt="" fill className="object-cover object-center opacity-40 mix-blend-screen" priority aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
        </div>

        <div className="container-tbc py-s6 relative z-10">
          <Reveal>
            <span className="eyebrow text-gold">PRACTICE 01</span>
            <hr className="gold-rule mb-6" />
            <h1 className="font-display font-bold text-[clamp(32px,4.5vw,52px)] text-white leading-[1.1] tracking-[-0.5px] max-w-4xl mb-6 text-balance">
              Custom LLM &amp;<br />On-Premise AI Deployment
            </h1>
            <p className="text-body text-white/70 leading-relaxed max-w-3xl mb-8 text-pretty">
              Your organisation&apos;s intelligence layer. Trained on your knowledge.
              Running on your infrastructure. Data never leaves your controlled
              environment.
            </p>
            <div className="inline-flex flex-wrap items-center gap-3 bg-white/10 backdrop-blur border border-white/20 rounded px-4 py-3 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-gold flex-shrink-0" aria-hidden="true" />
              <span className="font-display font-semibold text-caption text-white uppercase tracking-widest">Setup: 4–8 weeks</span>
              <span className="text-white/30">|</span>
              <span className="font-display font-semibold text-caption text-white uppercase tracking-widest">ROI: 60–90 days</span>
              <span className="text-white/30">|</span>
              <span className="font-display font-semibold text-caption text-white uppercase tracking-widest">Ongoing updates included</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── WHAT THIS IS ── */}
      <section className="bg-white py-s7 border-b border-light-grey">
        <div className="container-tbc">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <Reveal>
                <span className="eyebrow">OVERVIEW</span>
                <h2 className="font-display font-bold text-[clamp(26px,3vw,34px)] text-ink leading-[1.2] mb-6">
                  What This Is
                </h2>
                <hr className="gold-rule" />
              </Reveal>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <Reveal delay={0.10}>
                <p className="text-body text-mid-grey leading-relaxed text-pretty">
                  Most organisations have spent years accumulating knowledge — procedures, client histories, compliance frameworks, product specifications, training materials, meeting notes, contracts. That knowledge exists in documents, folders, and email threads that almost nobody reads.
                </p>
                <p className="text-body text-mid-grey leading-relaxed text-pretty mt-4">
                  A Custom LLM transforms that accumulated knowledge into an always-available, instantly-queryable intelligence layer accessible to every member of your team, every hour of the day.
                </p>
                <div className="bg-ivory border-l-4 border-gold p-6 rounded-r mt-8 shadow-sm">
                  <p className="text-body text-ink leading-relaxed font-medium text-balance">
                    It is not a chatbot. It is not a generic AI tool with your company name on the login screen. It is a language model trained specifically on your organisation&apos;s knowledge base — deployed on your infrastructure, governed by your policies, and producing answers that reflect your actual expertise.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE PROBLEM IT SOLVES ── */}
      <section className="bg-ivory py-s7 border-b border-light-grey">
        <div className="container-tbc">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 flex flex-col justify-between">
              <Reveal>
                <span className="eyebrow">THE FRICTION</span>
                <h2 className="font-display font-bold text-[clamp(26px,3vw,34px)] text-ink leading-[1.2] mb-6">
                  The Problem It Solves
                </h2>
                <hr className="gold-rule mb-8" />
                <div className="bg-white border border-light-grey rounded p-8 shadow-card mb-8 lg:mb-0">
                  <p className="font-display font-bold text-[20px] text-ink leading-snug mb-3">
                    A Custom LLM eliminates all four problems simultaneously.
                  </p>
                  <div className="w-12 h-1 bg-royal mt-4"></div>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {problems.map((prob, i) => (
                <Reveal key={prob.title} delay={i * 0.10}>
                  <div className="bg-white border border-light-grey rounded p-6 shadow-card hover:shadow-card-hover transition-all duration-200 h-full">
                    <span className="font-display font-bold text-[13px] text-gold tracking-[1px] mb-3 block">
                      0{i + 1}
                    </span>
                    <h3 className="font-display font-bold text-[17px] text-ink leading-snug mb-2">
                      {prob.title}
                    </h3>
                    <p className="text-body text-mid-grey">
                      {prob.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className="bg-white py-s7 border-b border-light-grey">
        <div className="container-tbc">
          <div className="text-center max-w-2xl mx-auto mb-s5">
            <Reveal>
              <span className="eyebrow">THE CAPABILITIES</span>
              <h2 className="font-display font-bold text-[clamp(28px,3vw,36px)] text-ink leading-[1.2] mb-6">
                What&apos;s Included
              </h2>
              <hr className="gold-rule gold-rule--center" />
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {includedFeatures.map((feat, i) => (
              <Reveal key={feat.title} delay={i * 0.10} className={i >= 3 ? "lg:col-span-1" : ""}>
                <article className="bg-ivory border border-light-grey rounded p-8 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-200 h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2 bg-white rounded border border-light-grey shadow-sm">
                      {feat.icon}
                    </div>
                    <h3 className="font-display font-bold text-[17px] text-ink leading-snug">
                      {feat.title}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {feat.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-body text-mid-grey">
                        <span className="mt-[7px] flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gold" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS (TIMELINE) ── */}
      <section className="bg-ivory py-s7 border-b border-light-grey">
        <div className="container-tbc">
          <div className="text-center max-w-2xl mx-auto mb-s6">
            <Reveal>
              <span className="eyebrow">PROCESS</span>
              <h2 className="font-display font-bold text-[clamp(28px,3vw,36px)] text-ink leading-[1.2] mb-6">
                How It Works
              </h2>
              <hr className="gold-rule gold-rule--center" />
            </Reveal>
          </div>
          
          <Reveal>
            <ProcessTimeline steps={timelineSteps} />
          </Reveal>
        </div>
      </section>

      {/* ── WHY ON-PREMISE MATTERS ── */}
      <ServiceFooter />

      <SectionInk>
        <div className="container-tbc">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <Reveal>
                <span className="eyebrow text-gold">SECURITY FIRST</span>
                <h2 className="font-display font-bold text-[clamp(28px,3.5vw,38px)] text-white leading-[1.15] mb-6 text-balance">
                  Why On-Premise Matters
                </h2>
                <hr className="gold-rule mb-8" />
                <p className="text-body text-white/70 leading-relaxed mb-8 text-pretty">
                  The alternative to on-premise deployment is sending your organisation&apos;s knowledge — your procedures, your client data, your competitive intelligence — to a third-party cloud. For many organisations, particularly those in financial services, legal, healthcare, manufacturing, or defence-adjacent sectors, this is not a viable option.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {onPremiseProps.map((prop, i) => (
                <Reveal key={prop.title} delay={i * 0.10}>
                  <div className="bg-white/5 border border-white/10 rounded p-6 hover:bg-white/10 transition-colors duration-150 h-full">
                    <div className="flex items-center gap-2 mb-3 text-gold">
                      <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <h3 className="font-display font-bold text-[15px] tracking-wide text-white leading-snug">
                        {prop.title}
                      </h3>
                    </div>
                    <p className="text-body text-white/60 leading-relaxed">
                      {prop.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </SectionInk>

      {/* ── RESULTS YOU CAN EXPECT ── */}
      <section className="bg-ivory py-s7 border-b border-light-grey">
        <div className="container-tbc">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-s5">
              <Reveal>
                <span className="eyebrow">OUTCOMES</span>
                <h2 className="font-display font-bold text-[clamp(28px,3vw,36px)] text-ink leading-[1.2] mb-4">
                  Results You Can Expect
                </h2>
                <hr className="gold-rule gold-rule--center mb-4" />
                <p className="text-body text-mid-grey leading-relaxed text-balance">
                  These are directional benchmarks from comparable deployments. Outcomes vary by organisation size, knowledge base complexity, and usecase constraints.
                </p>
              </Reveal>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:flex-wrap lg:justify-center gap-6 lg:gap-8">
              {resultsTable.map((row, i) => (
                <Reveal key={row.metric} delay={i * 0.10} className={`flex-1 min-w-[160px] ${i === 4 ? "col-span-2 lg:col-span-1" : ""}`}>
                  <PullStat value={row.range} label={row.metric} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO THIS IS FOR ── */}
      <section className="bg-white py-s7 border-b border-light-grey">
        <div className="container-tbc">
          <div className="text-center max-w-2xl mx-auto mb-s5">
            <Reveal>
              <span className="eyebrow">TARGET AUDIENCE</span>
              <h2 className="font-display font-bold text-[clamp(28px,3vw,36px)] text-ink leading-[1.2] mb-6">
                Who This Is For
              </h2>
              <hr className="gold-rule gold-rule--center" />
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {targetAudience.map((audience, i) => (
              <Reveal key={audience.title} delay={i * 0.10}>
                <article className="bg-ivory border border-light-grey rounded p-8 shadow-card hover:shadow-card-hover transition-shadow duration-200 h-full">
                  <span className="font-display font-bold text-caption text-gold tracking-widest uppercase block mb-1">
                    {audience.subtitle}
                  </span>
                  <h3 className="font-display font-bold text-[18px] text-ink leading-snug mb-3 text-balance">
                    {audience.title}
                  </h3>
                  <hr className="gold-rule mb-4" />
                  <p className="text-body text-mid-grey text-pretty">
                    {audience.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FREQUENTLY ASKED QUESTIONS ── */}
      <section className="bg-ivory py-s7 border-b border-light-grey">
        <div className="container-tbc">
          <div className="text-center max-w-2xl mx-auto mb-s5">
            <Reveal>
              <span className="eyebrow">FAQ</span>
              <h2 className="font-display font-bold text-[clamp(28px,3vw,36px)] text-ink leading-[1.2] mb-6">
                Frequently Asked Questions
              </h2>
              <hr className="gold-rule gold-rule--center" />
            </Reveal>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <details className="group border border-light-grey rounded bg-white shadow-sm [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-display font-bold text-ink text-[16px] md:text-[17px] hover:bg-ivory/50 select-none transition-colors">
                    <span>{faq.q}</span>
                    <span className="text-gold group-open:rotate-180 transition-transform duration-200 flex-shrink-0 ml-4">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <div className="p-6 pt-0 border-t border-light-grey/20 text-body text-mid-grey bg-white rounded-b">
                    {faq.a}
                  </div>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENGAGEMENT MODEL & CTA ── */}
      <ServiceFooter />

      <SectionInk className="text-center">
        <div className="container-tbc">
          <Reveal>
            <span className="eyebrow text-gold">ENGAGEMENT MODEL</span>
            <hr className="gold-rule gold-rule--center mb-8" />
            <h2 className="font-display font-bold text-[clamp(26px,3.5vw,40px)] text-white leading-[1.2] max-w-3xl mx-auto mb-6 text-balance">
              Ready to deploy your organisation&apos;s intelligence layer?
            </h2>
            <div className="max-w-2xl mx-auto text-white/70 text-body space-y-4 mb-10 text-pretty">
              <p>
                Custom LLM deployments are scoped individually. Every organisation has a different knowledge base, different infrastructure constraints, and different use cases.
              </p>
              <p>
                The process begins with a consultation. We assess your knowledge assets, your infrastructure, your team size, and the specific outcomes you need. A detailed proposal — covering scope, timeline, investment, and expected ROI — is delivered within 48 hours of that conversation.
              </p>
              <p className="font-medium text-gold">
                There is no obligation after the consultation. We will tell you honestly whether this is the right solution for your organisation, and if it is not, we will tell you what is.
              </p>
            </div>
            <Link href="/book-consultation" className="btn-gold">
              Request a Consultation
            </Link>
            <hr className="gold-rule gold-rule--center mt-12" />
          </Reveal>
        </div>
      </SectionInk>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import HeroLines from "@/components/HeroLines";
import YouTubeLite from "@/components/YouTubeLite";
import LlmFlowDiagram from "@/components/LlmFlowDiagram";

const TITLE = "Your Own Private LLM, Built on Your Company Data | Turbo Bytes Consulting";
const DESCRIPTION =
  "We train your company its own LLM on your documents, emails, orders and know-how, then build agents and automations that do real work for every team. Private, and owned by you.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: { absolute: TITLE },
    description: DESCRIPTION,
    url: "https://turbobytesconsulting.com",
    images: [{ url: "/img/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: { absolute: TITLE },
    description: DESCRIPTION,
  },
};

const faqs = [
  {
    question: "What does \"your own LLM\" mean?",
    answer:
      "An LLM (large language model) is the kind of model behind ChatGPT. We set one up for your company alone: it learns from your documents, emails, orders, proposals and procedures, and it runs on a server you own or a private cloud account in your name. Your team asks it questions in plain language and gets answers from your own knowledge, with the source shown.",
  },
  {
    question: "Is our data safe? Will it train ChatGPT or anyone else's model?",
    answer:
      "No. Your data stays on infrastructure you control and is never used to train a public model or another client's model. Access is set by role, every answer shows where it came from, and you can export or delete everything at any time. We build in-house wherever we can, so fewer outside tools ever touch your data.",
  },
  {
    question: "What data do we need to start?",
    answer:
      "Whatever your teams already use: shared drives, PDFs and manuals, emails, spreadsheets, ERP or Tally exports, past proposals and SOPs. We sit with every team, from the MD to the interns, to find where the useful knowledge lives, then clean and organise it before anything is trained.",
  },
  {
    question: "How long does it take?",
    answer:
      "We start with a pilot on one team's knowledge, so you see real answers in weeks rather than months. Once the pilot proves useful, we add more teams and data and build the automations around it.",
  },
  {
    question: "Do we need to buy our own servers or GPUs?",
    answer:
      "Not necessarily. We size the setup to your data and usage: it can run on a server you already own, a new one we help you choose, or a private cloud account in your company's name. You own it either way.",
  },
  {
    question: "What happens after launch?",
    answer:
      "We stay. We monitor answer quality, add new data as your business changes, build further automations and tools on top, and support your team, so the model keeps getting more useful.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export const revalidate = 300;

const TEAMS = [
  { team: "Sales", text: "Draft quotes and proposals from your past winning ones, and answer product questions instantly." },
  { team: "Operations", text: "Ask where an order stands or how a procedure works, and get the answer from your own records." },
  { team: "Quality", text: "Check results against your specifications and pull audit evidence in minutes." },
  { team: "Finance", text: "Answer invoice and payment queries and draft collection follow-ups from real ledger data." },
  { team: "People & onboarding", text: "New joiners learn from the company's own knowledge instead of waiting for a senior colleague." },
  { team: "Leadership", text: "Get the weekly picture drafted from live data, with every figure traceable to its source." },
];

const TRUST = [
  { title: "Runs where you choose", text: "On a server you own or a private cloud account in your name." },
  { title: "Never trains anyone else", text: "Your data is not used for public models or for other clients." },
  { title: "Shows its source", text: "Every answer links to the document or record it came from, and access follows each person's role." },
  { title: "Yours to keep", text: "Built in-house with few outside dependencies. Export or delete everything at any time." },
];

const STEPS = [
  { step: "01", title: "Listen to every team", text: "From the MD to the interns: where knowledge lives and where work gets stuck." },
  { step: "02", title: "Gather your data", text: "Collect, clean and organise documents, emails, records and history." },
  { step: "03", title: "Build your LLM", text: "Train and ground the model on your data, then test it against real questions." },
  { step: "04", title: "Build agents and tools", text: "Agents that do real work, plus the workflows and tools each team needs." },
  { step: "05", title: "Run and improve", text: "Deploy, measure the results and keep teaching the model as your business changes." },
];

const ALSO = [
  { href: "/services/business-automation", title: "Process automation", text: "Automate the handovers and manual entry that slow every team down." },
  { href: "/services/custom-software-development", title: "Custom software", text: "Software built in-house around exactly how your business works." },
  { href: "/services/aeo-seo-geo", title: "AEO, SEO & GEO", text: "Be found on Google and named in ChatGPT, Gemini and Perplexity answers." },
  { href: "/digital-transformation", title: "Digital transformation", text: "End-to-end modernisation, from diagnosis to running systems and trained teams." },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── 1. HERO (Layout & animation unchanged) ── */}
      <section className="relative bg-forest overflow-hidden flex flex-col md:flex-row min-h-[600px]">
        <HeroLines />

        <div className="container-tbc py-s5 md:py-s7 relative z-10 flex-1 flex flex-col justify-center order-first">
          <div className="max-w-[620px]">
            <hr className="gold-rule mb-8 hero-1" />
            <h1 className="font-display font-bold text-white text-[clamp(32px,8vw,52px)] leading-[1.1] tracking-[-0.5px] mb-6 hero-2 text-balance">
              The intelligence layer your business has been missing.
            </h1>
            <p className="font-sans text-[18px] text-mid-grey leading-relaxed mb-10 hero-3 text-pretty">
              We train your company its own LLM on your documents, emails, orders
              and know-how, then build agents that do real work for every team.
              It runs on infrastructure you control, and you own all of it.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 hero-4">
              <Link href="/book-consultation" prefetch={false} className="btn-primary min-h-[48px] px-8 text-center flex items-center justify-center text-[16px] shadow-sm">
                Book an LLM readiness call
              </Link>
              <Link href="/services/custom-llm" prefetch={false} className="inline-flex items-center justify-center min-h-[48px] px-6 text-[15px] font-display font-semibold text-white/90 hover:text-white transition-colors gap-2">
                See how it works <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 1b. GENERAL AI VS YOUR OWN ── */}
      <section className="bg-white pt-s6 md:pt-s7 pb-2" aria-labelledby="why-own-heading">
        <div className="container-tbc">
          <div className="max-w-2xl mb-8">
            <hr className="gold-rule mb-4" />
            <h2 id="why-own-heading" className="font-display font-bold text-[clamp(26px,2.5vw,34px)] text-ink leading-[1.2] mb-3 text-balance">
              General AI knows the internet. Yours should know your company.
            </h2>
            <p className="text-body text-mid-grey text-pretty">
              Public chatbots give every business the same generic answers. The advantage comes from a model that has learned how your company actually works.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="rounded-[8px] border border-light-grey bg-ivory p-6">
              <h3 className="font-display font-bold text-[17px] text-ink mb-3">A general chatbot</h3>
              <ul className="space-y-2 text-[14px] text-mid-grey leading-relaxed list-disc pl-5">
                <li>Knows nothing about your products, prices, customers or procedures</li>
                <li>Your staff paste company data into someone else&apos;s service</li>
                <li>Gives confident answers with no source you can check</li>
                <li>Same tool your competitors use, so no edge</li>
              </ul>
            </div>
            <div className="rounded-[8px] border border-forest bg-forest p-6">
              <h3 className="font-display font-bold text-[17px] text-white mb-3">Your own LLM and agents</h3>
              <ul className="space-y-2 text-[14px] text-white/85 leading-relaxed list-disc pl-5">
                <li>Trained on your documents, records and the way your teams work</li>
                <li>Runs on infrastructure you control; your data never leaves</li>
                <li>Shows the document or record behind every answer</li>
                <li>Agents that do real work, owned by you and improving over time</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. YOUR OWN LLM IN THREE STEPS ── */}
      <section id="how-it-works" className="bg-white py-s6 md:py-s7 border-b border-light-grey scroll-mt-24" aria-labelledby="llm-heading">
        <div className="container-tbc">
          <div className="max-w-2xl mb-8">
            <hr className="gold-rule mb-4" />
            <h2 id="llm-heading" className="font-display font-bold text-[clamp(26px,2.5vw,34px)] text-ink leading-[1.2] mb-3 text-balance">
              Your own LLM, in three steps.
            </h2>
            <p className="text-body text-mid-grey text-pretty">
              The same kind of model that powers ChatGPT, set up for your company alone and taught by your own data.
            </p>
          </div>

          <LlmFlowDiagram />
        </div>
      </section>

      {/* ── 3. WHAT IT DOES FOR EACH TEAM ── */}
      <section className="bg-ivory py-s6 md:py-s7 border-b border-light-grey" aria-labelledby="teams-heading">
        <div className="container-tbc">
          <div className="max-w-2xl mb-8">
            <hr className="gold-rule mb-4" />
            <h2 id="teams-heading" className="font-display font-bold text-[clamp(26px,2.5vw,34px)] text-ink leading-[1.2] mb-3 text-balance">
              What it does for each team.
            </h2>
            <p className="text-body text-mid-grey text-pretty">
              One model that knows your business, answering every department in plain language.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TEAMS.map((t) => (
              <div key={t.team} className="bg-white border border-light-grey rounded-[8px] p-5">
                <h3 className="font-display font-bold text-[17px] text-ink mb-1.5">{t.team}</h3>
                <p className="text-[14px] text-mid-grey leading-relaxed">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. YOUR DATA STAYS YOURS ── */}
      <section className="bg-forest py-s6 md:py-s7" aria-labelledby="trust-heading">
        <div className="container-tbc">
          <div className="max-w-2xl mb-8">
            <hr className="gold-rule mb-4" />
            <h2 id="trust-heading" className="font-display font-bold text-[clamp(26px,2.5vw,34px)] text-white leading-[1.2] mb-3 text-balance">
              Your data stays yours.
            </h2>
            <p className="text-body text-white/80 text-pretty">
              A private model is only worth having if it stays private. These are the rules every build follows.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TRUST.map((t) => (
              <div key={t.title} className="rounded-[8px] border border-white/20 bg-white/5 p-5">
                <h3 className="font-display font-bold text-[16px] text-white mb-1.5">{t.title}</h3>
                <p className="text-[14px] text-white/75 leading-relaxed">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. TOOLS WE BUILD ON TOP ── */}
      <section className="bg-white py-s6 md:py-s7 border-b border-light-grey" aria-labelledby="tools-heading">
        <div className="container-tbc">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div className="max-w-2xl">
              <hr className="gold-rule mb-4" />
              <h2 id="tools-heading" className="font-display font-bold text-[clamp(26px,2.5vw,34px)] text-ink leading-[1.2] mb-3 text-balance">
                Then we build agents and tools around it.
              </h2>
              <p className="text-body text-mid-grey text-pretty">
                Once the model knows your business, we build agents that take on real work, plus the tools and workflows each team needs. These are some we have already shipped.
              </p>
            </div>
            <Link prefetch={false} href="/products" className="text-[15px] font-semibold text-royal hover:underline shrink-0">
              See all our tools &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-ivory border border-light-grey rounded-[8px] p-5 flex flex-col justify-between">
              <div>
                <div className="mb-4 aspect-video rounded overflow-hidden bg-white border border-light-grey">
                  <YouTubeLite id="a2w512JHBOk" title="Distil: from client enquiry to full proposal" />
                </div>
                <h3 className="font-display font-bold text-[18px] text-ink mb-1">Distil</h3>
                <p className="text-[14px] text-mid-grey leading-relaxed mb-4">
                  Turns a client enquiry into a full techno-commercial proposal from your own approved sections and rates. An engineer reviews every one.
                </p>
              </div>
              <Link prefetch={false} href="/products/distil" className="text-[14px] font-semibold text-royal hover:underline">
                Explore Distil &rarr;
              </Link>
            </div>

            <div className="bg-ivory border border-light-grey rounded-[8px] p-5 flex flex-col justify-between">
              <div>
                <div className="mb-4 aspect-video rounded overflow-hidden bg-white border border-light-grey flex items-center justify-center">
                  <div className="w-[120px]">
                    <YouTubeLite id="AVOYy42CqBk" title="Vantage: every answer, with the page it came from" isShort={true} />
                  </div>
                </div>
                <h3 className="font-display font-bold text-[18px] text-ink mb-1">Vantage</h3>
                <p className="text-[14px] text-mid-grey leading-relaxed mb-4">
                  Answers technical questions from your own catalogues and manuals, and shows the page each answer came from.
                </p>
              </div>
              <Link prefetch={false} href="/products/vantage" className="text-[14px] font-semibold text-royal hover:underline">
                Explore Vantage &rarr;
              </Link>
            </div>

            <div className="bg-ivory border border-light-grey rounded-[8px] p-5 flex flex-col justify-between">
              <div>
                <div className="mb-4 aspect-video rounded overflow-hidden bg-forest flex items-center justify-center p-4 border border-light-grey">
                  <svg viewBox="0 0 280 150" className="w-full h-full text-white" aria-hidden="true">
                    {/* Central Meridian Hub */}
                    <circle cx="140" cy="75" r="32" fill="#0C3D2A" stroke="#A7EBC8" strokeWidth="2" />
                    <text x="140" y="72" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">Meridian</text>
                    <text x="140" y="85" textAnchor="middle" fill="#A7EBC8" fontSize="8">Core Brain</text>
                    
                    {/* Orbiting nodes */}
                    {/* Orders (Cadence) */}
                    <circle cx="45" cy="45" r="22" fill="#08231A" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
                    <text x="45" y="44" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="600">Orders</text>
                    <text x="45" y="53" textAnchor="middle" fill="#A7EBC8" fontSize="7">Cadence</text>
                    <line x1="67" y1="52" x2="110" y2="67" stroke="#A7EBC8" strokeWidth="1" strokeDasharray="3 3" />
                    
                    {/* QA Certs (Assay) */}
                    <circle cx="235" cy="45" r="22" fill="#08231A" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
                    <text x="235" y="44" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="600">Lab QA</text>
                    <text x="235" y="53" textAnchor="middle" fill="#A7EBC8" fontSize="7">Assay</text>
                    <line x1="213" y1="52" x2="170" y2="67" stroke="#A7EBC8" strokeWidth="1" strokeDasharray="3 3" />
                    
                    {/* Service (Steward) */}
                    <circle cx="140" cy="132" r="16" fill="#08231A" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
                    <text x="140" y="135" textAnchor="middle" fill="#A7EBC8" fontSize="7">Steward</text>
                    <line x1="140" y1="107" x2="140" y2="116" stroke="#A7EBC8" strokeWidth="1" strokeDasharray="3 3" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-[18px] text-ink mb-1">Meridian</h3>
                <p className="text-[14px] text-mid-grey leading-relaxed mb-4">
                  One platform where orders, quality and service share a single company brain, private to your business.
                </p>
              </div>
              <Link prefetch={false} href="/products/meridian" className="text-[14px] font-semibold text-royal hover:underline">
                Explore Meridian &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. HOW WE WORK ── */}
      <section className="bg-ivory py-s6 md:py-s7 border-b border-light-grey" aria-labelledby="how-we-work-heading">
        <div className="container-tbc">
          <div className="max-w-2xl mb-8">
            <hr className="gold-rule mb-4" />
            <h2 id="how-we-work-heading" className="font-display font-bold text-[clamp(26px,2.5vw,34px)] text-ink leading-[1.2] mb-3 text-balance">
              How we work.
            </h2>
            <p className="text-body text-mid-grey text-pretty">
              Five steps from the first conversation to a model your whole company uses.
            </p>
          </div>

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {STEPS.map((s) => (
              <li key={s.step} className="bg-white border border-light-grey rounded-[8px] p-4 flex flex-col">
                <span className="font-mono text-[13px] font-bold text-forest bg-forest/10 px-2 py-0.5 rounded self-start mb-3">{s.step}</span>
                <h3 className="font-display font-bold text-[16px] text-ink mb-1.5">{s.title}</h3>
                <p className="text-[13px] text-mid-grey leading-relaxed">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── 7. ALSO FROM TBC ── */}
      <section className="bg-white py-s6 md:py-s7 border-b border-light-grey" aria-labelledby="also-heading">
        <div className="container-tbc">
          <div className="max-w-2xl mb-8">
            <hr className="gold-rule mb-4" />
            <h2 id="also-heading" className="font-display font-bold text-[clamp(26px,2.5vw,34px)] text-ink leading-[1.2] mb-3 text-balance">
              Also from TBC.
            </h2>
            <p className="text-body text-mid-grey text-pretty">
              The same team, for the rest of your technology.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ALSO.map((a) => (
              <Link
                key={a.href}
                href={a.href}
                prefetch={false}
                className="group bg-ivory border border-light-grey rounded-[8px] p-5 hover:border-forest/40 hover:shadow-card transition-all flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-display font-bold text-[17px] text-ink mb-1.5">{a.title}</h3>
                  <p className="text-[14px] text-mid-grey leading-relaxed">{a.text}</p>
                </div>
                <span className="text-[13px] font-semibold text-royal mt-5 inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  Learn more &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. FAQS ── */}
      <section className="bg-ivory py-s6 md:py-s7 border-b border-light-grey" aria-labelledby="home-faq-heading">
        <div className="container-tbc max-w-4xl">
          <div className="mb-8">
            <hr className="gold-rule mb-4" />
            <h2 id="home-faq-heading" className="font-display font-bold text-[clamp(24px,2.5vw,32px)] text-ink leading-[1.2] mb-2">
              Frequently asked questions.
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details key={i} className="group bg-white border border-light-grey rounded-[8px] p-5 open:shadow-card transition-all">
                <summary className="font-display font-bold text-[16px] text-ink cursor-pointer list-none flex items-center justify-between gap-4">
                  <span>{f.question}</span>
                  <span className="text-mid-grey text-[18px] transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="text-mid-grey leading-relaxed mt-3 pt-3 border-t border-light-grey text-pretty text-[14px]">
                  {f.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. CTA BAND ── */}
      <section className="bg-royal py-s7 text-center">
        <div className="container-tbc">
          <hr className="gold-rule gold-rule--center mb-6" />
          <h2 className="font-display font-bold text-[clamp(24px,3vw,36px)] text-white leading-[1.2] mb-3 text-balance">
            See what your own LLM could answer.
          </h2>
          <p className="text-body text-white/80 mb-8 text-pretty max-w-2xl mx-auto">
            Book a 30-minute readiness call. We will look at where your company&apos;s knowledge lives and show you what a private model could do with it.
          </p>
          <div className="flex flex-col items-center justify-center gap-3">
            <Link prefetch={false} href="/book-consultation" className="btn-gold min-h-[48px] px-10 text-[16px]">
              Book an LLM readiness call
            </Link>
            <Link prefetch={false} href="/free-ai-visibility-check" className="text-white/80 hover:text-white text-[14px] underline underline-offset-4 transition-colors">
              Or request a free AI visibility check &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

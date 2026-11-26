import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

const SITE = "https://turbobytesconsulting.com";
const TITLE = "Agent Desk: we do the work, you approve it | TBC";
const DESC =
  "Managed software agents handle collections, tenders, leads and reporting. A named TBC operator checks the work before you approve. Try one desk free.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  alternates: { canonical: "/agent-desk" },
  openGraph: { title: TITLE, description: DESC, url: `${SITE}/agent-desk`, images: [{ url: "/img/og-default.png", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" as const, title: TITLE, description: DESC },
};

interface Desk {
  name: string;
  hook: string;
  agent: string[];
  you: string;
  measure: string;
}

const desks: Desk[] = [
  {
    name: "Collections Desk",
    hook: "Who chases the money?",
    agent: [
      "Reads your receivables ageing every morning",
      "Drafts the right reminder for each customer: polite, firm or final",
      "Logs every promise to pay and chases again when the date passes",
    ],
    you: "Your accounts lead approves each batch of reminders with one tap.",
    measure: "Change in receivables over 60 days",
  },
  {
    name: "Tender Desk",
    hook: "Missed a tender again?",
    agent: [
      "Checks the government and PSU portals every day",
      "Matches each tender against your products, turnover and certificates",
      "Summarises eligibility, dates and documents, and builds the bid checklist",
    ],
    you: "You decide which tenders to bid on.",
    measure: "Qualified tenders found, and bids submitted on time",
  },
  {
    name: "Lead Desk",
    hook: "Pipeline gone quiet?",
    agent: [
      "Builds a prospect list against your ideal customer",
      "Researches each company from public sources",
      "Drafts a personal first message and the follow-ups",
    ],
    you: "You approve the list and every message. Nothing goes out on its own.",
    measure: "Meetings booked each month",
  },
  {
    name: "Document Desk",
    hook: "Who matches the invoices?",
    agent: [
      "Reads purchase invoices, POs and goods receipts from email and WhatsApp",
      "Matches invoice, PO and GRN, and flags price, quantity or GST differences",
      "Prepares the entries for your accounts team",
    ],
    you: "Your accounts team approves each entry before it is posted.",
    measure: "Documents processed, exception rate and days to post",
  },
  {
    name: "Compliance Desk",
    hook: "One missed due date, one late fee.",
    agent: [
      "Keeps every statutory date: GST, TDS, PF, ESI, ROC, licences and renewals",
      "Chases your team for the inputs, in good time",
      "Hands your CA a ready checklist and working files",
    ],
    you: "Your CA or finance head files. Due dates come from a rules table we maintain, never from a guess.",
    measure: "Filings on time, and late fees avoided",
  },
  {
    name: "Answers Desk",
    hook: "Fifty questions a day, two experts.",
    agent: [
      "Answers technical and service questions from your own catalogues and manuals",
      "Shows the page every answer came from",
      "Says so when the documents do not cover it, and hands over to a person",
    ],
    you: "Your expert reviews the weekly list of questions it could not answer.",
    measure: "Questions answered without an expert",
  },
  {
    name: "Content Desk",
    hook: "Great products, silent online.",
    agent: [
      "Drafts posts, carousels and short videos from your own products and projects",
      "Writes in your company's voice, with figures only from you",
      "Prepares a calendar one month ahead",
    ],
    you: "You approve the calendar and each piece. We schedule only what you approved.",
    measure: "Posts published, reach and enquiries from social",
  },
  {
    name: "MIS Desk",
    hook: "Where is the MIS?",
    agent: [
      "Pulls sales, collections, purchases, stock and costs from your books",
      "Builds the monthly pack, reconciled to the trial balance",
      "Writes a short commentary that uses only the numbers in the pack",
    ],
    you: "Your finance head reviews it before it goes to the owner or the board.",
    measure: "Days to close, and reconciliation differences",
  },
];

const steps = [
  { step: "01", title: "Pick one desk", body: "A 45-minute call to choose the job, who approves the work, and how we will measure it." },
  { step: "02", title: "Set up in about a week", body: "Your admin connects the data. We set up the agents and your approval queue, then run last month's data so you can compare." },
  { step: "03", title: "The desk runs", body: "Agents work every day. A named TBC operator checks the exceptions. You approve from your phone." },
  { step: "04", title: "Every Monday, a report", body: "What was done, what was approved, and the measure we agreed. A short review call once a month." },
];

const rules = [
  "A person approves anything that leaves your company: every message, post and submission.",
  "Amounts, dates and quantities come from your own systems, never from the agent.",
  "Read-only access by default. Anything more is added one action at a time, with your written approval.",
  "Agents never pay, transfer money or change bank details.",
  "Every action is logged with who approved it, and you can export the log.",
  "Indian clients' data stays in India. A data processing agreement is signed before set-up.",
  "You can pause any desk from the approval screen, and it stops at once.",
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE}/agent-desk#software`,
      name: "Agent Desk",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description: DESC,
      url: `${SITE}/agent-desk`,
      publisher: { "@id": `${SITE}/#organization` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE },
        { "@type": "ListItem", position: 2, name: "Agent Desk", item: `${SITE}/agent-desk` },
      ],
    },
  ],
};

export default function AgentDeskPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <nav aria-label="Breadcrumb" className="bg-ivory border-b border-light-grey">
        <div className="container-tbc py-3">
          <ol className="flex items-center gap-2 font-sans text-[13px] text-mid-grey">
            <li>
              <Link href="/" className="hover:text-ink transition-colors duration-150">Home</Link>
            </li>
            <li aria-hidden="true" className="text-light-grey select-none">/</li>
            <li className="text-ink font-semibold">Agent Desk</li>
          </ol>
        </div>
      </nav>

      <section className="bg-forest py-s7 relative overflow-hidden min-h-[380px] flex items-center border-b border-light-grey">
        <div className="container-tbc relative z-10">
          <Reveal>
            <p className="font-display font-semibold text-[14px] text-white/80 mb-3">Agent Desk</p>
            <hr className="gold-rule mb-6" />
            <h1 className="font-display font-bold text-white text-[clamp(32px,4.5vw,52px)] leading-[1.12] tracking-[-0.5px] max-w-3xl mb-5">
              We do the work. You approve it.
            </h1>
            <p className="font-sans text-[17px] text-white/75 leading-relaxed max-w-2xl mb-8">
              Some jobs do not need another tool to learn. They need doing: invoices chased, tenders found, the MIS ready
              by the 5th. Agent Desk runs one of these jobs for you. Software agents do the routine work, a named TBC
              operator checks it, and nothing goes out until you approve it.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/book-consultation" className="btn-gold">Pick one desk, free for 30 days</Link>
              <a href="#desks" className="btn-ghost-gold">See the eight desks</a>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="desks" className="bg-ivory py-s7 border-b border-light-grey" aria-labelledby="desks-heading">
        <div className="container-tbc">
          <div className="text-center max-w-2xl mx-auto mb-s6">
            <Reveal>
              <h2 id="desks-heading" className="font-display font-bold text-[clamp(28px,3vw,36px)] text-ink leading-[1.2] mb-4">
                Eight desks. Each one is a job, not a licence.
              </h2>
              <hr className="gold-rule gold-rule--center" />
            </Reveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {desks.map((d, i) => (
              <Reveal key={d.name} delay={(i % 4) * 0.05}>
                <article className="bg-white border border-light-grey rounded-[8px] shadow-card p-7 flex flex-col h-full">
                  <p className="font-display font-bold text-[12px] tracking-[1.5px] uppercase text-gold mb-3">{d.name}</p>
                  <h3 className="font-display font-semibold text-[21px] text-ink leading-snug mb-4">{d.hook}</h3>
                  <ul className="font-sans text-[14.5px] text-mid-grey leading-relaxed space-y-2 mb-5 flex-1">
                    {d.agent.map((a) => (
                      <li key={a} className="flex gap-2">
                        <span aria-hidden="true" className="text-forest font-bold">·</span>
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="font-sans text-[14px] text-ink leading-relaxed border-t border-light-grey pt-4 mb-2">
                    <span className="font-semibold">You: </span>{d.you}
                  </p>
                  <p className="font-sans text-[13px] text-mid-grey">
                    <span className="font-semibold text-ink">Measured by: </span>{d.measure}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-s7 border-b border-light-grey" aria-labelledby="how-heading">
        <div className="container-tbc max-w-5xl">
          <Reveal>
            <h2 id="how-heading" className="font-display font-bold text-[clamp(28px,3vw,36px)] text-ink leading-[1.2] mb-4">How a desk starts</h2>
            <hr className="gold-rule mb-s6" />
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <Reveal key={s.step} delay={i * 0.05}>
                <div>
                  <p className="font-display font-bold text-gold text-[28px] mb-2">{s.step}</p>
                  <h3 className="font-display font-semibold text-[18px] text-ink mb-2">{s.title}</h3>
                  <p className="font-sans text-[14.5px] text-mid-grey leading-relaxed">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory py-s7 border-b border-light-grey" aria-labelledby="queue-heading">
        <div className="container-tbc max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-s6 items-start">
          <Reveal>
            <h2 id="queue-heading" className="font-display font-bold text-[clamp(26px,2.8vw,34px)] text-ink leading-[1.2] mb-4">
              One approval queue, on your phone
            </h2>
            <hr className="gold-rule mb-6" />
            <p className="font-sans text-[16px] text-mid-grey leading-relaxed mb-4">
              Every reminder, message, post and bid waits in one queue until someone at your company approves it. Each draft
              shows the data it came from, so checking takes seconds.
            </p>
            <p className="font-sans text-[16px] text-mid-grey leading-relaxed">
              Internal work, such as matching documents or drafting the pack, runs on its own and is logged. Every month we
              add rules from your corrections, so the queue gets shorter.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="bg-white border border-light-grey rounded-[8px] shadow-card p-7">
              <p className="font-display font-bold text-[12px] tracking-[1.5px] uppercase text-gold mb-4">The rules every desk follows</p>
              <ul className="font-sans text-[14.5px] text-ink leading-relaxed space-y-3">
                {rules.map((r) => (
                  <li key={r} className="flex gap-3">
                    <span aria-hidden="true" className="mt-[7px] h-2 w-2 rounded-full bg-forest flex-none" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-s7 border-b border-light-grey" aria-labelledby="proof-heading">
        <div className="container-tbc max-w-3xl">
          <Reveal>
            <h2 id="proof-heading" className="font-display font-bold text-[clamp(26px,2.8vw,34px)] text-ink leading-[1.2] mb-4">
              We run it on ourselves first
            </h2>
            <hr className="gold-rule mb-6" />
            <p className="font-sans text-[16px] text-mid-grey leading-relaxed">
              The Lead and Content desks run TBC&rsquo;s own growth. In one month, with one operator, agents researched more
              than three hundred companies, drafted a personal email for each one we chose to contact, made two dozen short
              videos and scheduled our posts across four channels. Every message and post was approved by a person before
              it went out.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-forest py-s7 relative overflow-hidden" aria-labelledby="cta-heading">
        <div className="container-tbc relative z-10 text-center max-w-2xl">
          <Reveal>
            <h2 id="cta-heading" className="font-display font-bold text-white text-[clamp(28px,3.2vw,40px)] leading-[1.2] mb-4">
              Pick one desk. Free for 30 days.
            </h2>
            <p className="font-sans text-[16px] text-white/75 leading-relaxed mb-8">
              We run it on your real data for a month. If it does not save your team real hours, you stop, and you keep the log.
            </p>
            <Link href="/book-consultation" className="btn-gold">Book a 20-minute call</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

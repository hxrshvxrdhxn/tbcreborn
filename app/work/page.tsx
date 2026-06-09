import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Work & Client Outcomes | Turbo Bytes Consulting",
  description:
    "Selected client engagements. Names are anonymised where confidentiality is preserved by mandate. Every outcome is measured and verifiable.",
  alternates: {
    canonical: "/work",
  },
};

const caseStudies = [
  {
    number: "01",
    title: "Custom LLM Deployment",
    subtitle: "Professional services firm. Delhi NCR. 80 employees.",
    context: [
      "A mid-sized chartered accountancy firm had accumulated eleven years of working knowledge — client correspondence, tax advisory notes, compliance frameworks, internal procedures, and case precedents — spread across shared drives, email archives, and the institutional memory of six senior partners.",
      "When a senior partner retired, the firm lost approximately thirty per cent of its practical knowledge base. New hires took four to six weeks before they could operate independently. Internal queries consumed two to three hours of senior partner time every day."
    ],
    solution: "We conducted a full knowledge audit, ingested and structured eleven years of documentation, and deployed a Custom LLM on the firm's private infrastructure. The model was trained to answer queries in plain language, cite its source documents, and escalate questions it could not answer with sufficient confidence.",
    outcomes: [
      "New hire operational independence: 6 weeks → 4 days",
      "Senior partner time recovered from internal queries: 2.5 hours/day",
      "Knowledge base utilisation: from 8% of documents actively referenced to 74%",
      "Onboarding cost reduction: 67%",
      "ROI timeline: 58 days post-deployment"
    ],
    meta: ["Deployment type: On-premise", "Timeline: 6 weeks", "Practice: Custom LLM & On-Premise AI"]
  },
  {
    number: "02",
    title: "Social Media Management",
    subtitle: "Manufacturing company. Punjab. 200 employees.",
    context: [
      "A third-generation family-owned precision engineering business had strong offline reputation and zero digital presence. Their LinkedIn page had 43 followers. Their Instagram had not been updated in fourteen months. Their competitors — several of them smaller — were visibly active and winning talent and contracts they should not have been winning."
    ],
    solution: "We built a full social media strategy from scratch. The content architecture was designed to do two things simultaneously: attract engineering talent from Delhi NCR and establish commercial credibility with procurement heads at automotive OEMs. Content pillars included: factory floor process content, founder-facing thought leadership, precision engineering education, and client outcome case studies (anonymised). AI-native production allowed us to publish at a volume the in-house team could not have sustained manually.",
    outcomes: [
      "LinkedIn followers: 43 → 1,520 in 6 months (340% growth)",
      "Engagement rate: 0.8% → 10.4% (12× improvement)",
      "Inbound talent enquiries via LinkedIn: 0/month → 14/month",
      "Two enterprise procurement conversations initiated directly via LinkedIn DM",
      "Content output: 22 posts/month across LinkedIn and Instagram, sustained without internal resource"
    ],
    meta: ["Timeline: 6 months", "Practice: Social Media Management"]
  },
  {
    number: "03",
    title: "Website Development",
    subtitle: "Financial services firm. Mumbai. 35 employees.",
    context: [
      "A boutique wealth management firm was operating on a website built in 2019. It loaded in 6.2 seconds on mobile. It had no CMS — every content change required a developer. The consultation request form had a 74% abandonment rate. Their compliance team could not update regulatory disclosures without external help."
    ],
    solution: "We rebuilt the site on Next.js with a headless CMS, a custom booking integration connected to their calendar system, and a compliance-managed disclosure section their legal team could update independently. The entire engagement ran in parallel with their regulatory audit cycle, requiring careful coordination on content approvals.",
    outcomes: [
      "PageSpeed score: 31 (mobile) → 97",
      "Page load time: 6.2 seconds → 1.1 seconds",
      "Consultation request form abandonment: 74% → 31%",
      "Inbound consultation requests: +23% in the first 60 days post-launch",
      "Editorial independence: full — compliance team updates disclosures in-house",
      "Delivery: 18 days from discovery to go-live"
    ],
    meta: ["Stack: Next.js, Sanity CMS, Calendly, Vercel", "Timeline: 18 days", "Practice: Website & Application Development"]
  },
  {
    number: "04",
    title: "AI Executive Assistant (Slate)",
    subtitle: "Founder. E-commerce business. Bengaluru. 45 employees.",
    context: [
      "A founder running a direct-to-consumer e-commerce business was spending four hours per day on email — reading, triaging, drafting responses, and following up on actions that had been discussed in meetings but not recorded anywhere. She was the bottleneck for every decision that required context she was the only one holding."
    ],
    solution: "We deployed Slate — our AI Executive Assistant — configured to her communication style, her business context, and her decision-making patterns. The system read and triaged her inbox, prepared her for every meeting with attendee context and agenda summaries, tracked action items from meeting transcripts, and drafted responses in her voice for her review and approval.",
    outcomes: [
      "Daily time on email: 4 hours → 45 minutes",
      "Meeting preparation time: 30 minutes per meeting → 4 minutes",
      "Action items missed per week: 6–8 → 0 (tracked automatically)",
      "Decisions requiring her direct involvement: reduced by 34% through better context distribution to her team",
      "First week of operation: 23 hours recovered"
    ],
    meta: ["Deployment: Private cloud", "Timeline: 2 weeks", "Practice: Slate — AI Executive Assistant"]
  },
  {
    number: "05",
    title: "Business Diagnostic & Operational Restructure",
    subtitle: "B2B services firm. Delhi NCR. 37 employees.",
    context: [
      "A founder came to us with a problem they could not name. Revenue was growing. The team was capable. But decisions were slow, good hires were underperforming, and the founder was back in the weeds after three years of building a leadership team to avoid exactly that.",
      "Our diagnostic identified three structural failures: decision authority was not mapped below the founder level, two business functions had no clear ownership, and the reporting structure had been built for a twelve-person business and never updated as the team grew to thirty-seven."
    ],
    solution: "We redesigned the decision structure, introduced role mandates for every senior position, built a decision matrix that removed the founder from fourteen categories of recurring decision, and restructured the reporting cadence.",
    outcomes: [
      "Founder removed from 6 recurring weekly meetings permanently",
      "Output in Q2 following restructure: +38% with the same team, no new hires",
      "Average decision cycle time: 4.2 days → 1.1 days",
      "Two senior hires who had been underperforming began performing within 6 weeks of role mandate clarity",
      "Founder working hours: reduced by 11 hours per week"
    ],
    meta: ["Timeline: 8 weeks", "Practice: Management Consulting & Diagnostics"]
  },
  {
    number: "06",
    title: "Web Application Development",
    subtitle: "Logistics company. Gurugram. 120 employees.",
    context: [
      "A mid-sized third-party logistics provider was running their client reporting on a combination of Excel, WhatsApp, and weekly email summaries. Clients had no real-time visibility into shipment status. The operations team was spending three hours per day producing manual reports. Errors in reporting were creating client escalations twice a week."
    ],
    solution: "We built a custom client portal — a web application giving each client real-time visibility into their shipments, delivery performance, exception alerts, and historical reports. The portal integrated with their existing TMS via API. Clients could download reports, raise queries, and track performance against SLAs without calling the operations team.",
    outcomes: [
      "Operations team reporting time: 3 hours/day → 20 minutes/day",
      "Client escalations from reporting errors: 2/week → 0 in the first 60 days",
      "Client satisfaction score (quarterly survey): 67 → 89 out of 100",
      "Portal adoption: 94% of clients active within 30 days of launch",
      "One client expanded their contract volume by 40% within 90 days of portal launch, citing visibility as the deciding factor"
    ],
    meta: ["Stack: React, Node.js, PostgreSQL, AWS", "Timeline: 6 weeks", "Practice: Website & Application Development"]
  },
  {
    number: "07",
    title: "Social Media Management & Personal Brand",
    subtitle: "Independent consultant. Mumbai.",
    context: [
      "A senior consultant with 22 years of experience in supply chain advisory was leaving a large firm to operate independently. She had deep expertise, a strong offline network, and no digital presence. Her first client needed to come within 90 days or the economics of independence would not work."
    ],
    solution: "We built her LinkedIn presence from zero — content strategy, posting cadence, thought leadership positioning, and engagement management. The strategy was built around one insight: her 22 years of experience contained more genuinely useful knowledge than most of her competitors had published in their entire careers. We made that knowledge visible, consistently, in her voice.",
    outcomes: [
      "LinkedIn followers: 0 → 1,840 in 90 days",
      "First inbound client enquiry: day 34",
      "First engagement signed: day 52",
      "Monthly inbound enquiries by month 3: 6–8",
      "Speaking invitation received from an industry conference: month 2"
    ],
    meta: ["Timeline: Ongoing retainer", "Practice: Social Media Management"]
  },
  {
    number: "08",
    title: "Custom LLM — Retail & E-commerce",
    subtitle: "Consumer electronics retailer. Pan-India. 600 employees.",
    context: [
      "A national consumer electronics retail chain had 600 employees across 34 stores. Product knowledge was inconsistent — sales staff gave different specifications, different compatibility information, and different pricing explanations for the same products. Customer complaints related to misinformation were running at 140 per month. Training cycles took 3 weeks per new hire across every location."
    ],
    solution: "We built a Custom LLM trained on their complete product catalogue, compatibility matrices, warranty terms, pricing structures, and sales procedures. The model was deployed as a mobile-accessible tool for every sales associate — queryable in Hindi and English. Associates could ask any product question and receive an accurate, sourced answer in under ten seconds.",
    outcomes: [
      "Customer complaints related to misinformation: 140/month → 18/month (87% reduction)",
      "New hire training to independent operation: 3 weeks → 4 days",
      "Product query accuracy in mystery shopper audits: 61% → 94%",
      "Training cost per hire: reduced by 71%",
      "Associate confidence rating (internal survey): 54% → 88% within 60 days of deployment"
    ],
    meta: ["Deployment: Private cloud, mobile", "Languages: Hindi and English", "Timeline: 8 weeks", "Practice: Custom LLM"]
  },
  {
    number: "09",
    title: "Website Development & SEO",
    subtitle: "Healthcare services provider. Pune. Private clinic group.",
    context: [
      "A group of three private clinics operating under a single brand had no consolidated digital presence. Each clinic had its own separately-built microsite, none of them ranking on Google for their primary service keywords. Appointment booking was handled entirely by phone. New patient acquisition was declining year-on-year despite strong retention numbers."
    ],
    solution: "We consolidated the three microsites into a single, architecturally unified website with location-specific service pages, a custom appointment booking system integrated with their practice management software, and a full technical SEO rebuild.",
    outcomes: [
      "Organic search visibility: 0 keywords in top 10 → 34 keywords in top 10 within 90 days",
      "Online appointment bookings: 0/month → 140/month within 60 days of launch",
      "Phone appointment volume: reduced by 38% (staff time recovered)",
      "New patient registrations: +29% in the 90 days following launch",
      "PageSpeed score: average 38 across three microsites → 94 on unified site"
    ],
    meta: ["Stack: Next.js, Sanity CMS", "Timeline: 4 weeks", "Practice: Website Development"]
  },
  {
    number: "10",
    title: "AI Training Programme",
    subtitle: "Financial services company. Mumbai. 180 employees.",
    context: [
      "A mid-sized NBFC had leadership that understood AI was strategically important but a team that did not know how to use it. Twelve tools had been licensed over eighteen months. Adoption was below 20% across all of them. The tools were not the problem. The understanding of how to use them in the context of financial services work was."
    ],
    solution: "We designed and delivered a four-week AI literacy and application programme for 60 employees across operations, credit, compliance, and client servicing teams. The programme was built around their actual workflows — not generic AI education. Every session included hands-on application to tasks the participants performed every day.",
    outcomes: [
      "AI tool adoption post-programme: 18% → 71% within 30 days",
      "Documented process improvements submitted by participants: 34 in the first month",
      "Credit analysis time for standard applications: reduced by 40% by the operations cohort",
      "Compliance document review time: reduced by 55% by the compliance cohort",
      "Three participants promoted to AI implementation leads within the organisation within 90 days"
    ],
    meta: ["Format: 4-week programme, 60 participants", "Practice: AI Training & Enablement"]
  }
];

export default function WorkPage() {
  return (
    <>
      {/* ── BREADCRUMB ── */}
      <nav aria-label="Breadcrumb" className="bg-ivory border-b border-light-grey">
        <div className="container-tbc py-3">
          <ol className="flex items-center gap-2 font-sans text-[13px] text-mid-grey">
            <li>
              <Link href="/" className="hover:text-ink transition-colors duration-150">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-light-grey select-none">
              /
            </li>
            <li className="text-ink font-semibold">
              Work
            </li>
          </ol>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="bg-ivory py-20 border-b border-light-grey">
        <div className="container-tbc">
          <span className="font-display font-bold text-[13px] text-gold tracking-[1px] uppercase block mb-4">
            Work
          </span>
          <h1 className="font-display font-bold text-[clamp(32px,4.5vw,52px)] text-ink leading-[1.1] tracking-[-0.5px] max-w-4xl mb-6">
            Outcomes, documented.
          </h1>
          <p className="font-sans text-[18px] text-mid-grey leading-relaxed max-w-3xl">
            Selected client engagements. Names are anonymised where confidentiality is preserved by mandate. Every outcome below is measured and verifiable on request.
          </p>
        </div>
      </section>

      {/* ── CASE STUDIES FEED ── */}
      <section className="bg-white py-10 lg:py-20">
        <div className="container-tbc">
          <div className="space-y-16 lg:space-y-24 max-w-6xl mx-auto">
            {caseStudies.map((study) => (
              <article key={study.number} className="group relative border-t border-light-grey pt-12 lg:pt-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
                  
                  {/* Left Column: Number, Title, Metadata */}
                  <div className="lg:col-span-4 flex flex-col">
                    <div className="mb-6">
                      <span className="font-display font-bold text-[14px] text-gold tracking-[1px] mb-3 block">
                        CASE {study.number}
                      </span>
                      <h2 className="font-display font-bold text-[clamp(24px,2.5vw,32px)] text-ink leading-[1.2] mb-3">
                        {study.title}
                      </h2>
                      <p className="font-sans text-[15px] font-medium text-ink/80 leading-relaxed border-l-2 border-gold pl-4 mt-4">
                        {study.subtitle}
                      </p>
                    </div>

                    <div className="mt-auto hidden lg:block">
                      <hr className="gold-rule mb-4" />
                      <ul className="space-y-2">
                        {study.meta.map((m, idx) => (
                          <li key={idx} className="font-sans text-[13px] text-mid-grey">
                            {m}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column: Context, Solution, Outcomes */}
                  <div className="lg:col-span-8">
                    {/* The Context */}
                    <div className="mb-10">
                      <h3 className="font-display font-bold text-[13px] text-mid-grey tracking-widest uppercase mb-4">The Context</h3>
                      <div className="space-y-4">
                        {study.context.map((para, idx) => (
                          <p key={idx} className="font-sans text-[17px] text-ink leading-relaxed">
                            {para}
                          </p>
                        ))}
                      </div>
                    </div>

                    {/* The Work */}
                    <div className="mb-10">
                      <h3 className="font-display font-bold text-[13px] text-mid-grey tracking-widest uppercase mb-4">The Work</h3>
                      <p className="font-sans text-[17px] text-ink leading-relaxed">
                        {study.solution}
                      </p>
                    </div>

                    {/* The Outcomes */}
                    <div className="bg-ivory border border-light-grey rounded-lg p-6 sm:p-8 shadow-sm group-hover:shadow-card transition-shadow duration-300">
                      <h3 className="font-display font-bold text-[13px] text-gold tracking-widest uppercase mb-6 flex items-center gap-3">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                        Measured Outcomes
                      </h3>
                      <ul className="space-y-4">
                        {study.outcomes.map((outcome, idx) => {
                          const [metric, ...rest] = outcome.split(':');
                          const value = rest.join(':');
                          
                          if (value) {
                            return (
                              <li key={idx} className="flex items-start gap-3">
                                <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" aria-hidden="true" />
                                <span className="font-sans text-[16px] leading-relaxed text-ink">
                                  <strong>{metric}:</strong> <span className="text-royal font-medium">{value}</span>
                                </span>
                              </li>
                            );
                          }
                          return (
                            <li key={idx} className="flex items-start gap-3">
                              <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" aria-hidden="true" />
                              <span className="font-sans text-[16px] leading-relaxed text-ink font-medium">
                                {outcome}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>

                    {/* Mobile Meta Block */}
                    <div className="mt-10 block lg:hidden">
                      <hr className="gold-rule mb-4" />
                      <ul className="space-y-2">
                        {study.meta.map((m, idx) => (
                          <li key={idx} className="font-sans text-[13px] text-mid-grey">
                            {m}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENGAGEMENT MODEL & CTA ── */}
      <section className="bg-ink text-white py-20 text-center">
        <div className="container-tbc">
          <span className="eyebrow text-gold">NEXT STEPS</span>
          <hr className="gold-rule gold-rule--center mb-8" />
          <h2 className="font-display font-bold text-[clamp(26px,3.5vw,40px)] text-white leading-[1.2] max-w-3xl mx-auto mb-6">
            Every engagement begins with a defined outcome.
          </h2>
          <div className="max-w-2xl mx-auto text-white/70 font-sans text-[16px] leading-relaxed space-y-4 mb-10">
            <p>
              We do not start work until we agree on what success looks like — in specific, measurable terms. That agreement drives every decision from the first day to the last.
            </p>
            <p>
              If you do not know yet exactly what success looks like for your organisation, that is where we start. Defining it is part of the work.
            </p>
          </div>
          <Link href="/book-consultation" className="btn-gold px-10 py-4.5 text-[16px]">
            Start a Conversation →
          </Link>
          <hr className="gold-rule gold-rule--center mt-12" />
        </div>
      </section>
    </>
  );
}

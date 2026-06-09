import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Social Media Management | Turbo Bytes Consulting",
  description:
    "Precision-engineered content. Platform-native strategy. AI-driven execution. Enterprise-scale content operations.",
  alternates: { canonical: "/services/smm" },
  openGraph: {
    title: "Social Media Management | Turbo Bytes Consulting",
    description:
      "Precision-engineered content. Platform-native strategy. AI-driven execution. Enterprise-scale content operations.",
    url: "https://turbobytesconsulting.com/services/smm",
    images: [{ url: "/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Social Media Management | Turbo Bytes Consulting",
    description:
      "Precision-engineered content. Platform-native strategy. AI-driven execution.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Social Media Management",
  provider: {
    "@type": "Organization",
    name: "Turbo Bytes Consulting",
    url: "https://turbobytesconsulting.com",
  },
  url: "https://turbobytesconsulting.com/services/smm",
  description:
    "Precision-engineered content. Platform-native strategy. AI-driven execution. Enterprise-scale content operations.",
};

const problems = [
  {
    title: "Inconsistency destroys credibility",
    description:
      "A LinkedIn page with three posts from eight months ago tells a prospective client one thing: this organisation does not follow through. Consistency is the minimum standard. We maintain it without exception.",
  },
  {
    title: "Generic content produces generic results",
    description:
      "Most business social media content is indistinguishable from every other organisation in the same sector. It says the right things in the least memorable way. Platform-native, audience-specific content is a different discipline entirely.",
  },
  {
    title: "The volume required is beyond manual capacity",
    description:
      "Competing effectively on social media in 2026 requires more content, more consistently, at a higher quality bar than any single person or small in-house team can produce manually. AI-native production is not a shortcut — it is the only viable production model at scale.",
  },
  {
    title: "Posting without strategy is noise",
    description:
      "Content without a defined audience, a conversion objective, and a measurement framework is brand expense with no return. Every piece of content we produce exists inside a strategic architecture designed to move people from unaware to engaged to client.",
  },
];

const includedFeatures = [
  {
    title: "Strategy & Planning",
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21V9.75M20.716 14.253A8.99 8.99 0 0021 12V3m0 0l-3 3m3-3l-3-3M3.284 14.253A8.99 8.99 0 013 12V3m0 0l3 3m-3-3L3 0" />
      </svg>
    ),
    items: [
      "Full brand voice and tone audit — if you have an existing identity, we learn it precisely; if you are building one, we define it",
      "Audience intelligence: detailed profile of your target audience by platform",
      "Competitor content audit: analysis of what your direct competitors are publishing",
      "Full annual content strategy: themes, pillars, content types, posting cadence, and campaign calendar",
      "Platform strategy by channel: what we publish where, in what format, and why",
      "Monthly strategy recalibration based on performance data and audience behaviour shifts",
    ],
  },
  {
    title: "Content Production",
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
    items: [
      "AI-powered content creation across all formats: articles, posts, carousels, reels, shorts",
      "Every piece reviewed, edited, and approved by a human content specialist before publication",
      "Original image creation: branded graphics, infographics, quote cards, and campaign assets",
      "Short-form and long-form video production: scripted, produced, and edited",
      "Copywriting in your brand voice written to perform on each platform's algorithm",
      "Content batch production: monthly batches reviewed and approved in advance",
    ],
  },
  {
    title: "Platform Management",
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.187 13.404l-1.807-1.807m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    items: [
      "Active management of all agreed platforms: scheduling, publishing, community management",
      "Comment monitoring and response — managed within a defined response window",
      "Inbox management: direct messages and enquiries handled according to protocols",
      "Story and interactive content management: polls, questions, countdowns",
      "Hashtag strategy and trend integration",
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
      "Monthly performance analytics: reach, impressions, engagement rate, conversions",
      "Audience intelligence: who your followers are and how they behave",
      "Content performance breakdown: what is working, what is not, and why",
      "Competitor benchmarking against organisations you compete with",
      "Platform algorithm updates and quarterly strategic reviews",
    ],
  },
  {
    title: "Crisis Communication",
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    items: [
      "Crisis communication protocol established at onboarding",
      "Rapid-response capability: we move within the hour for immediate attention",
      "Brand safety monitoring: automated alerts for mentions and sentiment shifts",
      "Holding statement preparation and communications management during events",
    ],
  },
  {
    title: "Account Structure & Compliance",
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    items: [
      "Platform account audit and optimisation at onboarding",
      "LinkedIn, Instagram, Facebook, and Google Business Profile configuration",
      "Meta Business Suite setup and verification where required",
      "Advertising account configuration for paid amplification",
      "Platform policy compliance monitoring for regulated sectors",
    ],
  },
];

const timelineSteps = [
  {
    phase: "Days 1–5",
    title: "Onboarding",
    description:
      "Brand immersion session with your team. We learn your voice, your audience, your commercial objectives, and your constraints. We audit your existing social presence and your competitors'. We establish the content approval workflow and communication protocols.",
  },
  {
    phase: "Days 6–10",
    title: "First Calendar",
    description:
      "Full content calendar for the first month delivered for review. Every post, every platform, every format — structured, copy-written, and designed. You review, request changes, approve. We schedule.",
  },
  {
    phase: "Month 1",
    title: "Execution & Baseline",
    description:
      "Full execution of the approved calendar. Community management live. Performance baseline established. End-of-month analytics report delivered.",
  },
  {
    phase: "Month 2 onwards",
    title: "Optimise & Scale",
    description:
      "Monthly cycle: performance review, strategy recalibration, next calendar produced and approved, execution. The system improves continuously — what performs informs what comes next.",
  },
];

const platformStrategy = [
  {
    title: "LinkedIn",
    description:
      "The primary platform for B2B authority building and professional services. Content here prioritises thought leadership, case studies, process transparency, and founder-facing perspective pieces. Posting cadence: 3–5 times per week. Format mix: text posts, carousels, short articles, and native video.",
  },
  {
    title: "Instagram",
    description:
      "Visual authority and brand personality. Content here builds the aesthetic and cultural dimension of your brand — the side of your organisation that clients want to be associated with. Posting cadence: 5–7 times per week across feed, stories, and reels. Format mix: designed graphics, short-form video, carousels, and interactive stories.",
  },
  {
    title: "Facebook",
    description:
      "Community and local presence. Particularly relevant for businesses with a physical presence, a regional market, or a consumer-adjacent offering. Content here is warmer, more conversational, and community-oriented. Posting cadence: 3–5 times per week.",
  },
  {
    title: "Twitter/X",
    description:
      "Real-time commentary and industry positioning. Content here is fast, opinionated, and immediate. Threads for depth, single posts for velocity. Particularly effective for founder-facing thought leadership and industry observation. Posting cadence: daily.",
  },
  {
    title: "YouTube",
    description:
      "Long-form authority and search presence. The highest-trust content format in existence. Content here builds deep credibility with audiences who are actively researching. Posting cadence: 2–4 videos per month. Format: explainers, case studies, service walkthroughs, and founder interviews.",
  },
  {
    title: "TikTok",
    description:
      "Reach and discovery. The fastest-growing platform for business content. Content here prioritises entertainment, education, and personality — with a shorter format and a younger demographic skew. Posting cadence: 5–7 times per week.",
  },
];

const targetAudience = [
  {
    subtitle: "Trust-Based Growth",
    title: "Professional Services Firms",
    description:
      "Consultancies, law firms, CA firms, financial advisors — where trust is the product and social media is the trust-building infrastructure. LinkedIn is your primary battleground.",
  },
  {
    subtitle: "Unified Voice",
    title: "Founder-Led Businesses",
    description:
      "Building personal and professional brand simultaneously — where the founder's voice and the company's voice need to grow together coherently.",
  },
  {
    subtitle: "Sustained Visibility",
    title: "B2B Businesses with Long Sales Cycles",
    description:
      "Where the goal is not immediate conversion but sustained visibility, so that when a prospective client is ready to engage, your name is already in their consideration set.",
  },
  {
    subtitle: "Market Entry",
    title: "New Markets or Services",
    description:
      "Businesses entering new markets or launching new services — where establishing presence quickly and credibly is a commercial priority.",
  },
  {
    subtitle: "Sustainable Scaling",
    title: "Organisations Seeking Consistency",
    description:
      "Organisations that have tried social media in-house and found it unsustainable — where the quality, consistency, and volume required exceeded what was feasible alongside everything else.",
  },
];

const faqs = [
  {
    q: "How involved does our team need to be?",
    a: "Involvement is calibrated to your preference. At minimum, your team approves the monthly content calendar before it goes live — typically a one-hour review session. At maximum, your team is closely involved in ideation, briefing, and review. We adapt to whatever level of involvement works for your organisation.",
  },
  {
    q: "How do you capture our brand voice accurately?",
    a: "Through a structured brand immersion process at onboarding. We interview key stakeholders, analyse your existing content, review your brand documentation, and produce a tone-of-voice guide that governs every piece of content we create. If we deviate from it, you tell us, and we recalibrate.",
  },
  {
    q: "Do you handle paid social advertising?",
    a: "Paid amplification is available as an add-on. We configure and manage paid campaigns on Meta, LinkedIn, and Google — including creative, targeting, and optimisation. Advertising spend is managed separately and reported transparently.",
  },
  {
    q: "What happens if we need to respond to something urgently?",
    a: "Crisis communication protocols are established at onboarding. For urgent situations, you have a direct line to your dedicated Social Media Manager with a defined response time. For major reputational events, our crisis communication protocol activates immediately.",
  },
  {
    q: "Can we approve everything before it goes live?",
    a: "Yes. The content approval workflow is defined at onboarding and can be configured to require approval at any level of granularity — from individual posts to monthly calendars. We default to monthly calendar approval unless a client requires more granular control.",
  },
  {
    q: "How do you measure success?",
    a: "Success metrics are defined at the start of the engagement based on your commercial objectives. For awareness-stage organisations, we track reach and follower growth. For authority-building, we track engagement rate and content saves. For conversion-focused objectives, we track profile visits, link clicks, and inbound enquiries attributable to social. Every metric is reported monthly and reviewed quarterly.",
  },
  {
    q: "What is the minimum commitment?",
    a: "Three months. Social media authority is not built in thirty days. The first month establishes the baseline. The second begins to compound. By month three, the data exists to make genuinely informed decisions. Clients who commit beyond three months see meaningfully better outcomes.",
  },
];

export default function SMMPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

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
            <li>
              <Link href="/services" className="hover:text-ink transition-colors duration-150">
                Services
              </Link>
            </li>
            <li aria-hidden="true" className="text-light-grey select-none">
              /
            </li>
            <li className="text-ink font-semibold">
              Social Media Management
            </li>
          </ol>
        </div>
      </nav>

      {/* ── PAGE HERO ── */}
      <section className="bg-ivory py-20 border-b border-light-grey">
        <div className="container-tbc">
          <span className="font-display font-bold text-[13px] text-gold tracking-[1px] uppercase block mb-4">
            Practice 04
          </span>
          <h1 className="font-display font-bold text-[clamp(32px,4.5vw,52px)] text-ink leading-[1.1] tracking-[-0.5px] max-w-4xl mb-6 text-balance">
            Social Media Management
          </h1>
          <p className="font-sans text-[18px] text-mid-grey leading-relaxed max-w-3xl mb-8">
            Precision-engineered content. Platform-native strategy. AI-driven execution.
          </p>
          <div className="inline-flex flex-wrap items-center gap-3 bg-white border border-light-grey rounded-lg px-4 py-3 shadow-card">
            <span
              className="w-2.5 h-2.5 rounded-full bg-gold flex-shrink-0"
              aria-hidden="true"
            />
            <span className="font-display font-semibold text-[13px] text-ink">
              Onboarding: 5 days
            </span>
            <span className="text-light-grey">|</span>
            <span className="font-display font-semibold text-[13px] text-ink">
              First content calendar: 10 days
            </span>
            <span className="text-light-grey">|</span>
            <span className="font-display font-semibold text-[13px] text-ink">
              Monthly retainer
            </span>
          </div>
        </div>
      </section>

      {/* ── WHAT THIS IS ── */}
      <section className="bg-white py-20 border-b border-light-grey">
        <div className="container-tbc">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <span className="eyebrow">OVERVIEW</span>
              <h2 className="font-display font-bold text-[clamp(26px,3vw,34px)] text-ink leading-[1.2] mb-6">
                What This Is
              </h2>
              <hr className="gold-rule" />
            </div>
            <div className="lg:col-span-8 space-y-6">
              <p className="font-sans text-[17px] text-mid-grey leading-relaxed">
                Social media is not a marketing channel. It is a trust infrastructure.
              </p>
              <p className="font-sans text-[17px] text-mid-grey leading-relaxed">
                The organisations that win new clients through social media are not the ones posting the most frequently. They are the ones that have built consistent, recognisable authority in the minds of the people they want to work with — before a single sales conversation takes place.
              </p>
              <p className="font-sans text-[17px] text-mid-grey leading-relaxed">
                We build that authority systematically. Our AI-native production model allows us to deliver enterprise-scale content operations for organisations of any size — with the strategic discipline of a management consultancy and the production capacity of a dedicated media team.
              </p>
              <div className="bg-ivory border-l-4 border-gold p-6 rounded-r-lg mt-8">
                <p className="font-sans text-[16px] text-ink leading-relaxed font-medium">
                  Every piece of content is created with a specific commercial objective. Every platform is managed with a distinct strategy. Every month is assessed against performance data and recalibrated.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE PROBLEM IT SOLVES ── */}
      <section className="bg-ivory py-20 border-b border-light-grey">
        <div className="container-tbc">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="eyebrow">THE FRICTION</span>
                <h2 className="font-display font-bold text-[clamp(26px,3vw,34px)] text-ink leading-[1.2] mb-6">
                  The Problem It Solves
                </h2>
                <hr className="gold-rule mb-8" />
              </div>
              <div className="bg-white border border-light-grey rounded-lg p-8 shadow-card mb-8 lg:mb-0">
                <p className="font-display font-bold text-[20px] text-ink leading-snug mb-3">
                  A cohesive, AI-native approach resolves all these issues simultaneously.
                </p>
                <div className="w-12 h-1 bg-royal mt-4"></div>
              </div>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {problems.map((prob, i) => (
                <div
                  key={prob.title}
                  className="bg-white border border-light-grey rounded-lg p-6 shadow-card hover:shadow-card-hover transition-all duration-200"
                >
                  <span className="font-display font-bold text-[13px] text-gold tracking-[1px] mb-3 block">
                    0{i + 1}
                  </span>
                  <h3 className="font-display font-bold text-[17px] text-ink leading-snug mb-2">
                    {prob.title}
                  </h3>
                  <p className="font-sans text-[14px] text-mid-grey leading-relaxed">
                    {prob.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className="bg-white py-20 border-b border-light-grey">
        <div className="container-tbc">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="eyebrow">THE CAPABILITIES</span>
            <h2 className="font-display font-bold text-[clamp(28px,3vw,36px)] text-ink leading-[1.2] mb-6">
              What&apos;s Included
            </h2>
            <hr className="gold-rule gold-rule--center" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {includedFeatures.map((feat) => (
              <article
                key={feat.title}
                className="bg-ivory border border-light-grey rounded-lg p-8 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-200"
              >
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
                    <li
                      key={item}
                      className="flex items-start gap-2.5 font-sans text-[14px] text-mid-grey leading-relaxed"
                    >
                      <span
                        className="mt-[7px] flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gold"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS (TIMELINE) ── */}
      <section className="bg-ivory py-20 border-b border-light-grey">
        <div className="container-tbc">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="eyebrow">PROCESS</span>
            <h2 className="font-display font-bold text-[clamp(28px,3vw,36px)] text-ink leading-[1.2] mb-6">
              How It Works
            </h2>
            <hr className="gold-rule gold-rule--center" />
          </div>

          <div className="max-w-4xl mx-auto relative pl-8 border-l-2 border-gold/30 space-y-10">
            {timelineSteps.map((step, i) => (
              <div key={step.title} className="relative group">
                <span className="absolute -left-[38px] top-1.5 w-4.5 h-4.5 rounded-full border-4 border-ivory bg-gold flex items-center justify-center shadow-sm" />
                <div className="bg-white border border-light-grey rounded-lg p-6 md:p-8 shadow-card group-hover:shadow-card-hover transition-all duration-200">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                    <span className="font-display font-bold text-[13px] text-gold tracking-[1px] uppercase">
                      {step.phase}
                    </span>
                    <span className="font-display font-semibold text-[11px] text-mid-grey/60">
                      Phase 0{i + 1}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-[18px] text-ink leading-snug mb-3">
                    {step.title}
                  </h3>
                  <p className="font-sans text-[15px] text-mid-grey leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLATFORM STRATEGY ── */}
      <section className="bg-ink text-white py-20 border-b-2 border-gold">
        <div className="container-tbc">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="eyebrow text-gold">CHANNELS</span>
              <h2 className="font-display font-bold text-[clamp(28px,3.5vw,38px)] text-white leading-[1.15] mb-6">
                Platform Strategy
              </h2>
              <hr className="gold-rule mb-8" />
              <p className="font-sans text-[16px] text-white/70 leading-relaxed mb-8">
                Each platform has its own audience behaviour, content format preferences, algorithm logic, and commercial utility. We do not apply the same strategy to every platform.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {platformStrategy.map((platform) => (
                <div
                  key={platform.title}
                  className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors duration-150"
                >
                  <div className="flex items-center gap-2 mb-3 text-gold">
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <h3 className="font-display font-bold text-[15px] tracking-wide text-white leading-snug">
                      {platform.title}
                    </h3>
                  </div>
                  <p className="font-sans text-[13.5px] text-white/60 leading-relaxed">
                    {platform.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── THE AI-NATIVE PRODUCTION MODEL ── */}
      <section className="bg-white py-20 border-b border-light-grey">
        <div className="container-tbc">
          <div className="max-w-4xl mx-auto text-center">
            <span className="eyebrow">OUR APPROACH</span>
            <h2 className="font-display font-bold text-[clamp(28px,3vw,36px)] text-ink leading-[1.2] mb-6">
              The AI-Native Production Model
            </h2>
            <hr className="gold-rule gold-rule--center mb-10" />
            <div className="space-y-6 text-left">
              <p className="font-sans text-[17px] text-mid-grey leading-relaxed">
                Our production model is different from a traditional social media agency, and transparency about how it works is important.
              </p>
              <p className="font-sans text-[17px] text-mid-grey leading-relaxed">
                We use artificial intelligence at every stage of the production process: ideation, drafting, image generation, caption writing, performance analysis, and strategic planning. This allows us to operate at a volume and consistency that a traditional team working manually cannot match.
              </p>
              <div className="bg-ivory border-l-4 border-gold p-6 rounded-r-lg mt-8">
                <p className="font-sans text-[16px] text-ink leading-relaxed font-medium">
                  What AI does not replace: strategic judgment, brand alignment review, client knowledge, and the human assessment of what feels right and what does not. Every piece of content is reviewed by a specialist before it is published. The AI produces at scale. The human ensures quality.
                </p>
              </div>
              <p className="font-sans text-[17px] text-mid-grey leading-relaxed">
                The result is enterprise-scale content production at a price point accessible to businesses that could not previously justify an in-house content team or a full-service agency retainer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO THIS IS FOR ── */}
      <section className="bg-ivory py-20 border-b border-light-grey">
        <div className="container-tbc">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="eyebrow">TARGET AUDIENCE</span>
            <h2 className="font-display font-bold text-[clamp(28px,3vw,36px)] text-ink leading-[1.2] mb-6">
              Who This Is For
            </h2>
            <hr className="gold-rule gold-rule--center" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {targetAudience.map((audience) => (
              <article
                key={audience.title}
                className="bg-white border border-light-grey rounded-lg p-8 shadow-card hover:shadow-card-hover transition-shadow duration-200"
              >
                <span className="font-display font-bold text-[11px] text-gold tracking-[1px] uppercase block mb-1">
                  {audience.subtitle}
                </span>
                <h3 className="font-display font-bold text-[18px] text-ink leading-snug mb-3">
                  {audience.title}
                </h3>
                <hr className="gold-rule mb-4" />
                <p className="font-sans text-[14.5px] text-mid-grey leading-relaxed">
                  {audience.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── FREQUENTLY ASKED QUESTIONS ── */}
      <section className="bg-white py-20 border-b border-light-grey">
        <div className="container-tbc">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="eyebrow">FAQ</span>
            <h2 className="font-display font-bold text-[clamp(28px,3vw,36px)] text-ink leading-[1.2] mb-6">
              Frequently Asked Questions
            </h2>
            <hr className="gold-rule gold-rule--center" />
          </div>

          <div className="max-w-3xl mx-auto space-y-2">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group border border-light-grey rounded-lg bg-ivory/20 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer p-6 font-display font-bold text-ink text-[16px] md:text-[17px] hover:bg-ivory/50 select-none rounded-t-lg transition-colors">
                  <span>{faq.q}</span>
                  <span className="text-gold group-open:rotate-180 transition-transform duration-200">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="p-6 pt-0 border-t border-light-grey/40 font-sans text-[15px] text-mid-grey leading-relaxed bg-white rounded-b-lg">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENGAGEMENT MODEL & CTA ── */}
      <section className="bg-ink text-white py-20 text-center">
        <div className="container-tbc">
          <span className="eyebrow text-gold">ENGAGEMENT MODEL</span>
          <hr className="gold-rule gold-rule--center mb-8" />
          <h2 className="font-display font-bold text-[clamp(26px,3.5vw,40px)] text-white leading-[1.2] max-w-3xl mx-auto mb-6">
            Ready to build your AI-powered social presence?
          </h2>
          <div className="max-w-2xl mx-auto text-white/70 font-sans text-[16px] leading-relaxed space-y-4 mb-10">
            <p>
              Social media management is structured as a monthly retainer. Pricing is based on the number of platforms managed, content volume, and whether video production is included.
            </p>
            <p>
              The process begins with a consultation — typically 45 minutes. We understand your objectives, your current presence, your audience, and your competitive context. A detailed proposal covering scope, deliverables, and investment is delivered within 48 hours.
            </p>
          </div>
          <Link href="/book-consultation" className="btn-gold px-10 py-4.5 text-[16px]">
            Request a Consultation →
          </Link>
          <hr className="gold-rule gold-rule--center mt-12" />
        </div>
      </section>
    </>
  );
}

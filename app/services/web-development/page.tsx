import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import ServiceFooter from "@/components/ServiceFooter";
import SectionInk from "@/components/SectionInk";
import ProcessTimeline from "@/components/ProcessTimeline";

export const metadata: Metadata = {
  title: "Website & Web Application Development | Turbo Bytes Consulting",
  description:
    "Architecturally sound. Conversion-optimised. Built to perform. Custom websites and enterprise web applications designed for commercial results. Turbo Bytes Consulting.",
  alternates: { canonical: "/services/web-development" },
  openGraph: {
    title: "Website & Web Application Development | Turbo Bytes Consulting",
    description:
      "Architecturally sound. Conversion-optimised. Built to perform. Custom websites and enterprise web applications designed for commercial results. Turbo Bytes Consulting.",
    url: "https://turbobytesconsulting.com/services/web-development",
    images: [{ url: "/img/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Website & Web Application Development | Turbo Bytes Consulting",
    description:
      "Architecturally sound. Conversion-optimised. Built to perform. Custom websites and enterprise web applications.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Website & Application Development",
  provider: {
    "@type": "Organization",
    name: "Turbo Bytes Consulting",
    url: "https://turbobytesconsulting.com",
  },
  url: "https://turbobytesconsulting.com/services/web-development",
  description:
    "Architecturally sound. Conversion-optimised. Built to perform. Custom business websites, e-commerce, web applications, and post-launch support.",
};

const problems = [
  {
    title: "Your website loses clients silently",
    description:
      "A page that loads in four seconds loses 25% of visitors before it renders. A page that loads in two seconds does not. This is not a design problem. It is an engineering problem.",
  },
  {
    title: "Your team cannot update it without help",
    description:
      "If publishing a blog post or updating a service page requires a developer ticket, your website is a liability. Editorial independence is a non-negotiable deliverable.",
  },
  {
    title: "It does not convert traffic",
    description:
      "Traffic without conversion architecture is an expensive vanity metric. Most websites have no structured path from visitor to enquiry. Calls to action are afterthoughts.",
  },
  {
    title: "It was not built to last",
    description:
      "Technology decisions made to save budget in year one often create three years of technical debt, compatibility failures, and rebuilds. We build for longevity.",
  },
];

const includedFeatures = [
  {
    title: "Strategy & Architecture",
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L16 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    items: [
      "Discovery session to map commercial objectives & audience contexts",
      "Information architecture, navigation flows, and layout wireframes",
      "Conversion architecture to map out user journeys to structured inquiries",
      "Technical specification, tech stack selection, and scalability plans",
    ],
  },
  {
    title: "Custom Design",
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122l9.37-9.37a2.25 2.25 0 113.182 3.182l-9.37 9.37a4.5 4.5 0 01-2.25 1.25l-3.136.784a.75.75 0 01-.91-.91l.784-3.136a4.5 4.5 0 011.25-2.25z" />
      </svg>
    ),
    items: [
      "Bespoke visual layouts designed from scratch — no templates used",
      "Consistent typography, brand colors, motion system, and assets",
      "Mobile-first responsive design fully verified on all modern viewports",
      "Accessibility compliance matching WCAG 2.1 AA standards",
    ],
  },
  {
    title: "High-Performance Development",
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    items: [
      "Clean, maintainable codebase structured cleanly for future transitions",
      "Core Web Vitals optimised: LCP under 2.5s and CLS under 0.1",
      "SEO-complete: semantic markup, structured schemas, Open Graph",
      "Cross-browser testing (Chrome, Safari, Firefox, Edge, and Mobile)",
    ],
  },
  {
    title: "CMS Integration",
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v3.75m-18 0A2.25 2.25 0 005.25 12h13.5A2.25 2.25 0 0021 9.75" />
      </svg>
    ),
    items: [
      "100% editorial control over blogs, services, case studies, & media",
      "Modern headless CMS setups: Sanity, Contentful, or Strapi",
      "Traditional CMS platforms configured cleanly (WordPress integrations)",
      "Dedicated training sessions included to make your team self-sufficient",
    ],
  },
  {
    title: "Third-Party Integrations",
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622a4.5 4.5 0 01-1.242-7.244l4.5-4.5a4.5 4.5 0 016.364 6.364l-1.757 1.757" />
      </svg>
    ),
    items: [
      "CRM systems fully connected: HubSpot, Salesforce, Zoho, etc.",
      "Analytics integrations: Google Analytics 4, Mixpanel, MS Clarity",
      "Marketing pipelines: Mailchimp, Listmonk, Brevo, or custom SMTP",
      "Booking engines, calendar setups, live support chat, and custom APIs",
    ],
  },
  {
    title: "E-Commerce Systems",
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
    items: [
      "Shopify theme building, collection architectures, checkout tuning",
      "WooCommerce setups: performance-first, custom design components",
      "Fully bespoke headless checkouts for complex business models",
      "Inventory tracking, account areas, shipping/fulfillment integrations",
    ],
  },
  {
    title: "Web Applications",
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m-11.142 0l5.571 3 5.571-3m-11.142 4.5L2.25 16.5l9.75 5.25 9.75-5.25-4.179-2.25" />
      </svg>
    ),
    items: [
      "Operational dashboards: charting libraries, analytics engines",
      "Client portals: secure exchanges, messaging, project tracking",
      "Internal tools to automate manually managed spreadsheets",
      "Bespoke SaaS MVPs and workflow automation systems",
    ],
  },
  {
    title: "Mobile Applications",
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-6 18.75h12" />
      </svg>
    ),
    items: [
      "Native iOS and Android development (Swift & Kotlin)",
      "Hybrid mobile development using React Native for unified codebases",
      "App Store & Google Play submission and verification management",
      "Push alerts, crash tracking, in-app telemetry, offline storage",
    ],
  },
  {
    title: "Hosting & Infrastructure",
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    items: [
      "DNS management, custom domain configuration, SSL certification",
      "Highly responsive CDN architectures (Vercel, AWS, Cloudflare)",
      "Auto-backup configurations, database monitoring, alert setups",
      "Go-live orchestration: zero downtime transitions",
    ],
  },
  {
    title: "Post-Launch Support",
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    items: [
      "Two weeks of dedicated hypercare immediately following launch",
      "Bug correction guarantee included for 30 days post-launch",
      "Maintenance options: monthly core updates, patches, optimizations",
      "Monthly reports: Core Web Vitals, uptime statistics, page performance",
    ],
  },
];

const timelineSteps = [
  {
    number: "01",
    caption: "Week 1",
    title: "Discovery & Architecture",
    description:
      "We spend the first week understanding your business, your audience, and your commercial objectives in detail. We design the information architecture, define the technology stack, and produce wireframes for every key page. Nothing moves to design until architecture is reviewed and approved.",
  },
  {
    number: "02",
    caption: "Week 2",
    title: "Design",
    description:
      "Full design produced in Figma. Desktop and mobile viewports for every template. Brand design system documented. Interactive prototype for stakeholder reviews and feedback. Revisions completed within this phase.",
  },
  {
    number: "03",
    caption: "Week 3 (Sites) / 3–6 (Apps)",
    title: "Development & Integration",
    description:
      "Front-end and back-end development. CMS integration. Third-party integrations (CRM, payment processors). Internal testing against Core Web Vitals and SEO specifications. Cross-browser and cross-device testing.",
  },
  {
    number: "04",
    caption: "Final Week",
    title: "QA, Content & Launch",
    description:
      "Content population by our team or yours. Final QA verification pass. Hosting configuration, DNS pointing, and live launch. Editorial team training. Post-launch hypercare period begins.",
  },
];

const technologyStack = [
  {
    category: "Front-End",
    techs: ["Next.js", "React", "Vue.js", "Astro", "Vanilla HTML/CSS/JS"],
  },
  {
    category: "Back-End",
    techs: ["Node.js", "Python (FastAPI, Django)", "PHP (Laravel)"],
  },
  {
    category: "CMS (Content Management)",
    techs: ["Sanity", "Contentful", "Strapi", "Headless WordPress"],
  },
  {
    category: "E-Commerce",
    techs: ["Shopify", "WooCommerce", "Bespoke Architectures"],
  },
  {
    category: "Databases",
    techs: ["PostgreSQL", "MySQL", "MongoDB", "Supabase"],
  },
  {
    category: "Hosting & Infra",
    techs: ["AWS", "Vercel", "Netlify", "DigitalOcean"],
  },
  {
    category: "Mobile",
    techs: ["React Native", "Swift (iOS)", "Kotlin (Android)"],
  },
];

const targetAudience = [
  {
    title: "Replacing Underperforming Sites",
    subtitle: "Longevity & Scale",
    description:
      "For companies looking to replace websites that load slowly, cannot be updated in-house, do not convert visitors, or are constrained by rigid theme templates.",
  },
  {
    title: "Launching New Commercial Entities",
    subtitle: "First Impressions Count",
    description:
      "Where first impressions must be made correctly and the website is the primary commercial asset and pipeline driver from day one.",
  },
  {
    title: "Professional Services Firms",
    subtitle: "Credibility & Autonomy",
    description:
      "Law firms, consultancies, financial advisors, and healthcare providers where credibility must be established immediately and content updated without technical dependencies.",
  },
  {
    title: "Internal Tools & Client Portals",
    subtitle: "Exceeding SaaS Limits",
    description:
      "Where legacy spreadsheets and off-the-shelf SaaS subscriptions have reached their limit, requiring custom development to scale operational efficiency.",
  },
  {
    title: "SaaS MVPs",
    subtitle: "Scalable Architecture",
    description:
      "For founders building their MVP where technology choices made at the start will determine how far the product can scale before needing a complete rebuild.",
  },
];

const tbcSeparators = [
  {
    title: "Zero Templates Used",
    description:
      "Every project is designed from a blank Figma canvas to match your brand and market context. A template is a compromise you carry for years.",
  },
  {
    title: "Design Meets Performance",
    description:
      "We do not separate high-end aesthetics from technical speed. A site can look exceptional and load in under two seconds. We treat them as a single brief.",
  },
  {
    title: "100% Editorial Independence",
    description:
      "If your marketing team needs to call a developer to fix a typo, publish a blog, or change a pricing tag, we failed. We build to give you autonomy.",
  },
  {
    title: "Committed Post-Launch Partners",
    description:
      "We do not disappear after launching. Every project includes structured post-launch hypercare and retainer support structured for long-term growth.",
  },
];

const faqs = [
  {
    q: "How long does a website take?",
    a: "A standard corporate or service website takes 2–3 weeks from discovery to go-live. This assumes content is provided by the client on time. Larger sites with complex integrations take 3–5 weeks. Web applications are scoped individually and typically take 4–8 weeks.",
  },
  {
    q: "Do you work with existing brand identities or create new ones?",
    a: "Both. If you have an existing brand identity, we work within it precisely. If you need brand identity work alongside the website, that is scoped as an additional service and can run in parallel.",
  },
  {
    q: "Can you rebuild an existing website without losing SEO rankings?",
    a: "Yes. We conduct a full SEO audit before migration, preserve URL structures where possible, implement redirects for any changed URLs, and verify rankings post-launch. SEO continuity is managed as part of every rebuild.",
  },
  {
    q: "What if we want to make changes after launch?",
    a: "Minor changes in the first 30 days are covered under our post-launch support. For ongoing changes, updates, and iterative development, we offer monthly maintenance and development retainers priced based on volume and complexity.",
  },
  {
    q: "Who provides the content?",
    a: "Content is typically provided by the client. We provide a structured content brief for every page so you know exactly what is needed and in what format. Copywriting services are available as an add-on if required.",
  },
  {
    q: "Will we own the code and the hosting?",
    a: "Yes. You own everything we build. The code, the design assets, the CMS, the hosting environment. There is no dependency on TBC to keep your site running after delivery.",
  },
  {
    q: "Can you integrate with our existing CRM, ERP, or business software?",
    a: "If it has an API, yes. We scope integrations as part of the technical specification at the start of every project.",
  },
];

export default function WebDevelopmentPage() {
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
              <Link href="/" className="hover:text-ink transition-colors">Home</Link>
            </li>
            <li aria-hidden="true" className="text-light-grey select-none">/</li>
            <li>
              <Link href="/services" className="hover:text-ink transition-colors">Services</Link>
            </li>
            <li aria-hidden="true" className="text-light-grey select-none">/</li>
            <li className="text-ink font-bold" aria-current="page">Web Development</li>
          </ol>
        </div>
      </nav>

      {/* ── PAGE HERO ── */}
      <section className="relative bg-ink overflow-hidden min-h-[400px] flex items-center border-b border-light-grey">
        {/* Full-bleed background image band */}
        <div className="absolute inset-0 z-0">
          <Image src="/img/hero-service-web.png" alt="" fill className="object-cover object-center opacity-40 mix-blend-screen" priority aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
        </div>

        <div className="container-tbc py-s6 relative z-10">
          <Reveal>
            <span className="eyebrow text-gold">PRACTICE 03</span>
            <hr className="gold-rule mb-6" />
            <h1 className="font-display font-bold text-[clamp(32px,4.5vw,52px)] text-white leading-[1.1] tracking-[-0.5px] max-w-4xl mb-6 text-balance">
              Website &amp; Application Development
            </h1>
            <p className="text-body text-white/70 leading-relaxed max-w-3xl mb-8 text-pretty">
              Architecturally sound. Conversion-optimised. Built to perform. Custom websites and enterprise web applications designed for commercial results.
            </p>
            <div className="inline-flex flex-wrap items-center gap-3 bg-white/10 backdrop-blur border border-white/20 rounded px-4 py-3 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-gold flex-shrink-0" aria-hidden="true" />
              <span className="font-display font-semibold text-caption text-white uppercase tracking-widest">
                Websites: 2–3 weeks
              </span>
              <span className="text-white/30">|</span>
              <span className="font-display font-semibold text-caption text-white uppercase tracking-widest">
                Applications: 4–8 weeks
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── WHAT THIS IS ── */}
      <section className="bg-white py-s7 border-b border-light-grey">
        <div className="container-tbc">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-4">
                <span className="eyebrow">OVERVIEW</span>
                <h2 className="font-display font-bold text-[clamp(26px,3vw,34px)] text-ink leading-[1.2] mb-6">
                  What This Is
                </h2>
                <hr className="gold-rule" />
              </div>
              <div className="lg:col-span-8 space-y-6">
                <p className="text-body text-mid-grey leading-relaxed text-pretty">
                  Your digital presence is not a brochure. It is a commercial argument — made silently, in under three seconds, before a single word is read.
                </p>
                <p className="text-body text-mid-grey leading-relaxed text-pretty">
                  Most business websites fail that argument. Not because they look bad. Because they were built for aesthetics rather than performance — slow to load, structurally unclear, technically incomplete, and impossible to update without calling a developer.
                </p>
                <p className="text-body text-mid-grey leading-relaxed text-pretty">
                  We build differently. Every site and application we deliver is architecturally deliberate, conversion-optimised from the first wireframe, technically complete on delivery, and designed to perform commercially for years — not months.
                </p>
                <div className="bg-ivory border-l-4 border-gold p-6 rounded-r mt-8">
                  <p className="font-sans text-[16px] text-ink leading-relaxed font-medium">
                    Architecture decisions made at build time define your ceiling. We make them with that in mind.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── THE PROBLEM IT SOLVES ── */}
      <section className="bg-ivory py-s7 border-b border-light-grey">
        <div className="container-tbc">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 flex flex-col justify-between">
              <Reveal>
                <div>
                  <span className="eyebrow">THE FRICTION</span>
                  <h2 className="font-display font-bold text-[clamp(26px,3vw,34px)] text-ink leading-[1.2] mb-6">
                    The Problem It Solves
                  </h2>
                  <hr className="gold-rule mb-8" />
                </div>
                <div className="bg-white border border-light-grey rounded p-8 shadow-card mb-8 lg:mb-0">
                  <p className="font-display font-bold text-[20px] text-ink leading-snug mb-3">
                    A Website &amp; Application Development build eliminates all four problems simultaneously.
                  </p>
                  <div className="w-12 h-1 bg-gold mt-4"></div>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {problems.map((prob, i) => (
                <Reveal key={prob.title} delay={i * 0.10}>
                  <div className="bg-white border border-light-grey rounded p-6 shadow-card hover:shadow-card-hover transition-all duration-300 h-full">
                    <span className="font-display font-bold text-[13px] text-gold tracking-widest mb-3 block">
                      0{i + 1}
                    </span>
                    <h3 className="font-display font-bold text-[18px] text-ink leading-snug mb-3">
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
          <div className="text-center max-w-2xl mx-auto mb-s6">
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
              <Reveal key={feat.title} delay={i * 0.06}>
                <article className="bg-ivory border border-light-grey rounded p-8 shadow-card hover:shadow-card-hover transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2 bg-white rounded border border-light-grey shadow-sm">
                      {feat.icon}
                    </div>
                    <h3 className="font-display font-bold text-[18px] text-ink leading-snug">
                      {feat.title}
                    </h3>
                  </div>
                  <ul className="space-y-3 flex-1">
                    {feat.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-[8px] flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gold" aria-hidden="true" />
                        <span className="text-body text-mid-grey text-pretty">{item}</span>
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
          <ProcessTimeline steps={timelineSteps} />
        </div>
      </section>

      {/* ── TECHNOLOGY STACK ── */}
      <section className="bg-white py-s7 border-b border-light-grey">
        <div className="container-tbc">
          <div className="text-center max-w-2xl mx-auto mb-s6">
            <Reveal>
              <span className="eyebrow">TECHNOLOGY STACK</span>
              <h2 className="font-display font-bold text-[clamp(28px,3vw,36px)] text-ink leading-[1.2] mb-6">
                Technology We Work With
              </h2>
              <hr className="gold-rule gold-rule--center" />
            </Reveal>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {technologyStack.map((stack, i) => (
              <Reveal key={stack.category} delay={i * 0.06}>
                <div className="bg-ivory border border-light-grey rounded p-6 shadow-sm hover:shadow-card transition-shadow duration-300 h-full">
                  <h3 className="font-display font-bold text-[14px] text-gold uppercase tracking-widest mb-4">
                    {stack.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {stack.techs.map((tech) => (
                      <span key={tech} className="bg-white border border-light-grey text-ink font-sans text-[13px] font-medium rounded px-3 py-1.5">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT SEPARATES A TBC BUILD ── */}
      <section className="bg-ink text-white py-s7 border-b border-light-grey">
        <div className="container-tbc">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <Reveal>
                <span className="eyebrow text-gold">THE DIFFERENCE</span>
                <h2 className="font-display font-bold text-[clamp(28px,3.5vw,38px)] text-white leading-[1.15] mb-6">
                  What Separates a TBC Build
                </h2>
                <hr className="gold-rule mb-8" />
              </Reveal>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {tbcSeparators.map((sep, i) => (
                <Reveal key={sep.title} delay={i * 0.06}>
                  <div className="bg-white/5 border border-white/10 rounded p-6 hover:bg-white/10 transition-colors duration-300 h-full">
                    <div className="flex items-center gap-3 mb-4 text-gold">
                      <h3 className="font-display font-bold text-[18px] tracking-wide text-white leading-snug">
                        {sep.title}
                      </h3>
                    </div>
                    <p className="text-body text-white/60">
                      {sep.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO THIS IS FOR ── */}
      <section className="bg-ivory py-s7 border-b border-light-grey">
        <div className="container-tbc">
          <div className="text-center max-w-2xl mx-auto mb-s6">
            <Reveal>
              <span className="eyebrow">TARGET AUDIENCE</span>
              <h2 className="font-display font-bold text-[clamp(28px,3vw,36px)] text-ink leading-[1.2] mb-6">
                Who This Is For
              </h2>
              <hr className="gold-rule gold-rule--center" />
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {targetAudience.map((audience, i) => (
              <Reveal key={audience.title} delay={i * 0.10}>
                <article className="bg-white border border-light-grey rounded p-8 shadow-card hover:shadow-card-hover transition-shadow duration-300 h-full">
                  <span className="font-display font-bold text-[11px] text-gold tracking-widest uppercase block mb-2">
                    {audience.subtitle}
                  </span>
                  <h3 className="font-display font-bold text-[20px] text-ink leading-snug mb-4">
                    {audience.title}
                  </h3>
                  <hr className="gold-rule mb-5" />
                  <p className="text-body text-mid-grey">
                    {audience.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FREQUENTLY ASKED QUESTIONS ── */}
      <section className="bg-white py-s7 border-b border-light-grey">
        <div className="container-tbc">
          <div className="text-center max-w-2xl mx-auto mb-s6">
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
              <Reveal key={i} delay={i * 0.06}>
                <details className="group border border-light-grey rounded bg-ivory/50 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-display font-bold text-ink text-[17px] hover:bg-ivory select-none rounded transition-colors">
                    <span>{faq.q}</span>
                    <span className="text-gold group-open:rotate-180 transition-transform duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <div className="p-6 pt-0 font-sans text-[15px] text-mid-grey leading-relaxed bg-ivory/50 rounded-b">
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

      <SectionInk className="text-center" aria-labelledby="web-cta-heading">
        <div className="container-tbc">
          <Reveal>
            <h2 id="web-cta-heading" className="font-display font-bold text-[clamp(26px,3.5vw,40px)] text-white leading-[1.2] max-w-3xl mx-auto mb-6">
              Ready to build your competitive digital presence?
            </h2>
            <div className="max-w-2xl mx-auto text-white/70 text-body space-y-4 mb-10 text-pretty">
              <p>
                Website and application projects are scoped individually. Every business has different requirements, and we do not believe in fixed-price packages that force your needs into a predetermined box.
              </p>
              <p>
                The process begins with a consultation — typically 45 minutes. We understand your objectives, your current situation, and your constraints. A detailed proposal covering scope, timeline, technology, and investment is delivered within 48 hours.
              </p>
              <p className="font-medium text-gold">
                There is no obligation after the consultation. We will tell you clearly what is required to achieve what you are trying to achieve — and what it will cost.
              </p>
            </div>
            <Link href="/book-consultation" className="btn-gold px-10 py-4.5 text-[16px]">
              Request a Consultation →
            </Link>
          </Reveal>
        </div>
      </SectionInk>
    </>
  );
}

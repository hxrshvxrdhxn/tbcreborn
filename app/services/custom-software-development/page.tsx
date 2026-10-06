
import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionInk from "@/components/SectionInk";
import CallProcess from "@/components/CallProcess";

export const metadata: Metadata = {
  title: { absolute: "Custom Software Development Company in Noida | Turbo Bytes Consulting" },
  description: "Custom business software built around how your company works: workflows, approvals, portals and integrations. Fixed-phase delivery from Greater Noida.",
  alternates: { canonical: "/services/custom-software-development" },
  openGraph: {
    title: { absolute: "Custom Software Development Company in Noida | Turbo Bytes Consulting" },
    description: "Custom business software built around how your company works: workflows, approvals, portals and integrations. Fixed-phase delivery from Greater Noida.",
    url: "https://turbobytesconsulting.com/services/custom-software-development",
  },
  twitter: {
    card: "summary_large_image" as const,
    title: { absolute: "Custom Software Development Company in Noida | Turbo Bytes Consulting" },
    description: "Custom business software built around how your company works: workflows, approvals, portals and integrations. Fixed-phase delivery from Greater Noida.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Custom software built around how your business actually works",
  provider: {
    "@id": "https://turbobytesconsulting.com/#organization",
  },
  url: "https://turbobytesconsulting.com/services/custom-software-development",
  description: "Custom business software built around how your company works: workflows, approvals, portals and integrations. Fixed-phase delivery from Greater Noida.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does custom software cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most focused internal tools fall between ₹5 lakh and ₹12 lakh, and department systems between ₹12 lakh and ₹30 lakh. Discovery produces a fixed price for each phase. Read our guide: custom software costs in India."
      }
    },
    {
      "@type": "Question",
      name: "How long does it take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A focused first phase usually goes live in 6 to 12 weeks. Larger systems are delivered in phases so value arrives early."
      }
    },
    {
      "@type": "Question",
      name: "Do we own the code?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Source code and intellectual property transfer to you, and the repository sits in your account from day one."
      }
    },
    {
      "@type": "Question",
      name: "Can it connect to Tally and our existing tools?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Integration with accounting, CRM, payment and messaging systems is part of most projects."
      }
    },
    {
      "@type": "Question",
      name: "What happens after launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer support agreements covering fixes, security updates and small improvements, or we hand over to your own team with documentation."
      }
    }
  ]
};

export default function ServicePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── BREADCRUMB ── */}
      <nav aria-label="Breadcrumb" className="bg-ivory border-b border-light-grey">
        <div className="container-tbc py-3">
          <ol className="flex items-center gap-2 font-display text-[13px] uppercase tracking-widest text-mid-grey">
            <li><Link href="/" className="hover:text-ink transition-colors">Home</Link></li>
            <li aria-hidden="true" className="text-light-grey select-none">/</li>
            <li><Link href="/services" className="hover:text-ink transition-colors">Services</Link></li>
            <li aria-hidden="true" className="text-light-grey select-none">/</li>
            <li className="text-ink font-bold" aria-current="page">Custom Software</li>
          </ol>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="bg-ink overflow-hidden min-h-[400px] flex items-center border-b border-light-grey">
        <div className="container-tbc py-s6 relative z-10">
          <Reveal>
            <h1 className="font-display font-bold text-[clamp(32px,4.5vw,52px)] text-white leading-[1.1] tracking-[-0.5px] max-w-4xl mb-6 text-balance">
              Custom software built around how your business actually works
            </h1>
            <p className="text-body text-white/70 leading-relaxed max-w-3xl mb-8 text-pretty">
              When spreadsheets, WhatsApp groups and off-the-shelf tools stop keeping up, we design and build the system your team needs, in fixed phases with a clear price for each.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── PROBLEMS ── */}
      <section className="bg-ivory py-s7 border-b border-light-grey">
        <div className="container-tbc">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <Reveal>
                <span className="eyebrow">THE FRICTION</span>
                <h2 className="font-display font-bold text-[clamp(26px,3vw,34px)] text-ink leading-[1.2] mb-6">
                  The Problem It Solves
                </h2>
                <hr className="gold-rule mb-8" />
              </Reveal>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              
                <Reveal delay={0}>
                  <div className="bg-white border border-light-grey rounded p-6 shadow-card hover:shadow-card-hover transition-all duration-300 h-full">
                    <span className="font-display font-bold text-[13px] text-gold tracking-widest mb-3 block">01</span>
                    <h3 className="font-display font-bold text-[18px] text-ink leading-snug mb-3">Work lives in spreadsheets and chats.</h3>
                    <p className="text-body text-mid-grey">Orders, approvals and status updates are scattered across Excel files and WhatsApp threads. Nobody has the full picture, and mistakes surface late.</p>
                  </div>
                </Reveal>
              
                <Reveal delay={0.1}>
                  <div className="bg-white border border-light-grey rounded p-6 shadow-card hover:shadow-card-hover transition-all duration-300 h-full">
                    <span className="font-display font-bold text-[13px] text-gold tracking-widest mb-3 block">02</span>
                    <h3 className="font-display font-bold text-[18px] text-ink leading-snug mb-3">Off-the-shelf tools force workarounds.</h3>
                    <p className="text-body text-mid-grey">Your process is what makes you competitive, but generic software makes your team bend it to fit, then re-key data between systems.</p>
                  </div>
                </Reveal>
              
                <Reveal delay={0.2}>
                  <div className="bg-white border border-light-grey rounded p-6 shadow-card hover:shadow-card-hover transition-all duration-300 h-full">
                    <span className="font-display font-bold text-[13px] text-gold tracking-widest mb-3 block">03</span>
                    <h3 className="font-display font-bold text-[18px] text-ink leading-snug mb-3">Licence costs keep climbing.</h3>
                    <p className="text-body text-mid-grey">Per-user subscriptions across several tools add up every year, and you still do not own the system or the data model.</p>
                  </div>
                </Reveal>
              
                <Reveal delay={0.30000000000000004}>
                  <div className="bg-white border border-light-grey rounded p-6 shadow-card hover:shadow-card-hover transition-all duration-300 h-full">
                    <span className="font-display font-bold text-[13px] text-gold tracking-widest mb-3 block">04</span>
                    <h3 className="font-display font-bold text-[18px] text-ink leading-snug mb-3">The founder is the integration layer.</h3>
                    <p className="text-body text-mid-grey">Decisions wait for one person because the information needed to make them lives nowhere else.</p>
                  </div>
                </Reveal>
              
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
                What we build
              </h2>
              <hr className="gold-rule gold-rule--center" />
            </Reveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
              <Reveal delay={0}>
                <article className="bg-ivory border border-light-grey rounded p-8 shadow-card hover:shadow-card-hover transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-5">
                    <h3 className="font-display font-bold text-[18px] text-ink leading-snug">Workflow systems</h3>
                  </div>
                  <ul className="space-y-3 flex-1">
                    
                      <li className="flex items-start gap-3">
                        <span className="mt-[8px] flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gold" aria-hidden="true" />
                        <span className="text-body text-mid-grey text-pretty" dangerouslySetInnerHTML={{ __html: "Purchase, sales, service and approval workflows with roles, limits and audit trails." }} />
                      </li>
                    
                  </ul>
                </article>
              </Reveal>
            
              <Reveal delay={0.06}>
                <article className="bg-ivory border border-light-grey rounded p-8 shadow-card hover:shadow-card-hover transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-5">
                    <h3 className="font-display font-bold text-[18px] text-ink leading-snug">Internal tools</h3>
                  </div>
                  <ul className="space-y-3 flex-1">
                    
                      <li className="flex items-start gap-3">
                        <span className="mt-[8px] flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gold" aria-hidden="true" />
                        <span className="text-body text-mid-grey text-pretty" dangerouslySetInnerHTML={{ __html: "The admin panels, trackers and calculators your team uses every day." }} />
                      </li>
                    
                  </ul>
                </article>
              </Reveal>
            
              <Reveal delay={0.12}>
                <article className="bg-ivory border border-light-grey rounded p-8 shadow-card hover:shadow-card-hover transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-5">
                    <h3 className="font-display font-bold text-[18px] text-ink leading-snug">Client and vendor portals</h3>
                  </div>
                  <ul className="space-y-3 flex-1">
                    
                      <li className="flex items-start gap-3">
                        <span className="mt-[8px] flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gold" aria-hidden="true" />
                        <span className="text-body text-mid-grey text-pretty" dangerouslySetInnerHTML={{ __html: "Self-service access to orders, documents, tickets and invoices." }} />
                      </li>
                    
                  </ul>
                </article>
              </Reveal>
            
              <Reveal delay={0.18}>
                <article className="bg-ivory border border-light-grey rounded p-8 shadow-card hover:shadow-card-hover transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-5">
                    <h3 className="font-display font-bold text-[18px] text-ink leading-snug">Dashboards and reporting</h3>
                  </div>
                  <ul className="space-y-3 flex-1">
                    
                      <li className="flex items-start gap-3">
                        <span className="mt-[8px] flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gold" aria-hidden="true" />
                        <span className="text-body text-mid-grey text-pretty" dangerouslySetInnerHTML={{ __html: "Live numbers from every system in one place, for leadership and teams." }} />
                      </li>
                    
                  </ul>
                </article>
              </Reveal>
            
              <Reveal delay={0.24}>
                <article className="bg-ivory border border-light-grey rounded p-8 shadow-card hover:shadow-card-hover transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-5">
                    <h3 className="font-display font-bold text-[18px] text-ink leading-snug">Integrations</h3>
                  </div>
                  <ul className="space-y-3 flex-1">
                    
                      <li className="flex items-start gap-3">
                        <span className="mt-[8px] flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gold" aria-hidden="true" />
                        <span className="text-body text-mid-grey text-pretty" dangerouslySetInnerHTML={{ __html: "Tally, Zoho, HubSpot, Razorpay, WhatsApp Business, email, and your existing databases." }} />
                      </li>
                    
                  </ul>
                </article>
              </Reveal>
            
              <Reveal delay={0.3}>
                <article className="bg-ivory border border-light-grey rounded p-8 shadow-card hover:shadow-card-hover transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-5">
                    <h3 className="font-display font-bold text-[18px] text-ink leading-snug">Modernisation</h3>
                  </div>
                  <ul className="space-y-3 flex-1">
                    
                      <li className="flex items-start gap-3">
                        <span className="mt-[8px] flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gold" aria-hidden="true" />
                        <span className="text-body text-mid-grey text-pretty" dangerouslySetInnerHTML={{ __html: "Replacing or wrapping ageing desktop software without stopping the business." }} />
                      </li>
                    
                  </ul>
                </article>
              </Reveal>
            
          </div>
        </div>
      </section>

      
      {/* ── HOW IT WORKS ── */}
      <section className="bg-ivory py-s7 border-b border-light-grey">
        <div className="container-tbc">
          <div className="text-center max-w-2xl mx-auto mb-s6">
            <Reveal>
              <span className="eyebrow">PROCESS</span>
              <h2 className="font-display font-bold text-[clamp(28px,3vw,36px)] text-ink leading-[1.2] mb-6">
                How We Work
              </h2>
              <hr className="gold-rule gold-rule--center" />
            </Reveal>
          </div>
          <div className="max-w-4xl mx-auto">
            
              <Reveal delay={0}>
                <div className="flex gap-6 mb-8">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-ink text-gold flex items-center justify-center font-display font-bold text-[14px]">
                      01
                    </div>
                    <div className="flex-1 w-px bg-light-grey my-2"></div>
                  </div>
                  <div className="pb-8">
                    <h3 className="font-display font-bold text-[20px] text-ink mb-2">Discovery (1 to 3 weeks)</h3>
                    <p className="font-sans text-[16px] text-mid-grey">We map your workflows, users and systems and agree what the first phase must deliver.</p>
                  </div>
                </div>
              </Reveal>
            
              <Reveal delay={0.1}>
                <div className="flex gap-6 mb-8">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-ink text-gold flex items-center justify-center font-display font-bold text-[14px]">
                      02
                    </div>
                    <div className="flex-1 w-px bg-light-grey my-2"></div>
                  </div>
                  <div className="pb-8">
                    <h3 className="font-display font-bold text-[20px] text-ink mb-2">Specification and designs</h3>
                    <p className="font-sans text-[16px] text-mid-grey">You see every screen and approve the scope before a line of code is written. The phase price is fixed here.</p>
                  </div>
                </div>
              </Reveal>
            
              <Reveal delay={0.2}>
                <div className="flex gap-6 mb-8">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-ink text-gold flex items-center justify-center font-display font-bold text-[14px]">
                      03
                    </div>
                    <div className="flex-1 w-px bg-light-grey my-2"></div>
                  </div>
                  <div className="pb-8">
                    <h3 className="font-display font-bold text-[20px] text-ink mb-2">Build in two-week cycles</h3>
                    <p className="font-sans text-[16px] text-mid-grey">Working software every fortnight, reviewed with the person who will use it.</p>
                  </div>
                </div>
              </Reveal>
            
              <Reveal delay={0.30000000000000004}>
                <div className="flex gap-6 mb-8">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-ink text-gold flex items-center justify-center font-display font-bold text-[14px]">
                      04
                    </div>
                    <div className="flex-1 w-px bg-light-grey my-2"></div>
                  </div>
                  <div className="pb-8">
                    <h3 className="font-display font-bold text-[20px] text-ink mb-2">Testing and launch</h3>
                    <p className="font-sans text-[16px] text-mid-grey">Acceptance testing with your team, data migration, training and a controlled go-live.</p>
                  </div>
                </div>
              </Reveal>
            
              <Reveal delay={0.4}>
                <div className="flex gap-6 mb-8">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-ink text-gold flex items-center justify-center font-display font-bold text-[14px]">
                      05
                    </div>
                    
                  </div>
                  <div className="pb-8">
                    <h3 className="font-display font-bold text-[20px] text-ink mb-2">Support and next phase</h3>
                    <p className="font-sans text-[16px] text-mid-grey">Maintenance, improvements, and the next workflow when you are ready.</p>
                  </div>
                </div>
              </Reveal>
            
          </div>
        </div>
      </section>
    
      
      <section className="bg-white py-s7 border-b border-light-grey">
        <div className="container-tbc">
          <div className="max-w-3xl mx-auto font-sans text-[17px] text-ink leading-relaxed space-y-4 text-center">
            <Reveal>
              <p>What you own: the source code, in a repository in your name; the data; and full documentation.</p>
            </Reveal>
          </div>
        </div>
      </section>
    
      
      {/* ── PROOF ── */}
      <section className="bg-ivory py-s7 border-b border-light-grey">
        <div className="container-tbc">
          <div className="text-center max-w-2xl mx-auto mb-s6">
            <Reveal>
              <span className="eyebrow">PROOF</span>
              <h2 className="font-display font-bold text-[clamp(28px,3vw,36px)] text-ink leading-[1.2] mb-6">
                Client Outcomes
              </h2>
              <hr className="gold-rule gold-rule--center" />
              
            </Reveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
              <Reveal>
                <Link href="/work" className="block bg-white border border-light-grey rounded p-8 shadow-card hover:shadow-card-hover transition-all h-full">
                  <h3 className="font-display font-bold text-[20px] text-ink leading-snug mb-3">Web Application Development</h3>
                  <p className="font-sans text-[15px] font-medium text-ink/80 border-l-2 border-gold pl-3">Logistics company. Gurugram. 120 employees.</p>
                </Link>
              </Reveal>
              
              <Reveal>
                <Link href="/work" className="block bg-white border border-light-grey rounded p-8 shadow-card hover:shadow-card-hover transition-all h-full">
                  <h3 className="font-display font-bold text-[20px] text-ink leading-snug mb-3">Business Diagnostic & Operational Restructure</h3>
                  <p className="font-sans text-[15px] font-medium text-ink/80 border-l-2 border-gold pl-3">B2B services firm. Delhi NCR. 37 employees.</p>
                </Link>
              </Reveal>
              
          </div>
        </div>
      </section>
    

      {/* ── FAQ ── */}
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
            
              <Reveal delay={0}>
                <details className="group border border-light-grey rounded bg-ivory/50 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-display font-bold text-ink text-[17px] hover:bg-ivory select-none rounded transition-colors">
                    <span>How much does custom software cost?</span>
                    <span className="text-gold group-open:rotate-180 transition-transform duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </span>
                  </summary>
                  <div className="p-6 pt-0 font-sans text-[15px] text-mid-grey leading-relaxed bg-ivory/50 rounded-b" dangerouslySetInnerHTML={{ __html: "Most focused internal tools fall between ₹5 lakh and ₹12 lakh, and department systems between ₹12 lakh and ₹30 lakh. Discovery produces a fixed price for each phase. Read our guide: <a href=\"/blog/how-much-does-custom-software-development-cost-in-india-in-2026\" className=\"text-gold hover:underline\">custom software costs in India</a>, or <a href=\"/software-cost-calculator\" className=\"text-gold hover:underline\">try the cost calculator</a> to get an indicative range." }} />
                </details>
              </Reveal>
            
              <Reveal delay={0.06}>
                <details className="group border border-light-grey rounded bg-ivory/50 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-display font-bold text-ink text-[17px] hover:bg-ivory select-none rounded transition-colors">
                    <span>How long does it take?</span>
                    <span className="text-gold group-open:rotate-180 transition-transform duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </span>
                  </summary>
                  <div className="p-6 pt-0 font-sans text-[15px] text-mid-grey leading-relaxed bg-ivory/50 rounded-b" dangerouslySetInnerHTML={{ __html: "A focused first phase usually goes live in 6 to 12 weeks. Larger systems are delivered in phases so value arrives early." }} />
                </details>
              </Reveal>
            
              <Reveal delay={0.12}>
                <details className="group border border-light-grey rounded bg-ivory/50 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-display font-bold text-ink text-[17px] hover:bg-ivory select-none rounded transition-colors">
                    <span>Do we own the code?</span>
                    <span className="text-gold group-open:rotate-180 transition-transform duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </span>
                  </summary>
                  <div className="p-6 pt-0 font-sans text-[15px] text-mid-grey leading-relaxed bg-ivory/50 rounded-b" dangerouslySetInnerHTML={{ __html: "Yes. Source code and intellectual property transfer to you, and the repository sits in your account from day one." }} />
                </details>
              </Reveal>
            
              <Reveal delay={0.18}>
                <details className="group border border-light-grey rounded bg-ivory/50 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-display font-bold text-ink text-[17px] hover:bg-ivory select-none rounded transition-colors">
                    <span>Can it connect to Tally and our existing tools?</span>
                    <span className="text-gold group-open:rotate-180 transition-transform duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </span>
                  </summary>
                  <div className="p-6 pt-0 font-sans text-[15px] text-mid-grey leading-relaxed bg-ivory/50 rounded-b" dangerouslySetInnerHTML={{ __html: "Yes. Integration with accounting, CRM, payment and messaging systems is part of most projects." }} />
                </details>
              </Reveal>
            
              <Reveal delay={0.24}>
                <details className="group border border-light-grey rounded bg-ivory/50 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-display font-bold text-ink text-[17px] hover:bg-ivory select-none rounded transition-colors">
                    <span>What happens after launch?</span>
                    <span className="text-gold group-open:rotate-180 transition-transform duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </span>
                  </summary>
                  <div className="p-6 pt-0 font-sans text-[15px] text-mid-grey leading-relaxed bg-ivory/50 rounded-b" dangerouslySetInnerHTML={{ __html: "We offer support agreements covering fixes, security updates and small improvements, or we hand over to your own team with documentation." }} />
                </details>
              </Reveal>
            
          </div>
        </div>
      </section>

      <CallProcess />

      {/* ── CTA ── */}
      <SectionInk className="text-center">
        <div className="container-tbc">
          <Reveal>
            <h2 className="font-display font-bold text-[clamp(26px,3.5vw,40px)] text-white leading-[1.2] max-w-3xl mx-auto mb-6">
              Tell us which process is costing you the most time. We will map it and give you an honest view of scope, timeline and budget.
            </h2>
            <div className="flex items-center justify-center gap-4 flex-wrap mt-10">
              <Link href="/book-consultation" className="btn-gold px-8 py-4 text-[16px]">
                Book a 30-minute scoping call
              </Link>
              <a href="https://wa.me/919354784377" target="_blank" rel="noopener noreferrer" className="btn-gold bg-transparent border border-gold text-gold hover:bg-gold/10 px-8 py-4 text-[16px]">
                WhatsApp Us
              </a>
            </div>
          </Reveal>
        </div>
      </SectionInk>
    </>
  );
}

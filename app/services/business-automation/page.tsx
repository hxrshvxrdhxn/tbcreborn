
import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionInk from "@/components/SectionInk";
import CallProcess from "@/components/CallProcess";

export const metadata: Metadata = {
  title: { absolute: "Business Process Automation, CRM & ERP Development | TBC" },
  description: "Custom CRM, ERP modules, approval workflows, dashboards and integrations with Tally and WhatsApp for growing Indian businesses.",
  alternates: { canonical: "/services/business-automation" },
  openGraph: {
    title: { absolute: "Business Process Automation, CRM & ERP Development | TBC" },
    description: "Custom CRM, ERP modules, approval workflows, dashboards and integrations with Tally and WhatsApp for growing Indian businesses.",
    url: "https://turbobytesconsulting.com/services/business-automation",
  },
  twitter: {
    card: "summary_large_image" as const,
    title: { absolute: "Business Process Automation, CRM & ERP Development | TBC" },
    description: "Custom CRM, ERP modules, approval workflows, dashboards and integrations with Tally and WhatsApp for growing Indian businesses.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Automate the work that slows your business down",
  provider: {
    "@type": "Organization",
    name: "Turbo Bytes Consulting",
    url: "https://turbobytesconsulting.com",
  },
  url: "https://turbobytesconsulting.com/services/business-automation",
  description: "Custom CRM, ERP modules, approval workflows, dashboards and integrations with Tally and WhatsApp for growing Indian businesses.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Should we use Zoho or HubSpot instead?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If your process is standard, yes, and we will say so. We build custom when your process does not fit or licence costs outgrow a one-time build. Read Custom CRM vs Zoho vs HubSpot."
      }
    },
    {
      "@type": "Question",
      name: "Can you integrate with Tally?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We sync customers, invoices and payment status between Tally and your operational systems."
      }
    },
    {
      "@type": "Question",
      name: "Can you extend our existing software instead of replacing it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Often that is the best route. We build the missing piece and connect it by API."
      }
    },
    {
      "@type": "Question",
      name: "How do you avoid disrupting operations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "New systems run alongside the old process until your team signs off."
      }
    },
    {
      "@type": "Question",
      name: "What does automation cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Single workflows start small; multi-department systems are phased. Discovery gives a fixed price per phase."
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
            <li className="text-ink font-bold" aria-current="page">Business Automation</li>
          </ol>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="bg-forest overflow-hidden min-h-[400px] flex items-center border-b border-light-grey">
        <div className="container-tbc py-s6 relative z-10">
          <Reveal>
            <h1 className="font-display font-bold text-[clamp(32px,4.5vw,52px)] text-white leading-[1.1] tracking-[-0.5px] max-w-4xl mb-6 text-balance">
              Automate the work that slows your business down
            </h1>
            <p className="text-body text-white/70 leading-relaxed max-w-3xl mb-8 text-pretty">
              We replace manual steps, re-keying and chasing with connected systems: custom CRM and ERP modules, approvals, dashboards and integrations with the tools you already use.
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
                    <h3 className="font-display font-bold text-[18px] text-ink leading-snug mb-3">Data typed twice.</h3>
                    <p className="text-body text-mid-grey">Sales enters an order, accounts enters it again in Tally, operations copies it into a spreadsheet.</p>
                  </div>
                </Reveal>
              
                <Reveal delay={0.1}>
                  <div className="bg-white border border-light-grey rounded p-6 shadow-card hover:shadow-card-hover transition-all duration-300 h-full">
                    <span className="font-display font-bold text-[13px] text-gold tracking-widest mb-3 block">02</span>
                    <h3 className="font-display font-bold text-[18px] text-ink leading-snug mb-3">Approvals wait in inboxes.</h3>
                    <p className="text-body text-mid-grey">Purchases, discounts and leave requests stall until someone chases.</p>
                  </div>
                </Reveal>
              
                <Reveal delay={0.2}>
                  <div className="bg-white border border-light-grey rounded p-6 shadow-card hover:shadow-card-hover transition-all duration-300 h-full">
                    <span className="font-display font-bold text-[13px] text-gold tracking-widest mb-3 block">03</span>
                    <h3 className="font-display font-bold text-[18px] text-ink leading-snug mb-3">Reports take days.</h3>
                    <p className="text-body text-mid-grey">Month-end numbers are assembled by hand from several sources.</p>
                  </div>
                </Reveal>
              
                <Reveal delay={0.30000000000000004}>
                  <div className="bg-white border border-light-grey rounded p-6 shadow-card hover:shadow-card-hover transition-all duration-300 h-full">
                    <span className="font-display font-bold text-[13px] text-gold tracking-widest mb-3 block">04</span>
                    <h3 className="font-display font-bold text-[18px] text-ink leading-snug mb-3">Packaged software almost fits.</h3>
                    <p className="text-body text-mid-grey">Standard CRM and ERP products cover most of the need, and your team works around the rest.</p>
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
                    <h3 className="font-display font-bold text-[18px] text-ink leading-snug">Custom CRM</h3>
                  </div>
                  <ul className="space-y-3 flex-1">
                    
                      <li className="flex items-start gap-3">
                        <span className="mt-[8px] flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gold" aria-hidden="true" />
                        <span className="text-body text-mid-grey text-pretty" dangerouslySetInnerHTML={{ __html: "Leads, accounts, quotations, follow-ups and dealer networks, built around how you sell." }} />
                      </li>
                    
                  </ul>
                </article>
              </Reveal>
            
              <Reveal delay={0.06}>
                <article className="bg-ivory border border-light-grey rounded p-8 shadow-card hover:shadow-card-hover transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-5">
                    <h3 className="font-display font-bold text-[18px] text-ink leading-snug">ERP modules</h3>
                  </div>
                  <ul className="space-y-3 flex-1">
                    
                      <li className="flex items-start gap-3">
                        <span className="mt-[8px] flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gold" aria-hidden="true" />
                        <span className="text-body text-mid-grey text-pretty" dangerouslySetInnerHTML={{ __html: "Purchase, inventory, production planning, dispatch and service." }} />
                      </li>
                    
                  </ul>
                </article>
              </Reveal>
            
              <Reveal delay={0.12}>
                <article className="bg-ivory border border-light-grey rounded p-8 shadow-card hover:shadow-card-hover transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-5">
                    <h3 className="font-display font-bold text-[18px] text-ink leading-snug">Approval workflows</h3>
                  </div>
                  <ul className="space-y-3 flex-1">
                    
                      <li className="flex items-start gap-3">
                        <span className="mt-[8px] flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gold" aria-hidden="true" />
                        <span className="text-body text-mid-grey text-pretty" dangerouslySetInnerHTML={{ __html: "Purchase, discount, expense and leave approvals with limits and audit trails." }} />
                      </li>
                    
                  </ul>
                </article>
              </Reveal>
            
              <Reveal delay={0.18}>
                <article className="bg-ivory border border-light-grey rounded p-8 shadow-card hover:shadow-card-hover transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-5">
                    <h3 className="font-display font-bold text-[18px] text-ink leading-snug">Dashboards</h3>
                  </div>
                  <ul className="space-y-3 flex-1">
                    
                      <li className="flex items-start gap-3">
                        <span className="mt-[8px] flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gold" aria-hidden="true" />
                        <span className="text-body text-mid-grey text-pretty" dangerouslySetInnerHTML={{ __html: "Live leadership reporting from every system." }} />
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
                        <span className="text-body text-mid-grey text-pretty" dangerouslySetInnerHTML={{ __html: "Tally, Zoho, HubSpot, Razorpay, GST invoicing and WhatsApp Business API." }} />
                      </li>
                    
                  </ul>
                </article>
              </Reveal>
            
              <Reveal delay={0.3}>
                <article className="bg-ivory border border-light-grey rounded p-8 shadow-card hover:shadow-card-hover transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-5">
                    <h3 className="font-display font-bold text-[18px] text-ink leading-snug">Workflow automation</h3>
                  </div>
                  <ul className="space-y-3 flex-1">
                    
                      <li className="flex items-start gap-3">
                        <span className="mt-[8px] flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gold" aria-hidden="true" />
                        <span className="text-body text-mid-grey text-pretty" dangerouslySetInnerHTML={{ __html: "N8n, Make or custom code, whichever is simplest to maintain." }} />
                      </li>
                    
                  </ul>
                </article>
              </Reveal>
            
          </div>
        </div>
      </section>

      
      
      <section className="bg-white py-s7 border-b border-light-grey">
        <div className="container-tbc">
          <div className="max-w-3xl mx-auto font-sans text-[17px] text-ink leading-relaxed space-y-4 text-center">
            <Reveal>
              <p>How we work: Process review first (we remove steps before automating them); scope and fixed phase price; build; parallel run with your old process; switch-over.</p>
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
                  <h3 className="font-display font-bold text-[20px] text-ink leading-snug mb-3">Business Diagnostic & Operational Restructure</h3>
                  <p className="font-sans text-[15px] font-medium text-ink/80 border-l-2 border-gold pl-3">B2B services firm. Delhi NCR. 37 employees.</p>
                </Link>
              </Reveal>
              
              <Reveal>
                <Link href="/work" className="block bg-white border border-light-grey rounded p-8 shadow-card hover:shadow-card-hover transition-all h-full">
                  <h3 className="font-display font-bold text-[20px] text-ink leading-snug mb-3">Web Application Development</h3>
                  <p className="font-sans text-[15px] font-medium text-ink/80 border-l-2 border-gold pl-3">Logistics company. Gurugram. 120 employees.</p>
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
                    <span>Should we use Zoho or HubSpot instead?</span>
                    <span className="text-gold group-open:rotate-180 transition-transform duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </span>
                  </summary>
                  <div className="p-6 pt-0 font-sans text-[15px] text-mid-grey leading-relaxed bg-ivory/50 rounded-b" dangerouslySetInnerHTML={{ __html: "If your process is standard, yes, and we will say so. We build custom when your process does not fit or licence costs outgrow a one-time build. Read <Link href=\"/blog/custom-crm-vs-zoho-vs-hubspot-for-indian-smes\" className=\"text-gold hover:underline\">Custom CRM vs Zoho vs HubSpot</Link>." }} />
                </details>
              </Reveal>
            
              <Reveal delay={0.06}>
                <details className="group border border-light-grey rounded bg-ivory/50 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-display font-bold text-ink text-[17px] hover:bg-ivory select-none rounded transition-colors">
                    <span>Can you integrate with Tally?</span>
                    <span className="text-gold group-open:rotate-180 transition-transform duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </span>
                  </summary>
                  <div className="p-6 pt-0 font-sans text-[15px] text-mid-grey leading-relaxed bg-ivory/50 rounded-b" dangerouslySetInnerHTML={{ __html: "Yes. We sync customers, invoices and payment status between Tally and your operational systems." }} />
                </details>
              </Reveal>
            
              <Reveal delay={0.12}>
                <details className="group border border-light-grey rounded bg-ivory/50 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-display font-bold text-ink text-[17px] hover:bg-ivory select-none rounded transition-colors">
                    <span>Can you extend our existing software instead of replacing it?</span>
                    <span className="text-gold group-open:rotate-180 transition-transform duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </span>
                  </summary>
                  <div className="p-6 pt-0 font-sans text-[15px] text-mid-grey leading-relaxed bg-ivory/50 rounded-b" dangerouslySetInnerHTML={{ __html: "Often that is the best route. We build the missing piece and connect it by API." }} />
                </details>
              </Reveal>
            
              <Reveal delay={0.18}>
                <details className="group border border-light-grey rounded bg-ivory/50 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-display font-bold text-ink text-[17px] hover:bg-ivory select-none rounded transition-colors">
                    <span>How do you avoid disrupting operations?</span>
                    <span className="text-gold group-open:rotate-180 transition-transform duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </span>
                  </summary>
                  <div className="p-6 pt-0 font-sans text-[15px] text-mid-grey leading-relaxed bg-ivory/50 rounded-b" dangerouslySetInnerHTML={{ __html: "New systems run alongside the old process until your team signs off." }} />
                </details>
              </Reveal>
            
              <Reveal delay={0.24}>
                <details className="group border border-light-grey rounded bg-ivory/50 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-display font-bold text-ink text-[17px] hover:bg-ivory select-none rounded transition-colors">
                    <span>What does automation cost?</span>
                    <span className="text-gold group-open:rotate-180 transition-transform duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </span>
                  </summary>
                  <div className="p-6 pt-0 font-sans text-[15px] text-mid-grey leading-relaxed bg-ivory/50 rounded-b" dangerouslySetInnerHTML={{ __html: "Single workflows start small; multi-department systems are phased. Discovery gives a fixed price per phase." }} />
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
              Tell us where your team re-types data or waits for approvals. We will show you what can be automated first.
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

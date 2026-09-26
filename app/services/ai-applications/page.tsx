
import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionInk from "@/components/SectionInk";

export const metadata: Metadata = {
  title: { absolute: "AI Application & Chatbot Development in India | Turbo Bytes Consulting" },
  description: "AI chatbots, document processing and assistants trained on your own data. Private deployment options, tested for accuracy before launch.",
  alternates: { canonical: "/services/ai-applications" },
  openGraph: {
    title: { absolute: "AI Application & Chatbot Development in India | Turbo Bytes Consulting" },
    description: "AI chatbots, document processing and assistants trained on your own data. Private deployment options, tested for accuracy before launch.",
    url: "https://turbobytesconsulting.com/services/ai-applications",
  },
  twitter: {
    card: "summary_large_image" as const,
    title: { absolute: "AI Application & Chatbot Development in India | Turbo Bytes Consulting" },
    description: "AI chatbots, document processing and assistants trained on your own data. Private deployment options, tested for accuracy before launch.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI applications that work on your own data",
  provider: {
    "@type": "Organization",
    name: "Turbo Bytes Consulting",
    url: "https://turbobytesconsulting.com",
  },
  url: "https://turbobytesconsulting.com/services/ai-applications",
  description: "AI chatbots, document processing and assistants trained on your own data. Private deployment options, tested for accuracy before launch.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Will the AI make things up?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our systems answer from your documents and are designed to say \"I do not know\" when the answer is not there. We measure this on a test set of real questions before launch."
      }
    },
    {
      "@type": "Question",
      name: "Where does our data go?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your choice: a private cloud account you own, or servers on your premises. We do not use your data to train public models."
      }
    },
    {
      "@type": "Question",
      name: "How long does a pilot take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A focused proof of concept takes about four weeks. A production system typically follows in six to ten weeks."
      }
    },
    {
      "@type": "Question",
      name: "Does it work in Hindi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Assistants can understand and answer in Hindi, English and a mix of both."
      }
    },
    {
      "@type": "Question",
      name: "What does it cost to run?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Running costs depend on usage and hosting. We estimate them during the pilot so there are no surprises."
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
            <li className="text-ink font-bold" aria-current="page">AI Applications</li>
          </ol>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="bg-ink overflow-hidden min-h-[400px] flex items-center border-b border-light-grey">
        <div className="container-tbc py-s6 relative z-10">
          <Reveal>
            <h1 className="font-display font-bold text-[clamp(32px,4.5vw,52px)] text-white leading-[1.1] tracking-[-0.5px] max-w-4xl mb-6 text-balance">
              AI applications that work on your own data
            </h1>
            <p className="text-body text-white/70 leading-relaxed max-w-3xl mb-8 text-pretty">
              Chatbots, document processing and internal assistants built on large language models, connected to your systems and tested for accuracy before anyone relies on them.
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
                    <h3 className="font-display font-bold text-[18px] text-ink leading-snug mb-3">Knowledge is locked in documents and people.</h3>
                    <p className="text-body text-mid-grey">Staff and customers ask questions whose answers already exist somewhere, and wait.</p>
                  </div>
                </Reveal>
              
                <Reveal delay={0.1}>
                  <div className="bg-white border border-light-grey rounded p-6 shadow-card hover:shadow-card-hover transition-all duration-300 h-full">
                    <span className="font-display font-bold text-[13px] text-gold tracking-widest mb-3 block">02</span>
                    <h3 className="font-display font-bold text-[18px] text-ink leading-snug mb-3">Paperwork is still typed by hand.</h3>
                    <p className="text-body text-mid-grey">Invoices, purchase orders and forms are read and re-keyed by staff.</p>
                  </div>
                </Reveal>
              
                <Reveal delay={0.2}>
                  <div className="bg-white border border-light-grey rounded p-6 shadow-card hover:shadow-card-hover transition-all duration-300 h-full">
                    <span className="font-display font-bold text-[13px] text-gold tracking-widest mb-3 block">03</span>
                    <h3 className="font-display font-bold text-[18px] text-ink leading-snug mb-3">Pilots that never reach production.</h3>
                    <p className="text-body text-mid-grey">A demo impresses, then accuracy, security and integration problems stall it.</p>
                  </div>
                </Reveal>
              
                <Reveal delay={0.30000000000000004}>
                  <div className="bg-white border border-light-grey rounded p-6 shadow-card hover:shadow-card-hover transition-all duration-300 h-full">
                    <span className="font-display font-bold text-[13px] text-gold tracking-widest mb-3 block">04</span>
                    <h3 className="font-display font-bold text-[18px] text-ink leading-snug mb-3">Worries about data leaving the company.</h3>
                    <p className="text-body text-mid-grey">Client and financial data cannot simply be pasted into public tools.</p>
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
                    <h3 className="font-display font-bold text-[18px] text-ink leading-snug">Document chatbots</h3>
                  </div>
                  <ul className="space-y-3 flex-1">
                    
                      <li className="flex items-start gap-3">
                        <span className="mt-[8px] flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gold" aria-hidden="true" />
                        <span className="text-body text-mid-grey text-pretty" dangerouslySetInnerHTML={{ __html: "Answers from your policies, manuals and past work, with sources shown." }} />
                      </li>
                    
                  </ul>
                </article>
              </Reveal>
            
              <Reveal delay={0.06}>
                <article className="bg-ivory border border-light-grey rounded p-8 shadow-card hover:shadow-card-hover transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-5">
                    <h3 className="font-display font-bold text-[18px] text-ink leading-snug">Customer assistants</h3>
                  </div>
                  <ul className="space-y-3 flex-1">
                    
                      <li className="flex items-start gap-3">
                        <span className="mt-[8px] flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gold" aria-hidden="true" />
                        <span className="text-body text-mid-grey text-pretty" dangerouslySetInnerHTML={{ __html: "Website and WhatsApp assistants in English and Hindi, with handover to a person." }} />
                      </li>
                    
                  </ul>
                </article>
              </Reveal>
            
              <Reveal delay={0.12}>
                <article className="bg-ivory border border-light-grey rounded p-8 shadow-card hover:shadow-card-hover transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-5">
                    <h3 className="font-display font-bold text-[18px] text-ink leading-snug">Document processing</h3>
                  </div>
                  <ul className="space-y-3 flex-1">
                    
                      <li className="flex items-start gap-3">
                        <span className="mt-[8px] flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gold" aria-hidden="true" />
                        <span className="text-body text-mid-grey text-pretty" dangerouslySetInnerHTML={{ __html: "Reading invoices, purchase orders, contracts and forms into your systems." }} />
                      </li>
                    
                  </ul>
                </article>
              </Reveal>
            
              <Reveal delay={0.18}>
                <article className="bg-ivory border border-light-grey rounded p-8 shadow-card hover:shadow-card-hover transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-5">
                    <h3 className="font-display font-bold text-[18px] text-ink leading-snug">Proposal and quotation assistants</h3>
                  </div>
                  <ul className="space-y-3 flex-1">
                    
                      <li className="flex items-start gap-3">
                        <span className="mt-[8px] flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gold" aria-hidden="true" />
                        <span className="text-body text-mid-grey text-pretty" dangerouslySetInnerHTML={{ __html: "Drafting technical proposals from a verified library of past work." }} />
                      </li>
                    
                  </ul>
                </article>
              </Reveal>
            
              <Reveal delay={0.24}>
                <article className="bg-ivory border border-light-grey rounded p-8 shadow-card hover:shadow-card-hover transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-5">
                    <h3 className="font-display font-bold text-[18px] text-ink leading-snug">Internal copilots</h3>
                  </div>
                  <ul className="space-y-3 flex-1">
                    
                      <li className="flex items-start gap-3">
                        <span className="mt-[8px] flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gold" aria-hidden="true" />
                        <span className="text-body text-mid-grey text-pretty" dangerouslySetInnerHTML={{ __html: "Assistants inside your CRM, ERP or custom software." }} />
                      </li>
                    
                  </ul>
                </article>
              </Reveal>
            
              <Reveal delay={0.3}>
                <article className="bg-ivory border border-light-grey rounded p-8 shadow-card hover:shadow-card-hover transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-5">
                    <h3 className="font-display font-bold text-[18px] text-ink leading-snug">Private deployment</h3>
                  </div>
                  <ul className="space-y-3 flex-1">
                    
                      <li className="flex items-start gap-3">
                        <span className="mt-[8px] flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gold" aria-hidden="true" />
                        <span className="text-body text-mid-grey text-pretty" dangerouslySetInnerHTML={{ __html: "Models in your cloud account or on your own servers. See <Link href=\"/services/custom-llm\" className=\"text-gold hover:underline\">Custom LLM</Link>." }} />
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
              <p>How we work: Use-case selection; data review; four-week proof of concept measured against real questions; production build with guardrails; monitoring and monthly accuracy reviews.</p>
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
              <p className="mt-4 font-sans text-[16px] text-mid-grey"><Link href="/ai-knowledge-portal.html" className="text-gold hover:underline">Try the knowledge portal demo</Link></p>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
              <Reveal>
                <Link href="/work" className="block bg-white border border-light-grey rounded p-8 shadow-card hover:shadow-card-hover transition-all h-full">
                  <h3 className="font-display font-bold text-[20px] text-ink leading-snug mb-3">Custom LLM Deployment</h3>
                  <p className="font-sans text-[15px] font-medium text-ink/80 border-l-2 border-gold pl-3">Professional services firm. Delhi NCR. 80 employees.</p>
                </Link>
              </Reveal>
              
              <Reveal>
                <Link href="/work" className="block bg-white border border-light-grey rounded p-8 shadow-card hover:shadow-card-hover transition-all h-full">
                  <h3 className="font-display font-bold text-[20px] text-ink leading-snug mb-3">Custom LLM — Retail & E-commerce</h3>
                  <p className="font-sans text-[15px] font-medium text-ink/80 border-l-2 border-gold pl-3">Consumer electronics retailer. Pan-India. 600 employees.</p>
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
                    <span>Will the AI make things up?</span>
                    <span className="text-gold group-open:rotate-180 transition-transform duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </span>
                  </summary>
                  <div className="p-6 pt-0 font-sans text-[15px] text-mid-grey leading-relaxed bg-ivory/50 rounded-b" dangerouslySetInnerHTML={{ __html: "Our systems answer from your documents and are designed to say \"I do not know\" when the answer is not there. We measure this on a test set of real questions before launch." }} />
                </details>
              </Reveal>
            
              <Reveal delay={0.06}>
                <details className="group border border-light-grey rounded bg-ivory/50 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-display font-bold text-ink text-[17px] hover:bg-ivory select-none rounded transition-colors">
                    <span>Where does our data go?</span>
                    <span className="text-gold group-open:rotate-180 transition-transform duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </span>
                  </summary>
                  <div className="p-6 pt-0 font-sans text-[15px] text-mid-grey leading-relaxed bg-ivory/50 rounded-b" dangerouslySetInnerHTML={{ __html: "Your choice: a private cloud account you own, or servers on your premises. We do not use your data to train public models." }} />
                </details>
              </Reveal>
            
              <Reveal delay={0.12}>
                <details className="group border border-light-grey rounded bg-ivory/50 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-display font-bold text-ink text-[17px] hover:bg-ivory select-none rounded transition-colors">
                    <span>How long does a pilot take?</span>
                    <span className="text-gold group-open:rotate-180 transition-transform duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </span>
                  </summary>
                  <div className="p-6 pt-0 font-sans text-[15px] text-mid-grey leading-relaxed bg-ivory/50 rounded-b" dangerouslySetInnerHTML={{ __html: "A focused proof of concept takes about four weeks. A production system typically follows in six to ten weeks." }} />
                </details>
              </Reveal>
            
              <Reveal delay={0.18}>
                <details className="group border border-light-grey rounded bg-ivory/50 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-display font-bold text-ink text-[17px] hover:bg-ivory select-none rounded transition-colors">
                    <span>Does it work in Hindi?</span>
                    <span className="text-gold group-open:rotate-180 transition-transform duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </span>
                  </summary>
                  <div className="p-6 pt-0 font-sans text-[15px] text-mid-grey leading-relaxed bg-ivory/50 rounded-b" dangerouslySetInnerHTML={{ __html: "Yes. Assistants can understand and answer in Hindi, English and a mix of both." }} />
                </details>
              </Reveal>
            
              <Reveal delay={0.24}>
                <details className="group border border-light-grey rounded bg-ivory/50 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-display font-bold text-ink text-[17px] hover:bg-ivory select-none rounded transition-colors">
                    <span>What does it cost to run?</span>
                    <span className="text-gold group-open:rotate-180 transition-transform duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </span>
                  </summary>
                  <div className="p-6 pt-0 font-sans text-[15px] text-mid-grey leading-relaxed bg-ivory/50 rounded-b" dangerouslySetInnerHTML={{ __html: "Running costs depend on usage and hosting. We estimate them during the pilot so there are no surprises." }} />
                </details>
              </Reveal>
            
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <SectionInk className="text-center">
        <div className="container-tbc">
          <Reveal>
            <h2 className="font-display font-bold text-[clamp(26px,3.5vw,40px)] text-white leading-[1.2] max-w-3xl mx-auto mb-6">
              Pick one question your team answers every day, or one document they re-type. We will show you what AI can do with it.
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

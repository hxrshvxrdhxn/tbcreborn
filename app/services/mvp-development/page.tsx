
import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionInk from "@/components/SectionInk";
import CallProcess from "@/components/CallProcess";

export const metadata: Metadata = {
  title: { absolute: "MVP Development for Founders in India | Turbo Bytes Consulting" },
  description: "A working first version of your product in 8 to 12 weeks: scoped to what proves the idea, built to grow, with the code owned by you.",
  alternates: { canonical: "/services/mvp-development" },
  openGraph: {
    title: { absolute: "MVP Development for Founders in India | Turbo Bytes Consulting" },
    description: "A working first version of your product in 8 to 12 weeks: scoped to what proves the idea, built to grow, with the code owned by you.",
    url: "https://turbobytesconsulting.com/services/mvp-development",
  },
  twitter: {
    card: "summary_large_image" as const,
    title: { absolute: "MVP Development for Founders in India | Turbo Bytes Consulting" },
    description: "A working first version of your product in 8 to 12 weeks: scoped to what proves the idea, built to grow, with the code owned by you.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Your first working product in 8 to 12 weeks",
  provider: {
    "@type": "Organization",
    name: "Turbo Bytes Consulting",
    url: "https://turbobytesconsulting.com",
  },
  url: "https://turbobytesconsulting.com/services/mvp-development",
  description: "A working first version of your product in 8 to 12 weeks: scoped to what proves the idea, built to grow, with the code owned by you.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does an MVP cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on scope, which is why scoping comes first. Most focused MVPs we build fall within the range of a small internal tool. See custom software costs."
      }
    },
    {
      "@type": "Question",
      name: "Who owns the code and IP?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You do, fully, from day one."
      }
    },
    {
      "@type": "Question",
      name: "Can you act as our technology partner after launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, on a monthly basis, until you hire your own team, and we help you hire."
      }
    },
    {
      "@type": "Question",
      name: "Web or mobile first?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Usually web, because it is faster to change. Mobile first when the product depends on the phone."
      }
    },
    {
      "@type": "Question",
      name: "Do you take equity instead of fees?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. We work on fees so the product and equity stay yours."
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
            <li className="text-ink font-bold" aria-current="page">MVP Development</li>
          </ol>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="bg-forest overflow-hidden min-h-[400px] flex items-center border-b border-light-grey">
        <div className="container-tbc py-s6 relative z-10">
          <Reveal>
            <h1 className="font-display font-bold text-[clamp(32px,4.5vw,52px)] text-white leading-[1.1] tracking-[-0.5px] max-w-4xl mb-6 text-balance">
              Your first working product in 8 to 12 weeks
            </h1>
            <p className="text-body text-white/70 leading-relaxed max-w-3xl mb-8 text-pretty">
              We help founders cut an idea down to the version that proves it, then build that version properly so it can grow instead of being rebuilt.
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
                    <h3 className="font-display font-bold text-[18px] text-ink leading-snug mb-3">Scope that never stops growing.</h3>
                    <p className="text-body text-mid-grey">Every feature feels essential, so launch keeps moving.</p>
                  </div>
                </Reveal>
              
                <Reveal delay={0.1}>
                  <div className="bg-white border border-light-grey rounded p-6 shadow-card hover:shadow-card-hover transition-all duration-300 h-full">
                    <span className="font-display font-bold text-[13px] text-gold tracking-widest mb-3 block">02</span>
                    <h3 className="font-display font-bold text-[18px] text-ink leading-snug mb-3">Cheap prototypes that must be thrown away.</h3>
                    <p className="text-body text-mid-grey">Quick builds without structure cost more when real users arrive.</p>
                  </div>
                </Reveal>
              
                <Reveal delay={0.2}>
                  <div className="bg-white border border-light-grey rounded p-6 shadow-card hover:shadow-card-hover transition-all duration-300 h-full">
                    <span className="font-display font-bold text-[13px] text-gold tracking-widest mb-3 block">03</span>
                    <h3 className="font-display font-bold text-[18px] text-ink leading-snug mb-3">No technical co-founder.</h3>
                    <p className="text-body text-mid-grey">Decisions on stack, hosting and security fall to someone without the background to make them.</p>
                  </div>
                </Reveal>
              
                <Reveal delay={0.30000000000000004}>
                  <div className="bg-white border border-light-grey rounded p-6 shadow-card hover:shadow-card-hover transition-all duration-300 h-full">
                    <span className="font-display font-bold text-[13px] text-gold tracking-widest mb-3 block">04</span>
                    <h3 className="font-display font-bold text-[18px] text-ink leading-snug mb-3">Building before learning.</h3>
                    <p className="text-body text-mid-grey">Months go into features nobody asked for.</p>
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
                What you get
              </h2>
              <hr className="gold-rule gold-rule--center" />
            </Reveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
              <Reveal delay={0}>
                <article className="bg-ivory border border-light-grey rounded p-8 shadow-card hover:shadow-card-hover transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-5">
                    <h3 className="font-display font-bold text-[18px] text-ink leading-snug">Scoping workshop</h3>
                  </div>
                  <ul className="space-y-3 flex-1">
                    
                      <li className="flex items-start gap-3">
                        <span className="mt-[8px] flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gold" aria-hidden="true" />
                        <span className="text-body text-mid-grey text-pretty" dangerouslySetInnerHTML={{ __html: "The smallest product that tests your riskiest assumption." }} />
                      </li>
                    
                  </ul>
                </article>
              </Reveal>
            
              <Reveal delay={0.06}>
                <article className="bg-ivory border border-light-grey rounded p-8 shadow-card hover:shadow-card-hover transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-5">
                    <h3 className="font-display font-bold text-[18px] text-ink leading-snug">Clickable prototype</h3>
                  </div>
                  <ul className="space-y-3 flex-1">
                    
                      <li className="flex items-start gap-3">
                        <span className="mt-[8px] flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gold" aria-hidden="true" />
                        <span className="text-body text-mid-grey text-pretty" dangerouslySetInnerHTML={{ __html: "Tested with real prospective users before building." }} />
                      </li>
                    
                  </ul>
                </article>
              </Reveal>
            
              <Reveal delay={0.12}>
                <article className="bg-ivory border border-light-grey rounded p-8 shadow-card hover:shadow-card-hover transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-5">
                    <h3 className="font-display font-bold text-[18px] text-ink leading-snug">Production-quality build</h3>
                  </div>
                  <ul className="space-y-3 flex-1">
                    
                      <li className="flex items-start gap-3">
                        <span className="mt-[8px] flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gold" aria-hidden="true" />
                        <span className="text-body text-mid-grey text-pretty" dangerouslySetInnerHTML={{ __html: "Web, mobile or both, with authentication, payments and admin." }} />
                      </li>
                    
                  </ul>
                </article>
              </Reveal>
            
              <Reveal delay={0.18}>
                <article className="bg-ivory border border-light-grey rounded p-8 shadow-card hover:shadow-card-hover transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-5">
                    <h3 className="font-display font-bold text-[18px] text-ink leading-snug">Analytics from day one</h3>
                  </div>
                  <ul className="space-y-3 flex-1">
                    
                      <li className="flex items-start gap-3">
                        <span className="mt-[8px] flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gold" aria-hidden="true" />
                        <span className="text-body text-mid-grey text-pretty" dangerouslySetInnerHTML={{ __html: "So you know what users actually do." }} />
                      </li>
                    
                  </ul>
                </article>
              </Reveal>
            
              <Reveal delay={0.24}>
                <article className="bg-ivory border border-light-grey rounded p-8 shadow-card hover:shadow-card-hover transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-5">
                    <h3 className="font-display font-bold text-[18px] text-ink leading-snug">Launch support</h3>
                  </div>
                  <ul className="space-y-3 flex-1">
                    
                      <li className="flex items-start gap-3">
                        <span className="mt-[8px] flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gold" aria-hidden="true" />
                        <span className="text-body text-mid-grey text-pretty" dangerouslySetInnerHTML={{ __html: "Hosting, app store submission, monitoring." }} />
                      </li>
                    
                  </ul>
                </article>
              </Reveal>
            
              <Reveal delay={0.3}>
                <article className="bg-ivory border border-light-grey rounded p-8 shadow-card hover:shadow-card-hover transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-5">
                    <h3 className="font-display font-bold text-[18px] text-ink leading-snug">A plan for version two</h3>
                  </div>
                  <ul className="space-y-3 flex-1">
                    
                      <li className="flex items-start gap-3">
                        <span className="mt-[8px] flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gold" aria-hidden="true" />
                        <span className="text-body text-mid-grey text-pretty" dangerouslySetInnerHTML={{ __html: "Based on usage, not guesses." }} />
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
              <p>How we work: Two-week scoping and prototype; fixed-price build in two-week cycles; launch; iterate.

We build our own products this way. <Link href="/services/slate" className="text-gold hover:underline">Slate, our executive intelligence platform</Link>, began as a focused first version and grew from real usage.</p>
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
                    <span>What does an MVP cost?</span>
                    <span className="text-gold group-open:rotate-180 transition-transform duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </span>
                  </summary>
                  <div className="p-6 pt-0 font-sans text-[15px] text-mid-grey leading-relaxed bg-ivory/50 rounded-b" dangerouslySetInnerHTML={{ __html: "It depends on scope, which is why scoping comes first. Most focused MVPs we build fall within the range of a small internal tool. See <Link href=\"/blog/how-much-does-custom-software-development-cost-in-india-in-2026\" className=\"text-gold hover:underline\">custom software costs</Link>." }} />
                </details>
              </Reveal>
            
              <Reveal delay={0.06}>
                <details className="group border border-light-grey rounded bg-ivory/50 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-display font-bold text-ink text-[17px] hover:bg-ivory select-none rounded transition-colors">
                    <span>Who owns the code and IP?</span>
                    <span className="text-gold group-open:rotate-180 transition-transform duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </span>
                  </summary>
                  <div className="p-6 pt-0 font-sans text-[15px] text-mid-grey leading-relaxed bg-ivory/50 rounded-b" dangerouslySetInnerHTML={{ __html: "You do, fully, from day one." }} />
                </details>
              </Reveal>
            
              <Reveal delay={0.12}>
                <details className="group border border-light-grey rounded bg-ivory/50 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-display font-bold text-ink text-[17px] hover:bg-ivory select-none rounded transition-colors">
                    <span>Can you act as our technology partner after launch?</span>
                    <span className="text-gold group-open:rotate-180 transition-transform duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </span>
                  </summary>
                  <div className="p-6 pt-0 font-sans text-[15px] text-mid-grey leading-relaxed bg-ivory/50 rounded-b" dangerouslySetInnerHTML={{ __html: "Yes, on a monthly basis, until you hire your own team, and we help you hire." }} />
                </details>
              </Reveal>
            
              <Reveal delay={0.18}>
                <details className="group border border-light-grey rounded bg-ivory/50 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-display font-bold text-ink text-[17px] hover:bg-ivory select-none rounded transition-colors">
                    <span>Web or mobile first?</span>
                    <span className="text-gold group-open:rotate-180 transition-transform duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </span>
                  </summary>
                  <div className="p-6 pt-0 font-sans text-[15px] text-mid-grey leading-relaxed bg-ivory/50 rounded-b" dangerouslySetInnerHTML={{ __html: "Usually web, because it is faster to change. Mobile first when the product depends on the phone." }} />
                </details>
              </Reveal>
            
              <Reveal delay={0.24}>
                <details className="group border border-light-grey rounded bg-ivory/50 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-display font-bold text-ink text-[17px] hover:bg-ivory select-none rounded transition-colors">
                    <span>Do you take equity instead of fees?</span>
                    <span className="text-gold group-open:rotate-180 transition-transform duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </span>
                  </summary>
                  <div className="p-6 pt-0 font-sans text-[15px] text-mid-grey leading-relaxed bg-ivory/50 rounded-b" dangerouslySetInnerHTML={{ __html: "No. We work on fees so the product and equity stay yours." }} />
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
              Tell us the idea and who it is for. We will tell you what the first version should be.
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

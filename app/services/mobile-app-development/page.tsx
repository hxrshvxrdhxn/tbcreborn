
import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionInk from "@/components/SectionInk";

export const metadata: Metadata = {
  title: "Mobile App Development Company in Noida | Turbo Bytes Consulting",
  description: "iOS and Android apps for customers, field teams and operations. Cross-platform builds, offline support and integrations with your business systems.",
  alternates: { canonical: "/services/mobile-app-development" },
  openGraph: {
    title: "Mobile App Development Company in Noida | Turbo Bytes Consulting",
    description: "iOS and Android apps for customers, field teams and operations. Cross-platform builds, offline support and integrations with your business systems.",
    url: "https://turbobytesconsulting.com/services/mobile-app-development",
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Mobile App Development Company in Noida | Turbo Bytes Consulting",
    description: "iOS and Android apps for customers, field teams and operations. Cross-platform builds, offline support and integrations with your business systems.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Mobile apps your customers and field teams will actually use",
  provider: {
    "@type": "Organization",
    name: "Turbo Bytes Consulting",
    url: "https://turbobytesconsulting.com",
  },
  url: "https://turbobytesconsulting.com/services/mobile-app-development",
  description: "iOS and Android apps for customers, field teams and operations. Cross-platform builds, offline support and integrations with your business systems.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does a business app cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Simple internal apps usually start around ₹3 lakh to ₹8 lakh; customer and field apps with payments or maps fall around ₹8 lakh to ₹25 lakh. See what drives mobile app cost in India."
      }
    },
    {
      "@type": "Question",
      name: "Do we need an app or would a web app do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If users need offline access, the camera, GPS or push notifications, an app is usually right. Otherwise a mobile-friendly web app can cost less. We will tell you which."
      }
    },
    {
      "@type": "Question",
      name: "Will it work without internet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Field apps are built offline-first and sync when a connection returns."
      }
    },
    {
      "@type": "Question",
      name: "Who publishes it to the stores?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We handle App Store and Play Store submission under your company's developer accounts."
      }
    },
    {
      "@type": "Question",
      name: "How are updates handled?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Apple and Google change their platforms every year. A support agreement keeps the app compatible and secure."
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
            <li className="text-ink font-bold" aria-current="page">Mobile apps your customers and field teams will actually use</li>
          </ol>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="bg-ink overflow-hidden min-h-[400px] flex items-center border-b border-light-grey">
        <div className="container-tbc py-s6 relative z-10">
          <Reveal>
            <h1 className="font-display font-bold text-[clamp(32px,4.5vw,52px)] text-white leading-[1.1] tracking-[-0.5px] max-w-4xl mb-6 text-balance">
              Mobile apps your customers and field teams will actually use
            </h1>
            <p className="text-body text-white/70 leading-relaxed max-w-3xl mb-8 text-pretty">
              We build iOS and Android apps that connect to the systems you already run, work on patchy networks, and are simple enough to need no training.
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
                    <h3 className="font-display font-bold text-[18px] text-ink leading-snug mb-3">Field teams report by phone and WhatsApp.</h3>
                    <p className="text-body text-mid-grey">Visits, orders and photos arrive late and incomplete, and nobody can see what happened today.</p>
                  </div>
                </Reveal>
              
                <Reveal delay={0.1}>
                  <div className="bg-white border border-light-grey rounded p-6 shadow-card hover:shadow-card-hover transition-all duration-300 h-full">
                    <span className="font-display font-bold text-[13px] text-gold tracking-widest mb-3 block">02</span>
                    <h3 className="font-display font-bold text-[18px] text-ink leading-snug mb-3">Customers expect self-service.</h3>
                    <p className="text-body text-mid-grey">They want to place orders, track status and raise requests on their phones, not call your office.</p>
                  </div>
                </Reveal>
              
                <Reveal delay={0.2}>
                  <div className="bg-white border border-light-grey rounded p-6 shadow-card hover:shadow-card-hover transition-all duration-300 h-full">
                    <span className="font-display font-bold text-[13px] text-gold tracking-widest mb-3 block">03</span>
                    <h3 className="font-display font-bold text-[18px] text-ink leading-snug mb-3">Apps that nobody opens.</h3>
                    <p className="text-body text-mid-grey">Many business apps fail because they add work instead of removing it.</p>
                  </div>
                </Reveal>
              
                <Reveal delay={0.30000000000000004}>
                  <div className="bg-white border border-light-grey rounded p-6 shadow-card hover:shadow-card-hover transition-all duration-300 h-full">
                    <span className="font-display font-bold text-[13px] text-gold tracking-widest mb-3 block">04</span>
                    <h3 className="font-display font-bold text-[18px] text-ink leading-snug mb-3">Two platforms, double the cost.</h3>
                    <p className="text-body text-mid-grey">Building separate iOS and Android apps doubles the effort for most business needs.</p>
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
                    <h3 className="font-display font-bold text-[18px] text-ink leading-snug">Field and sales apps:</h3>
                  </div>
                  <ul className="space-y-3 flex-1">
                    
                      <li className="flex items-start gap-3">
                        <span className="mt-[8px] flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gold" aria-hidden="true" />
                        <span className="text-body text-mid-grey text-pretty" dangerouslySetInnerHTML={{ __html: "visits, orders, GPS check-ins, photos and signatures, working offline." }} />
                      </li>
                    
                  </ul>
                </article>
              </Reveal>
            
              <Reveal delay={0.06}>
                <article className="bg-ivory border border-light-grey rounded p-8 shadow-card hover:shadow-card-hover transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-5">
                    <h3 className="font-display font-bold text-[18px] text-ink leading-snug">Customer apps:</h3>
                  </div>
                  <ul className="space-y-3 flex-1">
                    
                      <li className="flex items-start gap-3">
                        <span className="mt-[8px] flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gold" aria-hidden="true" />
                        <span className="text-body text-mid-grey text-pretty" dangerouslySetInnerHTML={{ __html: "ordering, tracking, service requests, payments and notifications." }} />
                      </li>
                    
                  </ul>
                </article>
              </Reveal>
            
              <Reveal delay={0.12}>
                <article className="bg-ivory border border-light-grey rounded p-8 shadow-card hover:shadow-card-hover transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-5">
                    <h3 className="font-display font-bold text-[18px] text-ink leading-snug">Employee apps:</h3>
                  </div>
                  <ul className="space-y-3 flex-1">
                    
                      <li className="flex items-start gap-3">
                        <span className="mt-[8px] flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gold" aria-hidden="true" />
                        <span className="text-body text-mid-grey text-pretty" dangerouslySetInnerHTML={{ __html: "attendance, approvals, announcements and training for distributed teams." }} />
                      </li>
                    
                  </ul>
                </article>
              </Reveal>
            
              <Reveal delay={0.18}>
                <article className="bg-ivory border border-light-grey rounded p-8 shadow-card hover:shadow-card-hover transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-5">
                    <h3 className="font-display font-bold text-[18px] text-ink leading-snug">Admin panels and back ends:</h3>
                  </div>
                  <ul className="space-y-3 flex-1">
                    
                      <li className="flex items-start gap-3">
                        <span className="mt-[8px] flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gold" aria-hidden="true" />
                        <span className="text-body text-mid-grey text-pretty" dangerouslySetInnerHTML={{ __html: "the server, database and dashboard behind every app." }} />
                      </li>
                    
                  </ul>
                </article>
              </Reveal>
            
              <Reveal delay={0.24}>
                <article className="bg-ivory border border-light-grey rounded p-8 shadow-card hover:shadow-card-hover transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-5">
                    <h3 className="font-display font-bold text-[18px] text-ink leading-snug">Integrations:</h3>
                  </div>
                  <ul className="space-y-3 flex-1">
                    
                      <li className="flex items-start gap-3">
                        <span className="mt-[8px] flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gold" aria-hidden="true" />
                        <span className="text-body text-mid-grey text-pretty" dangerouslySetInnerHTML={{ __html: "your CRM, ERP, Tally, Razorpay, maps and WhatsApp." }} />
                      </li>
                    
                  </ul>
                </article>
              </Reveal>
            
              <Reveal delay={0.3}>
                <article className="bg-ivory border border-light-grey rounded p-8 shadow-card hover:shadow-card-hover transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-5">
                    <h3 className="font-display font-bold text-[18px] text-ink leading-snug">Launch and upkeep:</h3>
                  </div>
                  <ul className="space-y-3 flex-1">
                    
                      <li className="flex items-start gap-3">
                        <span className="mt-[8px] flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gold" aria-hidden="true" />
                        <span className="text-body text-mid-grey text-pretty" dangerouslySetInnerHTML={{ __html: "App Store and Play Store submission, updates for new OS versions." }} />
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
              <p>How we work: Discovery and screen designs; a focused first version in 8 to 14 weeks; pilot with real users; phased rollout; ongoing support.

Most business apps are built cross-platform with React Native or Flutter, which gives one codebase for iOS and Android. We build natively when an app depends heavily on device hardware.</p>
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
                    <span>How much does a business app cost?</span>
                    <span className="text-gold group-open:rotate-180 transition-transform duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </span>
                  </summary>
                  <div className="p-6 pt-0 font-sans text-[15px] text-mid-grey leading-relaxed bg-ivory/50 rounded-b" dangerouslySetInnerHTML={{ __html: "Simple internal apps usually start around ₹3 lakh to ₹8 lakh; customer and field apps with payments or maps fall around ₹8 lakh to ₹25 lakh. See <Link href=\"/blog/mobile-app-development-cost-in-india-what-drives-the-price\" className=\"text-gold hover:underline\">what drives mobile app cost in India</Link>." }} />
                </details>
              </Reveal>
            
              <Reveal delay={0.06}>
                <details className="group border border-light-grey rounded bg-ivory/50 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-display font-bold text-ink text-[17px] hover:bg-ivory select-none rounded transition-colors">
                    <span>Do we need an app or would a web app do?</span>
                    <span className="text-gold group-open:rotate-180 transition-transform duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </span>
                  </summary>
                  <div className="p-6 pt-0 font-sans text-[15px] text-mid-grey leading-relaxed bg-ivory/50 rounded-b" dangerouslySetInnerHTML={{ __html: "If users need offline access, the camera, GPS or push notifications, an app is usually right. Otherwise a mobile-friendly web app can cost less. We will tell you which." }} />
                </details>
              </Reveal>
            
              <Reveal delay={0.12}>
                <details className="group border border-light-grey rounded bg-ivory/50 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-display font-bold text-ink text-[17px] hover:bg-ivory select-none rounded transition-colors">
                    <span>Will it work without internet?</span>
                    <span className="text-gold group-open:rotate-180 transition-transform duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </span>
                  </summary>
                  <div className="p-6 pt-0 font-sans text-[15px] text-mid-grey leading-relaxed bg-ivory/50 rounded-b" dangerouslySetInnerHTML={{ __html: "Yes. Field apps are built offline-first and sync when a connection returns." }} />
                </details>
              </Reveal>
            
              <Reveal delay={0.18}>
                <details className="group border border-light-grey rounded bg-ivory/50 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-display font-bold text-ink text-[17px] hover:bg-ivory select-none rounded transition-colors">
                    <span>Who publishes it to the stores?</span>
                    <span className="text-gold group-open:rotate-180 transition-transform duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </span>
                  </summary>
                  <div className="p-6 pt-0 font-sans text-[15px] text-mid-grey leading-relaxed bg-ivory/50 rounded-b" dangerouslySetInnerHTML={{ __html: "We handle App Store and Play Store submission under your company's developer accounts." }} />
                </details>
              </Reveal>
            
              <Reveal delay={0.24}>
                <details className="group border border-light-grey rounded bg-ivory/50 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-display font-bold text-ink text-[17px] hover:bg-ivory select-none rounded transition-colors">
                    <span>How are updates handled?</span>
                    <span className="text-gold group-open:rotate-180 transition-transform duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </span>
                  </summary>
                  <div className="p-6 pt-0 font-sans text-[15px] text-mid-grey leading-relaxed bg-ivory/50 rounded-b" dangerouslySetInnerHTML={{ __html: "Apple and Google change their platforms every year. A support agreement keeps the app compatible and secure." }} />
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
              Describe what your team or customers need to do on their phones. We will tell you the simplest way to build it.
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


import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionInk from "@/components/SectionInk";
import CallProcess from "@/components/CallProcess";

export const metadata: Metadata = {
  title: { absolute: "Software Development Company in Greater Noida | Turbo Bytes Consulting" },
  description: "A software, AI and consulting team based at Kasana Tower, Alpha I, Greater Noida. Custom software, apps and automation for local businesses.",
  alternates: { canonical: "/software-development-company-greater-noida" }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "A software development team in Greater Noida",
  provider: {
    "@id": "https://turbobytesconsulting.com/#organization",
  },
  url: "https://turbobytesconsulting.com/software-development-company-greater-noida",
  description: "A software, AI and consulting team based at Kasana Tower, Alpha I, Greater Noida. Custom software, apps and automation for local businesses.",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://turbobytesconsulting.com/#organization",
  name: "Turbo Bytes Consulting",
  telephone: "+919354784377",
  url: "https://turbobytesconsulting.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kasana Tower, Alfa Marg, Alpha-I Commercial Belt, Block A, Alpha I",
    addressLocality: "Greater Noida",
    addressRegion: "Uttar Pradesh",
    postalCode: "201310",
    addressCountry: "IN"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can you visit our factory or office?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. For businesses in Greater Noida and Noida, discovery workshops are usually held on site."
      }
    },
    {
      "@type": "Question",
      name: "Do you only work with local businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. We work with clients across Delhi NCR and India; local clients simply get more in-person time."
      }
    },
    {
      "@type": "Question",
      name: "What size of business do you work with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mostly founder-led companies with 30 to 300 employees."
      }
    },
    {
      "@type": "Question",
      name: "How do we start?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A 30-minute scoping call, then an on-site or online discovery session."
      }
    }
  ]
};

export default function LocationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <nav aria-label="Breadcrumb" className="bg-ivory border-b border-light-grey">
        <div className="container-tbc py-3">
          <ol className="flex items-center gap-2 font-display text-[13px] uppercase tracking-widest text-mid-grey">
            <li><Link href="/" className="hover:text-ink transition-colors">Home</Link></li>
            <li aria-hidden="true" className="text-light-grey select-none">/</li>
            <li className="text-ink font-bold" aria-current="page">A software development team in Greater Noida</li>
          </ol>
        </div>
      </nav>

      <section className="bg-ink overflow-hidden min-h-[400px] flex items-center border-b border-light-grey">
        <div className="container-tbc py-s6 relative z-10">
          <Reveal>
            <h1 className="font-display font-bold text-[clamp(32px,4.5vw,52px)] text-white leading-[1.1] tracking-[-0.5px] max-w-4xl mb-6 text-balance">
              A software development team in Greater Noida
            </h1>
            <p className="text-body text-white/70 leading-relaxed max-w-3xl mb-8 text-pretty">
              Turbo Bytes Consulting is based at Kasana Tower, Alpha I, Greater Noida. We build custom software, mobile apps and AI systems for businesses across the city&apos;s industrial sectors and beyond.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory py-s7 border-b border-light-grey">
        <div className="container-tbc">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
              <Reveal delay={0}>
                <article className="bg-white border border-light-grey rounded p-8 shadow-card h-full">
                  <h3 className="font-display font-bold text-[20px] text-ink leading-snug mb-4">Why work with a local team.</h3>
                  <p className="text-body text-mid-grey leading-relaxed" dangerouslySetInnerHTML={{ __html: "Some decisions are best made in a room: process mapping, workshops with your managers, and go-live days on the shop floor. Being in Greater Noida means we can be with your team in person when it matters, and online the rest of the time." }} />
                </article>
              </Reveal>
            
              <Reveal delay={0.1}>
                <article className="bg-white border border-light-grey rounded p-8 shadow-card h-full">
                  <h3 className="font-display font-bold text-[20px] text-ink leading-snug mb-4">Who we work with here.</h3>
                  <p className="text-body text-mid-grey leading-relaxed" dangerouslySetInnerHTML={{ __html: "Manufacturers and engineering firms in the Ecotech and Udyog Vihar areas, distributors and logistics operators along the Eastern Peripheral and Yamuna Expressway corridors, and education institutes in Knowledge Park." }} />
                </article>
              </Reveal>
            
              <Reveal delay={0.2}>
                <article className="bg-white border border-light-grey rounded p-8 shadow-card h-full">
                  <h3 className="font-display font-bold text-[20px] text-ink leading-snug mb-4">What we build.</h3>
                  <p className="text-body text-mid-grey leading-relaxed" dangerouslySetInnerHTML={{ __html: "<Link href=\"/services/custom-software-development\" className=\"text-gold hover:underline\">Custom software</Link>, <Link href=\"/services/mobile-app-development\" className=\"text-gold hover:underline\">mobile apps</Link>, <Link href=\"/services/ai-applications\" className=\"text-gold hover:underline\">AI applications</Link> and <Link href=\"/services/business-automation\" className=\"text-gold hover:underline\">business automation</Link>." }} />
                </article>
              </Reveal>
            
          </div>
        </div>
      </section>

      
      <section className="bg-white py-s7 border-b border-light-grey">
        <div className="container-tbc">
          <Reveal>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 bg-ivory border border-light-grey rounded p-8">
              <div>
                <h3 className="font-display font-bold text-[24px] text-ink mb-4">Meet in person</h3>
                <p className="font-sans text-[16px] text-mid-grey mb-2">Kasana Tower, Alpha I<br/>Greater Noida, Uttar Pradesh</p>
                <p className="font-sans text-[16px] text-mid-grey mb-6">+91 93547 84377</p>
                <Link href="/book-consultation" className="btn-gold px-6 py-3">Book a visit</Link>
              </div>
              <div className="h-[200px] bg-light-grey rounded overflow-hidden flex items-center justify-center">
                <span className="text-mid-grey text-sm">[Embedded Google Map]</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    

      <section className="bg-white py-s7 border-b border-light-grey">
        <div className="container-tbc">
          <div className="text-center max-w-2xl mx-auto mb-s6">
            <Reveal>
              <span className="eyebrow">FAQ</span>
              <h2 className="font-display font-bold text-[clamp(28px,3vw,36px)] text-ink leading-[1.2] mb-6">Frequently Asked Questions</h2>
              <hr className="gold-rule gold-rule--center" />
            </Reveal>
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            
              <Reveal delay={0}>
                <details className="group border border-light-grey rounded bg-ivory/50 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-display font-bold text-ink text-[17px] hover:bg-ivory select-none rounded transition-colors">
                    <span>Can you visit our factory or office?</span>
                    <span className="text-gold group-open:rotate-180 transition-transform duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </span>
                  </summary>
                  <div className="p-6 pt-0 font-sans text-[15px] text-mid-grey leading-relaxed bg-ivory/50 rounded-b" dangerouslySetInnerHTML={{ __html: "Yes. For businesses in Greater Noida and Noida, discovery workshops are usually held on site." }} />
                </details>
              </Reveal>
            
              <Reveal delay={0.06}>
                <details className="group border border-light-grey rounded bg-ivory/50 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-display font-bold text-ink text-[17px] hover:bg-ivory select-none rounded transition-colors">
                    <span>Do you only work with local businesses?</span>
                    <span className="text-gold group-open:rotate-180 transition-transform duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </span>
                  </summary>
                  <div className="p-6 pt-0 font-sans text-[15px] text-mid-grey leading-relaxed bg-ivory/50 rounded-b" dangerouslySetInnerHTML={{ __html: "No. We work with clients across Delhi NCR and India; local clients simply get more in-person time." }} />
                </details>
              </Reveal>
            
              <Reveal delay={0.12}>
                <details className="group border border-light-grey rounded bg-ivory/50 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-display font-bold text-ink text-[17px] hover:bg-ivory select-none rounded transition-colors">
                    <span>What size of business do you work with?</span>
                    <span className="text-gold group-open:rotate-180 transition-transform duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </span>
                  </summary>
                  <div className="p-6 pt-0 font-sans text-[15px] text-mid-grey leading-relaxed bg-ivory/50 rounded-b" dangerouslySetInnerHTML={{ __html: "Mostly founder-led companies with 30 to 300 employees." }} />
                </details>
              </Reveal>
            
              <Reveal delay={0.18}>
                <details className="group border border-light-grey rounded bg-ivory/50 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-display font-bold text-ink text-[17px] hover:bg-ivory select-none rounded transition-colors">
                    <span>How do we start?</span>
                    <span className="text-gold group-open:rotate-180 transition-transform duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </span>
                  </summary>
                  <div className="p-6 pt-0 font-sans text-[15px] text-mid-grey leading-relaxed bg-ivory/50 rounded-b" dangerouslySetInnerHTML={{ __html: "A 30-minute scoping call, then an on-site or online discovery session." }} />
                </details>
              </Reveal>
            
          </div>
        </div>
      </section>

      <CallProcess />

      <SectionInk className="text-center">
        <div className="container-tbc">
          <Reveal>
            <h2 className="font-display font-bold text-[clamp(26px,3.5vw,40px)] text-white leading-[1.2] max-w-3xl mx-auto mb-6">
              Start a Conversation
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

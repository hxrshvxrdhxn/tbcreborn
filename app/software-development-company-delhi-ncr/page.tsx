
import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionInk from "@/components/SectionInk";
import CallProcess from "@/components/CallProcess";

export const metadata: Metadata = {
  title: { absolute: "Software Development & AI Company in Delhi NCR | TBC" },
  description: "Custom software, mobile apps, AI applications and automation for founder-led businesses across Delhi, Noida, Gurugram, Ghaziabad and Faridabad.",
  alternates: { canonical: "/software-development-company-delhi-ncr" }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Software and AI development across Delhi NCR",
  provider: {
    "@type": "Organization",
    name: "Turbo Bytes Consulting",
    url: "https://turbobytesconsulting.com",
  },
  url: "https://turbobytesconsulting.com/software-development-company-delhi-ncr",
  description: "Custom software, mobile apps, AI applications and automation for founder-led businesses across Delhi, Noida, Gurugram, Ghaziabad and Faridabad.",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Turbo Bytes Consulting",
  telephone: "+91 93547 84377",
  url: "https://turbobytesconsulting.com/software-development-company-delhi-ncr",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kasana Tower, Alpha I",
    addressLocality: "Greater Noida",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you work outside Delhi NCR?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, across India. NCR clients get in-person workshops as standard."
      }
    },
    {
      "@type": "Question",
      name: "What makes you different from a typical software agency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We start with how the business runs, not with a feature list, and we price in fixed phases."
      }
    },
    {
      "@type": "Question",
      name: "Do you work with startups?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, through MVP development, though most clients are established businesses with 30 to 300 employees."
      }
    },
    {
      "@type": "Question",
      name: "How quickly can you start?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Discovery can usually begin within two weeks of a first call."
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
            <li className="text-ink font-bold" aria-current="page">Software and AI development across Delhi NCR</li>
          </ol>
        </div>
      </nav>

      <section className="bg-ink overflow-hidden min-h-[400px] flex items-center border-b border-light-grey">
        <div className="container-tbc py-s6 relative z-10">
          <Reveal>
            <h1 className="font-display font-bold text-[clamp(32px,4.5vw,52px)] text-white leading-[1.1] tracking-[-0.5px] max-w-4xl mb-6 text-balance">
              Software and AI development across Delhi NCR
            </h1>
            <p className="text-body text-white/70 leading-relaxed max-w-3xl mb-8 text-pretty">
              We work with founder-led companies across Delhi, Noida, Greater Noida, Gurugram, Ghaziabad and Faridabad, combining management consulting with software delivery.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory py-s7 border-b border-light-grey">
        <div className="container-tbc">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
              <Reveal delay={0}>
                <article className="bg-white border border-light-grey rounded p-8 shadow-card h-full">
                  <h3 className="font-display font-bold text-[20px] text-ink leading-snug mb-4">Consulting and engineering in one team.</h3>
                  <p className="text-body text-mid-grey leading-relaxed" dangerouslySetInnerHTML={{ __html: "Most software projects fail on process, not code. Our team combines management consulting experience from firms such as Accenture with product engineering, so we fix the process before we automate it." }} />
                </article>
              </Reveal>
            
              <Reveal delay={0.1}>
                <article className="bg-white border border-light-grey rounded p-8 shadow-card h-full">
                  <h3 className="font-display font-bold text-[20px] text-ink leading-snug mb-4">Coverage.</h3>
                  <p className="text-body text-mid-grey leading-relaxed" dangerouslySetInnerHTML={{ __html: "Delhi (professional services, trading and distribution)<br/>Noida and Greater Noida (manufacturing, technology, education)<br/>Gurugram (services and corporate offices)<br/>Ghaziabad and Faridabad (manufacturing and engineering)" }} />
                </article>
              </Reveal>
            
              <Reveal delay={0.2}>
                <article className="bg-white border border-light-grey rounded p-8 shadow-card h-full">
                  <h3 className="font-display font-bold text-[20px] text-ink leading-snug mb-4">Services.</h3>
                  <p className="text-body text-mid-grey leading-relaxed" dangerouslySetInnerHTML={{ __html: "<Link href=\"/services/custom-software-development\" className=\"text-gold hover:underline\">Custom software</Link><br/><Link href=\"/services/mobile-app-development\" className=\"text-gold hover:underline\">Mobile apps</Link><br/><Link href=\"/services/ai-applications\" className=\"text-gold hover:underline\">AI applications</Link><br/><Link href=\"/services/business-automation\" className=\"text-gold hover:underline\">Business automation</Link><br/><Link href=\"/services/mvp-development\" className=\"text-gold hover:underline\">MVP development</Link>" }} />
                </article>
              </Reveal>
            
          </div>
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
                    <span>Do you work outside Delhi NCR?</span>
                    <span className="text-gold group-open:rotate-180 transition-transform duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </span>
                  </summary>
                  <div className="p-6 pt-0 font-sans text-[15px] text-mid-grey leading-relaxed bg-ivory/50 rounded-b" dangerouslySetInnerHTML={{ __html: "Yes, across India. NCR clients get in-person workshops as standard." }} />
                </details>
              </Reveal>
            
              <Reveal delay={0.06}>
                <details className="group border border-light-grey rounded bg-ivory/50 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-display font-bold text-ink text-[17px] hover:bg-ivory select-none rounded transition-colors">
                    <span>What makes you different from a typical software agency?</span>
                    <span className="text-gold group-open:rotate-180 transition-transform duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </span>
                  </summary>
                  <div className="p-6 pt-0 font-sans text-[15px] text-mid-grey leading-relaxed bg-ivory/50 rounded-b" dangerouslySetInnerHTML={{ __html: "We start with how the business runs, not with a feature list, and we price in fixed phases." }} />
                </details>
              </Reveal>
            
              <Reveal delay={0.12}>
                <details className="group border border-light-grey rounded bg-ivory/50 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-display font-bold text-ink text-[17px] hover:bg-ivory select-none rounded transition-colors">
                    <span>Do you work with startups?</span>
                    <span className="text-gold group-open:rotate-180 transition-transform duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </span>
                  </summary>
                  <div className="p-6 pt-0 font-sans text-[15px] text-mid-grey leading-relaxed bg-ivory/50 rounded-b" dangerouslySetInnerHTML={{ __html: "Yes, through <Link href=\"/services/mvp-development\" className=\"text-gold hover:underline\">MVP development</Link>, though most clients are established businesses with 30 to 300 employees." }} />
                </details>
              </Reveal>
            
              <Reveal delay={0.18}>
                <details className="group border border-light-grey rounded bg-ivory/50 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-display font-bold text-ink text-[17px] hover:bg-ivory select-none rounded transition-colors">
                    <span>How quickly can you start?</span>
                    <span className="text-gold group-open:rotate-180 transition-transform duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </span>
                  </summary>
                  <div className="p-6 pt-0 font-sans text-[15px] text-mid-grey leading-relaxed bg-ivory/50 rounded-b" dangerouslySetInnerHTML={{ __html: "Discovery can usually begin within two weeks of a first call." }} />
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

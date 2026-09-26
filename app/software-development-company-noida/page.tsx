
import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionInk from "@/components/SectionInk";

export const metadata: Metadata = {
  title: { absolute: "Software Development Company in Noida | Turbo Bytes Consulting" },
  description: "Custom software, mobile apps and AI applications for Noida businesses, from a team 30 minutes away in Greater Noida.",
  alternates: { canonical: "/software-development-company-noida" }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Software development for Noida businesses",
  provider: {
    "@type": "Organization",
    name: "Turbo Bytes Consulting",
    url: "https://turbobytesconsulting.com",
  },
  url: "https://turbobytesconsulting.com/software-development-company-noida",
  description: "Custom software, mobile apps and AI applications for Noida businesses, from a team 30 minutes away in Greater Noida.",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Turbo Bytes Consulting",
  telephone: "+91 93547 84377",
  url: "https://turbobytesconsulting.com/software-development-company-noida",
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
      name: "Are you based in Noida?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our office is at Kasana Tower, Alpha I, Greater Noida, about 30 minutes from central Noida. We meet clients on site for workshops and launches."
      }
    },
    {
      "@type": "Question",
      name: "Which industries do you serve in Noida?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Manufacturing, distribution, professional services, education and technology companies."
      }
    },
    {
      "@type": "Question",
      name: "Can you take over an existing software project?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We start with a code and architecture review so you know what you have."
      }
    },
    {
      "@type": "Question",
      name: "What does a project cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on scope. See our guide to custom software costs in India."
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
            <li className="text-ink font-bold" aria-current="page">Software development for Noida businesses</li>
          </ol>
        </div>
      </nav>

      <section className="bg-ink overflow-hidden min-h-[400px] flex items-center border-b border-light-grey">
        <div className="container-tbc py-s6 relative z-10">
          <Reveal>
            <h1 className="font-display font-bold text-[clamp(32px,4.5vw,52px)] text-white leading-[1.1] tracking-[-0.5px] max-w-4xl mb-6 text-balance">
              Software development for Noida businesses
            </h1>
            <p className="text-body text-white/70 leading-relaxed max-w-3xl mb-8 text-pretty">
              From Sector 62&apos;s IT corridor to the manufacturing belts of Phase 2 and the Noida Expressway offices, we build custom software, apps and AI systems for growing Noida companies.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory py-s7 border-b border-light-grey">
        <div className="container-tbc">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
              <Reveal delay={0}>
                <article className="bg-white border border-light-grey rounded p-8 shadow-card h-full">
                  <h3 className="font-display font-bold text-[20px] text-ink leading-snug mb-4">What Noida businesses ask us for most.</h3>
                  <p className="text-body text-mid-grey leading-relaxed" dangerouslySetInnerHTML={{ __html: "Replacing spreadsheets and WhatsApp coordination with proper workflow systems; field and sales apps for distributed teams; AI assistants on company knowledge; and integration between Tally, CRM and operations." }} />
                </article>
              </Reveal>
            
              <Reveal delay={0.1}>
                <article className="bg-white border border-light-grey rounded p-8 shadow-card h-full">
                  <h3 className="font-display font-bold text-[20px] text-ink leading-snug mb-4">How we engage.</h3>
                  <p className="text-body text-mid-grey leading-relaxed" dangerouslySetInnerHTML={{ __html: "A discovery workshop at your office, a fixed-price first phase, and working software every two weeks." }} />
                </article>
              </Reveal>
            
              <Reveal delay={0.2}>
                <article className="bg-white border border-light-grey rounded p-8 shadow-card h-full">
                  <h3 className="font-display font-bold text-[20px] text-ink leading-snug mb-4">Why not a large IT company?</h3>
                  <p className="text-body text-mid-grey leading-relaxed" dangerouslySetInnerHTML={{ __html: "Large vendors are built for large contracts. Founder-led companies of 30 to 300 people need senior attention, fast decisions and a partner who understands operations as well as code. That is who we are." }} />
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
                    <span>Are you based in Noida?</span>
                    <span className="text-gold group-open:rotate-180 transition-transform duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </span>
                  </summary>
                  <div className="p-6 pt-0 font-sans text-[15px] text-mid-grey leading-relaxed bg-ivory/50 rounded-b" dangerouslySetInnerHTML={{ __html: "Our office is at Kasana Tower, Alpha I, Greater Noida, about 30 minutes from central Noida. We meet clients on site for workshops and launches." }} />
                </details>
              </Reveal>
            
              <Reveal delay={0.06}>
                <details className="group border border-light-grey rounded bg-ivory/50 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-display font-bold text-ink text-[17px] hover:bg-ivory select-none rounded transition-colors">
                    <span>Which industries do you serve in Noida?</span>
                    <span className="text-gold group-open:rotate-180 transition-transform duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </span>
                  </summary>
                  <div className="p-6 pt-0 font-sans text-[15px] text-mid-grey leading-relaxed bg-ivory/50 rounded-b" dangerouslySetInnerHTML={{ __html: "Manufacturing, distribution, professional services, education and technology companies." }} />
                </details>
              </Reveal>
            
              <Reveal delay={0.12}>
                <details className="group border border-light-grey rounded bg-ivory/50 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-display font-bold text-ink text-[17px] hover:bg-ivory select-none rounded transition-colors">
                    <span>Can you take over an existing software project?</span>
                    <span className="text-gold group-open:rotate-180 transition-transform duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </span>
                  </summary>
                  <div className="p-6 pt-0 font-sans text-[15px] text-mid-grey leading-relaxed bg-ivory/50 rounded-b" dangerouslySetInnerHTML={{ __html: "Yes. We start with a code and architecture review so you know what you have." }} />
                </details>
              </Reveal>
            
              <Reveal delay={0.18}>
                <details className="group border border-light-grey rounded bg-ivory/50 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-display font-bold text-ink text-[17px] hover:bg-ivory select-none rounded transition-colors">
                    <span>What does a project cost?</span>
                    <span className="text-gold group-open:rotate-180 transition-transform duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </span>
                  </summary>
                  <div className="p-6 pt-0 font-sans text-[15px] text-mid-grey leading-relaxed bg-ivory/50 rounded-b" dangerouslySetInnerHTML={{ __html: "It depends on scope. See our guide to <Link href=\"/blog/how-much-does-custom-software-development-cost-in-india-in-2026\" className=\"text-gold hover:underline\">custom software costs in India</Link>." }} />
                </details>
              </Reveal>
            
          </div>
        </div>
      </section>

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

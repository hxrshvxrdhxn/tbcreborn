import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import SectionInk from "@/components/SectionInk";
import { industries, industryBySlug } from "@/lib/industries";

const BASE = "https://turbobytesconsulting.com";

export function generateStaticParams() {
  return industries.map((i) => ({ industry: i.slug }));
}

export function generateMetadata({ params }: { params: { industry: string } }): Metadata {
  const ind = industryBySlug(params.industry);
  if (!ind) return {};
  return {
    title: { absolute: ind.title },
    description: ind.description,
    alternates: { canonical: `/industries/${ind.slug}` },
    openGraph: {
      title: { absolute: ind.title },
      description: ind.description,
      url: `${BASE}/industries/${ind.slug}`,
      images: [{ url: "/img/og-default.png", width: 1200, height: 630 }],
    },
  };
}

export default function IndustryPage({ params }: { params: { industry: string } }) {
  const ind = industryBySlug(params.industry);
  if (!ind) notFound();

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `Process software for ${ind.name.toLowerCase()} businesses`,
      provider: { "@id": `${BASE}/#organization` },
      areaServed: "Delhi NCR, India",
      url: `${BASE}/industries/${ind.slug}`,
      description: ind.description,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: ind.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE },
        { "@type": "ListItem", position: 2, name: ind.name, item: `${BASE}/industries/${ind.slug}` },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="bg-forest overflow-hidden border-b border-light-grey">
        <div className="container-tbc py-s6 md:py-s7 relative z-10">
          <p className="font-display font-semibold text-[14px] text-white/70 mb-4">{ind.name}</p>
          <h1 className="font-display font-bold text-[clamp(32px,4.5vw,52px)] text-white leading-[1.1] tracking-[-0.5px] max-w-4xl mb-6 text-balance">
            {ind.headline}
          </h1>
          <p className="text-body text-white/75 leading-relaxed max-w-3xl mb-8 text-pretty">{ind.lead}</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/book-consultation" className="btn-primary px-7 py-3.5">
              Tell us the process
            </Link>
            <Link href="#processes" className="inline-flex items-center px-7 py-3.5 border border-white/40 text-white font-display font-semibold rounded hover:bg-white/10 transition-colors">
              See what we fix
            </Link>
          </div>
        </div>
      </section>

      <section id="processes" className="bg-ivory py-s7 border-b border-light-grey" aria-labelledby="processes-heading">
        <div className="container-tbc">
          <Reveal>
            <h2 id="processes-heading" className="section-heading text-balance mb-4">The processes we fix most often.</h2>
            <p className="text-body text-mid-grey max-w-2xl mb-10">Each one starts the same way: what it looks like today, and what it looks like once it runs in software. Not sure which costs you most? <Link href="/process-cost-calculator" className="text-royal underline underline-offset-2">Work out what one process costs a year</Link>.</p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ind.processes.map((p, i) => (
              <Reveal key={p.name} delay={Math.min(i * 0.05, 0.25)}>
                <article className="bg-white border border-light-grey rounded-2xl p-7 h-full flex flex-col gap-4">
                  <h3 className="font-display font-bold text-[20px] text-ink leading-snug">{p.name}</h3>
                  <div>
                    <p className="text-[12px] font-semibold text-mid-grey mb-1">Today</p>
                    <p className="text-[15px] text-ink/80 leading-relaxed">{p.symptom}</p>
                  </div>
                  <div className="mt-auto border-t border-light-grey pt-4">
                    <p className="text-[12px] font-semibold text-royal mb-1">With software</p>
                    <p className="text-[15px] text-ink leading-relaxed">{p.fix}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-s7 border-b border-light-grey" aria-labelledby="how-heading">
        <div className="container-tbc">
          <Reveal>
            <h2 id="how-heading" className="section-heading text-balance mb-10">How a project runs.</h2>
          </Reveal>
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              ["We listen", "A conversation with you to agree the one process that costs the business most."],
              ["We learn", "Days with the people who run it, so the software fits the real work, exceptions included."],
              ["We build and stay", "We build it, deploy it, train the team and look after it through AMC and maintenance."],
            ].map(([t, d], i) => (
              <li key={t} className="rounded-2xl border border-light-grey p-7">
                <p className="font-display font-bold text-royal text-[15px] mb-2">Step {i + 1}</p>
                <h3 className="font-display font-bold text-[20px] text-ink mb-2">{t}</h3>
                <p className="text-[15px] text-mid-grey leading-relaxed">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-ivory py-s7 border-b border-light-grey" aria-labelledby="faq-heading">
        <div className="container-tbc max-w-3xl">
          <Reveal>
            <h2 id="faq-heading" className="section-heading text-balance mb-8">Questions MDs ask us.</h2>
          </Reveal>
          <div className="space-y-3">
            {ind.faqs.map((f) => (
              <details key={f.q} className="group border border-light-grey rounded-xl bg-white [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-display font-bold text-ink text-[17px] select-none">
                  <span>{f.q}</span>
                  <span className="text-royal group-open:rotate-180 transition-transform duration-300" aria-hidden="true">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </span>
                </summary>
                <p className="px-6 pb-6 text-[15px] text-mid-grey leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <SectionInk className="text-center" aria-labelledby="industry-cta">
        <div className="container-tbc">
          <h2 id="industry-cta" className="font-display font-bold text-[clamp(26px,3.5vw,40px)] text-white leading-[1.2] mb-6 text-balance">
            Which process costs you the most?
          </h2>
          <p className="text-body text-white/70 max-w-lg mx-auto mb-10 text-pretty">
            Tell us in a few lines. The first conversation is free and comes with no obligation.
          </p>
          <Link href="/book-consultation" className="btn-gold px-10 py-4.5 text-[16px]">
            Book a conversation →
          </Link>
        </div>
      </SectionInk>
    </>
  );
}

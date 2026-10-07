import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import type { ConsultingService } from "@/lib/offerings";
import { consultingLinks } from "@/lib/offerings";

const SITE = "https://turbobytesconsulting.com";

// Editorial two-column layout: the heading sits in a left rail, the content on the right.
export default function ConsultingServicePage({ s }: { s: ConsultingService }) {
  const url = `${SITE}/services/${s.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: s.title,
        description: s.metaDescription,
        url,
        serviceType: "Consulting",
        areaServed: "IN",
        provider: { "@id": `${SITE}/#organization` },
      },
      {
        "@type": "FAQPage",
        mainEntity: s.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE },
          { "@type": "ListItem", position: 2, name: "Services", item: `${SITE}/services` },
          { "@type": "ListItem", position: 3, name: s.title, item: url },
        ],
      },
    ],
  };
  const others = consultingLinks.filter((l) => l.href !== `/services/${s.slug}`);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <nav aria-label="Breadcrumb" className="bg-ivory border-b border-light-grey">
        <div className="container-tbc py-3">
          <ol className="flex items-center gap-2 text-[13px] text-mid-grey">
            <li><Link href="/" className="hover:text-ink transition-colors">Home</Link></li>
            <li aria-hidden="true" className="text-light-grey select-none">/</li>
            <li><Link href="/services" className="hover:text-ink transition-colors">Services</Link></li>
            <li aria-hidden="true" className="text-light-grey select-none">/</li>
            <li className="text-ink font-semibold" aria-current="page">{s.short}</li>
          </ol>
        </div>
      </nav>

      <section className="relative bg-forest overflow-hidden min-h-[380px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image src="/img/hero-service-consulting.png" alt="" fill priority className="object-cover object-center opacity-40 mix-blend-screen" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/60 to-transparent" />
        </div>
        <div className="container-tbc py-s6 relative z-10">
          <h1 className="font-display font-semibold text-[clamp(32px,4.5vw,52px)] text-white leading-[1.08] tracking-[-0.02em] max-w-3xl mb-6 text-balance">
            {s.title}
          </h1>
          <p className="text-[19px] text-white/80 leading-relaxed max-w-2xl mb-8 text-pretty">{s.lead}</p>
          <Link href="/book-consultation" className="btn-primary">Discuss your situation</Link>
        </div>
      </section>

      {[
        {
          heading: "What it covers",
          body: (
            <ul className="divide-y divide-light-grey border-y border-light-grey">
              {s.covers.map((c) => (
                <li key={c} className="py-4 text-[17px] text-ink leading-snug">{c}</li>
              ))}
            </ul>
          ),
        },
        {
          heading: "How it runs",
          body: (
            <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
              {s.process.map((p, i) => (
                <li key={p.title} className="flex gap-4">
                  <span className="flex-none w-9 h-9 rounded-full border border-royal text-royal font-semibold text-[15px] grid place-items-center" aria-hidden="true">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-display font-semibold text-[18px] text-ink mb-1">{p.title}</h3>
                    <p className="text-[16px] text-mid-grey leading-relaxed">{p.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          ),
        },
        {
          heading: "What you receive",
          body: (
            <ul className="space-y-3">
              {s.deliverables.map((d) => (
                <li key={d} className="flex gap-3 text-[17px] text-ink">
                  <span className="mt-[9px] w-2 h-2 rounded-full bg-royal flex-none" aria-hidden="true" />
                  {d}
                </li>
              ))}
            </ul>
          ),
        },
        {
          heading: "Questions",
          body: (
            <div className="space-y-8">
              {s.faqs.map((f) => (
                <div key={f.q}>
                  <h3 className="font-display font-semibold text-[18px] text-ink mb-2">{f.q}</h3>
                  <p className="text-[16px] text-mid-grey leading-relaxed measure-68">{f.a}</p>
                </div>
              ))}
            </div>
          ),
        },
      ].map((row, i) => (
        <section key={row.heading} className={`${i % 2 ? "bg-white" : "bg-ivory"} py-s6 border-b border-light-grey`}>
          <div className="container-tbc grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 lg:gap-16">
            <Reveal>
              <h2 className="font-display font-semibold text-[clamp(24px,2.6vw,30px)] text-ink leading-tight tracking-[-0.015em]">{row.heading}</h2>
            </Reveal>
            <Reveal delay={0.05}>{row.body}</Reveal>
          </div>
        </section>
      ))}

      <section className="bg-white py-s6">
        <div className="container-tbc">
          <h2 className="font-display font-semibold text-[22px] text-ink mb-6">Other consulting work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {others.map((o) => (
              <Link key={o.href} href={o.href} className="group block border-t-2 border-royal pt-4">
                <span className="font-display font-semibold text-[17px] text-ink group-hover:text-royal transition-colors">{o.title} →</span>
                <p className="text-[15px] text-mid-grey mt-2 leading-relaxed">{o.blurb}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-royal py-s6 text-center">
        <div className="container-tbc">
          <h2 className="font-display font-semibold text-[clamp(24px,3vw,34px)] text-white leading-tight mb-4 text-balance">
            Start with a conversation.
          </h2>
          <p className="text-white/80 text-[17px] mb-8 max-w-xl mx-auto">We will respond within one business day.</p>
          <Link href="/book-consultation" className="btn-gold">Request a consultation</Link>
        </div>
      </section>
    </>
  );
}

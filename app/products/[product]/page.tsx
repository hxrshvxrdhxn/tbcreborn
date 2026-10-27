import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import SectionInk from "@/components/SectionInk";
import { SunscoutScene, CaseArt } from "@/components/Illustrations";
import { productPages, productPageBySlug } from "@/lib/productPages";
import YouTubeLite from "@/components/YouTubeLite";
import { videoForProduct, videoSchema } from "@/lib/social";

const BASE = "https://turbobytesconsulting.com";

// Re-render every 15 minutes so a product video appears once it goes public on YouTube.
export const revalidate = 900;

export function generateStaticParams() {
  return productPages.map((p) => ({ product: p.slug }));
}

export function generateMetadata({ params }: { params: { product: string } }): Metadata {
  const p = productPageBySlug(params.product);
  if (!p) return {};
  return {
    title: { absolute: p.title },
    description: p.description,
    alternates: { canonical: `/products/${p.slug}` },
    openGraph: { title: { absolute: p.title }, description: p.description, url: `${BASE}/products/${p.slug}`, images: [{ url: `/img/og-${p.slug}.png`, width: 1200, height: 630, alt: p.title }] },
    twitter: { card: "summary_large_image", images: [`/img/og-${p.slug}.png`] },
  };
}

export default function ProductLanding({ params }: { params: { product: string } }) {
  const p = productPageBySlug(params.product);
  if (!p) notFound();

  const video = videoForProduct(p.slug);

  const schema = [
    ...(video ? [videoSchema(video)] : []),
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: p.name,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description: p.description,
      url: `${BASE}/products/${p.slug}`,
      publisher: { "@id": `${BASE}/#organization` },
      featureList: p.capabilities.map((c) => c.title),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: p.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE },
        { "@type": "ListItem", position: 2, name: "Products", item: `${BASE}/products` },
        { "@type": "ListItem", position: 3, name: p.name, item: `${BASE}/products/${p.slug}` },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="bg-forest overflow-hidden border-b border-light-grey">
        <div className="container-tbc py-s6 md:py-s8 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-center">
          <div>
            <p className="font-display font-semibold text-[15px] text-[#7FD1A6] mb-4">{p.name} · {p.eyebrow}</p>
            <h1 className="font-display font-bold text-[clamp(32px,4.5vw,54px)] text-white leading-[1.08] tracking-[-0.5px] mb-6 text-balance">{p.headline}</h1>
            <p className="text-body text-white/80 leading-relaxed max-w-2xl mb-8 text-pretty">{p.lead}</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/book-consultation" className="btn-primary px-7 py-3.5">Start a free trial</Link>
              <a href="#capabilities" className="inline-flex items-center px-7 py-3.5 border border-white/40 text-white font-display font-semibold rounded hover:bg-white/10 transition-colors">See what it does</a>
            </div>
          </div>
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden ring-1 ring-white/10">
            {p.slug === "sunscout" ? <SunscoutScene /> : <CaseArt kind="llm" />}
          </div>
        </div>
      </section>

      {video && (
        <section className="bg-white py-s6 md:py-s8 border-b border-light-grey" aria-labelledby="watch-heading">
          <div className="container-tbc grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-14 items-center">
            <Reveal>
              <h2 id="watch-heading" className="section-heading text-balance mb-5">See {p.name} in two minutes.</h2>
              <p className="text-body text-mid-grey leading-relaxed mb-6 text-pretty">{video.description}</p>
              <a
                href="https://www.youtube.com/channel/UCXQy14KS46mSFyu1VzEUqXw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-display font-semibold text-royal hover:text-forest transition-colors"
              >
                More videos on our YouTube channel
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
            </Reveal>
            <YouTubeLite id={video.id} title={video.title} poster={video.poster} />
          </div>
        </section>
      )}

      <section className="bg-ivory py-s6 md:py-s8 border-b border-light-grey" aria-labelledby="how-heading">
        <div className="container-tbc">
          <Reveal>
            <h2 id="how-heading" className="section-heading text-balance mb-12">How it works.</h2>
          </Reveal>
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {p.steps.map((s, i) => (
              <li key={s.title} className="bg-white rounded-2xl border border-light-grey p-6 flex flex-col gap-3">
                <span className="font-display font-bold text-[40px] leading-none text-royal">{i + 1}</span>
                <h3 className="font-display font-bold text-[19px] text-ink">{s.title}</h3>
                <p className="text-[15px] text-mid-grey leading-relaxed">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="capabilities" className="bg-white py-s6 md:py-s8 border-b border-light-grey scroll-mt-24" aria-labelledby="cap-heading">
        <div className="container-tbc">
          <Reveal>
            <h2 id="cap-heading" className="section-heading text-balance mb-12">What {p.name} does.</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
            {p.capabilities.map((c) => (
              <div key={c.title} className="border-t-2 border-royal pt-5">
                <h3 className="font-display font-bold text-[18px] text-ink mb-2">{c.title}</h3>
                <p className="text-[15px] text-mid-grey leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionInk aria-labelledby="principles-heading">
        <div className="container-tbc">
          <h2 id="principles-heading" className="font-display font-bold text-[clamp(26px,3.5vw,38px)] text-white leading-[1.2] mb-12 max-w-2xl text-balance">How it is built.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {p.principles.map((x) => (
              <div key={x.title} className="border-t-2 border-gold pt-6">
                <h3 className="font-display font-bold text-[20px] text-white mb-3">{x.title}</h3>
                <p className="text-body text-white/75">{x.body}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionInk>

      <section className="bg-ivory py-s6 md:py-s8 border-b border-light-grey" aria-labelledby="who-heading">
        <div className="container-tbc grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 id="who-heading" className="section-heading text-balance mb-8">Who it is for.</h2>
            <ul className="space-y-4">
              {p.forWho.map((w) => (
                <li key={w} className="flex gap-3 text-[17px] text-ink leading-relaxed">
                  <span className="mt-2.5 w-2 h-2 rounded-full bg-royal shrink-0" aria-hidden="true" />
                  {w}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl border border-light-grey p-8 self-start">
            <h3 className="font-display font-bold text-[22px] text-ink mb-3">Getting started</h3>
            <p className="text-[16px] text-mid-grey leading-relaxed mb-6">{p.status}</p>
            <Link href="/book-consultation" className="btn-primary">Start a free trial</Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-s6 md:py-s8 border-b border-light-grey" aria-labelledby="faq-heading">
        <div className="container-tbc max-w-3xl">
          <h2 id="faq-heading" className="section-heading text-balance mb-8">Questions we are asked.</h2>
          <div className="space-y-3">
            {p.faqs.map((f) => (
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
    </>
  );
}

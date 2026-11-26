import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import SectionInk from "@/components/SectionInk";
import { SunscoutScene } from "@/components/Illustrations";
import { productPages, productPageBySlug } from "@/lib/productPages";
import YouTubeLite from "@/components/YouTubeLite";
import ProductThreeStepFlow from "@/components/ProductThreeStepFlow";
import { videoForProduct, videoSchema } from "@/lib/social";
import { getShortForProduct } from "@/lib/videos";

const BASE = "https://turbobytesconsulting.com";

// Re-render every 15 minutes so a product video appears once it goes public on YouTube.
export const revalidate = 900;

export function generateStaticParams() {
  return productPages.map((p) => ({ product: p.slug }));
}

export function generateMetadata({ params }: { params: { product: string } }): Metadata {
  const p = productPageBySlug(params.product);
  if (!p) return {};
  const ogImage = p.slug === "meridian" ? "/img/og-default.png" : `/img/og-${p.base ?? p.slug}.png`;
  return {
    title: { absolute: p.title },
    description: p.description,
    alternates: { canonical: `/products/${p.slug}` },
    openGraph: { title: { absolute: p.title }, description: p.description, url: `${BASE}/products/${p.slug}`, images: [{ url: ogImage, width: 1200, height: 630, alt: p.title }] },
    twitter: { card: "summary_large_image", images: [ogImage] },
  };
}

function getRelatedServicesForProduct(productSlug: string) {
  switch (productSlug) {
    case "sunscout":
    case "sunscout-europe":
      return [
        {
          title: "Custom Software Development",
          href: "/services/custom-software-development",
          blurb: "Bespoke internal systems, mapping tools, and operational workflows built for your team.",
        },
        {
          title: "Technology Consulting",
          href: "/services/technology-consulting",
          blurb: "Independent assessment of systems architecture, scalability, and technical strategy.",
        },
      ];
    case "distil":
      return [
        {
          title: "Custom Software Development",
          href: "/services/custom-software-development",
          blurb: "Engineered web applications and proposal engines tailored to complex engineering pricing rules.",
        },
        {
          title: "Business Process Automation",
          href: "/services/business-automation",
          blurb: "Automate manual calculations, document assembly, and approval routing across departments.",
        },
      ];
    case "meridian":
      return [
        {
          title: "Technology Consulting",
          href: "/services/technology-consulting",
          blurb: "Strategic diagnostic and systems architecture to map cross-department handoffs before platform rollout.",
        },
        {
          title: "Custom Software Development",
          href: "/services/custom-software-development",
          blurb: "Bespoke operational modules and bi-directional ERP integrations tailored to your floor workflows.",
        },
      ];
    case "vantage":
      return [
        {
          title: "Custom LLM & On-Premise AI",
          href: "/services/custom-llm",
          blurb: "Deploy private AI models on your own servers or secure private cloud without data leakage.",
        },
        {
          title: "AI Capability Building",
          href: "/services/ai-training",
          blurb: "Hands-on programmes that train your engineering and technical teams to work effectively with AI.",
        },
      ];
    case "cadence":
      return [
        {
          title: "Custom Software Development",
          href: "/services/custom-software-development",
          blurb: "Tailored manufacturing execution, ERP connectors, and production scheduling boards.",
        },
        {
          title: "Business Process Automation",
          href: "/services/business-automation",
          blurb: "Eliminate spreadsheet gaps between shop floor, sales order processing, and dispatch teams.",
        },
      ];
    case "assay":
      return [
        {
          title: "Business Process Automation",
          href: "/services/business-automation",
          blurb: "Replace paper logs and manual retyping with validated, digitised quality workflows.",
        },
        {
          title: "Custom Software Development",
          href: "/services/custom-software-development",
          blurb: "Regulated laboratory data pipelines, batch tracing, and audit-ready report generation.",
        },
      ];
    case "steward":
      return [
        {
          title: "Custom Software Development",
          href: "/services/custom-software-development",
          blurb: "Comprehensive asset tracking, ticketing, and warranty management systems.",
        },
        {
          title: "Business Process Automation",
          href: "/services/business-automation",
          blurb: "Automated renewal alerts, AMC scheduling, and technician dispatch pipelines.",
        },
      ];
    case "compass":
      return [
        {
          title: "Custom Software Development",
          href: "/services/custom-software-development",
          blurb: "Custom project accounting, client portal, and resource planning software.",
        },
        {
          title: "Business Process Automation",
          href: "/services/business-automation",
          blurb: "Connect timesheets, milestone billing, and expense tracking directly with accounting.",
        },
      ];
    case "relay":
      return [
        {
          title: "Custom Software Development",
          href: "/services/custom-software-development",
          blurb: "Bespoke dealer ordering systems, mobile web tools, and distribution portals.",
        },
        {
          title: "Business Process Automation",
          href: "/services/business-automation",
          blurb: "Connect WhatsApp dealer orders directly to your ERP, accounting, and warehouse dispatch.",
        },
      ];
    case "rapport":
      return [
        {
          title: "AI Applications",
          href: "/services/ai-applications",
          blurb: "Deploy conversational agents for client intake, enquiry classification, and instant replies.",
        },
        {
          title: "Business Process Automation",
          href: "/services/business-automation",
          blurb: "Route inbound enquiries to the right subject-matter expert with zero manual sorting.",
        },
      ];
    default:
      return [
        {
          title: "Custom Software Development",
          href: "/services/custom-software-development",
          blurb: "Software designed around your actual business processes, built, run, and maintained by us.",
        },
        {
          title: "Business Process Automation",
          href: "/services/business-automation",
          blurb: "Replace repetitive manual work and spreadsheet handoffs with reliable automated pipelines.",
        },
      ];
  }
}

export default function ProductLanding({ params }: { params: { product: string } }) {
  const p = productPageBySlug(params.product);
  if (!p) notFound();

  const art = p.base ?? p.slug;
  const video = videoForProduct(art);
  const shortVid = getShortForProduct(p.slug) || getShortForProduct(art);
  const relatedServices = getRelatedServicesForProduct(p.slug);

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
        { "@type": "ListItem", position: 3, name: p.breadcrumb ?? p.name, item: `${BASE}/products/${p.slug}` },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* ── HERO: LEAD WITH THE PRODUCT SHORT ── */}
      <section className="bg-forest overflow-hidden border-b border-light-grey">
        <div className="container-tbc py-s6 md:py-s8 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-center">
          <div>
            <p className="font-display font-semibold text-[15px] text-[#7FD1A6] mb-3">{p.name} · {p.eyebrow}</p>
            <h1 className="font-display font-bold text-[clamp(32px,4.5vw,54px)] text-white leading-[1.08] tracking-[-0.5px] mb-6 text-balance">{p.headline}</h1>
            <p className="text-body text-white/80 leading-relaxed max-w-2xl mb-8 text-pretty">{p.lead}</p>
            <div className="flex flex-wrap gap-4">
              {p.site ? (
                <a href={p.site.href} target="_blank" rel="noopener" className="btn-primary min-h-[48px] px-7 py-3 flex items-center justify-center">{p.site.label}</a>
              ) : (
                <Link href="/book-consultation" className="btn-primary min-h-[48px] px-7 py-3 flex items-center justify-center">Start a free trial</Link>
              )}
              <a href="#how-it-works" className="inline-flex items-center justify-center min-h-[48px] px-7 py-3 border border-white/40 text-white font-display font-semibold rounded-[6px] hover:bg-white/10 transition-colors">See how it works</a>
            </div>
          </div>

          <div className="flex justify-center">
            {shortVid ? (
              <div className="w-[260px] sm:w-[280px] bg-white/5 p-3 rounded-[16px] border border-white/15 shadow-2xl backdrop-blur-sm">
                <div className="text-center mb-2">
                  <span className="text-[12px] font-semibold text-[#7FD1A6] uppercase tracking-wider block">Watch Product Short</span>
                </div>
                <div className="w-full">
                  <YouTubeLite id={shortVid.id} title={shortVid.title} isShort />
                </div>
              </div>
            ) : art === "sunscout" ? (
              <div className="w-full relative aspect-[16/10] rounded-[8px] overflow-hidden ring-1 ring-white/10 bg-forest">
                <SunscoutScene />
              </div>
            ) : art === "meridian" ? (
              <div className="w-full relative aspect-[16/10] rounded-[8px] overflow-hidden ring-1 ring-white/10 bg-forest flex items-center justify-center p-8 text-white/90">
                <svg viewBox="0 0 240 240" className="w-48 h-48 max-w-full" aria-hidden="true">
                  {Array.from({ length: 6 }).map((_, i) => {
                    const a = -Math.PI / 2 + (i * Math.PI) / 3;
                    const b = -Math.PI / 2 + ((i + 1) * Math.PI) / 3;
                    const pt = (t: number) => [120 + 90 * Math.cos(t), 120 + 90 * Math.sin(t)];
                    const [x1, y1] = pt(a), [x2, y2] = pt(b);
                    return (
                      <g key={i}>
                        <path d={`M${x1} ${y1} L${x2} ${y2}`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity={0.55} />
                        <path d={`M120 120 L${x1} ${y1}`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity={0.35} />
                        <circle cx={x1} cy={y1} r="10" fill="#0C3D2A" stroke="currentColor" strokeWidth="2" />
                      </g>
                    );
                  })}
                  <circle cx="120" cy="120" r="14" fill="#1F8A5B" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
            ) : art === "distil" ? (
              <div className="w-full relative aspect-[16/10] rounded-[8px] overflow-hidden ring-1 ring-white/10">
                <Image
                  src="/img/videos/distil-intro.jpg"
                  alt="Distil proposal assembly system"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              </div>
            ) : (
              <div className="w-full relative aspect-[16/10] rounded-[8px] overflow-hidden ring-1 ring-white/10">
                <Image
                  src={`/img/og-${art}.png`}
                  alt={`${p.name} interface`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── 3-STEP FLOW: HOW IT WORKS ── */}
      <section id="how-it-works" className="bg-ivory py-s7 border-b border-light-grey scroll-mt-24">
        <div className="container-tbc">
          <ProductThreeStepFlow steps={p.steps} productName={p.name} />

          {/* Folded remaining steps if any */}
          {p.steps.length > 3 && (
            <div className="max-w-2xl mx-auto mt-6">
              <details className="group [&_summary::-webkit-details-marker]:hidden bg-white p-4 rounded-[8px] border border-light-grey">
                <summary className="cursor-pointer text-[14px] font-semibold text-[#167A4E] hover:underline flex items-center justify-between select-none">
                  <span>View all {p.steps.length} operational steps in detail</span>
                  <span className="group-open:rotate-180 transition-transform">↓</span>
                </summary>
                <div className="mt-3 pt-3 border-t border-light-grey space-y-3">
                  {p.steps.slice(3).map((s, idx) => (
                    <div key={s.title} className="text-[13px] text-mid-grey">
                      <span className="font-semibold text-ink">Step {idx + 4}: {s.title} — </span>
                      <span>{s.body}</span>
                    </div>
                  ))}
                </div>
              </details>
            </div>
          )}
        </div>
      </section>

      {/* ── LONG-FORM VIDEO (If present) ── */}
      {video && (
        <section className="bg-white py-s7 border-b border-light-grey" aria-labelledby="watch-heading">
          <div className="container-tbc grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-14 items-center">
            <div>
              <h2 id="watch-heading" className="section-heading text-balance mb-4">See {p.name} in action.</h2>
              <p className="text-[15px] text-mid-grey leading-relaxed mb-6 text-pretty">{video.description}</p>
              <a
                href="https://www.youtube.com/channel/UCXQy14KS46mSFyu1VzEUqXw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-display font-semibold text-[#167A4E] hover:underline"
              >
                More product videos on YouTube
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
            </div>
            <div className="bg-ivory p-3 rounded-[12px] border border-light-grey">
              <YouTubeLite id={video.id} title={video.title} poster={video.poster} />
            </div>
          </div>
        </section>
      )}

      {/* ── WHAT IT DOES (CAPABILITIES WITH FOLDED DETAIL) ── */}
      <section id="capabilities" className="bg-ivory py-s7 border-b border-light-grey scroll-mt-24" aria-labelledby="cap-heading">
        <div className="container-tbc">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 id="cap-heading" className="font-display font-semibold text-[clamp(24px,2.8vw,32px)] text-ink mb-2">
              Core Capabilities
            </h2>
            <p className="text-[15px] text-mid-grey">
              Engineered features built around real manufacturing, trading, and engineering workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {p.capabilities.slice(0, 6).map((c) => (
              <div key={c.title} className="bg-white border border-light-grey rounded-[8px] p-5 shadow-sm hover:border-[#167A4E]/50 transition-colors">
                <h3 className="font-display font-semibold text-[17px] text-ink mb-2">{c.title}</h3>
                <p className="text-[13px] text-mid-grey leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>

          {p.capabilities.length > 6 && (
            <div className="max-w-xl mx-auto mt-6">
              <details className="group [&_summary::-webkit-details-marker]:hidden bg-white p-4 rounded-[8px] border border-light-grey">
                <summary className="cursor-pointer text-[14px] font-semibold text-[#167A4E] hover:underline flex items-center justify-between select-none">
                  <span>View all {p.capabilities.length} capabilities</span>
                  <span className="group-open:rotate-180 transition-transform">↓</span>
                </summary>
                <div className="mt-3 pt-3 border-t border-light-grey grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {p.capabilities.slice(6).map((c) => (
                    <div key={c.title} className="text-[13px] text-mid-grey">
                      <span className="font-semibold text-ink block mb-0.5">{c.title}</span>
                      <span>{c.body}</span>
                    </div>
                  ))}
                </div>
              </details>
            </div>
          )}
        </div>
      </section>

      {/* ── HOW IT IS BUILT (PRINCIPLES FOLDED) ── */}
      <SectionInk aria-labelledby="principles-heading">
        <div className="container-tbc">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h2 id="principles-heading" className="font-display font-bold text-[clamp(24px,3vw,34px)] text-white mb-1">
                Architecture & Operating Principles
              </h2>
              <p className="text-white/70 text-[15px]">Zero hallucination risks, verified data sources, and client IP ownership.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {p.principles.map((x) => (
              <div key={x.title} className="bg-white/5 border border-white/10 rounded-[8px] p-6 backdrop-blur-xs">
                <h3 className="font-display font-semibold text-[18px] text-white mb-2">{x.title}</h3>
                <p className="text-body text-white/75 text-[14px] leading-relaxed">{x.body}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionInk>

      {/* ── WHO IT IS FOR & GETTING STARTED ── */}
      <section className="bg-ivory py-s7 border-b border-light-grey" aria-labelledby="who-heading">
        <div className="container-tbc grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 id="who-heading" className="font-display font-semibold text-[24px] text-ink mb-4">Who {p.name} is for</h2>
            <ul className="space-y-3">
              {p.forWho.map((w) => (
                <li key={w} className="flex gap-3 text-[15px] text-ink leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#167A4E] shrink-0" aria-hidden="true" />
                  {w}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-[8px] border border-light-grey p-6 sm:p-8 shadow-sm">
            <h3 className="font-display font-semibold text-[20px] text-ink mb-2">Getting started</h3>
            <p className="text-[14px] text-mid-grey leading-relaxed mb-6">{p.status}</p>
            {p.site ? (
              <>
                <a href={p.site.href} target="_blank" rel="noopener" className="btn-primary min-h-[44px] inline-flex items-center justify-center">{p.site.label}</a>
                <p className="mt-3 text-[13px] text-mid-grey leading-relaxed">{p.site.note}</p>
              </>
            ) : (
              <Link href="/book-consultation" className="btn-primary min-h-[44px] inline-flex items-center justify-center">Start a free trial</Link>
            )}
            <ul className="mt-6 pt-6 border-t border-light-grey space-y-2 text-[13px] text-mid-grey">
              <li className="flex items-center gap-2">
                <span className="text-[#167A4E] font-bold">✓</span>
                <span>30-day evaluation trial with full capabilities</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#167A4E] font-bold">✓</span>
                <span>Deployed on your own infrastructure or private cloud</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#167A4E] font-bold">✓</span>
                <span>No upfront setup fees or vendor lock-in</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── FAQS (Preserved Accordions) ── */}
      <section className="bg-white py-s7 border-b border-light-grey" aria-labelledby="faq-heading">
        <div className="container-tbc max-w-3xl">
          <div className="text-center mb-8">
            <h2 id="faq-heading" className="font-display font-semibold text-[clamp(24px,2.8vw,32px)] text-ink mb-2">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-3">
            {p.faqs.map((f) => (
              <details key={f.q} className="group border border-light-grey rounded-[8px] bg-ivory/50 p-5 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer font-display font-semibold text-ink text-[16px] select-none">
                  <span>{f.q}</span>
                  <span className="text-[#167A4E] text-[18px] transition-transform group-open:rotate-180" aria-hidden="true">
                    ↓
                  </span>
                </summary>
                <p className="mt-3 pt-3 border-t border-light-grey text-[14px] text-mid-grey leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED CONSULTING SERVICES ── */}
      <section className="bg-ivory py-s7 border-b border-light-grey">
        <div className="container-tbc">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="font-display font-semibold text-[22px] text-ink mb-2">
              Related Consulting & Engineering Advisory
            </h2>
            <p className="text-[14px] text-mid-grey">
              Need custom integrations, proprietary adaptations, or hands-on implementation? Our engineering team works directly with yours.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="p-5 bg-white rounded-[8px] border border-light-grey hover:border-[#167A4E] hover:shadow-sm transition-all group block"
              >
                <span className="font-display font-semibold text-[16px] text-ink group-hover:text-[#167A4E] transition-colors block mb-1">
                  {s.title} →
                </span>
                <p className="text-[13px] text-mid-grey leading-relaxed">
                  {s.blurb}
                </p>
              </Link>
            ))}
            <Link
              href="/"
              className="p-5 bg-white rounded-[8px] border border-light-grey hover:border-[#167A4E] hover:shadow-sm transition-all group block"
            >
              <span className="font-display font-semibold text-[16px] text-ink group-hover:text-[#167A4E] transition-colors block mb-1">
                Turbo Bytes Consulting Overview →
              </span>
              <p className="text-[13px] text-mid-grey leading-relaxed">
                Learn about our process-first approach, leadership, and full range of capabilities.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

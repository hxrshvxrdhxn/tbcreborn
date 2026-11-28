import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import YouTubeLite from "@/components/YouTubeLite";
import { liveVideos, videoSchema } from "@/lib/social";
import { getVideoById } from "@/lib/videos";

// Re-render every 15 minutes so a video appears on the site once it goes public on YouTube.
export const revalidate = 900;

const SITE = "https://turbobytesconsulting.com";
const DESC =
  "Software for founder-led businesses: Distil for proposals, Vantage for answers, Cadence for orders, Assay for QC, Steward for service, and Sunscout.";

export const metadata: Metadata = {
  title: { absolute: "Products: Distil, Vantage, Cadence & More | TBC" },
  description: DESC,
  alternates: { canonical: "/products" },
  openGraph: { title: "Products", description: DESC, url: `${SITE}/products`, images: [{ url: "/img/og-default.png", width: 1200, height: 630 }] },
};

const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

const ICONS: Record<string, JSX.Element> = {
  slate: (
    <svg viewBox="0 0 240 240" className="w-full h-full" aria-hidden="true">
      {[30, 55, 80, 105].map((r, i) => <circle key={r} cx="120" cy="120" r={r} {...stroke} opacity={1 - i * 0.18} />)}
      <circle cx="120" cy="120" r="6" fill="currentColor" />
      <path d="M120 120 L190 78" {...stroke} />
      <circle cx="171" cy="89" r="6" {...stroke} fill="#0C3D2A" />
    </svg>
  ),
  distil: (
    <svg viewBox="0 0 240 240" className="w-full h-full" aria-hidden="true">
      {[0, 1, 2, 3].map((i) => <rect key={i} x="40" y={150 - i * 34} width="160" height="22" rx="2" {...stroke} opacity={i === 3 ? 1 : 0.6} />)}
      <path d="M100 38 L114 52 L142 24" {...stroke} strokeWidth={4} />
    </svg>
  ),
  vantage: (
    <svg viewBox="0 0 240 240" className="w-full h-full" aria-hidden="true">
      <rect x="40" y="30" width="110" height="160" rx="3" {...stroke} opacity={0.7} />
      {[0, 1, 2, 3, 4].map((i) => <path key={i} d={`M58 ${58 + i * 24} H${i === 4 ? 100 : 132}`} {...stroke} opacity={0.45} />)}
      <circle cx="150" cy="140" r="34" {...stroke} strokeWidth={3} />
      <path d="M175 165 L205 195" {...stroke} strokeWidth={5} />
    </svg>
  ),
  meridian: (
    <svg viewBox="0 0 240 240" className="w-full h-full" aria-hidden="true">
      {Array.from({ length: 6 }).map((_, i) => {
        const a = -Math.PI / 2 + (i * Math.PI) / 3;
        const b = -Math.PI / 2 + ((i + 1) * Math.PI) / 3;
        const p = (t: number) => [120 + 90 * Math.cos(t), 120 + 90 * Math.sin(t)];
        const [x1, y1] = p(a), [x2, y2] = p(b);
        return (
          <g key={i}>
            <path d={`M${x1} ${y1} L${x2} ${y2}`} {...stroke} opacity={0.55} />
            <path d={`M120 120 L${x1} ${y1}`} {...stroke} opacity={0.35} />
            <circle cx={x1} cy={y1} r="10" {...stroke} fill="#0C3D2A" />
          </g>
        );
      })}
      <circle cx="120" cy="120" r="14" {...stroke} fill="#1F8A5B" />
    </svg>
  ),
  sunscout: (
    <svg viewBox="0 0 240 240" className="w-full h-full" aria-hidden="true">
      <circle cx="176" cy="62" r="20" {...stroke} />
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
        const a = (i * Math.PI) / 4;
        return <path key={i} d={`M${176 + 28 * Math.cos(a)} ${62 + 28 * Math.sin(a)} L${176 + 38 * Math.cos(a)} ${62 + 38 * Math.sin(a)}`} {...stroke} opacity={0.6} />;
      })}
      {[[34, 120, 60, 40], [104, 110, 54, 50], [40, 172, 80, 34], [132, 172, 70, 40]].map(([x, y, w, h], i) => (
        <rect key={i} x={x} y={y} width={w} height={h} rx="2" {...stroke} fill={i === 1 ? "#1F8A5B" : "none"} opacity={i === 1 ? 1 : 0.6} />
      ))}
      <path d="M24 100 L170 96 L214 214 L24 214 Z" {...stroke} strokeDasharray="6 6" opacity={0.8} />
    </svg>
  ),
  cadence: (
    <svg viewBox="0 0 240 240" className="w-full h-full" aria-hidden="true">
      {[0, 1, 2, 3].map((i) => <rect key={i} x="30 + i * 48" y="70" width="36" height="100" rx="3" {...stroke} opacity={0.55} />)}
      <rect x="36" y="82" width="24" height="18" rx="2" {...stroke} fill="#1F8A5B" />
      <rect x="84" y="112" width="24" height="18" rx="2" {...stroke} />
      <rect x="132" y="82" width="24" height="18" rx="2" {...stroke} />
      <path d="M30 196 H210" {...stroke} />
      <path d="M190 186 L210 196 L190 206" {...stroke} />
    </svg>
  ),
  assay: (
    <svg viewBox="0 0 240 240" className="w-full h-full" aria-hidden="true">
      <path d="M96 36 V100 L56 186 a14 14 0 0 0 13 20 H171 a14 14 0 0 0 13 -20 L144 100 V36" {...stroke} />
      <path d="M86 36 H154" {...stroke} />
      <path d="M72 160 H168" {...stroke} opacity={0.5} />
      <path d="M100 182 L114 196 L142 168" {...stroke} strokeWidth={4} />
    </svg>
  ),
  steward: (
    <svg viewBox="0 0 240 240" className="w-full h-full" aria-hidden="true">
      <circle cx="120" cy="120" r="34" {...stroke} />
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (i * Math.PI) / 4;
        return <path key={i} d={`M${120 + 34 * Math.cos(a)} ${120 + 34 * Math.sin(a)} L${120 + 50 * Math.cos(a)} ${120 + 50 * Math.sin(a)}`} {...stroke} strokeWidth={6} />;
      })}
      <circle cx="120" cy="120" r="12" {...stroke} fill="#1F8A5B" />
      <circle cx="120" cy="120" r="86" {...stroke} strokeDasharray="6 8" opacity={0.6} />
    </svg>
  ),
  compass: (
    <svg viewBox="0 0 240 240" className="w-full h-full" aria-hidden="true">
      <circle cx="120" cy="120" r="84" {...stroke} />
      <circle cx="120" cy="120" r="64" {...stroke} opacity={0.4} />
      <path d="M120 60 L136 120 L120 180 L104 120 Z" {...stroke} />
      <path d="M120 60 L136 120 L104 120 Z" {...stroke} fill="#1F8A5B" />
    </svg>
  ),
  relay: (
    <svg viewBox="0 0 240 240" className="w-full h-full" aria-hidden="true">
      <circle cx="120" cy="120" r="22" {...stroke} fill="#1F8A5B" />
      {[[50, 60], [190, 60], [40, 150], [200, 150], [120, 205]].map(([x, y], i) => (
        <g key={i}>
          <path d={`M120 120 L${x} ${y}`} {...stroke} opacity={0.5} />
          <rect x={x - 14} y={y - 14} width="28" height="28" rx="3" {...stroke} fill="#0C3D2A" />
        </g>
      ))}
    </svg>
  ),
  rapport: (
    <svg viewBox="0 0 240 240" className="w-full h-full" aria-hidden="true">
      <rect x="34" y="50" width="120" height="78" rx="10" {...stroke} />
      <path d="M60 128 L54 150 L82 128" {...stroke} />
      <rect x="96" y="110" width="110" height="70" rx="10" {...stroke} fill="#0C3D2A" />
      <path d="M128 145 L142 159 L172 129" {...stroke} strokeWidth={4} />
    </svg>
  ),
};

const PRODUCTS = [
  {
    id: "slate",
    name: "Slate",
    line: "An executive assistant for the people who lead.",
    short: "Reads how work moves through a business to give leadership early visibility before delays become critical.",
    body: [
      "Slate reads how work moves through a business: the timing, the routing and the follow-ups, not the content of private messages.",
      "It gives founders and leadership teams an early view of what needs their attention, before it turns into a problem.",
    ],
    href: "/services/slate",
    cta: "More about Slate",
  },
  {
    id: "distil",
    name: "Distil",
    line: "Complex proposals, assembled from verified parts.",
    short: "Assembles validated techno-commercial bids for engineering firms, tracing every figure back to source truth.",
    body: [
      "Built for engineering and manufacturing firms that send detailed techno-commercial proposals.",
      "Distil builds each proposal from approved sections, traces every figure back to its source, and holds a proposal back when something does not add up. The LLM drafts the wording; it never sets a number.",
    ],
    href: "/products/distil",
    cta: "More about Distil",
  },
  {
    id: "vantage",
    name: "Vantage",
    line: "Years of documents, turned into answers with sources.",
    short: "A private knowledge engine over catalogues, drawings, and manuals with exact page citations.",
    body: [
      "A private knowledge portal over your catalogues, drawings, manuals and notes.",
      "Ask a question in plain language and get an answer with the page it came from, so your team can check it in seconds.",
    ],
    href: "/products/vantage",
    cta: "More about Vantage",
  },
  {
    id: "meridian",
    name: "Meridian",
    line: "One operating system that connects every team.",
    short: "Makes department handoffs and approvals visible from customer enquiry to factory dispatch.",
    body: [
      "Meridian connects the handoffs between departments, from enquiry to dispatch, so everyone can see where work is waiting and who it is waiting on.",
      "It is built around approvals and handoffs. It does not replace your accounting system; it makes the work around it visible.",
    ],
    href: "/products/meridian",
    cta: "More about Meridian",
  },
  {
    id: "sunscout",
    name: "Sunscout",
    line: "Find the rooftops worth a proposal.",
    short: "Prospects, groups, and sizes industrial rooftop solar sites with automated tariff savings calculations.",
    body: [
      "A prospecting tool for rooftop solar companies that sell to factories and warehouses.",
      "Draw an industrial area and Sunscout finds the buildings, groups them into customer sites, sizes them in kWp, works out savings from your own tariff and cost inputs, and ranks the list for your sales team.",
    ],
    href: "/products/sunscout",
    cta: "More about Sunscout",
  },
  {
    id: "cadence",
    name: "Cadence",
    line: "Know where every order is, before the customer asks.",
    short: "Every manufacturing order from PO to dispatch on a single unified board with stage date tracking.",
    body: [
      "Every customer order from PO to dispatch on one board, with an owner and a date for each stage.",
      "Delays show up when the first stage slips, not on the promised date, and a customer update goes out in one tap when you choose.",
    ],
    href: "/products/cadence",
    cta: "More about Cadence",
  },
  {
    id: "assay",
    name: "Assay",
    line: "Every batch, on record. Every COA, from the data.",
    short: "Digitised batch records, QC tolerances, and automatic Certificate of Analysis generation.",
    body: [
      "Batch records, QC results, deviations and documents for food, chemical and nutraceutical manufacturers.",
      "Pass or fail is worked out against your specification, and certificates of analysis are generated from the recorded results.",
    ],
    href: "/products/assay",
    cta: "More about Assay",
  },
  {
    id: "steward",
    name: "Steward",
    line: "Look after every machine you have sold.",
    short: "Tracks installed equipment, service warranties, AMC renewals, and technician response clocks.",
    body: [
      "One record for every machine in the field, with its contract, visits and parts.",
      "Complaints get response clocks, preventive visits are scheduled from the contract, and renewals and spares are flagged ahead of time.",
    ],
    href: "/products/steward",
    cta: "More about Steward",
  },
  {
    id: "compass",
    name: "Compass",
    line: "Know which projects are slipping, and which are losing money.",
    short: "Live project health, consultant timesheets, fee-against-budget tracking, and period progress reporting.",
    body: [
      "Deliverables, client comments, timesheets and fee against hours for consultancies and design firms.",
      "Progress reports are drafted from the period's data, and partners see every project's health on one screen.",
    ],
    href: "/products/compass",
    cta: "More about Compass",
  },
  {
    id: "relay",
    name: "Relay",
    line: "Let your dealers order without calling the office.",
    short: "Mobile dealer ordering applying volume schemes, tiered pricing, and credit terms by rule.",
    body: [
      "A phone app for dealers and distributors with their prices, schemes, stock and dues.",
      "Schemes and credit are applied by rule as they order, and every order is tracked to delivery.",
    ],
    href: "/products/relay",
    cta: "More about Relay",
  },
  {
    id: "rapport",
    name: "Rapport",
    line: "No enquiry left waiting. No client document chased twice.",
    short: "Unified commercial inbox with response clocks, secure document intake, and automated quotes.",
    body: [
      "One inbox for every enquiry, with an owner, a response clock and a next step.",
      "Proposals from your price list, client documents through a secure link, and renewals listed months ahead.",
    ],
    href: "/products/rapport",
    cta: "More about Rapport",
  },
];

export default function ProductsPage() {
  const videos = liveVideos();
  const toolsShort = getVideoById("2Jdxao-PJuE");

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${SITE}/products#webpage`,
        url: `${SITE}/products`,
        name: "Software Products by Turbo Bytes Consulting",
        description: DESC,
        publisher: { "@id": `${SITE}/#organization` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE },
          { "@type": "ListItem", position: 2, name: "Products", item: `${SITE}/products` },
        ],
      },
      {
        "@type": "ItemList",
        name: "Products by Turbo Bytes Consulting",
        itemListElement: PRODUCTS.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: { "@type": "SoftwareApplication", name: p.name, description: p.line, applicationCategory: "BusinessApplication", url: `${SITE}/products#${p.id}`, publisher: { "@id": `${SITE}/#organization` } },
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* ── HERO ── */}
      <section className="bg-forest py-s7 border-b border-light-grey">
        <div className="container-tbc">
          <h1 className="font-display font-semibold text-[clamp(34px,5vw,56px)] text-white leading-[1.05] tracking-[-0.02em] max-w-3xl mb-6 text-balance">
            Products we build and run.
          </h1>
          <p className="text-[19px] text-white/80 leading-relaxed max-w-2xl text-pretty mb-8">
            Tools that run on your own LLM. Each one started as a real problem inside a growing business, and each can work alone or share one private model of your company.
          </p>
          <nav aria-label="Products" className="flex flex-wrap gap-2.5">
            {PRODUCTS.map((p) => (
              <a
                key={p.id}
                href={`#${p.id}`}
                className="inline-flex items-center min-h-[40px] px-3.5 py-1.5 rounded-full border border-white/25 bg-white/10 text-white text-[14px] font-medium hover:bg-white/20 hover:border-white transition-colors"
              >
                {p.name}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* ── 3-STEP FLOW STRIP: HOW OUR PRODUCTS FIT ── */}
      <section className="bg-ivory py-s6 border-b border-light-grey">
        <div className="container-tbc">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="font-display font-semibold text-[clamp(22px,2.6vw,30px)] text-ink mb-2">
              The Operational Architecture
            </h2>
            <p className="text-[15px] text-mid-grey">
              Tools connecting each stage of your commercial lifecycle into a unified operating layer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-5 rounded-[8px] border border-light-grey shadow-sm">
              <span className="text-[11px] font-bold text-[#167A4E] bg-[#167A4E]/10 px-2 py-0.5 rounded block w-fit mb-2">Stage 01</span>
              <h3 className="font-display font-semibold text-[17px] text-ink mb-1">Enquiry & Proposals</h3>
              <p className="text-[13px] text-mid-grey leading-relaxed">
                Rapport, Sunscout, and Distil capturing customer leads, sizing opportunities, and generating verified bids.
              </p>
            </div>
            <div className="bg-white p-5 rounded-[8px] border border-light-grey shadow-sm">
              <span className="text-[11px] font-bold text-[#167A4E] bg-[#167A4E]/10 px-2 py-0.5 rounded block w-fit mb-2">Stage 02</span>
              <h3 className="font-display font-semibold text-[17px] text-ink mb-1">Execution & Quality</h3>
              <p className="text-[13px] text-mid-grey leading-relaxed">
                Cadence, Assay, and Vantage managing live floor handoffs, lab QC compliance, and technical documentation.
              </p>
            </div>
            <div className="bg-white p-5 rounded-[8px] border border-light-grey shadow-sm">
              <span className="text-[11px] font-bold text-[#167A4E] bg-[#167A4E]/10 px-2 py-0.5 rounded block w-fit mb-2">Stage 03</span>
              <h3 className="font-display font-semibold text-[17px] text-ink mb-1">Distribution & Retention</h3>
              <p className="text-[13px] text-mid-grey leading-relaxed">
                Relay, Steward, and Compass powering dealer orders, field asset tracking, and project margins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED SHORT ── */}
      {toolsShort && (
        <section className="bg-white py-s6 border-b border-light-grey">
          <div className="container-tbc max-w-3xl">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_200px] gap-8 items-center bg-ivory p-6 rounded-[12px] border border-light-grey">
              <div>
                <span className="text-[12px] font-semibold text-[#167A4E] block mb-1">Video Overview</span>
                <h3 className="font-display font-semibold text-[22px] text-ink mb-2">{toolsShort.title}</h3>
                <p className="text-[14px] text-mid-grey leading-relaxed mb-4">
                  A rapid visual tour of seven purpose-engineered software tools solving distinct operational bottlenecks.
                </p>
                <Link href="/book-consultation" className="btn-primary inline-flex text-[14px] py-2 px-4">
                  Request a live walkthrough
                </Link>
              </div>
              <div className="w-[180px] mx-auto">
                <YouTubeLite id={toolsShort.id} title={toolsShort.title} isShort />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── PRODUCT CARDS (Clean + Folded Detail) ── */}
      <section className="bg-ivory py-s7 border-b border-light-grey">
        <div className="container-tbc">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-display font-semibold text-[clamp(26px,3vw,36px)] text-ink mb-2">
              Explore All {PRODUCTS.length} Software Systems
            </h2>
            <p className="text-[16px] text-mid-grey">
              Production software ready for deployment on your own infrastructure or secure cloud.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((p) => (
              <div
                key={p.id}
                id={p.id}
                className="scroll-mt-24 bg-white border border-light-grey rounded-[8px] p-6 shadow-sm flex flex-col justify-between hover:border-[#167A4E]/50 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-display font-bold text-[24px] text-ink">{p.name}</h3>
                    <div className="w-10 h-10 text-royal flex-shrink-0">{ICONS[p.id]}</div>
                  </div>
                  <p className="font-display font-medium text-[15px] text-[#167A4E] leading-snug mb-2">{p.line}</p>
                  <p className="text-[14px] text-mid-grey leading-relaxed mb-4">{p.short}</p>
                </div>

                <div>
                  {/* Folded full description */}
                  <details className="group [&_summary::-webkit-details-marker]:hidden border-t border-light-grey pt-3 mb-4">
                    <summary className="cursor-pointer text-[13px] font-semibold text-[#167A4E] hover:underline flex items-center justify-between select-none">
                      <span>Full system overview</span>
                      <span className="group-open:rotate-180 transition-transform">↓</span>
                    </summary>
                    <div className="mt-2.5 pt-2 border-t border-light-grey/80 text-[13px] text-mid-grey space-y-2">
                      {p.body.map((b) => (
                        <p key={b}>{b}</p>
                      ))}
                    </div>
                  </details>

                  <div className="flex items-center justify-between pt-2 border-t border-light-grey/60">
                    <Link href="/book-consultation" className="text-[13px] font-semibold text-ink hover:text-[#167A4E]">
                      Book demo
                    </Link>
                    {p.href && (
                      <Link href={p.href} className="text-[13px] font-semibold text-[#167A4E] hover:underline flex items-center gap-1">
                        <span>{p.cta}</span>
                        <span>→</span>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VIDEOS IN ACTION ── */}
      {videos.length > 0 && (
        <section className="bg-white py-s7 border-b border-light-grey" aria-labelledby="watch-heading">
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videos.map(videoSchema)) }} />
          <div className="container-tbc">
            <Reveal>
              <h2 id="watch-heading" className="section-heading text-balance mb-4">See them in action.</h2>
              <p className="text-[17px] text-mid-grey leading-relaxed measure-68 mb-10">Short films on how our products work, from first click to finished result.</p>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {videos.map((v) => (
                <div key={v.id} className="flex flex-col gap-4">
                  <YouTubeLite id={v.id} title={v.title} poster={v.poster} />
                  {v.product && (
                    <Link href={`/products/${v.product}`} className="font-display font-semibold text-royal hover:text-royal-mid">
                      More about {v.product === "sunscout" ? "Sunscout" : "Distil"} →
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

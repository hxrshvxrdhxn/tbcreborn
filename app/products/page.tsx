import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

const SITE = "https://turbobytesconsulting.com";
const DESC =
  "Products built by Turbo Bytes Consulting: Slate, an executive assistant for leaders; Distil, a proposal engine; Vantage, a knowledge portal with sources; and Meridian, a connected operating system.";

export const metadata: Metadata = {
  title: "Products: Slate, Distil, Vantage and Meridian",
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
};

const PRODUCTS = [
  {
    id: "slate",
    name: "Slate",
    line: "An executive assistant for the people who lead.",
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
    body: [
      "Built for engineering and manufacturing firms that send detailed techno-commercial proposals.",
      "Distil builds each proposal from approved sections, traces every figure back to its source, and holds a proposal back when something does not add up. The LLM drafts the wording; it never sets a number.",
    ],
  },
  {
    id: "vantage",
    name: "Vantage",
    line: "Years of documents, turned into answers with sources.",
    body: [
      "A private knowledge portal over your catalogues, drawings, manuals and notes.",
      "Ask a question in plain language and get an answer with the page it came from, so your team can check it in seconds.",
    ],
    href: "/work/ai-knowledge-portal.html",
    cta: "See the case study",
  },
  {
    id: "meridian",
    name: "Meridian",
    line: "One operating system that connects every team.",
    body: [
      "Meridian connects the handoffs between departments, from enquiry to dispatch, so everyone can see where work is waiting and who it is waiting on.",
      "It is built around approvals and handoffs. It does not replace your accounting system; it makes the work around it visible.",
    ],
  },
];

export default function ProductsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Products by Turbo Bytes Consulting",
    itemListElement: PRODUCTS.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: { "@type": "SoftwareApplication", name: p.name, description: p.line, applicationCategory: "BusinessApplication", url: `${SITE}/products#${p.id}`, publisher: { "@id": `${SITE}/#organization` } },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="bg-forest py-s7">
        <div className="container-tbc">
          <h1 className="font-display font-semibold text-[clamp(34px,5vw,56px)] text-white leading-[1.05] tracking-[-0.02em] max-w-3xl mb-6 text-balance">
            Products we build and run.
          </h1>
          <p className="text-[19px] text-white/80 leading-relaxed max-w-2xl text-pretty">
            Alongside client work, we build our own products. Each one started as a real problem inside a real business.
          </p>
          <nav aria-label="Products" className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
            {PRODUCTS.map((p) => (
              <a key={p.id} href={`#${p.id}`} className="text-white/90 hover:text-white text-[17px] font-medium underline-offset-4 hover:underline">
                {p.name}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {PRODUCTS.map((p, i) => (
        <section key={p.id} id={p.id} className={`scroll-mt-24 py-s7 border-b border-light-grey ${i % 2 ? "bg-white" : "bg-ivory"}`}>
          <div className="container-tbc grid grid-cols-1 md:grid-cols-[1fr_280px] gap-10 md:gap-16 items-center">
            <Reveal>
              <h2 className="font-display font-semibold text-[clamp(40px,5vw,64px)] text-ink leading-none tracking-[-0.03em] mb-4">{p.name}</h2>
              <p className="font-display font-medium text-[clamp(20px,2.2vw,26px)] text-royal leading-snug mb-6 text-balance">{p.line}</p>
              {p.body.map((b) => (
                <p key={b} className="text-[17px] text-mid-grey leading-relaxed measure-68 mb-4">{b}</p>
              ))}
              <div className="flex flex-wrap gap-4 mt-6">
                <Link href="/book-consultation" className="btn-primary">Request a walkthrough</Link>
                {p.href && (
                  <Link href={p.href} className="inline-flex items-center font-semibold text-royal hover:text-royal-mid px-2">
                    {p.cta} →
                  </Link>
                )}
              </div>
            </Reveal>
            <div className="text-royal w-48 h-48 md:w-full md:h-auto md:aspect-square mx-auto">{ICONS[p.id]}</div>
          </div>
        </section>
      ))}
    </>
  );
}

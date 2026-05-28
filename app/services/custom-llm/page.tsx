import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Custom LLM Training & On-Premise AI Deployment",
  description:
    "Train a custom Large Language Model on your company data. Deployed on your infrastructure. Your data never leaves. Turbo Bytes Consulting.",
  alternates: { canonical: "/services/custom-llm" },
  openGraph: {
    title: "Custom LLM Training & On-Premise AI Deployment",
    description:
      "Train a custom Large Language Model on your company data. Deployed on your infrastructure. Your data never leaves. Turbo Bytes Consulting.",
    url: "https://turbobytesconsulting.com/services/custom-llm",
    images: [{ url: "/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Custom LLM Training & On-Premise AI Deployment",
    description:
      "Train a custom Large Language Model on your company data. Deployed on your infrastructure. Your data never leaves. Turbo Bytes Consulting.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Custom LLM & On-Premise AI Deployment",
  provider: {
    "@type": "Organization",
    name: "Turbo Bytes Consulting",
    url: "https://turbobytesconsulting.com",
  },
  url: "https://turbobytesconsulting.com/services/custom-llm",
  description:
    "Custom Large Language Model designed, trained, and deployed for a single organisation. On-premise or private cloud. Data never leaves your controlled environment.",
};

const deliverables = [
  "Custom Large Language Model designed, trained, and deployed for a single organisation",
  "Data ingestion: SOPs, policies, product documentation, client records, training materials, communications",
  "On-premise or private cloud deployment — data never leaves the client's controlled environment",
  "Persistent AI knowledge base: employees query in natural language, receive precise answers instantly",
  "Onboarding acceleration: new staff fully operational in hours rather than weeks",
  "Internal meeting reduction: the LLM answers what previously required multi-person discussions",
  "Optional client-facing deployment: gated or public AI assistant trained on your product knowledge",
  "Live ROI Dashboard: hours recovered, meetings replaced, and cost equivalence vs traditional methods",
  "Ongoing model updates, fine-tuning, and data expansion as the organisation grows",
];

export default function CustomLLMPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* ── BREADCRUMB ── */}
      <nav aria-label="Breadcrumb" className="bg-ivory border-b border-light-grey">
        <div className="container-tbc py-3">
          <ol className="flex items-center gap-2 font-sans text-[13px] text-mid-grey">
            <li>
              <Link href="/" className="hover:text-ink transition-colors duration-150">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-light-grey select-none">
              /
            </li>
            <li>
              <Link href="/services" className="hover:text-ink transition-colors duration-150">
                Services
              </Link>
            </li>
            <li aria-hidden="true" className="text-light-grey select-none">
              /
            </li>
            <li className="text-ink font-semibold">
              Custom LLM &amp; On-Premise AI
            </li>
          </ol>
        </div>
      </nav>

      {/* ── PAGE HERO ── */}
      <section className="bg-ivory py-16">
        <div className="container-tbc">
          <span className="font-display font-bold text-[13px] text-gold tracking-[1px] uppercase block mb-4">
            Practice 03
          </span>
          <h1 className="font-display font-bold text-[clamp(30px,4.5vw,52px)] text-ink leading-[1.1] tracking-[-0.5px] max-w-3xl mb-5">
            Custom LLM &amp; On-Premise AI Deployment
          </h1>
          <p className="font-sans text-[18px] text-mid-grey leading-relaxed max-w-2xl mb-8">
            Your organisation&apos;s intelligence layer. Trained on your knowledge.
            Running on your infrastructure. Data never leaves your controlled
            environment.
          </p>
          <div className="inline-flex items-center gap-2 bg-white border border-light-grey rounded px-4 py-2 shadow-card">
            <span
              className="w-2 h-2 rounded-full bg-gold flex-shrink-0"
              aria-hidden="true"
            />
            <span className="font-display font-semibold text-[13px] text-ink">
              Setup: 4–8 weeks · ROI in 60–90 days
            </span>
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className="bg-white py-16">
        <div className="container-tbc">
          <div className="max-w-4xl">
            <span className="eyebrow">WHAT&apos;S INCLUDED</span>
            <hr className="gold-rule mb-6" />
            <h2 className="font-display font-bold text-[clamp(24px,3vw,32px)] text-ink leading-[1.2] mb-10">
              Your organisation&apos;s knowledge, made instantly accessible.
            </h2>

            <ul className="space-y-5">
              {deliverables.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-4 border-b border-light-grey pb-5 last:border-0 last:pb-0"
                >
                  <span
                    className="mt-[6px] flex-shrink-0 w-2 h-2 rounded-full bg-gold"
                    aria-hidden="true"
                  />
                  <span className="font-sans text-[16px] text-ink leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── WHY THIS MATTERS ── */}
      <section className="bg-ink py-16">
        <div className="container-tbc">
          <div className="max-w-3xl">
            <span className="eyebrow text-gold">WHY THIS MATTERS</span>
            <hr className="gold-rule mb-6" />
            <h2 className="font-display font-bold text-[clamp(24px,3vw,32px)] text-white leading-[1.2] mb-6">
              The knowledge that lives in your organisation is your most
              underutilised asset.
            </h2>
            <p className="font-sans text-[17px] text-white/70 leading-relaxed">
              Most organisations have accumulated years of documented knowledge
              — procedures, client histories, product specifications, compliance
              frameworks, training materials — that is either locked in
              inaccessible formats or simply not being used. A Custom LLM
              transforms that accumulated knowledge into an always-available,
              instantly-queryable intelligence layer accessible to every member
              of your team. New employees onboard in hours. Internal meetings
              that exist to transfer knowledge become unnecessary. Client
              queries are answered faster and more accurately. The ROI is
              measurable, the deployment is private, and the competitive
              advantage is permanent.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="bg-royal py-16 text-center">
        <div className="container-tbc">
          <hr className="gold-rule gold-rule--center mb-8" />
          <h2 className="font-display font-bold text-[clamp(22px,3vw,32px)] text-white leading-[1.2] mb-4">
            Ready to deploy your organisation&apos;s intelligence layer?
          </h2>
          <p className="font-sans text-[17px] text-white/80 mb-10">
            Request a consultation. We will respond within one business day.
          </p>
          <Link href="/book-consultation" className="btn-gold">
            Request a Consultation
          </Link>
          <hr className="gold-rule gold-rule--center mt-10" />
        </div>
      </section>
    </>
  );
}

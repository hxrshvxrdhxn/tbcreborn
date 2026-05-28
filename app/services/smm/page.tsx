import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Social Media Management",
  description:
    "Precision-engineered content. Platform-native strategy. AI-driven execution. Full annual content calendars across every platform.",
  alternates: { canonical: "/services/smm" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Social Media Management",
  provider: {
    "@type": "Organization",
    name: "Turbo Bytes Consulting",
    url: "https://turbobytesconsulting.com",
  },
  url: "https://turbobytesconsulting.com/services/smm",
  description:
    "Precision-engineered content. Platform-native strategy. AI-driven execution. Full annual content calendars across every platform.",
};

const deliverables = [
  "Full annual content strategy and calendar — every platform, every post, planned 12 months ahead",
  "AI-powered content creation: articles, posts, carousels, reels, stories, and long-form pieces",
  "Original image creation and short and long-form video production",
  "Active platform management: Instagram, LinkedIn, Facebook, Twitter/X, YouTube, TikTok",
  "Monthly performance analytics, audience intelligence, and strategy recalibration",
  "Dedicated Social Media Manager as single point of contact and client-facing lead",
  "SEO-optimised captions, strategic hashtag research, and trend integration",
  "Competitor landscape monitoring and content benchmarking",
  "Crisis communication protocol and rapid-response capability",
];

export default function SMMPage() {
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
            <li className="text-ink font-semibold">Social Media Management</li>
          </ol>
        </div>
      </nav>

      {/* ── PAGE HERO ── */}
      <section className="bg-ivory py-16">
        <div className="container-tbc">
          <span className="font-display font-bold text-[13px] text-gold tracking-[1px] uppercase block mb-4">
            Practice 01
          </span>
          <h1 className="font-display font-bold text-[clamp(32px,4.5vw,52px)] text-ink leading-[1.1] tracking-[-0.5px] max-w-3xl mb-5">
            Social Media Management
          </h1>
          <p className="font-sans text-[18px] text-mid-grey leading-relaxed max-w-2xl mb-8">
            Precision-engineered content. Platform-native strategy. AI-driven
            execution.
          </p>
          <div className="inline-flex items-center gap-2 bg-white border border-light-grey rounded px-4 py-2 shadow-card">
            <span
              className="w-2 h-2 rounded-full bg-gold flex-shrink-0"
              aria-hidden="true"
            />
            <span className="font-display font-semibold text-[13px] text-ink">
              Onboarding: 5 days · First calendar: 10 days
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
              Everything required to own your digital presence.
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
              AI-driven content at scale. Without compromise.
            </h2>
            <p className="font-sans text-[17px] text-white/70 leading-relaxed">
              The volume, consistency, and quality of content required to
              compete on social media today is beyond the capacity of any
              single person or small team working manually. Our AI-native
              production model allows us to operate at enterprise scale —
              delivering a full year of platform-specific, audience-intelligent
              content for organisations of any size. Every piece of content is
              created with strategic intent, reviewed by a human specialist,
              and calibrated monthly against performance data. Your brand voice
              does not get diluted. Your audience grows. Your competitors
              notice.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="bg-royal py-16 text-center">
        <div className="container-tbc">
          <hr className="gold-rule gold-rule--center mb-8" />
          <h2 className="font-display font-bold text-[clamp(22px,3vw,32px)] text-white leading-[1.2] mb-4">
            Ready to build your AI-powered social presence?
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

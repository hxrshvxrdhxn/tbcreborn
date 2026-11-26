# Brief: reposition TBC as a technology consultancy (26 Nov 2026)

Owner decision (Harsh, 26 Nov). This brief overrides older copy that presents TBC as a software or website shop.

## Who we are now

TBC is a technology consultancy. We sit with the MD and the team, find the processes that cost the business the most,
and fix them: with automation, with software built for that exact need, and with full digital transformation.
We also make companies findable in search and in AI answers (SEO, AEO, GEO), for our clients and for ourselves.

Proof point (owner-approved, use as stated, no client names): **in pilot engagements we have taken work that needed a
40-person technology team and run it with 4 people plus machines.** Never inflate it, never attach a client name.

## Offer, in this order

1. **Technology consulting and process automation**: diagnostic, process mapping, automation of the costliest process,
   build-run-maintain.
2. **Custom software for any specific need**: we build what the process needs, not a template.
3. **AEO, SEO and GEO readiness** (new, full section, see below).
4. **Digital transformation**: end-to-end, from diagnostic to running systems and trained teams.
5. **Products**: Distil (proposal engine for engineering firms), Sunscout (C&I rooftop solar prospecting), Meridian
   (all-in-one platform: our tools become modules of one edition sharing a per-company "company brain"), plus the
   range: Cadence, Assay, Steward, Compass, Relay, Rapport, Vantage.

Products are proof that we ship. Consulting leads.

## Site changes

1. **Home**: keep the hero H1 exactly ("The intelligence layer your business has been missing."), keep the banner
   animation and layout. Update the sub-copy and the sections under the hero to the offer order above. Do NOT put the 40-to-4 proof point on the
   homepage (owner, 26 Nov); it belongs on /digital-transformation only. Add a "Is your business visible in AI answers?" band linking to the
   new AEO/SEO/GEO page.
2. **Navigation**: Services | Products | AEO & SEO | Work | Insights (blog + how-to) | About | Contact. Keep
   "Book a consultation" as the CTA.
3. **/services**: re-order around the five offers. Fold thin or off-strategy pages (web-development, mobile-app,
   mvp) into "Custom software" with 301 redirects; do not delete URLs that have traffic without a redirect.
4. **New product page /products/meridian** (currently only an anchor). Explain editions, modules and the company
   brain: brain data is per company, never pooled, exportable in full, and the brain never sets a price, quantity,
   spec, date or test result by itself (a person approves suggested rules).
5. **New /digital-transformation page**: phases (diagnose, design, build, run, hand over), what the client gets at
   each phase, the 40-to-4 pilot result, FAQ.
6. **New AEO/SEO/GEO section** (see next part).
7. **About**: consultancy story, how we work (sit with the MD, measure the cost, fix it, run it).
8. Every service and product page: 4–6 FAQs (FAQPage JSON-LD), a clear CTA, links to two related pages.

## The AEO / SEO / GEO service (new pillar)

Pages:
- `/services/aeo-seo-geo` (pillar) plus `/services/seo`, `/services/answer-engine-optimisation`,
  `/services/generative-engine-optimisation`, and `/free-ai-visibility-check` (lead magnet form).

Explain in plain words, with enough depth that a buyer and an AI assistant can both quote us:
- **What each is**: SEO (ranking in Google and Bing), AEO (being the direct answer: featured snippets, People Also Ask,
  voice), GEO (being named and cited by ChatGPT, Gemini, Perplexity, Copilot and Google AI Overviews).
- **What we do (the method)**:
  1. Visibility audit: technical SEO (crawl, indexing, Core Web Vitals, canonicals, sitemaps), on-page, and an
     "AI answers" test where we ask the assistants the questions your buyers ask and record who gets named.
  2. Entity and trust groundwork: Organization/Service/Product/FAQ/Breadcrumb schema, consistent business details
     across Google Business Profile and directories, author and company pages, llms.txt.
  3. Answer-first content: pages built around the long questions buyers type and ask AI (question as heading, a
     40–60 word direct answer, then detail, sources and proof).
  4. Citations and mentions: listings, industry directories, partner pages, digital PR, so assistants have
     independent sources that name you.
  5. Measurement and monthly iteration: Search Console, AI-answer share tracking for a fixed question set, leads.
- **What results to expect (honest)**: technical fixes show in weeks; rankings and AI citations build over 3–6
  months; we report impressions, clicks, positions, share of AI answers for an agreed question set, and enquiries.
  **No guaranteed rankings or guaranteed AI mentions**, say so explicitly.
- **Who it is for**: B2B firms, manufacturers, consultancies, clinics, real estate, D2C; India, Middle East, APAC.
- **What we have done**: our own site as the worked example (structured data, llms.txt, answer-first guides, 600+
  indexed pages). Only real facts; no invented client results or testimonials.
- **Engagement shape**: audit (fixed scope), then a monthly programme. No prices on the site.
- FAQs (8+): "What is GEO?", "How is AEO different from SEO?", "How do I get my company mentioned by ChatGPT?",
  "How long does SEO take in India?", "Do you guarantee rankings?" (no), "What do you need from us?", etc.

## Markets (owner correction, 26 Nov 09:10)

TBC works worldwide, including the UK and the US. India, the Middle East and Asia-Pacific are only the current
marketing focus (outreach, some keyword targeting). Site copy must never say or imply we serve only those regions:
no regional line on the homepage; elsewhere say "clients in India, the Middle East, Asia-Pacific, the UK and the US"
or leave region out. India-specific SEO landing pages may keep "India" in their title.

## Wording (owner, 26 Nov 09:11)

- Do not say "LLMs built around your processes". Say software, automated processes, or models built (or trained)
  around how the business works. Use "LLM" only where we literally mean a language model (the private LLM service).
- Say that we build in-house wherever we can, to reduce outside dependencies (fewer third-party tools, data stays
  with the client).

## Rules (unchanged)

Green and white palette only; no small uppercase labels; banner animation untouched; British spelling; no
exclamation marks; no prices; no client names (no Mectech, no Smart Roof Solar); no "MSME Registered", "AI-Native" or
"Greater Noida, India" taglines (a postal address is fine); no social media management; no unsupported claims or fake
testimonials; hosting is our own server (no Vercel config).

## Done means

`npx tsc --noEmit` and `npm run build` pass; sitemap, llms.txt and JSON-LD updated for new pages; redirects for any
moved URL; commit `feat(site): consulting-first repositioning and AEO/SEO/GEO service`; rebase on origin/master; push;
report a table of pages added/changed.

# Brief: less text, more visuals (26 Nov 2026)

Owner feedback: "The entire website is too much content." Show, don't tell: diagrams, flows, light animation and our
own YouTube videos throughout. Keep the hero banner and its animation exactly as they are, and keep the homepage H1.

## Rules for every page

1. **Visible copy roughly halves.** Each section is a heading, at most two short sentences, and one visual.
   No section shows more than about 60 words before a visual or a "Read more".
2. **Keep the knowledge for search and AI answers, but fold it.** Long explanations, method detail and FAQs go
   into `<details>`/accordion blocks ("How we do it", "FAQs"). The text stays in the HTML (good for SEO/AEO/GEO)
   but is not on screen until opened. Do not delete FAQ content or JSON-LD.
3. **One visual per section**, chosen from:
   - Flow diagram (inline SVG, our green/white palette, readable on mobile, labelled with real step names).
   - Before/after comparison (two columns: "Today" vs "With TBC").
   - Step strip with icons (3–5 steps).
   - Short video (see the library below).
   - Small numeric callouts only where the number is real and owner-approved.
4. **Animation is restrained**: draw-on for SVG flow lines, fade/slide-in on scroll, under 400 ms, runs once,
   honours `prefers-reduced-motion`. Content is fully visible without animation (no opacity-0 waiting states).
5. **Video embeds use the existing `components/YouTubeLite`** (poster first, the youtube-nocookie iframe loads on
   click). No autoplaying iframes, no raw iframes on page load: they wreck Core Web Vitals. Add a 9:16 variant
   of YouTubeLite for Shorts. Fixed aspect-ratio boxes so nothing shifts.
6. Palette, no uppercase labels, British spelling, no exclamation marks, no prices, no client names: unchanged.

## Page plan

- **Home** (target: about 300 visible words below the hero): hero (unchanged) → four offer cards with an icon and
  one line each (Consulting & automation, Custom software, AEO/SEO/GEO, Digital transformation) → one "How we
  work" flow diagram (Sit with the MD → Map the costly process → Build → Run and maintain) → "Who we are" video →
  product strip (Distil, Sunscout, Meridian, then the range) each with its short → CTA.
- **Services pages**: flow diagram of the method at the top, before/after block, one relevant video, details folded.
- **AEO/SEO/GEO pillar**: a diagram of "where buyers look now" (Google results, AI Overviews, ChatGPT/Gemini/
  Perplexity) and the five-step method as an animated step strip; FAQs folded.
- **Digital transformation**: five-phase flow (Diagnose, Design, Build, Run, Hand over) as the main visual; the
  40-to-4 pilot result sits here only, never on the homepage.
- **Products**: lead with the product short, then a 3-step "how it works" flow, then folded detail.
- **Blog/how-to**: leave text-led (they are articles), but add a related video where one exists.

## Video library (our channel, @TurboBytesConsulting) — UPDATED 26 Nov 09:12

Owner rule: only videos that match the site's green-and-white look go on the website. The dark-theme explainer
videos and the dark "story" Shorts are NOT used anywhere on the site. Allowed are the light illustrated product
videos and the colourful product-tool Shorts.

Allowed, long-form (16:9):
| ID | Title | Use on |
|---|---|---|
| a2w512JHBOk | Distil: from client enquiry to full techno-commercial proposal | /products/distil |
| EGbDr3hVZso | Sunscout: find the factory roofs worth a solar proposal | /products/sunscout |

Allowed, Shorts (9:16):
| ID | Title | Use on |
|---|---|---|
| 2Jdxao-PJuE | Seven tools for growing businesses | Home product strip, /products |
| -zvS0dC-i_g | Find the factory roofs worth calling first (Sunscout) | /products/sunscout |
| caeVTTvIeBA | Know where every order is, before the customer asks (Cadence) | /products/cadence, business automation |
| oN6o2yVjj6s | Same call, ten times a day: where is my order? (Cadence) | /products/cadence |
| vZhZx26WRfw | Certificates of analysis that cannot be wrong (Assay) | /products/assay |
| JVQpsEoQj6I | One wrong digit on a certificate of analysis (Assay) | /products/assay |
| pT75RslibHg | Every machine you have sold, looked after (Steward) | /products/steward |
| qGHNSOB7XUg | You sold the machine. Where is it now? (Steward) | /products/steward |
| 3CFiEcEUu2E | Know which projects are losing money, early (Compass) | /products/compass |
| Q_zgKCKy78A | Let your dealers order without calling the office (Relay) | /products/relay |
| TdFAafcYByM | No enquiry left waiting (Rapport) | /products/rapport |
| AVOYy42CqBk | Every answer, with the page it came from (Vantage) | /products/vantage |

Removed (dark theme, do not use): LtEm_wP8Ubw, Kqyajyw2YnI, 2LVF44PlFo4, NO_3xrJ8Y3M, AeNl7CY3ES0, uYaMWnzlR4U,
mLCNwzJCIP0, 7QUDMIqvXs4, icNNbuWIxHA, yILtgvhpmt0, 2rZluNrMeLE, jTPgyN0Yf0Q. Pages that lose a video get a diagram
or step strip instead. Home: no "who we are" video; use the Seven tools Short in the product strip.

## Also

- CSP clean-up in `next.config.mjs`: drop the leftover `vercel.live`, `vitals.vercel-insights.com` and
  `va.vercel-scripts.com` entries (we no longer host on Vercel). Keep youtube-nocookie in frame-src.
- Mobile first: check every diagram at 390 px wide.

## Done means

`npx tsc --noEmit` and `npm run build` pass; Lighthouse mobile performance not worse than before on home and one
service page; commits split by area (home, services, AEO pillar, products, CSP); rebase and push; report a table:
page, words visible before/after, visuals added.

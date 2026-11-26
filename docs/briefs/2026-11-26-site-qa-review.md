# Site QA review: make the website top notch (26 Nov 2026)

Owner: "review the entire website: all journeys, user experience, pages, clicks, animations, smoothness, mobile,
cross-device, cross-browser, security, anti-scraping, proper UI and UX, positive and negative flows."

## Already checked (live site, 26 Nov ~10:15 IST)

Crawl of all 626 sitemap URLs: every page 200, one H1 each, titles/descriptions/canonicals present, no duplicate
titles or descriptions, no images without alt, all JSON-LD parses, no page slower than 1.5 s server-side.
Security headers present (HSTS, X-Frame-Options DENY, nosniff, referrer and permissions policy, CSP); admin, mobile
and cron APIs answer 401; empty form posts answer 400; probes like /.env get nothing.

## Fix list (do all of these)

Done by Claude in the commit after b76bfd6 (do not redo): item 1 via 301 redirects in next.config.mjs (the links still
live in the post bodies in the database; clean them in blog-admin later), item 2 on the contact page, and the root
cause of items 3 and 7: `.btn-ghost-white` was used on 11 buttons but never defined, so those buttons rendered
invisible. It is now defined in globals.css. Still check the rest of the site for other uppercase labels.

1. **Broken internal links (3)**:
   - `/blog/the-hidden-cost-of-ai-readiness-why-your-data-strategy-comes-before-your-ai-strategy` (404), linked from
     `/blog/building-ai-first-culture-what-changes-what-stays`.
   - `/blog/agentic-ai-why-your-next-hire-might-not-be-human` (404), linked from
     `/blog/ai-for-operations-where-intelligence-moves-the-needle`.
   - `/blog/test-draft-1` (404, and a test post name must never appear on the site), linked from
     `/how-to/how-to-evaluate-and-onboard-new-suppliers-systematically`.
   Point each at a live relevant page or remove the link. Add a build-time check that fails on internal links to
   unknown slugs.
2. **Contact page**: the small uppercase labels "PHONE", "EMAIL", "WHATSAPP", "ADDRESS" break the owner rule (no small
   uppercase labels). Sentence case, normal tracking. Search the whole site for any other `uppercase` /
   `tracking-wide` small labels and fix them too.
3. **AEO/SEO/GEO pillar hero**: the secondary "Book a consultation" link is almost invisible (dark text on dark
   green). Fix contrast on every dark hero. The right half of that hero is empty; add a light visual or let the
   text block breathe.
4. **Headings**: mixed styles. Home uses sentence case with a full stop ("What we do."); service pages use Title
   Case ("Three Distinct Channels", "The Five-Step AI & Search Visibility Method"). Pick sentence case everywhere.
5. **Plain language** (owner wants humanised, professional copy, no jargon): rewrite lines like "crawl
   technicals", "entity consensus", "domain authority & crawl depth", "authoritative citations", "zero-click answer
   cards" into plain business English. Keep proper terms (SEO, schema, Search Console) where a buyer expects them.
6. **Home "Proof that we ship" row**: the Distil card has a large empty area while the other two cards carry tall
   Shorts; make the three cards balanced (Distil: use the light illustrated Distil video a2w512JHBOk or a diagram).
   The Meridian card shows the "Seven tools" Short with the caption "Seven tools for growing businesses", which
   reads as a mismatch; give Meridian its own visual and keep Seven tools in the range strip.
7. **Home closing CTA**: the "Book a consultation" button sits left of centre under a centred heading. Centre it.
8. **Footer**: the Services column mixes services and products (and still lists Slate). Split into Services and
   Products columns, drop retired items, keep it short.
9. **/blog index is 659 KB of HTML**: paginate (e.g. 24 per page) or load more on scroll; keep every post
   reachable for crawlers through pagination links.
10. **CSP still allows 'unsafe-eval'**: remove it if the build works without it (test every page and the admin).
    Add `Cross-Origin-Opener-Policy: same-origin`.

## Test suite to add and run (Playwright, in the repo)

Run against **production read-only** for navigation, layout and negative flows, and against **local dev** for any
flow that submits real data (never create leads in production).

- **Browsers and devices**: Chromium, Firefox and WebKit (Safari engine); iPhone 14, Pixel 7, iPad Mini, desktop
  1366 and 1920.
- **Journeys**: home → service → contact; home → product → book a consultation; blog index → post → related post;
  how-to search; AEO pillar → free AI visibility check; mobile menu open/close and every nav link; footer links;
  404 page; back/forward.
- **Checks per page**: no horizontal scroll at 390 px, no console errors, no failed requests, no layout shift on
  load (CLS < 0.1), tap targets at least 44 px, sticky header never covers headings on anchor jumps, animations
  respect prefers-reduced-motion, videos load only on click.
- **Forms, negative**: empty submit, bad email, too-long text, script tags in fields (must be shown as text, never
  executed), honeypot filled (silently dropped), rapid repeat submits (rate limit message, no crash), double-click
  on submit (one request).
- **Forms, positive (local only)**: valid contact, valid AI visibility check, how-to request: success message, row
  saved, one email queued.
- **Accessibility**: axe-core on the 15 main pages, no serious or critical issues; keyboard-only run through the
  main journeys with visible focus.
- **Performance**: Lighthouse mobile on home, services, AEO pillar, one product, one blog post: performance 90+,
  accessibility 95+, best practices 95+, SEO 100. Fix the biggest offenders.

Save screenshots of every page × device to `qa/screenshots/` (gitignored) and write `docs/qa/2026-11-26-report.md`
with: what was tested, what failed, what was fixed, what remains. Commits split by area; tsc and build must pass;
rebase and push.

## Rules (unchanged)

Green and white palette; no small uppercase labels; hero banner, its animation and the homepage H1 untouched; British
spelling; no exclamation marks; no prices; no client names; only green-and-white videos; global markets wording;
"every team, from the MD to the interns"; no test data in production.

// Industry landing pages for TBC's core buyers. Plain data so the page component, sitemap
// and llms.txt read from one source. Every statement here describes how we work or the
// problems these businesses commonly have; no client results are claimed.

export type IndustryProcess = { name: string; symptom: string; fix: string };
export type Industry = {
  slug: string;
  name: string;
  title: string; // <title>, ≤ 60 chars
  description: string; // meta description, ≤ 160 chars
  headline: string;
  lead: string;
  processes: IndustryProcess[];
  faqs: { q: string; a: string }[];
};

export const industries: Industry[] = [
  {
    slug: "manufacturing",
    name: "Manufacturing",
    title: "Software for Manufacturers in Delhi NCR | TBC",
    description:
      "We find the process that slows your factory down, from quotes to dispatch and stock, and turn it into software we build, run and maintain.",
    headline: "Software for manufacturers, built around how your factory actually runs.",
    lead:
      "Quotes that wait on one estimator. Dispatch planned over WhatsApp. Stock figures nobody fully trusts. We start with the process that costs you most, learn it on the shop floor, and turn it into software your team will use.",
    processes: [
      { name: "Quotations and proposals", symptom: "Each quote takes days and depends on one senior person who knows the costing.", fix: "Costing rules written down once, rates kept current, and a quote drafted in minutes for a person to check." },
      { name: "Order to dispatch", symptom: "Nobody can say where an order is without phone calls to stores, production and transport.", fix: "One board showing every order from confirmation to invoice, updated as work happens." },
      { name: "Stock and reorder", symptom: "Material runs out mid-batch, while other items sit for months.", fix: "Reorder points per item from real usage and supplier lead times, watched every day." },
      { name: "Batch traceability", symptom: "Finding which batch went to which customer takes a day of digging.", fix: "Raw material lots, production batches and dispatches linked at the time they happen." },
      { name: "Machine downtime", symptom: "Short stops are never recorded, so the biggest causes stay hidden.", fix: "Every stop logged with a reason in a few taps, summarised weekly for the plant head." },
      { name: "Reports for the MD", symptom: "The same five figures are typed into WhatsApp by hand every morning.", fix: "Those figures sent to your phone automatically, before nine." },
    ],
    faqs: [
      { q: "Do we have to replace our ERP or Tally?", a: "No. We usually build around what you already use and connect to it, so accounts keep working as they do today." },
      { q: "Where do LLMs fit in a factory?", a: "Reading documents such as purchase orders and drawings, answering questions from your own manuals, and drafting first versions. Prices, quantities and specifications always come from your rules, never from a model." },
      { q: "How long does a first project take?", a: "Most single-process projects go live in six to ten weeks, starting with a few days on your shop floor to learn how the work really runs." },
      { q: "Who looks after the software afterwards?", a: "We do. AMC and maintenance stay with us, so there is one team to call when your process changes." },
    ],
  },
  {
    slug: "distribution",
    name: "Distribution and trading",
    title: "Software for Distributors in Delhi NCR | TBC",
    description:
      "Orders on WhatsApp, stock that does not match, late payments. We turn the process that costs your distribution business most into software we run.",
    headline: "Software for distributors who have outgrown WhatsApp and spreadsheets.",
    lead:
      "Orders arrive as voice notes and photos. The warehouse says 40, the system says 60. A few customers hold most of the overdue money. We fix one process at a time, starting with the one that costs you most.",
    processes: [
      { name: "Order capture", symptom: "Orders come in on WhatsApp and are retyped by hand, with mistakes in the typing.", fix: "Orders read from the chat into a draft that a person confirms, so nothing is typed twice." },
      { name: "Stock accuracy", symptom: "System stock and shelf stock drift apart until a promised order cannot ship.", fix: "Movements recorded where they happen, with cycle counts that show where the drift starts." },
      { name: "Price lists", symptom: "Sales uses three versions of the price list, and margins leak one order at a time.", fix: "One current price list with every change dated, used directly when quoting." },
      { name: "Receivables", symptom: "Everyone knows who pays late, but credit terms never change.", fix: "Promised and paid dates tracked per customer, with reminders and a weekly overdue view." },
      { name: "Field sales visits", symptom: "The day's visits exist only as an evening WhatsApp message.", fix: "A thirty-second check-in per shop with the order and a photo, so areas and trends are visible." },
      { name: "Expiry and batches", symptom: "Short-expiry stock is found too late to move it.", fix: "Expiry dates tracked per batch, with stock to move flagged weeks ahead." },
    ],
    faqs: [
      { q: "Can our customers keep ordering on WhatsApp?", a: "Yes. We keep the channel your customers like and remove the retyping behind it." },
      { q: "Will this work with Tally or our current billing?", a: "Yes. We connect to the accounting system you already use rather than replacing it." },
      { q: "How long does a first project take?", a: "Most single-process projects go live in six to ten weeks, starting with time in your office and warehouse." },
      { q: "Who looks after the software afterwards?", a: "We do. AMC and maintenance stay with us, so there is one team to call when things change." },
    ],
  },
];

export const industryBySlug = (slug: string) => industries.find((i) => i.slug === slug);

// Centralized video library for Turbo Bytes Consulting YouTube channel (@TurboBytesConsulting).
// Contains both long-form videos (16:9) and Shorts (9:16) for embedding via YouTubeLite.

export type VideoItem = {
  id: string;
  title: string;
  description?: string;
  poster?: string;
  kind: "video" | "short";
  pages?: string[];
  product?: string;
};

export const longFormVideos: Record<string, VideoItem> = {
  LtEm_wP8Ubw: {
    id: "LtEm_wP8Ubw",
    title: "Turbo Bytes Consulting: who we are and what we do",
    description: "An introduction to how we sit with every team from leadership to the interns, diagnose costly friction, and engineer custom systems in-house.",
    kind: "video",
    pages: ["home", "about"],
  },
  Kqyajyw2YnI: {
    id: "Kqyajyw2YnI",
    title: "How to Pick the First Process to Put Into Software",
    description: "A framework for identifying the single operational process whose automation delivers immediate ROI.",
    kind: "video",
    pages: ["technology-consulting", "business-automation", "digital-transformation"],
  },
  "2LVF44PlFo4": {
    id: "2LVF44PlFo4",
    title: "Order to Invoice: Finding the Handovers That Cost You a Week",
    description: "Mapping the hidden delays between sales orders, production floors, and dispatch invoices.",
    kind: "video",
    pages: ["business-automation", "cadence"],
  },
  NO_3xrJ8Y3M: {
    id: "NO_3xrJ8Y3M",
    title: "Where LLMs Actually Help a Manufacturing Business (and Where They Don't)",
    description: "Practical reality check on deploying generative AI in industrial operations.",
    kind: "video",
    pages: ["custom-software-development", "custom-llm", "industries-manufacturing"],
  },
  AeNl7CY3ES0: {
    id: "AeNl7CY3ES0",
    title: "Six Questions to Ask Before Any Software Project",
    description: "Essential scoping questions to protect business owners against project overrun and wasted capital.",
    kind: "video",
    pages: ["custom-software-development", "technology-consulting"],
  },
  a2w512JHBOk: {
    id: "a2w512JHBOk",
    title: "Distil: from client enquiry to full techno-commercial proposal",
    description: "Assembling verified engineering bids and bills of materials in minutes.",
    poster: "/img/videos/distil-intro.jpg",
    kind: "video",
    product: "distil",
  },
  EGbDr3hVZso: {
    id: "EGbDr3hVZso",
    title: "Sunscout: find the factory roofs worth a solar proposal",
    description: "Screening industrial belts to identify high-yield commercial rooftop solar opportunities.",
    poster: "/img/videos/sunscout-intro.jpg",
    kind: "video",
    product: "sunscout",
  },
};

export const shortVideos: Record<string, VideoItem> = {
  "2Jdxao-PJuE": {
    id: "2Jdxao-PJuE",
    title: "Seven tools for growing businesses",
    kind: "short",
    pages: ["home", "products"],
  },
  uYaMWnzlR4U: {
    id: "uYaMWnzlR4U",
    title: "Complex proposals, assembled from verified parts (Distil)",
    kind: "short",
    product: "distil",
  },
  mLCNwzJCIP0: {
    id: "mLCNwzJCIP0",
    title: "Most proposal mistakes are copy and paste",
    kind: "short",
    product: "distil",
  },
  "-zvS0dC-i_g": {
    id: "-zvS0dC-i_g",
    title: "Find the factory roofs worth calling first (Sunscout)",
    kind: "short",
    product: "sunscout",
  },
  caeVTTvIeBA: {
    id: "caeVTTvIeBA",
    title: "Know where every order is, before the customer asks (Cadence)",
    kind: "short",
    product: "cadence",
  },
  vZhZx26WRfw: {
    id: "vZhZx26WRfw",
    title: "Certificates of analysis that cannot be wrong (Assay)",
    kind: "short",
    product: "assay",
  },
  pT75RslibHg: {
    id: "pT75RslibHg",
    title: "Every machine you have sold, looked after (Steward)",
    kind: "short",
    product: "steward",
  },
  "3CFiEcEUu2E": {
    id: "3CFiEcEUu2E",
    title: "Know which projects are losing money, early (Compass)",
    kind: "short",
    product: "compass",
  },
  Q_zgKCKy78A: {
    id: "Q_zgKCKy78A",
    title: "Let your dealers order without calling the office (Relay)",
    kind: "short",
    product: "relay",
  },
  TdFAafcYByM: {
    id: "TdFAafcYByM",
    title: "No enquiry left waiting (Rapport)",
    kind: "short",
    product: "rapport",
  },
  AVOYy42CqBk: {
    id: "AVOYy42CqBk",
    title: "Every answer, with the page it came from (Vantage)",
    kind: "short",
    product: "vantage",
  },
  "7QUDMIqvXs4": {
    id: "7QUDMIqvXs4",
    title: "Work gets lost between departments",
    kind: "short",
    pages: ["business-automation", "digital-transformation"],
  },
  icNNbuWIxHA: {
    id: "icNNbuWIxHA",
    title: "The dashboard nobody opens",
    kind: "short",
    pages: ["technology-consulting"],
  },
  yILtgvhpmt0: {
    id: "yILtgvhpmt0",
    title: "The spreadsheet that ran out of rows",
    kind: "short",
    pages: ["custom-software-development"],
  },
  "2rZluNrMeLE": {
    id: "2rZluNrMeLE",
    title: "Copy-paste is a job",
    kind: "short",
    pages: ["business-automation"],
  },
  jTPgyN0Yf0Q: {
    id: "jTPgyN0Yf0Q",
    title: "WhatsApp for business",
    kind: "short",
    pages: ["relay", "rapport"],
  },
};

export const allVideos: Record<string, VideoItem> = {
  ...longFormVideos,
  ...shortVideos,
};

export function getVideoById(id: string): VideoItem | undefined {
  return allVideos[id];
}

export function getShortForProduct(productSlug: string): VideoItem | undefined {
  return Object.values(shortVideos).find((v) => v.product === productSlug);
}

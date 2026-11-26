// Centralized video library for Turbo Bytes Consulting YouTube channel (@TurboBytesConsulting).
// Contains only green-and-white style videos matching the site's brand palette (updated 26 Nov).
// All dark-theme videos have been removed.

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
    pages: ["products", "cadence", "business-automation"],
  },
  oN6o2yVjj6s: {
    id: "oN6o2yVjj6s",
    title: "Same call, ten times a day: where is my order? (Cadence)",
    kind: "short",
    product: "cadence",
  },
  vZhZx26WRfw: {
    id: "vZhZx26WRfw",
    title: "Certificates of analysis that cannot be wrong (Assay)",
    kind: "short",
    product: "assay",
  },
  JVQpsEoQj6I: {
    id: "JVQpsEoQj6I",
    title: "One wrong digit on a certificate of analysis (Assay)",
    kind: "short",
    product: "assay",
  },
  pT75RslibHg: {
    id: "pT75RslibHg",
    title: "Every machine you have sold, looked after (Steward)",
    kind: "short",
    product: "steward",
  },
  qGHNSOB7XUg: {
    id: "qGHNSOB7XUg",
    title: "You sold the machine. Where is it now? (Steward)",
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

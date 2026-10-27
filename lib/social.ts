// TBC's social profiles and published YouTube videos. One source for the footer, the product pages
// and the Organization schema, so a new profile or video is added in one place.

export type SocialProfile = { name: string; href: string; handle: string };

export const socialProfiles: SocialProfile[] = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/tbcofficial/", handle: "in/tbcofficial" },
  { name: "YouTube", href: "https://www.youtube.com/channel/UCXQy14KS46mSFyu1VzEUqXw", handle: "TBC" },
  { name: "Instagram", href: "https://www.instagram.com/turbobytesconsulting/", handle: "@turbobytesconsulting" },
  { name: "X", href: "https://x.com/social_TBC", handle: "@social_TBC" },
  { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61587117418569", handle: "Turbo Bytes Consulting" },
];

export type SiteVideo = {
  id: string; // YouTube video id
  title: string;
  description: string;
  poster: string; // local 1280x720 poster, so no third-party request until the visitor presses play
  uploadDate: string; // ISO date
  publishAt: string; // ISO time the video goes public on YouTube; hidden on the site until then
  duration: string; // ISO 8601 duration
  product?: string; // product page slug this video belongs on
};

export const siteVideos: SiteVideo[] = [
  {
    id: "EGbDr3hVZso",
    title: "Sunscout: find the factory roofs worth a solar proposal",
    description:
      "How Sunscout turns an industrial area into a ranked list of factory rooftops, sized in kWp, with savings from your own numbers.",
    poster: "/img/videos/sunscout-intro.jpg",
    uploadDate: "2026-10-27",
    publishAt: "2026-10-27T06:00:00Z",
    duration: "PT2M13S",
    product: "sunscout",
  },
  {
    id: "a2w512JHBOk",
    title: "Distil: from client enquiry to full techno-commercial proposal",
    description:
      "How Distil reads an enquiry, selects approved sections, prices them from your cost master and assembles the full proposal for an engineer to check.",
    poster: "/img/videos/distil-intro.jpg",
    uploadDate: "2026-10-28",
    publishAt: "2026-10-28T04:00:00Z",
    duration: "PT2M46S",
    product: "distil",
  },
];

// Only videos that are already public on YouTube, so the site never embeds a scheduled or private one.
export const liveVideos = (now: number = Date.now()) => siteVideos.filter((v) => Date.parse(v.publishAt) <= now);

export const videoForProduct = (slug: string) => liveVideos().find((v) => v.product === slug);

export const videoSchema = (v: SiteVideo) => ({
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: v.title,
  description: v.description,
  thumbnailUrl: `https://turbobytesconsulting.com${v.poster}`,
  uploadDate: v.uploadDate,
  duration: v.duration,
  contentUrl: `https://www.youtube.com/watch?v=${v.id}`,
  embedUrl: `https://www.youtube-nocookie.com/embed/${v.id}`,
  publisher: { "@id": "https://turbobytesconsulting.com/#organization" },
});

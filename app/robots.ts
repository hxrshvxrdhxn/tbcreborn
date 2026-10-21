import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const disallow = ["/api/", "/admin", "/blog-admin", "/login"];
  const aiBots = [
    "GPTBot",
    "OAI-SearchBot",
    "ClaudeBot",
    "PerplexityBot",
    "Google-Extended",
  ];

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow,
      },
      ...aiBots.map((bot) => ({
        userAgent: bot,
        allow: "/",
        disallow,
      })),
    ],
    sitemap: "https://turbobytesconsulting.com/sitemap.xml",
  };
}

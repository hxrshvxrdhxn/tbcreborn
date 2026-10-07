/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  experimental: {
    serverComponentsExternalPackages: ['@prisma/client', 'prisma'],
    outputFileTracingIncludes: {
      '/*': ['./prisma/dev.db'],
      '/api/*': ['./prisma/dev.db']
    }
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Prevent clickjacking
          { key: "X-Frame-Options", value: "DENY" },
          // Prevent MIME-type sniffing
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Legacy XSS filter (belt-and-braces)
          { key: "X-XSS-Protection", value: "1; mode=block" },
          // Referrer policy — send origin only on same-site, nothing cross-origin
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // Permissions policy — disable unused browser features
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=()",
          },
          // DNS prefetch
          { key: "X-DNS-Prefetch-Control", value: "on" },
          // HSTS
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          // Content Security Policy
          {
            key: "Content-Security-Policy",
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.clarity.ms https://*.googletagmanager.com https://www.google-analytics.com https://assets.calendly.com https://vercel.live; style-src 'self' 'unsafe-inline'; frame-src https://calendly.com https://www.google.com https://www.googletagmanager.com https://vercel.live; img-src 'self' data: https: blob:; connect-src 'self' https://vitals.vercel-insights.com https://va.vercel-scripts.com https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://*.clarity.ms https://c.bing.com https://vercel.live;"
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      { source: "/services/smm", destination: "/services", permanent: true },
      // Old site pages still in search indexes (found 3 Oct 2026)
      { source: "/faq", destination: "/", permanent: true },
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/services-1", destination: "/services", permanent: true },
      { source: "/f/best-tech-stacks-for-non-tech-founders", destination: "/blog", permanent: true },
      { source: "/blogs-1/f/best-tech-stacks-for-non-tech-founders", destination: "/blog", permanent: true },
      {
        source: "/blogs-1/f/:slug",
        destination: "/blog/:slug",
        permanent: true,
      },
      {
        source: "/f/:slug",
        destination: "/blog/:slug",
        permanent: true,
      },
      {
        source: "/blogs-1",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/post/:slug",
        destination: "/blog/:slug",
        permanent: true,
      },
      {
        source: "/blog-1/:slug*",
        destination: "/blog",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */

/**
 * Content Security Policy & Security Headers
 * These protect against XSS, clickjacking, MIME sniffing, and other common attacks.
 * CHANGE_HERE: Adjust CSP directives if you embed third-party scripts (e.g. analytics, fonts)
 */
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline';
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  font-src 'self' https://fonts.gstatic.com;
  img-src 'self' blob: data: https:;
  connect-src 'self';
  frame-ancestors 'none';
  base-uri 'self';
  form-action 'self';
`.replace(/\n/g, " ");

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy,
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig = {
  experimental: {
    serverActions: {
      /* CHANGE_HERE: Update allowed origin to your production domain */
      allowedOrigins: ["localhost:3000", "yourdomain.com"],
      /* Reject bodies larger than 32KB — prevents payload flooding on contact form */
      bodySizeLimit: "32kb",
    },
  },

  images: {
    /* CHANGE_HERE: Add external image hostnames if you serve project screenshots from a CDN */
    remotePatterns: [
      // Example: { protocol: "https", hostname: "res.cloudinary.com" },
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        pathname: '/**',
      },
    ],
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },

  // Strict TypeScript & ESLint enforcement
  typescript: { ignoreBuildErrors: false },
  eslint: { ignoreDuringBuilds: false },
};

// Fixed the export line below:
export default nextConfig;
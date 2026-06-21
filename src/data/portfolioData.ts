/**
 * ============================================================
 * CENTRAL PORTFOLIO DATA FILE
 * All personal data lives here. Search for CHANGE_HERE comments.
 * ============================================================
 */

// ─── PERSONAL INFO ───────────────────────────────────────────
export const personalInfo = {
  /* CHANGE_HERE: Replace with your full name */
  name: "Alex Morgan",

  /* CHANGE_HERE: Replace with your professional title/tagline */
  title: "Full-Stack Engineer & Security Architect",

  /* CHANGE_HERE: Replace with a 1-2 sentence professional summary */
  summary:
    "I build fast, secure, and elegant web systems — from pixel-perfect interfaces to hardened backend infrastructure. Obsessed with performance, clean code, and zero-trust principles.",

  /* CHANGE_HERE: Replace with your location */
  location: "San Francisco, CA",

  /* CHANGE_HERE: Replace with your work email */
  email: "alex@example.com",

  /* CHANGE_HERE: Replace with your phone number or remove the key */
  phone: "+1 (555) 000-0000",

  /* CHANGE_HERE: Update path if you rename the file in /public */
  resumePath: "/resume.pdf",

  /* CHANGE_HERE: Replace with your profile image path in /public/images/ */
  profileImage: "/images/profile.jpg",
};

// ─── SOCIAL LINKS ────────────────────────────────────────────
export const socialLinks = [
  {
    label: "GitHub",
    /* CHANGE_HERE: Replace with your GitHub profile URL */
    url: "https://github.com/yourusername",
    icon: "github",
  },
  {
    label: "LinkedIn",
    /* CHANGE_HERE: Replace with your LinkedIn profile URL */
    url: "https://linkedin.com/in/yourprofile",
    icon: "linkedin",
  },
  {
    label: "Twitter",
    /* CHANGE_HERE: Replace with your Twitter/X profile URL */
    url: "https://twitter.com/yourhandle",
    icon: "twitter",
  },
];

// ─── ABOUT / BIO ─────────────────────────────────────────────
export const aboutBio = {
  /* CHANGE_HERE: Replace with your professional bio paragraphs */
  paragraphs: [
    "With over 6 years building production systems at scale, I specialize in React/Next.js frontends paired with battle-tested Node.js or Go backends. My work sits at the intersection of performance engineering and application security.",
    "Before going independent, I led frontend infrastructure at a Series B fintech startup, reducing bundle sizes by 60% and eliminating critical XSS vectors across a 200k-user platform. I hold certifications in AWS Solutions Architecture and Offensive Security.",
    "Outside the terminal, I contribute to open-source security tooling, write about web performance on my blog, and mentor junior engineers through local coding bootcamps.",
  ],

  /* CHANGE_HERE: Replace with your career milestones */
  milestones: [
    { year: "2024", event: "Led security audit for 3 SaaS platforms — zero CVEs post-launch" },
    { year: "2023", event: "Launched open-source rate-limiter used by 1,200+ projects" },
    { year: "2022", event: "Promoted to Senior Engineer at FinFlow Inc." },
    { year: "2021", event: "Completed OSCP certification" },
    { year: "2019", event: "First production Next.js app — 98 Lighthouse score at launch" },
  ],
};

// ─── SKILLS ──────────────────────────────────────────────────
/* CHANGE_HERE: Add, remove, or rename skill categories and items */
export const skillCategories = [
  {
    category: "Frontend",
    color: "from-violet-500 to-purple-600",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 92 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Framer Motion", level: 80 },
      { name: "WebGL / Three.js", level: 65 },
    ],
  },
  {
    category: "Backend",
    color: "from-cyan-500 to-teal-600",
    skills: [
      { name: "Node.js / Express", level: 93 },
      { name: "PostgreSQL", level: 88 },
      { name: "Redis", level: 78 },
      { name: "GraphQL", level: 75 },
      { name: "Go", level: 60 },
    ],
  },
  {
    category: "DevOps & Security",
    color: "from-orange-500 to-red-600",
    skills: [
      { name: "AWS / Vercel", level: 85 },
      { name: "Docker / K8s", level: 80 },
      { name: "OWASP / Pen Testing", level: 82 },
      { name: "CI/CD (GitHub Actions)", level: 88 },
      { name: "Terraform", level: 65 },
    ],
  },
];

// ─── CERTIFICATES ─────────────────────────────────────────────
/* CHANGE_HERE: Replace with your actual certificates */
export const certificates = [
  {
    title: "AWS Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    date: "March 2024",
    /* CHANGE_HERE: Replace with real verification URL from Credly/AWS */
    verifyUrl: "https://credly.com/badges/your-badge-id",
    /* CHANGE_HERE: Replace with badge image path in /public/images/ */
    badgeImage: "/images/cert-aws.png",
    tags: ["Cloud", "Infrastructure"],
  },
  {
    title: "Offensive Security Certified Professional (OSCP)",
    issuer: "Offensive Security",
    date: "November 2021",
    /* CHANGE_HERE: Replace with real verification URL */
    verifyUrl: "https://www.offensive-security.com/verify",
    badgeImage: "/images/cert-oscp.png",
    tags: ["Security", "Penetration Testing"],
  },
  {
    title: "Google Professional Cloud Developer",
    issuer: "Google Cloud",
    date: "June 2023",
    verifyUrl: "https://google.com/certs/your-cert-id",
    badgeImage: "/images/cert-gcp.png",
    tags: ["Cloud", "DevOps"],
  },
  {
    title: "Meta Frontend Developer Certificate",
    issuer: "Meta / Coursera",
    date: "January 2022",
    verifyUrl: "https://coursera.org/verify/your-cert-id",
    badgeImage: "/images/cert-meta.png",
    tags: ["Frontend", "React"],
  },
];

// ─── PROJECTS ─────────────────────────────────────────────────
/* CHANGE_HERE: Replace with your actual projects */
export const projects = [
  {
    title: "SecureVault API",
    /* CHANGE_HERE: Replace with your project description */
    description:
      "A zero-trust secret management REST API with end-to-end AES-256 encryption, RBAC, and audit logging. Handles 50k req/min at p99 < 12ms.",
    /* CHANGE_HERE: Replace with screenshot path in /public/images/ */
    thumbnail: "/images/project-securevault.png",
    tags: ["Security", "Node.js", "PostgreSQL", "Full-Stack"],
    features: [
      "AES-256-GCM envelope encryption per secret",
      "Role-based access with JWT + refresh token rotation",
      "Real-time audit trail with tamper-evident hashing",
      "Rate limiting, CORS, and Helmet.js hardening",
    ],
    /* CHANGE_HERE: Replace with your live demo URL */
    liveUrl: "https://securevault.example.com",
    /* CHANGE_HERE: Replace with your GitHub repo URL */
    repoUrl: "https://github.com/yourusername/securevault",
    featured: true,
  },
  {
    title: "PixelBoard — Collaborative Canvas",
    description:
      "Real-time collaborative pixel art editor supporting 500 concurrent users per canvas using WebSockets and CRDT conflict resolution.",
    thumbnail: "/images/project-pixelboard.png",
    tags: ["React", "WebSocket", "Full-Stack"],
    features: [
      "CRDT-based conflict-free collaborative editing",
      "WebSocket rooms with automatic reconnect",
      "Canvas export to PNG / SVG with server-side rendering",
      "Undo/redo with 50-step operation history",
    ],
    liveUrl: "https://pixelboard.example.com",
    repoUrl: "https://github.com/yourusername/pixelboard",
    featured: true,
  },
  {
    title: "PerfLens — Web Perf Monitor",
    description:
      "Lighthouse-as-a-service SaaS with scheduled scans, regression alerts, and team dashboards. Built on Next.js + Puppeteer + TimescaleDB.",
    thumbnail: "/images/project-perflens.png",
    tags: ["React", "DevOps", "Full-Stack"],
    features: [
      "Scheduled Lighthouse audits via cron workers",
      "Slack/email regression alerts on CLS/LCP spikes",
      "TimescaleDB time-series metric storage",
      "Multi-project team workspace with SSO",
    ],
    liveUrl: "https://perflens.example.com",
    repoUrl: "https://github.com/yourusername/perflens",
    featured: false,
  },
  {
    title: "ThreatMap Dashboard",
    description:
      "Live threat intelligence visualization dashboard aggregating CVE feeds, Shodan data, and internal SIEM logs into a unified security posture view.",
    thumbnail: "/images/project-threatmap.png",
    tags: ["Security", "React", "Data Viz"],
    features: [
      "Real-time CVE feed ingestion via RSS + NVD API",
      "D3.js geo-IP attack origin heatmap",
      "SIEM log correlation with rule-based alerting",
      "Export to PDF executive summary report",
    ],
    liveUrl: "https://threatmap.example.com",
    repoUrl: "https://github.com/yourusername/threatmap",
    featured: false,
  },
];

// All unique project filter tags derived automatically
export const projectTags = ["All", ...Array.from(new Set(projects.flatMap((p) => p.tags)))];

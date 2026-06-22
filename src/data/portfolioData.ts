/**
 * ============================================================
 * CENTRAL PORTFOLIO DATA FILE
 * All personal data lives here. Search for CHANGE_HERE comments.
 * ============================================================
 */

// ─── PERSONAL INFO ───────────────────────────────────────────
export const personalInfo = {
  /* CHANGE_HERE: Replace with your full name */
  name: "Abir Karmokar",

  /* CHANGE_HERE: Replace with your professional title/tagline */
  title: "Data Analyst & Security Analytics Engineer",

  /* CHANGE_HERE: Replace with a 1-2 sentence professional summary */
  summary:
    "I uncover insights that drive business growth and detect threats that compromise security—from clean visualizations to forensic log analysis. Obsessed with data integrity, anomaly detection, and proactive defense.",

  /* CHANGE_HERE: Replace with your location */
  location: "Dhaka, Bangladesh",

  /* CHANGE_HERE: Replace with your work email */
  email: "abirkarmokar209@gmail.com",

  /* CHANGE_HERE: Replace with your phone number or remove the key */
  phone: "+8801811239420",

  /* CHANGE_HERE: Update path if you rename the file in /public */
  resumePath: "https://drive.google.com/file/d/1lwULuSFhkxSBo3HOAqBjEqHFxfZd6yNp/view?usp=sharing",

  /* CHANGE_HERE: Replace with your profile image path in /public/images/ */
  profileImage: "https://drive.google.com/file/d/1rUFkkK7IRju7BgV6WLAT9S_D3E7cGoNB/view?usp=sharing",
};

// ─── SOCIAL LINKS ────────────────────────────────────────────
export const socialLinks = [
  {
    label: "GitHub",
    /* CHANGE_HERE: Replace with your GitHub profile URL */
    url: "https://github.com/Abirkarmokar209",
    icon: "github",
  },
  {
    label: "LinkedIn",
    /* CHANGE_HERE: Replace with your LinkedIn profile URL */
    url: "https://www.linkedin.com/in/abirkarmokar/",
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
    "Equipped with intensive bootcamp training and hands-on project experience, I specialize in transforming raw data into actionable security insights.",
    "My foundational expertise lies at the intersection of data engineering and security analytics, where I build data pipelines, analyze system logs, and identify potential threat vectors. Through rigorous academic and practical projects, I have developed a strong command of data manipulation, threat modeling, and vulnerability assessment methodologies.",
    "A proactive problem-solver and aspiring engineer, I am dedicated to leveraging data analytics to fortify infrastructure and drive data-backed security decisions."
  ],

  /* CHANGE_HERE: Replace with your career milestones */
  milestones: [
    { year: "2026", event: "Appointed Student Associate at Cyber Security Centre, Daffodil International University " },
    { year: "2026", event: "Completed advanced AI and Machine Learning bootcamp training" },
    { year: "2025", event: "Completed intensive Full-Stack Web Development bootcamp at Programming Hero" },
    { year: "2022", event: "Started working as a freelance web developer across Upwork, Fiverr, and Freelancer.com" },
  ]
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

# My Portfolio — Next.js 14 + TypeScript + PostgreSQL

A premium, security-hardened developer portfolio built with Next.js App Router, Tailwind CSS, Framer Motion, Drizzle ORM, and PostgreSQL.

## Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Configure environment
```bash
cp .env.example .env.local
# Edit .env.local and fill in your DATABASE_URL and optional SMTP settings
```

### 3. Sync the database schema
```bash
npm run db:push
```

### 4. Run the dev server
```bash
npm run dev
# → http://localhost:3000
```

---

## Personalizing Your Portfolio

**Everything lives in one file:**

```
src/data/portfolioData.ts
```

Search for `/* CHANGE_HERE */` comments throughout the codebase. They mark every line you need to update:

| Area | File | What to change |
|---|---|---|
| Name, title, bio | `src/data/portfolioData.ts` | `personalInfo` object |
| Social links | `src/data/portfolioData.ts` | `socialLinks` array |
| Skills & levels | `src/data/portfolioData.ts` | `skillCategories` array |
| Projects | `src/data/portfolioData.ts` | `projects` array |
| Certificates | `src/data/portfolioData.ts` | `certificates` array |
| Profile photo | `public/images/profile.jpg` | Replace file |
| Resume | `public/resume.pdf` | Replace file |
| SEO / domain | `next.config.js`, `app/layout.tsx` | Update URLs |
| SMTP email alerts | `.env.local` | Add SMTP credentials |
| Brand colors | `tailwind.config.js` | `colors.brand` tokens |
| Fonts | `app/layout.tsx` | `next/font/google` imports |

---

## Architecture

```
src/
├── app/               # Next.js App Router pages + API routes
├── components/        # Navbar, Footer, ContactForm, FadeIn
├── data/              # portfolioData.ts — single source of truth
├── lib/               # utils (cn, sanitizeString)
└── server/
    ├── actions/       # contactAction.ts — Zod + Drizzle
    └── db/            # schema.ts + connection pool
```

## Security Highlights

- **Zod validation** on all contact form inputs (server-side)
- **Input sanitization** before DB writes (XSS prevention)
- **Drizzle ORM** — zero raw SQL, parameterized queries only
- **CSP headers** configured in `next.config.js`
- **CORS** restricted to same-origin on API route
- **Body size limit** of 32kb on Server Actions
- **Rate limiting** ready — add `upstash/ratelimit` or similar middleware

## Deploy to Vercel

```bash
# Push to GitHub, then connect repo to Vercel.
# Add environment variables in Vercel dashboard.
vercel --prod
```

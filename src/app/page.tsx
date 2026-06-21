import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Download, ChevronDown } from "lucide-react";
import { personalInfo, socialLinks, projects } from "@/data/portfolioData";
import { FadeIn, StaggerContainer, staggerChild } from "@/components/ui/FadeIn";
import { Github, Linkedin, Twitter } from "lucide-react";
import type { Metadata } from "next";
import { motion } from "framer-motion";

export const metadata: Metadata = {
  title: "Home",
};

const socialIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  github: Github, linkedin: Linkedin, twitter: Twitter,
};

export default function HomePage() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 2);

  return (
    <>
      {/* ══════════════════════════ HERO ══════════════════════════ */}
      <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
        {/* Decorative glowing orb */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2
                        w-[600px] h-[600px] rounded-full
                        bg-brand-500/10 blur-[120px] pointer-events-none" />

        <div className="section-container w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* ── Text column ─────────────────────────────────────── */}
            <div className="order-2 lg:order-1">
              {/* Status badge */}
              <FadeIn delay={0}>
                <div className="inline-flex items-center gap-2 mb-6">
                  <span className="section-label">
                    <span className="w-1.5 h-1.5 rounded-full bg-glow-green animate-pulse" />
                    Available for hire
                  </span>
                </div>
              </FadeIn>

              {/* Headline */}
              <FadeIn delay={0.1}>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold
                               leading-[1.1] tracking-tight mb-6">
                  {/* CHANGE_HERE: Edit headline copy */}
                  Building the web
                  <br />
                  <span className="gradient-text">fast, secure,</span>
                  <br />
                  beautifully.
                </h1>
              </FadeIn>

              {/* Summary */}
              <FadeIn delay={0.2}>
                <p className="text-slate-400 text-lg leading-relaxed max-w-lg mb-8">
                  {/* CHANGE_HERE: personalInfo.summary in portfolioData.ts */}
                  {personalInfo.summary}
                </p>
              </FadeIn>

              {/* CTA buttons */}
              <FadeIn delay={0.3}>
                <div className="flex flex-wrap gap-4 mb-10">
                  <Link href="/projects" className="btn-primary">
                    View Projects
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  {/* CHANGE_HERE: resumePath set in portfolioData.ts */}
                  <a href={personalInfo.resumePath} download className="btn-outline">
                    <Download className="w-4 h-4" />
                    Download Resume
                  </a>
                </div>
              </FadeIn>

              {/* Social links */}
              <FadeIn delay={0.4}>
                <div className="flex items-center gap-4">
                  <span className="text-slate-600 text-xs font-mono uppercase tracking-wider">
                    Find me on
                  </span>
                  <div className="flex gap-2">
                    {socialLinks.map((s) => {
                      const Icon = socialIconMap[s.icon];
                      return (
                        <a
                          key={s.label}
                          href={s.url}  /* CHANGE_HERE: URLs in portfolioData.ts */
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={s.label}
                          className="p-2.5 rounded-xl glass hover:border-brand-500/40
                                     text-slate-400 hover:text-brand-400 transition-all"
                        >
                          {Icon && <Icon className="w-4 h-4" />}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* ── Profile image column ─────────────────────────────── */}
            <FadeIn delay={0.15} direction="left" className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                {/* Glow ring */}
                <div className="absolute inset-[-3px] rounded-3xl bg-gradient-to-br
                                from-brand-500 via-glow-purple to-glow-cyan opacity-40 blur-sm" />
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96
                                rounded-3xl overflow-hidden glass border-2 border-brand-500/20">
                  {/* CHANGE_HERE: Replace src with your photo path in /public/images/
                      Recommended size: 800×800px or larger, square crop */}
                  <Image
                    src={personalInfo.profileImage}
                    alt={`${personalInfo.name} profile photo`}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
                  />
                  {/* Fallback gradient shown when image is missing */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-900 via-surface-700 to-surface-900
                                  flex items-center justify-center text-6xl font-display font-bold text-brand-500/30">
                    {personalInfo.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                </div>

                {/* Floating stat cards */}
                <div className="absolute -bottom-4 -left-6 glass px-4 py-2.5 rounded-2xl
                                border border-surface-500/50 hidden sm:block">
                  <p className="text-xl font-display font-bold text-white">6+</p>
                  {/* CHANGE_HERE: Update years of experience */}
                  <p className="text-xs text-slate-500">Years exp.</p>
                </div>
                <div className="absolute -top-4 -right-6 glass px-4 py-2.5 rounded-2xl
                                border border-surface-500/50 hidden sm:block">
                  <p className="text-xl font-display font-bold gradient-text">20+</p>
                  {/* CHANGE_HERE: Update projects count */}
                  <p className="text-xs text-slate-500">Projects shipped</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600 animate-bounce">
          <ChevronDown className="w-5 h-5" />
        </div>
      </section>

      {/* ══════════════════════ TECH STACK STRIP ══════════════════ */}
      <section className="py-12 border-y border-surface-500/30">
        <div className="section-container">
          <FadeIn>
            <p className="text-center text-xs font-mono text-slate-600 uppercase tracking-widest mb-8">
              Core technology stack
            </p>
          </FadeIn>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            {/* CHANGE_HERE: Add / remove tech stack labels */}
            {["Next.js", "TypeScript", "Node.js", "PostgreSQL", "React", "Tailwind CSS", "Docker", "AWS"].map((tech) => (
              <FadeIn key={tech} direction="none">
                <span className="text-slate-500 hover:text-slate-200 transition-colors
                                 font-mono text-sm font-medium cursor-default">
                  {tech}
                </span>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ FEATURED PROJECTS ══════════════════ */}
      <section className="py-20">
        <div className="section-container">
          <FadeIn className="flex items-center justify-between mb-12">
            <div>
              <span className="section-label mb-3 block">Selected work</span>
              <h2 className="font-display text-3xl font-bold text-white">Featured Projects</h2>
            </div>
            <Link href="/projects" className="btn-outline text-sm py-2 px-4 hidden sm:flex">
              All projects <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            {featuredProjects.map((project, i) => (
              <FadeIn key={project.title} delay={i * 0.1}>
                <div className="glass-hover p-6 group h-full">
                  {/* Project thumbnail */}
                  <div className="relative h-48 mb-5 rounded-xl overflow-hidden bg-surface-600">
                    {/* CHANGE_HERE: Thumbnail paths set per project in portfolioData.ts */}
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-900/80 to-transparent" />
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                  <h3 className="font-display text-lg font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-4">{project.description}</p>
                  <div className="flex gap-3 mt-auto">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                       className="btn-primary text-sm py-2 px-4">
                      Live Demo
                    </a>
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer"
                       className="btn-outline text-sm py-2 px-4">
                      <Github className="w-4 h-4" /> Code
                    </a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link href="/projects" className="btn-outline">
              All projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

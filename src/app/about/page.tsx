import Image from "next/image";
import { Github, Linkedin, Twitter, MapPin, Mail } from "lucide-react";
import { personalInfo, aboutBio, socialLinks } from "@/data/portfolioData";
import { FadeIn, StaggerContainer, staggerChild } from "@/components/ui/FadeIn";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "About" };

const socialIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  github: Github, linkedin: Linkedin, twitter: Twitter,
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="section-container">

        {/* ── Section header ─────────────────────────────────── */}
        <FadeIn className="mb-16">
          <span className="section-label mb-4 inline-block">Who I am</span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white">
            About <span className="gradient-text">Me</span>
          </h1>
        </FadeIn>

        {/* ── Bio + Image grid ────────────────────────────────── */}
        <div className="grid lg:grid-cols-3 gap-12 mb-20">

          {/* Profile card */}
          <FadeIn direction="right" className="lg:col-span-1">
            <div className="glass p-6 text-center sticky top-24">
              <div className="relative w-36 h-36 mx-auto mb-5 rounded-2xl overflow-hidden">
                {/* CHANGE_HERE: profileImage path set in portfolioData.ts */}
                <Image
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  fill
                  className="object-cover"
                  sizes="144px"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-brand-900 to-surface-800 flex items-center justify-center
                                text-3xl font-display font-bold text-brand-400/40">
                  {personalInfo.name.split(" ").map((n) => n[0]).join("")}
                </div>
              </div>

              {/* CHANGE_HERE: personalInfo fields set in portfolioData.ts */}
              <h2 className="font-display text-xl font-bold text-white mb-1">{personalInfo.name}</h2>
              <p className="text-brand-400 text-sm font-medium mb-4">{personalInfo.title}</p>

              <div className="space-y-2 text-sm text-slate-400 mb-6">
                <div className="flex items-center justify-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-slate-600" />
                  {personalInfo.location}
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-slate-600" />
                  {personalInfo.email}
                </div>
              </div>

              <div className="glow-line mb-6" />

              {/* Social links */}
              <div className="flex justify-center gap-3">
                {socialLinks.map((s) => {
                  const Icon = socialIconMap[s.icon];
                  return (
                    <a
                      key={s.label}
                      href={s.url}  /* CHANGE_HERE: URLs in portfolioData.ts */
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="p-2.5 rounded-xl border border-surface-500
                                 text-slate-500 hover:text-brand-400 hover:border-brand-500/40
                                 hover:bg-brand-500/10 transition-all"
                    >
                      {Icon && <Icon className="w-4 h-4" />}
                    </a>
                  );
                })}
              </div>
            </div>
          </FadeIn>

          {/* Bio text */}
          <div className="lg:col-span-2 space-y-6">
            {/* CHANGE_HERE: Edit bio paragraphs in portfolioData.ts → aboutBio.paragraphs */}
            {aboutBio.paragraphs.map((para, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <p className="text-slate-300 text-lg leading-relaxed">{para}</p>
              </FadeIn>
            ))}

            {/* Quick-fact badges */}
            <FadeIn delay={0.3}>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
                {[
                  /* CHANGE_HERE: Update quick facts */
                  { label: "Years Experience", value: "6+" },
                  { label: "Projects Shipped",  value: "20+" },
                  { label: "CVEs Prevented",    value: "12" },
                ].map((stat) => (
                  <div key={stat.label} className="glass px-5 py-4 text-center rounded-2xl">
                    <p className="font-display text-2xl font-bold gradient-text">{stat.value}</p>
                    <p className="text-xs text-slate-500 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>

        {/* ── Career Timeline ─────────────────────────────────── */}
        <FadeIn className="mb-8">
          <span className="section-label mb-4 inline-block">Journey</span>
          <h2 className="font-display text-3xl font-bold text-white">
            Career <span className="gradient-text">Milestones</span>
          </h2>
        </FadeIn>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px
                          bg-gradient-to-b from-brand-500/50 via-surface-500/50 to-transparent" />

          <StaggerContainer className="space-y-6">
            {/* CHANGE_HERE: Timeline events in portfolioData.ts → aboutBio.milestones */}
            {aboutBio.milestones.map((m, i) => (
              <div key={i} className="relative pl-12 group">
                {/* Timeline dot */}
                <div className="absolute left-0 w-[38px] h-[38px] rounded-full glass
                                border border-brand-500/30 flex items-center justify-center
                                group-hover:border-brand-500 group-hover:shadow-glow-brand transition-all">
                  <span className="text-[10px] font-mono text-brand-400 font-bold">{m.year.slice(2)}</span>
                </div>

                <div className="glass-hover p-5 rounded-2xl">
                  <p className="text-xs font-mono text-brand-400 mb-1">{m.year}</p>
                  <p className="text-slate-200 font-medium">{m.event}</p>
                </div>
              </div>
            ))}
          </StaggerContainer>
        </div>

      </div>
    </div>
  );
}

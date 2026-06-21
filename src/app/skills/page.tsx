"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/portfolioData";
import { FadeIn, StaggerContainer, staggerChild } from "@/components/ui/FadeIn";

export default function SkillsPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="section-container">

        {/* ── Header ─────────────────────────────────────────── */}
        <FadeIn className="mb-16">
          <span className="section-label mb-4 inline-block">Expertise</span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Skills & <span className="gradient-text">Stack</span>
          </h1>
          <p className="text-slate-400 max-w-xl">
            {/* CHANGE_HERE: Edit this tagline */}
            A curated overview of my technical capabilities, measured against real production experience.
          </p>
        </FadeIn>

        {/* ── Skill categories grid ───────────────────────────── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* CHANGE_HERE: Categories & levels in portfolioData.ts → skillCategories */}
          {skillCategories.map((category, ci) => (
            <FadeIn key={category.category} delay={ci * 0.1}>
              <div className="glass p-6 h-full group hover:border-brand-500/30
                              hover:shadow-card-hover transition-all duration-300">
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color}`} />
                  <h2 className="font-display font-bold text-white">{category.category}</h2>
                </div>

                {/* Skill bars */}
                <div className="space-y-5">
                  {category.skills.map((skill, si) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-sm text-slate-300 font-medium">{skill.name}</span>
                        <span className="text-xs font-mono text-slate-500">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <motion.div
                          className={`skill-bar-fill bg-gradient-to-r ${category.color}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.9,
                            delay: ci * 0.05 + si * 0.07,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* ── Tool grid ──────────────────────────────────────── */}
        <FadeIn className="mt-16 mb-8">
          <h2 className="font-display text-2xl font-bold text-white">
            Tools & <span className="gradient-text">Ecosystem</span>
          </h2>
        </FadeIn>

        <StaggerContainer className="flex flex-wrap gap-3">
          {/* CHANGE_HERE: Add / remove tools from this list */}
          {[
            "VS Code", "Vim", "Figma", "Postman", "Insomnia",
            "pgAdmin", "Redis Insight", "Datadog", "Sentry",
            "GitHub Actions", "Terraform", "k9s", "Wireshark", "Burp Suite",
          ].map((tool) => (
            <motion.span
              key={tool}
              variants={staggerChild}
              className="px-4 py-2 glass rounded-xl text-sm text-slate-300
                         border border-surface-500/50 hover:border-brand-500/40
                         hover:text-brand-300 hover:bg-brand-500/5 transition-all cursor-default"
            >
              {tool}
            </motion.span>
          ))}
        </StaggerContainer>

      </div>
    </div>
  );
}

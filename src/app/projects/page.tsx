"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, CheckCircle2 } from "lucide-react";
import { projects, projectTags } from "@/data/portfolioData";
import { FadeIn } from "@/components/ui/FadeIn";
import { cn } from "@/lib/utils";

export default function ProjectsPage() {
  const [activeTag, setActiveTag] = useState("All");

  const filtered =
    activeTag === "All" ? projects : projects.filter((p) => p.tags.includes(activeTag));

  return (
    <div className="pt-28 pb-20">
      <div className="section-container">

        {/* ── Header ─────────────────────────────────────────── */}
        <FadeIn className="mb-10">
          <span className="section-label mb-4 inline-block">Portfolio</span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-slate-400 max-w-xl">
            {/* CHANGE_HERE: Edit this description */}
            A selection of production-grade work spanning full-stack engineering, security tooling, and developer tooling.
          </p>
        </FadeIn>

        {/* ── Tag filters ─────────────────────────────────────── */}
        <FadeIn className="mb-10">
          <div className="flex flex-wrap gap-2">
            {/* CHANGE_HERE: Tags auto-derived from portfolioData.ts → projects[].tags */}
            {projectTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={cn(
                  "px-4 py-1.5 rounded-full text-sm font-medium transition-all",
                  activeTag === tag
                    ? "bg-brand-500 text-white shadow-glow-brand"
                    : "glass text-slate-400 hover:text-white hover:border-brand-500/40"
                )}
              >
                {tag}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* ── Project grid ────────────────────────────────────── */}
        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            className="grid md:grid-cols-2 gap-6"
          >
            {filtered.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="glass group hover:border-brand-500/30 hover:shadow-card-hover
                                transition-all duration-300 rounded-2xl overflow-hidden h-full flex flex-col">

                  {/* Thumbnail */}
                  <div className="relative h-52 bg-surface-600 overflow-hidden">
                    {/* CHANGE_HERE: thumbnail paths set per project in portfolioData.ts */}
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className="object-cover opacity-70 group-hover:opacity-100
                                 group-hover:scale-105 transition-all duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-900/90 via-surface-900/20 to-transparent" />

                    {project.featured && (
                      <div className="absolute top-3 right-3">
                        <span className="section-label text-[10px]">Featured</span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tags.map((tag) => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>

                    <h3 className="font-display text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed mb-4">{project.description}</p>

                    {/* Feature bullets */}
                    <ul className="space-y-1.5 mb-6 flex-1">
                      {/* CHANGE_HERE: features per project in portfolioData.ts */}
                      {project.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2 text-xs text-slate-500">
                          <CheckCircle2 className="w-3.5 h-3.5 text-glow-green flex-shrink-0 mt-0.5" />
                          {feat}
                        </li>
                      ))}
                    </ul>

                    {/* Action buttons */}
                    <div className="flex gap-3 mt-auto">
                      <a
                        href={project.liveUrl}  /* CHANGE_HERE: per-project in portfolioData.ts */
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary text-sm py-2 px-4 flex-1 justify-center"
                      >
                        <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                      </a>
                      <a
                        href={project.repoUrl}  /* CHANGE_HERE: per-project in portfolioData.ts */
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline text-sm py-2 px-4 flex-1 justify-center"
                      >
                        <Github className="w-3.5 h-3.5" /> Code
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-slate-600">
            No projects tagged "{activeTag}" yet.
          </div>
        )}

      </div>
    </div>
  );
}

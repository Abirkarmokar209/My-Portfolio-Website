import Image from "next/image";
import { ExternalLink, Award, Calendar } from "lucide-react";
import { certificates } from "@/data/portfolioData";
import { FadeIn } from "@/components/ui/FadeIn";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Certificates" };

export default function CertificatesPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="section-container">

        {/* ── Header ─────────────────────────────────────────── */}
        <FadeIn className="mb-16">
          <span className="section-label mb-4 inline-block">Credentials</span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Certificates & <span className="gradient-text">Accreditations</span>
          </h1>
          <p className="text-slate-400 max-w-xl">
            {/* CHANGE_HERE: Edit this description */}
            Verified credentials from industry-recognized organizations, each linkable to a live verification record.
          </p>
        </FadeIn>

        {/* ── Masonry-style grid ──────────────────────────────── */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {/* CHANGE_HERE: Certificate entries in portfolioData.ts → certificates */}
          {certificates.map((cert, i) => (
            <FadeIn key={cert.title} delay={i * 0.08} className="break-inside-avoid">
              <div className="glass group hover:border-brand-500/30 hover:shadow-card-hover
                              transition-all duration-300 p-6 rounded-2xl">

                {/* Badge image */}
                <div className="relative w-16 h-16 mb-4 mx-auto rounded-xl overflow-hidden bg-surface-600">
                  {/* CHANGE_HERE: badgeImage paths in portfolioData.ts */}
                  <Image
                    src={cert.badgeImage}
                    alt={`${cert.title} badge`}
                    fill
                    className="object-contain p-1"
                    sizes="64px"
                  />
                  {/* Fallback icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Award className="w-7 h-7 text-brand-500/40" />
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 justify-center mb-3">
                  {cert.tags.map((tag) => (
                    <span key={tag} className="tag text-[10px]">{tag}</span>
                  ))}
                </div>

                <h3 className="font-display font-bold text-white text-center mb-1 text-sm leading-snug">
                  {cert.title}
                </h3>
                <p className="text-xs text-slate-500 text-center mb-1">{cert.issuer}</p>

                <div className="flex items-center justify-center gap-1.5 text-xs text-slate-600 mb-4">
                  <Calendar className="w-3 h-3" />
                  {cert.date}
                </div>

                {/* Verify link */}
                <a
                  href={cert.verifyUrl}  /* CHANGE_HERE: verifyUrl in portfolioData.ts */
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 w-full py-2 px-4
                             rounded-xl border border-surface-500 hover:border-brand-500/50
                             text-xs font-medium text-slate-400 hover:text-brand-300
                             hover:bg-brand-500/5 transition-all group"
                >
                  Verify Credential
                  <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </div>
  );
}

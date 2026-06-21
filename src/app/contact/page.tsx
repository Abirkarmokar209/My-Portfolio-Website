import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { personalInfo, socialLinks } from "@/data/portfolioData";
import { FadeIn } from "@/components/ui/FadeIn";
import { ContactForm } from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contact" };

const socialIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  github: Github, linkedin: Linkedin, twitter: Twitter,
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="section-container">

        {/* ── Header ─────────────────────────────────────────── */}
        <FadeIn className="mb-16">
          <span className="section-label mb-4 inline-block">Get in touch</span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Let's <span className="gradient-text">Work Together</span>
          </h1>
          <p className="text-slate-400 max-w-xl">
            {/* CHANGE_HERE: Edit this tagline */}
            Open to freelance projects, full-time roles, and security consulting engagements. Response time: &lt;48 hours.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-5 gap-10">

          {/* ── Contact info column ──────────────────────────── */}
          <FadeIn direction="right" className="lg:col-span-2 space-y-6">

            {/* Direct contact cards */}
            <div className="glass p-6 rounded-2xl space-y-5">
              <h2 className="font-display font-bold text-white mb-2">Direct Contacts</h2>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20
                                flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-brand-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-600 mb-0.5">Email</p>
                  {/* CHANGE_HERE: email in portfolioData.ts */}
                  <a href={`mailto:${personalInfo.email}`}
                     className="text-sm text-slate-200 hover:text-brand-300 transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20
                                flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-brand-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-600 mb-0.5">Phone</p>
                  {/* CHANGE_HERE: phone in portfolioData.ts */}
                  <a href={`tel:${personalInfo.phone}`}
                     className="text-sm text-slate-200 hover:text-brand-300 transition-colors">
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20
                                flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-brand-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-600 mb-0.5">Location</p>
                  {/* CHANGE_HERE: location in portfolioData.ts */}
                  <p className="text-sm text-slate-200">{personalInfo.location}</p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="glass p-6 rounded-2xl">
              <h2 className="font-display font-bold text-white mb-4">Social</h2>
              <div className="space-y-3">
                {/* CHANGE_HERE: Social URLs in portfolioData.ts → socialLinks */}
                {socialLinks.map((s) => {
                  const Icon = socialIconMap[s.icon];
                  return (
                    <a
                      key={s.label}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-xl
                                 border border-surface-500/50 hover:border-brand-500/40
                                 text-slate-400 hover:text-brand-300 hover:bg-brand-500/5
                                 transition-all group"
                    >
                      {Icon && <Icon className="w-4 h-4" />}
                      <span className="text-sm font-medium">{s.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Availability badge */}
            <div className="glass p-5 rounded-2xl flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-glow-green animate-pulse flex-shrink-0" />
              <p className="text-sm text-slate-300">
                {/* CHANGE_HERE: Update availability status */}
                Currently available for new projects starting Q3 2025.
              </p>
            </div>
          </FadeIn>

          {/* ── Form column ──────────────────────────────────── */}
          <FadeIn delay={0.1} className="lg:col-span-3">
            <div className="glass p-8 rounded-2xl">
              <h2 className="font-display text-xl font-bold text-white mb-6">Send a Message</h2>
              <ContactForm />
            </div>
          </FadeIn>

        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import { Github, Linkedin, Twitter, Terminal } from "lucide-react";
import { personalInfo, socialLinks } from "@/data/portfolioData";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  github:   Github,
  linkedin: Linkedin,
  twitter:  Twitter,
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-surface-500/40 bg-surface-900/60 backdrop-blur-sm">
      <div className="section-container py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-brand-400" />
            {/* CHANGE_HERE: Replace with your name or brand mark */}
            <span className="font-display font-bold text-white">
              {personalInfo.name.split(" ").map((n) => n[0]).join("")}
              <span className="text-brand-400">.</span>
            </span>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {[
              { href: "/about",        label: "About"        },
              { href: "/projects",     label: "Projects"     },
              { href: "/contact",      label: "Contact"      },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-slate-500 hover:text-slate-200 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((s) => {
              const Icon = iconMap[s.icon];
              return (
                <a
                  key={s.label}
                  href={s.url}    /* CHANGE_HERE: URLs are set in portfolioData.ts */
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="p-2 rounded-lg text-slate-500 hover:text-brand-400 hover:bg-brand-500/10 transition-all"
                >
                  {Icon && <Icon className="w-4 h-4" />}
                </a>
              );
            })}
          </div>
        </div>

        <div className="glow-line mt-8 mb-6" />

        <p className="text-center text-xs text-slate-600">
          © {year} {personalInfo.name}. Crafted with Next.js, TypeScript & ♥
        </p>
      </div>
    </footer>
  );
}

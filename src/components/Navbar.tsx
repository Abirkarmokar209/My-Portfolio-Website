"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/",            label: "Home"         },
  { href: "/about",       label: "About"        },
  { href: "/skills",      label: "Skills"       },
  { href: "/projects",    label: "Projects"     },
  { href: "/certificates",label: "Certificates" },
  { href: "/contact",     label: "Contact"      },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled,     setScrolled]     = useState(false);
  const [mobileOpen,   setMobileOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-surface-900/80 backdrop-blur-xl border-b border-surface-500/40 shadow-glass"
          : "bg-transparent"
      )}
    >
      <nav className="section-container flex items-center justify-between h-16">
        {/* Logo / Monogram */}
        <Link
          href="/"
          className="flex items-center gap-2 group"
          aria-label="Home"
        >
          <span className="p-1.5 rounded-lg bg-brand-500/10 border border-brand-500/20 group-hover:bg-brand-500/20 transition-colors">
            <Terminal className="w-4 h-4 text-brand-400" />
          </span>
          {/* CHANGE_HERE: Replace with your initials or logo */}
          <span className="font-display font-bold text-white tracking-tight">
            {personalInfo.name.split(" ").map((n) => n[0]).join("")}
            <span className="text-brand-400">.</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative px-3 py-1.5 rounded-lg text-sm font-medium transition-colors",
                    isActive
                      ? "text-white"
                      : "text-slate-400 hover:text-slate-100"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-brand-500/15 border border-brand-500/25 rounded-lg"
                      transition={{ type: "spring", bounce: 0.25, duration: 0.4 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          {/* CHANGE_HERE: Update resume path if renamed */}
          <a href={personalInfo.resumePath} download className="btn-outline text-sm py-2 px-4">
            Resume
          </a>
          <Link href="/contact" className="btn-primary text-sm py-2 px-4">
            Hire Me
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-surface-700 transition-colors"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-surface-900/95 backdrop-blur-xl border-b border-surface-500/40"
          >
            <ul className="section-container py-4 space-y-1">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors",
                        isActive
                          ? "bg-brand-500/15 text-brand-300 border border-brand-500/25"
                          : "text-slate-400 hover:text-white hover:bg-surface-700"
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li className="pt-2 flex gap-3">
                <a href={personalInfo.resumePath} download className="btn-outline text-sm flex-1 justify-center py-2.5">
                  Resume
                </a>
                <Link href="/contact" className="btn-primary text-sm flex-1 justify-center py-2.5">
                  Hire Me
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/data/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      /* CHANGE_HERE: Adjust brand colors to match your personal identity */
      colors: {
        brand: {
          50:  "#f0f4ff",
          100: "#e0e9ff",
          400: "#7c9ef7",
          500: "#5b7ef5",   // Primary accent — electric indigo
          600: "#4060e0",
          700: "#2f4bc9",
          900: "#1a2a7a",
        },
        surface: {
          900: "#050810",   // Deepest background
          800: "#0b0f1e",   // Page background
          700: "#111627",   // Card background
          600: "#1a2038",   // Elevated card / hover
          500: "#222b47",   // Border / dividers
        },
        glow: {
          purple: "#8b5cf6",
          cyan:   "#06b6d4",
          green:  "#10b981",
        },
      },

      fontFamily: {
        /* CHANGE_HERE: Swap display/body fonts to your preference.
           Remember to import them in app/layout.tsx via next/font/google */
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body:    ["var(--font-body)", "system-ui", "sans-serif"],
        mono:    ["var(--font-mono)", "monospace"],
      },

      backgroundImage: {
        "hero-gradient":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(91,126,245,0.18), transparent)",
        "card-shine":
          "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 60%)",
        "grid-pattern":
          "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%235b7ef5' fill-opacity='0.04'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },

      animation: {
        "fade-up":    "fadeUp 0.6s ease both",
        "fade-in":    "fadeIn 0.5s ease both",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "scan-line":  "scanLine 4s linear infinite",
      },

      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.6" },
          "50%":      { opacity: "1" },
        },
        scanLine: {
          "0%":   { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },

      boxShadow: {
        "glass":       "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)",
        "card-hover":  "0 20px 60px rgba(91,126,245,0.15), 0 4px 16px rgba(0,0,0,0.4)",
        "glow-brand":  "0 0 40px rgba(91,126,245,0.35)",
        "glow-purple": "0 0 30px rgba(139,92,246,0.3)",
      },

      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [],
};

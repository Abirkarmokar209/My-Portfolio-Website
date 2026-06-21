"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  once?: boolean;
}

const variants: Record<NonNullable<FadeInProps["direction"]>, Variants> = {
  up:    { hidden: { opacity: 0, y: 24  }, visible: { opacity: 1, y: 0  } },
  down:  { hidden: { opacity: 0, y: -24 }, visible: { opacity: 1, y: 0  } },
  left:  { hidden: { opacity: 0, x: 24  }, visible: { opacity: 1, x: 0  } },
  right: { hidden: { opacity: 0, x: -24 }, visible: { opacity: 1, x: 0  } },
  none:  { hidden: { opacity: 0         }, visible: { opacity: 1         } },
};

export function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className,
  once = true,
}: FadeInProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      variants={variants[direction]}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Stagger container — children animate in sequence */
export function StaggerContainer({
  children,
  className,
  staggerChildren = 0.1,
}: {
  children: ReactNode;
  className?: string;
  staggerChildren?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{ visible: { transition: { staggerChildren } } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const staggerChild: Variants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

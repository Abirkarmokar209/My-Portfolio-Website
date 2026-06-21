import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind classes without conflicts */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Sanitize a plain string for safe rendering.
 * Strips HTML tags and dangerous characters before storing/displaying.
 * Used by the contact server action before DB insertion.
 */
export function sanitizeString(input: string): string {
  return input
    .replace(/<[^>]*>/g, "")          // strip HTML tags
    .replace(/[<>"'`]/g, "")          // strip remaining dangerous chars
    .replace(/javascript:/gi, "")     // strip JS pseudo-protocol
    .trim()
    .slice(0, 4000);                  // hard length cap
}

/** Format a date string to a readable locale format */
export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

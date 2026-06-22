"use server";

import { z } from "zod";
import { db } from "@/server/db";
import { contactMessages } from "@/server/db/schema";
import { sanitizeString } from "@/lib/utils";
import { headers } from "next/headers";

/**
 * ============================================================
 * CONTACT SERVER ACTION — Security-first form handler
 * - Input validated with Zod before any processing
 * - Strings sanitized to strip XSS payloads
 * - Stored via Drizzle ORM — zero raw SQL
 * - Optional email notification via Nodemailer
 * ============================================================
 */

// Zod schema — the contract for acceptable contact form data
const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be under 100 characters")
    .regex(/^[a-zA-Z\s\-'.]+$/, "Name contains invalid characters"),

  email: z
    .string()
    .email("Please enter a valid email address")
    .max(254, "Email address is too long"),

  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(3000, "Message must be under 3000 characters"),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export type ContactActionResult =
  | { success: true;  message: string }
  | { success: false; errors: Record<string, string[]> | string };

export async function submitContactForm(
  formData: ContactFormData
): Promise<ContactActionResult> {
  // ── 1. Validate with Zod ──────────────────────────────────
  const parsed = contactSchema.safeParse(formData);

  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  // ── 2. Sanitize strings (defense-in-depth against XSS) ───
  const clean = {
    name:    sanitizeString(parsed.data.name),
    email:   sanitizeString(parsed.data.email).toLowerCase(),
    message: sanitizeString(parsed.data.message),
  };

  // ── 3. Extract client IP for audit trail ─────────────────
  const headersList = headers();
  const ipAddress =
    headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    headersList.get("x-real-ip") ??
    "unknown";

  try {
    // ── 4. Persist to PostgreSQL via Drizzle (no raw SQL) ──
    await db.insert(contactMessages).values({
      name:      clean.name,
      email:     clean.email,
      message:   clean.message,
      ipAddress: ipAddress.slice(0, 45), // cap at column length
    });

    // ── 5. Optional email notification ─────────────────────
    await sendEmailNotification(clean);

    return {
      success: true,
      message: "Your message has been received. I'll respond within 48 hours.",
    };
  } catch (error) {
    console.error("[ContactAction] DB insert failed:", error);
    return {
      success: false,
      errors: "An internal error occurred. Please try again later.",
    };
  }
}

/**
 * Optional email notification on new contact submission.
 * /* CHANGE_HERE: Configure SMTP credentials in .env.local:
 *    SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, NOTIFY_EMAIL
 */
async function sendEmailNotification(data: {
  name: string;
  email: string;
  message: string;
}) {
  // Guard — skip silently if SMTP is not configured
  if (!process.env.SMTP_HOST || !process.env.NOTIFY_EMAIL) return;

  try {
    const nodemailerMod = await import("nodemailer");
    // nodemailer v9 ESM-compatible: handle both default and named exports
    const nm = (nodemailerMod as any).default ?? nodemailerMod;
    const transporter = nm.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      /* CHANGE_HERE: Replace with your sender address */
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to:   process.env.NOTIFY_EMAIL,
      subject: `[Portfolio] New message from ${data.name}`,
      text: `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <hr />
        <p>${data.message.replace(/\n/g, "<br/>")}</p>
      `,
    });
  } catch (err) {
    // Non-fatal — message is already in DB
    console.error("[ContactAction] Email notification failed:", err);
  }
}

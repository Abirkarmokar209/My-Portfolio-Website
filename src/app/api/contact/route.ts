import { NextRequest, NextResponse } from "next/server";
import { submitContactForm } from "@/server/actions/contactAction";

/**
 * Fallback REST endpoint for contact form submissions.
 * Use when Server Actions aren't available (e.g. third-party forms).
 *
 * Security measures:
 *  - Body size limit enforced in next.config.js (32kb)
 *  - CORS restricted to same-origin
 *  - JSON-only Content-Type enforced
 */

// Only allow same-origin POST requests
const ALLOWED_ORIGIN = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export async function POST(req: NextRequest) {
  // ── CORS: Reject cross-origin requests ───────────────────
  const origin = req.headers.get("origin") ?? "";
  if (origin && origin !== ALLOWED_ORIGIN) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  // ── Content-Type guard ───────────────────────────────────
  const contentType = req.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) {
    return NextResponse.json({ error: "Unsupported Media Type" }, { status: 415 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  // Delegate to the same server action (reuses Zod + sanitize + DB logic)
  const result = await submitContactForm(body as Parameters<typeof submitContactForm>[0]);

  if (!result.success) {
    return NextResponse.json(result, { status: 422 });
  }

  return NextResponse.json(result, { status: 201 });
}

// Reject all other HTTP methods explicitly
export async function GET() {
  return NextResponse.json({ error: "Method Not Allowed" }, { status: 405 });
}

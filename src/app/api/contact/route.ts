import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/lib/data";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// The static export hosted on Hostinger is a different origin than this
// Vercel deployment, so the browser needs an explicit CORS allowlist to
// let that origin's fetch() reach this route.
const ALLOWED_ORIGINS = [
  "https://apexeduabroad.com",
  "https://www.apexeduabroad.com",
];

function corsHeaders(origin: string | null): Record<string, string> {
  if (!origin || !ALLOWED_ORIGINS.includes(origin)) return {};
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

export async function OPTIONS(req: NextRequest) {
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders(req.headers.get("origin")),
  });
}

export async function POST(req: NextRequest) {
  const headers = corsHeaders(req.headers.get("origin"));
  const body = await req.json();
  const { name, email, phone, destination, message } = body ?? {};

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof phone !== "string" ||
    !name ||
    !email ||
    !phone
  ) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400, headers });
  }

  console.log("New contact form submission:", {
    name,
    email,
    phone,
    destination,
    message,
    receivedAt: new Date().toISOString(),
  });

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn(
      "RESEND_API_KEY is not set — skipping email send. See README for setup."
    );
    return NextResponse.json({ ok: true, emailSent: false }, { headers });
  }

  const resend = new Resend(apiKey);
  const toEmail = process.env.CONTACT_TO_EMAIL || site.email;

  try {
    const { data, error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL || "Apex EduAbroad <onboarding@resend.dev>",
      to: toEmail,
      replyTo: email,
      subject: `New consultation request from ${name}`,
      html: `
        <h2>New Free Consultation Request</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Destination of interest:</strong> ${escapeHtml(destination || "Not specified")}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message || "(no message)")}</p>
      `,
    });

    if (error) {
      // Resend's SDK resolves (rather than throws) on API-level errors —
      // e.g. the shared onboarding@resend.dev sender can only deliver to
      // the account's own verified address until a real domain is verified.
      console.error("Resend rejected the contact email:", error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 502, headers });
    }

    console.log("Contact email sent via Resend:", data?.id);
    return NextResponse.json({ ok: true, emailSent: true }, { headers });
  } catch (error) {
    console.error("Failed to send contact email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 502, headers });
  }
}

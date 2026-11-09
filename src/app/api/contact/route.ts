import { NextResponse } from "next/server";

function isEmail(v: string) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const message = String(body.message || "").trim();
    const phone = String(body.phone || "").trim();
    const service = String(body.service || "").trim();
    const inquiryType = String(body.inquiryType || "").trim();
    const honey = String(body.companyWebsite || "").trim();
    if (honey) return NextResponse.json({ ok: true, message: "Thank you. Your inquiry has been received." });
    if (name.length < 2) return NextResponse.json({ error: "Please enter your full name." }, { status: 400 });
    if (!isEmail(email)) return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    if (message.length < 10 || message.length > 5000) return NextResponse.json({ error: "Please provide a message between 10 and 5000 characters." }, { status: 400 });
    // MVP: validated submission accepted. Integrate email/CRM/lead storage in production.
    console.info("MIQ contact inquiry", { name, email, phone, service, inquiryType, at: new Date().toISOString() });
    return NextResponse.json({ ok: true, message: "Thank you for contacting MIQ Enterprises LLC. We have received your inquiry and will respond as soon as possible." });
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}

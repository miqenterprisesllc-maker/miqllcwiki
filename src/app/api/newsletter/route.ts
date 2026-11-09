import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const email = String(body.email || "").trim();
    const honey = String(body.companyWebsite || "").trim();
    if (honey) return NextResponse.json({ ok: true, message: "Subscribed." });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    console.info("MIQ newsletter", { email, at: new Date().toISOString() });
    return NextResponse.json({ ok: true, message: "Thank you for subscribing. You'll receive updates when new insights are available." });
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}

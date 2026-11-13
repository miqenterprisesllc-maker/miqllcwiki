import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function escapeHtml(v: string) {
  return v
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

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

    if (honey) {
      return NextResponse.json({ ok: true, message: "Thank you. Your inquiry has been received." });
    }
    if (name.length < 2) {
      return NextResponse.json({ error: "Please enter your full name." }, { status: 400 });
    }
    if (!isEmail(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }
    if (message.length < 10 || message.length > 5000) {
      return NextResponse.json(
        { error: "Please provide a message between 10 and 5000 characters." },
        { status: 400 }
      );
    }

    const gmailUser = process.env.GMAIL_USER?.trim();
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD?.replace(/\s+/g, "");
    const toEmail = process.env.CONTACT_TO_EMAIL?.trim();

    if (!gmailUser || !gmailAppPassword || !toEmail) {
      console.error("Contact form email is not configured. Missing required environment variables.");
      return NextResponse.json(
        { error: "Unable to send your inquiry right now. Please try again later." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    });

    const subject = `New inquiry${inquiryType ? `: ${inquiryType}` : ""} - ${name}`;
    const text = [
      "New website inquiry",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "N/A"}`,
      `Service: ${service || "N/A"}`,
      `Inquiry type: ${inquiryType || "N/A"}`,
      "",
      "Message:",
      message,
    ].join("\n");

    const html = `
      <h2>New website inquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone || "N/A")}</p>
      <p><strong>Service:</strong> ${escapeHtml(service || "N/A")}</p>
      <p><strong>Inquiry type:</strong> ${escapeHtml(inquiryType || "N/A")}</p>
      <h3>Message</h3>
      <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
    `;

    await transporter.sendMail({
      from: `"MIQ Website" <${gmailUser}>`,
      to: toEmail,
      replyTo: email,
      subject,
      text,
      html,
    });

    return NextResponse.json({
      ok: true,
      message:
        "Thank you for contacting MIQ LLC. We have received your inquiry and will respond as soon as possible.",
    });
  } catch (error) {
    console.error("Failed to send contact inquiry email.", error);
    return NextResponse.json(
      { error: "Unable to send your inquiry right now. Please try again later." },
      { status: 500 }
    );
  }
}

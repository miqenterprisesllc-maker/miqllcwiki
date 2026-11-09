"use client";
import { useState } from "react";

type Props = { service?: string; compact?: boolean };

export function ContactForm({ service, compact }: Props) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Unable to submit.");
      setStatus("success");
      setMessage(data.message || "Thank you. Your inquiry has been received.");
      e.currentTarget.reset();
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }
  const field = "w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted/80";
  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <input type="text" name="companyWebsite" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <input type="hidden" name="service" value={service || ""} />
      <div className={`grid gap-4 ${compact ? "" : "md:grid-cols-2"}`}>
        <label className="grid gap-1.5 text-sm font-medium text-charcoal">Full name<input required name="name" className={field} placeholder="Your name" /></label>
        <label className="grid gap-1.5 text-sm font-medium text-charcoal">Email<input required type="email" name="email" className={field} placeholder="you@company.com" /></label>
      </div>
      <div className={`grid gap-4 ${compact ? "" : "md:grid-cols-2"}`}>
        <label className="grid gap-1.5 text-sm font-medium text-charcoal">Phone / WhatsApp (optional)<input name="phone" className={field} placeholder="+1..." /></label>
        <label className="grid gap-1.5 text-sm font-medium text-charcoal">Inquiry type<select name="inquiryType" className={field} defaultValue={service ? "Service Inquiry" : "Free Consultation"}>
          <option>Free Consultation</option><option>Service Inquiry</option><option>Request a Quote</option><option>General Question</option>
        </select></label>
      </div>
      <label className="grid gap-1.5 text-sm font-medium text-charcoal">Message<textarea required name="message" rows={compact ? 4 : 5} className={field} placeholder="Tell us about your goals, timeline, and the services you need." /></label>
      <button disabled={status === "loading"} className="inline-flex items-center justify-center rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-navy-2 disabled:opacity-60">
        {status === "loading" ? "Submitting..." : "Submit Inquiry"}
      </button>
      {status !== "idle" && <p role="status" className={`text-sm ${status === "success" ? "text-emerald-700" : "text-red-700"}`}>{message}</p>}
      <p className="text-xs text-muted">By submitting, you agree to be contacted regarding your inquiry. We use form validation and spam protection; please provide accurate information.</p>
    </form>
  );
}

"use client";
import { useState } from "react";
export function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [msg, setMsg] = useState("");
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); setStatus("loading");
    const form = new FormData(e.currentTarget);
    const res = await fetch("/api/newsletter", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(Object.fromEntries(form.entries())) });
    const data = await res.json();
    if (!res.ok) { setStatus("error"); setMsg(data.error || "Unable to subscribe."); return; }
    setStatus("done"); setMsg(data.message); e.currentTarget.reset();
  }
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row">
      <input type="text" name="companyWebsite" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <label className="sr-only" htmlFor="newsletter-email">Email</label>
      <input id="newsletter-email" required name="email" type="email" placeholder="Email address" className="w-full rounded-full border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/45" />
      <button disabled={status === "loading"} className="rounded-full bg-gold px-5 py-3 text-sm font-semibold text-navy hover:brightness-105 disabled:opacity-60">Subscribe</button>
      {status !== "idle" && <p role="status" className={`text-sm ${status === "done" ? "text-emerald-200" : "text-red-200"} sm:self-center`}>{msg}</p>}
    </form>
  );
}

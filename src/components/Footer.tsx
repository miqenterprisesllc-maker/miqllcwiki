"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { serviceCategories, siteConfig } from "@/lib/site";
import { LogoMark } from "./LogoMark";

function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
    </svg>
  );
}

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5Zm8.88 1.94a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.25ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
    </svg>
  );
}

export function Footer() {
  const [year, setYear] = useState(2026);
  useEffect(() => setYear(new Date().getFullYear()), []);
  return (
    <footer className="border-t border-white/10 bg-navy text-white">
      <div className="container-tight grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <LogoMark />
            <span className="font-display text-lg font-semibold">{siteConfig.name}</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/72">{siteConfig.tagline} {siteConfig.description}</p>
        </div>
        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-gold">Services</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {serviceCategories.map((s) => (
              <li key={s.slug}><Link className="hover:text-white" href={`/services/${s.slug}`}>{s.title}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-gold">Company</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li><Link className="hover:text-white" href="/about">About</Link></li>
            <li><Link className="hover:text-white" href="/portfolio">Portfolio</Link></li>
            <li><Link className="hover:text-white" href="/blog">Insights</Link></li>
            <li><Link className="hover:text-white" href="/contact">Contact</Link></li>
            <li><Link className="hover:text-white" href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link className="hover:text-white" href="/terms-and-conditions">Terms & Conditions</Link></li>
            <li><Link className="hover:text-white" href="/disclaimer">Disclaimer</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-gold">Contact</h3>
          <div className="mt-4 space-y-3 text-sm text-white/75">
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 hover:text-white"><Mail size={16} /> {siteConfig.email}</a>
            <a href={siteConfig.phoneHref} className="flex items-center gap-2 hover:text-white"><Phone size={16} /> {siteConfig.phone}</a>
            <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white"><MessageCircle size={16} /> WhatsApp: {siteConfig.phone}</a>
            <p className="flex items-start gap-2"><MapPin size={16} className="mt-0.5 shrink-0" /> <span>{siteConfig.address.full}</span></p>
          </div>
          <div className="mt-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Follow</p>
            <div className="mt-3 flex items-center gap-3">
              <a href={siteConfig.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="MIQ Enterprises on Facebook" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition hover:border-gold/50 hover:text-white"><FacebookIcon /></a>
              <a href={siteConfig.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="MIQ Enterprises on Instagram" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition hover:border-gold/50 hover:text-white"><InstagramIcon /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-tight flex flex-col gap-2 py-5 text-xs text-white/55 md:flex-row md:items-center md:justify-between">
          <p>© {year} {siteConfig.name}. All rights reserved.</p>
          <p>Professional digital services. Outcomes depend on scope, platform policies, and external factors.</p>
        </div>
      </div>
    </footer>
  );
}

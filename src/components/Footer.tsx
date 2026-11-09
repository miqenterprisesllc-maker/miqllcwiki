"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { serviceCategories, siteConfig } from "@/lib/site";
import { LogoMark } from "./LogoMark";

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

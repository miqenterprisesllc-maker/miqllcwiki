"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { mainNav, siteConfig } from "@/lib/site";
import { LogoMark } from "./LogoMark";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-white/88 backdrop-blur">
      <div className="container-tight flex h-[72px] items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3" aria-label={`${siteConfig.name} home`}>
          <LogoMark />
          <span className="font-display text-base font-semibold tracking-tight text-navy md:text-lg">{siteConfig.shortName}</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {mainNav.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-full px-3 py-2 text-sm font-medium text-charcoal transition hover:bg-surface hover:text-navy">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Link href="/contact" className="inline-flex items-center rounded-full bg-navy px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-navy-2">Get a Free Consultation</Link>
        </div>
        <button className="inline-flex rounded-lg p-2 text-navy md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-white md:hidden">
          <nav className="container-tight flex flex-col py-3" aria-label="Mobile">
            {mainNav.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-sm font-medium text-charcoal hover:bg-surface">{item.label}</Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)} className="mt-2 rounded-full bg-navy px-4 py-3 text-center text-sm font-semibold text-white">Get a Free Consultation</Link>
          </nav>
        </div>
      )}
    </header>
  );
}

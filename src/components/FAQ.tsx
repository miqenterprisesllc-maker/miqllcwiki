"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-border rounded-2xl border border-border bg-white">
      {items.map((item, i) => (
        <div key={item.q}>
          <button className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left" onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>
            <span className="font-medium text-navy">{item.q}</span>
            <ChevronDown className={`shrink-0 text-muted transition ${open === i ? "rotate-180" : ""}`} size={18} />
          </button>
          {open === i && <p className="px-5 pb-5 text-sm leading-6 text-muted">{item.a}</p>}
        </div>
      ))}
    </div>
  );
}

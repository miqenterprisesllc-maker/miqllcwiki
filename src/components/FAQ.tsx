"use client";
import { ChevronDown } from "lucide-react";

/**
 * FAQ accordion. Uses native <details> so all answers remain in the HTML for
 * accessibility and answer-engine/crawler parsing (AEO), while preserving an
 * accordion-like presentation.
 */
export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-border rounded-2xl border border-border bg-white">
      {items.map((item, i) => (
        <details key={item.q} className="group" open={i === 0}>
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left [&::-webkit-details-marker]:hidden">
            <span className="font-medium text-navy">{item.q}</span>
            <ChevronDown className="shrink-0 text-muted transition group-open:rotate-180" size={18} aria-hidden="true" />
          </summary>
          <div className="px-5 pb-5 text-sm leading-6 text-muted">{item.a}</div>
        </details>
      ))}
    </div>
  );
}

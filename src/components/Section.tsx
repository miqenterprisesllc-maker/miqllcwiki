export function Section({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) {
  return <section id={id} className={`section-pad ${className}`}>{children}</section>;
}
export function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`container-tight ${className}`}>{children}</div>;
}
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-electric">{children}</p>;
}
export function Heading({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <h2 className={`font-display text-3xl font-semibold tracking-tight text-navy md:text-4xl ${className}`}>{children}</h2>;
}

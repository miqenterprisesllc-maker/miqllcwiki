export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" className={className}>
      <rect width="64" height="64" rx="16" fill="#0B1B33" />
      <path d="M18 44V20h6.2l7.8 12.2L39.8 20H46v24h-5.7V29.4l-8.3 12.8-8.3-12.8V44H18Z" fill="white" />
      <path d="M46 44c0-4.2 3.2-7 7.6-7 .1 0 .3 0 .4 0v5c-.2 0-.4-.1-.7-.1-1.6 0-2.7.8-2.7 2.5V44H46Z" fill="#C8A24A" />
      <circle cx="48.5" cy="17.5" r="4.5" fill="#3B82F6" />
    </svg>
  );
}

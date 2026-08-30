import type { SVGProps } from 'react';

export function GaugeIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="m12 14 3.5-3.5" />
      <path d="M20.3 17a9 9 0 1 0-16.6 0" />
      <circle cx="12" cy="14" r="1" fill="currentColor" />
    </svg>
  );
}

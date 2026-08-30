import type { SVGProps } from 'react';

export function CompassIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="m16.5 7.5-2 7-7 2 2-7 7-2Z" />
      <circle cx="12" cy="12" r="0.5" fill="currentColor" />
    </svg>
  );
}

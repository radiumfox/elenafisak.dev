import type { SVGProps } from 'react';

export function CloudIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
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
      <path d="M17.5 19a4.5 4.5 0 1 0-.44-8.98A6 6 0 0 0 6 13.5 4 4 0 0 0 7 21h10.5Z" />
    </svg>
  );
}

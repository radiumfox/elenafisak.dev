import type { SVGProps } from 'react';

export function PlugIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
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
      <path d="M12 22v-5" />
      <path d="M9 8V2" />
      <path d="M15 8V2" />
      <path d="M18 8v4a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8h12Z" />
      <path d="M9 8h6" />
    </svg>
  );
}

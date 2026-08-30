import type { SVGProps } from 'react';

export function SpinnerIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray="47 63"
      />
    </svg>
  );
}
import type { SVGProps } from 'react';

export function SparkleIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
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
      <path d="M12 2l1.9 5.7a2 2 0 0 0 1.4 1.4L21 11l-5.7 1.9a2 2 0 0 0-1.4 1.4L12 20l-1.9-5.7a2 2 0 0 0-1.4-1.4L3 11l5.7-1.9a2 2 0 0 0 1.4-1.4z" />
    </svg>
  );
}

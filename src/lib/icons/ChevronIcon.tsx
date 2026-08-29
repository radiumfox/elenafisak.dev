import type { SVGProps } from 'react';

interface ChevronIconProps extends SVGProps<SVGSVGElement> {
  direction?: 'left' | 'right';
}

export function ChevronIcon({ direction = 'right', className, ...props }: ChevronIconProps) {
  const path =
    direction === 'left' ? <path d="M15 6l-6 6 6 6" /> : <path d="M9 6l6 6-6 6" />;

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
      {path}
    </svg>
  );
}

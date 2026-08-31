import type { SVGProps } from 'react';

export function Logo({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 80 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <defs>
        <linearGradient id="logo-gradient" x1="0" y1="0" x2="80" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#7db84e" />
          <stop offset="100%" stopColor="#5e8a33" />
        </linearGradient>
      </defs>
      <text
        x="40"
        y="40"
        textAnchor="middle"
        fill="url(#logo-gradient)"
        fontSize="38"
        fontFamily="Consolas, 'Courier New', monospace"
        fontWeight="700"
      >
        EF
      </text>
    </svg>
  );
}

import type { SVGProps } from 'react';

export function Logo({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <circle
        cx="32"
        cy="32"
        r="29"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.5"
      />
      <text
        x="32"
        y="39.5"
        textAnchor="middle"
        fill="currentColor"
        fontSize="22"
        fontFamily="Consolas, 'Courier New', monospace"
        fontWeight="700"
        opacity="0.8"
      >
        &lt;EF/&gt;
      </text>
    </svg>
  );
}

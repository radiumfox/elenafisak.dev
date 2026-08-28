import type { ReactNode } from 'react';

interface FooterBaseLinkProps {
  href?: string;
  children: ReactNode;
}

export function FooterBaseLink({ href, children }: FooterBaseLinkProps) {
  return (
    <li>
      {href ? <a href={href}>{children}</a> : <span>{children}</span>}
    </li>
  );
}

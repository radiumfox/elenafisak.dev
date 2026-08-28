import type { ReactNode, HTMLAttributeAnchorTarget } from 'react';

interface FooterBaseLinkProps {
  href?: string;
  children: ReactNode;
  target?: HTMLAttributeAnchorTarget
}

export function FooterBaseLink({ href, children, target = '_self' }: FooterBaseLinkProps) {
  return (
    <li>
      {href ? <a href={href} target={target}>{children}</a> : <span>{children}</span>}
    </li>
  );
}

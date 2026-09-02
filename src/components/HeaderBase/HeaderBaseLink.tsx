import type { ReactNode, HTMLAttributeAnchorTarget } from 'react';
import Link from 'next/link';

interface HeaderBaseLinkProps {
  href?: string;
  children: ReactNode;
  target?: HTMLAttributeAnchorTarget;
  active?: boolean;
}

export function HeaderBaseLink({ href, children, target, active }: HeaderBaseLinkProps) {
  if (href) {
    return (
      <Link
        href={href}
        target={target}
        aria-current={active ? 'true' : undefined}
        className={`rounded-full px-3 py-1.5 text-base font-medium transition-colors ${
          active ? 'text-accent' : 'text-muted hover:text-foreground'
        }`}
      >
        {children}
      </Link>
    );
  }
  return <span>{children}</span>;
}

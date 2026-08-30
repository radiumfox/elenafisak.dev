import type { ReactNode, HTMLAttributeAnchorTarget } from 'react';
import Link from 'next/link';

interface HeaderBaseLinkProps {
  href?: string;
  children: ReactNode;
  target?: HTMLAttributeAnchorTarget
}

export function HeaderBaseLink({ href, children, target }: HeaderBaseLinkProps) {
  if (href) {
    return (
      <Link
        href={href}
        target={target}
        className="rounded-full px-3 py-1.5 text-sm font-medium text-muted transition-colors hover:bg-subtle hover:text-foreground"
      >
        {children}
      </Link>
    );
  }
  return <span>{children}</span>;
}

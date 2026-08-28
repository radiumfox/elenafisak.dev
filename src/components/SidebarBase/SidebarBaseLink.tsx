import type { ReactNode } from 'react';
import Link from 'next/link';

interface SidebarBaseLinkProps {
  href?: string;
  children: ReactNode;
}

export function SidebarBaseLink({ href, children }: SidebarBaseLinkProps) {
  if (href) {
    return (
      <li>
        <Link href={href}>{children}</Link>
      </li>
    );
  }
  return <li>{children}</li>;
}

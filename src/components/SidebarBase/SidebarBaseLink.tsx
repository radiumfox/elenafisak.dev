'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SidebarBaseLinkProps {
  href?: string;
  children: ReactNode;
}

export function SidebarBaseLink({ href, children }: SidebarBaseLinkProps) {
  const pathname = usePathname();
  const active = href !== undefined && pathname === href;

  if (href) {
    return (
      <li>
        <Link
          href={href}
          aria-current={active ? 'page' : undefined}
          className={`block rounded-lg px-3 py-2.5 text-[15px] font-medium transition-colors ${
            active
              ? 'text-accent'
              : 'text-muted hover:bg-subtle hover:text-foreground'
          }`}
        >
          {children}
        </Link>
      </li>
    );
  }
  return <li>{children}</li>;
}

'use client';

import type { ReactNode } from 'react';

interface SidebarBaseLinkProps {
  id: string;
  active: boolean;
  children: ReactNode;
}

export function SidebarBaseLink({ id, active, children }: SidebarBaseLinkProps) {
  return (
    <li>
      <a
        href={`#${id}`}
        aria-current={active ? 'true' : undefined}
        className={`block rounded-lg px-3 py-2.5 text-[15px] font-medium transition-colors ${
          active
            ? 'text-accent'
            : 'text-muted hover:bg-subtle hover:text-foreground'
        }`}
      >
        {children}
      </a>
    </li>
  );
}

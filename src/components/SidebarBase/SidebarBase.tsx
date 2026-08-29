'use client';

import { useMemo } from 'react';
import { SidebarBaseLink } from './SidebarBaseLink';
import { useActiveSection } from '@/lib/hooks/useActiveSection';
import type { SectionLink } from '@/lib/router';

interface SidebarBaseProps {
  links: SectionLink[];
}

export function SidebarBase({ links }: SidebarBaseProps) {
  const ids = useMemo(() => links.map((link) => link.id), [links]);
  const activeId = useActiveSection(ids);

  return (
    <aside className="sticky top-[121px] hidden h-[calc(100vh-121px)] w-[284px] shrink-0 flex-col justify-between border-r border-line pr-6 lg:flex">
      <div>
        <nav className="flex flex-col overflow-y-scroll pb-4">
          <ul className="space-y-0.5">
            {links.map((link) => (
              <SidebarBaseLink key={link.id} id={link.id} active={activeId === link.id}>
                {link.label}
              </SidebarBaseLink>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}

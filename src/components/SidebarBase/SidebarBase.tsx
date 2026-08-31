'use client';

import { useMemo } from 'react';
import { useActiveSection } from '@/lib/hooks/useActiveSection';
import { NavLink } from '@/components/NavLink';
import { ButtonBase } from '@/components/ButtonBase';
import { DownloadIcon } from '@/lib/icons/DownloadIcon';
import type { SectionLink } from '@/lib/router';

interface SidebarBaseProps {
  links: SectionLink[];
  downloadCvHref?: string;
}

export function SidebarBase({ links, downloadCvHref }: SidebarBaseProps) {
  const ids = useMemo(() => links.map((link) => link.id), [links]);
  const activeId = useActiveSection(ids);

  return (
    <aside className="hidden sticky top-16 py-5 h-[calc(100vh-64px)] w-71 shrink-0 flex-col justify-between border-r border-line pr-6 lg:flex">
      <nav className="flex flex-col overflow-y-scroll pb-4 gap-y-8 pt-14">
        <ul className="space-y-0.5">
          {links.map((link) => (
            <li key={link.id}>
              <NavLink id={link.id} active={activeId === link.id}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="space-y-3">
          <ButtonBase className="w-[200px]" href={downloadCvHref} target="_blank" text="Download my CV" mode="secondary" icon={DownloadIcon} />
        </div>
      </nav>
    </aside>
  );
}

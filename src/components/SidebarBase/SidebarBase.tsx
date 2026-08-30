'use client';

import { useMemo } from 'react';
import { useActiveSection } from '@/lib/hooks/useActiveSection';
import { NavLink } from '@/components/NavLink';
import { UserIcon } from '@/lib/icons/UserIcon';
import type { SectionLink } from '@/lib/router';

interface SidebarBaseProps {
  links: SectionLink[];
  avatarSrc?: string;
}

export function SidebarBase({ links, avatarSrc }: SidebarBaseProps) {
  const ids = useMemo(() => links.map((link) => link.id), [links]);
  const activeId = useActiveSection(ids);

  return (
    <aside className="hidden sticky top-[64px] py-5 h-[calc(100vh-64px)] w-[284px] shrink-0 flex-col justify-between border-r border-line pr-6 lg:flex">
      <nav className="flex flex-col overflow-y-scroll pb-4">
        {avatarSrc ? (
          <div className="relative mb-5 aspect-square w-1/2 overflow-hidden rounded-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={avatarSrc}
              alt="Avatar"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 rounded-full bg-black/50" />
          </div>
        ) : (
          <div className="mb-5 flex aspect-square w-1/2 items-center justify-center rounded-full bg-subtle text-faint">
            <UserIcon className="h-1/2 w-1/2" />
          </div>
        )}
        <ul className="space-y-0.5">
          {links.map((link) => (
            <li key={link.id}>
              <NavLink id={link.id} active={activeId === link.id}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

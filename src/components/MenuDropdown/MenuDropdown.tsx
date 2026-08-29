'use client';

import { useMemo, useState } from 'react';
import { useActiveSection } from '@/lib/hooks/useActiveSection';
import type { SectionLink } from '@/lib/router';
import { NavLink } from '@/components/NavLink';

interface MenuDropdownProps {
  links: SectionLink[];
}

export function MenuDropdown({ links }: MenuDropdownProps) {
  const [open, setOpen] = useState(false);
  const ids = useMemo(() => links.map((link) => link.id), [links]);
  const activeId = useActiveSection(ids);

  return (
    <div className="sticky top-16 z-30 border-b border-line bg-background px-5 md:px-10 lg:hidden">
      <div className="py-3">
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="cursor-pointer rounded-full border border-line px-3 py-1.5 text-sm font-medium text-muted transition-colors hover:border-foreground hover:bg-subtle hover:text-foreground"
          aria-expanded={open}
        >
          Menu
        </button>
      </div>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <ul className="flex flex-col gap-0.5 pb-4 pt-2">
            {links.map((link) => {
              const active = activeId === link.id;
              return (
                <li key={link.id}>
                  <NavLink id={link.id} onClick={() => setOpen(false)} active={active}>
                    {link.label}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

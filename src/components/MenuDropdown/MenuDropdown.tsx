'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { RouteLink } from '@/lib/router/routes';

interface MenuDropdownProps {
  links: RouteLink[];
}

export function MenuDropdown({ links }: MenuDropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-16 z-30 border-b px-4 py-3 lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="rounded border px-4 py-2 transition-colors hover:border-current cursor-pointer"
        aria-expanded={open}
      >
        Menu
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <ul className="flex flex-col gap-1 pt-3">
            {links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href ?? '/'}
                  onClick={() => setOpen(false)}
                  className="block rounded px-2 py-2 transition-colors hover:bg-black/5 dark:hover:bg-white/10"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

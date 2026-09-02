'use client';

import type { ReactNode } from 'react';
import { HeaderBaseLink } from './HeaderBaseLink';
import { MenuDropdown } from '@/components/MenuDropdown';
import { useActiveSection } from '@/lib/hooks/useActiveSection';
import Link from 'next/link';

export interface HeaderLink {
  name: string;
  href?: string;
  target?: string;
}

interface HeaderBaseProps {
  logo: ReactNode;
  mobileLinks: HeaderLink[];
  desktopLinks: HeaderLink[];
}

const getSectionId = (href?: string) => (href ?? '').replace(/^#/, '');

export function HeaderBase({ logo, mobileLinks, desktopLinks }: HeaderBaseProps) {
  const ids = mobileLinks.map((link) => getSectionId(link.href));
  const activeId = useActiveSection(ids);

  const isActive = (href?: string) => activeId === getSectionId(href);

  return (
    <header className="sticky top-0 z-40 h-16 w-full border-b border-line bg-background/70 backdrop-blur-md ">
      <nav className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-2 xs:px-4 sm:px-6 md:px-6 lg:px-[100px]">
        <Link className="w-[50px] h-[50px] xs:h-[70px] xs:w-[70px] flex justify-center items-center" href="/">{logo}</Link>
        <MenuDropdown links={mobileLinks} className="xs:hidden" />
        <div className="hidden xs:flex lg:hidden items-center gap-0.5">
          {mobileLinks.map((link) => (
            <HeaderBaseLink key={link.name} href={link.href} target={link.target} active={isActive(link.href)}>
              {link.name}
            </HeaderBaseLink>
          ))}
        </div>
        <div className="hidden items-center gap-0.5 lg:flex">
          {desktopLinks.map((link) => (
            <HeaderBaseLink key={link.name} href={link.href} target={link.target} active={isActive(link.href)}>
              {link.name}
            </HeaderBaseLink>
          ))}
        </div>
      </nav>
    </header>
  );
}

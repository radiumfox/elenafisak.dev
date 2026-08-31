import type { ReactNode } from 'react';
import { HeaderBaseLink } from './HeaderBaseLink';
import { MenuDropdown } from '@/components/MenuDropdown';
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

export function HeaderBase({ logo, mobileLinks, desktopLinks }: HeaderBaseProps) {
  return (
    <header className="sticky top-0 z-40 h-16 w-full border-b border-line bg-background/70 backdrop-blur-md">
      <nav className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-2 xs:px-6">
        <Link className="w-[50px] xs:w-[70px]" href="/">{logo}</Link>
        <MenuDropdown links={mobileLinks} className="xs:hidden" />
        <div className="hidden xs:flex lg:hidden items-center gap-0.5">
          {mobileLinks.map((link) => (
            <HeaderBaseLink key={link.name} href={link.href} target={link.target}>
              {link.name}
            </HeaderBaseLink>
          ))}
        </div>
        <div className="hidden items-center gap-0.5 lg:flex">
          {desktopLinks.map((link) => (
            <HeaderBaseLink key={link.name} href={link.href} target={link.target}>
              {link.name}
            </HeaderBaseLink>
          ))}
        </div>
      </nav>
    </header>
  );
}

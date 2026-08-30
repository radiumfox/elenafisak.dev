import type { ReactNode } from 'react';
import { HeaderBaseLink } from './HeaderBaseLink';
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
    <header className="sticky top-0 z-40 flex h-16 w-full items-center border-b border-line bg-background px-5 md:px-10">
      <nav className="flex w-full items-center justify-between">
        <Link className="h-[50px] w-[50px]" href="/">{logo}</Link>
        <div className="flex items-center gap-0.5 lg:hidden">
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

import type { ReactNode } from 'react';
import { HeaderBaseLink } from './HeaderBaseLink';
import Link from 'next/link';

export interface HeaderLink {
  label: string;
  href?: string;
  target?: string;
}

interface HeaderBaseProps {
  logo: ReactNode;
  links: HeaderLink[];
}

export function HeaderBase({ logo, links }: HeaderBaseProps) {
  return (
    <header className="sticky top-0 z-40 flex h-16 w-full items-center border-b border-line bg-background px-5 md:px-10">
      <nav className="flex w-full items-center justify-between">
        <Link className="h-[50px] w-[50px]" href="/">{logo}</Link>
        <div className="flex items-center gap-0.5">
          {links.map((link) => (
            <HeaderBaseLink key={link.label} href={link.href} target={link.target}>
              {link.label}
            </HeaderBaseLink>
          ))}
        </div>
      </nav>
    </header>
  );
}

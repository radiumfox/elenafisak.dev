import type { ReactNode } from "react";
import { HeaderBaseLink } from "./HeaderBaseLink";
import Link from 'next/link';

export interface HeaderLink {
  label: string;
  href?: string;
}

interface HeaderBaseProps {
  logo: ReactNode;
  links: HeaderLink[];
}

export function HeaderBase({ logo, links }: HeaderBaseProps) {
  return (
    <header className="sticky top-0 z-50 flex w-full flex-col px-6 py-4">
      <nav className="flex items-center justify-between">
        <Link href="/">{logo}</Link>
        <div className="flex items-center gap-6">
          {links.map((link) => (
            <HeaderBaseLink key={link.label} href={link.href}>
              {link.label}
            </HeaderBaseLink>
          ))}
        </div>
      </nav>
    </header>
  );
}

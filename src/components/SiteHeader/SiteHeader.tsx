'use client';

import { usePathname } from 'next/navigation';
import { HeaderBase } from '@/components/HeaderBase';
import type { HeaderLink } from '@/components/HeaderBase';
import type { SiteHeaderProps } from './types';

const HOME_LINKS: HeaderLink[] = [{ name: 'Home', href: '/' }];

export function SiteHeader({ logo, navLinks }: SiteHeaderProps) {
  const pathname = usePathname();
  const links = pathname === '/' ? navLinks : HOME_LINKS;

  return <HeaderBase logo={logo} navLinks={links} />;
}

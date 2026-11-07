import type { ReactNode } from 'react';
import type { HeaderLink } from '@/components/HeaderBase';

export interface SiteHeaderProps {
  logo: ReactNode;
  navLinks: HeaderLink[];
}

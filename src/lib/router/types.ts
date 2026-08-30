import type { ComponentType, SVGProps } from 'react';

export interface SectionLink {
  label: string;
  id: string;
}

export interface SocialLink {
  name: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  href: string;
  target?: string;
}

import type { ComponentType, SVGProps } from 'react';

export interface SectionLink {
  label: string;
  id: string;
}

export interface SocialLink {
  label: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  target?: string;
  href?: string;
}

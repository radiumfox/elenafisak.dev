import type { ComponentType, SVGProps } from 'react';

export interface FeatureCardItem {
  id: string;
  title: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}

export interface FeatureCardAction {
  title: string;
  href: string;
  linkText: string;
}

import type { ComponentType, SVGProps } from 'react';
import { GitLabIcon } from '@/lib/icons/GitLabIcon';
import { LinkedInIcon } from '@/lib/icons/LinkedInIcon';
import { TelegramIcon } from '@/lib/icons/TelegramIcon';

export interface RouteLink {
  label: string;
  href?: string;
}

export interface SocialLink extends RouteLink {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  target?: string;
}

export const NAV_LINKS: RouteLink[] = [
  { label: 'Intro', href: '/' },
  { label: 'Experience', href: '/experience' },
  { label: 'Work', href: '/work' },
  { label: 'Contacts', href: '/contacts' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'GitLab',
    href: '/',
    target: '_blank',
    icon: GitLabIcon,
  },
  {
    label: 'LinkedIn',
    href: '/',
    target: '_blank',
    icon: LinkedInIcon,
  },
  {
    label: 'Telegram',
    href: '/',
    target: '_blank',
    icon: TelegramIcon,
  },
];

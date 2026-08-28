export interface RouteLink {
  label: string;
  href?: string;
}

export const NAV_LINKS: RouteLink[] = [
  { label: 'Intro', href: '/' },
  { label: 'Experience', href: '/experience' },
  { label: 'Work', href: '/work' },
  { label: 'Contacts', href: '/contacts' },
];

export const SOCIAL_LINKS: RouteLink[] = [
  {
    label: 'GitHub',
    href: '/',
  },
  {
    label: 'LinkedIn',
    href: '/',
  },
];

import { GitLabIcon } from '@/lib/icons/GitLabIcon';
import { LinkedInIcon } from '@/lib/icons/LinkedInIcon';
import { TelegramIcon } from '@/lib/icons/TelegramIcon';
import type { SectionLink, SocialLink } from './types';

export const NAV_LINKS: SectionLink[] = [
  { label: 'Intro', id: 'intro' },
  { label: 'Experience', id: 'experience' },
  { label: 'Skills', id: 'skills' },
  { label: 'Works', id: 'works' },
  { label: 'Contacts', id: 'contacts' },
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

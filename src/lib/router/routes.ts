import { GitHubIcon } from '@/lib/icons/GitHubIcon';
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
    name: 'GitHub',
    href: 'https://github.com/',
    target: '_blank',
    icon: GitHubIcon,
  },
  {
    name: 'GitLab',
    href: 'https://gitlab.com/',
    target: '_blank',
    icon: GitLabIcon,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/',
    target: '_blank',
    icon: LinkedInIcon,
  },
  {
    name: 'Telegram',
    href: 'https://t.me/',
    target: '_blank',
    icon: TelegramIcon,
  },
];
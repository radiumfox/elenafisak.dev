import type { ComponentType, SVGProps } from 'react';
import { GitHubIcon } from '@/lib/icons/GitHubIcon';
import { GitLabIcon } from '@/lib/icons/GitLabIcon';
import { LinkedInIcon } from '@/lib/icons/LinkedInIcon';
import { TelegramIcon } from '@/lib/icons/TelegramIcon';
import type { SocialIconName } from './types';

const SOCIAL_ICONS: Record<SocialIconName, ComponentType<SVGProps<SVGSVGElement>>> = {
  GitHub: GitHubIcon,
  GitLab: GitLabIcon,
  LinkedIn: LinkedInIcon,
  Telegram: TelegramIcon,
};

export function getSocialIcon(
  name: string,
): ComponentType<SVGProps<SVGSVGElement>> | undefined {
  return SOCIAL_ICONS[name as SocialIconName];
}

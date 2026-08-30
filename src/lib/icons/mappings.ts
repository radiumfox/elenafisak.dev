import type { ComponentType, SVGProps } from 'react';
import { PaletteIcon } from './PaletteIcon';
import { GaugeIcon } from './GaugeIcon';
import { LayersIcon } from './LayersIcon';
import { NetworkIcon } from './NetworkIcon';
import { PlugIcon } from './PlugIcon';
import { CodeIcon } from './CodeIcon';
import { CompassIcon } from './CompassIcon';
import { GemIcon } from './GemIcon';
import { ServerIcon } from './ServerIcon';
import { FlaskIcon } from './FlaskIcon';
import { CloudIcon } from './CloudIcon';
import { GitHubIcon } from './GitHubIcon';
import { GitLabIcon } from './GitLabIcon';
import { LinkedInIcon } from './LinkedInIcon';
import { TelegramIcon } from './TelegramIcon';
import type { SocialIconName } from '@/lib/social/types';

export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export const EXPERIENCE_ICONS: Record<string, IconComponent> = {
  frontendEngineering: CodeIcon,
  ownership: GemIcon,
  designSystems: PaletteIcon,
  performance: GaugeIcon,
  architecture: NetworkIcon,
  api: PlugIcon,
  platforms: LayersIcon,
  leadership: CompassIcon,
};

export const SKILL_ICONS: Record<string, IconComponent> = {
  Frontend: CodeIcon,
  Backend: ServerIcon,
  APIs: PlugIcon,
  Testing: FlaskIcon,
  Infrastructure: CloudIcon,
};

export const SOCIAL_ICONS: Record<SocialIconName, IconComponent> = {
  GitHub: GitHubIcon,
  GitLab: GitLabIcon,
  LinkedIn: LinkedInIcon,
  Telegram: TelegramIcon,
};

export function getExperienceIcon(name: string): IconComponent {
  return EXPERIENCE_ICONS[name] ?? CodeIcon;
}

export function getSkillIcon(title: string): IconComponent {
  return SKILL_ICONS[title] ?? CodeIcon;
}

export function getSocialIcon(
  name: string,
): IconComponent | undefined {
  return SOCIAL_ICONS[name as SocialIconName];
}

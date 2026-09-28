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
import { LockIcon } from './LockIcon';
import { WrenchIcon } from './WrenchIcon';
import { FlaskIcon } from './FlaskIcon';
import { CloudIcon } from './CloudIcon';
import { GitHubIcon } from './GitHubIcon';
import { GitLabIcon } from './GitLabIcon';
import { LinkedInIcon } from './LinkedInIcon';
import { TelegramIcon } from './TelegramIcon';
import type { SocialIconName } from '@/lib/social/types';

export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export const EXPERIENCE_ICONS: Record<string, IconComponent> = {
  engineering: CodeIcon,
  ownership: GemIcon,
  design: PaletteIcon,
  performance: GaugeIcon,
  architecture: NetworkIcon,
  api: PlugIcon,
  fullstack: LayersIcon,
  leadership: CompassIcon,
};

export const SKILL_ICONS: Record<string, IconComponent> = {
  frontend: CodeIcon,
  backend: ServerIcon,
  api: PlugIcon,
  testing: FlaskIcon,
  database: LayersIcon,
  authentication: LockIcon,
  architecture: NetworkIcon,
  design: PaletteIcon,
  tooling: WrenchIcon,
};

export const SOCIAL_ICONS: Record<SocialIconName, IconComponent> = {
  github: GitHubIcon,
  gitlab: GitLabIcon,
  linkedin: LinkedInIcon,
  telegram: TelegramIcon,
};

export function getExperienceIcon(name: string): IconComponent {
  return EXPERIENCE_ICONS[name] ?? CodeIcon;
}

export function getSkillIcon(name: string): IconComponent {
  return SKILL_ICONS[name] ?? CodeIcon;
}

export function getSocialIcon(
  name: string,
): IconComponent | undefined {
  const normalized = name.toLowerCase();
  return SOCIAL_ICONS[normalized as SocialIconName];
}

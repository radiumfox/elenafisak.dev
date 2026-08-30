import type { ComponentType, SVGProps } from 'react';
import { PaletteIcon } from '@/lib/icons/PaletteIcon';
import { GaugeIcon } from '@/lib/icons/GaugeIcon';
import { LayersIcon } from '@/lib/icons/LayersIcon';
import { NetworkIcon } from '@/lib/icons/NetworkIcon';
import { PlugIcon } from '@/lib/icons/PlugIcon';
import { CodeIcon } from '@/lib/icons/CodeIcon';
import { CompassIcon } from '@/lib/icons/CompassIcon';
import { GemIcon } from '@/lib/icons/GemIcon';

const experienceIconMap: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  frontendEngineering: CodeIcon,
  ownership: GemIcon,
  designSystems: PaletteIcon,
  performance: GaugeIcon,
  architecture: NetworkIcon,
  api: PlugIcon,
  platforms: LayersIcon,
  leadership: CompassIcon,
};

export function getExperienceIcon(
  name: string,
): ComponentType<SVGProps<SVGSVGElement>> {
  return experienceIconMap[name] ?? CodeIcon;
}

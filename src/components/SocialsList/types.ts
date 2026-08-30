import type { SocialLink } from '@/lib/router';

export type SocialItem = SocialLink;

export interface SocialsListProps {
  items: SocialItem[];
  className?: string;
}
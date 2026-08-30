import type { NumberedListItem } from '@/components/NumberedList';

export interface ProjectInfoCardProps {
  title: string;
  description: string;
  features: NumberedListItem[];
  href: string;
  videoSrc?: string;
}

import type { NumberedListItem } from '@/components/NumberedList';
import type { MuxVideo } from '@/lib/sanity';

export interface ProjectInfoCardProps {
  title: string;
  description: string;
  features: NumberedListItem[];
  href?: string;
  appHref?: string;
  video?: MuxVideo;
}

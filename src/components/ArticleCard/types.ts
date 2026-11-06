import type { SanityImage } from '@/lib/sanity';

export interface ArticleCardProps {
  image?: SanityImage;
  title: string;
  description: string;
  timeToRead: string;
  category: string;
  date: Date;
  href?: string;
}

import type { LoadedSiteData } from '@/lib/sanity/loadData';

export interface HomePageProps {
  data: LoadedSiteData;
  downloadCvHref?: string;
}

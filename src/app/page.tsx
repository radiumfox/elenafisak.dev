import { HomePage as HomePageView } from '@/views/home';
import { loadSiteData } from '@/lib/sanity/loadData';
import { fileUrlFor } from '@/lib/sanity/image';

export default async function HomePage() {
  const data = await loadSiteData();

  return <HomePageView data={data} downloadCvHref={fileUrlFor(data.settings?.cv ?? null)} />;
}

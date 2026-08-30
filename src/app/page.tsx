import { HomePage as HomePageView } from '@/views/home';
import { loadSiteData } from '@/lib/sanity/loadData';

export default async function HomePage() {
  const data = await loadSiteData();

  return <HomePageView data={data} />;
}

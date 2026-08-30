import { HomePage as HomePageView } from '@/pages/home';
import { loadSiteData } from '@/lib/sanity/loadData';

export default async function HomePage() {
  const data = await loadSiteData();
  console.log(data);

  return <HomePageView data={data} />;
}

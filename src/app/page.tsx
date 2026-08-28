import { HeaderBase } from "@/components/HeaderBase";
import { SidebarBase } from "@/components/SidebarBase";
import { FooterBase } from "@/components/FooterBase";

const NAV_LINKS = [
  {
    label: 'GitHub',
    href: '/',
  },
  {
    label: 'LinkedIn',
    href: '/',
  }
];

const SIDEBAR_SECTIONS = [
  {
    title: "Intro",
    items: [
      { label: "About me" },
      { label: "Experience" }
    ],
  },
  {
    title: "Work",
    items: []
  },
  {
    title: "Contacts",
    items: []
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <HeaderBase logo={<span>Logo</span>} links={NAV_LINKS} />

      <div className="sticky top-16 z-30 border-b px-4 py-3 lg:hidden">
        <button>Menu</button>
      </div>

      <div className="px-6">
        <div className="relative mx-auto max-w-[1440px] py-10 lg:flex lg:flex-row">
          <SidebarBase sections={SIDEBAR_SECTIONS} />

          <article className="mt-4 w-full min-w-0 px-1 md:px-6 lg:px-12 lg:pr-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold">Page title</h1>
              <p>Introductory paragraph describing the page or section.</p>
              <h2 className="text-2xl font-semibold">Section heading</h2>
              <p>Content of the section.</p>
              <h3 className="text-xl font-semibold">Sub heading</h3>
              <p>More content.</p>
              <p>More content filling out the main article body.</p>
              <p>More content filling out the main article body.</p>
            </div>
          </article>
        </div>
      </div>

      <FooterBase logo="Logo" description="Short description of the site or developer." columns={[]}>
        <p className="text-sm">Copyright</p>
        <div className="flex items-center gap-4">Social icons</div>
      </FooterBase>
    </div>
  );
}

import "./globals.css";
import type { ReactNode } from "react";
import { HeaderBase } from "@/components/HeaderBase";
import { SidebarBase } from "@/components/SidebarBase";
import { FooterBase } from "@/components/FooterBase";
import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/router/routes";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        <div className="flex min-h-screen flex-col">
          <HeaderBase logo={<span>Logo</span>} links={SOCIAL_LINKS} />

          <div className="sticky top-16 z-30 border-b px-4 py-3 lg:hidden">
            <button>Menu</button>
          </div>

          <div className="px-6">
            <div className="relative mx-auto max-w-[1440px] py-10 lg:flex lg:flex-row">
              <SidebarBase links={NAV_LINKS} />
              {children}
            </div>
          </div>

          <FooterBase logo="Logo" description="Short description of the site or developer." columns={[]}>
            <p className="text-sm">Copyright</p>
            <div className="flex items-center gap-4">Social icons</div>
          </FooterBase>
        </div>
      </body>
    </html>
  );
}

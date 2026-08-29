import './globals.css';
import type { ReactNode } from 'react';
import { HeaderBase } from '@/components/HeaderBase';
import { SidebarBase } from '@/components/SidebarBase';
import { FooterBase } from '@/components/FooterBase';
import { MenuDropdown } from '@/components/MenuDropdown';
import { NAV_LINKS, SOCIAL_LINKS } from '@/lib/router';
import { COPYRIGHT } from '@/lib/copyrights/copyright';
import { Logo } from '@/lib/icons/Logo';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        <div className="flex flex-col">
          <HeaderBase logo={<Logo/>} links={SOCIAL_LINKS} />

          <MenuDropdown links={NAV_LINKS} />

          <div className="px-6 lg:min-h-0 lg:flex-1">
            <div className="mx-auto max-w-[1440px] lg:flex lg:min-h-0 lg:flex-row lg:py-0">
              <SidebarBase links={NAV_LINKS} />
              <div className="lg:min-h-0 lg:h-[100vh-64px] lg:flex-1 lg:overflow-y-auto flex flex-col justify-between">
                <div>
                  {children}
                </div>
                <FooterBase logo={<Logo />} description="Short description of the site or developer." columns={[]}>
                  <p className="text-sm">{COPYRIGHT}</p>
                  <div className="flex items-center gap-4">
                    {SOCIAL_LINKS.map((link) => {
                      const Icon = link.icon;
                      return (
                        <a
                          key={link.label}
                          href={link.href}
                          target={link.target}
                          rel="noreferrer"
                          className="text-current transition-opacity hover:opacity-70"
                        >
                          <Icon className="h-5 w-5" />
                        </a>
                      );
                    })}
                  </div>
                </FooterBase>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

import './globals.css';
import type { ReactNode } from 'react';
import { HeaderBase } from '@/components/HeaderBase';
import { SidebarBase } from '@/components/SidebarBase';
import { FooterBase } from '@/components/FooterBase';
import { ScrollToTopButton } from '@/components/ScrollToTopButton';
import { NAV_LINKS } from '@/lib/router';
import { loadSiteData } from '@/lib/sanity/loadData';
import { toHeaderLinks, toSocialLinks } from '@/lib/social';
import { urlFor } from '@/lib/sanity/image';
import { Logo } from '@/lib/icons/Logo';

const MOBILE_HEADER_LINKS = NAV_LINKS.map((link) => ({ name: link.label, href: `#${link.id}` }));

export default async function RootLayout({ children }: { children: ReactNode }) {
  const { settings } = await loadSiteData();

  const socialLinks = toSocialLinks(settings?.socials);
  const headerLinks = toHeaderLinks(settings?.socials);
  const copyright = settings?.copyright ?? '';
  const footerDescription = settings?.footerDescription ?? '';
  const avatarSrc = settings?.avatarImage
    ? urlFor(settings.avatarImage).width(512).url()
    : '';

  return (
    <html>
      <body>
        <div className="flex flex-col">
          <HeaderBase logo={<Logo/>} mobileLinks={MOBILE_HEADER_LINKS} desktopLinks={headerLinks} />

          <div className="px-6 lg:min-h-0 lg:flex-1">
            <div className="mx-auto max-w-[1440px] lg:flex lg:min-h-0 lg:flex-row lg:py-0 px-6 lg:min-h-0 lg:flex-1">
              <SidebarBase links={NAV_LINKS} avatarSrc={avatarSrc} />
              <div className="lg:min-h-0 lg:h-[100vh-64px] lg:flex-1 lg:overflow-y-auto flex flex-col justify-between">
                <div>
                  {children}
                </div>
                <FooterBase logo={<Logo />} description={footerDescription} columns={[]}>
                  <p className="text-sm">{copyright}</p>
                  <div className="flex items-center gap-4">
                    {socialLinks.map((link) => {
                      const Icon = link.icon;
                      return (
                        <a
                          key={link.name}
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

          <ScrollToTopButton />
        </div>
      </body>
    </html>
  );
}

import './globals.css';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { jetbrainsMono } from './fonts';
import { HeaderBase } from '@/components/HeaderBase';
import { SidebarBase } from '@/components/SidebarBase';
import { FooterBase } from '@/components/FooterBase';
import { ScrollToTopButton } from '@/components/ScrollToTopButton';
import { NAV_LINKS } from '@/lib/router';
import { loadSiteData } from '@/lib/sanity/loadData';
import { fileUrlFor } from '@/lib/sanity/image';
import { PortableText } from '@/lib/sanity';
import { toHeaderLinks, toSocialLinks } from '@/lib/social';
import { Logo } from '@/lib/icons/Logo';

const MOBILE_HEADER_LINKS = NAV_LINKS.map((link) => ({ name: link.label, href: `#${link.id}` }));

export const metadata: Metadata = {
  icons: {
    icon: [
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon-32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon/favicon-16.png', type: 'image/png', sizes: '16x16' },
    ],
    shortcut: '/favicon/favicon.ico',
    apple: '/favicon/apple-touch-icon.png',
  },
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  const { settings } = await loadSiteData();

  const socialLinks = toSocialLinks(settings?.socials);
  const headerLinks = toHeaderLinks(settings?.socials);
  const copyright = settings?.copyright ?? '';
  const footerDescription = settings?.footerDescription ?? '';
  const downloadCvHref = fileUrlFor(settings?.cv ?? null);

  return (
    <html className={jetbrainsMono.variable}>
      <body className=" overflow-y-auto overflow-x-hidden">
        <div className="aurora-page" aria-hidden="true">
          <span className="aurora-blob aurora-blob-1" />
          <span className="aurora-blob aurora-blob-2" />
          <span className="aurora-blob aurora-blob-3" />
        </div>
        <div className="flex flex-col">
          <HeaderBase logo={<Logo />} mobileLinks={MOBILE_HEADER_LINKS} desktopLinks={headerLinks} />

          <div className="mx-auto w-full max-w-[1440px] px-2 xs:px-6 lg:min-h-0 lg:flex-1">
            <div className="lg:flex lg:min-h-0 lg:flex-row lg:py-0 lg:min-h-0 lg:flex-1">
              <SidebarBase links={NAV_LINKS} downloadCvHref={downloadCvHref} />
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
                {settings?.otherCredits && (
                  <div className="text-xs text-faint lg:mx-12 pb-5">
                    <PortableText value={settings.otherCredits} />
                  </div>
                )}
              </div>
            </div>
          </div>

          <ScrollToTopButton />
        </div>
      </body>
    </html>
  );
}

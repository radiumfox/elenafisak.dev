import './globals.css';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { robotoCondensed, jetbrainsMono } from './fonts';
import { HeaderBase } from '@/components/HeaderBase';
import { FooterBase } from '@/components/FooterBase';
import { ScrollToTopButton } from '@/components/ScrollToTopButton';
import { NAV_LINKS } from '@/lib/router';
import { loadSiteData } from '@/lib/sanity/loadData';
import { PortableText } from '@/lib/sanity';
import { toSocialLinks } from '@/lib/social';
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

  const copyright = settings?.copyright ?? '';
  const footerDescription = settings?.footerDescription ?? '';

  return (
    <html className={`${robotoCondensed.variable} ${jetbrainsMono.variable}`}>
      <body className="overflow-y-auto">
        <div className="flex flex-col">
          <HeaderBase logo={<Logo />} mobileLinks={MOBILE_HEADER_LINKS} desktopLinks={MOBILE_HEADER_LINKS} />

          <div className="mx-auto w-full max-w-[1440px] px-2 xs:px-4 sm:px-6 md:px-6 lg:px-[100px] lg:min-h-0 lg:flex-1">
            <div className="flex flex-col justify-between">
              <div>
                {children}
              </div>
              <FooterBase logo={<Logo />} description={footerDescription} columns={[]}>
                <p className="text-sm">{copyright}</p>
                <div className="flex items-center gap-4">
                  {toSocialLinks(settings?.socials).map((link) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        target={link.target}
                        rel="noreferrer"
                        className="flex h-11 w-11 items-center justify-center rounded-md border border-line text-muted transition-colors hover:bg-subtle hover:text-foreground"
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    );
                  })}
                </div>
              </FooterBase>
              {settings?.otherCredits && (
                <div className="text-xs text-faint pb-5">
                  <PortableText value={settings.otherCredits} />
                </div>
              )}
            </div>
          </div>

          <ScrollToTopButton />
        </div>
      </body>
    </html>
  );
}

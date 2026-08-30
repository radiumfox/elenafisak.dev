import type { SocialLink as SocialLinkType } from '@/lib/sanity/types';
import type { SocialLink } from '@/lib/router';
import type { HeaderLink } from '@/components/HeaderBase';
import type { SocialNetworkName } from './types';
import { getSocialIcon } from '@/lib/icons/mappings';

export function getSocialLink(
  socials: SocialLinkType[] | undefined,
  name: SocialNetworkName,
): string | undefined {
  return socials?.find(
    (social) => social.name.toLowerCase() === name.toLowerCase(),
  )?.url;
}

export function toSocialLinks(socials: SocialLinkType[] | undefined): SocialLink[] {
  const links: SocialLink[] = [];
  for (const social of socials ?? []) {
    const icon = getSocialIcon(social.name);
    if (!icon || !social.url) {
      continue;
    }
    links.push({
      name: social.name,
      href: social.url,
      target: '_blank',
      icon,
    });
  }
  return links;
}

export function toHeaderLinks(socials: SocialLinkType[] | undefined): HeaderLink[] {
  return (socials ?? [])
    .filter((social) => !!social.url)
    .map((social) => ({
      name: social.title ?? social.name,
      href: social.url as string,
      target: '_blank',
    }));
}

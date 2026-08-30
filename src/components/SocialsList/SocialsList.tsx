import type { SocialItem, SocialsListProps } from './types';

export function SocialsList({ items }: SocialsListProps) {
  return (
    <ul className="space-y-2">
      {items.map((item: SocialItem) => (
        <li key={item.name}>
          <a
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xl transition-colors hover:text-accent"
          >
            <item.icon className="h-6 w-6" />
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
}
import type { ReactNode } from 'react';
import { FooterBaseLink } from './FooterBaseLink';

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

interface FooterBaseProps {
  logo: ReactNode;
  description: ReactNode;
  columns: FooterColumn[];
  children?: ReactNode;
}

export function FooterBase({ logo, description, columns, children }: FooterBaseProps) {
  return (
    <footer className="lg:mx-12 py-5 mt-12 border-t border-line space-y-2">
      <div>
        <div className="flex gap-2 items-baseline">
          <div className="w-7.5 h-7.5 flex items-center justify-center">{logo}</div>
          <p className="text-sm">{description}</p>
        </div>
        {columns.map((column) => (
          <div key={column.title}>
            <p className="mb-2 font-medium">{column.title}</p>
            <ul className="space-y-1">
              {column.links.map((link) => (
                <FooterBaseLink key={link.label} href={link.href}>
                  {link.label}
                </FooterBaseLink>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex flex-row items-center justify-between">{children}</div>
    </footer>
  );
}

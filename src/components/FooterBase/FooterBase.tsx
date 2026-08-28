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
    <footer className="mt-auto">
      <div className="mx-auto max-w-[1440px] px-6 py-10">
        <div className="grid gap-8 lg:grid-cols-4">
          <div>
            <span className="mb-4 block w-[50px] h-[50px]">{logo}</span>
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
        <div className="mt-8 flex flex-row items-center justify-between">{children}</div>
      </div>
    </footer>
  );
}

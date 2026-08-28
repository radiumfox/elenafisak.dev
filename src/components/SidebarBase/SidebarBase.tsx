import { SidebarBaseLink } from './SidebarBaseLink';

export interface SidebarLink {
  label: string;
  href?: string;
}

interface SidebarBaseProps {
  links: SidebarLink[];
}

export function SidebarBase({ links }: SidebarBaseProps) {
  return (
    <aside className="sticky top-[121px] hidden h-[calc(100vh-121px)] w-[284px] shrink-0 flex-col justify-between border-r border-line pr-6 lg:flex">
      <div>
        <nav className="flex flex-col overflow-y-scroll pb-4">
          <ul className="space-y-0.5">
            {links.map((link) => (
              <SidebarBaseLink key={link.label} href={link.href}>
                {link.label}
              </SidebarBaseLink>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}

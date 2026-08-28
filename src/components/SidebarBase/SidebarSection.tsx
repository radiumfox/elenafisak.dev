import { Fragment } from "react";
import { SidebarBaseLink } from "./SidebarBaseLink";

export interface SidebarSectionItem {
  label: string;
  href?: string;
}

interface SidebarSectionProps {
  title: string;
  className?: string;
  items: SidebarSectionItem[];
}

export function SidebarSection({ title, className, items }: SidebarSectionProps) {
  return (
    <Fragment>
      <p className={className ?? "mb-2 px-3"}>{title}</p>
      <ul className="space-y-1">
        {items.map((item) => (
          <SidebarBaseLink key={item.label} href={item.href}>
            {item.label}
          </SidebarBaseLink>
        ))}
      </ul>
    </Fragment>
  );
}

import type { ReactNode } from "react";

interface SidebarBaseLinkProps {
  href?: string;
  children: ReactNode;
}

export function SidebarBaseLink({ href, children }: SidebarBaseLinkProps) {
  if (href) {
    return (
      <li>
        <a href={href}>{children}</a>
      </li>
    );
  }
  return <li>{children}</li>;
}

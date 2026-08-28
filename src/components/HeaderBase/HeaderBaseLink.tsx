import type { ReactNode } from "react";

interface HeaderBaseLinkProps {
  href?: string;
  children: ReactNode;
}

export function HeaderBaseLink({ href, children }: HeaderBaseLinkProps) {
  if (href) {
    return <a href={href}>{children}</a>;
  }
  return <span>{children}</span>;
}

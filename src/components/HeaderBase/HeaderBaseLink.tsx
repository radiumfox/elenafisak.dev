import type { ReactNode } from "react";
import Link from "next/link";

interface HeaderBaseLinkProps {
  href?: string;
  children: ReactNode;
}

export function HeaderBaseLink({ href, children }: HeaderBaseLinkProps) {
  if (href) {
    return <Link href={href}>{children}</Link>;
  }
  return <span>{children}</span>;
}

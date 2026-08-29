import { type ReactNode } from 'react';

interface NavLinkProps {
  id: string;
  children?: ReactNode;
  active?: boolean;
  onClick?: () => void;
}

export function NavLink({ id, children, active, onClick }: NavLinkProps) {
  return (<a
    onClick={onClick}
    href={`#${id}`}
    aria-current={active ? 'true' : undefined}
    className={`block rounded-lg px-3 py-2.5 text-[15px] font-medium transition-colors ${
      active
        ? 'text-accent'
        : 'text-muted hover:bg-subtle hover:text-foreground'
    }`}
  >
    {children}
  </a>);
}

export interface MenuDropdownLink {
  name: string;
  href?: string;
}

export interface MenuDropdownProps {
  links: MenuDropdownLink[];
  className?: string;
}

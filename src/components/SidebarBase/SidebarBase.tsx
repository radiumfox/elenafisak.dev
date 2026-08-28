import type { ReactNode } from "react";
import { SidebarSection } from "./SidebarSection";

export interface SidebarSectionData {
  title: string;
  className?: string;
  items: { label: string; href?: string }[];
}

interface SidebarBaseProps {
  sections: SidebarSectionData[];
  children?: ReactNode;
}

export function SidebarBase({ sections, children }: SidebarBaseProps) {
  return (
    <aside className="sticky top-[121px] hidden h-[calc(100vh-121px)] w-[284px] shrink-0 flex-col justify-between lg:flex">
      <div>
        <nav className="flex h-[calc(100vh-260px)] flex-col overflow-y-scroll pb-4 pr-2">
          {sections.map((section) => (
            <SidebarSection
              key={section.title}
              title={section.title}
              className={section.className}
              items={section.items}
            />
          ))}
          {children}
        </nav>
      </div>
    </aside>
  );
}

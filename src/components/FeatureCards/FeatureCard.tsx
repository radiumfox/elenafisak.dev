import type { ComponentType, ReactNode, SVGProps } from 'react';

interface FeatureCardProps {
  title: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  children: ReactNode;
}

export function FeatureCard({ title, icon: Icon, children }: FeatureCardProps) {
  return (
    <div className="cursor-default select-none bg-background/60 p-6 backdrop-blur-sm transition-colors hover:bg-subtle/80 xs:min-h-[260px]">
      <Icon className="h-6 w-6 text-accent" />
      <h3 className="mt-3 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-muted">{children}</p>
    </div>
  );
}

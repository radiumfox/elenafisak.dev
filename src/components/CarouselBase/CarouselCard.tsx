import type { ComponentType, ReactNode, SVGProps } from 'react';

interface CarouselCardProps {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  children?: ReactNode;
}

export function CarouselCard({ icon: Icon, title, description, children }: CarouselCardProps) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-line bg-background p-6 transition-colors hover:bg-subtle">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
        <Icon className="h-5 w-5 text-background" />
      </div>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-2 flex-1 text-muted">{description}</p>
      {children}
    </div>
  );
}

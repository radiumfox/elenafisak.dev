import type { ReactNode } from 'react';

interface ContentSectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function ContentSection({ id, children, className = '' }: ContentSectionProps) {
  return (
    <section id={id} className={`scroll-mt-18 ${className}`}>
      <article className="space-y-4">{children}</article>
    </section>
  );
}

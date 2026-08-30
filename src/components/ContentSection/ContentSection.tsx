import type { ReactNode } from 'react';

interface ContentSectionProps {
  id: string;
  children: ReactNode;
}

export function ContentSection({ id, children }: ContentSectionProps) {
  return (
    <section id={id} className="scroll-mt-18">
      <article className="space-y-4">{children}</article>
    </section>
  );
}

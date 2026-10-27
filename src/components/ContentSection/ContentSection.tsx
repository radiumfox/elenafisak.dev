import type { ReactNode } from 'react';

interface ContentSectionProps {
  id: string;
  children?: ReactNode;
  className?: string;
  title?: string;
  description?: string;
}

export function ContentSection({ id, children, className = '', title, description }: ContentSectionProps) {
  return (
    <section id={id} className={`scroll-mt-18 ${className}`}>
      <article className="space-y-6">
        <span className="block h-1 w-12 rounded-full bg-accent" />
        {(title || description) && (
          <div className="space-y-3">
            {title && (
              <h2 className="text-title xs:text-heading font-bold tracking-tight">
                {title}
              </h2>
            )}
            {description && <p className="text-muted">{description}</p>}
          </div>
        )}
        {children}
      </article>
    </section>
  );
}

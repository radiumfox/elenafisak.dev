import { ArrowRightIcon } from '@/lib/icons/ArrowRightIcon';
import type { ArticleCardProps } from './types';

function formatDate(date: Date) {
  return date
    .toLocaleDateString('en-US', {
      month: 'short',
      day: '2-digit',
      year: 'numeric',
    })
    .toUpperCase();
}

export function ArticleCard({
  icon,
  title,
  description,
  timeToRead,
  category,
  date,
  href = '#',
}: ArticleCardProps) {
  return (
    <a
      href={href}
      className="group flex w-fit h-full flex-col gap-4 rounded-2xl border border-line p-6 transition-colors hover:border-accent"
    >
      <div className="flex h-30 w-30 items-center justify-center rounded-lg text-accent">
        {icon}
      </div>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="uppercase text-accent font-bold">{category}</p>
        <p className="text-muted">{formatDate(date)}</p>
      </div>
      <div className="space-y-2">
        <h3 className="text-2xl font-semibold transition-colors">{title}</h3>
        <p className="text-muted">{description}</p>
      </div>
      <div className="flex justify-between">
        <span>{timeToRead}</span>
        <div className="mt-auto flex items-center gap-1.5 text-sm font-medium text-accent">
          <span>Read article</span>
          <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </a>
  );
}

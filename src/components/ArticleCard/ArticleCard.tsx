import Image from 'next/image';
import { ArrowRightIcon } from '@/lib/icons/ArrowRightIcon';
import { urlFor } from '@/lib/sanity';
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
  image,
  title,
  description,
  timeToRead,
  category,
  date,
  href = '#',
}: ArticleCardProps) {
  const lqip = image?.asset?.metadata?.lqip;

  return (
    <a
      href={href}
      className="group flex w-full h-full flex-col gap-4 rounded-2xl border border-line p-6 transition-colors hover:border-accent"
    >
      {image && (
        <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-subtle/40">
          <Image
            src={urlFor(image).width(800).height(450).fit('crop').url()}
            alt={image.alt ?? title}
            fill
            unoptimized
            placeholder={lqip ? 'blur' : 'empty'}
            blurDataURL={lqip}
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="uppercase text-accent font-bold">{category}</p>
        <p className="text-muted">{formatDate(date)}</p>
      </div>
      <div className="space-y-2">
        <h3 className="text-2xl font-semibold transition-colors">{title}</h3>
        <p className="text-muted">{description}</p>
      </div>
      <div className="flex justify-between mt-auto">
        <span>{timeToRead}</span>
        <div className="mt-auto flex items-center gap-1.5 text-sm font-medium text-accent">
          <span>Read article</span>
          <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </a>
  );
}

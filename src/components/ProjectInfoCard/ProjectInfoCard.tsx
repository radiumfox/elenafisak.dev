import { NumberedList } from '@/components/NumberedList';
import { ExternalLinkIcon } from '@/lib/icons/ExternalLinkIcon';
import type { ProjectInfoCardProps } from './types';

export function ProjectInfoCard({
  title,
  description,
  features,
  href,
  videoSrc,
}: ProjectInfoCardProps) {
  return (
    <div className="flex w-full gap-x-6">
      <div className="shrink-0 space-y-5">
        <h3 className="text-2xl font-semibold">{title}</h3>

        <p className="max-w-[560px] text-muted">{description}</p>

        <NumberedList items={features} />

        <a
          href={href}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-opacity hover:opacity-80"
          target="_blank"
        >
          To GitHub
          <ExternalLinkIcon className="h-3.5 w-3.5" />
        </a>
      </div>

      <div className="w-full aspect-video overflow-hidden rounded-2xl border border-line bg-subtle/40">
        {videoSrc ? (
          <video src={videoSrc} controls className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-muted">
            <span className="text-sm font-medium">Video placeholder</span>
          </div>
        )}
      </div>
    </div>
  );
}

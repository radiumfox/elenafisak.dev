import { NumberedList } from '@/components/NumberedList';
import { ExternalLinkIcon } from '@/lib/icons/ExternalLinkIcon';
import { PlayIcon } from '@/lib/icons/PlayIcon';
import type { ProjectInfoCardProps } from './types';

export function ProjectInfoCard({
  title,
  description,
  features,
  href,
  videoSrc,
}: ProjectInfoCardProps) {
  const videoNode = videoSrc ? (
    <video src={videoSrc} controls className="h-full w-full object-cover" />
  ) : (
    <div className="flex h-full w-full items-center justify-center text-muted">
      <PlayIcon className="h-12 w-12" />
    </div>
  );

  return (
    <div className="flex w-full flex-col gap-6 xl:flex-row xl:gap-x-6">
      <div className="min-w-0 space-y-5 shrink-0">
        <h3 className="text-2xl font-semibold">{title}</h3>

        <div className="max-w-[500px] aspect-video overflow-hidden rounded-2xl border border-line bg-subtle/40 xl:hidden">
          {videoNode}
        </div>

        <p className="max-w-[600px] w-full text-muted">{description}</p>

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

      <div className="hidden w-full aspect-video overflow-hidden rounded-2xl border border-line bg-subtle/40 xl:block">
        {videoNode}
      </div>
    </div>
  );
}

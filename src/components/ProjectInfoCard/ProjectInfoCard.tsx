import { NumberedList } from '@/components/NumberedList';
import { ExternalLinkIcon } from '@/lib/icons/ExternalLinkIcon';
import { PlayIcon } from '@/lib/icons/PlayIcon';
import { MUX_PLAYER_BASE_URL } from '@/lib/sanity';
import type { ProjectInfoCardProps } from './types';
import { ButtonBase } from '@/components/ButtonBase';

export function ProjectInfoCard({
  title,
  description,
  features,
  href,
  appHref,
  video,
}: ProjectInfoCardProps) {
  const embedUrl = video ? `${MUX_PLAYER_BASE_URL}/${video.playbackId}` : null;

  const videoNode = embedUrl ? (
    <iframe
      src={embedUrl}
      title={title}
      allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
      allowFullScreen
      className="absolute inset-0 h-full w-full border-0"
    />
  ) : (
    <div className="absolute inset-0 flex h-full w-full items-center justify-center text-muted">
      <PlayIcon className="h-12 w-12" />
    </div>
  );

  return (
    <div className="flex w-full flex-col gap-6 xl:flex-row xl:gap-x-6 xl:items-center">
      <div className="w-full xl:w-[40%] space-y-5 shrink-0">
        <h3 className="text-3xl font-semibold">{title}</h3>

        <div className="relative xl:max-w-[500px] aspect-video overflow-hidden rounded-2xl border border-line bg-subtle/40 xl:hidden">
          {videoNode}
        </div>

        <p className="max-w-[600px] w-full text-muted">{description}</p>

        <NumberedList className="max-w-[600px]" items={features} />

        {
          (appHref || href) && (
            <div className="flex flex-col gap-y-4 pt-5 items-center sm:items-start">
              {appHref && (
                <ButtonBase
                  className="w-full sm:w-1/2"
                  text="View App"
                  href={appHref}
                  target="_blank"
                  icon={ExternalLinkIcon}
                />
              )}

              {href && (
                <a
                  href={href}
                  className="w-fit inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-opacity hover:opacity-80"
                  target="_blank"
                >
                  To GitHub
                  <ExternalLinkIcon className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          )
        }
      </div>



      <div className="h-[520px] relative hidden w-full aspect-video overflow-hidden rounded-2xl border border-line bg-subtle/40 xl:block">
        {videoNode}
      </div>
    </div>
  );
}

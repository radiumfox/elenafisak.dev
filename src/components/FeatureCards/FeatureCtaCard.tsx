import { ArrowRightIcon } from '@/lib/icons/ArrowRightIcon';

interface FeatureCtaCardProps {
  title: string;
  href: string;
  linkText: string;
}

export function FeatureCtaCard({ title, href, linkText }: FeatureCtaCardProps) {
  return (
    <div className="relative overflow-hidden flex flex-col justify-between gap-4 bg-background/5 p-6 sm:col-span-2 xl:col-span-1 min-h-[160px]">
      <span className="aurora-blob aurora-blob-1 pointer-events-none" />
      <h3 className="relative z-10 text-lg font-semibold">{title}</h3>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="relative z-10 inline-flex w-fit items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-background transition-opacity hover:opacity-90"
      >
        {linkText}
        <ArrowRightIcon className="h-4 w-4" />
      </a>
    </div>
  );
}

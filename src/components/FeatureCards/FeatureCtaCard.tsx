import { ArrowRightIcon } from '@/lib/icons/ArrowRightIcon';
import { ButtonBase } from '@/components/ButtonBase';

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
      <ButtonBase
        href={href}
        target="_blank"
        className="relative z-10 w-fit px-4 py-2"
      >
        {linkText}
        <ArrowRightIcon className="h-4 w-4" />
      </ButtonBase>
    </div>
  );
}

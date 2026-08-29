interface FeatureCtaCardProps {
  title: string;
  href: string;
  linkText: string;
}

export function FeatureCtaCard({ title, href, linkText }: FeatureCtaCardProps) {
  return (
    <div className="flex flex-col justify-between gap-4 bg-background/60 p-6">
      <h3 className="text-lg font-semibold">{title}</h3>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="inline-flex w-fit items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-background transition-opacity hover:opacity-90"
      >
        {linkText}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4"
          aria-hidden="true"
        >
          <path d="M5 12h14" />
          <path d="m13 6 6 6-6 6" />
        </svg>
      </a>
    </div>
  );
}

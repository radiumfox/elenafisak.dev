import type { CertificateCardProps } from './types';
import { ButtonBase } from '@/components/ButtonBase';
import { ExternalLinkIcon } from '@/lib/icons/ExternalLinkIcon';

export function CertificateCard({
  title,
  company,
  date,
  skills,
  href,
  className = '',
}: CertificateCardProps) {
  return (
    <div className={`flex h-full flex-col gap-y-4 rounded-2xl border border-line  p-6  ${className}`}>
      <div className="flex flex-col gap-2 md:flex-row md:justify-between md:gap-0">
        <div className="space-y-2">
          <p className="flex-1 text-muted">{company}</p>
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <p className="order-first text-sm text-muted md:order-none">{date}</p>
      </div>

      {skills.length > 0 && (
        <ul className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <li
              key={skill}
              className="rounded-full border border-line px-3 py-1 text-xs font-medium text-muted"
            >
              {skill}
            </li>
          ))}
        </ul>
      )}

      {href && (
        <ButtonBase
          className="self-start mt-4"
          href={href}
          target="_blank"
          text="View credential"
          mode="secondary"
          icon={ExternalLinkIcon}
        />
      )}
    </div>
  );
}

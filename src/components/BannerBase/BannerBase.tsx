import type { BannerBaseProps } from './types';

export function BannerBase({ text, imgSrc, className }: BannerBaseProps) {
  return (
    <div
      className={`relative flex min-h-60 items-center justify-center overflow-hidden rounded-2xl bg-cover bg-center p-8 text-center text-2xl font-semibold text-white ${className ?? ''}`}
      style={{ backgroundImage: `url('${imgSrc}')` }}
    >
      <div className="absolute inset-0 bg-black/70" />
      <span className="relative">{text}</span>
    </div>
  );
}

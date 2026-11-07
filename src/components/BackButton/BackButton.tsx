'use client';

import { usePathname, useRouter } from 'next/navigation';
import { ButtonBase } from '@/components/ButtonBase';
import { ArrowLeftIcon } from '@/lib/icons/ArrowLeftIcon';
import type { BackButtonProps } from './types';

export function BackButton({ className }: BackButtonProps) {
  const pathname = usePathname();
  const router = useRouter();

  if (pathname === '/') return null;

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push('/');
    }
  };

  return (
    <div className="w-fit pt-8">
      <ButtonBase text="Back" mode="secondary" size="lg" icon={ArrowLeftIcon} className={className} onClick={handleBack} />
    </div>
  );
}

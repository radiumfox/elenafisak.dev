'use client';

import { useEffect, useState } from 'react';
import { ArrowUpIcon } from '@/lib/icons/ArrowUpIcon';

interface ScrollToTopButtonProps {
  threshold?: number;
}

export function ScrollToTopButton({ threshold = 400 }: ScrollToTopButtonProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > threshold);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-accent text-background transition-opacity hover:opacity-90 cursor-pointer ${
        visible ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      <ArrowUpIcon className="h-5 w-5" />
    </button>
  );
}

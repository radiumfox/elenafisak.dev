'use client';

import { useEffect, useState } from 'react';
import type { Swiper as SwiperClass } from 'swiper/types';

interface CarouselPaginationProps {
  swiper: SwiperClass | null;
  count: number;
  className?: string;
}

export function CarouselPagination({ swiper, count, className = '' }: CarouselPaginationProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!swiper) return;
    const update = () => setActiveIndex(swiper.realIndex);
    swiper.on('slideChange', update);
    update();
    return () => {
      swiper.off('slideChange', update);
    };
  }, [swiper]);

  return (
    <div className={`mt-4 flex w-full items-center justify-center gap-1.5 ${className}`}>
      {Array.from({ length: count }).map((_, index) => {
        const active = index === activeIndex;
        return (
          <button
            key={index}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            aria-current={active}
            onClick={() => swiper?.slideToLoop(index)}
            className={`h-2 cursor-pointer rounded-full transition-all duration-300 ${
              active ? 'w-4 bg-accent' : 'w-2 bg-line hover:bg-muted'
            }`}
          />
        );
      })}
    </div>
  );
}

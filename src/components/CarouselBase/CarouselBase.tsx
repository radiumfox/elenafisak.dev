'use client';

import type { ReactNode } from 'react';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import type { Swiper as SwiperClass } from 'swiper/types';
import { CarouselNavButton } from './CarouselNavButton';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

interface CarouselBaseProps {
  slidesPerView?: number;
  navigation?: boolean;
  autoplay?: boolean;
  autoplayDelay?: number;
  children: ReactNode[];
}

export function CarouselBase({
  navigation = true,
  autoplay = false,
  autoplayDelay = 3000,
  children,
}: CarouselBaseProps) {
  const swiperRef = useRef<SwiperClass | null>(null);
  const slides = Array.isArray(children) ? children : [children];

  return (
    <div className="carousel-base w-full overflow-visible">
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={1}
        initialSlide={1}
        loop={true}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1362: { slidesPerView: 3 },
        }}
        spaceBetween={16}
        navigation={false}
        autoplay={
          autoplay
            ? { delay: autoplayDelay, disableOnInteraction: false, pauseOnMouseEnter: true }
            : undefined
        }
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>{slide}</SwiperSlide>
        ))}
      </Swiper>

      {navigation && (
        <div className="mt-4 flex items-center justify-center gap-2 w-full">
          <CarouselNavButton
            label="Previous slides"
            direction="prev"
            onClick={() => swiperRef.current?.slidePrev()}
          />
          <CarouselNavButton
            label="Next slides"
            direction="next"
            onClick={() => swiperRef.current?.slideNext()}
          />
        </div>
      )}
    </div>
  );
}

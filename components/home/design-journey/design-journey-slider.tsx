"use client";

import { useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { designJourneySlides } from "./design-journey-data";
import { DesignJourneyCard } from "./design-journey-card";

import "swiper/css";

export function DesignJourneySlider() {
  const [activeRealIndex, setActiveRealIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  // Triple the slides to guarantee Swiper always has enough elements for a perfect infinite loop
  const extendedSlides = [...designJourneySlides, ...designJourneySlides, ...designJourneySlides];

  return (
    <div className="relative w-full mx-auto mb-8 overflow-hidden h-[540px] sm:h-[640px]">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        spaceBetween={0}
        slidesPerView="auto"
        centeredSlides={true}
        loop={true}
        onSwiper={setSwiperInstance}
        onRealIndexChange={(swiper) => setActiveRealIndex(swiper.realIndex)}
        className="design-journey-swiper !overflow-visible py-10 h-[480px] sm:h-[580px]"
      >
        {extendedSlides.map((slide, i) => (
          <SwiperSlide
            key={`${slide.id}-${i}`}
            className="!w-auto flex items-end justify-center pb-10"
          >
            {({ isActive, isPrev, isNext }) => (
              <div className="w-[260px] sm:w-[300px] md:w-[320px] lg:w-[350px]">
                <DesignJourneyCard
                  slide={slide}
                  isActive={isActive}
                  isNeighbor={isPrev || isNext}
                />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-4 flex justify-center gap-2">
        {designJourneySlides.map((_, i) => (
          <button
            key={i}
            onClick={() => swiperInstance?.slideToLoop(i)}
            className={`h-2 rounded-full transition-all duration-300 ease-out ${(activeRealIndex % designJourneySlides.length) === i
                ? "w-8 bg-primary opacity-100"
                : "w-3 bg-primary/35 hover:bg-primary/60"
              }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

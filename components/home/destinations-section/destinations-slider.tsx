"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { destinations } from "./destinations-data";
import { DestinationCard } from "./destination-card";

import "swiper/css";
import "swiper/css/pagination";

export function DestinationsSlider() {
  return (
    <div className="mb-12 lg:hidden">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={16}
        slidesPerView={1.08}
        centeredSlides
        breakpoints={{
          480: { slidesPerView: 1.12, spaceBetween: 18 },
          640: { slidesPerView: 1.18, spaceBetween: 20 },
        }}
        className="destinations-swiper"
      >
        {destinations.map((dest) => (
          <SwiperSlide key={dest.name} className="box-border py-1">
            <DestinationCard dest={dest} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

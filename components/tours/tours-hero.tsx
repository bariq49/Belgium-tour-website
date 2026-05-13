import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MaxWidthWrapper } from "@/components/shared/max-width-wrapper";
import { IMAGES } from "@/constants/image-constants";
import { TourSidebar } from "@/components/tours/tour-sidebar";

export const ToursHero = () => {
  return (
    <div className="relative">
      {/* Hero Banner Area */}
      <section className="relative h-[450px] md:h-[550px] w-full overflow-hidden flex items-center">
        <Image
          src={IMAGES.tours.banner}
          alt="Tours & Vacations"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 z-10" />

        <MaxWidthWrapper className="relative z-20 w-full">
          <div className="max-w-2xl text-center md:text-left md:ml-12 lg:ml-0">
            <h1 className="text-white text-5xl md:text-7xl font-inria mb-6">
              Tours & Vacations
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-xl font-roboto font-light leading-relaxed">
              Discover tailor-made luxury travel experiences crafted to match your preferences. From handpicked accommodations to exclusive moments.
            </p>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
};


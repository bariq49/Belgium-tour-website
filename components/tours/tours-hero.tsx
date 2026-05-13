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
      <section className="bg-white py-20 relative">
        <MaxWidthWrapper>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7 space-y-10">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground font-inria leading-tight">
                  Luxury Tours & Vacations
                </h2>
                <div className="h-1 w-20 bg-primary/20" />
              </div>

              <p className="text-paragraph text-lg leading-relaxed opacity-90 font-roboto font-light">
                We have connected discerning travelers with top luxury travel specialists around the world. Exceptional service, handpicked boutique properties, and carefully selected experiences are just the beginning of what&apos;s possible for your luxury vacation. Every moment is thoughtfully curated for you. Use these sample luxury vacation itineraries for inspiration, then rely on the deep local knowledge of destination experts to plan a personalized journey tailored entirely to your preferences.
              </p>

              <Link
                href="/contact"
                className="inline-block bg-black text-white px-12 py-5 text-sm font-bold tracking-widest uppercase transition-all hover:bg-primary"
              >
                Get Started
              </Link>
            </div>
            <div className="lg:col-span-5 relative">
              <TourSidebar isFloating />
            </div>

          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
};


"use client";

import React from "react";
import { IMAGES } from "@/constants/image-constants";
import { HeroRatings } from "./hero-ratings";
import { BookingStep1 } from "@/components/booking/step-1/booking-step-1";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${IMAGES.home.banner})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        {/* Title & Subtitle */}
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-inria leading-tight">
            Tailored Private Journeys <br className="hidden md:block" /> Across Belgium
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-medium">
            Private guided tours with chauffeur from Brussels to Bruges, Ghent, Antwerp and beyond...
          </p>
        </div>

        {/* Search / Booking Form */}
        <div className="max-w-xl mx-auto w-full mt-8">
          <BookingStep1 />
        </div>

        {/* Ratings */}
        <HeroRatings />
      </div>
    </section>
  );
};

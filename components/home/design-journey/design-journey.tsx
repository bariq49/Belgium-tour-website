"use client";

import React from "react";
import Image from "next/image";
import { MaxWidthWrapper } from "@/components/shared/max-width-wrapper";
import { Button } from "@/components/ui/button";

const journeyImages = [
  {
    src: "/home/hammad-sandhu/.gemini/antigravity/brain/c2c6af82-ba6e-404d-929f-68cedbb51fe0/design_namur_citadel_1778391184847.png",
    height: "h-[280px] md:h-[350px]",
    offset: "translate-y-24",
    zIndex: "z-10",
  },
  {
    src: "/home/hammad-sandhu/.gemini/antigravity/brain/c2c6af82-ba6e-404d-929f-68cedbb51fe0/design_bruges_belfry_1778391170112.png",
    height: "h-[320px] md:h-[400px]",
    offset: "translate-y-16",
    zIndex: "z-20",
  },
  {
    src: "/home/hammad-sandhu/.gemini/antigravity/brain/c2c6af82-ba6e-404d-929f-68cedbb51fe0/design_gravensteen_1778391125307.png",
    height: "h-[360px] md:h-[450px]",
    offset: "translate-y-8",
    zIndex: "z-30",
  },
  {
    src: "/home/hammad-sandhu/.gemini/antigravity/brain/c2c6af82-ba6e-404d-929f-68cedbb51fe0/design_antwerp_station_1778391140994.png",
    height: "h-[400px] md:h-[500px]",
    offset: "translate-y-4",
    zIndex: "z-40",
  },
  {
    src: "/home/hammad-sandhu/.gemini/antigravity/brain/c2c6af82-ba6e-404d-929f-68cedbb51fe0/design_brussels_skyline_1778391155153.png",
    height: "h-[440px] md:h-[550px]",
    offset: "translate-y-0",
    zIndex: "z-50",
  },
];

export const DesignJourney = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <MaxWidthWrapper>
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Design Your Perfect Journey
          </h2>
          <p className="text-paragraph text-base md:text-lg leading-relaxed opacity-80">
            Plan your perfect journey with us by sharing your travel details and preferences. 
            Whether you’re looking for a cultural escape, scenic landscapes, or a relaxing getaway, 
            this page helps us understand your needs to create a personalized experience. 
            Tell us your preferred destinations, travel dates, interests, and budget, 
            and our team will design a tailored itinerary just for you.
          </p>
        </div>

        {/* Stacked Image Gallery */}
        <div className="relative h-[500px] md:h-[650px] mb-16 px-4 md:px-0">
          <div className="flex items-end justify-center -space-x-4 md:-space-x-12 h-full">
            {journeyImages.map((img, index) => (
              <div
                key={index}
                className={`relative flex-1 max-w-[200px] ${img.height} ${img.offset} ${img.zIndex} rounded-sm overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-105 hover:z-[60] group`}
              >
                <Image
                  src={img.src}
                  alt={`Journey destination ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <Button
            className="bg-black text-white px-12 py-7 text-lg font-bold rounded-sm hover:bg-black/90 transition-all active:scale-95 shadow-xl"
          >
            Design My Dream Trip
          </Button>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

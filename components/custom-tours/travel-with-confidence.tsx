import React from "react";
import { MaxWidthWrapper } from "@/components/shared/max-width-wrapper";

const stats = [
  {
    value: "24/7",
    label: "Support During Your Trip",
  },
  {
    value: "100%",
    label: "Personalized Itineraries",
  },
  {
    value: "4.9★",
    label: "Average Customer Rating",
  },
];

export const TravelWithConfidence = () => {
  return (
    <section className="py-24 bg-white">
      <MaxWidthWrapper>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-inria">
            Travel With Confidence
          </h2>
          <p className="text-paragraph text-sm md:text-base opacity-70 font-roboto font-light leading-relaxed">
            Our team carefully plans every detail to ensure a stress-free journey. We work with trusted local partners, experienced guides, and premium service providers to deliver a smooth and memorable travel experience.
          </p>
        </div>

        {/* Stats Box */}
        <div className="bg-[#F0ECE9] p-12 md:p-20 text-center space-y-12">
          <p className="text-paragraph text-sm md:text-base opacity-80 font-roboto font-light leading-relaxed max-w-4xl mx-auto">
            Whether you&apos;re traveling solo, as a couple, with family, or in a group, we adapt your itinerary to meet your expectations. From the first inquiry to the moment we say goodbye, you can count on us to exceed your expectations at every turn.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="space-y-3">
                <p className="text-5xl md:text-6xl font-bold text-primary font-inria">
                  {stat.value}
                </p>
                <p className="text-xs md:text-sm font-bold text-paragraph/60 uppercase tracking-[0.2em]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

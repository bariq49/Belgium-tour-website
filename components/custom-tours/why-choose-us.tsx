import React from "react";
import { MaxWidthWrapper } from "@/components/shared/max-width-wrapper";

const benefits = [
  {
    title: "Flexible schedules tailored to your pace",
    description: "Travel at your own rhythm without being rushed through experiences.",
  },
  {
    title: "Handpicked accommodations and experiences",
    description: "Stay in carefully selected properties that match your preferences.",
  },
  {
    title: "Private transportation and professional chauffeurs",
    description: "Enjoy comfort and convenience with dedicated drivers.",
  },
  {
    title: "Local expert recommendations",
    description: "Benefit from insider knowledge and authentic local experiences.",
  },
  {
    title: "Unique activities beyond standard packages",
    description: "Access exclusive experiences not available on group tours.",
  },
  {
    title: "Full support before and during your trip",
    description: "24/7 assistance to ensure your journey goes smoothly.",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-white">
      <MaxWidthWrapper>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-inria">
            Why Travelers Choose Custom Tours
          </h2>
          <p className="text-paragraph text-sm md:text-base opacity-80 font-roboto font-light leading-relaxed">
            Every tour we offer is backed by our promise of exceptional quality, professional service, and unforgettable experiences.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => (
            <div 
              key={idx} 
              className="bg-[#FAF9F7] p-10 space-y-4 min-h-[220px] flex flex-col justify-center transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <h3 className="text-lg font-bold text-foreground font-inria leading-snug">
                {benefit.title}
              </h3>
              <p className="text-sm text-paragraph opacity-70 font-roboto font-light leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

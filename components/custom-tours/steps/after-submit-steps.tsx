import React from "react";
import { MaxWidthWrapper } from "@/components/shared/max-width-wrapper";

const steps = [
  {
    number: "1",
    title: "Initial Review",
    description: "Our travel specialists will review your preferences within 24 hours and begin crafting your personalized itinerary.",
  },
  {
    number: "2",
    title: "Personalized Proposal",
    description: "You'll receive a detailed proposal including suggested routes, experiences, accommodations, and pricing.",
  },
  {
    number: "3",
    title: "Refinement & Booking",
    description: "We'll work with you to refine the plan until everything is perfect, then handle all bookings and arrangements.",
  },
];

export const AfterSubmitSteps = () => {
  return (
    <section className="py-24 bg-white">
      <MaxWidthWrapper>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-inria">
            After You Submit Your Request
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center space-y-6">
              {/* Number Circle */}
              <div className="w-20 h-20 rounded-full bg-[#FAF6F2] flex items-center justify-center text-3xl font-bold text-primary font-inria shadow-sm">
                {step.number}
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground font-inria">
                  {step.title}
                </h3>
                <p className="text-sm text-paragraph opacity-70 font-roboto font-light leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

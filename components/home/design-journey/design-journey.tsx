"use client";

import React from "react";
import { MaxWidthWrapper } from "@/components/shared/max-width-wrapper";
import { DesignJourneySlider } from "./design-journey-slider";

export const DesignJourney = () => {
  return (
    <section className="overflow-x-clip bg-white py-24">
      <MaxWidthWrapper>
        <div className="mx-auto mb-16 max-w-3xl space-y-6 text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Design Your Perfect Journey
          </h2>
          <p className="text-base leading-relaxed text-paragraph opacity-80 md:text-lg">
            Plan your perfect journey with us by sharing your travel details and preferences.
            Whether you&apos;re looking for a cultural escape, scenic landscapes, or a relaxing
            getaway, this page helps us understand your needs to create a personalized experience.
            Tell us your preferred destinations, travel dates, interests, and budget, and our team
            will design a tailored itinerary just for you.
          </p>
        </div>

        <DesignJourneySlider />
      </MaxWidthWrapper>
    </section>
  );
};

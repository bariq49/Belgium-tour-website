"use client";

import React from "react";
import { MaxWidthWrapper } from "@/components/shared/max-width-wrapper";
import { Button } from "@/components/ui/button";
import { destinations } from "./destinations-data";
import { DestinationCard } from "./destination-card";
import { DestinationsSlider } from "./destinations-slider";

export const DestinationsSection = () => {
  return (
    <section className="py-24 bg-background">
      <MaxWidthWrapper>
        <div className="mb-16 space-y-4 text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Popular Private Tour Destinations
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-paragraph opacity-70 md:text-base">
            Explore Belgium&apos;s most captivating destinations with our curated selection of private tours
          </p>
        </div>

        <DestinationsSlider />

        <div className="mb-12 hidden grid-cols-5 gap-4 lg:grid">
          {destinations.map((dest) => (
            <DestinationCard key={dest.name} dest={dest} />
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

"use client";

import React from "react";
import { MaxWidthWrapper } from "@/components/shared/max-width-wrapper";
import { Compass } from "lucide-react";
import { cn } from "@/lib/utils";

const defaultSteps = [
  {
    number: "1.",
    title: "Share Your Travel Plans Dreams",
    description: "Begin by telling us about your ideal journey. Let us know your preferred destinations, travel dates, interests, and any special requests. Whether you’re listening to your needs carefully. In short, we’ll bring your travel dreams to life with a personalized itinerary.",
  },
  {
    number: "2.",
    title: "Meet Your Private Chauffeur",
    description: "On the day of your tour, your professional chauffeur arrives at your hotel or chosen pickup location in a luxury vehicle. Enjoy a warm welcome, comfortable seating, and a smooth start to your journey.",
  },
  {
    number: "3.",
    title: "Discover Your Perfect Journey",
    description: "Sit back and enjoy a carefully curated private tour designed just for you. Explore iconic landmarks, charming towns, and hidden treasures at your own pace, without the stress of planning or navigating.",
  },
];

interface HowItWorksProps {
  title?: string;
  subtitle?: string;
  steps?: { number: string; title: string; description: string }[];
  className?: string;
}

export const HowItWorks = ({
  title = "How It Works",
  subtitle = "Here’s how we create life-enriching, luxury travel experiences",
  steps = defaultSteps,
  className,
}: HowItWorksProps) => {
  return (
    <section className={cn("bg-background", className)}>
      <MaxWidthWrapper className="py-24">
        <div className="mb-20 flex flex-col justify-between gap-8 border-b border-gray-200 pb-12 md:flex-row md:items-start">
          <h2 className="font-inria text-4xl font-bold text-foreground md:text-5xl">
            {title}
          </h2>

          <div className="flex max-w-md items-start gap-4">
            <div className="mt-1 rounded-full bg-primary/10 p-2">
              <Compass className="h-6 w-6 text-primary" />
            </div>
            <p className="font-medium text-paragraph opacity-80 leading-snug text-lg">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={index} className="group space-y-6">
              <div className="flex items-baseline gap-4">
                <span className="text-6xl font-black text-primary/20 transition-colors duration-500 group-hover:text-primary">
                  {step.number}
                </span>
                <h3 className="font-inria text-2xl font-bold leading-tight text-foreground">
                  {step.title}
                </h3>
              </div>
              <p className="font-roboto text-base  font-light text-paragraph opacity-80 font-medium">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

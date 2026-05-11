"use client";

import React from "react";
import Image from "next/image";
import { MaxWidthWrapper } from "@/components/shared/max-width-wrapper";
import { Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const defaultSteps = [
  {
    number: "1.",
    title: "Share Your Travel Plans Dreams",
    description: "Begin by telling us about your ideal journey. Let us know your preferred destinations, travel dates, interests, and any special requests. Whether you’re listening to your needs carefully.",
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
  showBanner?: boolean;
  title?: string;
  subtitle?: string;
  steps?: { number: string; title: string; description: string }[];
  variant?: "default" | "centered";
  showCTA?: boolean;
  className?: string;
}

export const HowItWorks = ({
  showBanner = true,
  title = "How It Works",
  subtitle = "Here’s how we create life-enriching, luxury travel experiences",
  steps = defaultSteps,
  variant = "default",
  showCTA = true,
  className,
}: HowItWorksProps) => {
  const isCentered = variant === "centered";

  return (
    <section className={cn("bg-background", className)}>
      {/* Banner Image */}
      {showBanner && (
        <div className="relative w-full h-[300px] md:h-[400px]">
          <Image
            src="/assets/images/banner/how-it-works.png"
            alt="Brussels Panorama"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>
      )}

      <MaxWidthWrapper className="py-24">
        {/* Header */}
        <div className={cn(
          "flex flex-col gap-8 mb-20",
          isCentered
            ? "items-center text-center max-w-3xl mx-auto"
            : "md:flex-row md:items-start justify-between border-b border-gray-200 pb-12"
        )}>
          <h2 className={cn(
            "font-bold text-foreground font-inria",
            isCentered ? "text-3xl md:text-4xl" : "text-4xl md:text-5xl"
          )}>
            {title}
          </h2>

          <div className={cn(
            "flex items-start gap-4",
            isCentered ? "flex-col items-center" : "max-w-md"
          )}>
            {!isCentered && (
              <div className="mt-1 p-2 bg-primary/10 rounded-full">
                <Compass className="w-6 h-6 text-primary" />
              </div>
            )}
            <p className={cn(
              "text-paragraph leading-snug",
              isCentered ? "text-sm md:text-base opacity-60 font-roboto font-light" : "text-lg font-medium opacity-80"
            )}>
              {subtitle}
            </p>
          </div>
        </div>

        {/* Steps Grid */}
        <div className={cn(
          "grid grid-cols-1 md:grid-cols-3 gap-16",
          showCTA && "mb-20"
        )}>
          {steps.map((step, index) => (
            <div key={index} className={cn(
              "space-y-6 group",
              isCentered && "text-center"
            )}>
              <div className={cn(
                "flex items-baseline gap-4",
                isCentered ? "flex-col items-center" : ""
              )}>
                <span className={cn(
                  "font-black text-primary/20 group-hover:text-primary transition-colors duration-500",
                  isCentered ? "text-5xl md:text-6xl font-inria" : "text-6xl"
                )}>
                  {step.number}
                </span>
                <h3 className="text-2xl font-bold text-foreground leading-tight font-inria">
                  {step.title}
                </h3>
              </div>
              <p className="text-paragraph text-base md:text-lg leading-relaxed opacity-70 font-roboto font-light">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        {showCTA && (
          <div className="flex justify-center">
            <Button
              variant="outline"
              className="px-12 py-6 text-lg border-gray-300 hover:bg-black hover:text-white transition-all duration-300 rounded-sm font-medium bg-white shadow-sm"
            >
              Learn More
            </Button>
          </div>
        )}
      </MaxWidthWrapper>
    </section>
  );
};



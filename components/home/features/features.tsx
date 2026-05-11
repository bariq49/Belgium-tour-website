"use client";

import React from "react";
import { MaxWidthWrapper } from "@/components/shared/max-width-wrapper";
import { Medal, Sparkles, Users } from "lucide-react";

const featureItems = [
  {
    icon: Medal,
    title: "Certified Expert Guides",
    description: "Our experiences are led by certified professional guides, experts in history, culture, and heritage, delivering insightful and engaging narratives at the highest standard.",
  },
  {
    icon: Sparkles,
    title: "A Refined Cultural Experience",
    description: "We go beyond traditional tours by offering immersive storytelling and curated experiences, bringing each destination to life with depth and elegance.",
  },
  {
    icon: Users,
    title: "Tailored Specifically for You",
    description: "Every journey is fully personalized, designed around your interests, pace, and expectations for a truly bespoke experience. Also Travel in high-end vehicles with professional chauffeurs",
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-background">
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {featureItems.map((item, index) => (
            <div key={index} className="flex flex-col space-y-6 group">
              {/* Icon */}
              <div className="text-primary transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                <item.icon className="w-12 h-12 stroke-[1.5px]" />
              </div>

              {/* Text Content */}
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-foreground leading-tight">
                  {item.title}
                </h3>
                <p className="text-paragraph text-base md:text-lg leading-relaxed opacity-80">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

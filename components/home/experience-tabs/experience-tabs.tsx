"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MaxWidthWrapper } from "@/components/shared/max-width-wrapper";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { IMAGES } from "@/constants/image-constants";
import { Tabs } from "@/components/shared/tabs";

const experiences = [
  {
    id: "culture",
    label: "CULTURE & HERITAGE",
    title: "Culture & Heritage",
    description: "Immerse yourself in Belgium's rich history, from medieval towns to world-class museums. Discover the stories behind the architecture and traditions that shaped the heart of Europe.",
    image: IMAGES.home.experiences.culture,
  },
  {
    id: "food",
    label: "FOOD & BEER",
    title: "Food & Beer",
    description: "Embark on a gastronomic journey that broadens your culinary horizons. Unearth centuries-old beer secrets, savor world-famous chocolates, and discover the best local waffles and fries.",
    image: IMAGES.home.experiences.food,
  },
  {
    id: "scenic",
    label: "SCENIC JOURNEYS",
    title: "Scenic Journeys",
    description: "Discover the natural beauty of Belgium, from the rolling hills of the Ardennes to the serene North Sea coast. Enjoy breathtaking views and tranquil landscapes on a personalized scenic tour.",
    image: IMAGES.home.experiences.scenic,
  },
  {
    id: "historical",
    label: "HISTORICAL & BATTLEFIELD",
    title: "Historical & Battlefield",
    description: "Pay your respects and learn about the profound history of WWI and WWII battlefields. Visit Flanders Fields, Waterloo, and other significant sites with an expert guide.",
    image: IMAGES.home.experiences.historical,
  },
  {
    id: "tailored",
    label: "TAILORED EXPERIENCES",
    title: "Tailored Experiences",
    description: "Create a unique journey that reflects your specific interests and passions. Whether it's fashion, art, or hidden gems, we'll design a one-of-a-kind experience just for you.",
    image: IMAGES.home.experiences.tailored,
  },
];

export const ExperienceTabs = () => {
  const [activeTab, setActiveTab] = useState(experiences[0]);

  const handleTabChange = (id: string) => {
    const selected = experiences.find((exp) => exp.id === id);
    if (selected) setActiveTab(selected);
  };

  return (
    <section className="py-24 bg-background">
      <MaxWidthWrapper>
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Experiences beyond your wildest dreams
          </h2>
          <p className="text-paragraph text-sm md:text-base opacity-70 max-w-2xl mx-auto">
            Our private tours combine cultural immersion, expert storytelling, and premium service.
            Every detail is thoughtfully arranged for a seamless experience.
          </p>
        </div>

        {/* Tabs Navigation */}
        <Tabs
          items={experiences}
          activeId={activeTab.id}
          onChange={handleTabChange}
          className="mb-12"
        />

        {/* Content Card */}
        <div className="bg-white rounded-sm overflow-hidden min-h-[500px] md:h-[600px] flex flex-col md:flex-row transition-all duration-500">
          {/* Image Column */}
          <div className="relative w-full md:w-1/2 h-[300px] md:h-full">
            <Image
              src={activeTab.image}
              alt={activeTab.title}
              fill
              className="object-cover"
              key={activeTab.image}
            />
          </div>

          {/* Text Column */}
          <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center items-center text-center space-y-8">
            <h3 className="text-3xl font-bold text-foreground">
              {activeTab.title}
            </h3>
            <p className="text-paragraph text-lg leading-relaxed opacity-80 max-w-md">
              {activeTab.description}
            </p>
            <Button
              variant="outline"
              className="px-12 py-6 text-lg border-gray-300 hover:bg-black hover:text-white transition-all duration-300 rounded-sm font-medium"
            >
              Explore More
            </Button>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

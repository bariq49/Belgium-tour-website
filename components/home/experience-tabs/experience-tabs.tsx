"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MaxWidthWrapper } from "@/components/shared/max-width-wrapper";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const experiences = [
  {
    id: "culture",
    label: "CULTURE & HERITAGE",
    title: "Culture & Heritage",
    description: "Immerse yourself in Belgium's rich history, from medieval towns to world-class museums. Discover the stories behind the architecture and traditions that shaped the heart of Europe.",
    image: "/home/hammad-sandhu/.gemini/antigravity/brain/c2c6af82-ba6e-404d-929f-68cedbb51fe0/experience_culture_1778392107331.png",
  },
  {
    id: "food",
    label: "FOOD & BEER",
    title: "Food & Beer",
    description: "Embark on a gastronomic journey that broadens your culinary horizons. Unearth centuries-old beer secrets, savor world-famous chocolates, and discover the best local waffles and fries.",
    image: "/home/hammad-sandhu/.gemini/antigravity/brain/c2c6af82-ba6e-404d-929f-68cedbb51fe0/experience_food_1778392123719.png",
  },
  {
    id: "scenic",
    label: "SCENIC JOURNEYS",
    title: "Scenic Journeys",
    description: "Discover the natural beauty of Belgium, from the rolling hills of the Ardennes to the serene North Sea coast. Enjoy breathtaking views and tranquil landscapes on a personalized scenic tour.",
    image: "/home/hammad-sandhu/.gemini/antigravity/brain/c2c6af82-ba6e-404d-929f-68cedbb51fe0/experience_scenic_journeys_1778392137522.png",
  },
  {
    id: "historical",
    label: "HISTORICAL & BATTLEFIELD",
    title: "Historical & Battlefield",
    description: "Pay your respects and learn about the profound history of WWI and WWII battlefields. Visit Flanders Fields, Waterloo, and other significant sites with an expert guide.",
    image: "/home/hammad-sandhu/.gemini/antigravity/brain/c2c6af82-ba6e-404d-929f-68cedbb51fe0/experience_historical_battlefield_1778392151776.png",
  },
  {
    id: "tailored",
    label: "TAILORED EXPERIENCES",
    title: "Tailored Experiences",
    description: "Create a unique journey that reflects your specific interests and passions. Whether it's fashion, art, or hidden gems, we'll design a one-of-a-kind experience just for you.",
    image: "/home/hammad-sandhu/.gemini/antigravity/brain/c2c6af82-ba6e-404d-929f-68cedbb51fe0/experience_tailored_experiences_hidden_gems_of_belgium_1778392166513.png",
  },
];

export const ExperienceTabs = () => {
  const [activeTab, setActiveTab] = useState(experiences[0]);

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
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12 border-b border-gray-200">
          {experiences.map((exp) => (
            <button
              key={exp.id}
              onClick={() => setActiveTab(exp)}
              className={cn(
                "pb-4 text-xs md:text-sm font-bold tracking-widest transition-all relative",
                activeTab.id === exp.id 
                  ? "text-foreground" 
                  : "text-paragraph opacity-50 hover:opacity-100"
              )}
            >
              {exp.label}
              {activeTab.id === exp.id && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary animate-in fade-in duration-300" />
              )}
            </button>
          ))}
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-sm shadow-xl overflow-hidden min-h-[500px] md:h-[600px] flex flex-col md:flex-row transition-all duration-500 animate-in fade-in zoom-in-95">
          {/* Image Column */}
          <div className="relative w-full md:w-1/2 h-[300px] md:h-full">
            <Image
              src={activeTab.image}
              alt={activeTab.title}
              fill
              className="object-cover"
              key={activeTab.image} // Force re-render for animation
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

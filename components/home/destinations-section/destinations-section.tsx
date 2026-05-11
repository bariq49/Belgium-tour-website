"use client";

import React from "react";
import Image from "next/image";
import { MaxWidthWrapper } from "@/components/shared/max-width-wrapper";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const destinations = [
  {
    name: "BRUGES PRIVATE TOUR",
    description: "Discover the medieval charm of Bruges with its canals, cobblestone streets, and Gothic architecture.",
    image: "/home/hammad-sandhu/.gemini/antigravity/brain/c2c6af82-ba6e-404d-929f-68cedbb51fe0/destination_bruges_1778390633795.png",
    active: true,
  },
  {
    name: "GHENT PRIVATE TOUR",
    description: "Experience the vibrant student city of Ghent with its medieval architecture and artistic heritage.",
    image: "/home/hammad-sandhu/.gemini/antigravity/brain/c2c6af82-ba6e-404d-929f-68cedbb51fe0/destination_ghent_1778390656908.png",
  },
  {
    name: "ANTWERP PRIVATE TOUR",
    description: "Explore the diamond capital of the world, Antwerp, with its world-class fashion and historical port.",
    image: "/home/hammad-sandhu/.gemini/antigravity/brain/c2c6af82-ba6e-404d-929f-68cedbb51fe0/destination_antwerp_1778390678641.png",
  },
  {
    name: "BRUSSELS PRIVATE TOUR",
    description: "Visit the heart of Europe, Brussels, famous for its Grand Place and delicious chocolate.",
    image: "/home/hammad-sandhu/.gemini/antigravity/brain/c2c6af82-ba6e-404d-929f-68cedbb51fe0/destination_brussels_1778390709703.png",
  },
  {
    name: "DINANT PRIVATE TOUR",
    description: "Marvel at the dramatic cliffs and river views in Dinant, a hidden gem in the Walloon region.",
    image: "/home/hammad-sandhu/.gemini/antigravity/brain/c2c6af82-ba6e-404d-929f-68cedbb51fe0/destination_dinant_1778390746248.png",
  },
];

export const DestinationsSection = () => {
  return (
    <section className="py-24 bg-background">
      <MaxWidthWrapper>
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Popular Private Tour Destinations
          </h2>
          <p className="text-paragraph text-sm md:text-base opacity-70 max-w-2xl mx-auto">
            Explore Belgium's most captivating destinations with our curated selection of private tours
          </p>
        </div>

        {/* Destinations Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {destinations.map((dest, index) => (
            <div 
              key={index} 
              className={cn(
                "relative group overflow-hidden h-[500px] lg:h-[600px] cursor-pointer rounded-sm transition-all duration-500",
                dest.active ? "ring-2 ring-primary ring-offset-2" : ""
              )}
            >
              <Image
                src={dest.image}
                alt={dest.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className={cn(
                "absolute inset-0 bg-black/40 transition-opacity duration-500",
                dest.active ? "opacity-60" : "opacity-20 group-hover:opacity-40"
              )} />
              
              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-6 text-white space-y-2">
                <h3 className="text-lg font-bold tracking-wider uppercase">
                  {dest.name}
                </h3>
                {dest.active && (
                  <p className="text-sm opacity-90 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700">
                    {dest.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <Button 
            variant="outline" 
            className="px-12 py-6 text-lg border-gray-300 hover:bg-black hover:text-white transition-all duration-300 rounded-sm font-medium"
          >
            View All Tours
          </Button>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

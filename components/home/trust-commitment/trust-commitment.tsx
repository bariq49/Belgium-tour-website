"use client";

import React from "react";
import { MaxWidthWrapper } from "@/components/shared/max-width-wrapper";

const trustItems = [
  {
    name: "The New York Times",
    description: "Personal travel expertise with hand-picked tour operators",
    logoClass: "font-serif italic font-bold text-2xl",
  },
  {
    name: "THE WALL STREET JOURNAL.",
    description: "Personalized itineraries for tours in more than 100 countries",
    logoClass: "uppercase font-bold tracking-tighter text-xl",
  },
  {
    name: "Forbes",
    description: "Specialized luxury travel with exclusive experiences and insider access",
    logoClass: "font-serif font-black text-2xl",
  },
  {
    name: "BBC",
    render: () => (
      <div className="flex gap-1">
        {["B", "B", "C"].map((letter, i) => (
          <span key={i} className="w-7 h-7 flex items-center justify-center bg-black text-white font-bold text-sm tracking-normal">
            {letter}
          </span>
        ))}
      </div>
    ),
    description: "High-end travel-planning company for personalized journeys",
  },
];

export const TrustAndCommitment = () => {
  return (
    <section className="py-20 bg-white">
      <MaxWidthWrapper>
        {/* Trust Logos Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24">
          {trustItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-4 group">
              <div className="h-12 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                {item.render ? (
                  item.render()
                ) : (
                  <span className={`text-black ${item.logoClass}`}>{item.name}</span>
                )}
              </div>
              <p className="text-paragraph text-xs md:text-sm leading-relaxed max-w-[200px] opacity-70 font-medium">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Commitment Section */}
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Our Commitment to You
          </h2>
          <p className="text-paragraph text-lg md:text-xl leading-relaxed opacity-80 font-medium">
            Every tour we offer is backed by our promise of exceptional quality, 
            professional service, and unforgettable experiences. From your first inquiry 
            to the moment we say goodbye, you can count on us to exceed your expectations at every turn.
          </p>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

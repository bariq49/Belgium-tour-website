"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Check } from "lucide-react";

const days = [
  {
    day: "DAY 1",
    title: "Arrival in Ghent – Medieval City Introduction",
    description: "Your journey begins in the historic city of Ghent, where medieval charm meets vibrant modern culture. After arrival, settle into your hotel located near the city center and prepare to explore. Start your introduction with a leisurely walk through Graslei and Korenlei, the city's most picturesque canal-side streets. Admire the beautifully preserved guild houses reflecting on the water. Continue toward St. Bavo's Cathedral, home to the world-famous painting 'The Adoration of the Mystic Lamb'.",
    included: ["Accommodation", "Guided city walk", "Welcome dinner"],
  },
  {
    day: "DAY 2",
    title: "Castles, Canals & Historic Ghent",
    description: "Explore the Gravensteen castle and enjoy a private boat tour through the historic canals of Ghent.",
    included: ["Castle entry", "Boat tour", "Lunch at local bistro"],
  },
  {
    day: "DAY 3",
    title: "Art, Culture & Hidden Gems",
    description: "Discover the hidden courtyards and street art that make Ghent a unique cultural hub.",
    included: ["Art gallery entry", "Street art tour"],
  },
  {
    day: "DAY 4",
    title: "Markets & Departure",
    description: "Visit the local flower markets before your private chauffeur transfers you to your next destination.",
    included: ["Market visit", "Private transfer"],
  },
];

export const TourItinerary = () => {
  return (
    <div className="space-y-10">
      <div className="flex items-center justify-between border-b border-gray-100 pb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-inria">
          Customizable Itinerary
        </h2>
        <button className="text-xs font-bold text-primary tracking-widest uppercase hover:underline">
          Expand All
        </button>
      </div>

      <Accordion type="single" collapsible defaultValue="item-0" className="w-full space-y-6">
        {days.map((day, idx) => (
          <AccordionItem
            key={idx}
            value={`item-${idx}`}
            className="border border-gray-100 rounded-sm overflow-hidden"
          >
            <AccordionTrigger className="px-8 py-8 hover:no-underline hover:bg-section/30 text-left transition-all [&[data-state=open]]:bg-section/30">
              <div className="space-y-2">
                <span className="text-[10px] font-black tracking-[0.2em] text-primary uppercase">
                  {day.day}
                </span>
                <h3 className="text-xl font-bold text-foreground font-inria">
                  {day.title}
                </h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-8 pb-10 pt-4 space-y-8">
              <p className="text-paragraph text-base leading-relaxed opacity-80 font-roboto font-light">
                {day.description}
              </p>
              
              <div className="space-y-4">
                <p className="text-[10px] font-black tracking-[0.2em] text-foreground uppercase">
                  What&apos;s Included:
                </p>
                <div className="flex flex-wrap gap-x-8 gap-y-4">
                  {day.included.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-paragraph opacity-70">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

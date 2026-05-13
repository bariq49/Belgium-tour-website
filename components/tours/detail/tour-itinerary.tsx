"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Check } from "lucide-react";

interface ItineraryStep {
  title: string;
  description: string;
}

interface TourItineraryProps {
  steps: ItineraryStep[];
}

export const TourItinerary = ({ steps }: TourItineraryProps) => {
  return (
    <div className="py-12 space-y-10">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground font-inria">
        Customizable Itinerary
      </h2>
      <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
        {steps.map((step, idx) => (
          <AccordionItem
            key={idx}
            value={`item-${idx}`}
            className="border border-gray-100 rounded-sm overflow-hidden"
          >
            <AccordionTrigger className="px-8 py-6 hover:no-underline bg-section/30 hover:bg-section/50 text-left transition-all cursor-pointer">
              <div className="flex items-center gap-4">
                <span className="text-base font-bold text-primary whitespace-nowrap leading-none mt-1">
                  Step {idx + 1}
                </span>
                <h3 className="text-lg font-bold text-foreground font-inria leading-none">
                  {step.title}
                </h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-8 py-6">
              <p className="text-paragraph text-base font-normal font-roboto font-light">
                {step.description}
              </p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

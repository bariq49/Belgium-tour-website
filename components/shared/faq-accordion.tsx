"use client";

import React from "react";
import { MaxWidthWrapper } from "@/components/shared/max-width-wrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  title: string;
  description?: string;
  items: FaqItem[];
  className?: string;
}

export const FaqAccordion = ({
  title,
  description,
  items,
  className,
}: FaqAccordionProps) => {
  return (
    <section className={cn("py-24 bg-background", className)}>
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">

          {/* Left Side - Sticky Header */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground font-inria leading-tight">
              {title}
            </h2>
            {description && (
              <p className="text-paragraph text-lg opacity-70 font-roboto leading-relaxed">
                {description}
              </p>
            )}
            <div className="h-1 w-20 bg-primary/20" />
          </div>

          {/* Right Side - Accordion */}
          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {items.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-gray-200 py-2"
                >
                  <AccordionTrigger className="text-lg font-bold text-foreground hover:text-primary transition-colors hover:no-underline text-left py-6">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-paragraph text-base leading-relaxed opacity-80 pb-8">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

        </div>
      </MaxWidthWrapper>
    </section>
  );
};

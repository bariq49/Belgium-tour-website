"use client";

import React, { useState } from "react";
import { MaxWidthWrapper } from "@/components/shared/max-width-wrapper";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "MICHAEL CHEN",
    quote: "An absolutely exceptional experience! Our guide was incredibly knowledgeable and the attention to detail was remarkable. The luxury vehicle and seamless organization made our Bruges tour truly unforgettable.",
  },
  {
    name: "SARAH JENKINS",
    quote: "The best way to see Belgium! Our chauffeur was professional, friendly, and knew all the hidden spots. We felt like royalty throughout the entire day. Highly recommend the food and beer tour!",
  },
  {
    name: "DAVID & EMILY",
    quote: "A truly personalized experience. They listened to exactly what we wanted and created a perfect itinerary. The communication was excellent from start to finish. We'll be back for sure!",
  },
];

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const current = testimonials[activeIndex];

  return (
    <section className="py-24 bg-background">
      <MaxWidthWrapper>
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            What Our Guests Say
          </h2>
          <p className="text-paragraph text-sm md:text-base opacity-70">
            Here’s what our travelers are sharing about their experiences
          </p>
        </div>

        {/* Testimonial Content */}
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Stars */}
          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>

          {/* Quote */}
          <div className="min-h-[160px] flex items-center justify-center">
            <p className="text-xl md:text-2xl lg:text-3xl font-medium text-foreground leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700">
              "{current.quote}"
            </p>
          </div>

          {/* Author */}
          <h4 className="text-sm md:text-base font-bold tracking-[0.2em] text-foreground uppercase pt-4">
            {current.name}
          </h4>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-6 pt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center text-foreground hover:bg-black hover:text-white transition-all duration-300 active:scale-90"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center text-foreground hover:bg-black hover:text-white transition-all duration-300 active:scale-90"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

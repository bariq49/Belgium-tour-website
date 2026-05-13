"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import type { DesignJourneySlide } from "./design-journey-data";

type DesignJourneyCardProps = {
  slide: DesignJourneySlide;
  className?: string;
  isActive?: boolean;
  isNeighbor?: boolean;
};

export function DesignJourneyCard({ slide, className, isActive, isNeighbor }: DesignJourneyCardProps) {
  return (
    <article
      className={cn(
        "relative mx-auto w-full transition-[height,transform] duration-700 ease-in-out",
        "cursor-default overflow-hidden rounded-none",
        // Heights: Active is tallest, Neighbors are medium, others are short
        isActive 
          ? "h-[450px] sm:h-[500px] z-30 scale-100 opacity-100" 
          : isNeighbor 
            ? "h-[350px] sm:h-[380px] z-20 scale-95 opacity-80" 
            : "h-[280px] sm:h-[300px] z-10 scale-90 opacity-60",
        className,
      )}
    >
      <Image
        src={slide.src}
        alt={slide.alt}
        fill
        sizes="(max-width: 1023px) 90vw, 25vw"
        className="object-cover"
      />
      {/* Dark overlay that lightens when active */}
      <div className={cn(
        "pointer-events-none absolute inset-0 bg-black transition-opacity duration-700",
        isActive ? "opacity-30" : "opacity-60"
      )} />
    </article>
  );
}

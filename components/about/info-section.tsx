import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface InfoSectionProps {
  title: string;
  items: string[];
  imageSrc: string;
  imagePosition?: "left" | "right";
  backgroundColor?: string;
}

export const InfoSection = ({
  title,
  items,
  imageSrc,
  imagePosition = "left",
  backgroundColor = "bg-background",
}: InfoSectionProps) => {
  return (
    <section className={cn("w-full py-0 overflow-hidden", backgroundColor)}>
      <div
        className={cn(
          "flex flex-col md:flex-row min-h-[500px] container mx-auto",
          imagePosition === "right" && "md:flex-row-reverse"
        )}
      >
        {/* Image Column */}
        <div className="relative w-full md:w-1/2 h-[400px] md:h-auto">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
          />
        </div>

        {/* Content Column */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-16 lg:p-24 text-center">
          <div className="space-y-12 max-w-md">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-inria leading-tight">
              {title}
            </h2>

            <ul className="space-y-6">
              {items.map((item, index) => (
                <li
                  key={index}
                  className="text-xs md:text-sm font-roboto font-bold tracking-[0.2em] text-paragraph uppercase opacity-60"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

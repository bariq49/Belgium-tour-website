import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface BannerProps {
  title: string;
  topSubtitle?: string;
  description?: string;
  backgroundImage: string;
  buttonText?: string;
  buttonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  className?: string;
}

export const Banner = ({
  title,
  topSubtitle,
  description,
  backgroundImage,
  buttonText,
  buttonLink = "/",
  secondaryButtonText,
  secondaryButtonLink = "/",
  className,
}: BannerProps) => {
  return (
    <section
      className={cn(
        "relative h-[600px] md:h-[700px] w-full overflow-hidden flex items-center justify-center text-center px-4",
        className
      )}
    >
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt={title}
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto flex flex-col items-center gap-6">
        {topSubtitle && (
          <p className="text-[10px] md:text-xs font-bold text-white/80 uppercase tracking-[0.3em] font-roboto mb-2">
            {topSubtitle}
          </p>
        )}

        <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-inria leading-[1.1]">
          {title}
        </h1>
        
        {description && (
          <p className="text-white/90 text-base md:text-lg max-w-2xl font-roboto font-light leading-relaxed">
            {description}
          </p>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
          {buttonText && (
            <Link
              href={buttonLink}
              className="w-full sm:w-auto bg-black border border-white/20 text-white px-12 py-4 text-xs font-bold tracking-widest uppercase transition-all hover:bg-primary hover:border-primary"
            >
              {buttonText}
            </Link>
          )}

          {secondaryButtonText && (
            <Link
              href={secondaryButtonLink}
              className="w-full sm:w-auto bg-white border border-white text-black px-12 py-4 text-xs font-bold tracking-widest uppercase transition-all hover:bg-gray-100"
            >
              {secondaryButtonText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};


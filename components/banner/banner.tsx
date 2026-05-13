import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

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
        "relative h-[600px] md:h-[500px] w-full overflow-hidden flex items-center justify-center text-center px-4",
        className
      )}
    >
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
            <Button asChild className="w-full sm:w-auto h-auto py-4 px-12 bg-black">
              <Link href={buttonLink}>
                {buttonText}
              </Link>
            </Button>
          )}

          {secondaryButtonText && (
            <Button asChild variant="outline" className="w-full sm:w-auto h-auto py-4 px-12 bg-white text-black hover:bg-gray-100">
              <Link href={secondaryButtonLink}>
                {secondaryButtonText}
              </Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};


import React from "react";
import Link from "next/link";
import { MaxWidthWrapper } from "@/components/shared/max-width-wrapper";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ParallaxCTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundImage?: string;
  className?: string;
}

export const ParallaxCTA = ({
  title = "Ready to Grow Your Business?",
  description = "Start earning commissions and offering premium travel services to your clients today",
  buttonText = "Apply for Partnership",
  buttonLink = "/partners/apply",
  backgroundImage = "/assets/images/banner/home.banner.png", // Using a high-quality existing image
  className,
}: ParallaxCTAProps) => {
  return (
    <section 
      className={cn(
        "relative w-full py-32 overflow-hidden bg-cover bg-center bg-fixed",
        className
      )}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      <MaxWidthWrapper className="relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-10">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-inria leading-tight">
              {title}
            </h2>
            <p className="text-white/90 text-sm md:text-base font-roboto font-light leading-relaxed tracking-wide">
              {description}
            </p>
          </div>
          
          <div className="pt-4">
            <Link
              href={buttonLink}
              className={cn(
                buttonVariants({ variant: "default" }),
                "bg-white text-black hover:bg-primary hover:text-white transition-all px-12 py-8 text-xs font-bold tracking-widest uppercase rounded-none inline-flex items-center justify-center min-w-[280px]"
              )}
            >
              {buttonText}
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

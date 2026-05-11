import React from "react";
import { MaxWidthWrapper } from "@/components/shared/max-width-wrapper";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CustomCTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  className?: string;
}

export const CustomCTA = ({
  title = "Start Planning Your Personalized Journey Today",
  description = "Our experts are ready to turn your dream trip into reality. Whether you're seeking a romantic getaway, family vacation, cultural exploration, or luxury escape, we create experiences designed exclusively for you.",
  buttonText = "Get Started Now",
  onButtonClick,
  className,
}: CustomCTAProps) => {
  return (
    <section className={cn("py-24 bg-[#F0ECE9]", className)}>
      <MaxWidthWrapper>
        <div className="text-center max-w-4xl mx-auto space-y-10">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-inria">
              {title}
            </h2>
            <p className="text-paragraph text-sm md:text-base opacity-70 font-roboto font-light leading-relaxed">
              {description}
            </p>
          </div>
          
          <Button 
            onClick={onButtonClick}
            className="bg-black text-white hover:bg-primary transition-all px-12 py-7 text-xs font-bold tracking-widest uppercase rounded-none"
          >
            {buttonText}
          </Button>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

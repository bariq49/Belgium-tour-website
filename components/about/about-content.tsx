import React from "react";
import { MaxWidthWrapper } from "@/components/shared/max-width-wrapper";

interface AboutContentProps {
  title: string;
  paragraphs: string[];
}

export const AboutContent = ({ title, paragraphs }: AboutContentProps) => {
  return (
    <section className="bg-background py-24">
      <MaxWidthWrapper>
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground font-inria leading-tight">
            {title}
          </h2>
          
          <div className="space-y-6 text-paragraph text-lg md:text-xl leading-relaxed opacity-80 font-roboto">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

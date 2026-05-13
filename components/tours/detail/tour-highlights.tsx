import React from "react";

interface TourHighlightsProps {
  highlights: string[];
}

export const TourHighlights = ({ highlights }: TourHighlightsProps) => {
  return (
    <div className="space-y-10 py-4">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground font-inria">
        Trip Highlights
      </h2>
      
      {highlights.length > 0 ? (
        <ul className="space-y-6">
          {highlights.map((highlight, idx) => (
            <li key={idx} className="flex gap-4 items-center text-paragraph text-base md:text-lg leading-relaxed opacity-80 font-roboto font-light">
              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              {highlight}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-paragraph text-lg font-light opacity-60 italic">
          No highlights specified for this trip yet.
        </p>
      )}
    </div>
  );
};

import React from "react";

interface TourDescriptionProps {
  description: string;
}

export const TourDescription = ({ description }: TourDescriptionProps) => {
  return (
    <div className="py-4 space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground font-inria">
        What to expect on this itinerary
      </h2>
      <p className="text-paragraph text-base font-normal font-roboto whitespace-pre-wrap">
        {description}
      </p>
    </div>
  );
};

import React from "react";
import { MapPin } from "lucide-react";
import Link from "next/link";

interface TourBottomCTAProps {
  tour: any;
}

export const TourBottomCTA = ({ tour }: TourBottomCTAProps) => {
  return (
    <div className="mt-24 p-8  bg-section  flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="flex items-center gap-6">
        <div className="flex-shrink-0 w-16 h-16 bg-white  flex items-center justify-center rounded-full">
          <MapPin className="w-8 h-8 text-primary" />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-foreground font-inria">Customizable: {tour.title}</h3>
          <p className="text-base font-normal text-paragraph font-roboto font-light max-w-md">
            This is a sample itinerary to inspire a personalized trip designed with your travel specialist.
          </p>
        </div>
      </div>

      <Link
        href={`/booking/tour-details?tourId=${tour._id}`}
        className="w-full md:w-auto bg-black text-white px-12 py-4 text-sm font-semibold hover:bg-primary transition-all whitespace-nowrap text-center"
      >
        Get Started
      </Link>
    </div>
  );
};

import React from "react";
import { MapPin } from "lucide-react";
import Link from "next/link";

export const TourBottomCTA = () => {
  return (
    <div className="mt-24 p-8 md:p-12 bg-section border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="flex items-center gap-6">
        <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center">
          <MapPin className="w-8 h-8 text-primary" />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-foreground font-inria">Customizable Itinerary</h3>
          <p className="text-sm text-paragraph opacity-70 font-roboto font-light max-w-md">
            This is a sample itinerary to inspire a personalized trip designed with your travel specialist.
          </p>
        </div>
      </div>
      
      <Link
        href="/contact"
        className="w-full md:w-auto bg-black text-white px-12 py-4 text-xs font-bold tracking-widest uppercase hover:bg-primary transition-all whitespace-nowrap"
      >
        Request a Quote
      </Link>
    </div>
  );
};

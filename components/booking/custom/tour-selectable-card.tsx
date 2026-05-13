"use client";

import React from "react";
import { Check } from "lucide-react";
import { cn, formatPrice } from "@/lib/utils";

interface TourSelectableCardProps {
  tour: {
    _id: string;
    title: string;
    duration: string;
    price: number;
  };
  isSelected: boolean;
  onSelect: (id: string) => void;
}

export const TourSelectableCard = ({ tour, isSelected, onSelect }: TourSelectableCardProps) => {
  return (
    <button
      type="button"
      onClick={() => onSelect(tour._id)}
      className={cn(
        "w-full flex items-center justify-between p-6 transition-all group hover:bg-section/30",
        isSelected ? "bg-section/50" : "bg-white"
      )}
    >
      <div className="flex items-center gap-4 text-left">
        {/* Radio Indicator */}
        <div className={cn(
          "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all",
          isSelected ? "border-primary bg-primary" : "border-gray-200"
        )}>
          {isSelected && <Check className="w-4 h-4 text-white" />}
        </div>

        {/* Tour Info */}
        <div className="space-y-1">
          <h4 className={cn(
            "text-lg font-bold font-inria transition-colors",
            isSelected ? "text-primary" : "text-foreground group-hover:text-primary"
          )}>
            {tour.title}
          </h4>
          <p className="text-xs text-paragraph opacity-60 uppercase tracking-widest font-semibold">
            {tour.duration}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <a 
          href={`/tours/${tour._id}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="text-sm font-semibold text-primary hover:underline underline-offset-4 decoration-primary/30"
        >
          View Details
        </a>
      </div>
    </button>
  );
};

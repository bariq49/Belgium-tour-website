"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

const filterOptions = [
  "All Destinations",
  "Bruges",
  "Ghent",
  "Antwerp",
  "Luxembourg",
  "Amsterdam",
  "Under €700",
  "Half Day",
  "Full Day",
];

export const TourFilter = () => {
  const [activeFilter, setActiveFilter] = React.useState("All Destinations");

  return (
    <div className="flex items-center gap-6 overflow-x-auto pb-4 scrollbar-hide">
      <span className="text-lg font-roboto font-medium text-foreground whitespace-nowrap">Filter:</span>
      <div className="flex items-center gap-3">
        {filterOptions.map((option) => {
          const isActive = activeFilter === option;
          return (
            <button
              key={option}
              onClick={() => setActiveFilter(option)}
              className={cn(
                "px-6 py-2.5 rounded-full text-sm font-medium border transition-all duration-300 whitespace-nowrap flex items-center gap-2",
                isActive
                  ? "bg-black text-white border-black"
                  : "bg-white text-paragraph border-gray-200 hover:border-black"
              )}
            >
              {option}
              {isActive && option === "All Destinations" && <X className="w-3.5 h-3.5" />}
            </button>
          );
        })}
      </div>
    </div>
  );
};

"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { useCategories } from "@/hooks/queries/use-categories";
import { TourFilterSkeleton } from "@/components/skeletons/tour-filter-skeleton";

interface TourFilterProps {
  selectedCategoryId: string | null;
  onCategoryChange: (id: string | null) => void;
}

export const TourFilter = ({ selectedCategoryId, onCategoryChange }: TourFilterProps) => {
  const { data: categoriesResponse, isLoading } = useCategories();
  const categories = categoriesResponse?.data || [];

  if (isLoading) return <TourFilterSkeleton />;

  return (
    <div className="flex items-center gap-6 overflow-x-auto pb-4 scrollbar-hide">
      <span className="text-lg font-roboto font-medium text-foreground whitespace-nowrap">Filter:</span>
      <div className="flex items-center gap-3">
        <button
          onClick={() => onCategoryChange(null)}
          className={cn(
            "px-6 py-2.5 rounded-full text-sm font-medium border transition-all duration-300 whitespace-nowrap flex items-center gap-2 cursor-pointer",
            selectedCategoryId === null
              ? "bg-black text-white border-black"
              : "bg-white text-paragraph border-gray-200 hover:border-black"
          )}
        >
          All Destinations
          {selectedCategoryId === null && <X className="w-3.5 h-3.5" />}
        </button>

        {categories.map((category: any) => {
          const isActive = selectedCategoryId === category._id;
          return (
            <button
              key={category._id}
              onClick={() => onCategoryChange(category._id)}
              className={cn(
                "px-6 py-2.5 rounded-full text-sm font-medium border transition-all duration-300 whitespace-nowrap flex items-center gap-2 cursor-pointer",
                isActive
                  ? "bg-black text-white border-black"
                  : "bg-white text-paragraph border-gray-200 hover:border-black"
              )}
            >
              {category.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

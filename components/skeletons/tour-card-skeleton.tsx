import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const TourCardSkeleton = () => {
  return (
    <div className="flex flex-col space-y-5 w-full">
      {/* Image Skeleton */}
      <Skeleton className="aspect-[4/3] w-full bg-section" />

      {/* Content Skeleton */}
      <div className="space-y-4">
        <div className="space-y-2">
          <Skeleton className="h-3 w-24 bg-section" />
          <Skeleton className="h-7 w-3/4 bg-section" />
        </div>
        
        <div className="space-y-2">
          <Skeleton className="h-4 w-full bg-section" />
          <Skeleton className="h-4 w-2/3 bg-section" />
        </div>

        {/* Footer Skeleton */}
        <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
          <Skeleton className="h-4 w-32 bg-section" />
          <Skeleton className="h-4 w-16 bg-section" />
        </div>
      </div>
    </div>
  );
};

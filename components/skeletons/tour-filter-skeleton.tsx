import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const TourFilterSkeleton = () => {
  return (
    <div className="flex items-center gap-6 overflow-x-auto pb-4 scrollbar-hide">
      <Skeleton className="h-6 w-16 bg-section" />
      <div className="flex items-center gap-3">
        {[1, 2, 3, 4, 5].map((i) => (
          <Skeleton key={i} className="h-10 w-28 rounded-full bg-section" />
        ))}
      </div>
    </div>
  );
};

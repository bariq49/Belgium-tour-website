import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const CustomBookingStepSkeleton = () => {
  return (
    <div className="space-y-8 pb-10">
      <div className="bg-white p-8 md:p-10 border border-gray-100 rounded-sm shadow-sm space-y-8">
        <div className="space-y-2">
          <Skeleton className="h-9 w-64 bg-section" />
          <Skeleton className="h-5 w-96 bg-section" />
        </div>

        <div className="divide-y divide-gray-100 border border-gray-100 rounded-sm overflow-hidden">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="w-full flex items-center justify-between p-6 bg-white">
              <div className="flex items-center gap-4">
                <Skeleton className="w-6 h-6 rounded-full bg-section" />
                <div className="space-y-2">
                  <Skeleton className="h-6 w-48 bg-section" />
                  <Skeleton className="h-3 w-20 bg-section" />
                </div>
              </div>
              <Skeleton className="h-8 w-24 bg-section" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

import React from "react";

export const ReviewSkeleton = () => {
  return (
    <div className="space-y-10">
      <div className="h-8 w-48 bg-gray-200 animate-pulse rounded-sm" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="p-8 bg-white border border-gray-100 space-y-6 rounded-sm shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
            <div className="flex justify-between items-center">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((j) => (
                  <div key={j} className="w-4 h-4 bg-gray-200 animate-pulse rounded-full" />
                ))}
              </div>
              <div className="h-4 w-24 bg-gray-100 animate-pulse rounded-sm" />
            </div>
            <div className="space-y-3">
              <div className="h-4 w-full bg-gray-100 animate-pulse rounded-sm" />
              <div className="h-4 w-3/4 bg-gray-100 animate-pulse rounded-sm" />
            </div>
            <div className="h-4 w-32 bg-gray-200 animate-pulse rounded-sm pt-2" />
          </div>
        ))}
      </div>
    </div>
  );
};

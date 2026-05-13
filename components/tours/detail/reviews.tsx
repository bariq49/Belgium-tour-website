"use client";

import React, { useState } from "react";
import { useReviewsByTour } from "@/hooks/queries/use-reviews";
import { ReviewSkeleton } from "@/components/skeletons/review-skeleton";
import { ReviewCard } from "./review-card";
import { ReviewForm } from "./review-form";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface ReviewsProps {
  tourId: string;
}

export const Reviews = ({ tourId }: ReviewsProps) => {
  const { data: reviewsResponse, isLoading } = useReviewsByTour(tourId);
  const reviews = reviewsResponse?.data || [];
  
  const [visibleCount, setVisibleCount] = useState(5);
  const visibleReviews = reviews.slice(0, visibleCount);
  const hasMore = reviews.length > visibleCount;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 5);
  };

  return (
    <div className="space-y-16 py-4">
      {/* Reviews List */}
      {isLoading ? (
        <ReviewSkeleton />
      ) : reviews.length > 0 ? (
        <div className="space-y-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground font-inria">
            Verified Reviews
          </h2>
          <div className="space-y-6">
            {visibleReviews.map((review: any, idx: number) => (
              <ReviewCard key={idx} review={review} />
            ))}
          </div>

          {hasMore && (
            <div className="flex justify-center pt-4">
              <Button
                onClick={handleLoadMore}
                variant="outline"
                className="border-gray-200 text-foreground font-semibold px-8 py-6 h-auto hover:bg-gray-50 flex items-center gap-2 rounded-sm"
              >
                Load More Reviews
                <ChevronDown className="w-4 h-4" />
              </Button>
            </div>
          )}
        </div>
      ) : null}

      {/* Review Form */}
      <ReviewForm tourId={tourId} />
    </div>
  );
};

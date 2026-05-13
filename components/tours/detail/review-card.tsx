import React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

interface ReviewCardProps {
  review: {
    rating: number;
    createdAt: string;
    comment: string;
    authorName: string;
  };
}

export const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <div className="p-8 border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] space-y-6 flex flex-col justify-between rounded-sm">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "w-4 h-4",
                  i < review.rating ? "fill-primary text-primary" : "text-gray-200"
                )}
              />
            ))}
          </div>
          <span className="text-xs text-paragraph opacity-50 font-roboto">
            {format(new Date(review.createdAt), "MMMM yyyy")}
          </span>
        </div>

        <p className="text-paragraph text-base italic leading-relaxed opacity-80 font-roboto font-light">
          &quot;{review.comment}&quot;
        </p>
      </div>

      <p className="text-sm font-bold text-foreground font-inria uppercase tracking-widest border-t border-gray-50 pt-4">
        — {review.authorName}
      </p>
    </div>
  );
};

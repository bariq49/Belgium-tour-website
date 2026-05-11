import React from "react";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "John Doe",
    date: "May 2024",
    rating: 5,
    comment: "An absolutely incredible experience. The private guide was knowledgeable and the pace was perfect. Ghent is a must-visit!",
  },
  {
    name: "Sarah Smith",
    date: "April 2024",
    rating: 5,
    comment: "Highly recommend this tour. The boat trip was a highlight and the castle views are breathtaking.",
  },
];

export const TourReviews = () => {
  return (
    <div className="space-y-10 py-4">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground font-inria">
        Verified Reviews
      </h2>
      
      <div className="space-y-12">
        {reviews.map((review, idx) => (
          <div key={idx} className="space-y-4 border-b border-gray-100 pb-10 last:border-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-sm text-paragraph opacity-50 font-roboto">{review.date}</span>
            </div>
            
            <p className="text-paragraph text-lg italic leading-relaxed opacity-80 font-roboto font-light">
              &quot;{review.comment}&quot;
            </p>
            
            <p className="text-sm font-bold text-foreground font-inria uppercase tracking-widest">
              — {review.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

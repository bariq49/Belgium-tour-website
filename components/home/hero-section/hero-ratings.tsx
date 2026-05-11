import React from "react";
import { Star } from "lucide-react";

interface RatingItemProps {
  platform: string;
  count: string;
  rating: number;
}

const RatingItem = ({ platform, count, rating }: RatingItemProps) => (
  <div className="flex flex-col items-center text-white text-center">
    <span className="text-xl font-bold mb-1">{platform}</span>
    <div className="flex gap-0.5 mb-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < Math.floor(rating) ? "fill-orange-500 text-orange-500" : "text-gray-400"}
        />
      ))}
    </div>
    <span className="text-xs text-white/70">Based on {count} reviews</span>
  </div>
);

export const HeroRatings = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl mx-auto mt-16 md:mt-24">
      <RatingItem platform="Facebook" count="30,000+" rating={5} />
      <RatingItem platform="Google" count="800+" rating={5} />
      <div className="flex flex-col items-center text-white text-center">
        <div className="flex items-center gap-1 mb-1">
            <span className="text-xl font-bold">Trustpilot</span>
        </div>
        <div className="flex gap-1 mb-1">
            {[...Array(5)].map((_, i) => (
                <div key={i} className="w-4 h-4 bg-[#00b67a] flex items-center justify-center">
                    <Star size={10} className="fill-white text-white" />
                </div>
            ))}
        </div>
        <span className="text-xs text-white/70">TrustScore 5.0 | 1,810 reviews</span>
      </div>
    </div>
  );
};

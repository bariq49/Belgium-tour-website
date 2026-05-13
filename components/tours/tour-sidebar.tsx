import React from "react";
import Link from "next/link";
import { Star, Globe, UserCheck, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

interface TourSidebarProps {
  tour?: any;
  className?: string;
  isFloating?: boolean;
}

const FEATURES = [
  { icon: Globe, text: "Trips curated by the world's top destination experts" },
  { icon: UserCheck, text: "Concierge-level service leading up to and during your trip" },
  { icon: ShieldCheck, text: "Unique, exclusive experiences and insider access" }
];

export const TourSidebar = ({ tour, className, isFloating = false }: TourSidebarProps) => {
  return (
    <div className={cn("space-y-12", className)}>
      <div className={cn(
        "bg-white p-10 space-y-10",
        isFloating ? "lg:absolute lg:-top-[300px] right-0 w-full z-30" : ""
      )}>
        <div className="text-center space-y-3">
          <h3 className="text-3xl font-bold text-foreground font-inria">Life-Enriching Travel</h3>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-8 bg-gray-300" />
            <p className="text-sm text-primary font-semibold uppercase tracking-wider">Designed Just for You</p>
            <div className="h-px w-8 bg-gray-300" />
          </div>
        </div>

        <ul className="space-y-8">
          {FEATURES.map((item, idx) => (
            <li key={idx} className="flex gap-2 items-center">
              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-sm font-medium text-paragraph leading-snug">{item.text}</p>
            </li>
          ))}
        </ul>

        {(() => {
          const tourId = tour?._id || tour?.id;
          const href = tourId
            ? `/booking/tour-details?tourId=${tourId}`
            : "/booking/tour-details";

          return (
            <Link
              href={href}
              className="block w-full bg-black text-white py-5 text-center text-sm font-semibold hover:bg-primary transition-all uppercase tracking-widest"
            >
              Get Started
            </Link>
          );
        })()}
      </div>

      {/* Social Proof */}
      <div className={cn(
        "space-y-10 px-4",
        isFloating && "lg:mt-[200px] pt-12 lg:pt-0"
      )}>
        <div className="space-y-4 text-left">
          <div className="flex justify-start gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-4 h-4 fill-primary text-primary" />
            ))}
          </div>
          <p className="text-base font-semibold text-primary">
            30,000+ Verified Traveler Reviews
          </p>
        </div>
      </div>
    </div>
  );
};

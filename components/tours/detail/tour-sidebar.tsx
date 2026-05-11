import React from "react";
import Link from "next/link";
import { Star, Globe, UserCheck, ShieldCheck } from "lucide-react";

export const TourSidebar = () => {
  return (
    <div className="space-y-12">
      {/* Feature Box */}
      <div className="bg-[#FAF9F7] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white/50 space-y-10">
        <div className="text-center space-y-3">
          <h3 className="text-2xl font-bold text-foreground font-inria">Life-Enriching Travel</h3>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-8 bg-gray-300" />
            <p className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold">Designed Just for You</p>
            <div className="h-px w-8 bg-gray-300" />
          </div>
        </div>

        <ul className="space-y-8">
          {[
            { icon: Globe, text: "Trips curated by the world's top destination experts" },
            { icon: UserCheck, text: "Concierge-level service leading up to and during your trip" },
            { icon: ShieldCheck, text: "Unique, exclusive experiences and insider access" }
          ].map((item, idx) => (
            <li key={idx} className="flex gap-5 items-center">
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="text-sm font-medium text-paragraph leading-snug">{item.text}</p>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="block w-full bg-black text-white py-5 text-center text-xs font-bold tracking-[0.2em] uppercase hover:bg-primary transition-all"
        >
          Get Started
        </Link>
      </div>

      {/* Social Proof */}
      <div className="space-y-10 px-4">
        <div className="space-y-4 text-center">
          <div className="flex justify-center gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-4 h-4 fill-primary text-primary" />
            ))}
          </div>
          <p className="text-[10px] font-black text-primary tracking-[0.3em] uppercase">
            30,000+ Verified Traveler Reviews
          </p>
        </div>

        <div className="space-y-6">
          <p className="text-[10px] font-black text-paragraph/40 uppercase tracking-[0.3em] text-center">In the News</p>
          <div className="grid grid-cols-2 gap-x-8 gap-y-6 opacity-30 grayscale contrast-125">
            <div className="text-[8px] font-black italic uppercase leading-none">The New York Times</div>
            <div className="text-[8px] font-bold uppercase leading-none">Travel + Leisure</div>
            <div className="text-[8px] font-black uppercase leading-none">CNN</div>
            <div className="text-[8px] font-black italic uppercase leading-none">Wall Street Journal</div>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";

export interface Tour {
  id: string;
  title: string;
  location: string;
  duration: string;
  description: string;
  image: string;
  price: number;
}

export const TourCard = ({ tour }: { tour: Tour }) => {
  return (
    <Link href={`/tours/${tour.id}`} className="group flex flex-col space-y-5">
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-section">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="space-y-4">
        <div className="space-y-2">
          <p className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase">
            {tour.location} — {tour.duration}
          </p>
          <h3 className="text-xl font-bold text-foreground font-inria group-hover:text-primary transition-colors">
            {tour.title}
          </h3>
        </div>
        
        <p className="text-sm text-paragraph opacity-70 line-clamp-2 font-roboto font-light leading-relaxed">
          {tour.description}
        </p>

        {/* Footer */}
        <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
          <div className="text-[10px] font-black tracking-widest uppercase flex items-center gap-2 group/link">
            Discover This Journey
            <MoveRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
          </div>
          <p className="text-xs font-medium text-foreground">
            From <span className="font-bold">€{tour.price}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};


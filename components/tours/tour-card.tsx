import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { formatPrice } from "@/lib/utils";

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
      <div className="relative aspect-[4/3] overflow-hidden bg-section">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <p className="text-sm font-semibold text-primary">
            {tour.location} — {tour.duration}
          </p>
          <h3 className="text-xl font-bold text-foreground font-inria group-hover:text-primary transition-colors">
            {tour.title}
          </h3>
        </div>

        <p className="text-base text-paragraph line-clamp-2 font-roboto font-light">
          {tour.description}
        </p>

        <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
          <div className="text-sm font-semibold text-primary flex items-center gap-2 group/link">
            Discover This Journey
            <MoveRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
          </div>
          <p className="text-sm font-semibold text-foreground">
            From <span className="font-bold">{formatPrice(tour.price)}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};


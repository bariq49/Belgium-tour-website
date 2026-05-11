import React from "react";
import { MaxWidthWrapper } from "@/components/shared/max-width-wrapper";
import { TourFilter } from "./tour-filter";
import { TourCard, Tour } from "./tour-card";

const DUMMY_TOURS: Tour[] = [
  {
    id: "1",
    title: "A Medieval Dream Through Bruges",
    location: "BRUGES",
    duration: "8 HOURS",
    description: "Wander cobblestone streets along timeless canals, where Gothic spires meet chocolate traditions.",
    image: "/assets/images/banner/about-1.png",
    price: 850,
  },
  {
    id: "2",
    title: "Ghent's Living History",
    location: "GHENT",
    duration: "7 HOURS",
    description: "Stand beneath castle towers and cathedral art in a city where the medieval and modern dance.",
    image: "/assets/images/banner/about-2.png",
    price: 820,
  },
  {
    id: "3",
    title: "Antwerp: Diamonds & Design",
    location: "ANTWERP",
    duration: "6 HOURS",
    description: "Explore the world's diamond capital where Rubens' artistry and cutting-edge fashion collide.",
    image: "/assets/images/banner/about-3.png",
    price: 590,
  },
  {
    id: "4",
    title: "Journey to Luxembourg's Fortress Heart",
    location: "LUXEMBOURG",
    duration: "10 HOURS",
    description: "Discover a Grand Duchy built on cliffs, casemates, and centuries of quiet grandeur.",
    image: "/assets/images/banner/about-1.png",
    price: 700,
  },
  {
    id: "5",
    title: "Amsterdam: Canals & Culture",
    location: "AMSTERDAM",
    duration: "12 HOURS",
    description: "Drift through golden-age canals and world-renowned museums in the Netherlands' crown jewel.",
    image: "/assets/images/banner/about-2.png",
    price: 850,
  },
  {
    id: "6",
    title: "Brussels: The Heart of Europe",
    location: "BRUSSELS",
    duration: "5 HOURS",
    description: "From gilded Grand Place to avant-garde Atomium, experience Europe's elegant crossroads.",
    image: "/assets/images/banner/about-3.png",
    price: 480,
  },
];

export const TourList = () => {
  return (
    <section className="bg-background py-24 border-t border-gray-100">
      <MaxWidthWrapper>
        {/* Filters */}
        <div className="mb-20">
          <TourFilter />
        </div>

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground font-inria">
            Explore Our Trip Ideas
          </h2>
          <p className="text-paragraph text-lg opacity-80 font-roboto font-light">
            Let these itineraries inspire your personalized travel experience
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {DUMMY_TOURS.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

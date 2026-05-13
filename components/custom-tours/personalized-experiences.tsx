"use client";

import React from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { MaxWidthWrapper } from "@/components/shared/max-width-wrapper";
import { useCustomTours } from "@/hooks/queries/use-tours";
import { TourCard } from "@/components/tours/tour-card";
import { TourCardSkeleton } from "@/components/skeletons/tour-card-skeleton";
import { TourFilter } from "@/components/tours/tour-filter";

export const PersonalizedExperiences = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const categoryId = searchParams.get("category") || null;

  const { data: toursRes, isLoading } = useCustomTours({
    category: categoryId || undefined,
  });
  
  const tours = toursRes?.data || [];

  const handleCategoryChange = (id: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (id) {
      params.set("category", id);
    } else {
      params.delete("category");
    }
    router.push(`/custom-tours?${params.toString()}`, { scroll: false });
  };

  return (
    <section className="py-24 bg-section">
      <MaxWidthWrapper>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-inria">
            Personalized Experiences You Can Request
          </h2>
          <p className="text-paragraph text-sm md:text-base opacity-70 font-roboto font-light leading-relaxed">
            Tailor your journey with these curated experiences, specifically designed for those seeking a unique touch.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12">
          <TourFilter
            selectedCategoryId={categoryId}
            onCategoryChange={handleCategoryChange}
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {isLoading ? (
            // Loading Skeletons
            Array.from({ length: 4 }).map((_, idx) => (
              <TourCardSkeleton key={idx} />
            ))
          ) : tours.length > 0 ? (
            tours.map((tour: any) => (
              <TourCard
                key={tour._id}
                tour={{
                  id: tour._id,
                  title: tour.title,
                  location: tour.location,
                  duration: tour.duration,
                  description: tour.summary || tour.description,
                  image: tour.coverImage,
                  price: tour.price,
                }}
              />
            ))
          ) : (
            <div className="col-span-full py-20 text-center border rounded-xl bg-white/50 border-dashed border-gray-200">
              <p className="text-paragraph opacity-60 italic font-light">No custom experiences found for this category.</p>
            </div>
          )}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

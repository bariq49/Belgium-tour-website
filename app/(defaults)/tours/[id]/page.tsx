"use client";

import React, { useState } from "react";
import { MaxWidthWrapper } from "@/components/shared/max-width-wrapper";
import { TourGallery } from "@/components/tours/detail/tour-gallery";
import { TourTabs } from "@/components/tours/detail/tour-tabs";
import { TourDescription } from "@/components/tours/detail/tour-description";
import { TourItinerary } from "@/components/tours/detail/tour-itinerary";
import { TourSidebar } from "@/components/tours/tour-sidebar";
import { TourBottomCTA } from "@/components/tours/detail/tour-bottom-cta";
import { TourHighlights } from "@/components/tours/detail/tour-highlights";
import { Reviews } from "@/components/tours/detail/reviews";
import { useTour } from "@/hooks/queries/use-tours";
import { Loader2 } from "lucide-react";

export default function TourDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = React.use(params);
  const [activeTab, setActiveTab] = useState("TRIP OVERVIEW");
  const { data: tourResponse, isLoading } = useTour(resolvedParams.id);
  const tour = tourResponse?.data;

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-10 h-10 animate-spin text-primary" />
      </div>
    );
  }

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-xl text-paragraph font-light">Tour not found.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-background">
      <MaxWidthWrapper className="py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 space-y-12">
            <div className="space-y-2">
              <p className="text-sm font-semibold text-primary">
                {tour.location} — {tour.duration}
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground font-inria">
                {tour.title}
              </h1>
            </div>
            <TourGallery
              coverImage={tour.coverImage}
              galleryImages={tour.galleryImages}
            />

            <TourTabs activeTab={activeTab} setActiveTab={setActiveTab} />

            <div className="">
              {activeTab === "TRIP OVERVIEW" && (
                <div className="animate-in fade-in duration-500">
                  <TourDescription description={tour.description} />
                  <TourItinerary steps={tour.itinerarySteps} />
                </div>
              )}

              {activeTab === "HIGHLIGHTS" && (
                <div className="animate-in fade-in duration-500">
                  <TourHighlights highlights={tour.highlights} />
                </div>
              )}

              {activeTab === "REVIEWS" && (
                <div className="animate-in fade-in duration-500">
                  <Reviews tourId={tour._id} />
                </div>
              )}
            </div>
          </div>

          {/* Sidebar (Right) */}
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <TourSidebar tour={tour} />
            </div>
          </div>

        </div>

        {/* Bottom CTA */}
        <TourBottomCTA tour={tour} />
      </MaxWidthWrapper>
    </div>
  );
}

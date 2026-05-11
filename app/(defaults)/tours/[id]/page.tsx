"use client";

import React, { useState } from "react";
import { MaxWidthWrapper } from "@/components/shared/max-width-wrapper";
import { TourGallery } from "@/components/tours/detail/tour-gallery";
import { TourTabs } from "@/components/tours/detail/tour-tabs";
import { TourDescription } from "@/components/tours/detail/tour-description";
import { TourItinerary } from "@/components/tours/detail/tour-itinerary";
import { TourSidebar } from "@/components/tours/detail/tour-sidebar";
import { TourBottomCTA } from "@/components/tours/detail/tour-bottom-cta";
import { TourHighlights } from "@/components/tours/detail/tour-highlights";
import { TourReviews } from "@/components/tours/detail/tour-reviews";

export default function TourDetailPage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState("TRIP OVERVIEW");

  return (
    <div className="flex flex-col bg-background">
      <MaxWidthWrapper className="py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Main Content (Left) */}
          <div className="lg:col-span-8 space-y-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground font-inria">
              Ghent&apos;s Living History
            </h1>
            
            <TourGallery />
            
            <TourTabs activeTab={activeTab} setActiveTab={setActiveTab} />
            
            <div className="min-h-[400px]">
              {activeTab === "TRIP OVERVIEW" && (
                <div className="space-y-12 animate-in fade-in duration-500">
                  <TourDescription />
                  <TourItinerary />
                </div>
              )}
              
              {activeTab === "HIGHLIGHTS" && (
                <div className="animate-in fade-in duration-500">
                  <TourHighlights />
                </div>
              )}
              
              {activeTab === "REVIEWS" && (
                <div className="animate-in fade-in duration-500">
                  <TourReviews />
                </div>
              )}
            </div>
          </div>

          {/* Sidebar (Right) */}
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <TourSidebar />
            </div>
          </div>

        </div>
        
        {/* Bottom CTA */}
        <TourBottomCTA />
      </MaxWidthWrapper>
    </div>
  );
}

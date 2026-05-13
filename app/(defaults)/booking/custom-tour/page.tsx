"use client";

import React, { Suspense, useState } from "react";
import { MaxWidthWrapper } from "@/components/shared/max-width-wrapper";
import { useCustomTours } from "@/hooks/queries/use-tours";
import { CustomBookingStepSkeleton } from "@/components/skeletons/custom-booking-skeleton";
import { TourSelectableCard } from "@/components/booking/custom/tour-selectable-card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useCustomBookingStore } from "@/store/use-custom-booking-store";

function CustomTourBookingContent() {
  const { setStep1Data, step1 } = useCustomBookingStore();
  const router = useRouter();
  const [displayLimit, setDisplayLimit] = useState(10);

  const { data: customToursRes, isLoading } = useCustomTours();
  const customTours = customToursRes?.data || [];
  const visibleTours = customTours.slice(0, displayLimit);
  const hasMore = customTours.length > displayLimit;

  const selectedTour = step1?.tour;

  const handleSelect = (tour: any) => {
    setStep1Data({ tour });
  };

  if (isLoading) return (
    <div className="bg-section/30 py-10 min-h-screen">
      <MaxWidthWrapper>
        <div className="mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground font-inria">Choose Your Experience</h1>
          <p className="text-paragraph text-lg font-roboto font-light max-w-2xl">
            Select which custom journey you'd like to start with.
          </p>
        </div>
        <CustomBookingStepSkeleton />
      </MaxWidthWrapper>
    </div>
  );

  return (
    <div className="bg-section/30 py-10 min-h-screen">
      <MaxWidthWrapper>
        <div className="mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground font-inria">Choose Your Experience</h1>
          <p className="text-paragraph text-lg font-roboto font-light max-w-2xl">
            Select which custom journey you'd like to start with.
          </p>
        </div>

        <div className="space-y-8 w-full">
          <div className="bg-white p-8 md:p-10 border border-gray-100 rounded-sm shadow-sm space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-foreground font-inria">Plan Your Experience</h2>
              <p className="text-paragraph text-sm md:text-base opacity-70 font-roboto font-light">
                Select a custom journey to begin your personalization process.
              </p>
            </div>

            <div className="space-y-6">
              <div className="divide-y divide-gray-100 border border-gray-100 rounded-sm overflow-hidden">
                {visibleTours.length > 0 ? (
                  visibleTours.map((tour: any) => (
                    <TourSelectableCard
                      key={tour._id}
                      tour={tour}
                      isSelected={selectedTour?._id === tour._id}
                      onSelect={() => handleSelect(tour)}
                    />
                  ))
                ) : (
                  <div className="p-12 text-center text-paragraph italic bg-section/10">
                    No custom journeys available at this time.
                  </div>
                )}
              </div>

              {hasMore && (
                <div className="flex justify-center pt-4">
                  <Button
                    variant="outline"
                    onClick={() => setDisplayLimit(prev => prev + 10)}
                  >
                    Load More Journeys
                  </Button>
                </div>
              )}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-end pt-4 border-t border-gray-100">
            <Button
              disabled={!selectedTour}
              onClick={() => {
                router.push("/booking/custom-tour/journey-preferences");
              }}
            >
              Continue
            </Button>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

export default function CustomTourBookingPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading booking details...</div>}>
      <CustomTourBookingContent />
    </Suspense>
  );
}

"use client";

import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { BookingStep2 } from "@/components/booking/step-2/booking-step-2";
import { OrderSummary } from "@/components/booking/order-summary";
import { MaxWidthWrapper } from "@/components/shared/max-width-wrapper";
import { useSearchParams, useRouter } from "next/navigation";
import { useTour } from "@/hooks/queries/use-tours";
import { useCreateBooking } from "@/hooks/queries/use-bookings";
import toast from "react-hot-toast";

import { Suspense } from "react";

function TourDetailsContent() {
  const searchParams = useSearchParams();
  const tourIdFromUrl = searchParams.get("tourId");

  const methods = useForm({
    defaultValues: {
      tourId: tourIdFromUrl || "",
      date: "",
      travelersCount: 1,
      pickupTime: "",
      language: "",
      fullName: "",
      email: "",
      phone: "",
      hotelName: "",
      hotelAddress: "",
      specialRequests: "",
    },
  });

  const selectedTourId = methods.watch("tourId");
  const { data: tourData } = useTour(selectedTourId);
  const createBookingMutation = useCreateBooking();

  const onSubmit = async (data: any) => {
    try {
      await createBookingMutation.mutateAsync({ data, tourData });
    } catch (error) {
      // Errors are handled by the hook's onError
    }
  };

  return (
    <div className="bg-section/30 py-10">
      <MaxWidthWrapper>
        <FormProvider {...methods}>
          <form id="booking-form" onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
              <div className="lg:col-span-8">
                <BookingStep2 />
              </div>
              <div className="lg:col-span-4">
                <OrderSummary isPending={createBookingMutation.isPending} />
              </div>
            </div>
          </form>
        </FormProvider>
      </MaxWidthWrapper>
    </div>
  );
}

export default function TourDetailsBookingPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading booking details...</div>}>
      <TourDetailsContent />
    </Suspense>
  );
}

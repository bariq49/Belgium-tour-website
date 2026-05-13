"use client";

import React from "react";
import { useWatch } from "react-hook-form";
import { formatPrice } from "@/lib/utils";
import { useTour } from "@/hooks/queries/use-tours";
import { Loader2, Info } from "lucide-react";

interface CustomOrderSummaryProps {
  isPending?: boolean;
  step: number;
}

export const CustomOrderSummary = ({ isPending, step }: CustomOrderSummaryProps) => {
  const tourId = useWatch({ name: "tourId" });
  const travelersCount = useWatch({ name: "travelersCount" }) || 1;
  const { data: tourResponse, isLoading: isTourLoading } = useTour(tourId);
  const tour = tourResponse?.data;

  const pricePerPerson = tour?.price || 0;
  const subtotal = pricePerPerson * travelersCount;
  const total = subtotal;

  return (
    <div className="bg-white border border-gray-100 rounded-sm shadow-sm p-8 space-y-8 sticky top-32">
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-foreground font-inria border-b border-gray-100 pb-4">
          Journey Summary
        </h3>

        {isTourLoading ? (
          <div className="py-10 flex justify-center">
            <Loader2 className="w-6 h-6 animate-spin text-primary" />
          </div>
        ) : tour ? (
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-semibold text-primary uppercase tracking-wider">{tour.location}</p>
              <h4 className="text-lg font-bold text-foreground font-inria leading-tight">{tour.title}</h4>
              <p className="text-sm text-paragraph font-light">{tour.duration}</p>
            </div>

            <div className="bg-[#FAF6F2] p-4 rounded-sm flex gap-3">
              <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <p className="text-xs text-paragraph leading-relaxed">
                This is a <span className="font-bold">Customizable Journey</span>. Our specialists will contact you to fine-tune the details after your request.
              </p>
            </div>
          </div>
        ) : (
          <p className="text-sm text-paragraph italic py-4">No tour selected.</p>
        )}
      </div>

      <button
        type="submit"
        form="custom-booking-form"
        disabled={isPending || !tour}
        className="w-full bg-black text-white py-5 text-sm font-semibold uppercase tracking-widest hover:bg-primary transition-all disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isPending ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Processing...
          </>
        ) : (
          step === 1 ? "Continue" : "Request Customization"
        )}
      </button>
    </div>
  );
};

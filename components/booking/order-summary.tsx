"use client";

import React from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { useTour } from "@/hooks/queries/use-tours";
import { Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatDate, formatPrice } from "@/lib/utils";

export const OrderSummary = ({ isPending }: { isPending?: boolean }) => {
  const { control } = useFormContext();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);
  
  // Watch all form fields in real-time
  const formValues = useWatch({ control });
  const { data: tourData } = useTour(formValues.tourId);

  if (!mounted) return null;

  const travelersCount = formValues.travelersCount || 1;
  const pricePerPerson = tourData?.data?.price || 650;
  const total = pricePerPerson * travelersCount;

  const summaryItems = [
    { label: "Tour:", value: tourData?.data?.title || "Not selected" },
    { 
      label: "Date:", 
      value: formValues.date ? formatDate(formValues.date, "dd MMM yyyy") : "Not selected" 
    },
    { label: "Travelers:", value: `${travelersCount} people` },
    { label: "Pickup Time:", value: formValues.pickupTime || "Not selected" },
    { label: "Language:", value: formValues.language || "Not selected" },
  ];

  return (
    <div className="bg-white border border-gray-100 rounded-sm shadow-sm p-6 sticky top-32 space-y-6">
      <h2 className="text-2xl font-bold text-foreground font-inria">Booking Summary</h2>

      <div className="space-y-4">
        {summaryItems.map((item, idx) => (
          <div key={idx} className="flex justify-between items-center text-sm md:text-base">
            <span className="text-paragraph opacity-60">{item.label}</span>
            <span className="text-foreground font-medium capitalize">{item.value}</span>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-100 pt-4 space-y-3">
        <div className="flex justify-between items-center text-sm md:text-base">
          <span className="text-paragraph opacity-60">Base Price:</span>
          <span className="text-foreground font-semibold">{formatPrice(pricePerPerson)}</span>
        </div>
      </div>

      <div className="border-t border-gray-100 pt-4">
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-foreground font-inria">Total Price:</span>
          <span className="text-3xl font-bold text-primary font-inria">{formatPrice(total)}</span>
        </div>
      </div>

      <div className="bg-section/30 p-5 rounded-sm flex gap-4 items-start">
        <div className="bg-white p-1 rounded-full shadow-sm mt-0.5">
          <Clock className="w-6 h-6 text-primary" />
        </div>
        <div className="space-y-1">
          <p className="text-base font-bold text-foreground">Free cancellation</p>
          <p className="text-base text-paragraph opacity-70 ">
            up to 24 hours before your tour
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <Button
          type="submit"
          className="w-full"
          disabled={isPending}
        >
          {isPending ? (
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Processing...
            </span>
          ) : (
            "Proceed to Payment"
          )}
        </Button>
        <p className="text-base text-center opacity-70 text-paragraph  font-roboto">
          By booking, you agree to our terms and conditions
        </p>
      </div>
    </div>
  );
};

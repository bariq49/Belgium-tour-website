"use client";

import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Input } from "@/components/ui/Input";
import { useBookingStore } from "@/store/use-booking-store";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const BookingStep1 = () => {
  const setStep1Data = useBookingStore((state) => state.setStep1Data);
  const storedLocation = useBookingStore((state) => state.step1?.location);

  const methods = useForm({
    defaultValues: {
      location: storedLocation || "",
    },
  });

  const onSubmit = (data: any) => {
    setStep1Data({ location: data.location });
    console.log("Step 1 Submitted:", data);
  };

  return (
    <div className="w-full">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="flex flex-col md:flex-row items-stretch gap-4 md:gap-0">
          <div className="flex-grow h-[52px]">
            <Input
              name="location"
              type="location"
              placeholder="Enter pickup address"
              required
              icon={<MapPin size={18} />}
              inputClassName="h-full bg-white text-black text-lg rounded-sm md:rounded-r-none border-r-0"
              className="h-full"
            />
          </div>

          <Button
            type="submit"
            className="bg-black text-white h-[52px] px-8 text-lg font-bold rounded-sm md:rounded-l-none border border-white border-l-0"
          >
            Get Started
          </Button>
        </form>
      </FormProvider>
    </div>
  );
};

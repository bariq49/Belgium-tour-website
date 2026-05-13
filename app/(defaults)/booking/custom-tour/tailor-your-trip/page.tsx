"use client";

import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Input } from "@/components/ui/Input";
import { ArrowLeft } from "lucide-react";
import { MaxWidthWrapper } from "@/components/shared/max-width-wrapper";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useCustomBookingStore } from "@/store/use-custom-booking-store";

export default function TailorYourTripPage() {
  const router = useRouter();
  const { step3, setStep3Data } = useCustomBookingStore();

  const methods = useForm({
    defaultValues: {
      specialRequests: step3?.specialRequests || "",
    },
  });

  const onSubmit = (data: any) => {
    setStep3Data(data);
    router.push("/booking/custom-tour/budget-and-value");
  };

  return (
    <div className="bg-section/30 py-10 min-h-screen">
      <MaxWidthWrapper>
        <div className="mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground font-inria">Tailor Your Trip</h1>
          <p className="text-paragraph text-lg font-roboto font-light max-w-2xl">
            Your input helps us connect you with the right travel specialists.
          </p>
        </div>

        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-8 w-full">
            <div className="bg-white p-8 md:p-10 border border-gray-100 rounded-sm shadow-sm space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-foreground font-inria leading-tight">
                  What would you like to see and do?
                </h2>
                <p className="text-paragraph text-lg font-roboto font-light opacity-80">
                  Share your interests and any specific places you'd love to visit.
                </p>
              </div>

              <div className="space-y-6">
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-foreground font-inria">For example:</h4>
                  <ul className="space-y-3">
                    {[
                      "Cities, regions, or unique places you'd love to visit",
                      "Travel interests: culture, food, wine, romance, adventure, wildlife",
                      "Special occasions: birthdays, weddings, honeymoons, events",
                      "Relaxed or fast-paced travel",
                      "Accommodation preferences"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-paragraph font-roboto font-light italic opacity-90">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4">
                  <Input
                    name="specialRequests"
                    type="textarea"
                    label=""
                    placeholder="The more detail you share, the better!"
                    rows={10}
                    className="w-full"
                  />
                  <p className="mt-4 text-sm text-paragraph opacity-60 font-roboto font-light italic">
                    You can always change these when planning with our travel specialists.
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <Button
                variant="ghost"
                onClick={() => router.back()}
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </Button>

              <Button
                type="submit"
              >
                Continue
              </Button>
            </div>
          </form>
        </FormProvider>
      </MaxWidthWrapper>
    </div>
  );
}

"use client";

import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { ArrowLeft } from "lucide-react";
import { MaxWidthWrapper } from "@/components/shared/max-width-wrapper";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useCustomBookingStore } from "@/store/use-custom-booking-store";
import { formatPrice } from "@/lib/utils";
import { cn } from "@/lib/utils";

const BUDGET_FLEXIBILITY_OPTIONS = [
  { label: "Keeping to my budget", value: "strict" },
  { label: "For the right trip, I'll increase my budget", value: "flexible" },
  { label: "Taking the perfect trip", value: "unlimited" },
];

export default function BudgetAndValuePage() {
  const router = useRouter();
  const { step4, setStep4Data } = useCustomBookingStore();

  const methods = useForm({
    defaultValues: {
      budgetPerPerson: step4?.budgetPerPerson || 5000,
      budgetFlexibility: step4?.budgetFlexibility || "strict",
    },
  });

  const budget = methods.watch("budgetPerPerson");
  const flexibility = methods.watch("budgetFlexibility");

  const onSubmit = (data: any) => {
    setStep4Data(data);
    router.push("/booking/custom-tour/final-details");
  };

  return (
    <div className="bg-section/30 py-10 min-h-screen">
      <MaxWidthWrapper>
        <div className="mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground font-inria">Budget & Value</h1>
          <p className="text-paragraph text-lg font-roboto font-light max-w-2xl">
            Set your budget expectations to help us curate the right level of luxury.
          </p>
        </div>

        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-8 w-full">
            <div className="bg-white p-8 md:p-10 border border-gray-100 rounded-sm shadow-sm space-y-10">
              <div className="space-y-3">
                <h2 className="text-4xl font-bold text-foreground font-inria leading-tight">
                  Set your budget and elevate your journey
                </h2>
                <p className="text-paragraph text-lg font-roboto font-light opacity-80">
                  Your budget sets the stage for a unique journey tailored to your desires.
                </p>
              </div>

              <div className="space-y-8">
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-foreground font-inria">
                    What's your budget for the entire trip? (Per Person)
                  </h4>
                  <div className="space-y-1 text-sm font-roboto font-light">
                    <p className="text-paragraph"><span className="font-semibold opacity-100">Included:</span> Accommodation, local transportation, activities, and tours.</p>
                    <p className="text-paragraph"><span className="font-semibold opacity-100">Not Included:</span> International flights and trip insurance.</p>
                  </div>
                </div>

                <div className="space-y-6 pt-4">
                  <div className="relative w-full h-2 bg-gray-100 rounded-full">
                    <div
                      className="absolute top-0 left-0 h-full bg-primary rounded-full"
                      style={{ width: `${Math.min((budget / 20000) * 100, 100)}%` }}
                    />
                    <input
                      type="range"
                      min="0"
                      max="20000"
                      step="500"
                      value={budget}
                      onChange={(e) => methods.setValue("budgetPerPerson", Number(e.target.value))}
                      className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer appearance-none z-10"
                    />
                    <div
                      className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-white border-2 border-primary rounded-full shadow-md pointer-events-none transition-all"
                      style={{ left: `calc(${Math.min((budget / 20000) * 100, 100)}% - 12px)` }}
                    />
                  </div>

                  <div className="flex justify-between items-center text-sm font-roboto font-light text-paragraph opacity-60">
                    <span>$0 Per Person</span>
                    <span>Over $20,000 Per Person</span>
                  </div>

                  <div className="text-center pt-4">
                    <p className="text-3xl font-bold text-primary font-inria">
                      {budget >= 20000 ? "Over $20,000" : formatPrice(budget)} <span className="text-lg font-normal text-paragraph opacity-60">Per Person</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6 pt-10 border-t border-gray-100">
                <h4 className="text-xl font-bold text-foreground font-inria">
                  What's most important to you?
                </h4>

                <div className="space-y-4">
                  {BUDGET_FLEXIBILITY_OPTIONS.map((option) => {
                    const isSelected = flexibility === option.value;
                    return (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => methods.setValue("budgetFlexibility", option.value)}
                        className="flex items-center gap-4 group w-full text-left outline-none"
                      >
                        <div className={cn(
                          "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all shrink-0",
                          isSelected ? "border-primary" : "border-gray-200 group-hover:border-primary"
                        )}>
                          {isSelected && <div className="w-3 h-3 bg-primary rounded-full" />}
                        </div>
                        <span className={cn(
                          "text-lg font-roboto transition-colors",
                          isSelected ? "text-foreground font-medium" : "text-paragraph font-light"
                        )}>
                          {option.label}
                        </span>
                      </button>
                    );
                  })}
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

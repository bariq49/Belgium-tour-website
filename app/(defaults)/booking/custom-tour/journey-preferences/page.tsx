"use client";

import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Input } from "@/components/ui/Input";
import { Calendar, Moon, Users, Baby, ArrowLeft } from "lucide-react";
import { MaxWidthWrapper } from "@/components/shared/max-width-wrapper";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useCustomBookingStore } from "@/store/use-custom-booking-store";

const DURATION_OPTIONS = [
  ...Array.from({ length: 6 }, (_, i) => ({
    label: `${i + 1} ${i === 0 ? "Night" : "Nights"}`,
    value: `${i + 1}_nights`,
  })),
  ...Array.from({ length: 4 }, (_, i) => ({
    label: `${i + 1} ${i === 0 ? "Week" : "Weeks"}`,
    value: `${i + 1}_weeks`,
  })),
  ...Array.from({ length: 3 }, (_, i) => ({
    label: `${i + 1} ${i === 0 ? "Month" : "Months"}`,
    value: `${i + 1}_months`,
  })),
];

const AGE_GROUPS = [
  { label: "18-30", value: "18-30" },
  { label: "31-50", value: "31-50" },
  { label: "51-64", value: "51-64" },
  { label: "65+", value: "65+" },
];

export default function JourneyPreferencesPage() {
  const router = useRouter();
  const { step2, setStep2Data } = useCustomBookingStore();

  const methods = useForm({
    defaultValues: {
      date: step2?.date || "",
      durationNights: step2?.durationNights || "1_nights",
      adultsCount: step2?.adultsCount || 1,
      adultAges: step2?.adultAges || [],
    },
  });

  const selectedAges = methods.watch("adultAges") || [];

  const handleAgeToggle = (value: string) => {
    const current = [...selectedAges];
    const index = current.indexOf(value);
    if (index > -1) {
      current.splice(index, 1);
    } else {
      current.push(value);
    }
    methods.setValue("adultAges", current);
  };

  const onSubmit = (data: any) => {
    setStep2Data(data);
    router.push("/booking/custom-tour/tailor-your-trip");
  };

  return (
    <div className="bg-section/30 py-10 min-h-screen">
      <MaxWidthWrapper>
        <div className="mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground font-inria">Journey Preferences</h1>
          <p className="text-paragraph text-lg font-roboto font-light max-w-2xl">
            Tell us more about when and how you'd like to travel.
          </p>
        </div>

        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-8 w-full">
            <div className="bg-white p-8 md:p-10 border border-gray-100 rounded-sm shadow-sm space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold text-foreground font-inria">Trip Logistics</h2>
                <p className="text-paragraph text-sm md:text-base opacity-70 font-roboto font-light">
                  Provide your travel details to help us plan your logistics.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Input
                  name="date"
                  type="date"
                  label="When would you like to depart?"
                  placeholder="Select departure date"
                  required
                  icon={<Calendar className="w-5 h-5" />}
                  className="w-full"
                />

                <Input
                  name="durationNights"
                  type="select"
                  label="How long would you like to travel for?"
                  placeholder="Select duration"
                  selectOptions={DURATION_OPTIONS}
                  required
                  icon={<Moon className="w-5 h-5" />}
                  className="w-full"
                />

                <Input
                  name="adultsCount"
                  type="counter"
                  label="How many adults will be traveling?"
                  min={1}
                  max={20}
                  icon={<Users className="w-5 h-5" />}
                  className="w-full"
                />
              </div>

              <div className="space-y-4 pt-4 border-t border-gray-100">
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <Baby className="w-4 h-4 text-primary" />
                  What are the ages of the adults traveling? <span className="font-normal opacity-50">(Optional)</span>
                </label>
                <div className="flex flex-wrap gap-4">
                  {AGE_GROUPS.map((group) => (
                    <label
                      key={group.value}
                      className={`flex items-center gap-3 px-6 py-3 rounded-full border transition-all cursor-pointer select-none ${selectedAges.includes(group.value)
                        ? "bg-black text-white border-black"
                        : "bg-white text-paragraph border-gray-200 hover:border-black"
                        }`}
                    >
                      <input
                        type="checkbox"
                        className="hidden"
                        checked={selectedAges.includes(group.value)}
                        onChange={() => handleAgeToggle(group.value)}
                      />
                      <span className="text-sm font-medium">{group.label}</span>
                    </label>
                  ))}
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

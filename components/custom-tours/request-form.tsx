"use client";

import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { MaxWidthWrapper } from "@/components/shared/max-width-wrapper";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/button";
import { toast } from "react-hot-toast";

interface FormValues {
  fullName: string;
  email: string;
  phone: string;
  travelers: string;
  destinations: string;
  dates: string;
  interests: string;
  specialRequests: string;
}

export const CustomTourRequestForm = () => {
  const methods = useForm<FormValues>({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      travelers: "",
      destinations: "",
      dates: "",
      interests: "",
      specialRequests: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form Data:", data);
    toast.success("Request submitted successfully! We'll get back to you soon.");
    methods.reset();
  };

  return (
    <section className="py-24 bg-[#FAF9F7]">
      <MaxWidthWrapper>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-inria">
            Request Your Custom Tour
          </h2>
          <p className="text-paragraph text-sm md:text-base opacity-70 font-roboto font-light leading-relaxed">
            Share your travel preferences and we&apos;ll create a personalized itinerary just for you
          </p>
        </div>

        {/* Form Container */}
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-16 shadow-sm border border-gray-100">
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <Input
                  name="fullName"
                  label="Full Name"
                  placeholder="Your full name"
                  required
                />

                {/* Email */}
                <Input
                  name="email"
                  type="email"
                  label="Email Address"
                  placeholder="your.email@example.com"
                  required
                />

                {/* Phone */}
                <Input
                  name="phone"
                  type="phone"
                  label="Phone Number"
                />

                {/* Number of Travelers */}
                <Input
                  name="travelers"
                  type="number"
                  label="Number of Travelers"
                  placeholder="2"
                  required
                />
              </div>

              {/* Preferred Destinations */}
              <Input
                name="destinations"
                label="Preferred Destinations"
                placeholder="e.g., Brussels, Bruges, Ghent, Antwerp"
                required
              />

              {/* Travel Dates */}
              <Input
                name="dates"
                label="Preferred Travel Dates"
                placeholder="e.g., May 15-22, 2026 or Flexible"
              />

              {/* Interests & Activities */}
              <Input
                name="interests"
                type="textarea"
                label="Interests & Activities"
                placeholder="What would you like to experience? (e.g., history, food & wine, art, architecture, nature, family activities)"
                required
                rows={6}
              />

              {/* Special Requests */}
              <Input
                name="specialRequests"
                type="textarea"
                label="Special Requests or Requirements"
                placeholder="Any special requests, accessibility needs, dietary restrictions, or other details we should know?"
                rows={6}
              />

              <div className="pt-4 flex flex-col items-center space-y-6">
                <Button
                  type="submit"
                  className="bg-black text-white hover:bg-primary transition-all px-16 py-8 text-xs font-bold tracking-widest uppercase"
                >
                  Submit Your Request
                </Button>
              </div>
            </form>
          </FormProvider>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};


"use client";

import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Input } from "@/components/ui/Input";
import { User, Mail, ArrowLeft } from "lucide-react";
import { MaxWidthWrapper } from "@/components/shared/max-width-wrapper";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useCustomBookingStore } from "@/store/use-custom-booking-store";
import { useCreateCustomTourRequest } from "@/hooks/queries/use-custom-tour-requests";

export default function FinalDetailsPage() {
  const router = useRouter();
  const { step1, step2, step3, step4, resetAll } = useCustomBookingStore();
  const createRequestMutation = useCreateCustomTourRequest();

  const methods = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = async (data: any) => {
    try {
      const response = await createRequestMutation.mutateAsync({
        data,
        step1,
        step2,
        step3,
        step4
      });
      
      const requestId = response?._id;
      resetAll();
      router.push(`/booking/custom-tour/success?requestId=${requestId}`);
    } catch (error) {
      // Error handled by hook
    }
  };

  return (
    <div className="bg-section/30 py-10 min-h-screen">
      <MaxWidthWrapper>
        <div className="mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground font-inria">Final Details</h1>
          <p className="text-paragraph text-lg font-roboto font-light max-w-2xl">
            Tell us a bit about yourself so we can reach out with your personalized itinerary.
          </p>
        </div>

        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-8 w-full">
            <div className="bg-white p-8 md:p-10 border border-gray-100 rounded-sm shadow-sm space-y-10">
              <div className="space-y-3">
                <h2 className="text-4xl font-bold text-foreground font-inria leading-tight">
                  Contact Information
                </h2>
                <p className="text-paragraph text-lg font-roboto font-light opacity-80">
                  Provide your details to receive your custom journey proposal.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Input
                  name="firstName"
                  type="text"
                  label="First Name"
                  placeholder="John"
                  required
                  icon={<User className="w-5 h-5" />}
                />

                <Input
                  name="lastName"
                  type="text"
                  label="Last Name"
                  placeholder="Doe"
                  required
                  icon={<User className="w-5 h-5" />}
                />

                <Input
                  name="email"
                  type="email"
                  label="Email Address"
                  placeholder="john@example.com"
                  required
                  icon={<Mail className="w-5 h-5" />}
                />

                <Input
                  name="phone"
                  type="phone"
                  label="Phone Number"
                  placeholder="+1 XXX XXX XXXX"
                  required
                />
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
                loading={createRequestMutation.isPending}
                loadingText="Processing..."
              >
                Request Customization
              </Button>
            </div>
          </form>
        </FormProvider>
      </MaxWidthWrapper>
    </div>
  );
}

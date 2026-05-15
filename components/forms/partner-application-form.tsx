"use client";

import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { MaxWidthWrapper } from "@/components/shared/max-width-wrapper";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/button";
import { toast } from "react-hot-toast";
import { ChevronRight, Loader2 } from "lucide-react";
import { useAuthSignup } from "@/hooks/queries/use-auth";

interface PartnerFormValues {
  firstName: string;
  lastName: string;
  companyName: string;
  partnerType: string;
  email: string;
  phone: string;
  businessProfile: string;
}

export const PartnerApplicationForm = () => {
  const { mutate: signup, isPending } = useAuthSignup();
  const methods = useForm<PartnerFormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      companyName: "",
      partnerType: "",
      email: "",
      phone: "",
      businessProfile: "",
    },
  });



  const onSubmit = async (data: PartnerFormValues) => {
    await signup({
      ...data,
      role: data.partnerType,
    });
    methods.reset();
  };



  return (
    <section id="partners-apply" className="py-24 bg-white">
      <MaxWidthWrapper>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-inria">
            Apply to Become a Partner
          </h2>
          <p className="text-paragraph text-sm md:text-base opacity-70 font-roboto font-semibold leading-relaxed">
            Takes less than 2 minutes. We&apos;ll be in touch within 24 hours.
          </p>
        </div>

        {/* Form Container */}
        <div className="max-w-4xl mx-auto p-8 md:p-16 shadow-sm border border-gray-100 rounded-sm">
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* First Name */}
                <Input
                  name="firstName"
                  label="First Name"
                  placeholder="Enter your first name"
                  required
                />

                {/* Last Name */}
                <Input
                  name="lastName"
                  label="Last Name"
                  placeholder="Enter your last name"
                  required
                />
              </div>

              {/* Company Name */}
              <Input
                name="companyName"
                label="Company Name"
                placeholder="Enter your company name"
                required
              />

              {/* Partner Type */}
              <Input
                name="partnerType"
                type="select"
                label="Partner Type"
                placeholder="Select partner type..."
                required
                selectOptions={[
                  { label: "Travel Agency", value: "travel_agency" },
                  { label: "DMC (Destination Management Company)", value: "dmc" },
                  { label: "Hotel Partner", value: "hotel_partner" },
                ]}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Email */}
                <Input
                  name="email"
                  type="email"
                  label="Email "
                  placeholder="Enter your email"
                  required
                />

                {/* Phone */}
                <Input
                  name="phone"
                  type="phone"
                  label="Phone Number"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              {/* Business Profile */}
              <Input
                name="businessProfile"
                type="upload"
                label="Business Profile (ID, License, or Profile)"
                placeholder="Upload your business profile or document (PDF, Word, or Image)"
                required
              />

              <div className="pt-4 flex flex-col items-center space-y-6">
                <Button
                  type="submit"
                  className="w-full"
                  loading={isPending}
                >
                  Submit Application <ChevronRight size={20} className="ml-2" />
                </Button>
              </div>
            </form>
          </FormProvider>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

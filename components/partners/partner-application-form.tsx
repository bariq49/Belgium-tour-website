"use client";

import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { MaxWidthWrapper } from "@/components/shared/max-width-wrapper";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/button";
import { toast } from "react-hot-toast";
import { ChevronRight } from "lucide-react";

interface PartnerFormValues {
  firstName: string;
  lastName: string;
  companyName: string;
  partnerType: string;
  businessEmail: string;
  phone: string;
  businessProfile: string;
}

export const PartnerApplicationForm = () => {
  const methods = useForm<PartnerFormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      companyName: "",
      partnerType: "",
      businessEmail: "",
      phone: "",
      businessProfile: "",
    },
  });

  const onSubmit = (data: PartnerFormValues) => {
    console.log("Partner Application Data:", data);
    toast.success("Application submitted successfully! Our team will review it within 24 hours.");
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
          <p className="text-paragraph text-sm md:text-base opacity-70 font-roboto font-light leading-relaxed">
            Takes less than 2 minutes. We&apos;ll be in touch within 24 hours.
          </p>
        </div>

        {/* Form Container */}
        <div className="max-w-4xl mx-auto bg-[#FAF6F2] p-8 md:p-16 shadow-sm border border-gray-100 rounded-sm">
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* First Name */}
                <Input
                  name="firstName"
                  label="First Name"
                  placeholder="Jean"
                  required
                />

                {/* Last Name */}
                <Input
                  name="lastName"
                  label="Last Name"
                  placeholder="Dupont"
                  required
                />
              </div>

              {/* Company Name */}
              <Input
                name="companyName"
                label="Company Name"
                placeholder="ABC Travel / Hotel Name"
                required
              />

              {/* Partner Type */}
              <Input
                name="partnerType"
                label="Partner Type"
                placeholder="Select partner type..."
                required
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Business Email */}
                <Input
                  name="businessEmail"
                  type="email"
                  label="Business Email "
                  placeholder="email@company.com"
                  required
                />

                {/* Phone */}
                <Input
                  name="phone"
                  type="phone"
                  label="Phone Number"
                  required
                />
              </div>

              {/* Business Profile */}
              <Input
                name="businessProfile"
                type="textarea"
                label="Business Profile"
                placeholder="e.g. We are a luxury hotel concierge desk in Brussels looking for reliable private tour partners..."
                required
                rows={6}
              />

              <div className="pt-4 flex flex-col items-center space-y-6">
                <Button
                  type="submit"
                  className="bg-black text-white hover:bg-primary transition-all px-12 py-8 text-xs font-bold tracking-widest uppercase rounded-none flex items-center gap-2 group"
                >
                  Submit Application
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>

                <p className="text-[10px] text-paragraph/40 font-roboto uppercase tracking-widest text-center">
                  By submitting you agree to our partner terms. No commitment required.
                </p>
              </div>
            </form>
          </FormProvider>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

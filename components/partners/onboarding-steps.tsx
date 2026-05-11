import React from "react";
import { MaxWidthWrapper } from "@/components/shared/max-width-wrapper";
import { Mail, Phone } from "lucide-react";
import { COMPANY_EMAIL, COMPANY_PHONE, COMPANY_PHONE_HREF } from "@/constants/app-default";

const steps = [
  {
    number: "1",
    title: "Application Review",
    description: "Our partnership team reviews your application within 48 hours and contacts you to discuss next steps.",
  },
  {
    number: "2",
    title: "Partnership Setup",
    description: "Complete the partnership agreement, receive your partner credentials, and access our booking platform.",
  },
  {
    number: "3",
    title: "Start Earning",
    description: "Begin referring clients and earning commissions immediately. Your account manager is available for support.",
  },
];

export const OnboardingSteps = () => {
  return (
    <section className="py-24 bg-[#FAF9F7]">
      <MaxWidthWrapper>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-inria">
            What Happens After You Apply
          </h2>
          <p className="text-sm md:text-base text-paragraph opacity-60 font-roboto font-light leading-relaxed">
            Our partnership onboarding process is designed to get you started quickly
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {steps.map((step, idx) => (
            <div key={idx} className="text-center space-y-6">
              <div className="w-16 h-16 rounded-full border-2 border-primary/20 flex items-center justify-center mx-auto group-hover:border-primary transition-colors">
                <span className="text-2xl font-bold text-primary font-inria">
                  {step.number}
                </span>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-foreground font-inria">
                  {step.title}
                </h3>
                <p className="text-sm text-paragraph opacity-70 font-roboto font-light leading-relaxed px-4">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Box */}
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 shadow-sm border border-gray-100 text-center space-y-6 rounded-sm">
          <h4 className="text-lg md:text-xl font-bold text-foreground font-inria">
            Questions About Our Partnership Program?
          </h4>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
            <a 
              href={`mailto:${COMPANY_EMAIL}`}
              className="flex items-center gap-3 text-sm text-paragraph hover:text-primary transition-colors font-roboto font-light"
            >
              <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                <Mail className="w-4 h-4" />
              </div>
              {COMPANY_EMAIL}
            </a>
            <a 
              href={COMPANY_PHONE_HREF}
              className="flex items-center gap-3 text-sm text-paragraph hover:text-primary transition-colors font-roboto font-light"
            >
              <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                <Phone className="w-4 h-4" />
              </div>
              {COMPANY_PHONE}
            </a>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

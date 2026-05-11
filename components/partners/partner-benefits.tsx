import React from "react";
import { MaxWidthWrapper } from "@/components/shared/max-width-wrapper";

const stats = [
  {
    value: "15%+",
    label: "Average Commission Rate",
  },
  {
    value: "500+",
    label: "Active Partners",
  },
  {
    value: "24/7",
    label: "Partner Support Available",
  },
];

export const PartnerBenefits = () => {
  return (
    <section className="py-24 bg-white">
      <MaxWidthWrapper>
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-inria">
            Benefits of Joining Our Network
          </h2>
          <p className="text-sm md:text-base text-paragraph opacity-70 font-roboto font-light leading-relaxed">
            As a partner, you&apos;ll be able to enhance your client offerings while growing your business. We provide reliable transportation, professional chauffeurs, and personalized services to ensure your customers receive an exceptional experience.
          </p>
        </div>

        {/* Stats Card */}
        <div className="max-w-5xl mx-auto bg-[#F0EBE6] p-8 md:p-16 rounded-sm space-y-12">
          <p className="text-center text-sm md:text-base text-paragraph opacity-80 font-roboto font-light leading-relaxed max-w-3xl mx-auto">
            You&apos;ll also benefit from priority booking support, flexible service options, and a dedicated team that helps you manage requests efficiently. Whether you handle occasional bookings or high-volume clients, we adapt to your needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-4">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center space-y-3">
                <p className="text-4xl md:text-5xl font-bold text-primary font-inria">
                  {stat.value}
                </p>
                <p className="text-xs md:text-sm text-paragraph opacity-60 font-roboto font-light tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

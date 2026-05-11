import React from "react";
import { MaxWidthWrapper } from "@/components/shared/max-width-wrapper";
import { Check } from "lucide-react";

const partnerTypes = [
  {
    title: "Travel Agents & OTAs",
    subtitle: "Best for individual travel advisors.",
    features: [
      "15% commission on all tours",
      "Dedicated partner portal access",
      "Co-branded booking vouchers",
      "Monthly commission payouts",
    ],
  },
  {
    title: "DMC / Wholesalers",
    subtitle: "Best for high-volume operators.",
    features: [
      "Exclusive Net Rates available",
      "API / XML integration options",
      "Volume-based pricing tiers",
      "Priority vehicle allotment",
    ],
  },
  {
    title: "Hotels & Concierge",
    subtitle: "Best for in-house hotel teams.",
    features: [
      "10% commission OR Flat €50–€300",
      "Printed brochures & QR codes",
      "Instant booking link for your desk",
      "Complimentary FAM tours",
    ],
  },
];

export const WhoCanPartner = () => {
  return (
    <section className="py-24 bg-white">
      <MaxWidthWrapper>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-inria">
            Who Can Partner
          </h2>
          <div className="space-y-2">
            <p className="text-xs font-bold text-primary uppercase tracking-[0.2em] font-roboto">
              Three partner types — one programme
            </p>
            <p className="text-paragraph text-sm md:text-base opacity-70 font-roboto font-light leading-relaxed">
              We offer tailored solutions depending on how you do business. Choose the track that best fits your agency or hotel model.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partnerTypes.map((type, idx) => (
            <div key={idx} className="flex flex-col border border-primary/10 overflow-hidden shadow-sm hover:shadow-md transition-all group">
              {/* Card Header */}
              <div className="bg-primary p-8 text-center space-y-2 text-white">
                <h3 className="text-xl md:text-2xl font-bold font-inria">
                  {type.title}
                </h3>
                <p className="text-xs opacity-80 font-roboto font-light italic">
                  {type.subtitle}
                </p>
              </div>

              {/* Card Body */}
              <div className="bg-[#FAF6F2] p-8 flex-grow">
                <ul className="space-y-6">
                  {type.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex gap-3 items-start text-sm text-paragraph font-roboto font-light">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

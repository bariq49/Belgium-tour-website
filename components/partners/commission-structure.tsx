import React from "react";
import { MaxWidthWrapper } from "@/components/shared/max-width-wrapper";
import { Zap } from "lucide-react";

const structures = [
  {
    type: "Travel Agents & OTAs",
    description: "Standard for all tours",
    rate: "15%",
  },
  {
    type: "Net Rates",
    description: "Available for verified DMCs and Wholesalers",
    rate: "Available",
  },
  {
    type: "Hotel Concierges",
    description: "Depending on tour type/duration",
    rate: "10%",
    subRate: "OR €50–€300",
  },
];

export const CommissionStructure = () => {
  return (
    <section className="py-24 bg-[#FAF9F7]">
      <MaxWidthWrapper>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-inria">
            Commission Structure
          </h2>
          <p className="text-xs font-bold text-primary uppercase tracking-[0.2em] font-roboto">
            Transparent earnings — no hidden fees
          </p>
        </div>

        {/* Structure Card */}
        <div className="max-w-4xl mx-auto bg-white shadow-sm border border-gray-100 overflow-hidden">
          <div className="divide-y divide-gray-100">
            {structures.map((item, idx) => (
              <div key={idx} className="p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-foreground font-inria">
                    {item.type}
                  </h3>
                  <p className="text-sm text-paragraph opacity-60 font-roboto font-light">
                    {item.description}
                  </p>
                </div>
                
                <div className="text-right">
                  <p className="text-3xl md:text-4xl font-bold text-primary font-inria">
                    {item.rate}
                  </p>
                  {item.subRate && (
                    <p className="text-xs font-bold text-primary/60 font-roboto uppercase tracking-widest mt-1">
                      {item.subRate}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Bonus Footer */}
          <div className="bg-[#FAF6F2] p-8 md:p-12 border-t border-gray-100">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary shadow-sm flex-shrink-0">
                <Zap className="w-6 h-6 fill-primary" />
              </div>
              <div className="space-y-1">
                <h4 className="text-lg font-bold text-foreground font-inria">
                  +5% Performance Bonus
                </h4>
                <p className="text-sm text-paragraph opacity-70 font-roboto font-light">
                  Performance kicker for partners exceeding 10 bookings per month
                </p>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

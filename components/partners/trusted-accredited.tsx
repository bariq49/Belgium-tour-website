import React from "react";
import { MaxWidthWrapper } from "@/components/shared/max-width-wrapper";

const accreditations = ["GNET", "NBAA", "GBTA", "NLA", "MPI", "CVENT"];

export const TrustedAccredited = () => {
  return (
    <section className="py-20 bg-white">
      <MaxWidthWrapper>
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground font-inria">
            Trusted & Accredited
          </h2>
          <p className="text-sm text-paragraph opacity-60 font-roboto font-light leading-relaxed">
            We are a fully licensed and insured operator, active since 2013 with over 5,000+ satisfied guests.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {accreditations.map((name) => (
            <div 
              key={name} 
              className="bg-[#FAF9F7] h-20 flex items-center justify-center border border-gray-100"
            >
              <span className="text-xs font-bold text-paragraph/40 tracking-[0.2em]">
                {name}
              </span>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

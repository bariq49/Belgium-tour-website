import React from "react";
import { MaxWidthWrapper } from "@/components/shared/max-width-wrapper";
import { Calendar, TrendingUp, FileText, Settings2 } from "lucide-react";

const features = [
  {
    title: "Real-Time Bookings",
    description: "Check live availability and book tours instantly",
    icon: Calendar,
  },
  {
    title: "Earnings Tracker",
    description: "View your earned commissions and flat-fee referrals in real-time",
    icon: TrendingUp,
  },
  {
    title: "White-Label Tools",
    description: "Download unbranded itineraries and guest vouchers",
    icon: FileText,
  },
  {
    title: "Booking Management",
    description: "Modify or cancel reservations with a single click",
    icon: Settings2,
  },
];

export const PartnerPortal = () => {
  return (
    <section className="py-24 bg-white border-t border-gray-50">
      <MaxWidthWrapper>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-inria">
            The Partner Portal
          </h2>
          <div className="space-y-1">
            <p className="text-xs font-bold text-primary uppercase tracking-[0.2em] font-roboto">
              Technology built for luxury travel professionals
            </p>
            <p className="text-sm text-paragraph opacity-60 font-roboto font-light leading-relaxed">
              Our secure dashboard allows you to manage everything in one place
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-[#FAF6F2] p-10 md:p-12 space-y-6 group hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-primary shadow-sm">
                <feature.icon className="w-6 h-6" />
              </div>
              
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-foreground font-inria">
                  {feature.title}
                </h3>
                <p className="text-sm text-paragraph opacity-70 font-roboto font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

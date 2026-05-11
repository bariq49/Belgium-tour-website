import React from "react";
import { MaxWidthWrapper } from "@/components/shared/max-width-wrapper";
import { Phone, BookOpen, LayoutDashboard, UserCheck } from "lucide-react";

const supportFeatures = [
  {
    title: "Priority Phone Support",
    description: "Direct line to our partner support team for urgent bookings and last-minute requests",
    icon: Phone,
  },
  {
    title: "Resource Library",
    description: "Access marketing materials, service guides, and best practices to help you succeed",
    icon: BookOpen,
  },
  {
    title: "Performance Dashboard",
    description: "Track your bookings, earnings, and client activity in real-time through our partner portal",
    icon: LayoutDashboard,
  },
  {
    title: "Dedicated Account Manager",
    description: "Personal point of contact to help you maximize your partnership potential",
    icon: UserCheck,
  },
];

export const PartnerSupport = () => {
  return (
    <section className="py-24 bg-[#FAF9F7]">
      <MaxWidthWrapper>
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-inria">
            Dedicated Support for Partners
          </h2>
          <p className="text-sm md:text-base text-paragraph opacity-70 font-roboto font-light leading-relaxed">
            Our partner success team is available to assist you with bookings, special requests, and custom travel arrangements. We work closely with you to ensure smooth coordination and client satisfaction. From last-minute changes to VIP arrangements, we&apos;re here to support you at every step.
          </p>
        </div>

        {/* Support Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {supportFeatures.map((feature, idx) => (
            <div key={idx} className="bg-white p-10 flex gap-8 shadow-sm border border-gray-100 hover:shadow-md transition-all group">
              <div className="w-14 h-14 rounded-full bg-[#FAF6F2] flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <feature.icon className="w-6 h-6" />
              </div>
              
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-foreground font-inria">
                  {feature.title}
                </h3>
                <p className="text-sm text-paragraph opacity-60 font-roboto font-light leading-relaxed">
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

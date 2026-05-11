import React from "react";
import Image from "next/image";

const stats = [
  {
    image: "/assets/images/partners/collaboration.png",
    title: "150+ Active Partnerships",
    subtitle: "Growing network worldwide",
  },
  {
    image: "/assets/images/partners/trust.png",
    title: "$2M+ in Commissions Paid",
    subtitle: "To our partners in 2025",
  },
  {
    image: "/assets/images/partners/success.png",
    title: "98% Partner Satisfaction",
    subtitle: "Rated by our active partners",
  },
];

export const PartnerStatsGrid = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 w-full">
      {stats.map((stat, idx) => (
        <div key={idx} className="relative h-[400px] md:h-[500px] group overflow-hidden">
          <Image
            src={stat.image}
            alt={stat.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          {/* Content */}
          <div className="absolute bottom-10 left-10 text-white space-y-1">
            <h3 className="text-2xl font-bold font-inria">
              {stat.title}
            </h3>
            <p className="text-sm font-roboto font-light opacity-80 uppercase tracking-widest">
              {stat.subtitle}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

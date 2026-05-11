import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MaxWidthWrapper } from "@/components/shared/max-width-wrapper";
import { IMAGES } from "@/constants/image-constants";
import { Star, Globe, UserCheck, ShieldCheck } from "lucide-react";

export const ToursHero = () => {
  return (
    <div className="relative">
      {/* Hero Banner Area */}
      <section className="relative h-[450px] md:h-[550px] w-full overflow-hidden flex items-center">
        <Image
          src={IMAGES.tours.banner}
          alt="Tours & Vacations"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        
        <MaxWidthWrapper className="relative z-20 w-full">
          <div className="max-w-2xl text-center md:text-left md:ml-12 lg:ml-0">
            <h1 className="text-white text-5xl md:text-7xl font-inria mb-6">
              Tours & Vacations
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-xl font-roboto font-light leading-relaxed">
              Discover tailor-made luxury travel experiences crafted to match your preferences. From handpicked accommodations to exclusive moments.
            </p>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Content Area */}
      <section className="bg-white py-20 relative">
        <MaxWidthWrapper>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-10">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground font-inria leading-tight">
                  Luxury Tours & Vacations
                </h2>
                <div className="h-1 w-20 bg-primary/20" />
              </div>
              
              <p className="text-paragraph text-lg leading-relaxed opacity-90 font-roboto font-light">
                We have connected discerning travelers with top luxury travel specialists around the world. Exceptional service, handpicked boutique properties, and carefully selected experiences are just the beginning of what&apos;s possible for your luxury vacation. Every moment is thoughtfully curated for you. Use these sample luxury vacation itineraries for inspiration, then rely on the deep local knowledge of destination experts to plan a personalized journey tailored entirely to your preferences.
              </p>

              <Link
                href="/contact"
                className="inline-block bg-black text-white px-12 py-5 text-sm font-bold tracking-widest uppercase transition-all hover:bg-primary"
              >
                Get Started
              </Link>
            </div>

            {/* Right Floating Box & Social Proof */}
            <div className="lg:col-span-5 relative">
              {/* The Floating Box */}
              <div className="lg:absolute lg:-top-[300px] right-0 w-full bg-[#FAF9F7] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/50 space-y-10 z-30">
                <div className="text-center space-y-3">
                  <h3 className="text-3xl font-bold text-foreground font-inria">Life-Enriching Travel</h3>
                  <div className="flex items-center justify-center gap-4">
                    <div className="h-px w-8 bg-gray-300" />
                    <p className="text-xs uppercase tracking-[0.2em] text-primary font-bold">Designed Just for You</p>
                    <div className="h-px w-8 bg-gray-300" />
                  </div>
                </div>

                <ul className="space-y-8">
                  {[
                    { icon: Globe, text: "Trips curated by the world's top destination experts" },
                    { icon: UserCheck, text: "Concierge-level service leading up to and during your trip" },
                    { icon: ShieldCheck, text: "Unique, exclusive experiences and insider access" }
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-5 items-center">
                      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-sm">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <p className="text-sm font-medium text-paragraph leading-snug">{item.text}</p>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="block w-full bg-black text-white py-5 text-center text-xs font-bold tracking-[0.2em] uppercase hover:bg-primary transition-all"
                >
                  Get Started
                </Link>
              </div>

              {/* Social Proof (only visible/positioned correctly on desktop) */}
              <div className="lg:mt-[220px] pt-12 lg:pt-0 space-y-12">
                <div className="space-y-4 text-center lg:text-left">
                  <div className="flex justify-center lg:justify-start gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-[10px] font-black text-primary tracking-[0.3em] uppercase">
                    30,000+ Verified Traveler Reviews
                  </p>
                </div>

                <div className="space-y-6">
                  <p className="text-[10px] font-black text-paragraph/40 uppercase tracking-[0.3em] text-center lg:text-left">In the News</p>
                  <div className="grid grid-cols-2 gap-x-12 gap-y-8 opacity-30 grayscale contrast-125">
                    <div className="text-[10px] font-black italic uppercase leading-none">The New York Times</div>
                    <div className="text-[10px] font-bold uppercase leading-none">Travel + Leisure</div>
                    <div className="text-[10px] font-black uppercase leading-none">CNN</div>
                    <div className="text-[10px] font-black italic uppercase leading-none">Wall Street Journal</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
};


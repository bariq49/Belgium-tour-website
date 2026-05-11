import React from "react";
import Image from "next/image";
import { MaxWidthWrapper } from "@/components/shared/max-width-wrapper";
import { IMAGES } from "@/constants/image-constants";

const experiences = [
  {
    title: "Private city tours with local guides",
    image: IMAGES.about.section1,
  },
  {
    title: "Luxury chauffeur-driven transportation",
    image: IMAGES.about.section2,
  },
  {
    title: "Cultural and historical excursions",
    image: IMAGES.about.section3,
  },
  {
    title: "Food and wine tastings",
    image: IMAGES.about.section1,
  },
  {
    title: "Countryside and scenic day trips",
    image: IMAGES.about.section2,
  },
  {
    title: "Shopping and lifestyle experiences",
    image: IMAGES.about.section3,
  },
  {
    title: "Photography tours",
    image: IMAGES.about.section1,
  },
  {
    title: "Family-friendly activities",
    image: IMAGES.about.section2,
  },
];

export const PersonalizedExperiences = () => {
  return (
    <section className="py-24 bg-[#FAF9F7]">
      <MaxWidthWrapper>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-inria">
            Personalized Experiences You Can Request
          </h2>
          <p className="text-paragraph text-sm md:text-base opacity-70 font-roboto font-light leading-relaxed">
            Tailor your journey with these curated experiences
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((exp, idx) => (
            <div key={idx} className="bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all group">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={exp.image}
                  alt={exp.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-8 min-h-[100px] flex items-center">
                <h3 className="text-sm md:text-base font-bold text-foreground font-inria leading-snug">
                  {exp.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

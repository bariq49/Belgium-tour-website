import React from "react";
import { Banner } from "@/components/banner/banner";
import { HowItWorks } from "@/components/home/how-it-works/how-it-works";
import { IMAGES } from "@/constants/image-constants";

import { WhyChooseUs } from "@/components/custom-tours/why-choose-us";
import { PersonalizedExperiences } from "@/components/custom-tours/personalized-experiences";
import { TravelWithConfidence } from "@/components/custom-tours/travel-with-confidence";
import { CustomTourRequestForm } from "@/components/custom-tours/request-form";
import { AfterSubmitSteps } from "@/components/custom-tours/steps/after-submit-steps";
import { CustomCTA } from "@/components/shared/cta/custom-cta";

export default function CustomToursPage() {
  return (
    <div className="flex flex-col">
      <Banner
        title="Create a Journey Designed Just for You"
        description="Personalized travel experiences tailored to your interests, pace, and expectations"
        backgroundImage={IMAGES.customTours.banner}
        buttonText="Start Planning"
        className="h-[500px] md:h-[600px]"
      />
      
      <HowItWorks showBanner={false} />
      <WhyChooseUs />
      <PersonalizedExperiences />
      <TravelWithConfidence />
      <CustomTourRequestForm />
      <AfterSubmitSteps />
      <CustomCTA />
    </div>
  );
}

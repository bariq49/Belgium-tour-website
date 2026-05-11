import React from "react";
import { Banner } from "@/components/banner/banner";
import { IMAGES } from "@/constants/image-constants";
import { WhoCanPartner } from "@/components/partners/who-can-partner";
import { CommissionStructure } from "@/components/partners/commission-structure";
import { PartnerBenefits } from "@/components/partners/partner-benefits";
import { PartnerStatsGrid } from "@/components/partners/partner-stats-grid";
import { PartnerSupport } from "@/components/partners/partner-support";
import { TrustedAccredited } from "@/components/partners/trusted-accredited";
import { PartnerPortal } from "@/components/partners/partner-portal";
import { ParallaxCTA } from "@/components/shared/cta/parallax-cta";
import { PartnerApplicationForm } from "@/components/partners/partner-application-form";
import { OnboardingSteps } from "@/components/partners/onboarding-steps";
import { HowItWorks } from "@/components/home/how-it-works/how-it-works";

const partnerSteps = [
  {
    number: "1.",
    title: "Apply Below",
    description: "Fill in the short form. We review all applications within 24 hours.",
  },
  {
    number: "2.",
    title: "Receive Your Partner Kit",
    description: "Get access to our Secure Portal, rate sheets, and your dedicated VIP contact number.",
  },
  {
    number: "3.",
    title: "Book & Earn",
    description: "Start booking through the portal. Track your earnings in real-time and get paid monthly via bank transfer.",
  },
];

export default function PartnersPage() {
  return (
    <div className="flex flex-col">
      <Banner
        topSubtitle="BELGIUM PRIVATE TOURS — PARTNER PROGRAMME"
        title="Elevate Your Clients' Belgian Experience & Earn Competitive Commissions"
        description="Join our exclusive network of travel professionals. Whether you are booking for international clients, managing a global DMC portfolio, or recommending local gems to in-house guests, we provide the luxury vehicles, expert guides, and seamless technology to make you look like a hero."
        backgroundImage={IMAGES.partners.banner}
        buttonText="Apply Now"
        buttonLink="#partners-apply"
        secondaryButtonText="Partner Login"
        secondaryButtonLink="/partners/login"
      />

      <WhoCanPartner />
      <CommissionStructure />
      <TrustedAccredited />
      <PartnerPortal />
      <HowItWorks
        title="How It Works"
        subtitle="3 steps to start earning"
        steps={partnerSteps}
        showBanner={false}
        showCTA={false}
        variant="centered"
        className="bg-white"
      />

      <PartnerBenefits />

      <PartnerSupport />
      <ParallaxCTA buttonLink="#partners-apply" />
      <PartnerStatsGrid />
      <PartnerApplicationForm />
      <OnboardingSteps />
    </div>
  );
}

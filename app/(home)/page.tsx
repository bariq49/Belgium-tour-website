import { HeroSection } from "@/components/home/hero-section/hero-section";
import { TrustAndCommitment } from "@/components/home/trust-commitment/trust-commitment";
import { DestinationsSection } from "@/components/home/destinations-section/destinations-section";
import { DesignJourney } from "@/components/home/design-journey/design-journey";
import { HowItWorks } from "@/components/home/how-it-works/how-it-works";
import { ScenicBanner } from "@/components/banner/scenic-banner";
import { ExperienceTabs } from "@/components/home/experience-tabs/experience-tabs";
import { Testimonials } from "@/components/home/testimonials/testimonials";
import { Features } from "@/components/home/features/features";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <TrustAndCommitment />
      <DestinationsSection />
      <DesignJourney />
      <ScenicBanner />
      <HowItWorks />
      <ExperienceTabs />
      <Features />
      <Testimonials />
    </div>
  );
}

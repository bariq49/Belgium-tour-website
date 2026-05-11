import { Banner } from "@/components/banner/banner";
import { IMAGES } from "@/constants/image-constants";
import { AboutContent } from "@/components/about/about-content";
import { HowItWorks } from "@/components/home/how-it-works/how-it-works";
import { InfoSection } from "@/components/about/info-section";
import { Features } from "@/components/home/features/features";

export default function AboutPage() {
    return (
        <div className="flex flex-col">
            <Banner
                title="About Us"
                description="Custom travel tailored to you by the world's top travel specialists"
                backgroundImage={IMAGES.about.banner}
                buttonText="Design My Dream Trip"
            />
            <AboutContent 
                title="Founded by and for travelers just like you"
                paragraphs={[
                    "Belgium Private Tours was founded with a singular vision: to transform the way travelers experience Belgium. We believe that every journey should be as unique as the traveler, crafted with care, expertise, and an unwavering commitment to excellence.",
                    "What began as a passion for sharing Belgium's hidden treasures has grown into a distinguished service trusted by discerning travelers worldwide. Our team of certified expert guides brings years of experience and deep local knowledge to every tour.",
                    "We take pride in offering more than just tours—we create memorable experiences that connect you with the heart and soul of Belgium, all delivered with the comfort, discretion, and sophistication you deserve."
                ]}
            />

            <InfoSection
                title="Shaping the art of luxury travel"
                items={["CURATED EXPERIENCES", "UNRIVALLED KNOWLEDGE", "EXCLUSIVE INSIDER ACCESS", "CONCIERGE-LEVEL SERVICE"]}
                imageSrc={IMAGES.about.section1}
                imagePosition="left"
            />

            <InfoSection
                title="Values inspired by travelers like you"
                items={["EXCELLENCE AT EVERY TURN", "CLOSE COLLABORATION", "PRECISE PERSONALIZATION", "ADDING EXCEPTIONAL VALUE"]}
                imageSrc={IMAGES.about.section2}
                imagePosition="right"
                backgroundColor="bg-section"
            />

            <InfoSection
                title="This is what travel means to us"
                items={["ENRICHING OUR LIVES", "CONNECTING DEEPLY", "BROADENING PERSPECTIVES", "SHAPING WHO WE ARE"]}
                imageSrc={IMAGES.about.section3}
                imagePosition="left"
            />

            <HowItWorks showBanner={false} />
            <Features />
        </div>
    );
}

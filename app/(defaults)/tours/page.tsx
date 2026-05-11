import { ToursHero } from "@/components/tours/tours-hero";
import { TourList } from "@/components/tours/tour-list";
import { HowItWorks } from "@/components/home/how-it-works/how-it-works";
import { FaqAccordion } from "@/components/shared/faq-accordion";
import { Testimonials } from "@/components/home/testimonials/testimonials";

const tourFaqs = [
  {
    question: "What are the most luxurious vacation destinations?",
    answer: "The most luxurious destinations often include historical European cities, private islands, and exclusive alpine resorts. In Belgium, Bruges and Brussels offer world-class luxury accommodations and private experiences tailored to discerning travelers."
  },
  {
    question: "What are the best luxury travel experiences?",
    answer: "Best experiences range from private gallery viewings and Michelin-starred dining to chauffeur-driven tours of hidden landmarks. We specialize in curating these exclusive moments for our clients."
  },
  {
    question: "What can I expect on all-inclusive luxury vacations?",
    answer: "You can expect seamless logistics, premium transportation, handpicked boutique hotels, and highly knowledgeable private guides who cater to your every need throughout the journey."
  },
  {
    question: "What are the benefits of planning with a luxury travel specialist?",
    answer: "Specialists provide insider access, expert local knowledge, and personalized itineraries that you won't find in standard travel packages, ensuring your trip is truly unique."
  },
  {
    question: "What are your best luxury vacation packages?",
    answer: "Our best packages combine multi-city private tours, exclusive tasting experiences, and stays in Belgium's most prestigious historic properties."
  },
  {
    question: "What are some unique luxury destinations to visit?",
    answer: "Beyond the major cities, destinations like the Ardennes forest or the coastal villas offer unique, high-end retreats for those looking to escape the crowds."
  },
  {
    question: "What else should I know about how to plan a luxury tour?",
    answer: "Early booking is recommended for exclusive venues and peak seasons. Our team handles all the details, from restaurant reservations to private transport arrangements."
  },
];

export default function ToursPage() {
  return (
    <div className="flex flex-col">
      <ToursHero />
      <TourList />
      <HowItWorks showBanner={false} />
      <FaqAccordion
        title="Travel Tips for Your Luxury Trip"
        description="Here is everything you need to know about planning your perfect Belgian getaway."
        items={tourFaqs}
      />
      <Testimonials />
    </div>
  );
}

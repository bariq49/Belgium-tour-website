import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

export const ContactFAQs = () => {
    const faqs = [
        {
            question: "What are the most luxurious vacation destinations?",
            answer: "Belgium offers several world-class luxury destinations, including the historic streets of Bruges, the diamond district of Antwerp, and the grand palaces of Brussels."
        },
        {
            question: "What are the best luxury travel experiences?",
            answer: "From private chocolate tasting workshops to exclusive canal tours and VIP access to historic landmarks, we curate experiences that define luxury."
        },
        {
            question: "What can I expect on all-inclusive luxury vacations?",
            answer: "Our all-inclusive tours cover premium transport, expert private guides, hand-picked dining experiences, and all entrance fees to attractions."
        },
        {
            question: "What are the benefits of planning with a luxury travel specialist?",
            answer: "A specialist provides local expertise, insider access to hidden gems, and 24/7 concierge support to ensure every detail of your journey is perfect."
        },
        {
            question: "What are your best luxury vacation packages?",
            answer: "Our 'Grand Belgium Tour' and 'Ardennes Heritage Experience' are highly rated for their balance of history, comfort, and exclusivity."
        },
        {
            question: "What are some unique luxury destinations to visit?",
            answer: "Consider the medieval town of Ghent for its stunning architecture or the castle-laden countryside of Wallonia for a truly unique experience."
        },
        {
            question: "What else should I know about how to plan a luxury tour?",
            answer: "We recommend booking at least 4-8 weeks in advance for custom itineraries to ensure availability of our top-tier guides and exclusive venues."
        }
    ];

    return (
        <Card className="border-none shadow-sm rounded-sm bg-white overflow-hidden">
            <CardContent className="p-8 space-y-6">
                <h3 className="text-xl font-bold font-inria text-gray-900">Frequently Asked Questions</h3>
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="border-gray-100">
                            <AccordionTrigger className="text-left text-sm font-bold text-gray-700 hover:text-gray-900 hover:no-underline py-5">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-sm text-gray-500 leading-relaxed pb-5">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </CardContent>
        </Card>
    );
};

"use client";

import React from "react";
import { PageBanner } from "@/components/banner/page-banner";
import { ContactSidebar } from "@/components/contact/contact-sidebar";
import { ContactFAQs } from "@/components/contact/contact-faqs";
import { ContactForm } from "@/components/contact/contact-form";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-section">
            <PageBanner
                title="Get in Touch"
                description="Have a question or ready to book? We're here to help make your Belgian journey unforgettable"
            />

            <div className="container mx-auto px-4 py-16 md:py-24">
                <div className="">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                        <div className="lg:col-span-4 lg:sticky lg:top-24">
                            <ContactSidebar />
                        </div>
                        <div className="lg:col-span-8 space-y-8">
                            <ContactForm />
                            <ContactFAQs />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
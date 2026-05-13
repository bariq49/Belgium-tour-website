import React from "react";
import { Mail, Phone, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

import {
    COMPANY_PHONE,
    COMPANY_PHONE_HREF,
    COMPANY_EMAIL,
    COMPANY_EMAIL_HREF,
    COMPANY_ADDRESS
} from "@/constants/app-default";

export const ContactSidebar = () => {
    return (
        <div className="space-y-8">
            {/* Contact Info Card */}
            <Card className="border-none shadow-sm rounded-sm bg-white overflow-hidden">
                <CardContent className="p-8 space-y-8">
                    <h3 className="text-xl font-bold font-inria text-gray-900">Contact Information</h3>

                    <div className="space-y-6">
                        <ContactInfoItem
                            icon={<Mail className="w-5 h-5" />}
                            label="Email"
                            value={COMPANY_EMAIL}
                            linkUrl={COMPANY_EMAIL_HREF}
                        />
                        <ContactInfoItem
                            icon={<Phone className="w-5 h-5" />}
                            label="Phone"
                            value={COMPANY_PHONE}
                            linkUrl={COMPANY_PHONE_HREF}
                            subValue="Mon-Sun: 8:00 AM - 8:00 PM"
                        />
                        <ContactInfoItem
                            icon={<MapPin className="w-5 h-5" />}
                            label="Location"
                            value={COMPANY_ADDRESS}
                            linkText="View on Google Maps"
                            linkUrl="https://maps.google.com/?q=Brussels,Belgium"
                        />
                    </div>
                </CardContent>
            </Card>

            {/* Quick Response Time */}
            <div className="flex gap-4 px-2">
                <div className="mt-1">
                    <Clock className="w-5 h-5 text-gray-900" />
                </div>
                <div className="space-y-1">
                    <h4 className="font-bold text-sm uppercase tracking-wider text-gray-900">Quick Response Time</h4>
                    <p className="text-sm text-gray-900 leading-relaxed">
                        We typically respond to all inquiries within 24 hours. For urgent booking requests, please call us directly.
                    </p>
                </div>
            </div>

            {/* Why Contact Us Card */}
            <Card className="border-none shadow-sm rounded-sm bg-white overflow-hidden">
                <CardContent className="p-8 space-y-6">
                    <h3 className="text-xl font-bold font-inria text-gray-900">Why Contact Us?</h3>
                    <ul className="space-y-4">
                        <WhyItem text="Expert advice on tour selection" />
                        <WhyItem text="Custom itinerary planning" />
                        <WhyItem text="Group booking assistance" />
                        <WhyItem text="Partnership opportunities" />
                    </ul>
                </CardContent>
            </Card>
        </div>
    );
};

const ContactInfoItem = ({ icon, label, value, subValue, linkText, linkUrl }: any) => (
    <div className="flex gap-4">
        <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-900 shrink-0">
            {icon}
        </div>
        <div className="">
            <p className="text-base font-semibold text-primary">{label}</p>
            {linkUrl && !linkText ? (
                <a href={linkUrl} className="text-sm font-semibold text-gray-900 hover:underline">
                    {value}
                </a>
            ) : (
                <p className="text-sm font-semibold text-gray-900">{value}</p>
            )}
            {subValue && <p className="text-sm text-gray-400">{subValue}</p>}
            {linkText && (
                <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-gray-900 hover:underline flex items-center gap-1">
                    {linkText} <span className="text-xs">→</span>
                </a>
            )}
        </div>
    </div>
);

const WhyItem = ({ text }: { text: string }) => (
    <li className="flex items-center gap-3">
        <CheckCircle2 className="w-4 h-4 text-gray-900" />
        <span className="text-sm text-gray-600">{text}</span>
    </li>
);

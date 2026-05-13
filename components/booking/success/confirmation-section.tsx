"use client";

import React from "react";
import Link from "next/link";
import { Check, Hash, Mail, Home, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ConfirmationSectionProps {
    firstName: string;
    orderNumber: string;
    customerEmail?: string;
    onDownload: () => void;
    isDownloading: boolean;
}

export const ConfirmationSection = ({
    firstName,
    orderNumber,
    customerEmail,
    onDownload,
    isDownloading,
}: ConfirmationSectionProps) => (
    <div className="lg:col-span-2 space-y-6">
        <div className="space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-sm bg-gray-900 shadow-lg">
                <Check className="w-8 h-8 text-white" strokeWidth={3} />
            </div>

            <div className="space-y-2">
                <h1 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight">
                    Thank You, {firstName}
                </h1>
                <p className="text-base text-gray-500">
                    Your booking has been confirmed and is ready for your trip.
                </p>
            </div>
        </div>

        <ConfirmationNumberCard orderNumber={orderNumber} />
        {customerEmail && <EmailNoticeCard email={customerEmail} />}

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button asChild>
                <Link href="/">
                    <Home className="w-4 h-4 mr-2" />
                    Go to Homepage
                </Link>
            </Button>
            <Button onClick={onDownload} disabled={isDownloading} loading={isDownloading}>
                <Download className="w-4 h-4 mr-2" />
                Download Receipt
            </Button>
        </div>
    </div>
);

const ConfirmationNumberCard = ({ orderNumber }: { orderNumber: string }) => (
    <div className="bg-white rounded-sm border border-border p-5 shadow-sm">
        <div className="flex items-center gap-4">
            <div className="bg-primary/10 p-3 rounded-sm">
                <Hash className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">
                    Confirmation Number
                </p>
                <p className="font-mono font-bold text-gray-900 text-lg truncate">
                    {orderNumber}
                </p>
            </div>
        </div>
    </div>
);

const EmailNoticeCard = ({ email }: { email: string }) => (
    <div className="bg-amber-50/60 border border-amber-100 rounded-sm p-5">
        <div className="flex items-start gap-4">
            <div className="bg-amber-100 p-2.5 rounded-sm">
                <Mail className="w-5 h-5 text-amber-600" />
            </div>
            <div className="flex-1 min-w-0">
                <p className="font-bold text-gray-900 text-sm">Confirmation Email Sent</p>
                <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                    We&apos;ve sent all booking details to{" "}
                    <span className="font-semibold text-gray-800 break-all">{email}</span>.
                    Please check your inbox (and spam folder) for the complete itinerary and driver
                    information.
                </p>
            </div>
        </div>
    </div>
);

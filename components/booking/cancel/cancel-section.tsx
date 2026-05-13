"use client";

import React from "react";
import Link from "next/link";
import { XCircle, Home, RefreshCw, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CancelSectionProps {
    firstName: string;
    orderNumber: string;
}

export const CancelSection = ({
    firstName,
    orderNumber,
}: CancelSectionProps) => (
    <div className="lg:col-span-2 space-y-6">
        <div className="space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-sm bg-red-600 shadow-lg">
                <XCircle className="w-8 h-8 text-white" strokeWidth={3} />
            </div>

            <div className="space-y-2">
                <h1 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight">
                    Payment Cancelled
                </h1>
                <p className="text-base text-gray-500">
                    Hello {firstName}, your payment process was cancelled and no charges were made.
                </p>
            </div>
        </div>

        <div className="bg-white rounded-sm border border-red-100 p-5 shadow-sm">
            <div className="flex items-start gap-4">
                <div className="bg-red-50 p-2.5 rounded-sm">
                    <XCircle className="w-5 h-5 text-red-600" />
                </div>
                <div className="flex-1 min-w-0">
                    <p className="font-bold text-gray-900 text-sm">What happened?</p>
                    <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                        The checkout session for order <span className="font-mono font-bold text-gray-800">{orderNumber}</span> was closed before completion. If this was a mistake, you can try paying again from your dashboard or contact our support team.
                    </p>
                </div>
            </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button asChild>
                <Link href="/">
                    <Home className="w-4 h-4 mr-2" />
                    Go to Homepage
                </Link>
            </Button>
            <Button variant="outline" asChild>
                <Link href="/contact">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Contact Support
                </Link>
            </Button>
        </div>
    </div>
);

import React from "react";
import {
    Calendar,
    CreditCard,
    Hash,
    Receipt,
    ShieldCheck,
    ExternalLink,
} from "lucide-react";
import { format } from "date-fns";
import { formatPrice } from "@/lib/utils";
import { PriceLine, MetaRow } from "./primitives";

interface PriceBreakdown {
    baseSubtotal?: number;
    total?: number;
}
interface StripeDetails {
    cardBrand?: string;
    cardLast4?: string;
    receiptUrl?: string;
    paymentIntentId?: string;
}

interface PaymentSummaryCardProps {
    breakdown: PriceBreakdown;
    orderNumber: string;
    transactionId?: string;
    paymentMethod?: string;
    paymentStatus?: string;
    paidOn?: string | Date;
    stripeDetails?: StripeDetails;
}

export const PaymentSummaryCard = ({
    breakdown,
    orderNumber,
    transactionId,
    paymentMethod,
    paymentStatus,
    paidOn,
    stripeDetails,
}: PaymentSummaryCardProps) => {
    const cardBrand = stripeDetails?.cardBrand;
    const cardLast4 = stripeDetails?.cardLast4;
    const receiptUrl = stripeDetails?.receiptUrl;

    return (
        <section className="bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100/60 rounded-sm border border-amber-200/50 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-5">
                <h2 className="text-lg font-bold text-gray-900">Payment Summary</h2>
                {paymentStatus && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase tracking-wider">
                        <ShieldCheck className="w-3 h-3" />
                        {paymentStatus}
                    </span>
                )}
            </div>

            <div className="space-y-3 text-sm">
                <PriceLine label="Tour Base Price" value={breakdown.baseSubtotal} />
            </div>

            <div className="mt-5 pt-5 border-t border-amber-200/70 flex items-center justify-between">
                <span className="text-base font-bold text-gray-900">Total Paid</span>
                <span className="text-2xl font-black text-amber-700">
                    {formatPrice(breakdown.total || 0)}
                </span>
            </div>

            <div className="mt-5 pt-5 border-t border-amber-200/70 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <MetaRow
                    icon={<Receipt className="w-3.5 h-3.5" />}
                    label="Transaction ID"
                    value={
                        transactionId || stripeDetails?.paymentIntentId ? (
                            transactionId || stripeDetails?.paymentIntentId
                        ) : (
                            <span className="text-amber-700/40 italic">Pending</span>
                        )
                    }
                    mono
                />
                <MetaRow
                    icon={<CreditCard className="w-3.5 h-3.5" />}
                    label="Payment Method"
                    value={
                        cardLast4
                            ? `${cardBrand || "Card"} •••• ${cardLast4}`
                            : paymentMethod || "Card"
                    }
                    capitalize
                />
                {paidOn ? (
                    <MetaRow
                        icon={<Calendar className="w-3.5 h-3.5" />}
                        label="Paid On"
                        value={format(new Date(paidOn), "MMM do, yyyy 'at' h:mm a")}
                    />
                ) : null}
                <MetaRow
                    icon={<Hash className="w-3.5 h-3.5" />}
                    label="Order Number"
                    value={orderNumber}
                    mono
                />
            </div>

            {receiptUrl && (
                <a
                    href={receiptUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-amber-700 hover:text-amber-800 transition-colors"
                >
                    View Stripe Receipt
                    <ExternalLink className="w-3 h-3" />
                </a>
            )}
        </section>
    );
};

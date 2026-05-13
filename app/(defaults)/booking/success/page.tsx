"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useBooking, useDownloadBookingReceipt } from "@/hooks/queries/use-bookings";
import { BookingSuccessSkeleton } from "@/components/skeletons/booking-success-skeleton";
import {
    ConfirmationSection,
    TripDetailsCard,
    PassengerInfoCard,
    PaymentSummaryCard,
    InvalidAccessNotice,
} from "@/components/booking/success";

const SuccessContent = () => {
    const searchParams = useSearchParams();
    const orderNumber = searchParams.get("orderNumber");

    const { data: data, isLoading } = useBooking(orderNumber || "");
    console.log(data)
    const { mutate: downloadReceipt, isPending: isDownloading } = useDownloadBookingReceipt();
    if (!orderNumber) return <InvalidAccessNotice />;
    if (isLoading) return <BookingSuccessSkeleton />;

    const booking = data?.data;
    const payment = data?.payment;
    const resolvedOrderNumber = booking?.orderNumber || orderNumber;
    const firstName = booking?.customer?.fullName?.split(" ")[0] || "Guest";

    return (
        <div className="min-h-[80vh] bg-section py-10 md:py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-10">
                    <ConfirmationSection
                        firstName={firstName}
                        orderNumber={resolvedOrderNumber}
                        customerEmail={booking?.customer?.email}
                        onDownload={() => downloadReceipt(resolvedOrderNumber)}
                        isDownloading={isDownloading}
                    />

                    <div className="lg:col-span-3 space-y-5">
                        <TripDetailsCard
                            date={booking?.date}
                            time={booking?.pickupTime}
                            vehicleName={booking?.tourName}
                            hotelName={booking?.customer?.hotelName}
                            address={booking?.customer?.hotelAddress}
                        />

                        <PassengerInfoCard
                            fullName={booking?.customer?.fullName}
                            email={booking?.customer?.email}
                            phone={booking?.customer?.phone}
                        />

                        <PaymentSummaryCard
                            breakdown={{
                                baseSubtotal: booking?.priceBreakdown?.basePrice,
                                total: booking?.priceBreakdown?.totalPrice
                            }}
                            orderNumber={resolvedOrderNumber}
                            transactionId={payment?.transactionId}
                            paymentMethod={payment?.paymentMethod}
                            paymentStatus={payment?.status}
                            paidOn={payment?.updatedAt || payment?.createdAt}
                            stripeDetails={payment?.stripeDetails}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

const SuccessPage = () => (
    <Suspense fallback={<BookingSuccessSkeleton />}>
        <SuccessContent />
    </Suspense>
);

export default SuccessPage;

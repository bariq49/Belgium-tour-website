"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import RevinueChart from "./components/revinue-chart";
import Stats from "./components/stats";
import NextRides from "./components/next-rides";

const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
});

const dummyOverview = {
    stats: {
        totalRides: 124,
        confirmedRides: 86,
        upcomingRides: 12,
        nextRideDate: "2026-05-20",
        lastRideDate: "2026-05-14",
    },
    chart: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        spending: [1200, 2100, 1800, 2400, 3200, 2800],
        bookings: [10, 18, 15, 22, 30, 25],
    },
    nextRides: [
        {
            _id: "1",
            bookingNumber: "BT-1001",
            pickupDate: "May 20, 2026",
            pickupTime: "10:00 AM",
            pickupAddress: "Brussels Airport (BRU)",
            dropoffAddress: "Grand Place, Brussels",
            amount: 85.00,
            status: "confirmed"
        },
        {
            _id: "2",
            bookingNumber: "BT-1002",
            pickupDate: "May 22, 2026",
            pickupTime: "02:30 PM",
            pickupAddress: "Antwerp Central Station",
            dropoffAddress: "Historic Center, Bruges",
            amount: 145.50,
            status: "pending"
        },
        {
            _id: "3",
            bookingNumber: "BT-1003",
            pickupDate: "May 25, 2026",
            pickupTime: "09:00 AM",
            pickupAddress: "Ghent-Sint-Pieters",
            dropoffAddress: "Castle of the Counts",
            amount: 65.00,
            status: "confirmed"
        }
    ]
};

const DashboardPageView = () => {
    const [months, setMonths] = React.useState<3 | 6 | 12>(6);
    const overview = dummyOverview;

    return (
        <div className="space-y-4">
            <div className="rounded-md border border-border bg-background px-5 py-4 shadow-sm">
                <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="space-y-2">
                        <h1 className="text-2xl font-semibold leading-tight text-foreground sm:text-[28px]">
                            Welcome
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Here is what's happening with your account today.
                        </p>
                    </div>
                    <p className="rounded-full bg-muted/40 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                        {currentDate}
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                <Stats
                    stats={{
                        totalRides: overview?.stats?.totalRides ?? 0,
                        confirmedRides: overview?.stats?.confirmedRides ?? 0,
                        upcomingRides: overview?.stats?.upcomingRides ?? 0,
                        nextRideDate: overview?.stats?.nextRideDate,
                        lastRideDate: overview?.stats?.lastRideDate,
                    }}
                />
            </div>

            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 xl:col-span-8 space-y-6">
                    <Card className="bg-background border-border shadow-sm rounded-md">
                        <CardHeader className="pb-0 mb-0">
                            <div className="flex flex-wrap items-center gap-3">
                                <CardTitle className="flex-1 whitespace-nowrap text-xl font-bold">
                                    Spending & Bookings
                                </CardTitle>
                                <div className="inline-flex items-center rounded-md border border-border p-1">
                                    {[3, 6, 12].map((value) => (
                                        <button
                                            key={value}
                                            type="button"
                                            onClick={() => setMonths(value as 3 | 6 | 12)}
                                            className={`rounded-sm px-2.5 py-1 text-xs font-semibold ${months === value
                                                ? "bg-secondary text-secondary-foreground"
                                                : "text-muted-foreground"
                                                }`}
                                        >
                                            {value} Months
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="px-0">
                            <RevinueChart
                                labels={overview?.chart?.labels}
                                spending={overview?.chart?.spending}
                                bookings={overview?.chart?.bookings}
                            />
                        </CardContent>
                    </Card>

                    <NextRides rides={overview?.nextRides} />
                </div>
            </div>
        </div>
    );
};

export default DashboardPageView;

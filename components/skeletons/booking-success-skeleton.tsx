import React from "react";

const Bar = ({ className }: { className?: string }) => (
    <div className={`bg-gray-200 rounded ${className || ""}`} />
);

const Card = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-white rounded-2xl border border-border p-6 shadow-sm space-y-5">
        {children}
    </div>
);

const DetailRowSkeleton = () => (
    <div className="flex items-start gap-3">
        <div className="w-9 h-9 rounded-lg bg-gray-100 flex-shrink-0" />
        <div className="space-y-2 flex-1">
            <Bar className="h-2 w-16" />
            <Bar className="h-3.5 w-32" />
        </div>
    </div>
);

export const BookingSuccessSkeleton = () => (
    <div className="min-h-[80vh] bg-section py-10 md:py-16 animate-pulse">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-10">
                {/* LEFT — Confirmation */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="space-y-6">
                        <div className="w-16 h-16 rounded-full bg-gray-200" />
                        <div className="space-y-3">
                            <Bar className="h-10 w-3/4" />
                            <Bar className="h-4 w-2/3" />
                        </div>
                    </div>

                    {/* Confirmation Number Card */}
                    <div className="bg-white rounded-2xl border border-border p-5 shadow-sm">
                        <div className="flex items-center gap-4">
                            <div className="w-11 h-11 rounded-xl bg-gray-100" />
                            <div className="flex-1 space-y-2">
                                <Bar className="h-2.5 w-24" />
                                <Bar className="h-5 w-40" />
                            </div>
                        </div>
                    </div>

                    {/* Email Notice */}
                    <div className="bg-amber-50/60 border border-amber-100 rounded-2xl p-5">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-xl bg-amber-100" />
                            <div className="flex-1 space-y-2">
                                <Bar className="h-3.5 w-40" />
                                <Bar className="h-3 w-full" />
                                <Bar className="h-3 w-5/6" />
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                        <Bar className="h-12 w-full sm:flex-1 rounded-xl" />
                        <Bar className="h-12 w-full sm:flex-1 rounded-xl" />
                    </div>
                </div>

                {/* RIGHT — Details */}
                <div className="lg:col-span-3 space-y-5">
                    {/* Trip Details */}
                    <Card>
                        <Bar className="h-5 w-32" />
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            {Array.from({ length: 4 }).map((_, i) => (
                                <DetailRowSkeleton key={i} />
                            ))}
                        </div>
                    </Card>

                    {/* Passenger Information */}
                    <Card>
                        <Bar className="h-5 w-44" />
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                            {Array.from({ length: 3 }).map((_, i) => (
                                <DetailRowSkeleton key={i} />
                            ))}
                        </div>
                    </Card>

                    {/* Payment Summary */}
                    <section className="bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100/60 rounded-2xl border border-amber-200/50 p-6 shadow-sm space-y-5">
                        <div className="flex items-center justify-between">
                            <Bar className="h-5 w-40" />
                            <Bar className="h-5 w-20 rounded-full" />
                        </div>

                        <div className="space-y-3">
                            {Array.from({ length: 4 }).map((_, i) => (
                                <div key={i} className="flex items-center justify-between">
                                    <Bar className="h-3 w-32" />
                                    <Bar className="h-3 w-16" />
                                </div>
                            ))}
                        </div>

                        <div className="pt-4 border-t border-amber-200/70 flex items-center justify-between">
                            <Bar className="h-5 w-24" />
                            <Bar className="h-7 w-28" />
                        </div>

                        <div className="pt-4 border-t border-amber-200/70 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {Array.from({ length: 4 }).map((_, i) => (
                                <DetailRowSkeleton key={i} />
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </div>
);

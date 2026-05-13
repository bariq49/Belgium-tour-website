"use client";

import React, { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useCustomTourRequest } from "@/hooks/queries/use-custom-tour-requests";
import { MaxWidthWrapper } from "@/components/shared/max-width-wrapper";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Calendar, Users, Heart, Wallet, ArrowRight } from "lucide-react";
import Image from "next/image";

function CustomSuccessContent() {
  const searchParams = useSearchParams();
  const requestId = searchParams.get("requestId");
  const router = useRouter();

  const { data: request, isLoading } = useCustomTourRequest(requestId || "");

  if (!requestId) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-4">
        <h2 className="text-2xl font-bold mb-4">Invalid Access</h2>
        <Button onClick={() => router.push("/custom-tours")}>Browse Journeys</Button>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="w-16 h-16 bg-gray-200 rounded-full" />
          <div className="h-8 w-64 bg-gray-200 rounded-sm" />
        </div>
      </div>
    );
  }

  const data = request;
  const tour = data?.tourId;

  return (
    <div className="bg-section/30 py-16 md:py-24 min-h-screen">
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Confirmation & Image */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-green-50 text-green-700 rounded-full border border-green-100">
                <CheckCircle2 className="w-5 h-5" />
                <span className="text-sm font-bold uppercase tracking-widest">Request Received</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-foreground font-inria leading-tight">
                Your Dream Journey <br /> starts here, {data?.firstName}.
              </h1>

              <p className="text-paragraph text-xl font-roboto font-light leading-relaxed max-w-2xl">
                We've received your personalization request for the <span className="font-bold">"{tour?.title}"</span>.
                Our travel experts are now crafting your bespoke itinerary and will contact you within 24 hours.
              </p>
            </div>

            <div className="relative aspect-[16/9] w-full rounded-sm overflow-hidden shadow-2xl border-8 border-white">
              <Image
                src={tour?.coverImage || "/assets/images/placeholder.jpg"}
                alt={tour?.title || "Custom Tour"}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column: Summary Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-8 md:p-10 border border-gray-100 rounded-sm shadow-sm space-y-8">
              <h2 className="text-2xl font-bold text-foreground font-inria border-b border-gray-100 pb-4">
                Personalization Summary
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-section flex items-center justify-center shrink-0">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-paragraph opacity-50 mb-1">Dates & Duration</p>
                    <p className="text-lg font-roboto text-foreground">
                      {new Date(data?.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                      <span className="mx-2 opacity-30">•</span>
                      {data?.durationNights}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-section flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-paragraph opacity-50 mb-1">Travelers</p>
                    <p className="text-lg font-roboto text-foreground">
                      {data?.adultsCount} Adults
                      {data?.adultAges?.length > 0 && (
                        <span className="text-sm block opacity-60 mt-1">
                          Ages: {data.adultAges.join(", ")}
                        </span>
                      )}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-section flex items-center justify-center shrink-0">
                    <Wallet className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-paragraph opacity-50 mb-1">Budget Preference</p>
                    <p className="text-lg font-roboto text-foreground capitalize">
                      ${data?.budgetPerPerson?.toLocaleString()} <span className="text-sm opacity-60">pp</span>
                      <span className="mx-2 opacity-30">•</span>
                      {data?.budgetFlexibility}
                    </p>
                  </div>
                </div>

                {data?.specialRequests && (
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-section flex items-center justify-center shrink-0">
                      <Heart className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-paragraph opacity-50 mb-1">Special Interests</p>
                      <p className="text-sm font-roboto text-foreground leading-relaxed italic">
                        "{data?.specialRequests}"
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-6 border-t border-gray-100 flex flex-col gap-4">
                <Button
                  onClick={() => router.push("/")}
                  className="w-full py-6 text-sm font-bold uppercase tracking-widest"
                >
                  Return to Home
                </Button>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

export default function CustomBookingSuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading confirmation...</div>}>
      <CustomSuccessContent />
    </Suspense>
  );
}

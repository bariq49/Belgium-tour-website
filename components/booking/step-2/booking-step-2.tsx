import React, { useEffect } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { Input } from "@/components/ui/Input";
import { useBookingStore } from "@/store/use-booking-store";
import { useTour } from "@/hooks/queries/use-tours";
import { useRouter } from "next/navigation";
import { Calendar, Clock, Languages, User, Mail, Hotel, MapPin, MessageSquare } from "lucide-react";
import { LANGUAGE_OPTIONS } from "@/constants/booking-constants";

import toast from "react-hot-toast";
import { useCreateBooking } from "@/hooks/queries/use-bookings";

export const BookingStep2 = () => {
  return (
    <div className="space-y-6 pb-10">
      {/* Tour Details Section */}
      <div className="bg-white p-6 md:p-8 border border-gray-100 rounded-sm shadow-sm space-y-6">
          <div className="flex flex-col md:flex-row md:items-baseline gap-4">
            <h2 className="text-3xl font-bold text-foreground font-inria">Tour Details</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <Input
              name="date"
              type="date"
              label="Select Date"
              placeholder="Pick a date"
              required
              icon={<Calendar className="w-5 h-5" />}
              className="w-full"
            />

            <Input
              name="travelersCount"
              type="counter"
              label="Number of Travelers"
              min={1}
              max={8}
              className="w-full"
            />

            <Input
              name="pickupTime"
              type="time"
              label="Hotel Pickup Time"
              placeholder="Select time"
              required
              icon={<Clock className="w-5 h-5" />}
              className="w-full"
            />

            <Input
              name="language"
              type="select"
              label="Preferred Language"
              placeholder="Select language"
              selectOptions={LANGUAGE_OPTIONS}
              required
              icon={<Languages className="w-5 h-5" />}
              className="w-full"
            />
          </div>
        </div>

        {/* Guest Information Section */}
        <div className="bg-white p-6 md:p-8 border border-gray-100 rounded-sm shadow-sm space-y-6">
          <h2 className="text-3xl font-bold text-foreground font-inria">Guest Information</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <Input
                name="fullName"
                type="text"
                label="Full Name *"
                placeholder="John Doe"
                required
                icon={<User className="w-5 h-5" />}
              />
            </div>

            <Input
              name="email"
              type="email"
              label="Email Address"
              placeholder="john@example.com"
              required
              icon={<Mail className="w-5 h-5" />}
            />

            <Input
              name="phone"
              type="phone"
              label="Phone Number"
              placeholder="+32 XXX XXX XXX"
              required
            />

            <Input
              name="hotelName"
              type="text"
              label="Hotel Name"
              placeholder="Hotel Brussels"
              required
              icon={<Hotel className="w-5 h-5" />}
            />

            <Input
              name="hotelAddress"
              type="text"
              label="Hotel Address"
              placeholder="Street, City, Postal Code"
              required
              icon={<MapPin className="w-5 h-5" />}
            />

            <div className="md:col-span-2">
              <Input
                name="specialRequests"
                type="textarea"
                label="Special Requests (Optional)"
                placeholder="e.g., Child seat required, accessibility needs, dietary restrictions..."
                rows={4}
                icon={<MessageSquare className="w-5 h-5" />}
              />
            </div>
          </div>
        </div>

    </div>
  );
};

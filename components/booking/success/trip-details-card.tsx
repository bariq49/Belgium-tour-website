import React from "react";
import { Calendar, Clock, Car, MapPin, Hotel } from "lucide-react";
import { format } from "date-fns";
import { DetailRow } from "./primitives";

interface TripDetailsCardProps {
    date?: string;
    time?: string;
    vehicleName?: string;
    hotelName?: string;
    address?: string;
}

export const TripDetailsCard = ({ date, time, vehicleName, hotelName, address }: TripDetailsCardProps) => (
    <section className="bg-white rounded-sm border border-border p-6 shadow-sm">
        <h2 className="text-lg font-bold text-gray-900 mb-5">Trip Details</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <DetailRow
                icon={<Calendar className="w-4 h-4 text-primary" />}
                label="Date"
                value={date ? format(new Date(date), "MMMM do, yyyy") : "—"}
            />
            <DetailRow
                icon={<Clock className="w-4 h-4 text-primary" />}
                label="Pickup Time"
                value={time || "—"}
            />
            <DetailRow
                icon={<MapPin className="w-4 h-4 text-primary" />}
                label="Tour Name"
                value={vehicleName || "—"}
            />
            <DetailRow
                icon={<Hotel className="w-4 h-4 text-primary" />}
                label="Hotel Name"
                value={hotelName || "—"}
            />
            <DetailRow
                icon={<MapPin className="w-4 h-4 text-primary" />}
                label="Pickup Address"
                value={address || "—"}
                valueClassName="line-clamp-2"
            />
        </div>
    </section>
);

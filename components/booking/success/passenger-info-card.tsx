import React from "react";
import { User, Mail, Phone } from "lucide-react";
import { DetailRow } from "./primitives";

interface PassengerInfoCardProps {
    fullName?: string;
    email?: string;
    phone?: string;
}

export const PassengerInfoCard = ({ fullName, email, phone }: PassengerInfoCardProps) => (
    <section className="bg-white rounded-sm border border-border p-6 shadow-sm">
        <h2 className="text-lg font-bold text-gray-900 mb-5">Passenger Information</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <DetailRow
                icon={<User className="w-4 h-4 text-primary" />}
                label="Name"
                value={fullName || "—"}
            />
            <DetailRow
                icon={<Mail className="w-4 h-4 text-primary" />}
                label="Email"
                value={email || "—"}
                valueClassName="break-all"
            />
            <DetailRow
                icon={<Phone className="w-4 h-4 text-primary" />}
                label="Phone"
                value={phone || "—"}
            />
        </div>
    </section>
);

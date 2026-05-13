import React from "react";
import { cn } from "@/lib/utils";
import { formatPrice } from "@/lib/utils";

export const DetailRow = ({
    icon,
    label,
    value,
    valueClassName,
}: {
    icon: React.ReactNode;
    label: string;
    value: React.ReactNode;
    valueClassName?: string;
}) => (
    <div className="flex items-start gap-3">
        <div className="bg-gray-100 p-2 rounded-sm flex-shrink-0">{icon}</div>
        <div className="min-w-0">
            <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">{label}</p>
            <p className={cn("font-semibold text-gray-900 text-sm", valueClassName)}>
                {value}
            </p>
        </div>
    </div>
);

export const PriceLine = ({
    label,
    value,
    muted,
}: {
    label: string;
    value?: number;
    muted?: boolean;
}) => (
    <div className="flex items-center justify-between">
        <span
            className={cn(
                "uppercase tracking-wider text-xs font-bold",
                muted ? "text-gray-500" : "text-gray-700"
            )}
        >
            {label}
        </span>
        <span className={cn("font-bold", muted ? "text-gray-600" : "text-gray-900")}>
            {formatPrice(value || 0)}
        </span>
    </div>
);

export const MetaRow = ({
    icon,
    label,
    value,
    mono,
    capitalize,
}: {
    icon: React.ReactNode;
    label: string;
    value: React.ReactNode;
    mono?: boolean;
    capitalize?: boolean;
}) => (
    <div className="flex items-start gap-2 min-w-0">
        <span className="text-amber-700 mt-0.5">{icon}</span>
        <div className="min-w-0">
            <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">{label}</p>
            <p
                className={cn(
                    "text-xs font-semibold text-gray-900 truncate",
                    mono && "font-mono",
                    capitalize && "capitalize"
                )}
            >
                {value}
            </p>
        </div>
    </div>
);

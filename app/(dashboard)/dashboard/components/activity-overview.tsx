"use client";

import React from "react";
import { TrendingUp, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";
import { formatDate, formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ActivityOverviewProps {
  stats?: {
    upcomingRides: number;
    confirmedRides: number;
    cancelledRides: number;
    totalSpent: number;
    averageRideValue: number;
  };
  security?: {
    accountCreatedAt?: string;
    lastSessionAt?: string;
    lastSessionIp?: string;
    lastSessionDevice?: string;
    lastSessionLocation?: string;
    activeSessions: number;
    status: "strong" | "review";
  };
}

const ActivityOverview = ({ stats, security }: ActivityOverviewProps) => {

  const rideStats = [
    { label: "Upcoming", value: stats?.upcomingRides ?? 0, dotColor: "bg-blue-500" },
    { label: "Confirmed", value: stats?.confirmedRides ?? 0, dotColor: "bg-orange-500" },
    { label: "Cancelled", value: stats?.cancelledRides ?? 0, dotColor: "bg-red-500" },
  ];

  const sanitizedSessionIp =
    security?.lastSessionIp && !["::1", "127.0.0.1", "localhost"].includes(security.lastSessionIp)
      ? security.lastSessionIp
      : undefined;
  const sessionSubtitle = security?.lastSessionLocation
    ? `${security.lastSessionLocation}${sanitizedSessionIp ? ` · ${sanitizedSessionIp}` : ""}`
    : sanitizedSessionIp || "Location unavailable";

  return (
    <div className="bg-white border border-border rounded-md p-6 shadow-sm flex flex-col h-full min-h-full">
      <div className="flex-1 space-y-6">
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900">Rental Overview</h2>

          <div className="space-y-3">
            {rideStats.map((stat, index) => (
              <div key={`stat-${index}`} className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className={cn("w-2.5 h-2.5 rounded-full", stat.dotColor)}></div>
                  <span className="text-sm font-medium text-slate-600">{stat.label}</span>
                </div>
                <span className="text-sm font-bold text-slate-900">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3 pt-4 border-t border-border/40">
          <div className="bg-green-50 rounded-md p-3.5 space-y-1 border border-green-100">
            <div className="flex items-center gap-2 text-xs font-bold text-green-700 uppercase tracking-wider">
              Total Spending
            </div>
            <div className="text-xl font-bold text-slate-900">{formatPrice(stats?.totalSpent ?? 0)}</div>
            <div className="flex items-center gap-1 text-xs font-bold text-green-600">
              <TrendingUp className="w-3 h-3" />
              Lifetime spending
            </div>
          </div>

          <div className="bg-blue-50 rounded-md p-3.5 space-y-1 border border-blue-100">
            <div className="flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wider">
              <BarChart3 className="w-3 h-3" />
              Average Rental Value
            </div>
            <div className="text-xl font-bold text-slate-900">{formatPrice(stats?.averageRideValue ?? 0)}</div>
          </div>
        </div>



        <div className="space-y-4 pt-4 border-t border-border/40">
          <h2 className="text-lg font-bold text-slate-900">Security & Sessions</h2>
          <div className="space-y-4">
            {[
              {
                label: "Last Session",
                value: security?.lastSessionAt ? formatDate(security.lastSessionAt) : "No session recorded",
                sub: sessionSubtitle,
                color: "text-slate-500",
              },
              {
                label: "Account Status",
                value: security?.status === "strong" ? "Strong" : "Requires Review",
                sub: security?.activeSessions 
                  ? `${security.activeSessions} active sessions` 
                  : "No active sessions",
                color: security?.status === "strong" ? "text-success" : "text-warning",
              },
              {
                label: "Primary Device",
                value: security?.lastSessionDevice
                  ? security.lastSessionDevice.split(" ").slice(0, 3).join(" ")
                  : "Unknown Device",
                sub: security?.accountCreatedAt 
                  ? `Member since ${formatDate(security.accountCreatedAt)}` 
                  : "Member since unknown",
                color: "text-slate-500",
              },
            ].map((item, index) => (
              <div key={`security-${index}`} className="flex justify-between items-start">
                <div className="space-y-0.5">
                  <p className="text-xs font-bold text-slate-900">{item.label}</p>
                  <p className="text-xs text-slate-400 font-medium">{item.sub}</p>
                </div>
                <span className={cn("text-xs font-bold", item.color)}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-6">
        <div className="p-4 bg-primary text-white rounded-md space-y-3 relative overflow-hidden">
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/10 rounded-full"></div>
          <h3 className="text-sm font-bold relative z-10">Need Help?</h3>
          <p className="text-xs text-white/80 relative z-10">Our support team is available 24/7 to assist you with your rentals.</p>
          <Button className="w-full py-2 bg-white text-primary text-xs font-bold rounded-lg hover:bg-slate-100 transition-colors relative z-10">
            <Link href="/contact-us">Contact Support</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ActivityOverview;

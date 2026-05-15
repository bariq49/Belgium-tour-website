"use client";

import { BarChart3, FileText, CheckCircle2, TrendingUp } from "lucide-react";
import { cn, formatDate } from "@/lib/utils";

interface StatsProps {
  stats?: {
    totalRides: number;
    confirmedRides: number;
    upcomingRides: number;
    nextRideDate?: string;
    lastRideDate?: string;
  };
}

const Stats = ({ stats }: StatsProps) => {

  const cards = [
    {
      text: "Total Bookings",
      total: String(stats?.totalRides ?? 0),
      trend: "Total lifetime bookings",
      icon: <FileText className="w-5 h-5 text-warning" />,
      color: "warning",
      bg: "bg-warning/10",
    },
    {
      text: "Confirmed",
      total: String(stats?.confirmedRides ?? 0),
      trend: "Confirmed reservations",
      icon: <CheckCircle2 className="w-5 h-5 text-success" />,
      color: "success",
      bg: "bg-success/10",
    },
    {
      text: "Upcoming",
      total: String(stats?.upcomingRides ?? 0),
      trend: stats?.nextRideDate ? `Next ride: ${formatDate(stats.nextRideDate)}` : "No upcoming rides",
      icon: <TrendingUp className="w-5 h-5 text-blue-500" />,
      color: "info",
      bg: "bg-blue-50",
    },
  ];

  return (
    <>
      {cards.map((item, index) => (
        <div
          key={`reports-state-${index}`}
          className="flex flex-col justify-between p-6 rounded-md bg-white border border-border shadow-sm relative overflow-hidden"
        >
          <div className="flex justify-between items-start">
            <span className="text-base font-semibold capitalize">
              {item.text}
            </span>
            <div className={cn("w-10 h-10 rounded-full flex items-center justify-center", item.bg)}>
              {item.icon}
            </div>
          </div>

          <div>
            <div className="text-3xl font-bold text-primary">
              {item.total}
            </div>
            <div className={cn("flex items-center gap-1.5 text-base mt-2 font-medium", {
              "text-warning": item.color === "warning",
              "text-success": item.color === "success",
              "text-slate-500": item.color === "info",
            })}>
              {item.color !== "info" && <TrendingUp className="w-3.5 h-3.5" />}
              <span>{item.trend}</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Stats;

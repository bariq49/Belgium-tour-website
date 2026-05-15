"use client";

import React from "react";
import { Car, FileText, Users, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

const QuickActions = () => {

  const actions = [
    {
      title: "Book Rental",
      subTitle: "Reserve a golf cart",
      icon: <Car className="w-5 h-5 text-white" />,
      bg: "bg-secondary shadow-[0_4px_12px_rgba(249,178,51,0.3)]",
    },
    {
      title: "Statements",
      subTitle: "View payment history",
      icon: <FileText className="w-5 h-5 text-white" />,
      bg: "bg-primary shadow-[0_4px_12px_rgba(0,0,0,0.15)]",
    },
    {
      title: "Members",
      subTitle: "Manage passengers",
      icon: <Users className="w-5 h-5 text-white" />,
      bg: "bg-primary shadow-[0_4px_12px_rgba(0,0,0,0.15)]",
    },
    {
      title: "Settings",
      subTitle: "Account preferences",
      icon: <Settings className="w-5 h-5 text-white" />,
      bg: "bg-primary shadow-[0_4px_12px_rgba(0,0,0,0.15)]",
    },
  ];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {actions.map((item, index) => (
          <div
            key={`quick-action-${index}`}
            className="flex items-center gap-4 p-4 bg-white border border-border shadow-sm rounded-md cursor-pointer hover:border-secondary/50 transition-all group"
          >
            <div
              className={cn(
                "w-12 h-12 shrink-0 rounded-md flex items-center justify-center transition-transform group-hover:scale-105",
                item.bg
              )}
            >
              {item.icon}
            </div>
            <div className="min-w-0">
              <h3 className="text-sm font-bold text-primary truncate">
                {item.title}
              </h3>
              <p className="text-sm text-primary/70 truncate mt-0.5">
                {item.subTitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;

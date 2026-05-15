"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import type { MenuItemProps } from "@/config/menus";

interface SingleMenuItemProps {
  item: MenuItemProps;
  collapsed: boolean;
  isActive: boolean;
}

const SingleMenuItem = ({ item, collapsed, isActive }: SingleMenuItemProps) => {
  const { badge, href, title } = item;
  const Icon = item.icon;

  const translatedTitle = title;

  // If no href, render as a div instead of Link
  if (!href) {
    return (
      <div
        className={cn(
          "flex gap-3 text-default-700 text-sm capitalize px-[10px] py-3 rounded cursor-pointer hover:bg-primary hover:text-white transition-all duration-200",
          {
            "bg-primary text-white": isActive,
          }
        )}
      >
        <span className="flex-grow-0">{Icon && <Icon className="w-5 h-5" />}</span>
        {!collapsed && <div className="text-box flex-grow ">{translatedTitle}</div>}
        {badge && !collapsed && <Badge className=" rounded">{item.badge}</Badge>}
      </div>
    );
  }

  const content = (
    <div
      className={cn(
        "flex items-center gap-3 text-default-700 text-sm capitalize px-[10px] font-medium py-3 rounded cursor-pointer hover:bg-primary hover:text-white transition-all duration-200",
        {
          "bg-primary text-white": isActive && !collapsed,
          "justify-center px-0": collapsed,
        }
      )}
    >
      <span className={cn("flex-grow-0", {
        "h-12 w-12 flex items-center justify-center rounded-md transition-all duration-300": collapsed,
        "bg-primary text-white": collapsed && isActive,
        "text-default-600 hover:bg-primary-100 hover:text-primary": collapsed && !isActive,
      })}>
        {Icon && <Icon className={cn(collapsed ? "w-6 h-6" : "w-5 h-5")} />}
      </span>
      {!collapsed && <div className="text-box flex-grow ">{translatedTitle}</div>}
      {badge && !collapsed && <Badge className=" rounded">{item.badge}</Badge>}
    </div>
  );

  return (
    <Link href={href}>
      {collapsed ? (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              {content}
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
              {translatedTitle}
              <TooltipArrow className="fill-primary" />
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ) : (
        content
      )}
    </Link>
  );
};

export default SingleMenuItem;

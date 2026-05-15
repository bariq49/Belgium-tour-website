"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import type { MenuItemProps } from "@/config/menus";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface MultiMenuItemProps {
  item: MenuItemProps;
  collapsed: boolean;
  isActive: boolean;
  activeChildIndex: number;
}

const MultiMenuItem = ({ item, collapsed, isActive, activeChildIndex }: MultiMenuItemProps) => {
  const { child, icon: Icon, title } = item;
  const [isOpen, setIsOpen] = React.useState(isActive);

  // Synchronize isOpen with isActive when it changes
  React.useEffect(() => {
    if (isActive) {
      setIsOpen(true);
    }
  }, [isActive]);

  if (collapsed) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className={cn(
              "flex h-12 w-12 mx-auto items-center justify-center rounded-md transition-all duration-200 cursor-pointer",
              isActive ? "bg-primary text-white" : "text-default-600 hover:bg-primary-100 hover:text-primary"
            )}>
              {Icon && <Icon className="w-6 h-6" />}
            </div>
          </TooltipTrigger>
          <TooltipContent side="right" sideOffset={5}>
            {title}
            <TooltipArrow className="fill-primary" />
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  return (
    <div className="w-full">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center gap-3 text-default-700 text-sm font-medium px-[10px] py-3 rounded cursor-pointer hover:bg-primary hover:text-white transition-all duration-200",
          {
            "bg-primary text-white": isActive,
          }
        )}
      >
        <span className="flex-grow-0">{Icon && <Icon className="w-5 h-5" />}</span>
        <div className="text-box flex-grow">{title}</div>
        <ChevronDown
          className={cn("h-4 w-4 transition-transform duration-200", {
            "rotate-180": isOpen,
          })}
        />
      </div>

      {isOpen && (
        <div className="mt-1 space-y-1 px-4 animate-in slide-in-from-top-1 duration-200">
          {child?.map((subItem, index) => (
            <Link key={index} href={subItem.href || "#"}>
              <div
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded text-sm text-default-600 hover:bg-primary-100 hover:text-primary transition-colors",
                  {
                    "bg-primary-100 text-primary font-medium": activeChildIndex === index,
                  }
                )}
              >
                <div className="h-1.5 w-1.5 rounded-full bg-current" />
                <span className="truncate">{subItem.title}</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiMenuItem;

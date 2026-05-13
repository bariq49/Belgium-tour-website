import React from "react";
import { cn } from "@/lib/utils";

interface TabItem {
  id: string;
  label: string;
}

interface TabsProps {
  items: TabItem[];
  activeId: string;
  onChange: (id: string) => void;
  className?: string;
  tabClassName?: string;
  activeTabClassName?: string;
}

export const Tabs = ({
  items,
  activeId,
  onChange,
  className,
  tabClassName,
  activeTabClassName,
}: TabsProps) => {
  return (
    <div className={cn("flex flex-wrap justify-center gap-4 md:gap-8 border-b border-gray-200", className)}>
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => onChange(item.id)}
          className={cn(
            "pb-4 text-xs md:text-sm font-bold tracking-widest transition-all relative cursor-pointer",
            tabClassName,
            activeId === item.id
              ? cn("text-foreground", activeTabClassName)
              : "text-paragraph opacity-50 hover:opacity-100"
          )}
        >
          {item.label}
          {activeId === item.id && (
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary animate-in fade-in duration-300 cursor-pointer" />
          )}
        </button>
      ))}
    </div>
  );
};

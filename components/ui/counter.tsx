"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface CounterProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  className?: string;
}

export const Counter: React.FC<CounterProps> = ({
  value,
  onChange,
  min = 0,
  max = 999,
  step = 1,
  disabled = false,
  className,
}) => {
  const resolvedMin = min;
  const resolvedMax = max;
  const parsedValue = Number(value);
  const currentValue = Number.isNaN(parsedValue)
    ? resolvedMin
    : Math.min(resolvedMax, Math.max(resolvedMin, parsedValue));

  return (
    <div className={cn(
      "flex h-[52px] items-center justify-between border border-border bg-white px-2 overflow-hidden transition-colors rounded-sm",
      className
    )}>
      <button
        type="button"
        onClick={() => onChange(Math.max(resolvedMin, currentValue - step))}
        disabled={disabled || currentValue <= resolvedMin}
        className="h-7 w-7 flex items-center justify-center rounded-full bg-muted text-white text-lg font-bold hover:opacity-80 disabled:opacity-30 disabled:cursor-not-allowed transition-all focus:outline-none cursor-pointer"
        aria-label="Decrease quantity"
      >
        -
      </button>

      <span className="flex-1 flex items-center justify-center text-base font-bold text-primary tabular-nums">
        {currentValue}
      </span>

      <button
        type="button"
        onClick={() => onChange(Math.min(resolvedMax, currentValue + step))}
        disabled={disabled || currentValue >= resolvedMax}
        className="h-7 w-7 flex items-center justify-center rounded-full bg-muted text-white text-lg font-bold hover:opacity-80 disabled:opacity-30 disabled:cursor-not-allowed transition-all focus:outline-none cursor-pointer"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
};

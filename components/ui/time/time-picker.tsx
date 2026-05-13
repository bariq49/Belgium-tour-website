"use client";

import { useState, useEffect, useCallback } from "react";
import { Clock } from "lucide-react";
import { toZonedTime } from "date-fns-tz";
import { format } from "date-fns";
import { DEFAULT_TIMEZONE } from "@/constants/app-default";
import TimeColumn from "./time-column";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TimePickerProps {
  value?: string;
  onChange: (val: string) => void;
  label?: string;
  disabled?: boolean;
  placeholder?: string;
  error?: boolean;
  timezone?: string;
  className?: string;
  customTrigger?: (value: string) => React.ReactNode;
}

const HOUR_VALUES = [9, 10, 11, 12, 13, 14, 15, 16, 17];
const MINUTE_VALUES = [0, 15, 30, 45];

const HOUR_LABELS: Record<number, string> = {
  9: "9 AM",
  10: "10 AM",
  11: "11 AM",
  12: "12 PM",
  13: "1 PM",
  14: "2 PM",
  15: "3 PM",
  16: "4 PM",
  17: "5 PM",
};

function formatDisplayTime(h: number, m: number): string {
  const label = HOUR_LABELS[h];
  if (!label) return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`;
  return `${label.replace(/ (AM|PM)/, "")}:${m.toString().padStart(2, "0")} ${label.includes("AM") ? "AM" : "PM"}`;
}

export default function TimePicker({
  value,
  onChange,
  label,
  disabled,
  placeholder = "Select time",
  error,
  timezone = DEFAULT_TIMEZONE,
  className,
  customTrigger,
}: TimePickerProps) {
  const [open, setOpen] = useState(false);

  const getInitialTime = useCallback(() => {
    const zoned = toZonedTime(new Date(), timezone);
    let h = parseInt(format(zoned, "H"), 10);
    const rawM = parseInt(format(zoned, "mm"), 10);
    // Clamp hour to valid range
    if (h < 9) h = 9;
    if (h > 17) h = 17;
    // Snap minute to nearest valid interval
    const m = MINUTE_VALUES.reduce((prev, curr) =>
      Math.abs(curr - rawM) < Math.abs(prev - rawM) ? curr : prev
    );
    return { h, m };
  }, [timezone]);

  // Initialize state based on value or current time
  const [hour, setHour] = useState<number | null>(null);
  const [minute, setMinute] = useState<number | null>(null);

  useEffect(() => {
    if (!value) {
      const initial = getInitialTime();
      setHour(initial.h);
      setMinute(initial.m);
      return;
    }

    const match = value.match(/^(\d{1,2}):(\d{2})$/);
    if (match) {
      setHour(parseInt(match[1], 10));
      setMinute(parseInt(match[2], 10));
    }
  }, [value, timezone, getInitialTime]);

  useEffect(() => {
    if (open && hour !== null && minute !== null) {
      const formatted = `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`;
      if (formatted !== value) {
        onChange(formatted);
      }
    }
  }, [hour, minute, open, onChange, value]);

  const displayVal = (hour !== null && minute !== null && value)
    ? formatDisplayTime(hour, minute)
    : placeholder;

  return (
    <div className="relative w-full">
      {label && (
        <label className="block text-sm mb-1.5 font-medium text-gray-700">
          {label}
        </label>
      )}

      {customTrigger ? (
        <div onClick={() => !disabled && setOpen((prev) => !prev)}>
          {customTrigger(displayVal)}
        </div>
      ) : (
        <div
          className={cn(
            "border rounded-sm px-4 h-[52px] flex items-center justify-between gap-2 transition cursor-pointer bg-white text-foreground",
            error ? "border-error border bg-error/5" : "border-border",
            disabled && "opacity-50 cursor-not-allowed bg-gray-50",
            className
          )}
          onClick={() => {
            if (!disabled) setOpen((prev) => !prev);
          }}
        >
          <span
            className={cn(
              "truncate text-sm md:text-base",
              !value && "text-gray-400 font-normal"
            )}
          >
            {displayVal}
          </span>
          <Clock size={16} className={cn("shrink-0", error ? "text-red-500" : "text-gray-400")} />
        </div>
      )}

      {open && (
        <>
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-40 transition-opacity"
            onClick={() => setOpen(false)}
          />
          <div className="fixed sm:absolute z-50 bottom-0 inset-x-0 sm:inset-auto sm:top-full sm:mt-2 w-full sm:w-64 bg-white rounded-t-xl sm:rounded-md border border-border shadow-2xl overflow-hidden sm:left-1/2 sm:-translate-x-1/2 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className='p-4'>
              <div className="grid grid-cols-2 gap-4">
                <TimeColumn
                  label="Hour"
                  values={HOUR_VALUES}
                  selected={hour}
                  onSelect={setHour}
                  displayLabels={HOUR_LABELS}
                />

                <TimeColumn
                  label="Minute"
                  values={MINUTE_VALUES}
                  selected={minute}
                  onSelect={setMinute}
                />
              </div>

              <Button
                type="button"
                onClick={() => setOpen(false)}
                disabled={hour === null || minute === null}
                className={`mt-2 w-full py-4 sm:py-2 rounded-md text-sm font-bold transition ${hour === null || minute === null
                  ? "bg-slate-100 text-slate-400 cursor-not-allowed"
                  : "bg-primary text-white hover:bg-primary/90"
                  }`}
              >
                Done
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
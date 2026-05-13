"use client";

import { useState, useMemo, useCallback } from "react";
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  eachDayOfInterval,
  getDay,
  isSameDay,
  isBefore,
  startOfDay,
  isSameMonth,
  parse,
} from "date-fns";
import { toZonedTime, formatInTimeZone } from "date-fns-tz";
import { ChevronRight, Calendar, X } from "lucide-react";
import { DEFAULT_TIMEZONE } from "@/constants/app-default";
import { cn } from "@/lib/utils";

interface DatePickerProps {
  value?: string; // yyyy-MM-dd
  onChange: (value: string) => void;
  placeholder?: string;
  minSelectableDate?: Date | null;
  excludeDate?: Date | null;
  timezone?: string;
  disabled?: boolean;
  label?: string;
  error?: boolean;
  className?: string;
  customTrigger?: (value: string) => React.ReactNode;
}

export default function DatePicker({
  value,
  onChange,
  placeholder = "Select date",
  minSelectableDate,
  excludeDate,
  timezone = DEFAULT_TIMEZONE,
  disabled,
  label,
  error,
  className,
  customTrigger,
}: DatePickerProps) {
  const [open, setOpen] = useState(false);

  const toDateKey = useCallback((date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }, []);

  // Today key in target timezone (yyyy-MM-dd) to avoid Date shift issues.
  const todayKey = useMemo(
    () => formatInTimeZone(new Date(), timezone, "yyyy-MM-dd"),
    [timezone]
  );
  const todayZoned = useMemo(() => startOfDay(toZonedTime(new Date(), timezone)), [timezone]);

  const [currentMonth, setCurrentMonth] = useState(() =>
    startOfMonth(toZonedTime(new Date(), timezone))
  );

  const selectedDate = useMemo(() => {
    if (!value) return null;
    try {
      return parse(value, "yyyy-MM-dd", new Date());
    } catch {
      return null;
    }
  }, [value]);

  const displayValue = useMemo(() => {
    if (!selectedDate) return placeholder;
    return format(selectedDate, "dd MMM yyyy");
  }, [selectedDate, placeholder]);

  const calendarDays = useMemo(() => {
    const startMonth = startOfMonth(currentMonth);
    // Adjust for Monday start: (getDay + 6) % 7
    const startDayOffset = (getDay(startMonth) + 6) % 7;

    const startDate = new Date(startMonth);
    startDate.setDate(startMonth.getDate() - startDayOffset);

    return eachDayOfInterval({
      start: startDate,
      end: new Date(startDate.getTime() + 41 * 86400000),
    });
  }, [currentMonth]);

  const checkIsDisabled = useCallback((date: Date) => {
    // Calendar cell dates are logical day cells; use their local day parts directly.
    const dateKey = toDateKey(date);

    if (dateKey < todayKey) return true;

    if (minSelectableDate) {
      const minKey = toDateKey(minSelectableDate);
      if (dateKey < minKey) return true;
    }

    if (excludeDate) {
      const excludeKey = toDateKey(excludeDate);
      if (dateKey === excludeKey) return true;
    }

    return false;
  }, [todayKey, minSelectableDate, excludeDate, toDateKey]);

  const handleSelect = (date: Date) => {
    // Persist selected calendar day exactly as clicked.
    onChange(toDateKey(date));
    setOpen(false);
  };

  return (
    <div className="relative w-full">
      {label && (
        <label className="block text-sm mb-1.5 font-medium text-gray-700">
          {label}
        </label>
      )}

      {customTrigger ? (
        <div onClick={() => !disabled && setOpen((prev) => !prev)}>
          {customTrigger(displayValue)}
        </div>
      ) : (
        <div
          className={cn(
            "border rounded-sm px-4 h-[52px] flex items-center justify-between gap-2 transition cursor-pointer bg-white text-foreground",
            error ? "border-error bg-error/5" : "border-border",
            disabled && "opacity-50 cursor-not-allowed bg-gray-50",
            className
          )}
          onClick={() => {
            if (!disabled) setOpen((prev) => !prev);
          }}
        >
          <span className={cn(
            "truncate text-sm md:text-base",
            !value && "text-gray-400 font-normal"
          )}>
            {displayValue}
          </span>
          <Calendar size={16} className={cn("shrink-0", error ? "text-error" : "text-gray-400")} />
        </div>
      )}

      {open && (
        <>
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-40 transition-opacity"
            onClick={() => setOpen(false)}
          />
          <div className="fixed sm:absolute z-50 bottom-0 inset-x-0 sm:inset-auto sm:top-full sm:mt-2 w-full sm:w-[340px] bg-white rounded-t-2xl sm:rounded-xl shadow-2xl border border-border overflow-hidden sm:left-0 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className='p-5'>
              <div className="flex justify-between items-center mb-5">
                <button
                  type="button"
                  disabled={isSameMonth(currentMonth, todayZoned)}
                  onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
                  className='p-2 hover:bg-gray-100 rounded-full transition-colors disabled:opacity-20 disabled:pointer-events-none'
                >
                  <ChevronRight size={18} className="rotate-180 text-gray-600" />
                </button>

                <h3 className="font-bold text-gray-900 text-sm">
                  {format(currentMonth, "MMMM yyyy")}
                </h3>

                <button
                  type="button"
                  onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
                  className='p-2 hover:bg-gray-100 rounded-full transition-colors'
                >
                  <ChevronRight size={18} className="text-gray-600" />
                </button>
              </div>

              <div className="grid grid-cols-7 text-[10px] text-center mb-3 font-bold text-gray-400 uppercase tracking-widest">
                {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((d) => (
                  <div key={d}>{d}</div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-1 text-sm">
                {calendarDays.map((date, i) => {
                  const inactive = !isSameMonth(date, currentMonth);
                  const disabledDay = checkIsDisabled(date);
                  const selected = selectedDate && isSameDay(date, selectedDate);

                  return (
                    <button
                      key={i}
                      type="button"
                      disabled={disabledDay}
                      onClick={() => handleSelect(date)}
                      className={`relative text-center py-2.5 rounded-lg transition-all focus:outline-none
                        ${disabledDay ? "text-gray-200 cursor-not-allowed" : "cursor-pointer"}
                        ${inactive && !disabledDay ? "text-gray-500" : ""}
                        ${!inactive && !disabledDay ? "font-semibold text-gray-700" : ""}
                        ${selected
                          ? "bg-primary text-white shadow-lg font-bold"
                          : !disabledDay ? "hover:bg-gray-100" : ""
                        }
                      `}
                    >
                      {date.getDate()}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
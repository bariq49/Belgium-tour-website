import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { format } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string | Date | number, formatStr: string = "PPP p"): string {
  if (!date) return "—";
  try {
    const d = typeof date === "string" ? new Date(date) : date;
    return format(d, formatStr);
  } catch (error) {
    console.error("Error formatting date:", error);
    return "—";
  }
}

export function formatPrice(price: number | string, currency: string = "EUR"): string {
  const amount = typeof price === "string" ? parseFloat(price) : price;
  if (isNaN(amount)) return "—";

  return new Intl.NumberFormat("en-EU", {
    style: "currency",
    currency: currency,
  }).format(amount);
}

export function getInitials(name: string, fallback: string = "AU"): string {
  if (!name) return fallback;
  const words = name.trim().split(/\s+/);
  if (words.length === 0) return fallback;
  if (words.length === 1) return words[0].substring(0, 2).toUpperCase();
  return (words[0][0] + words[words.length - 1][0]).toUpperCase();
}

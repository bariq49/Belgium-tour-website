import {
  LayoutDashboard,
  CalendarDays,
  CreditCard,
  FileText,
  User,
  Car,
  Settings,
} from "lucide-react";
import React from "react";

export interface MenuItemProps {
  title: string;
  icon?: React.ElementType;
  href?: string;
  badge?: string;
  isHeader?: boolean;
  child?: MenuItemProps[];
}

export const menus: MenuItemProps[] = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    title: "Fleets",
    icon: Car,
    href: "/fleets",
  },
  {
    title: "Bookings",
    icon: CalendarDays,
    href: "/bookings",
  },
  {
    title: "Payments",
    icon: CreditCard,
    href: "/payments",
  },
  {
    title: "Pricing",
    icon: CreditCard,
    child: [],
  },
  {
    title: "Settings",
    icon: Settings,
    child: [
      {
        title: "Profile Settings",
        href: "/settings/profile",
      },
      {
        title: "Booking Settings",
        href: "/settings/booking",
      },
    ],
  },
];

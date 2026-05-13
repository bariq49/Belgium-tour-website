import { Briefcase, Plane, UserCheck, MapPin, Clock, Truck, Navigation } from "lucide-react";

export interface NavLink {
  title: string;
  path?: string;
  sublinks?: { title: string; path: string; icon?: React.ComponentType<{ className?: string }> }[];
}

export const NAV_LINKS: NavLink[] = [
  { title: "Home", path: "/" },
  { title: "Tours", path: "/tours" },
  { title: "Custom Tours", path: "/custom-tours" },
  { title: "Partners", path: "/partners" },
  { title: "Contact", path: "/contact" },
];

export function isNavActive(pathname: string | null, link: NavLink): boolean {
  if (!pathname) return false;
  if (link.path && pathname === link.path) return true;
  return link.sublinks?.some((sub) => pathname.startsWith(sub.path)) ?? false;
}
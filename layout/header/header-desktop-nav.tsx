"use client";

import { forwardRef } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import { NAV_LINKS, isNavActive } from "./header-constants";

interface HeaderDesktopNavProps {
  pathname: string | null;
  openDropdownId: string | null;
  onDropdownOpen: (id: string) => void;
  onDropdownClose: () => void;
}

export const HeaderDesktopNav = forwardRef<HTMLElement, HeaderDesktopNavProps>(
  ({ pathname }, ref) => {
    return (
      <nav ref={ref} className="hidden items-center gap-4 xl:flex" role="menubar">
        {NAV_LINKS.map((link) => {
          const active = isNavActive(pathname, link);
          const title = link.title;

          return (
            <Link
              key={link.title}
              href={link.path || "#"}
              role="menuitem"
              className={`group relative py-1.5 text-base font-semibold transition-all duration-300 hover:text-primary ${active ? "text-primary" : "text-gray-600"
                }`}
            >
              {title}
              <span
                className={`absolute -bottom-1 left-0 h-[2px] bg-primary transition-all duration-300 ease-out origin-left ${active ? "w-full" : "w-0 group-hover:w-full"}`}
              />
            </Link>
          );
        })}
      </nav>
    );
  }
);

HeaderDesktopNav.displayName = "HeaderDesktopNav";

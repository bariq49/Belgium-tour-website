"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useHeaderMenu } from "./use-header-menu";
import { HeaderDesktopNav } from "./header-desktop-nav";
import { Logo } from "./logo";
import { Menu } from "lucide-react";
import MobileHeader from "./mobile-header";
import { COMPANY_PHONE, COMPANY_PHONE_HREF } from "@/constants/app-default";

export default function Header() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);

  const {
    openDropdownId,
    openDropdown,
    scheduleCloseDropdown,
    desktopNavRef,
  } = useHeaderMenu(pathname);

  return (
    <>
      <header
        className="sticky top-0 z-[70] bg-white w-full border-b border-border transition-all duration-300"
        role="banner"
      >
        <div className="mx-auto container px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <Logo variant="dark" />

            {/* Desktop Nav */}
            <div className="flex items-center gap-8">
              <HeaderDesktopNav
                ref={desktopNavRef}
                pathname={pathname}
                openDropdownId={openDropdownId}
                onDropdownOpen={openDropdown}
                onDropdownClose={scheduleCloseDropdown}
              />

              <div className="hidden lg:flex items-center gap-8">
                {/* Phone Number */}
                <Link
                  href={COMPANY_PHONE_HREF}
                  className="text-primary font-medium transition-colors hover:opacity-80"
                >
                  {COMPANY_PHONE}
                </Link>

                {/* Book Now Button (Desktop) */}
                <Link
                  href="/"
                  className="bg-black text-white px-6 py-3 font-roboto text-sm font-medium transition-all hover:bg-black/90"
                >
                  Design My Dream Trip
                </Link>
              </div>

              {/* Mobile Toggle */}
              <button
                onClick={() => setIsMobileOpen(true)}
                className="flex items-center justify-center rounded-md p-2 text-black hover:bg-black/5 md:hidden"
              >
                <Menu className="h-7 w-7" />
              </button>
            </div>
          </div>
        </div>
      </header>


      {/* Mobile Menu */}
      <MobileHeader
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
      />
    </>
  );
}

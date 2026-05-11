"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { NAV_LINKS, isNavActive } from "./header-constants";
import Link from "next/link";
import { X, ChevronDown } from "lucide-react";
import { Logo } from "./logo";

interface MobileHeaderProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileHeader = ({ isOpen, onClose }: MobileHeaderProps) => {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close sidebar on route change
  React.useEffect(() => {
    onClose();
  }, [pathname]);

  const toggleDropdown = (title: string) => {
    setOpenDropdown(openDropdown === title ? null : title);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-[101] w-[min(320px,90vw)] bg-white shadow-2xl transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-100 px-4 py-4">
            <Logo variant="dark" />
            <button
              onClick={onClose}
              className="rounded-full p-2 text-gray-500 hover:bg-gray-100"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Nav Links */}
          <nav className="flex-1 overflow-y-auto px-2 py-6">
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => {
                const active = isNavActive(pathname, link);
                const hasSublinks = link.sublinks && link.sublinks.length > 0;
                const isDropdownOpen = openDropdown === link.title;

                return (
                  <li key={link.title} className="flex flex-col">
                    {hasSublinks ? (
                      <>
                        <button
                          onClick={() => toggleDropdown(link.title)}
                          className={`flex items-center justify-between rounded-md px-4 py-3 text-lg font-bold transition-colors ${active || isDropdownOpen ? "bg-primary/10 text-primary" : "text-gray-700 hover:bg-gray-50"
                            }`}
                        >
                          <span>{link.title}</span>
                          <ChevronDown
                            className={`h-5 w-5 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
                          />
                        </button>
                        {isDropdownOpen && (
                          <ul className="mt-1 space-y-1 pl-4">
                            {link.sublinks?.map((sub) => (
                              <li key={sub.path}>
                                <Link
                                  href={sub.path}
                                  className={`block rounded-md px-4 py-2 text-base font-semibold transition-colors ${pathname === sub.path ? "text-primary" : "text-gray-500 hover:text-primary"
                                    }`}
                                >
                                  {sub.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    ) : (
                      <Link
                        href={link.path || "#"}
                        className={`rounded-md px-4 py-3 text-lg font-semibold transition-colors ${active ? "bg-primary/10 text-primary" : "text-gray-700 hover:bg-gray-50"
                          }`}
                      >
                        {link.title}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Footer */}
          <div className="border-t border-gray-100 p-6">
            <Link
              href="/"
              onClick={onClose}
              className="flex w-full items-center justify-center bg-black py-4 text-center text-sm font-medium text-white transition-all hover:bg-black/90"
            >
              Design My Dream Trip
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileHeader;

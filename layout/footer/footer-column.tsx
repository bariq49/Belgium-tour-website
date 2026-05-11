import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <Link 
      href={href} 
      className="group flex items-center gap-1 transition-colors text-white/70 hover:text-white"
    >
      <ChevronRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1 text-primary" />
      <span>{children}</span>
    </Link>
  </li>
);

const FooterColumn = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="flex flex-col space-y-4">
    <h4 className="text-lg font-bold text-white font-inria">{title}</h4>
    <ul className="flex flex-col space-y-2 text-sm text-white/60">
      {children}
    </ul>
  </div>
);

export { FooterColumn, FooterLink };

import React from "react";
import Link from "next/link";

const FooterBottomBar = () => (
  <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-border pt-8 md:flex-row">
    <p className="text-sm text-white/40">
      © {new Date().getFullYear()} Belgium Private Tours. All rights reserved.
    </p>
    <div className="flex items-center gap-8 text-sm text-white/40">
      <span>
        Developed by{" "}
        <Link href="https://www.thedevsquare.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
          The Dev Square
        </Link>
      </span>
    </div>
  </div>
);

export default FooterBottomBar;

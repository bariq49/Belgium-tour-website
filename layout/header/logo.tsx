import Link from "next/link";
import Image from "next/image";

import { IMAGES } from "@/constants/image-constants";

type LogoVariant = "dark" | "white";

interface LogoProps {
  variant?: LogoVariant;
  className?: string;
}

const LOGO_SRC_BY_VARIANT: Record<LogoVariant, string> = {
  dark: IMAGES.logos.dark,
  white: IMAGES.logos.white,
};

export function Logo({ variant = "white", className }: LogoProps) {
  return (
    <Link
      href="/"
      className={`relative flex items-center ${className || ""}`}
    >
      <Image
        src={LOGO_SRC_BY_VARIANT[variant]}
        alt="Belgium Tour"
        width={220}
        height={70}
        priority
        className="h-10 w-auto md:h-12 lg:h-14 object-contain"
      />
    </Link>
  );
}
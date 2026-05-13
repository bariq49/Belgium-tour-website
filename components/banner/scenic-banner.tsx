import React from "react";
import Image from "next/image";
import { IMAGES } from "@/constants/image-constants";

export const ScenicBanner = () => {
  return (
    <div className="relative w-full h-[300px] md:h-[400px]">
      <Image
        src={IMAGES.home.scenicBanner}
        alt="Brussels Panorama"
        fill
        className="object-cover object-top"
        priority
      />
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
};

"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const images = [
  "/assets/images/banner/about-1.png",
  "/assets/images/banner/about-2.png",
  "/assets/images/banner/about-3.png",
  "/assets/images/banner/home.banner.png",
  "/assets/images/banner/about-1.png",
];

export const TourGallery = () => {
  const [activeImage, setActiveImage] = React.useState(images[0]);

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-section">
        <Image
          src={activeImage}
          alt="Tour Gallery"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-5 gap-2 md:gap-4">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setActiveImage(img)}
            className={cn(
              "relative aspect-[4/3] overflow-hidden border-2 transition-all",
              activeImage === img ? "border-primary" : "border-transparent opacity-70 hover:opacity-100"
            )}
          >
            <Image
              src={img}
              alt={`Thumbnail ${idx + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

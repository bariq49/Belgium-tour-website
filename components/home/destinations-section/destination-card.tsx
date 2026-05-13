"use client";

import Image from "next/image";
import type { Destination } from "./destinations-data";

export function DestinationCard({ dest }: { dest: Destination }) {
  return (
    <article className="relative group h-[460px] w-full cursor-pointer overflow-hidden border border-gray-200/90 bg-white shadow-md ring-1 ring-black/[0.04] transition-shadow duration-300 hover:shadow-xl sm:h-[500px] lg:h-[600px]">
      <Image
        src={dest.image}
        alt={dest.name}
        fill
        sizes="(max-width: 1023px) 85vw, (max-width: 1280px) 20vw, 18vw"
        className="object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-110"
      />
      <div className="pointer-events-none absolute inset-0 bg-black/60 transition-colors duration-500 ease-in-out group-hover:bg-black/50" />
      <div className="absolute inset-x-0 bottom-0 p-6 text-white">
        <h3 className="text-lg font-bold tracking-wider uppercase transition-transform duration-500 ease-out group-hover:-translate-y-0.5">
          {dest.name}
        </h3>
        <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out group-hover:grid-rows-[1fr]">
          <div className="min-h-0 overflow-hidden">
            <p className="pt-2 text-sm leading-relaxed text-white/90 translate-y-2 opacity-0 transition-[opacity,transform] duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
              {dest.description}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

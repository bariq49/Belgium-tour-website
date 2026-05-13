import { IMAGES } from "@/constants/image-constants";

/**
 * Symmetric “mountain” heights: outer cards shorter, centre tallest (matches reference layout).
 */
export const designJourneySlides = [
  {
    id: "namur",
    alt: "Namur citadel and Meuse valley",
    src: IMAGES.home.designJourney.namurCitadel,
    heightFan:
      "h-[260px] min-h-[260px] sm:h-[280px] sm:min-h-[280px] md:h-[300px] md:min-h-[300px] lg:h-[320px] lg:min-h-[320px]",
    zIndex: "z-[1]",
  },
  {
    id: "bruges-belfry",
    alt: "Bruges medieval towers and canals",
    src: IMAGES.home.designJourney.brugesBelfry,
    heightFan:
      "h-[300px] min-h-[300px] sm:h-[330px] sm:min-h-[330px] md:h-[360px] md:min-h-[360px] lg:h-[380px] lg:min-h-[380px]",
    zIndex: "z-[2]",
  },
  {
    id: "gravensteen",
    alt: "Ghent Gravensteen castle",
    src: IMAGES.home.designJourney.gravensteen,
    heightFan:
      "h-[340px] min-h-[340px] sm:h-[380px] sm:min-h-[380px] md:h-[420px] md:min-h-[420px] lg:h-[440px] lg:min-h-[440px]",
    zIndex: "z-[3]",
  },
  {
    id: "antwerp-station",
    alt: "Antwerp central station architecture",
    src: IMAGES.home.designJourney.antwerpStation,
    heightFan:
      "h-[300px] min-h-[300px] sm:h-[330px] sm:min-h-[330px] md:h-[360px] md:min-h-[360px] lg:h-[380px] lg:min-h-[380px]",
    zIndex: "z-[2]",
  },
  {
    id: "brussels-skyline",
    alt: "Brussels skyline at dusk",
    src: IMAGES.home.designJourney.brusselsSkyline,
    heightFan:
      "h-[260px] min-h-[260px] sm:h-[280px] sm:min-h-[280px] md:h-[300px] md:min-h-[300px] lg:h-[320px] lg:min-h-[320px]",
    zIndex: "z-[1]",
  },
] as const;

export type DesignJourneySlide = (typeof designJourneySlides)[number];

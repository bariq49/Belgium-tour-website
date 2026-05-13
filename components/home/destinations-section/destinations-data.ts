import { IMAGES } from "@/constants/image-constants";

export const destinations = [
  {
    name: "BRUGES PRIVATE TOUR",
    description:
      "Discover the medieval charm of Bruges with its canals, cobblestone streets, and Gothic architecture.",
    image: IMAGES.home.destinations.bruges,
  },
  {
    name: "GHENT PRIVATE TOUR",
    description:
      "Experience the vibrant student city of Ghent with its medieval architecture and artistic heritage.",
    image: IMAGES.home.destinations.ghent,
  },
  {
    name: "ANTWERP PRIVATE TOUR",
    description:
      "Explore the diamond capital of the world, Antwerp, with its world-class fashion and historical port.",
    image: IMAGES.home.destinations.antwerp,
  },
  {
    name: "BRUSSELS PRIVATE TOUR",
    description:
      "Visit the heart of Europe, Brussels, famous for its Grand Place and delicious chocolate.",
    image: IMAGES.home.destinations.brussels,
  },
  {
    name: "DINANT PRIVATE TOUR",
    description:
      "Marvel at the dramatic cliffs and river views in Dinant, a hidden gem in the Walloon region.",
    image: IMAGES.home.destinations.dinant,
  },
] as const;

export type Destination = (typeof destinations)[number];

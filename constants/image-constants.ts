export const IMAGES = {
  home: {
    banner: "/assets/images/banner/home.banner.png",
  },
  about: {
    banner: "/assets/images/banner/home.banner.png",
    section1: "/assets/images/banner/about-1.png",
    section2: "/assets/images/banner/about-2.png",
    section3: "/assets/images/banner/about-3.png",
  },
  tours: {
    banner: "/assets/images/banner/home.banner.png",
  },
  customTours: {
    banner: "/assets/images/banner/home.banner.png",
  },
  partners: {
    banner: "/assets/images/banner/home.banner.png",
  },
  common: {
  },
  logos: {
    logo: "/assets/images/logo/logo.png",
  },
} as const;

export type ImageAsset = typeof IMAGES;

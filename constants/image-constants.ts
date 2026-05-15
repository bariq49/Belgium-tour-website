export const IMAGES = {
  home: {
    banner: "/assets/images/banner/home.banner.png",
    destinations: {
      bruges: "/assets/images/home/destination/bruges.png",
      ghent: "/assets/images/home/destination/ghent.png",
      antwerp: "/assets/images/home/destination/antwerp.png",
      brussels: "/assets/images/home/destination/brussels.png",
      dinant: "/assets/images/home/destination/dinant.png",
    },
    designJourney: {
      namurCitadel: "/assets/images/home/design-journey/namur-citadel.png",
      brugesBelfry: "/assets/images/home/design-journey/bruges-belfry.png",
      gravensteen: "/assets/images/home/design-journey/gravensteen.png",
      antwerpStation: "/assets/images/home/design-journey/antwerp-station.png",
      brusselsSkyline: "/assets/images/home/design-journey/brussels-skyline.png",
    },
    scenicBanner: "/assets/images/banner/how-it-works.png",
    experiences: {
      culture: "/assets/images/home/experiences/culture.png",
      food: "/assets/images/home/experiences/food.png",
      scenic: "/assets/images/home/experiences/scenic.png",
      historical: "/assets/images/home/experiences/historical.png",
      tailored: "/assets/images/home/experiences/tailored.png",
    },
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
    dark: "/assets/logo/logo-black.png",
    white: "/assets/logo/logo-white.png",
  },
  auth: {
    forgotPassword: "/assets/images/auth/forgot-password.png",
    login: "/assets/images/auth/login.png",
    register: "/assets/images/auth/register.png",
    passwordReset: "/assets/images/auth/password-reset.png",
  },
} as const;

export type ImageAsset = typeof IMAGES;

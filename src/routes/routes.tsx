import { BaseRoute } from "@/types/core.type"

export const routePath = {
  home: "/",
  translation: "/translation",
  comingSoon: "/coming-soon",
  notFound: "*",
  search: "/search",
  likedSongs: "/liked/songs",
  artistInfo: "/artist-info/:id",
  album: "/album/:id",
  playlist: "/playlist/:id",
  login: "/login",
  signup: "/signup",
} as const

export const artistRoutePath = {
  home: "/artist/home",
  profile: "/artist/profile",
  myMusic: "/artist/my-music",
  analytics: "/artist/analytics",
  audience: "/artist/audience",
} as const

export const adminRoutePath = {
  home: "/",
  translation: "/translation",
  comingSoon: "/coming-soon",
  notFound: "*",
  search: "/search",
  likedSongs: "liked/songs",
} as const

export const routes: BaseRoute[] = [
  { label: "Home", to: routePath.home },
  { label: "Translation", to: routePath.translation },
  { label: "Coming Soon", to: routePath.comingSoon, isComingSoon: true },
  { label: "Search", to: routePath.search },
]

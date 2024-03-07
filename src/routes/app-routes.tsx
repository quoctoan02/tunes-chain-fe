import DefaultLayout from "@/layouts/default-layout"
import { RouteObject, useRoutes } from "react-router-dom"
import { artistRoutePath, routePath } from "./routes"
import HomePage from "@/pages/user/home"
import TranslationPage from "@/pages/translation"
import NotFoundPage from "@/pages/not-found"
import EmptyLayout from "@/layouts/empty-layout"
import { FC } from "react"
import SearchPage from "@/pages/user/search"
import LikedSongsPage from "@/pages/user/liked"
import ArtistLayout from "@/layouts/artist-layout"
import AdminHomePage from "@/pages/artist/home"
import MyMusicPage from "@/pages/artist/my-music"

interface AppRoutesProps {}

const routes: RouteObject[] = [
  // Routes with default layout
  {
    element: <DefaultLayout />,
    children: [
      { path: routePath.home, element: <HomePage /> },
      { path: routePath.translation, element: <TranslationPage /> },
      { path: routePath.search, element: <SearchPage /> },
      { path: routePath.likedSongs, element: <LikedSongsPage /> },
      { path: routePath.playlist, element: <LikedSongsPage /> },
      { path: routePath.album, element: <LikedSongsPage /> },
      { path: routePath.artist, element: <LikedSongsPage /> },
    ],
  },
  {
    element: <ArtistLayout />,
    children: [
      { path: artistRoutePath.home, element: <AdminHomePage /> },
      { path: artistRoutePath.myMusic, element: <MyMusicPage /> },
      { path: artistRoutePath.profile, element: <SearchPage /> },
      { path: artistRoutePath.analytics, element: <LikedSongsPage /> },
    ],
  },

  // Routes with empty layout
  {
    element: <EmptyLayout />,
    children: [{ path: routePath.notFound, element: <NotFoundPage /> }],
  },
]

const AppRoutes: FC<AppRoutesProps> = () => {
  const appRoutes = useRoutes(routes)

  return appRoutes
}

// Or
// const AppRoutes: FC<AppRoutesProps> = () => {
//   return (
//     <Routes>
//       {/* Routes with default layout */}
//       <Route element={<DefaultLayout />}>
//         <Route path={routePath.home} element={<HomePage />} />
//         <Route path={routePath.translation} element={<TranslationPage />} />
//       </Route>

//       {/* Routes with empty layout */}
//       <Route element={<EmptyLayout />}>
//         <Route path={routePath.notFound} element={<NotFoundPage />} />
//       </Route>
//     </Routes>
//   )
// }

export default AppRoutes

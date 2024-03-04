import { FC } from "react"
import { Outlet } from "react-router-dom"

import Player from "@/components/layouts/player"
import SideBar from "@/components/layouts/sidebar"

interface DefaultLayoutProps {}

const DefaultLayout: FC<DefaultLayoutProps> = () => {
  return (
    <div className="flex h-full flex-col">
      <div className="flex h-full">
        {/* <Header /> */}
        <SideBar />
        <main className="h-full flex-1 overflow-y-auto py-2">
          <Outlet />
        </main>
      </div>
      <Player />
      {/* <Footer /> */}
    </div>
  )
}

export default DefaultLayout

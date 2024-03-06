import { FC } from "react"
import { Outlet } from "react-router-dom"

import Player from "@/components/layouts/player"
import SideBar from "@/components/layouts/sidebar"

interface DefaultLayoutProps {}

const DefaultLayout: FC<DefaultLayoutProps> = () => {
  return (
    <div className="flex h-screen">
      <div className="flex h-[calc(100%-92px)] w-full">
        {/* <Header /> */}
        <SideBar />
        <main className="h-full flex-1 overflow-y-auto pr-2 pt-2">
          <Outlet />
        </main>
      </div>
      <Player />
      {/* <Footer /> */}
    </div>
  )
}

export default DefaultLayout

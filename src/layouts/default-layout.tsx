import { FC } from "react"
import { Outlet } from "react-router-dom"

import Player from "@/components/layouts/player"
import SideBar from "@/components/layouts/sidebar"
import Center from "@/components/layouts/center"
import Header from "@/components/layouts/header"

interface DefaultLayoutProps {}

const DefaultLayout: FC<DefaultLayoutProps> = () => {
  return (
    <div className="flex h-screen">
      <div className="flex h-[calc(100%-92px)] w-full">
        {/* <Header /> */}
        <SideBar />
        <main className="mr-2 mt-2 h-full flex-1 overflow-hidden overflow-y-auto rounded-lg bg-gradient-to-b from-emerald-800 p-3">
          {/* <div
            className="
        h-full 
        w-full 
        overflow-hidden 
        overflow-y-auto 
        rounded-lg 
        bg-neutral-900
      "
          > */}
          <Header />
          <Center>
            <Outlet />
          </Center>
          {/* </div> */}
        </main>
      </div>
      <Player />
      {/* <Footer /> */}
    </div>
  )
}

export default DefaultLayout

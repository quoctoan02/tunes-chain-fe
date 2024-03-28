import { FC, useEffect, useMemo, useState } from "react"
import { Outlet } from "react-router-dom"

import Player from "@/components/player/player"
import SideBar from "@/components/layouts/sidebar"
import Center from "@/components/layouts/center"
import Header from "@/components/layouts/header"
import { twMerge } from "tailwind-merge"
import useBgColorStore from "@/hooks/stores/use-bg-color-store"
import { Role } from "@/types/auth.type"
import { useRoleStore } from "@/hooks/stores/use-role-store"

interface DefaultLayoutProps {
  role: Role
}

const DefaultLayout: FC<DefaultLayoutProps> = ({ role }) => {
  const { setRole } = useRoleStore()
  useMemo(() => {
    console.log(role)
    setRole(role)
  }, [])
  const { color } = useBgColorStore()
  console.log("🚀 ~ color:", color)
  return (
    <div className="flex h-screen bg-black">
      <div className="flex h-[calc(100%-92px)] w-full">
        {/* <Header /> */}
        <SideBar />
        <main className={twMerge("h-full flex-1 py-2 pr-2", color)}>
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

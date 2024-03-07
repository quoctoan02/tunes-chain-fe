import Center from "@/components/layouts/artist/center"
import SideBar from "@/components/layouts/artist/sidebar"
import { FC } from "react"
import { Outlet } from "react-router-dom"

interface ArtistLayoutProps {}

const DefaultLayout: FC<ArtistLayoutProps> = () => {
  return (
    // <div className="flex h-full flex-col">
    <div className="flex h-screen w-full">
      {/* <Header /> */}
      <SideBar />
      <main className="h-full flex-1 overflow-y-auto py-2 pr-2">
        <div
      className="
        h-full 
        w-full 
        overflow-hidden 
        overflow-y-auto 
        rounded-lg 
        bg-neutral-900
      "
    >
      <Center>
        <Outlet />
      </Center>
    </div>
        
      </main>
    </div>
    // </div>
  )
}

export default DefaultLayout

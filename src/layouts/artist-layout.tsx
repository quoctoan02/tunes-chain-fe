import Center from "@/components/layouts/artist/center"
import SideBar from "@/components/layouts/artist/sidebar"
import Header from "@/components/layouts/header"
import { FC } from "react"
import { Outlet } from "react-router-dom"

interface ArtistLayoutProps {}

const DefaultLayout: FC<ArtistLayoutProps> = () => {
  return (
    // <div className="flex h-full flex-col">
    <div className="flex h-screen bg-black">
      {/* <Header /> */}
      <SideBar />
      <main className="h-full flex-1 py-2 pr-2">
        <Center>
          <Outlet />
        </Center>
      </main>
    </div>
    // </div>
  )
}

export default DefaultLayout

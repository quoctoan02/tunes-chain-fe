import SideBar from "@/components/layouts/artist/side-bar"
import { FC } from "react"
import { Outlet } from "react-router-dom"

interface ArtistLayoutProps {}

const ArtistLayout: FC<ArtistLayoutProps> = () => {
  return (
    <div className="flex h-full flex-col">
      <div className="flex h-full">
        {/* <Header /> */}
        <SideBar />
        <main className="h-full flex-1 overflow-y-auto py-2">
          <Outlet />
        </main>
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default ArtistLayout

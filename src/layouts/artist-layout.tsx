import Center from "@/components/layouts/artist/center"
import SideBar from "@/components/layouts/artist/sidebar"
import Header from "@/components/layouts/header"
import { useRoleStore } from "@/hooks/stores/use-role-store"
import { Role } from "@/types/auth.type"
import { FC, useMemo } from "react"
import { Outlet } from "react-router-dom"

interface ArtistLayoutProps {
  role: Role
}

const DefaultLayout: FC<ArtistLayoutProps> = ({ role }) => {
  const { setRole } = useRoleStore()
  useMemo(() => {
    setRole(role)
  }, [])
  return (
    // <div className="flex h-full flex-col">
    <div className="flex h-screen bg-black">
      {/* <Header /> */}
      <SideBar />
      <main className="h-full flex-1 py-2 pr-2">
        <div
          className=" h-full
        w-full
        overflow-hidden 
        overflow-y-auto
        rounded-lg 
        bg-neutral-900 
        px-6
        py-3"
        >
          <Header role={Role.Artist} />
          <Outlet />
        </div>
      </main>
    </div>
    // </div>
  )
}

export default DefaultLayout

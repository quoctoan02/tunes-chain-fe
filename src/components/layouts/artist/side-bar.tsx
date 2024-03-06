import { useMemo } from "react"
import { BiSearch } from "react-icons/bi"
import { HiHome } from "react-icons/hi"
import { useLocation } from "react-router-dom"
import { MdOutlinePeopleAlt, MdLibraryMusic } from "react-icons/md"
import { IoIosStats } from "react-icons/io"
import SidebarItem from "./sidebar-item"
import Box from "./box"
import { artistRoutePath } from "@/routes/routes"
interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
  const { pathname } = useLocation()
  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: "Home",
        active: pathname === artistRoutePath.home,
        path: artistRoutePath.home,
      },
      {
        icon: MdLibraryMusic,
        label: "My music",
        active: pathname === artistRoutePath.myMusic,
        path: artistRoutePath.myMusic,
      },
      {
        icon: MdOutlinePeopleAlt,
        label: "Audience",
        active: pathname === artistRoutePath.audience,
        path: artistRoutePath.audience,
      },
      {
        icon: IoIosStats,
        label: "Stats",
        active: pathname === artistRoutePath.stats,
        path: artistRoutePath.stats,
      },
    ],
    [pathname],
  )
  return (
    <div
      className="hidden 
      h-full 
      w-[300px] 
      flex-col 
      gap-y-2 
      bg-black 
      p-2 
      md:flex"
    >
      <Box>
        <div className="flex flex-col gap-y-4 px-5 py-4">
          {routes.map((route) => {
            return <SidebarItem key={route.label} {...route}></SidebarItem>
          })}
        </div>
      </Box>
    </div>
  )
}

export default Sidebar

import { useMemo } from "react"
import { BiSearch } from "react-icons/bi"
import { HiHome } from "react-icons/hi"
import { useLocation } from "react-router-dom"
import SidebarItem from "./sidebar-item"
import Box from "./box"
interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
  const { pathname } = useLocation()
  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: "Home",
        active: !["my-music", "/audience", "/stats"].includes(pathname),
        path: "/",
      },
      {
        icon: BiSearch,
        label: "My music",
        active: pathname === "/my-music",
        path: "/my-music",
      },
      {
        icon: BiSearch,
        label: "Audience",
        active: pathname === "/audience",
        path: "/audience",
      },
      {
        icon: BiSearch,
        label: "Stats",
        active: pathname === "/stats",
        path: "/stats",
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

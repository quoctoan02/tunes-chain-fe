import { useMemo } from "react"
import { BiSearch } from "react-icons/bi"
import { HiHome } from "react-icons/hi"
import { useLocation } from "react-router-dom"
import Box from "./box"
import Library from "./library"
import SidebarItem from "./sidebar-item"
interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
  const { pathname } = useLocation()
  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: "Home",
        active: pathname === "/home",
        path: "/",
      },
      {
        icon: BiSearch,
        label: "Search",
        active: pathname === "/search",
        path: "/search",
      },
    ],
    [pathname],
  )
  return (
    <div
      className="
      flex 
      h-full 
      w-[300px]
      flex-col 
      gap-y-2 
      bg-black 
      px-2
      pt-2"
    >
      <Box className="h-fit">
        <div className="flex flex-col gap-y-4 px-5 py-4">
          {routes.map((route) => {
            return <SidebarItem key={route.label} {...route}></SidebarItem>
          })}
        </div>
      </Box>
      <Box className=" flex-1">
        <div className="flex h-full w-full flex-col gap-y-4 py-4">
          <Library />
        </div>
      </Box>
    </div>
  )
}

export default Sidebar

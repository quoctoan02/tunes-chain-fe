import React from "react"
import { IconType } from "react-icons"
import { NavLink } from "react-router-dom"
import { twMerge } from "tailwind-merge"

interface SidebarItemProps {
  icon: IconType
  label: string
  active?: boolean
  path: string
}
const SidebarItem: React.FC<SidebarItemProps> = ({ icon: Icon, label, active, path }) => {
  return (
    <NavLink
      to={path}
      className={twMerge(
        `text-md
      flex
      w-full
      cursor-pointer
         flex-row
      items-center
      gap-x-4
      py-1
      font-medium
      text-neutral-400
      transition
      hover:text-white
    `,
        active && "text-white",
      )}
    >
      <Icon size={26} />
      <p className="w-full truncate">{label}</p>
    </NavLink>
  )
}

export default SidebarItem

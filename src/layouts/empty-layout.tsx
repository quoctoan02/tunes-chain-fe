import { FC } from "react"
import { Outlet } from "react-router-dom"

interface EmptyLayoutProps {}

const EmptyLayout: FC<EmptyLayoutProps> = () => {
  return (
    <div className="flex h-screen bg-neutral-900/90">
      <Outlet />
    </div>
  )
}

export default EmptyLayout

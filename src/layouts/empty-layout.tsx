import { FC } from "react"
import { Outlet } from "react-router-dom"

interface EmptyLayoutProps {}

const EmptyLayout: FC<EmptyLayoutProps> = () => {
  return (
    <div className="min-h-screen">
      <Outlet />
    </div>
  )
}

export default EmptyLayout

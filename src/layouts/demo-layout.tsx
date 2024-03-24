import { FC } from "react"
import { Outlet } from "react-router-dom"
import HeaderDemo from "@/components/layouts/header-demo"

interface DefaultLayoutProps {}

const DemoLayout: FC<DefaultLayoutProps> = () => {
  return (
    <div>
      <HeaderDemo />
      <main className="">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default DemoLayout

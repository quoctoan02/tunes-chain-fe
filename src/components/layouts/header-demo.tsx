import { Drawer, Dropdown } from "antd"
import { FC, useState } from "react"
import { BiChevronDown } from "react-icons/bi"
import { HiMenu } from "react-icons/hi"
import { Link, NavLink } from "react-router-dom"

import { useActive } from "@/hooks/wallet/use-active"
import { Button } from "@/libs/ui/button"
import { routePath, routes } from "@/routes/routes"
import { cn } from "@/utils/classnames"
import { truncateAddress } from "@/utils/string"
import { ToggleTheme } from "../app/toggle-theme"
import { ChainSelector } from "../wallet/chain-selector"
import { ConnectWalletWrapper } from "../wallet/connect-wallet-wrapper"
import { Container } from "./container"
import { LanguageSelector } from "./language-selector"

interface HeaderProps {}

const HeaderDemo: FC<HeaderProps> = () => {
  const { disconnect, account } = useActive()

  const [isOpenDrawer, setIsOpenDrawer] = useState(false)

  const handleCloseDrawer = () => setIsOpenDrawer(false)

  return (
    <>
      <header className="bg-body sticky left-0 right-0 top-0 z-50 h-16 shadow">
        <Container className="flex h-full items-center justify-between">
          <Link to={routePath.home} className="h-8">
            <img src="/logo/logo.svg" alt="" className="h-full" />
          </Link>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-10 max-lg:hidden">
              <nav className="flex items-center justify-center gap-4">
                {routes.map((route) => {
                  return (
                    <NavLink key={route.to} to={route.to}>
                      {({ isActive }) => {
                        return (
                          <div className={cn("", isActive && "text-primary-500 underline")}>
                            {route.label}
                          </div>
                        )
                      }}
                    </NavLink>
                  )
                })}
              </nav>
              <div className="hidden items-center gap-4 sm:inline-flex">
                <ToggleTheme />
                <LanguageSelector />
                <ChainSelector />
                <ConnectWalletWrapper>
                  <Dropdown
                    menu={{
                      items: [
                        {
                          key: "disconnect",
                          label: <button onClick={disconnect}>Disconnect</button>,
                        },
                      ],
                    }}
                  >
                    <Button type="primary" className="gap-1 px-2">
                      {account && truncateAddress(account)}
                      <BiChevronDown className="text-xl" />
                    </Button>
                  </Dropdown>
                </ConnectWalletWrapper>
              </div>
            </div>
            <Button
              icon={<HiMenu />}
              type="default"
              className="!hidden aspect-square p-0 max-xl:!flex"
              onClick={() => setIsOpenDrawer(true)}
            />
          </div>
        </Container>
      </header>

      <Drawer
        open={isOpenDrawer}
        width={375}
        styles={{ header: { display: "none" } }}
        onClose={handleCloseDrawer}
      >
        <div className="flex flex-col gap-8">
          {routes.map((route, index) => {
            return (
              <NavLink key={`drawer-${route.to}`} to={route.to} onClick={handleCloseDrawer}>
                {({ isActive }) => {
                  return (
                    <div className={cn("", isActive && "text-primary-500 underline")}>
                      {route.label}
                    </div>
                  )
                }}
              </NavLink>
            )
          })}
        </div>
      </Drawer>
    </>
  )
}

export default HeaderDemo

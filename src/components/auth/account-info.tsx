import { useClientData } from "@/hooks/auth/use-client-data"
import { useUserStore } from "@/hooks/stores/use-user-store"
import { useActive } from "@/hooks/wallet/use-active"
import { Button } from "@/libs/ui/button-demo"
import { truncateAddress } from "@/utils/string"
import { Dropdown } from "antd"
import React from "react"
import { BiChevronDown } from "react-icons/bi"
import { Address } from "viem"

const AccountInfo = () => {
  const { account, isConnecting, connectWallet, disconnect } = useActive()
  const { name, address, token, logout } = useClientData()
  return (
    <div>
      <Dropdown
        menu={{
          items: [
            {
              key: "logout",
              label: <button onClick={account ? disconnect : logout}>{account ? "Disconnect" : "Logout"}</button>,
            },
          ],
        }}
      >
        <Button type="primary" className={"flex h-fit gap-x-2 py-1"} size="middle">
          {name ? (
            <div className="flex flex-col items-center">
              <span className="">{name}</span>
              <span className="text-sm">{truncateAddress(address as Address, 4)}</span>
            </div>
          ) : (
            truncateAddress(address as Address, 4)
          )}

          <BiChevronDown className="text-xl" />
        </Button>
      </Dropdown>
    </div>
  )
}

export default AccountInfo

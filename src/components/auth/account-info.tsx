import { useClientData } from "@/hooks/auth/use-client-data"
import { useArtistStore } from "@/hooks/stores/use-artist-store"
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
  const { logout } = useArtistStore()
  const { name, address, token } = useClientData()
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
        <Button type="primary" className={"flex gap-x-2 py-1"} size="middle">
          {name ? <span className="flex flex-col items-center">{name}</span> : truncateAddress(address as Address, 5)}

          <BiChevronDown className="text-xl" />
        </Button>
      </Dropdown>
    </div>
  )
}

export default AccountInfo

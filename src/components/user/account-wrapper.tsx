import useUploadModal from "@/hooks/upload/use-upload-modal"
import Button from "@/libs/ui/buttons/button"
import React from "react"
import { FaUserAlt } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import { ConnectWalletWrapper } from "../wallet/connect-wallet-wrapper"
import { Dropdown } from "antd"
import { truncateAddress } from "@/utils/string"
import { useActive } from "@/hooks/wallet/use-active"
import { BiChevronDown } from "react-icons/bi"
import { useUserStore } from "@/hooks/stores/use-user-store"

const AccountWrapper = () => {
  const navigate = useNavigate()
  const loginModal = useUploadModal()
  const { disconnect, account } = useActive()
  const { token, address } = useUserStore()
  return (
    <div>
      {address ? (
        <div className="flex items-center gap-x-4">
          <Button
            // onClick={handleLogout}
            className="bg-white px-6 py-2"
          >
            Logout
          </Button>
          <Button
            // onClick={() => navigate("/account")}
            onClick={loginModal.onOpen}
            className="bg-white"
          >
            <FaUserAlt />
          </Button>
        </div>
      ) : (
        <div>
          <div>
            <Button
              onClick={() => navigate("/signup")}
              className="
                  bg-transparent 
                  font-medium 
                  text-neutral-300
                "
            >
              Sign up
            </Button>
          </div>
          <div>
            <Button onClick={() => navigate("/login")} className="bg-white px-6 py-2">
              Log in
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AccountWrapper

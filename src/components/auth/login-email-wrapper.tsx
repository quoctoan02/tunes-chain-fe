import useUploadModal from "@/hooks/render/use-upload-modal"
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
import SignupModal from "../modals/signup-modal"
import useLoginModal from "@/hooks/auth/use-login-modal"
import useSignupModal from "@/hooks/auth/use-signup-modal"
import { useArtistStore } from "@/hooks/stores/use-artist-store"
import AccountInfo from "./account-info"

const LoginEmailWrapper = () => {
  const navigate = useNavigate()
  const loginModal = useLoginModal()
  const signupModal = useSignupModal()
  const { loginEmail, token, address, logout } = useArtistStore()

  return (
    <div>
      {address ? (
        <AccountInfo />
      ) : (
        // <div className="flex items-center gap-x-4">
        //   <Button
        //     // onClick={() => navigate("/account")}
        //     onClick={logout}
        //     className="bg-white"
        //   >
        //     <FaUserAlt />
        //   </Button>
        //   <Button
        //     // onClick={handleLogout}
        //     className="bg-white px-6 py-2"
        //   >
        //     Logout
        //   </Button>
        // </div>
        <div className="flex items-center justify-center gap-x-4">
          <div>
            <Button
              onClick={signupModal.onOpen}
              className="
                  w-24 
                  bg-transparent
                  text-neutral-300
                  hover:bg-neutral-500 hover:text-white
                "
            >
              Sign up
            </Button>
          </div>
          <div>
            <Button onClick={loginModal.onOpen} className="w-24 py-3">
              Log in
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default LoginEmailWrapper

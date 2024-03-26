import { FC } from "react"
import { ConnectWalletModal } from "../modals/connect-wallet-modal"
import { RequiredChainModal } from "../modals/required-chain-modal"
import UploadModal from "../modals/upload-modal"
import SignupModal from "../modals/signup-modal"
import LoginModal from "../modals/login-modal"

interface GlobalModalProps {}

export const GlobalModal: FC<GlobalModalProps> = () => {
  return (
    <div className="global-modal">
      <ConnectWalletModal />
      <RequiredChainModal />
      <LoginModal />
      <SignupModal />
      <UploadModal />
    </div>
  )
}

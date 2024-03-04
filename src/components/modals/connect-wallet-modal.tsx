import { useModalStore } from "@/hooks/stores/use-modals-store"
import { useActive } from "@/hooks/wallet/use-active"
import Modal from "@/libs/ui/modal"
import { wallets } from "@/libs/wagmi"

const hasInjectedProvider = typeof window !== "undefined" && typeof window["ethereum"] !== "undefined"

export const ConnectWalletModal = () => {
  const { isOpenModalConnectWallet, setIsOpenModalConnectWallet } = useModalStore()
  const { connect } = useActive()

  return (
    <Modal
      className="border-cool-400 rounded-lg border"
      width={320}
      title="Connect Wallet"
      open={isOpenModalConnectWallet}
      onCancel={() => setIsOpenModalConnectWallet(false)}
    >
      <div className="mt-3 grid grid-cols-3 gap-y-2">
        {wallets.map((wallet) => {
          if (!wallet.injected || (wallet.injected && hasInjectedProvider)) {
            return (
              <button
                className="group flex flex-col items-center gap-2 overflow-hidden"
                key={wallet.name}
                onClick={() => connect(wallet)}
              >
                <img
                  src={wallet.iconURI}
                  title={wallet.name}
                  role="button"
                  className="border-muted/50 w-[80%] rounded-2xl border  object-contain transition-all group-hover:scale-105"
                />
                <p className="text-xs font-semibold">{wallet.name}</p>
              </button>
            )
          }
        })}
      </div>
    </Modal>
  )
}

import { isDesktop } from "react-device-detect"
import { toast } from "react-toastify"
import { UserRejectedRequestError } from "viem"
import { useAccount, useConnect, useDisconnect } from "wagmi"

import { ConnectorIds, Wallet, connectors } from "@/libs/wagmi"
import { useClientStore } from "../stores/use-client-store"
import { useModalStore } from "../stores/use-modals-store"
import { useUserStore } from "../stores/use-user-store"

export function useActive() {
  const { isConnecting, address: account } = useAccount()
  const { chain } = useClientStore()
  const { logout } = useUserStore()
  const { connectAsync } = useConnect()
  const { disconnectAsync, reset } = useDisconnect()

  const { setIsOpenModalConnectWallet } = useModalStore()

  async function connect2ConnectorId(connectorId: ConnectorIds) {
    try {
      const connector = connectors[connectorId]
      await connectAsync({
        connector,
        chainId: chain.id,
      })
    } catch (err) {
      if (err instanceof UserRejectedRequestError) {
        toast.error("You have rejected the connect request")
      }
    }
  }

  function connect(wallet: Wallet) {
    if (wallet.injected) {
      connect2ConnectorId(wallet.connectorId)
    } else if (wallet.connectorId === ConnectorIds.WalletConnect) {
      connect2ConnectorId(wallet.connectorId)
    } else if (isDesktop) {
      // In Desktop
      if (typeof window.ethereum !== "undefined" && window.ethereum[wallet.etherId]) {
        connect2ConnectorId(wallet.connectorId)
      } else if (wallet.mobileOnly) {
        connect2ConnectorId(ConnectorIds.WalletConnect)
      } else {
        window.open(wallet.downloadUrl, "_blank", "noopener noreferrer")
      }
    } else {
      // In Mobile
      if (typeof window.ethereum !== "undefined") {
        connect2ConnectorId(wallet.connectorId)
      } else if (wallet.deepLink) {
        window.open(wallet.deepLink, "_blank", "noopener noreferrer")
      } else {
        connect2ConnectorId(ConnectorIds.WalletConnect)
      }
    }
    setIsOpenModalConnectWallet(false)
  }

  async function disconnect() {
    await disconnectAsync()
    reset()
    logout()
  }

  function connectWallet() {
    setIsOpenModalConnectWallet(true)
  }

  return {
    account,
    isConnecting,
    connect,
    connectWallet,
    disconnect,
  }
}

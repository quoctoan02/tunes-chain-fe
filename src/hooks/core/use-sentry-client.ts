import useSWR from "swr"
import { WalletClient, useAccount, usePublicClient, useWalletClient } from "wagmi"
import { useClientStore } from "../stores/use-client-store"

export const useSentryClient = () => {
  const { chain, setPublicClient, setWalletClient, setAccount, setIsPublicClientReady, setIsWalletClientReady } =
    useClientStore()

  const { isConnected, address: account } = useAccount()

  const publicClient = usePublicClient({
    chainId: chain.id,
  })

  const { data: walletClient } = useWalletClient({
    chainId: chain.id,
  })

  useSWR(["sentry-public-client", publicClient], () => {
    setPublicClient(publicClient)
    if (typeof publicClient?.readContract === "function") {
      setIsPublicClientReady(true)
    } else {
      setIsPublicClientReady(false)
    }
  })

  useSWR(["sentry-wallet-client", walletClient, isConnected], () => {
    setWalletClient(isConnected ? (walletClient as WalletClient) : undefined)
    setAccount(account)

    if (typeof walletClient?.writeContract === "function") {
      setIsWalletClientReady(true)
    } else {
      setIsWalletClientReady(false)
    }
  })
}

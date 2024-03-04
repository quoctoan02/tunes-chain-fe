import { useCallback } from "react"
import { useSearchParams } from "react-router-dom"
import { toast } from "react-toastify"
import { Chain, useSwitchNetwork } from "wagmi"

import { supportedChains } from "@/configs/chains.config"
import { useClientStore } from "../stores/use-client-store"

export function useChainSetup() {
  const { account, chain: currentChain, isSwitchingChain, setIsSwitchingChain } = useClientStore()

  const { switchNetworkAsync } = useSwitchNetwork()

  const [searchParams, setSearchParams] = useSearchParams()

  const chainId = Number(searchParams.get("chain_id"))

  const isReadySwitchChain = typeof switchNetworkAsync === "function"

  const selectChain = useCallback(
    async (chain: Chain) => {
      try {
        if (account) {
          if (isReadySwitchChain) {
            setIsSwitchingChain(true)
            const chainSelected = await switchNetworkAsync(chain.id)

            if (chainId !== chain.id) {
              setSearchParams({ chain_id: chainSelected.id.toString() })

              // Reload page when switch chain
              // window.location.reload()
            }
          } else {
            toast.error("An error occurred while switching networks")
          }
        } else {
          if (chainId !== chain.id) {
            setSearchParams({ chain_id: chain.id.toString() })
            // Reload page when switch chain
            // window.location.reload()
          }
        }
      } catch (err) {
        toast.error("Switch network failed")
      } finally {
        setIsSwitchingChain(false)
      }
    },
    [account, chainId, isReadySwitchChain, setSearchParams, switchNetworkAsync],
  )

  return {
    currentChain,
    chains: supportedChains,
    isSwitchingChain,
    isReadySwitchChain,
    selectChain,
    switchNetworkAsync,
  }
}

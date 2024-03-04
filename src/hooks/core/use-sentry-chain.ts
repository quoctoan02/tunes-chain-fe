import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { useNetwork } from "wagmi"

import { supportedChains } from "@/configs/chains.config"
import { useClientStore } from "../stores/use-client-store"

export const useSentryChain = () => {
  const { chain } = useNetwork()
  const { chain: currentChain, setChain } = useClientStore()

  const [searchParams, setSearchParams] = useSearchParams()

  const chainId = Number(searchParams.get("chain_id"))

  useEffect(() => {
    if (!currentChain) return

    if (chain) {
      if (chain.id !== currentChain.id) {
        if (chain.unsupported) {
          setSearchParams({ chain_id: chain.id.toString() })
        } else {
          setChain(chain)
          setSearchParams({ chain_id: chain.id.toString() })
        }
      }
    } else {
      const chainSelectedInParam = supportedChains.find((supportedChain) => supportedChain.id === chainId)

      if (!chainSelectedInParam) return

      if (chainSelectedInParam.id !== currentChain.id) {
        setChain(chainSelectedInParam)
      }
    }
  }, [chain, chainId, currentChain])

  return null
}

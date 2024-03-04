import { ERC20TokenInfo } from "@/types/web3.type"
import { useState } from "react"
import { toast } from "react-toastify"
import { useNetwork } from "wagmi"
import { useClientStore } from "../stores/use-client-store"

export const useAddCustomToken = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [customTokenAdded, setCustomTokenAdded] = useState<ERC20TokenInfo | null>(null)

  const { chain } = useNetwork()

  const { chain: currentChain } = useClientStore()

  const isWrongChain = chain?.id !== currentChain?.id

  const handleAddCustomToken = async (tokenInfo: ERC20TokenInfo, type: string = "ERC20") => {
    try {
      if (!window?.ethereum) {
        toast.error("Wallet not found")
        return
      }

      if (isWrongChain) {
        toast.error("You are wrong chain. Please switch chain to add token")
        return
      }

      setIsLoading(true)
      setCustomTokenAdded(tokenInfo)

      const tokenAdded = await window.ethereum.request({
        method: "wallet_watchAsset",
        params: {
          type,
          options: tokenInfo,
        },
      })

      if (tokenAdded) {
        toast.success(`Add ${tokenInfo?.symbol} token successfully!`)
        setCustomTokenAdded(null)
      } else {
        toast.error("Add token failed")
        // setCustomTokenAdded(null)
      }
    } catch (error: any) {
      console.log("🚀 ~ file: use-add-custom-token.ts:18 ~ handleAddCustomToken ~ error:", error)
      toast.error(error?.message || "Add token failed")
    } finally {
      setIsLoading(false)
      // setCustomTokenAdded(null)
    }
  }
  return {
    isLoading,
    isWrongChain,
    customTokenAdded,
    addCustomToken: handleAddCustomToken,
  }
}

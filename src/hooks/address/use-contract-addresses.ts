import { Address, useNetwork } from "wagmi"

import { CONTRACTS } from "@/constants/contracts"
import { useClientStore } from "../stores/use-client-store"

export const getContractAddresses = (chainId: number) => {
  return Object.fromEntries(
    Object.entries(CONTRACTS).map(([key, object]) => [key, object[chainId as keyof typeof object]]),
  ) as Record<keyof typeof CONTRACTS, Address>
}

export const useContractAddresses = () => {
  const { chain } = useNetwork()

  const { chain: chainStore } = useClientStore()
  const currentChain = chain || chainStore

  return getContractAddresses(currentChain?.id)
}

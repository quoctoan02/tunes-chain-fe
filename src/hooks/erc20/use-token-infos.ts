import { useSWR } from "@/libs/swr"
import { Address, isAddress } from "viem"
import { erc20ABI } from "wagmi"
import { multicall } from "wagmi/actions"

// Muticall token infos with chain support function multicall3
export const useTokenInfos = (address: Address) => {
  const response = useSWR(["token-infos"], async () => {
    if (!isAddress(address)) return

    const response = await multicall({
      contracts: [
        {
          abi: erc20ABI,
          address,
          functionName: "name",
        },
        {
          abi: erc20ABI,
          address,
          functionName: "symbol",
        },
        {
          abi: erc20ABI,
          address,
          functionName: "decimals",
        },
      ],
      allowFailure: false,
    })

    return response
  })

  return response
}

import { useCallback } from "react"
import { SWRConfiguration } from "swr"
import { BaseError, formatUnits, hexToBigInt, isAddress } from "viem"
import { Address, erc20ABI, useToken } from "wagmi"

import { useSWR } from "@/libs/swr"
import { popError, popPending, popPendingConfirm, popSuccess, popWeb3Errors } from "@/utils/pop"
import { useClientStore } from "../stores/use-client-store"

const MaxUint256 = hexToBigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff")

export const useAllowance = (address?: Address, spender?: Address, config?: SWRConfiguration) => {
  const { walletClient, publicClient, chain, account, isPublicClientReady, isWalletClientReady } = useClientStore()

  const { data: token } = useToken({
    address,
  })

  const {
    data: allowance,
    isLoading: isAllowanceLoading,
    mutate: refetchAllowance,
  } = useSWR(
    ["get-allowance", account, publicClient, isPublicClientReady, address, spender],
    async () => {
      if (!account || !isPublicClientReady || !address || !spender) return

      if (!isAddress(address) || !isAddress(spender)) return

      const allowance = await publicClient.readContract({
        abi: erc20ABI,
        address,
        functionName: "allowance",
        args: [account, spender],
      })

      if (!token) return

      return allowance
    },
    config,
  )

  const handleApprove = useCallback(
    async (amount?: bigint) => {
      try {
        if (!walletClient || !address || !spender) return

        popPendingConfirm()
        const hash = await walletClient.writeContract({
          account,
          chain: chain,
          abi: erc20ABI,
          address,
          functionName: "approve",
          args: [spender, amount || MaxUint256],
        })
        popPending(`Approving spending cap for ${token?.symbol || "the token"}`, hash)

        const { status } = await publicClient.waitForTransactionReceipt({
          hash,
        })
        if (status === "success") {
          popSuccess(`Approve token successfully`, hash)
          refetchAllowance()
        } else {
          popError("Contract execution failed", hash)
        }
      } catch (err) {
        popWeb3Errors(err as BaseError, "Approve failed")
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [walletClient, address, spender, account, chain, token?.symbol, publicClient],
  )

  const allowanceFormatted = allowance && token ? +formatUnits(allowance || BigInt(0), token?.decimals) : 0

  return { allowance, allowanceFormatted, isAllowanceLoading, approve: handleApprove }
}

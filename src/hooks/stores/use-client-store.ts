import { Address, Chain } from "viem"
import { PublicClient, WalletClient } from "wagmi"
import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"

import { defaultChain } from "@/configs/chains.config"
import { storageKeyConfigs, storageKeys, storagePrefix } from "@/configs/storage.config"
import { publicClient } from "@/libs/wagmi"

export interface ClientStoreProps {
  chain: Chain
  publicClient: PublicClient
  walletClient?: WalletClient
  account?: Address
  isPublicClientReady: boolean
  isWalletClientReady: boolean
  isSwitchingChain: boolean
  setPublicClient(publicClient: PublicClient): void
  setWalletClient(walletClient?: WalletClient): void
  setChain(chain: Chain): void
  setAccount(account?: Address): void
  setIsPublicClientReady(isPublicClientReady: boolean): void
  setIsWalletClientReady(isWalletClientReady: boolean): void
  setIsSwitchingChain(isSwitchingChain: boolean): void
}

export const useClientStore = create<ClientStoreProps>()(
  devtools(
    persist(
      (set) => {
        return {
          chain: defaultChain,
          publicClient: publicClient({ chainId: defaultChain.id }),
          walletClient: undefined,
          isPublicClientReady: false,
          isWalletClientReady: false,
          isSwitchingChain: false,

          setChain(chain) {
            set({ chain })
          },
          setPublicClient(publicClient) {
            set({ publicClient })
          },
          setWalletClient(walletClient) {
            set({ walletClient })
          },
          setAccount(account) {
            set({ account })
          },
          setIsPublicClientReady(isPublicClientReady) {
            set({ isPublicClientReady })
          },
          setIsWalletClientReady(isWalletClientReady) {
            set({ isWalletClientReady })
          },
          setIsSwitchingChain(isSwitchingChain) {
            set({ isSwitchingChain })
          },
        }
      },
      {
        name: storageKeys.client,
        partialize: (state) => ({
          chain: state.chain,
          publicClient: state.publicClient,
          walletClient: state.walletClient,
          account: state.account,
        }),
      },
    ),
    {
      name: storagePrefix,
      store: storageKeyConfigs.client,
    },
  ),
)

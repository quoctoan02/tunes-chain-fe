import { jwtDecode } from "jwt-decode"
import { toast } from "react-toastify"
import { BaseError, isAddressEqual } from "viem"
import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"

import { SIGN_MESSAGE } from "@/configs/app.config"
import { storageKeyConfigs, storageKeys, storagePrefix } from "@/configs/storage.config"
import { Service } from "@/services/app.service"
import { User } from "@/types/auth.type"
import { toastWeb3Error } from "@/utils/toast"
import { t } from "i18next"
import { lowerCase } from "lodash"

export const useUserStore = create<User>()(
  devtools(
    persist(
      (set, get) => {
        return {
          reset() {
            set({
              token: undefined,
              id: undefined,
              email: undefined,
              name: undefined,
              address: undefined,
            })
          },

          async login(walletClient) {
            const { account } = walletClient
            const { address, token } = get()

            const isExpired = token && jwtDecode<{ exp: number }>(token).exp * 1000 <= Date.now()
            const isInvalidToken = !token || isExpired
            const isKeepedAddress = address && isAddressEqual(account.address, address)

            if (isKeepedAddress && !isInvalidToken) {
              return true
            }

            const { data: nonceData } = await Service.auth.getNonce(account.address)
            // Check nonce
            if (!nonceData) {
              toast.error(t("Failed to get nonce"), { toastId: "get-nonce-failed" })
              return false
            }
            try {
              toast.loading(t("Please confirm the sign message on your wallet to log in"), { toastId: "sign-message" })
              const sign = await walletClient.signMessage({
                account: account!,
                message: `${SIGN_MESSAGE} ${nonceData.nonce}`,
              })
              const { data, statusText } = await Service.auth.login(account.address, sign)
              if (!data) {
                toast.error(statusText)
                return false
              }
              toast.success(t("Logged in successfully"), { toastId: "login-successfully" })
              const { userInfo, token } = data
              set({ ...userInfo, token })
              return true
            } catch (err) {
              toastWeb3Error(err as BaseError, t("Sign message failed"), { toastId: "sign-message-failed" })
              return false
            } finally {
              toast.dismiss("sign-message")
            }
          },

          logout() {
            get().reset()
          },

          async refreshUserInfo() {
            const { data, statusText } = await Service.user.getUser()
            if (data) {
              const { userInfo } = data
              set((states) => ({ ...states, ...userInfo }))
            } else toast.error(statusText)
          },
        }
      },
      {
        name: storageKeys.user,
      },
    ),
    {
      name: storagePrefix,
      store: storageKeyConfigs.user,
    },
  ),
)

import { jwtDecode } from "jwt-decode"
import { toast } from "react-toastify"
import { BaseError, isAddressEqual } from "viem"
import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"

import { SIGN_MESSAGE } from "@/configs/app.config"
import { storageKeyConfigs, storageKeys, storagePrefix } from "@/configs/storage.config"
import { Service } from "@/services/app.service"
import { Artist, SignupData } from "@/types/auth.type"
import { toastWeb3Error } from "@/utils/toast"
import { t } from "i18next"
import { lowerCase } from "lodash"

export const useArtistStore = create<Artist>()(
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

          async loginEmail(email, password) {
            const { token, email: currentEmail } = get()

            const isExpired = token && jwtDecode<{ exp: number }>(token).exp * 1000 <= Date.now()
            const isInvalidToken = !token || isExpired
            const isKeepedEmail = currentEmail && lowerCase(currentEmail) === lowerCase(email)
            if (isKeepedEmail && !isInvalidToken) {
              return true
            }

            try {
              const { data, statusText } = await Service.auth.loginEmail(email, password)
              if (!data) {
                toast.error(statusText)
                return false
              }
              toast.success(t("Logged in successfully"), { toastId: "login-successfully" })
              const { artistInfo, token } = data
              set({ ...artistInfo, token })
              return true
            } catch (err) {
              toast.error(t("Logged in failed"), { toastId: "login-failed" })
              return false
            }
          },
          async signup(artistData: SignupData) {
            // const { token } = get()

            // if (!token) {
            //   return false
            // }

            try {
              const { data, statusText } = await Service.auth.signup(artistData)
              console.log("🚀 ~ signup ~ data:", data)
              if (!data) {
                toast.error(statusText)
                return false
              }
              toast.success(t("Signup successfully"), { toastId: "signup-successfully" })
              const { artistInfo, token } = data
              set({ ...artistInfo, token })
              return true
            } catch (err) {
              console.log("🚀 ~ signup ~ err:", err)
              toast.error(t("Signup failed"), { toastId: "signup-failed" })
              return false
            }
          },

          logout() {
            get().reset()
          },

          async refreshArtistInfo() {
            const { data, statusText } = await Service.artist.getInfo()
            if (data) {
              const { artistInfo } = data
              set((states) => ({ ...states, ...artistInfo }))
            } else toast.error(statusText)
          },
        }
      },
      {
        name: storageKeys.artist,
      },
    ),
    {
      name: storagePrefix,
      store: storageKeyConfigs.artist,
    },
  ),
)

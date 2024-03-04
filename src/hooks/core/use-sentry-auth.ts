import { jwtDecode } from "jwt-decode"
import { useEffect, useRef } from "react"
import { toast } from "react-toastify"
import useSWR from "swr"
import { useDisconnect } from "wagmi"

import { useClientStore } from "../stores/use-client-store"
import { useUserStore } from "../stores/use-user-store"

export const useSentryAuth = () => {
  const { walletClient, account } = useClientStore()
  const { token, login, logout } = useUserStore()

  const { disconnect } = useDisconnect()

  useSWR(["sentry-auth", walletClient], async () => {
    if (walletClient && Boolean(walletClient?.signMessage)) {
      const loginStatus = await login(walletClient)

      // When user reject sign message ==> Disconnect wallet
      if (!loginStatus) {
        disconnect()
        logout()
      }
    }
  })

  const tokenTimer = useRef<NodeJS.Timeout>()

  const autoRefreshToken = () => {
    if (token && walletClient && account) {
      clearTimeout(tokenTimer.current)
      const { exp } = jwtDecode<{ exp: number }>(token)
      const remaining = exp * 1000 - Date.now()

      if (!remaining) {
        toast.info("Login session has expired, please sign up to login again")
      }

      tokenTimer.current = setTimeout(function () {
        login(walletClient)
      }, remaining)
    }
  }

  useEffect(() => {
    autoRefreshToken()

    return function () {
      clearTimeout(tokenTimer.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token])
}

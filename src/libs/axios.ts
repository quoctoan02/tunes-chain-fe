import axios, { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from "axios"
import { camelizeKeys, decamelizeKeys } from "humps"
import { Chain } from "wagmi"

import { API_URL, API_URLS_FOR_CHAINS } from "@/configs/endpoints.config"
import { useClientStore } from "@/hooks/stores/use-client-store"
import { useUserStore } from "@/hooks/stores/use-user-store"
import { toast } from "react-toastify"

export const http: AxiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {},
})

function onRequestFulfilled(config: InternalAxiosRequestConfig) {
  const { token } = useUserStore.getState()
  const { chain } = useClientStore.getState()

  if (chain) {
    const apiMatchedWithChain = API_URLS_FOR_CHAINS.TESTNET.chains.find(
      (chainConfig: Chain) => chainConfig?.id === chain.id,
    )
    if (apiMatchedWithChain) {
      config.baseURL = API_URLS_FOR_CHAINS.TESTNET.url
    } else {
      const apiMatchedWithChain = API_URLS_FOR_CHAINS.MAINNET.chains.find(
        (chainConfig: Chain) => chainConfig?.id === chain.id,
      )

      if (apiMatchedWithChain) {
        config.baseURL = API_URLS_FOR_CHAINS.MAINNET.url
      }
    }
  }

  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`
  }
  config.params = decamelizeKeys(config.params)
  config.data = decamelizeKeys(config.data)
  return config
}

function onResponseFulfilled(response: AxiosResponse) {
  response.statusText = ""
  response.data = camelizeKeys(response.data.data)
  return Promise.resolve(response)
}

function onResponseRejected(error: AxiosError) {
  console.log("🚀 ~ file: axios.ts:50 ~ onResponseRejected ~ error:", error)

  if (error?.code === "ERR_NETWORK") {
    toast.error("Network Error. This could be a CORS issue or a dropped internet connection.", {
      toastId: "network-error",
    })
  }

  if (error.response?.data) {
    const data = camelizeKeys(error.response.data) as any
    error.response.statusText = data["errorMsg"] || data["errorCode"]
    error.response.data = null
  } else {
    error.response!.statusText = "Connection lost"
  }
  return Promise.resolve(error.response)
}

http.interceptors.request.use(onRequestFulfilled)
http.interceptors.response.use(onResponseFulfilled, onResponseRejected)

import { useClientStore } from "@/hooks/stores/use-client-store"

export function getTxUrl(hash: string) {
  const { chain } = useClientStore.getState()
  const { blockExplorers } = chain
  if (blockExplorers) {
    const host = blockExplorers.default.url
    const url = new URL(host)
    const pathname = ["tx", hash]
    url.pathname += pathname.join("/")
    return url.toString()
  }
  return ""
}

import { FC } from "react"

import { useSentryChain } from "@/hooks/core/use-sentry-chain"
import { useSentryClient } from "@/hooks/core/use-sentry-client"
import { useSentryTheme } from "@/hooks/core/use-sentry-theme"
import { useSentryVersion } from "@/hooks/core/use-sentry-version"

interface GlobalHooksProps {}

const GlobalHooks: FC<GlobalHooksProps> = () => {
  //   useSentryAuth()
  useSentryClient()
  useSentryTheme()
  useSentryChain()
  useSentryVersion()

  return null
}

export default GlobalHooks

import useSWR from "swr"
import { useShallow } from "zustand/react/shallow"

import { VERSION } from "@/configs/app.config"
import { useAppSettingsStore } from "@/hooks/stores/use-app-settings-store"
import { sleep } from "@/utils/promise"
import { useMounted } from "../render/use-mounted"

export const useSentryVersion = () => {
  const { version: storedVersion, setVersion } = useAppSettingsStore(
    useShallow((state) => ({ version: state.version, setVersion: state.setVersion })),
  )

  const isMounted = useMounted()

  useSWR(["sentry-version", storedVersion, isMounted, VERSION], async () => {
    if (!isMounted) return

    if (storedVersion !== VERSION) {
      await sleep(100)

      localStorage.clear()
      sessionStorage.clear()
      setVersion(VERSION)
      // Reload Page
      window.location.reload()
    }
  })
}

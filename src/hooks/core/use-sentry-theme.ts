import { useAppSettingsStore } from "@/hooks/stores/use-app-settings-store"

import useSWR from "swr"

export const useSentryTheme = () => {
  const { theme, toggleTheme } = useAppSettingsStore()

  useSWR(["sentry-theme", theme], () => {
    document.documentElement.setAttribute("data-theme", theme)
  })

  // Settings theme by system device

  // useSWR(["system sentry theme"], () => {
  //   const matchMedia = window.matchMedia("(prefers-color-scheme: dark)")

  //   matchMedia.addEventListener("change", (event) => {
  //     toggleTheme(event.matches ? "dark" : "light")
  //   })
  // })
}

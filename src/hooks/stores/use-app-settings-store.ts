import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"
import { immer } from "zustand/middleware/immer"

import { DEFAULT_THEME } from "@/configs/app.config"
import { storageKeyConfigs, storageKeys, storagePrefix } from "@/configs/storage.config"
import { Theme } from "@/types/core.type"

export const updateDataTheme = (theme: Theme) => {
  document.documentElement.setAttribute("data-theme", theme)
}

export interface AppSettingsStoreProps {
  version: string
  theme: Theme
  isShowInfoDev: boolean
  setIsShowInfoDev(isShowInfoDev: boolean): void

  setVersion(version: string): void
  toggleTheme(theme?: Theme): void
}

export const useAppSettingsStore = create<AppSettingsStoreProps>()(
  devtools(
    persist(
      immer((set) => {
        return {
          version: "0.0",
          theme: DEFAULT_THEME,
          isShowInfoDev: true,

          setVersion(version) {
            set(function (state) {
              state.version = version
            })
          },

          toggleTheme(theme) {
            set(function (state) {
              const autoSelected = state.theme === "dark" ? "light" : "dark"
              const color = theme || autoSelected
              document.documentElement.setAttribute("data-theme", color)

              state.theme = color
            })
          },

          setIsShowInfoDev(isShowInfoDev) {
            set({ isShowInfoDev })
          },
        }
      }),
      {
        name: storageKeys.appSettings,
      },
    ),
    {
      name: storagePrefix,
      store: storageKeyConfigs.appSettings,
    },
  ),
)

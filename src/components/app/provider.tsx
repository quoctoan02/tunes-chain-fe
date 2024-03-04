import { QueryClientProvider } from "@tanstack/react-query"
import { FC, ReactNode } from "react"
import { I18nextProvider } from "react-i18next"
import { SWRConfig } from "swr"
import { WagmiConfig } from "wagmi"

import { SHOW_OPTIONS_DEV } from "@/configs/env.config"
import { TailwindClasses } from "@/configs/generate-tailwind-classes"
import i18next from "@/configs/languages/i18next.config"
import { queryClient } from "@/libs/react-query"
import { swrConfig } from "@/libs/swr"
import { wagmiConfig } from "@/libs/wagmi"
import { ComingSoonPageWrapper } from "../layouts/coming-soon-page-wrapper"
import AntProvider from "./ant-provider"
import GlobalHooks from "./global-hooks"
import { GlobalModal } from "./global-modal"
import { OptionsDev } from "./options-dev"
import { ToastContainer } from "./toast-container"

interface ProviderProps {
  children: ReactNode
}

const Provider: FC<ProviderProps> = ({ children }) => {
  return (
    <WagmiConfig config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <SWRConfig value={swrConfig}>
          <ToastContainer />
          <I18nextProvider i18n={i18next} defaultNS={"translation"}>
            <AntProvider>
              <GlobalHooks />
              <TailwindClasses />

              <GlobalModal />

              <ComingSoonPageWrapper>{children}</ComingSoonPageWrapper>

              {SHOW_OPTIONS_DEV && <OptionsDev />}
            </AntProvider>
          </I18nextProvider>
        </SWRConfig>
      </QueryClientProvider>
    </WagmiConfig>
  )
}

export default Provider

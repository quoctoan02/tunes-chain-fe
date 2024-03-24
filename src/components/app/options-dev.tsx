import { FC } from "react"
import { AiOutlineClear } from "react-icons/ai"
import { HiChevronDoubleDown } from "react-icons/hi"
import { useSearchParams } from "react-router-dom"

import { VERSION } from "@/configs/app.config"
import { ENV } from "@/configs/env.config"
import { useAppSettingsStore } from "@/hooks/stores/use-app-settings-store"
import { Button } from "@/libs/ui/button-demo"
import { cn } from "@/utils/classnames"
import { sleep } from "@/utils/promise"
import { useShallow } from "zustand/react/shallow"

interface OptionsDevProps {}

const IS_CLEAR_ALL_PARAMS = true

export const OptionsDev: FC<OptionsDevProps> = () => {
  const { isShowInfoDev, setIsShowInfoDev } = useAppSettingsStore(
    useShallow((state) => ({ isShowInfoDev: state.isShowInfoDev, setIsShowInfoDev: state.setIsShowInfoDev })),
  )

  const [, setSearchParams] = useSearchParams()
  const handleClearCache = async () => {
    localStorage.clear()
    sessionStorage.clear()

    if (IS_CLEAR_ALL_PARAMS) {
      setSearchParams("")
    }

    await sleep(500)
    window.location.reload()
  }

  return (
    <div>
      <div
        className={cn(
          "max-retina:hidden fixed bottom-4 right-4 z-20 transition-all",
          isShowInfoDev ? "translate-y-0" : "translate-y-[90%]",
        )}
      >
        <button
          className={cn(
            "hover:text-primary-500 ml-auto flex animate-pulse cursor-pointer items-center justify-end gap-2 py-0.5  text-sm",
          )}
          onClick={() => setIsShowInfoDev(!isShowInfoDev)}
        >
          {isShowInfoDev ? "Hide" : "Show"}
          <HiChevronDoubleDown className={cn("transition-all", !isShowInfoDev && "rotate-180")} />
        </button>

        <div className={cn("flex flex-col gap-3 transition-all duration-500", !isShowInfoDev && "scale-0 opacity-0")}>
          <div className="animate-in zoom-in w-full space-y-1 duration-500">
            <p className="rounded-md border bg-orange-500 py-0.5 text-center text-sm text-white">
              Env: <span className="font-medium">{ENV}</span>
            </p>
            <p className="bg-success-500 flex items-center justify-center gap-1 rounded-md border py-0.5 text-sm text-white">
              Version: <span className="font-medium ">{VERSION}</span>
            </p>
          </div>
          <Button
            type="primary"
            className="animate-bounce"
            size="small"
            async
            icon={<AiOutlineClear className="text-lg" />}
            onClick={handleClearCache}
          >
            Clear Cache
          </Button>
        </div>
      </div>
    </div>
  )
}

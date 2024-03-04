import { FC } from "react"
import { AiFillCheckCircle, AiFillInfoCircle } from "react-icons/ai"
import { BiErrorCircle } from "react-icons/bi"

import { cn } from "@/utils/classnames"
export interface ToastComponentProps {
  message: string
  type: "success" | "error" | "info"
  title?: string
}

const toastIcon = {
  success: <AiFillCheckCircle className="text-success-500 text-4xl" />,
  info: <AiFillInfoCircle className="text-4xl text-sky-500" />,
  error: <BiErrorCircle className="text-error-500 text-4xl" />,
}

export const ToastComponent: FC<ToastComponentProps> = ({ title, message, type }) => {
  const _title = title || type

  return (
    <div className="flex items-center gap-4">
      {toastIcon[type]}
      <div className="">
        <p
          className={cn(
            "font-semibold capitalize sm:text-xl",
            type === "success" && "text-success-500",
            type === "error" && "text-error-500",
            type === "info" && "text-sky-500",
          )}
        >
          {_title}
        </p>
        <p className="text-sm font-medium">{message}</p>
      </div>
      <p
        className={cn(
          " absolute bottom-0 left-0 top-0 h-full w-2",
          type === "success" && "bg-success-500",
          type === "error" && "bg-error-500",
          type === "info" && "bg-sky-500",
        )}
      ></p>
    </div>
  )
}

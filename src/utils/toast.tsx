import { ToastOptions, toast } from "react-toastify"
import { BaseError } from "viem"

import { ToastComponent, ToastComponentProps } from "@/libs/ui/toast-component"

export function toastWeb3Error(err: BaseError, defaultMsg: string, options?: ToastOptions) {
  if (process.env.NODE_ENV === "development") {
    console.log("🐞 Contract call ----- ", err)
  }
  toast.error(err.shortMessage || err?.message || defaultMsg, options)
}

export const toastContent = ({ message, type, title }: ToastComponentProps, options?: ToastOptions) => {
  return toast(<ToastComponent type={type} message={message} title={title} />, {
    closeButton: true,
    hideProgressBar: false,
    ...options,
  })
}

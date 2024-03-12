export const openLinkInNewTab = (url?: string) => {
  if (!url) return

  window.open(url, "_blank", "noopener noreferrer")
}

import { toast } from "react-toastify"

export const getErrorResponse = (error: any) => {
  return error?.response?.data?.error_msg || error?.response?.data?.error_code || error?.message
}

export const toastErrorResponse = (error: any) => {
  toast.error(getErrorResponse(error))
}

import { Button } from "@/libs/ui/button-demo"
import { toastContent } from "@/utils/toast"
import { FC } from "react"
import { toast } from "react-toastify"

interface ToastExampleProps {}

export const ToastExample: FC<ToastExampleProps> = () => {
  return (
    <div className="space-y-2">
      <h2 className="">Toast Example</h2>
      <div className="flex flex-wrap items-center gap-4">
        <Button
          className="bg-success-500 hover:!border-success-500 enabled:hover:!text-white"
          onClick={() => toast.success("Successfully")}
        >
          Toast Success
        </Button>
        <Button
          className="bg-info-500 hover:!border-info-500 enabled:hover:!text-white"
          onClick={() => toast.info("Information")}
        >
          Toast Info
        </Button>
        <Button
          className="bg-warning-500 hover:!border-warning-500 enabled:hover:!text-white"
          onClick={() => toast.warn("Warning")}
        >
          Toast Warning
        </Button>
        <Button type="danger" onClick={() => toast.error("Failed")}>
          Toast Error
        </Button>
        <Button onClick={() => toastContent({ message: "This is custom toastify", type: "success" })}>
          Custom Toast
        </Button>
        <Button type="dashed" onClick={() => toast.loading("Action is processing...")}>
          Toast Pending
        </Button>
        <Button type="default" onClick={() => toast.dismiss()}>
          Toast dissmiss
        </Button>
      </div>
    </div>
  )
}

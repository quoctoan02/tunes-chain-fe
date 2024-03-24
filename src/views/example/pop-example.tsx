import { Button } from "@/libs/ui/button-demo"
import { popError, popPending, popPendingConfirm, popSuccess } from "@/utils/pop"
import { FC } from "react"

interface PopExampleProps {}

export const PopExample: FC<PopExampleProps> = () => {
  return (
    <div className="space-y-2">
      <h2 className="">Popper Example</h2>
      <div className="flex flex-wrap items-center gap-4">
        <Button type="default" onClick={() => popPendingConfirm()}>
          Pop Pending Confirm
        </Button>
        <Button type="dashed" onClick={() => popPending("Processing...")}>
          Pop Pending
        </Button>
        <Button type="primary" onClick={() => popSuccess("Successfully")}>
          Pop Success
        </Button>
        <Button type="danger" onClick={() => popError("Something went wrong!")}>
          Pop Error
        </Button>
      </div>
    </div>
  )
}

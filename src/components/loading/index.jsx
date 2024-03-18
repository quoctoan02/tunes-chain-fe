import { cn } from "@/utils/classnames"
import LoadingSVG from "./LoadingSVG"

export const Loading = ({ className = "text-primary-500", width = 80, height = 80 }) => {
  return (
    <div className="center-all">
      <LoadingSVG className={cn(className)} width={width} height={height} />
    </div>
  )
}

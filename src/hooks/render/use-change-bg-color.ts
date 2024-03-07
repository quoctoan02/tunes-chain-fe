import { useEffect } from "react"
import useBgColorStore from "../stores/use-bg-color-store"

export const useChangeBgColor = () => {
  const { color, setColor } = useBgColorStore()
  console.log("🚀 ~ useChangeBgColor ~ color:", color)
  useEffect(() => {
    if (!color) {
      setColor()
    }
    console.log("mount")
    return () => {
      if (color) setColor(null)
      console.log("unmount")
    }
  }, [])

  return useChangeBgColor
}

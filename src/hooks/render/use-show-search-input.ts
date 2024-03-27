import { useEffect } from "react"
import useSearchInputStore from "./use-search-input-store"

export const useShowSearchInput = () => {
  const { onShow, onHide, isShow } = useSearchInputStore()
  useEffect(() => {
    if (!isShow) {
      onShow()
    }

    return () => {
      if (isShow) onHide()
    }
  }, [isShow])

  return useShowSearchInput
}

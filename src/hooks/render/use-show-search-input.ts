import { useEffect } from "react"
import useSearchInputStore from "../stores/use-search-input"

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
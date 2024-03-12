import { create } from "zustand"

interface searchInputStore {
  isShow: boolean
  onShow: () => void
  onHide: () => void
}

const useSearchInputStore = create<searchInputStore>((set) => ({
  isShow: false,
  onShow: () => set({ isShow: true }),
  onHide: () => set({ isShow: false }),
}))

export default useSearchInputStore

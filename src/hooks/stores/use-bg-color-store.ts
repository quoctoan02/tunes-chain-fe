import { pickRandom } from "@/utils/pick-random"
import { create } from "zustand"

export const colors = [
  "from-emerald-800",
  "from-neutral-800",
  "from-green-800",
  "from-red-800",
  "from-yellow-800",
  "from-pink-800",
  "from-purple-800",
  "from-violet-800",
  "from-fuchsia-800",
  "from-rose-800",
  "from-indigo-800",
  "from-blue-800",
  "from-rose-800",
  "from-indigo-800",
  "from-blue-800",
  "from-cyan-800",
  "from-teal-800",
  "from-sky-800",
  "from-orange-800",
  "from-amber-800",
  "from-stone-800",
  "from-zinc-800",
  "from-gray-800",
  "from-lime-800",
]

interface bgColorStore {
  color: string | null
  setColor: (selectedColor?: string | null) => void
}

const useBgColorStore = create<bgColorStore>((set) => ({
  color: null,
  setColor: (selectedColor) => set({ color: selectedColor || pickRandom(colors) }),
}))

export default useBgColorStore

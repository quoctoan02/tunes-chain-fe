import { Song } from "@/types/song.type"
import { create } from "zustand"

interface playerStore {
  selectedSong: Song | null
  isPlaying: boolean
  volume: number
  progressTime: number
  toggleIsPlaying: () => void
  setCurrentPlayingSong: (song: Song) => void
  changeVolume: (volume: number) => void
  changeProgressTime: (progressTime: number) => void
}

const usePlayerStore = create<playerStore>((set) => ({
  selectedSong: null,
  isPlaying: false,
  volume: 50,
  progressTime: 0,
  toggleIsPlaying: () => set((state) => ({ isPlaying: !state.isPlaying })),
  setCurrentPlayingSong: (song) => set({ selectedSong: song }),
  changeVolume: (volume) => set({ volume }),
  changeProgressTime: (progressTime) => set({ progressTime }),
}))

export default usePlayerStore

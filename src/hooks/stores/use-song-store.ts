import { Song } from "@/types/song.type"
import { create } from "zustand"

interface playerStore {
  selectedSong: Song | null
  isPlaying: boolean
  volume: number
  progressTime: number
  setIsPlaying: (isPlaying: boolean) => void
  setCurrentPlayingSong: (song: Song) => void
  setVolume: (volume: number) => void
  setProgressTime: (progressTime: number) => void
}

const usePlayerStore = create<playerStore>((set) => ({
  selectedSong: null,
  isPlaying: false,
  volume: 50,
  progressTime: 0,
  // toggleIsPlaying: () => set((state) => ({ isPlaying: !state.isPlaying })),
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  setCurrentPlayingSong: (song) => set({ selectedSong: song }),
  setVolume: (volume) => set({ volume }),
  setProgressTime: (progressTime) => set({ progressTime }),
}))

export default usePlayerStore

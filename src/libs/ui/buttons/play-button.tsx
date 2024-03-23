import React, { useState } from "react"
import { FaPause, FaPlay } from "react-icons/fa"
import { twMerge } from "tailwind-merge"

interface PlayButtonProps {
  className?: string
  isHide?: boolean
  size?: number
  onClick?: (isPlaying: boolean) => void
}
const PlayButton: React.FC<PlayButtonProps> = ({ className, isHide = true, size = 15, onClick }) => {
  const [isPlaying, setIsplaying] = useState(false)
  const handleOnPlay = () => {
    setIsplaying(!isPlaying)
    // onClick(!isPlaying)
  }
  return (
    <button
      className={twMerge(
        `
      translate 
        flex 
        items-center
        justify-center 
        rounded-full 
        bg-green-500 
        p-4 
        drop-shadow-md 
        transition
        hover:scale-110 
        `,
        isHide && "translate-y-1/4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100",
        className,
      )}
      onClick={handleOnPlay}
    >
      {isPlaying ? <FaPause className="text-black" size={size} /> : <FaPlay className="text-black" size={size} />}
    </button>
  )
}

export default PlayButton

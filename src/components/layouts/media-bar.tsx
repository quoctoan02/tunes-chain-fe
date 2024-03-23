import LikeButton from "@/libs/ui/buttons/like-button"
import PlayButton from "@/libs/ui/buttons/play-button"
import { MediaType } from "@/types/media.type"
import React from "react"
interface MediaBarProps {
  className?: string
  type?: MediaType
  onPlaying?: () => void
  onLike?: () => void
}
const MediaBar: React.FC<MediaBarProps> = ({ className, type }) => {
  return (
    <div className="flex w-full gap-x-8 pb-2 pt-6">
      <PlayButton isHide={false} className="p-5" size={20} />
      <LikeButton isHide={false} size={36} className="" />
    </div>
  )
}

export default MediaBar

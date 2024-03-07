"use client"

import PlayButton from "@/libs/ui/buttons/play-button"
import { IMediaItem } from "@/types/media.type"
import { Song } from "@/types/song.type"
// import PlayButton from "./PlayButton";

interface MediaItemProps {
  data: Partial<IMediaItem>
  onClick?: (id: string) => void
}

const MediaItem: React.FC<MediaItemProps> = ({ data, onClick }) => {
  // const imagePath = useLoadImage(data);
  const imagePath = ""
  return (
    <div
      // onClick={() => onClick(data.id)}
      className="
        group 
        relative 
        flex 
        cursor-pointer 
        flex-col 
        items-center 
        justify-center 
        gap-x-4 
        overflow-hidden 
        rounded-md 
        bg-neutral-400/5 
        p-3 
        transition 
        hover:bg-neutral-400/10
      "
    >
      <div
        className="
          relative 
          aspect-square 
          h-full
          w-full 
          overflow-hidden 
          rounded-md
        "
      >
        <img
          className="absolute inset-0 h-full w-full object-cover "
          src={imagePath || "/images/default/liked.png"}
          alt="Image"
        />
      </div>
      <div className="flex w-full flex-col items-start gap-y-1 pt-4">
        <p className="w-full truncate font-semibold">{data.title}</p>
        <p
          className="
            w-full 
            truncate 
            pb-4 
            text-sm 
            text-neutral-400
          "
        >
          {data.artist}
        </p>
      </div>
      <div
        className="
          absolute 
          bottom-24 
          right-5
        "
      >
        <PlayButton />
      </div>
    </div>
  )
}

export default MediaItem

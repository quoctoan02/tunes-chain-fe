"use client"

import PlayButton from "@/libs/ui/buttons/play-button"
import { Song } from "@/types/song.type"
import { convertDuration } from "@/utils/convert-duration"
// import PlayButton from "./PlayButton";

interface SongItemProps {
  data: Partial<Song>
  onClick?: (id: string) => void
}

const SongItem: React.FC<SongItemProps> = ({ data: { id = 0, album_id, image, title }, onClick }) => {
  // const imagePath = useLoadImage(data);
  const imagePath = ""
  return (
    <div
      // onClick={() => onClick(data.id)}
      className="grid cursor-pointer grid-cols-2 rounded-lg px-5 py-2 text-neutral-500 hover:bg-neutral-400/10"
    >
      <div className="flex items-center space-x-4">
        <p>{id + 1}</p>
        <div
          className="
          relative
          aspect-square 
          min-h-[48px]
          min-w-[48px]
          overflow-hidden 
          rounded-sm
        "
        >
          <img
            className="absolute inset-0 h-full w-full object-cover "
            src={image || "/images/default/liked.png"}
            alt="Image"
          />
        </div>
        <div>
          <p className="w-36 truncate text-white lg:w-72"> {title}</p>
          <p className="w-36 truncate text-white lg:w-72"> {title}</p>
        </div>
        <p className="w-40"> {title}</p>
      </div>
      <div className="ml-auto flex items-center justify-between md:ml-0">
        <p className="hidden w-40 md:block">{title}</p>
        <p>{convertDuration(100 as number)}</p>
      </div>
    </div>
  )
}

export default SongItem

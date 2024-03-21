"use client"

import LikeButton from "@/libs/ui/buttons/like-button"
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
      className="group relative  flex w-full cursor-pointer items-center justify-between space-x-2 overflow-hidden rounded-lg px-5 py-2 text-neutral-500 transition hover:bg-neutral-400/10 lg:space-x-4"
    >
      <div className="lg:w-100 w-90 flex items-center gap-x-4 lg:gap-x-8">
        <p>{id + 1}</p>
        {/* <div
          className="
          absolute 
          bottom-24 
          left-5
        "
        >
          <PlayButton />
        </div> */}
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
        <div className="flex h-full flex-col justify-center lg:w-72">
          <p className="text-base  text-white"> {title}</p>
          <p className="text-sm  text-neutral-500"> {title}</p>
        </div>
      </div>
      <p className="w-40 truncate">{title}</p>
      <div className="flex justify-around gap-x-4 pl-4">
        <LikeButton songId={id} />
        <p className="w-12 truncate">{convertDuration(100 as number)}</p>
      </div>
      {/* <div className="ml-auto flex items-center justify-between md:ml-0">
        <p className="hidden w-40 md:block">{title}</p>
        <p className="w-12">{convertDuration(100 as number)}</p>
      </div> */}
    </div>
  )
}

export default SongItem

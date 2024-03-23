"use client"

import PlayButton from "@/libs/ui/buttons/play-button"
import Image from "@/libs/ui/image/image"
import { IMediaItem, MediaType } from "@/types/media.type"
import { Song } from "@/types/song.type"
// import PlayButton from "./PlayButton";

interface MediaItemProps {
  data: Partial<IMediaItem>
  type?: MediaType
  onClick?: (id: string) => void
}

const MediaItem: React.FC<MediaItemProps> = ({ data, onClick, type = MediaType.Album }) => {
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
        p-3 
        transition 
        hover:bg-neutral-400/10
      "
      //bg-neutral-400/5
    >
      <Image
        className={type === MediaType.Artist ? "rounded-full" : ""}
        src={type === MediaType.Artist ? data.avatar : data.image}
      />
      {/* <div
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
      </div> */}
      <div className="flex w-full flex-col items-start gap-y-1 pt-4">
        <p className="w-full truncate font-semibold">{data.name}</p>
        <p
          className="
            w-full 
            truncate 
            pb-4 
            text-sm 
            text-neutral-400
          "
        >
          {type === MediaType.Artist ? "Artist" : data.artist_name}
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

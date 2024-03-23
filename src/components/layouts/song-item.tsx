"use client"

import LikeButton from "@/libs/ui/buttons/like-button"
import MoreButton from "@/libs/ui/buttons/more-button"
import PlayButton from "@/libs/ui/buttons/play-button"
import { MediaType } from "@/types/media.type"
import { Song } from "@/types/song.type"
import { convertDuration } from "@/utils/convert-duration"
import { BsThreeDots } from "react-icons/bs"
// import PlayButton from "./PlayButton";

interface SongItemProps {
  data: Partial<Song>
  listType?: MediaType
  onClick?: (id: string) => void
}

const SongItem: React.FC<SongItemProps> = ({
  data: { id = 0, album_id, image, name, artists },
  listType = MediaType.Album,
  onClick,
}) => {
  // const imagePath = useLoadImage(data);
  const imagePath = ""
  return (
    <div
      // onClick={() => onClick(data.id)}
      className="group relative  flex w-full cursor-pointer items-center justify-between space-x-2 overflow-hidden rounded-lg px-5 py-1.5 text-neutral-500 transition hover:bg-neutral-400/10 lg:space-x-3"
    >
      <div className="flex items-center gap-x-4 lg:gap-x-8">
        <p className="w-6">{id + 1}</p>
        <div
          className="
          absolute 
          bottom-24 
          left-5
        "
        >
          <PlayButton />
        </div>
        <div className="flex w-80 items-center gap-x-3 lg:w-96">
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
            <p className="text-base  text-white">{name}</p>
            {listType === MediaType.Album && <p className="text-sm  text-neutral-500">{artists && artists[0].name}</p>}
          </div>
        </div>
      </div>
      <p className="w-48 truncate">{name}</p>
      <p className="w-28 truncate">1,000,000</p>
      <div className="flex w-28 items-center justify-between">
        <LikeButton songId={id} />
        <p className="truncate">{convertDuration(100 as number)}</p>
        <MoreButton />
      </div>
      {/* <div className="ml-auto flex items-center justify-between md:ml-0">
        <p className="hidden w-40 md:block">{title}</p>
        <p className="w-12">{convertDuration(100 as number)}</p>
      </div> */}
    </div>
  )
}

export default SongItem

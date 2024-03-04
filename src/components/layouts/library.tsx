import {  MediaType } from "@/types/library.type"
import { useMemo, useState } from "react"
import { AiOutlinePlus } from "react-icons/ai"
import { TbPlaylist } from "react-icons/tb"
import { twMerge } from "tailwind-merge"
import MediaItem from "./library-item"
interface LibraryProps {
  // items: MediaItem[]
}
const Library = () => {
  const [isActiveType, setIsActiveType] = useState<MediaType>(MediaType.Playlist)
  const types: MediaType[] = useMemo(
    () => [MediaType.Playlist, MediaType.Artist, MediaType.Albums],
    [],
  )

  const handleChooseFilter = (type: MediaType) => {
    setIsActiveType(type)
  }
  return (
    <div className="flex flex-col">
      <div className="flex justify-between px-5 py-4">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist className="text-neutral-400" size={26} />
          <p className="text-md font-medium text-neutral-400">Your Library</p>
        </div>
        <AiOutlinePlus
          // onClick={onClick}
          size={20}
          className="
            cursor-pointer 
            text-neutral-400 
            transition 
            hover:text-white
          "
        />
      </div>
      <div className="flex gap-x-2 pb-2">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => handleChooseFilter(type)}
            className={twMerge(
              "rounded-[9999px] bg-neutral-800 px-4 py-2 text-md font-medium text-white",
              isActiveType === type ? " bg-white text-black" : "hover:bg-neutral-700",
            )}
          >
            {type}
          </button>
        ))}
      </div>
      <div className="mt-4 flex flex-col gap-y-2 px-3">
        <MediaItem data={{ title: "Liked songs", type: MediaType.LikedSongs, creator: "quoc toan" }}/>
      </div>
    </div>
  )
}

export default Library

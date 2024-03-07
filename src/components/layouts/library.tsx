import { MediaType } from "@/types/media.type"
import { useMemo, useState } from "react"
import { AiOutlinePlus } from "react-icons/ai"
import { TbPlaylist } from "react-icons/tb"
import { twMerge } from "tailwind-merge"
import MediaItem from "./library-item"
import LibraryItem from "./library-item"
interface LibraryProps {
  // items: MediaItem[]
}
const Library = () => {
  const [isActiveType, setIsActiveType] = useState<MediaType>(MediaType.Playlist)
  const types: MediaType[] = useMemo(() => [MediaType.Playlist, MediaType.Artist, MediaType.Albums], [])

  const handleChooseFilter = (type: MediaType) => {
    setIsActiveType(type)
  }
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between py-4">
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
      <div className="flex gap-x-2 py-2">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => handleChooseFilter(type)}
            className={twMerge(
              "text-md rounded-[9999px] bg-neutral-800 px-4 py-2 font-medium text-white",
              isActiveType === type ? " bg-white text-black" : "hover:bg-neutral-700",
            )}
          >
            {type}
          </button>
        ))}
      </div>
      <div className="mt-4 flex flex-col gap-y-1">
        <LibraryItem data={{ title: "Liked songs", type: MediaType.LikedSongs, creator: "quoc toan" }} />
        <LibraryItem data={{ title: "Nho em", type: MediaType.Playlist, artist: "tran hang", id: 1 }} />
      </div>
    </div>
  )
}

export default Library

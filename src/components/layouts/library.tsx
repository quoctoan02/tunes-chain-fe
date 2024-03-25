import { IMediaItem, MediaType } from "@/types/media.type"
import { useEffect, useMemo, useState } from "react"
import { AiOutlinePlus } from "react-icons/ai"
import { TbPlaylist } from "react-icons/tb"
import { twMerge } from "tailwind-merge"
import MediaItem from "./library-item"
import LibraryItem from "./library-item"
import { useNavigate } from "react-router-dom"
import { Service } from "@/services/app.service"
interface LibraryProps {
  // items: MediaItem[]
}
const Library = () => {
  const [isActiveType, setIsActiveType] = useState<MediaType | null>(null)
  const [listMedia, setListMedia] = useState<IMediaItem[]>([])

  const types: MediaType[] = useMemo(() => [MediaType.Artist, MediaType.Album], [])
  const navigate = useNavigate()

  useEffect(() => {
    listFavoriteMedia()
  }, [])

  const listFavoriteMedia = async (type?: string) => {
    const res = await Service.userLibrary.listFavorite(type)
    console.log("🚀 ~ listAllAlbum ~ res:", res)
    if (res?.length) {
      setListMedia(res)
    }
  }
  const handleChooseFilter = (type: MediaType) => {
    if (isActiveType === type) {
      listFavoriteMedia()

      setIsActiveType(null)
    } else {
      listFavoriteMedia(type)

      setIsActiveType(type)
    }
  }
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between px-5 py-4">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist className="text-neutral-400" size={26} />
          <p className="text-md font-medium text-neutral-400">Your Library</p>
        </div>
        {/* <AiOutlinePlus
          // onClick={onClick}
          size={20}
          className="
            cursor-pointer 
            text-neutral-400 
            transition 
            hover:text-white
          "
        /> */}
      </div>
      <div className="grid grid-cols-2 gap-4 px-5 py-2">
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
      <div className="mt-4 h-full flex-1 flex-col gap-y-1 overflow-y-auto px-3">
        <LibraryItem key={1} data={{ name: "Liked songs" }} type={MediaType.LikedSongs} />
        {/* <LibraryItem data={{ title: "Nho em", type: MediaType.Playlist, artist: "tran hang", id: 1 }} /> */}
        {listMedia && listMedia.map((media) => <LibraryItem data={media} type={media.type} />)}
      </div>
    </div>
  )
}

export default Library

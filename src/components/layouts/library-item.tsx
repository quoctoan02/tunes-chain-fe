import Image from "@/libs/ui/image/image"
import { routePath } from "@/routes/routes"
import { IMediaItem, MediaType } from "@/types/media.type"
import { lowerCase } from "lodash"
import { useNavigate } from "react-router-dom"

interface LibraryItemProps {
  data: Partial<IMediaItem>
  onClick?: ({ id, type }: IMediaItem) => void
  type?: MediaType
}

const LibraryItem: React.FC<LibraryItemProps> = ({ data, onClick, type }) => {
  const navigate = useNavigate()
  const handleChooseItem = () => {
    navigate(
      data.type === MediaType.LikedSongs
        ? routePath.likedSongs
        : data.type === MediaType.Artist
        ? `/artist-info/${data.id}`
        : `/${lowerCase(type)}/${data.id}`,
    )
  }
  return (
    <div
      className="flex w-full cursor-pointer items-center gap-x-3 rounded-sm px-2 py-1.5 hover:bg-neutral-800/50"
      onClick={handleChooseItem}
    >
      <Image
        src={type === MediaType.Artist ? data.avatar : data.image}
        className={`h-[52px] min-h-[52px] w-[52px] min-w-[52px] ${type === MediaType.Artist ? "rounded-full" : ""}`}
      />
      {/* <div className="relative min-h-[52px] min-w-[52px] overflow-hidden rounded-md">
        <img src="/images/default/liked.png" className="absolute inset-0 h-full w-full object-cover " />
      </div> */}
      <div className="flex flex-col gap-y-1 overflow-hidden">
        <p className="truncate text-white">{data.name}</p>
        <p className="truncate text-sm text-neutral-400">
          {type === MediaType.Artist
            ? type
            : type === MediaType.Song
            ? data.artist_name
            : type + " • " + data.artist_name}
        </p>
      </div>
    </div>
  )
}

export default LibraryItem

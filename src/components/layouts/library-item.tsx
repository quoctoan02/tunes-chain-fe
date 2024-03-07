import { routePath } from "@/routes/routes"
import { IMediaItem, MediaType } from "@/types/media.type"
import { useNavigate } from "react-router-dom"

interface LibraryItemProps {
  data: Partial<IMediaItem>
  onClick?: ({ id, type }: IMediaItem) => void
}

const LibraryItem: React.FC<LibraryItemProps> = ({ data, onClick }) => {
  const navigate = useNavigate()
  const handleChooseItem = () => {
    navigate(data.type === MediaType.LikedSongs ? routePath.likedSongs : `/playlist/${data.id}`)
  }
  return (
    <div
      className="flex w-full cursor-pointer items-center gap-x-3 rounded-sm py-2 hover:bg-neutral-800/50"
      onClick={handleChooseItem}
    >
      <div className="relative min-h-[52px] min-w-[52px] overflow-hidden rounded-md">
        <img src="/images/default/liked.png" className="absolute inset-0 h-full w-full object-cover " />
      </div>
      <div className="flex flex-col gap-y-1 overflow-hidden">
        <p className="truncate text-white">{data.title}</p>
        <p className="truncate text-sm text-neutral-400">
          {data?.type} • {data?.creator || data.artist}
        </p>
      </div>
    </div>
  )
}

export default LibraryItem

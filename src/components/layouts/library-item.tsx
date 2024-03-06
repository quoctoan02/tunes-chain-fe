import { routePath } from "@/routes/routes"
import { IMediaItem, MediaType } from "@/types/library.type"
import { useNavigate } from "react-router-dom"

interface MediaItemProps {
  data: IMediaItem
  onClick?: ({ id, type }: IMediaItem) => void
}

const MediaItem: React.FC<MediaItemProps> = ({ data, onClick }) => {
  const navigate = useNavigate()
  const handleChooseItem = () => {
    navigate(routePath.likedSongs)
  }
  return (
    <div
      className="flex w-full cursor-pointer items-center gap-x-3 rounded-sm p-2 hover:bg-neutral-800/50"
      onClick={handleChooseItem}
    >
      <div className="relative min-h-[52px] min-w-[52px] overflow-hidden rounded-md">
        <img src="/images/default/liked.png" className="absolute inset-0 h-full w-full object-cover " />
      </div>
      <div className="flex flex-col gap-y-1 overflow-hidden">
        <p className="truncate text-white">{data.title}</p>
        <p className="truncate text-sm text-neutral-400">
          {data?.type} • {data?.creator}
        </p>
      </div>
    </div>
  )
}

export default MediaItem

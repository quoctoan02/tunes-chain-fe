"use client"

import PlayButton from "@/libs/ui/buttons/play-button"
import { Song } from "@/types/song.type"
// import PlayButton from "./PlayButton";

interface SongItemProps {
  data: Partial<Song>
  onClick?: (id: string) => void
}

const SongItem: React.FC<SongItemProps> = ({ data, onClick }) => {
  // const imagePath = useLoadImage(data);
  const imagePath = ""
  return (
    <div
      // onClick={() => onClick(data.id)}
      className="grid cursor-pointer grid-cols-2 rounded-lg px-5 py-4 text-neutral-500 hover:bg-neutral-900"
    >
      <div className="flex items-center space-x-4">
        {/* <p>{itemIndex + 1}</p>
        <div>
          <Image src={item.track?.album?.images[0]?.url || ""} alt="track cover" height={"40px"} width={"40px"} />
        </div>
        <p className="w-36 truncate text-white lg:w-72"> {item.track?.name}</p>
        <p className="w-40"> {item.track?.artists[0].name}</p>
      </div>
      <div className="ml-auto flex items-center justify-between md:ml-0">
        <p className="hidden w-40 md:block">{item.track?.album.name}</p>
        <p>{convertDuration(item.track?.duration_ms as number)}</p> */}
      </div>
    </div>
  )
}

export default SongItem

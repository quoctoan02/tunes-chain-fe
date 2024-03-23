"use client"

import { Song } from "@/types/song.type"
import SongItem from "./song-item"
import { HiOutlineClock } from "react-icons/hi2"
import PlayButton from "@/libs/ui/buttons/play-button"
import LikeButton from "@/libs/ui/buttons/like-button"
import MediaBar from "./media-bar"

interface ListSongProps {
  songs: Partial<Song>[]
}

const ListSong: React.FC<ListSongProps> = ({ songs }) => {
  // const onPlay = useOnPlay(songs);

  if (songs.length === 0) {
    return <div className="mt-4 text-neutral-400">No songs available.</div>
  }

  return (
    <div className="flex flex-col space-y-1 pb-28">
      <div
        // onClick={() => onClick(data.id)}
        className="group relative  flex w-full items-center justify-between space-x-2 overflow-hidden rounded-lg px-5 py-2 text-neutral-500 transition lg:space-x-3"
      >
        <div className="flex items-center gap-x-4 lg:gap-x-8">
          <div className="w-6">#</div>
          <p className="w-80 lg:w-96">Title</p>
        </div>
        <p className="w-48 truncate">Album</p>
        <p className="w-28 truncate">Listens</p>
        <div className="flex w-28 justify-center">
          <HiOutlineClock size={22} />

          {/* <div className="ml-auto flex items-center justify-between md:ml-0">
        <p className="hidden w-40 md:block">{title}</p>
        <p className="w-12">{convertDuration(100 as number)}</p>
      </div> */}
        </div>
      </div>
      {songs.map((item) => (
        <SongItem
          //     onClick={(id: string) => onPlay(id)}
          key={item.id}
          data={item}
        />
      ))}
    </div>
  )
}

export default ListSong

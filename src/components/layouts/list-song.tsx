"use client"

import { Song } from "@/types/song.type"
import SongItem from "./song-item"
import { HiOutlineClock } from "react-icons/hi2"

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
      {/* <table className="table-fixed">
        <thead>
          <tr className="text-left hover:border-collapse">
            <th>Song</th>
            <th>Artist</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
          </tr>
          <tr>
            <td>Witchy Woman</td>
            <td>The Eagles</td>
            <td>1972</td>
          </tr>
          <tr>
            <td>Shining Star</td>
            <td>Earth, Wind, and Fire</td>
            <td>1975</td>
          </tr>
        </tbody>
      </table>
      <div role="grid" className="outline-none">
        <div role="presentation" className="t-[64px] sticky h-[36px]">
          <div role="row" className="grid ">
            haha
          </div>
        </div>
        <div role="presentation">
          <div role="row">hihi</div>
        </div>
      </div> */}
      <div
        // onClick={() => onClick(data.id)}
        className="group relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-lg px-5 py-2 text-neutral-500 transition lg:space-x-4"
      >
        <div className="lg:w-100 min-w-90 flex items-center gap-x-4 lg:gap-x-8">
          <p>#</p>
          <p className="w-40">Title</p>
        </div>
        <p className="w-40 truncate">Album</p>
        <div className="flex justify-around gap-x-4 px-4">
          <HiOutlineClock />

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

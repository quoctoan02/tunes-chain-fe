"use client"

import { Song } from "@/types/song.type"
import SongItem from "./song-item"

interface ListSongProps {
  songs: Partial<Song>[]
}

const ListSong: React.FC<ListSongProps> = ({ songs }) => {
  // const onPlay = useOnPlay(songs);

  if (songs.length === 0) {
    return <div className="mt-4 text-neutral-400">No songs available.</div>
  }

  return (
    <div className="mt-4 flex">
      <table className="table-fixed">
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

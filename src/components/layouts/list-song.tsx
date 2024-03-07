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
      <table>
        <tr>
          <th className="">#</th>
          <th className="min-w-[100px]">Title</th>
          <th className="">Album</th>
        </tr>
        <tr>
          <td>hehe</td>
          <td>hehe</td>
          <td>hehe</td>
        </tr>
      </table>
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

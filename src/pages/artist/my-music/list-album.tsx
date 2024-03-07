import MediaItem from "@/components/layouts/media-item"
import { IMediaItem } from "@/types/media.type"
import React from "react"
interface ListAlbumProps {
  albums: Partial<IMediaItem>[]
}
const ListAlbum: React.FC<ListAlbumProps> = ({ albums }) => {
  if (albums.length === 0) {
    return <div className="mt-4 text-neutral-400">No media available.</div>
  }
  return (
    <div>
      {" "}
      <div
        className="
        mt-4 
        grid 
        grid-cols-2 
        gap-4 
        sm:grid-cols-3 
        md:grid-cols-3 
        lg:grid-cols-4 
        xl:grid-cols-5 
        2xl:grid-cols-8
      "
      >
        {albums.map((item) => (
          <MediaItem
            //     onClick={(id: string) => onPlay(id)}
            key={item.id}
            data={item}
          />
        ))}
      </div>
    </div>
  )
}

export default ListAlbum

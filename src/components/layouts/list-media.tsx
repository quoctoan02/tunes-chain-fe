"use client"

import MediaItem from "./media-item"
import { IMediaItem } from "@/types/media.type"

interface ListMediaProps {
  medias: Partial<IMediaItem>[]
}

const ListMedia: React.FC<ListMediaProps> = ({ medias }) => {
  // const onPlay = useOnPlay(songs);

  if (medias.length === 0) {
    return <div className="mt-4 text-neutral-400">No media available.</div>
  }

  return (
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
      {medias.map((item) => (
        <MediaItem
          //     onClick={(id: string) => onPlay(id)}
          key={item.id}
          data={item}
        />
      ))}
    </div>
  )
}

export default ListMedia

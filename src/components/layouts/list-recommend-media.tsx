"use client"

import MediaItem from "./media-item"
import { IMediaItem } from "@/types/media.type"
import RecommendMediaItem from "./recommend-media-item"

interface ListRecommendMediaProps {
  medias: Partial<IMediaItem>[]
}

const ListRecommendMedia: React.FC<ListRecommendMediaProps> = ({ medias }) => {
  // const onPlay = useOnPlay(songs);

  if (medias.length === 0) {
    return <div className="mt-4 text-neutral-400">No media available.</div>
  }

  return (
    <div
      className="
              mt-4 
              grid 
              grid-cols-1 
              gap-3 
              sm:grid-cols-2 
              xl:grid-cols-3 
              2xl:grid-cols-4
            "
    >
      {medias.map((item) => (
        <RecommendMediaItem key={item.id} data={item} />
      ))}
    </div>
  )
}

export default ListRecommendMedia

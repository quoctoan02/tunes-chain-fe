import ListSong from "@/components/layouts/list-song"
import MediaBar from "@/components/layouts/media-bar"
import { useChangeBgColor } from "@/hooks/render/use-change-bg-color"
import { IMediaItem } from "@/types/media.type"
import { Song } from "@/types/song.type"
import { useParams, useSearchParams } from "react-router-dom"

export const revalidate = 0

const songs: Partial<Song>[] = [
  {
    id: 1,
    artists: [{ id: 1, name: "Phan manh quynh" }],
    name: "Sau loi tu khuoc",
  },
  {
    id: 2,
    artists: [{ id: 1, name: "Phan manh quynh" }],
    name: "Sau loi tu khuoc",
  },
  {
    id: 3,
    artists: [{ id: 1, name: "Phan manh quynh" }],
    name: "Sau loi tu khuoc",
  },
]
const AlbumPage = ({ ...props }) => {
  const { id } = useParams()
  console.log(id)
  // const songs = await getLikedSongs();
  useChangeBgColor()
  return (
    <>
      <div className="mt-20">
        <div
          className="
              flex 
              flex-col 
              items-center 
              gap-x-5 
              md:flex-row
            "
        >
          <div className="relative h-32 w-32 lg:h-44 lg:w-44">
            <img
              className=" absolute inset-0 h-full w-full rounded-md object-cover"
              src="/images/default/liked.png"
              alt="Playlist"
            />
          </div>
          <div className="mt-4 flex flex-col gap-y-2 md:mt-0">
            <p className="hidden text-sm font-semibold md:block">Playlist</p>
            <h1
              className="
                  text-4xl 
                  font-bold 
                  text-white 
                  sm:text-5xl 
                  lg:text-7xl
                "
            >
              Liked Songs
            </h1>
          </div>
        </div>
        <MediaBar />
        <ListSong songs={songs} />
      </div>
      {/* <LikedContent songs={songs} /> */}
    </>
  )
}

export default AlbumPage

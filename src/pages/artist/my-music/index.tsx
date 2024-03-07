import { IMediaItem } from "@/types/media.type"
import ListMedia from "@/components/layouts/list-media"
import ListSong from "@/components/layouts/list-song"

interface MyMusicPageProps {
  className?: string
}

const MyMusicPage: React.FC<MyMusicPageProps> = ({ className }) => {
  // const songs = await getSongs();
  const songs: Partial<IMediaItem>[] = [
    {
      id: 1,
      artist: "Phan manh quynh",
      title: "Sau loi tu khuoc",
      image: "/images/default/liked.png",
    },
    {
      id: 2,
      artist: "Phan manh quynh",
      title: "Sau loi tu khuoc",
      image: "/images/default/liked.png",
    },
    {
      id: 3,
      artist: "Phan manh quynh",
      title: "Sau loi tu khuoc",
      image: "/images/default/liked.png",
    },
  ]
  return (
    <>
      <div className="mb-6 mt-3">
        <h1
          className="
            text-3xl 
              font-semibold 
              text-white
            "
        >
          Your albums
        </h1>
        <ListMedia medias={songs} />
      </div>

      <div className="flex flex-col">
        <h1 className="text-3xl font-semibold text-white">Your songs</h1>
        <ListSong songs={songs} />
      </div>
    </>
  )
}

export default MyMusicPage

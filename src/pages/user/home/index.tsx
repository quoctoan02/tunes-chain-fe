import { twMerge } from "tailwind-merge"
import ListSong from "./list-media"
import { Song } from "@/types/song.type"
import Center from "@/components/layouts/center"

interface HomePageProps {
  className?: string
}

const HomePage: React.FC<HomePageProps> = ({ className }) => {
  // const songs = await getSongs();
  const songs: Partial<Song>[] = [
    {
      id: 1,
      artist: "Phan manh quynh",
      title: "Sau loi tu khuoc",
    },
    {
      id: 2,
      artist: "Phan manh quynh",
      title: "Sau loi tu khuoc",
    },
    {
      id: 3,
      artist: "Phan manh quynh",
      title: "Sau loi tu khuoc",
    },
  ]
  return (
    // <div
    //   className="
    //     h-full 
    //     w-full 
    //     overflow-hidden 
    //     overflow-y-auto 
    //     rounded-lg 
    //     bg-neutral-900
    //   "
    // >
    //   <Center>
    <>
        <div className="mb-2">
          <h1
            className="
            text-3xl 
              font-semibold 
              text-white
            "
          >
            Welcome back
          </h1>
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
            {/* <ListItem name="Liked Songs" image="/images/liked.png" href="liked" /> */}
          </div>
        </div>
        <div className="mb-7 mt-2 px-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-white">Newest songs</h1>
          </div>
          <ListSong songs={songs} />
        </div>
</>
    //   </Center>
    // </div>
  )
}

export default HomePage

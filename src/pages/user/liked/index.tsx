import Header from "@/components/layouts/header"

export const revalidate = 0

const LikedSongsPage = () => {
  // const songs = await getLikedSongs();

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
              className="absolute inset-0 h-full w-full object-cover"
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
      </div>
      {/* <LikedContent songs={songs} /> */}
    </>
  )
}

export default LikedSongsPage

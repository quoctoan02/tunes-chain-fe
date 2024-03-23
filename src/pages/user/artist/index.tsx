import React, { useEffect, useState } from "react"
import { ChevronDownIcon, PlayIcon } from "@heroicons/react/24/outline"
import { shuffle } from "lodash"

const colors = [
  "from-indigo-500",
  "from-blue-500",
  "from-green-500",
  "from-red-500",
  "from-yellow-500",
  "from-pink-500",
  "from-purple-500",
]

// {
//   setView, globalArtistId, setGlobalArtistId, setGlobalCurrentSongId, setGlobalIsTrackPlaying
// }

const relatedArtists = [
  { id: 1, name: "Phan Manh Quynh" },
  { id: 2, name: "Toan" },
]

const artistData = {
  id: 3,
  name: "tran hang",
}
const ArtistPage = () => {
  // const { data: session } = useSession()
  const [color, setColor] = useState(colors[0])
  const [opacity, setOpacity] = useState(0)
  const [textOpacity, setTextOpacity] = useState(0)
  //  const [artistData, setArtistData] = useState(null)
  const [topTracks, setTopTracks] = useState([])
  //  const [relatedArtists, setRelatedArtists] = useState([])

  function changeOpacity(scrollPos: number) {
    // scrollPos = 0 -> opacity = 0
    // scrollPos = 300 -> opacity = 1, textOpacity = 0
    // scrollPos = 310 -> opacity = 1, textOpacity = 1
    const offset = 300
    const textOffset = 10
    if (scrollPos < offset) {
      const newOpacity = 1 - (offset - scrollPos) / offset
      setOpacity(newOpacity)
      setTextOpacity(0)
    } else {
      setOpacity(1)
      const delta = scrollPos - offset
      const newTextOpacity = 1 - (textOffset - delta) / textOffset
      setTextOpacity(newTextOpacity)
    }
  }

  // async function getArtistData() {
  //   const response = await fetch(`https://api.spotify.com/v1/artists/${globalArtistId}`, {
  //     headers: {
  //       Authorization: `Bearer ${session.accessToken}`,
  //     },
  //   })
  //   const data = await response.json()
  //   return data
  // }

  // async function getTopTracks() {
  //   const response = await fetch(
  //     `https://api.spotify.com/v1/artists/${globalArtistId}/top-tracks?` + new URLSearchParams({ market: "US" }),
  //     {
  //       headers: {
  //         Authorization: `Bearer ${session.accessToken}`,
  //       },
  //     },
  //   )
  //   const data = await response.json()
  //   return data.tracks
  // }

  // async function getRelatedArtists() {
  //   const response = await fetch(`https://api.spotify.com/v1/artists/${globalArtistId}/related-artists`, {
  //     headers: {
  //       Authorization: `Bearer ${session.accessToken}`,
  //     },
  //   })
  //   const data = await response.json()
  //   return data.artists
  // }

  // useEffect(() => {
  //   async function f() {
  //     if (session && session.accessToken) {
  //       setArtistData(await getArtistData())
  //       setTopTracks(await getTopTracks())
  //       setRelatedArtists(await getRelatedArtists())
  //     }
  //   }
  //   f()
  // }, [session, globalArtistId])

  // useEffect(() => {
  //   setColor(shuffle(colors).pop())
  // }, [globalArtistId])

  return (
    <div className="h-screen flex-grow">
      <header
        style={{ opacity: opacity }}
        className="sticky top-0 z-10 flex h-20 items-center bg-neutral-800 p-8 text-4xl font-bold text-white"
      >
        <div style={{ opacity: textOpacity }} className="flex items-center">
          {artistData && <img className="mr-6 h-8 w-8" src={"/images/default/liked.png"} />}
          <p>{artistData?.name}</p>
        </div>
      </header>
      <div
        // onClick={() => signOut()}
        className="absolute right-8 top-5 z-20 flex cursor-pointer items-center space-x-3 rounded-full bg-black bg-opacity-70 p-1 pr-2 text-white opacity-90 hover:opacity-80"
      >
        <img className="h-7 w-7 rounded-full" src={"/images/default/liked.png"} alt="profile pic" />
        <p className="text-sm">Logout</p>
        <ChevronDownIcon className="h-5 w-5" />
      </div>
      <div
        // onScroll={(e) => changeOpacity(e.target.scrollTop)}
        className="relative -top-20 h-screen overflow-y-scroll bg-neutral-900"
      >
        <section className={`flex items-end space-x-7 bg-gradient-to-b to-neutral-900 ${color} h-80 p-8 text-white`}>
          {artistData && <img className="h-44 w-44 rounded-full" src={"/images/default/liked.png"} />}
          <div>
            <p className="text-sm font-bold">Artist</p>
            <h1 className="text-2xl font-extrabold md:text-3xl lg:text-5xl">{artistData?.name}</h1>
          </div>
        </section>
        <div className="space-y-4">
          <h2 className="px-8 text-xl font-bold">Top tracks</h2>
          <div className="flex flex-col space-y-1 px-8 pb-6 text-white">
            {/* {topTracks.slice(0, 5).map((track, i) => {
              // song component
              return (
                <Song
                setView={setView}
                setGlobalArtistId={setGlobalArtistId}
                setGlobalIsTrackPlaying={setGlobalIsTrackPlaying}
                setGlobalCurrentSongId={setGlobalCurrentSongId}
                key={track.id}
                sno={i}
                track={track}
                />
              )
            })} */}
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="px-8 text-xl font-bold">Related artists</h2>
          <div className="flex flex-wrap gap-4 px-8 pb-28">
            {relatedArtists.slice(0, 4).map((artist) => {
              return (
                <div
                  // onClick={() => setGlobalArtistId(artist.id)}
                  key={artist.id}
                  className="group relative mb-2 w-56 cursor-pointer rounded-md bg-neutral-800 p-4 hover:bg-neutral-600"
                >
                  <div className="absolute right-6 top-[156px] z-10 flex h-12 w-12 items-center justify-center rounded-full bg-green-500 opacity-0 shadow-2xl shadow-neutral-900 transition-all duration-200 ease-in-out group-hover:top-[148px] group-hover:opacity-100">
                    <PlayIcon className="h-6 w-6 text-black" />
                  </div>
                  <img className="mb-4 h-48 w-48 rounded-full" src={"/images/default/liked.png"} />
                  <p className="mb-1 w-48 truncate text-base text-white">{artist.name}</p>
                  <p className="mb-8 w-48 truncate text-sm text-neutral-400">Artist</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArtistPage

// import { PlayIcon } from "@heroicons/react/24/solid"
// import { useSession } from "next-auth/react"
// import React from "react"

// const SearchResults = () => {
//   async function playSong(track) {
//     setGlobalCurrentSongId(track.id)
//     setGlobalIsTrackPlaying(true)
//     if (session && session.accessToken) {
//       const response = await fetch("https://api.spotify.com/v1/me/player/play", {
//         method: "PUT",
//         headers: {
//           Authorization: `Bearer ${session.accessToken}`,
//         },
//         body: JSON.stringify({
//           uris: [track.uri],
//         }),
//       })
//       console.log("on play", response.status)
//     }
//   }

//   // function selectPlaylist(playlist) {
//   //   setView("playlist")
//   //   setGlobalPlaylistId(playlist.id)
//   // }

//   // function selectArtist(artist) {
//   //   setView("artist")
//   //   setGlobalArtistId(artist.id)
//   // }

//   return (
//     <div className="flex h-screen flex-col gap-8 overflow-y-scroll px-8">
//       <div className="grid grid-cols-2">
//         <div className="space-y-4">
//           <h2 className="text-xl font-bold">Top result</h2>
//           <div className="h-64 pr-8">
//             <div
//               // onClick={() => selectPlaylist(playlists[0])}
//               className="group relative flex h-64 w-full cursor-pointer flex-col gap-6 rounded-md bg-neutral-800 p-4 transition duration-500 hover:bg-neutral-700"
//             >
//               <div className="absolute bottom-6 right-8 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-green-500 opacity-0 shadow-2xl shadow-neutral-900 transition-all duration-500 ease-in-out group-hover:bottom-8 group-hover:opacity-100">
//                 <PlayIcon className="h-6 w-6 text-black" />
//               </div>
//               {playlists && (
//                 <>
//                   <img className="h-28 w-28 rounded" src={playlists[0].images[0].url} />
//                   <p className="text-3xl font-bold">{playlists[0].name}</p>
//                   <p className="text-sm text-neutral-400">
//                     By {playlists[0].owner.display_name}{" "}
//                     <span className="ml-4 rounded-full bg-neutral-900 px-4 py-1 font-bold text-white">Playlist</span>
//                   </p>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//         <div className="space-y-4">
//           <h2 className="text-xl font-bold">Top songs</h2>
//           <div className="flex flex-col">
//             {songs.slice(0, 4).map((song) => {
//               return (
//                 <div
//                   onClick={() => playSong(song)}
//                   key={song.id}
//                   className="flex h-16 w-full cursor-default items-center gap-4 rounded-md px-4 hover:bg-neutral-700"
//                 >
//                   <img className="h-10 w-10" src={song.album.images[0].url} />
//                   <div>
//                     <p>{song.name}</p>
//                     <p className="text-sm text-neutral-400">{song.artists[0].name}</p>
//                   </div>
//                   <div className="flex flex-grow items-center justify-end">
//                     <p className="text-sm text-neutral-400">{millisToMinutesAndSeconds(song.duration_ms)}</p>
//                   </div>
//                 </div>
//               )
//             })}
//           </div>
//         </div>
//       </div>
//       <div className="space-y-4">
//         <h2 className="text-xl font-bold">Artists</h2>
//         <div className="flex flex-wrap gap-4">
//           {artists.slice(0, 4).map((artist) => {
//             return (
//               <div
//                 onClick={() => selectArtist(artist)}
//                 key={artist.id}
//                 className="group relative mb-2 w-56 cursor-pointer rounded-md bg-neutral-800 p-4 hover:bg-neutral-600"
//               >
//                 <div className="absolute right-6 top-[156px] z-10 flex h-12 w-12 items-center justify-center rounded-full bg-green-500 opacity-0 shadow-2xl shadow-neutral-900 transition-all duration-200 ease-in-out group-hover:top-[148px] group-hover:opacity-100">
//                   <PlayIcon className="h-6 w-6 text-black" />
//                 </div>
//                 <img className="mb-4 h-48 w-48 rounded-full" src={artist.images[0].url} />
//                 <p className="mb-1 w-48 truncate text-base text-white">{artist.name}</p>
//                 <p className="mb-8 w-48 truncate text-sm text-neutral-400">Artist</p>
//               </div>
//             )
//           })}
//         </div>
//       </div>
//       <div className="mb-48 space-y-4">
//         <h2 className="text-xl font-bold">Playlists</h2>
//         <div className="flex flex-wrap gap-4">
//           {playlists.slice(0, 4).map((playlist) => {
//             return (
//               <div
//                 onClick={() => selectPlaylist(playlist)}
//                 key={playlist.id}
//                 className="group relative mb-2 w-56 cursor-pointer rounded-md bg-neutral-800 p-4 hover:bg-neutral-600"
//               >
//                 <div className="absolute right-6 top-[156px] z-10 flex h-12 w-12 items-center justify-center rounded-full bg-green-500 opacity-0 shadow-2xl shadow-neutral-900 transition-all duration-200 ease-in-out group-hover:top-[148px] group-hover:opacity-100">
//                   <PlayIcon className="h-6 w-6 text-black" />
//                 </div>
//                 <img className="mb-4 h-48 w-48" src={playlist.images[0].url} />
//                 <p className="mb-1 w-48 truncate text-base text-white">{playlist.name}</p>
//                 <p className="mb-8 w-48 truncate text-sm text-neutral-400">By {playlist.owner.display_name}</p>
//               </div>
//             )
//           })}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default SearchResults

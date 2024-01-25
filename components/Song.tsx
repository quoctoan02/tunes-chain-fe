import React from 'react'
import Image
 from 'next/image'
import { convertDuration } from "../utils/convertDuration";
import useSpotify from "../hooks/useSpotify";
import { useSongContext } from "../contexts/SongContext";
import { SongReducerActionType } from "../types";
import { usePlaylistContext } from "../contexts/PlaylistContext";
interface Props {
  item: SpotifyApi.PlaylistTrackObject;
  itemIndex: number;
}
const Song = ({ item, itemIndex }: Props) => {
  const spotifyApi = useSpotify();

  const {
    songContextState: { selectedSong, deviceId },
    dispatchSongAction,
  } = useSongContext();

  const {
    playlistContextState: { selectedPlaylist },
  } = usePlaylistContext();
  const playSong = async () => {
    if (!deviceId) return;

    dispatchSongAction({
      type: SongReducerActionType.SetCurrentPlayingSong,
      payload: {
        selectedSong: item.track,
        selectedSongId: item.track?.id,
        isPlaying: true,
      },
    });

    await spotifyApi.play({
      device_id: deviceId,
      context_uri: selectedPlaylist?.uri,
      offset: {
        uri: item.track?.uri as string,
      },
    });
  };
  return (
    <div
      className="grid grid-cols-2 text-gray-500 px-5 py-4 hover:bg-gray-900 rounded-lg cursor-pointer"
      onClick={playSong}
    >
      <div className="flex items-center space-x-4">
        <p>{itemIndex + 1}</p>
        <div>
          <Image
            src={item.track?.album?.images[0]?.url || ""}
            alt="track cover"
            height={"40px"}
            width={"40px"}
          />
        </div>
        <p className="w-36 lg:w-72 truncate text-white"> {item.track?.name}</p>
        <p className="w-40"> {item.track?.artists[0].name}</p>
      </div>
      <div className="flex justify-between items-center ml-auto md:ml-0">
        <p className="hidden md:block w-40">{item.track?.album.name}</p>
        <p>{convertDuration(item.track?.duration_ms as number)}</p>
      </div>
    </div>
  );
};

export default Song
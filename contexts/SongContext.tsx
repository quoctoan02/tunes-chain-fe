import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import {
  ISongContext,
  SongContextState,
  SongReducerActionType,
} from "../types";
import useSpotify from "../hooks/useSpotify";
import { useSession } from "next-auth/react";
import { songReducer } from "../reducers/songReducer";
import { access } from "fs";

const defaultSongContextState: SongContextState = {
  selectedSongId: undefined,
  selectedSong: null,
  isPlaying: false,
  volume: 50,
  deviceId: null,
};

export const SongContext = createContext<ISongContext>({
  songContextState: defaultSongContextState,
  dispatchSongAction: () => {},
});

export const useSongContext = () => useContext(SongContext);

const SongContextProvider = ({ children }: { children: ReactNode }) => {
  const spotifyApi = useSpotify();

  const { data: session } = useSession();

  const [songContextState, dispatchSongAction] = useReducer(
    songReducer,
    defaultSongContextState
  );
  const songContextProviderData: ISongContext = {
    songContextState,
    dispatchSongAction,
  };

  useEffect(() => {
    const setCurrentDevice = async () => {
      const availableDeviceResponse = await spotifyApi.getMyDevices();

      if (!availableDeviceResponse.body.devices.length) return;

      const { id: deviceId, volume_percent } =
        availableDeviceResponse.body.devices[0];

      dispatchSongAction({
        type: SongReducerActionType.SetDevice,
        payload: {
          deviceId,
          volume: volume_percent as number,
        },
      });

      await spotifyApi.transferMyPlayback([deviceId as string]);
    };
    if (spotifyApi.getAccessToken()) setCurrentDevice();
  }, [spotifyApi, session]);

  useEffect(() => {
    const getCurrentPlayingSong = async () => {
      const songInfo = await spotifyApi.getMyCurrentPlayingTrack();

      if (!songInfo.body) return;
      console.log("🚀 ~ getCurrentPlayingSong ~ songInfo.body:", songInfo.body);

      dispatchSongAction({
        type: SongReducerActionType.SetCurrentPlayingSong,
        payload: {
          selectedSong: songInfo.body.item as SpotifyApi.TrackObjectFull,
          selectedSongId: songInfo.body.item?.id,
          isPlaying: songInfo.body.is_playing,
        },
      });
    };
    if (spotifyApi.getAccessToken()) getCurrentPlayingSong();
  }, [spotifyApi, session]);

  return (
    <SongContext.Provider value={songContextProviderData}>
      {children}
    </SongContext.Provider>
  );
};
export default SongContextProvider;

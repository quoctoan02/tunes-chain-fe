import { useSession } from 'next-auth/react'
import {
	createContext,
	useContext,
	ReactNode,
	useState,
	useEffect
} from 'react'
import useSpotify from '../hooks/useSpotify'

import { IPlaylistContext, PlaylistContextState } from '../types'

const defaultPlaylistContextState: PlaylistContextState = {
	playlists: [],
	selectedPlaylistId: null,
	selectedPlaylist: null
}

export const PlaylistContext = createContext<IPlaylistContext>({
	playlistContextState: defaultPlaylistContextState,
	updatePlaylistContextState: () => {}
})

export const usePlaylistContext = () => useContext(PlaylistContext)

const PlaylistContextProvider = ({ children }: { children: ReactNode }) => {
	const spotifyApi = useSpotify()
	const { data: session } = useSession()

	const [playlistContextState, setPlaylistContextState] = useState(
		defaultPlaylistContextState
	)

	const updatePlaylistContextState = (
		updatedObj: Partial<PlaylistContextState>
	) => {
		setPlaylistContextState(previousPlaylistContextState => ({
			...previousPlaylistContextState,
			...updatedObj
		}))
	}

	useEffect(() => {
    const getUserPlaylists = async () => {
      const res = await spotifyApi.getUserPlaylists();

      if (!res.body) return;

      updatePlaylistContextState({
        playlists: res.body.items,
      });
      console.log("🚀 ~ getUserPlaylists ~ res.body.items:", res.body.items);
    };

    if (spotifyApi.getAccessToken()) {
      getUserPlaylists();
    }
  }, [spotifyApi, session]);

	const playlistContextProviderData = {
		playlistContextState,
		updatePlaylistContextState
	}

	return (
		<PlaylistContext.Provider value={playlistContextProviderData}>
			{children}
		</PlaylistContext.Provider>
	)
}

export default PlaylistContextProvider

import type { NextPage } from 'next'
import Head from 'next/head'
import Center from '../components/Center'
import Sidebar from '../components/Sidebar'
import PlaylistContextProvider from '../contexts/PlaylistContext'
import Player from '../components/Player'

const Home: NextPage = () => {
	return (
		<div className='bg-black h-screen overflow-hidden'>
			<PlaylistContextProvider>
					<Head>
						<title>Spotify 2.0</title>
						<meta name='description' content='Spotify by Henry Web Dev' />
						<link rel='icon' href='/favicon.ico' />
					</Head>

					<main className='flex'>
						<Sidebar />
						<Center />
					</main>

					<div className='sticky bottom-0 text-white'>
						<Player />
					</div>
			</PlaylistContextProvider>
		</div>
	)
}

export default Home

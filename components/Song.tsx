import React from 'react'
import Image
 from 'next/image'
interface Props {
  item: SpotifyApi.PlaylistTrackObject,
  itemIndex: number
}
const Song = ({item, itemIndex}: Props) => {
  return (
    <div className='grid grid-cols-2 text-gray-500 px-5 py-4 hover:bg-gray-900 rounded-lg cursor-pointer'>
      <div className='flex items-center space-x-4'>
<p>{itemIndex+1}</p>
<div>
  <Image src={item.track?.album?.images[0]?.url || ''} alt='track cover' height={"40px"} width={"40px"}/>
</div>
<p className='w-36 lg:w-72 truncate text-white'> {item.track?.name}</p>
<p className='w-40'> {item.track?.artists[0].name}</p>
      </div>
      <div className='flex justify-between items-center ml-auto md:ml-0'>
        <p className='hidden md:block w-40'>{item.track?.album.name}</p>
        <p>{item.track?.duration_ms}</p>
      </div>
    </div>
  )
}

export default Song
export interface PlaylistItem {
  id?: number
  type: MediaType
  title: string
  creator: string
  image: string
}
export interface AlbumItem {
  id?: number
  name: string
  type: MediaType
  artist_name: string
  image: string
}
export interface ArtistItem {
  id?: number
  name: string
  avatar: string
  background: string
  type: MediaType
  genres: string
}

export interface IMediaItem extends AlbumItem, PlaylistItem, ArtistItem {}

export enum MediaType {
  Playlist = "Playlist",
  Album = "Album",
  Artist = "Artist",
  LikedSongs = "LikedSongs",
  Song = "Song",
}

export enum MediaFileType {
  Image = "Image",
  Audio = "Audio",
  Video = "Video",
}

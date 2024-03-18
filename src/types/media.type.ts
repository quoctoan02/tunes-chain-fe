export interface PlaylistItem {
  id?: number
  type: MediaType
  title: string
  creator: string
  image: string
}
export interface AlbumItem {
  id?: number
  type: MediaType
  title: string
  artist: string
  image: string
}

export interface IMediaItem extends AlbumItem, PlaylistItem {}

export enum MediaType {
  Playlist = "Playlist",
  Albums = "Albums",
  Artist = "Artists",
  LikedSongs = "LikedSongs",
}

export enum MediaFileType {
  Image = "Image",
  Audio = "Audio",
  Video = "Video",
}
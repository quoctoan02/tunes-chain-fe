export interface IMediaItem {
  id?: number;
  type: MediaType;
  title: string;
  creator: string;
}

export enum MediaType {
  Playlist = "Playlist",
  Albums = "Albums",
  Artist = "Artists",
  LikedSongs = "LikedSongs",
}
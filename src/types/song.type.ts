export interface Song {
  id: number;
  album_id: number;
  artist: string;
  title: string;
  url: string;
  thumbnail: string;
}

export enum SliderType {
  Player = "Player",
  Volume = "Volume",
}
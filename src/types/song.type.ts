export interface Song {
  id: number
  album_id: number
  artist: string
  title: string
  image: string
  thumbnail: string
  name: string
}

export enum SliderType {
  Player = "Player",
  Volume = "Volume",
}
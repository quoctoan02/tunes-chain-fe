import { ArtistItem } from "./media.type"

export interface Song {
  id: number
  album_id: number
  artists: Partial<ArtistItem>[]
  image: string
  thumbnail: string
  name: string
}

export enum SliderType {
  Player = "Player",
  Volume = "Volume",
}

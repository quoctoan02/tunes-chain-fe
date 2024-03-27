import { Address, WalletClient } from "wagmi"

export interface UserInfo {
  id?: number
  address?: Address
  email?: string
  name?: string
  avatar?: string
  type?: number
  status?: number
  lastActive?: string
  createdTime?: string
  updatedTime?: string
  token?: string
}
export interface ArtistInfo {
  id?: number
  address?: Address
  email?: string
  name?: string
  avatar?: string
  background?: string
  genres?: string[]
  type?: number
  status?: number
  createdTime?: string
  updatedTime?: string
  token?: string
}

export interface SignupData {
  email: string
  name: string
  avatar: string
  background?: string
  genres: string[]
  password: string
}
export interface User extends UserInfo {
  login(walletClient: WalletClient): Promise<boolean>
  logout(): void
  refreshUserInfo(): Promise<void>
  reset(): void
}
export interface Artist extends ArtistInfo {
  loginEmail(email: string, password: string): Promise<boolean>
  signup(data: SignupData): Promise<boolean>
  logout(): void
  refreshArtistInfo(): Promise<void>
  reset(): void
}

export enum Role {
  Admin = "admin",
  Artist = "artist",
  User = "user",
}

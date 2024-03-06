import { Address, WalletClient } from "wagmi"

export interface UserInfo {
  id?: number
  address?: Address
  email?: string
  name?: string
  username?: string
  fullName?: string
  avatar?: string
  mobile?: string
  ref?: string
  type?: number
  status?: number
  lastActive?: string
  createdTime?: string
  updatedTime?: string
  token?: string
}

export interface User extends UserInfo {
  login(walletClient: WalletClient): Promise<boolean>
  logout(): void
  refreshUserInfo(): void
  reset(): void
}

export enum Role {
  Admin = "admin",
  Artist = "artist",
  User = "user",
}

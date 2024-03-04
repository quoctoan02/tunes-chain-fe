import { Address } from "viem"

export interface ERC20TokenInfo {
  address: Address
  symbol: string
  decimals: number
  image?: string
}

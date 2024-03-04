import { Address } from "viem"
import { base, baseGoerli } from "wagmi/chains"

export const AddressZero = "0x0000000000000000000000000000000000000000" as Address

export const CONTRACTS = {
  MULTICALL: {
    [baseGoerli.id]: AddressZero,
    [base.id]: AddressZero,
  },
}

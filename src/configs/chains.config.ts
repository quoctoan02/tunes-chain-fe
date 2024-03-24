import { Chain } from "wagmi"
import { base, baseGoerli, bsc, bscTestnet, fantom, fantomTestnet, mainnet } from "wagmi/chains"

import { ENV, Env } from "./env.config"

const onusTestnet: Chain = {
  id: 1945,
  name: "ONUS Testnet Chain",
  network: "onus-testnet",
  nativeCurrency: {
    decimals: 18,
    name: "ONUS",
    symbol: "tONUS",
  },
  rpcUrls: {
    default: {
      http: ["https://rpc-test.onuschain.io/"],
    },
    public: {
      http: ["https://rpc-test.onuschain.io/"],
    },
  },
  blockExplorers: {
    etherscan: {
      name: "OnusScan",
      url: "https://explorer-testnet.onuschain.io",
    },
    default: {
      name: "OnusScan",
      url: "https://explorer-testnet.onuschain.io",
    },
  },
  testnet: true,
}

const ChainConfig = <const>{
  [Env.development]: onusTestnet,
  [Env.staging]: base,
  [Env.production]: base,
}

const supportedChainsConfig = {
  [Env.development]: [onusTestnet, bscTestnet],
  [Env.staging]: [baseGoerli, base, mainnet, bsc, bscTestnet, fantom, fantomTestnet],
  [Env.production]: [base],
}

export const supportedChains: Chain[] = supportedChainsConfig[ENV]

export const defaultChain = ChainConfig[ENV]

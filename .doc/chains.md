# Chain configs

1. ONUS Testnet

```
export const onusTestnet: Chain = {
  id: 1945,
  name: "ONUS Chain Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "ONUS",
    symbol: "ONUS",
  },
  network: "onus",
  rpcUrls: {
    default: {
      http: ["https://rpc-test.onuschain.io/"],
    },
    public: {
      http: ["https://rpc-test.onuschain.io/"],
    },
  },
  blockExplorers: {
    default: {
      url: "https://explorer-testnet.onuschain.io/",
      name: "ONUS Chain Testnet Explorer",
    },
  },
  testnet: false,
}
```

2. ONUS Mainnet

```
export const onus: Chain = {
    id: 1975,
    name: "ONUS Chain Mainnet",
    nativeCurrency: {
        decimals: 18,
        name: "ONUS",
        symbol: "ONUS",
    },
    network: "onus-testnet",
    rpcUrls: {
        default: {
        http: ["https://rpc.onuschain.io/"],
        },
        public: {
        http: ["https://rpc.onuschain.io/"],
        },
    },
    blockExplorers: {
        default: {
        url: "https://explorer.onuschain.io/",
        name: "ONUS Chain Explorer",
        },
    },
    testnet: false,
}
```

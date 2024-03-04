export const storagePrefix = "persited" as const

export const storageKeyConfigs = {
  appSettings: "app-settings",
  user: "user",
  client: "client",
  tokens: "tokens",
}

export const storageKeys = Object.keys(storageKeyConfigs).reduce((prev, cur) => {
  return {
    ...prev,
    [cur]: `${storagePrefix}__${storageKeyConfigs[cur as keyof typeof storageKeyConfigs]}`,
  }
}, {}) as typeof storageKeyConfigs

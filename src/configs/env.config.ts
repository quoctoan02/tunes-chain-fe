export enum Env {
  development = "development",
  staging = "staging",
  production = "production",
}

export const supportedEnvs = [Env.development, Env.staging, Env.production]

export const ENV: Env =
  supportedEnvs.find((supportedEnv) => supportedEnv === import.meta.env.VITE_ENV) || Env.development

export const isProduction = ENV === Env.production

export const SHOW_OPTIONS_DEV = Boolean(import.meta.env.VITE_SHOW_OPTIONS_DEV)

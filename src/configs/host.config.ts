import { ENV, Env } from "./env.config"

const HOSTS = <const>{
  [Env.development]: "",
  [Env.staging]: "",
  [Env.production]: "",
}

export const HOST = HOSTS[ENV]

import { ReactNode } from "react"

export interface BaseRoute {
  label: ReactNode
  to: string
  icon?: ReactNode
  isEnd?: boolean
  isComingSoon?: boolean
  isExternalLink?: boolean
  isLoginRequired?: boolean
  childrens?: BaseRoute[]
}

export type Theme = "dark" | "light"

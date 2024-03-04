import { apply } from "../utils"

const base = apply(" transition-all")

const states = {
  // "&:hover": apply("shadow shadow-default"),
  // "&:focus, &:focus-within, &:focus-visible": apply("ring ring-primary/50 border-primary outline-none"),
  // "&:disabled": apply("opacity-50 saturate-50 cursor-not-allowed"),
}

const textarea = {
  "&-textarea": apply("py-3"),
}

const sizes = {
  "&-xs": apply("h-6 text-xs"),
  "&-sm": apply("h-8 text-sm"),
  "&-md": apply("h-10"),
  "&-lg": apply("h-12 text-lg"),
}

const variants = {
  "&-filled": apply("bg-default"),
  "&-outlined": apply("bg-transparent border border-muted"),
}

export const input = {
  ".input": {
    ...base,
    ...states,
    ...textarea,
    ...sizes,
    ...variants,
  },
}

// Input group

export const inputGroup = {
  // Group
  ".input-group": {
    ...apply("inline-flex items-center overflow-hidden cursor-pointer"),
    input: apply("w-full h-full bg-transparent border-transparent focus:outline-none focus:ring-transparent"),
    "&-disabled": {
      ...apply("cursor-not-allowed opacity-50 saturate-50"),
      input: apply("cursor-not-allowed"),
    },
    "&-prefix": apply("pr-3"),
    "&-subfix": apply("pl-3"),
    "&-addon-before": {
      ...apply("-ml-3 mr-3"),
      "*": apply("rounded-none"),
    },
    "&-addon-after": {
      ...apply("-mr-3 ml-3"),
      "*": apply("rounded-none"),
    },
  },
}

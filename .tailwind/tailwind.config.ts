import { Config } from "tailwindcss"

import dynamicColors from "./colors"
import { tailwindExtend } from "./tailwind-extend"

const config: Config = {
  corePlugins: {
    preflight: false,
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: tailwindExtend,
  },
  plugins: [
    require("@bonehub/tailwind-dynamic-colors")(dynamicColors),
    require("tailwind-scrollbar")({ nocompatible: true }),
    require("tailwindcss-animate"),
    require("./base"),
    require("./antd"),
    require("./legacy"),
  ],
}

export default config

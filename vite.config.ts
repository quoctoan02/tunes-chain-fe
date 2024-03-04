import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"
import { default as viteTsConfigPaths } from "vite-tsconfig-paths"
//
// import mkcert from "vite-plugin-mkcert"

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [
      react(),
      viteTsConfigPaths(),
      // mkcert config: upgrade http to https
      // mkcert(),
      // vitePluginRadar({
      //   analytics: {
      //     id: loadEnv(mode, process.cwd()).VITE_GA_ID,
      //   },
      //   enableDev: true,
      // }),
    ],

    server: {
      // https: true,
      host: true,
      port: 3000,
    },
    css: {
      modules: {
        localsConvention: "camelCaseOnly",
        generateScopedName: "[name]__[local]___[hash:base64:5]",
        hashPrefix: "prefix",
      },
    },
  }
})

// <script src="https://www.googletagmanager.com/gtag/js?id=Google Analytics" async=""></script>

import { fileURLToPath, URL } from 'node:url'

import {defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import { esbuildCommonjs } from '@originjs/vite-plugin-commonjs'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = {...process.env, ...loadEnv(mode, process.cwd())}

  return {
    // root: path.join(__dirname, "./"),
    // build: {
    //   outDir: path.join(__dirname, "dist"),
    //   // rollupOptions: {
    //   //   input: glob.sync(path.resolve(__dirname, "src", "*.html")),
    //   // },
    // },
    base: env.VITE_BASE_REF || '/',
    plugins: [
      vue(),
    ],
    define: env,
    optimizeDeps:{
      esbuildOptions:{
        plugins:[
          esbuildCommonjs(['stringformat', 'nested-property'])
        ]
      }
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      }
    }
  }
})

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/mikemel21.github.io/",
  // base: "/",
  plugins: [vue()],
})

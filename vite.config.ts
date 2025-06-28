import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base:'/action-machine/',
  esbuild:{
    target: 'es2015',
  },
  plugins: [vue()],
})

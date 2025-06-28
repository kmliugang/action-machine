import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'

// https://vite.dev/config/
export default defineConfig(({mode})=>({
  base:mode === 'production' ? '/action-machine/' : '/',
  plugins: [vue(),
    legacy({
      targets: ['defaults', 'not IE 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime']
    })
  ],
  build:{
    target: 'es2015',
  }
}))
